'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function NetworkBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── Renderer ─────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0) // transparent. Let the background image show through
    mount.appendChild(renderer.domElement)

    // ── Scene & Camera ────────────────────────────────────────────────
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      200
    )
    camera.position.set(0, 4, 28)
    camera.lookAt(0, 0, 0)

    // ── Build the wave-surface plexus ─────────────────────────────────
    // Matches the invitation: a curved wave-plane of connected dots in
    // the center of the frame with extra scattered particles in space.

    const COLS = 28
    const ROWS = 14
    const TOTAL = COLS * ROWS
    const SPREAD_X = 50
    const SPREAD_Z = 30

    const nodePositions: THREE.Vector3[] = []

    // Wave-surface grid (the main plexus sheet)
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const x = ((col / (COLS - 1)) - 0.5) * SPREAD_X
        const z = ((row / (ROWS - 1)) - 0.5) * SPREAD_Z - 2
        // Wave equation — mimics the undulating bowl/ribbon in the invitation
        const y =
          Math.sin(x * 0.12) * 3.5 +
          Math.sin(z * 0.25) * 1.5 +
          Math.cos((x * 0.06) + (z * 0.1)) * 2 -
          3  // shift slightly down
        nodePositions.push(new THREE.Vector3(x, y, z))
      }
    }

    // Extra floating particles scattered in the space around the plane
    const EXTRA = 80
    for (let i = 0; i < EXTRA; i++) {
      nodePositions.push(new THREE.Vector3(
        (Math.random() - 0.5) * 55,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 35 - 2
      ))
    }

    const ALL = nodePositions.length

    // ── Particle dots ─────────────────────────────────────────────────
    const ptPositions = new Float32Array(ALL * 3)
    nodePositions.forEach((v, i) => {
      ptPositions[i * 3]     = v.x
      ptPositions[i * 3 + 1] = v.y
      ptPositions[i * 3 + 2] = v.z
    })

    const ptGeo = new THREE.BufferGeometry()
    ptGeo.setAttribute('position', new THREE.BufferAttribute(ptPositions, 3))

    const ptMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.22,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
    })
    const points = new THREE.Points(ptGeo, ptMat)
    scene.add(points)

    // ── Connection lines (wave grid + nearby extras) ──────────────────
    const linePts: number[] = []
    const MAX_DIST_GRID = 3.5   // connect grid neighbours
    const MAX_DIST_EXTRA = 5.5  // connect extras to nearby nodes

    for (let i = 0; i < ALL; i++) {
      const a = nodePositions[i]
      for (let j = i + 1; j < ALL; j++) {
        const b = nodePositions[j]
        const d = a.distanceTo(b)
        const threshold = i < TOTAL && j < TOTAL ? MAX_DIST_GRID : MAX_DIST_EXTRA
        if (d < threshold) {
          linePts.push(a.x, a.y, a.z, b.x, b.y, b.z)
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePts), 3))
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xadd8f7,   // light blue-white, like the invitation lines
      transparent: true,
      opacity: 0.22,
    })
    scene.add(new THREE.LineSegments(lineGeo, lineMat))

    // ── Glow nodes (bright white dots at intersections) ───────────────
    // Pick ~20 random grid nodes to be "bright intersection" glows
    const glowGroup = new THREE.Group()
    const glowIndices = new Set<number>()
    while (glowIndices.size < 22) {
      glowIndices.add(Math.floor(Math.random() * TOTAL))
    }

    glowIndices.forEach(idx => {
      const pos = nodePositions[idx]
      const isYellow = Math.random() > 0.72  // some golden nodes like the invitation

      const coreColor  = isYellow ? 0xfde68a : 0xffffff
      const glowColor  = isYellow ? 0xfbbf24 : 0x93c5fd

      // Core
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 12, 12),
        new THREE.MeshBasicMaterial({ color: coreColor, transparent: true, opacity: 1 })
      )
      core.position.copy(pos)
      glowGroup.add(core)

      // Inner glow
      const g1 = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 12, 12),
        new THREE.MeshBasicMaterial({ color: glowColor, transparent: true, opacity: 0.18, depthWrite: false })
      )
      g1.position.copy(pos)
      glowGroup.add(g1)

      // Outer glow
      const g2 = new THREE.Mesh(
        new THREE.SphereGeometry(1.1, 12, 12),
        new THREE.MeshBasicMaterial({ color: glowColor, transparent: true, opacity: 0.06, depthWrite: false })
      )
      g2.position.copy(pos)
      glowGroup.add(g2)
    })
    scene.add(glowGroup)

    // ── Animation ─────────────────────────────────────────────────────
    let animId: number
    let t = 0

    const animate = () => {
      animId = requestAnimationFrame(animate)
      t += 0.004

      // Gentle slow rotation — just like the invitation feels
      scene.rotation.y = Math.sin(t * 0.25) * 0.08
      scene.rotation.x = Math.sin(t * 0.15) * 0.025

      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ────────────────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div
      className="fixed inset-0 w-full h-screen -z-10 overflow-hidden"
      style={{
        backgroundImage: 'url(/event-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark navy overlay so the text stays readable */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(4, 12, 35, 0.55)' }}
      />
      {/* Three.js plexus canvas renders on top with screen blend — lines glow over the photo */}
      <div
        ref={mountRef}
        className="absolute inset-0"
        style={{ mixBlendMode: 'screen' }}
      />
      {/* Soft centre radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 85% 50% at 50% 55%, rgba(14,74,165,0.30) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}


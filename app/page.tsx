'use client'

import { NetworkBackground } from '@/components/NetworkBackground'
import { ProgramTable } from '@/components/ProgramTable'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <NetworkBackground />

      <div className="relative z-10">
        {/* Header Section */}
        <header className="relative pt-12 pb-24 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Top Labels */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <div className="text-center">
                <p className="font-semibold text-blue-300 tracking-widest uppercase mb-2 leading-none text-5xl sm:text-6xl md:text-[80px]">
                  FICHE ÉVÉNEMENT
                </p>
                <p className="text-xl font-bold text-white mt-4 md:mt-0">Construire Ensemble | BETTER AS ONE</p>
              </div>
            </motion.div>

            {/* Logos */}
            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="w-24 h-24 relative bg-transparent" style={{ borderRadius: '0%', overflow: 'hidden' }}>
                <img
                  src="/media__1774400698705.png"
                  alt="GEP Technologies"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-2xl font-light text-slate-400">&</div>
              <div className="w-24 h-24 relative">
                <img
                  src="/media__1774401390703.png"
                  alt="Huawei"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-white mb-8 leading-tight text-balance">
                GEP Technologies & Huawei
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                  Strategic Partnership Forum 2026
                </span>
              </h1>
            </motion.div>

            {/* Event Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="flex items-center gap-2 justify-center">
                <span className="text-red-500 text-2xl">📍</span>
                <p className="text-lg text-slate-300">Sheraton Club des Pins</p>
              </div>
              <p className="text-slate-400">26 Mars 2026 à 8h</p>
            </motion.div>
          </div>
        </header>

        {/* Program Section */}
        <section className="relative py-20 px-4 sm:px-8 bg-gradient-to-b from-slate-900/50 to-slate-900/80">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Programme Détaillé</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/10 rounded-lg p-6 sm:p-8"
            >
              <ProgramTable />
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative mt-20 py-8 px-4 sm:px-8 border-t border-slate-700">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-sm text-slate-400">
            <span>GEP-Technologies</span>
            <span>©</span>
            <span>2026</span>
          </div>
        </footer>
      </div>
    </main>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GEP & Huawei Forum 2026',
  description: 'Strategic Partnership Forum - Event Details',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

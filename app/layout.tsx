import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Module Demo',
  description: 'Demo application for game module',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

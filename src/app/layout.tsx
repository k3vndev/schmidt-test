import type { Metadata } from 'next'
import { FONT_VARIABLES } from '@/consts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Schmidt & Partner — Simplifying success globally',
  description: 'Simplifying success globally'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${FONT_VARIABLES} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}

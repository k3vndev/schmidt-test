import type { Metadata } from 'next'
import { AppHeader } from '@/components/header/AppHeader'
import { FONT_VARIABLES } from '@/consts'
import './globals.css'
import { AppFooter } from '@/components/footer/AppFooter'

export const metadata: Metadata = {
  title: 'Schmidt & Partner — Simplifying success globally',
  description: 'Simplifying success globally',
  icons: '/app-icon.png'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${FONT_VARIABLES} antialiased overflow-x-hidden min-h-screen h-screen`}>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  )
}

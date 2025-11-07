import { Baskervville, Geist, Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google'

// Constants

// Fonts
const baskervville = Baskervville({
  variable: '--font-baskervville',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  weight: ['200', '200', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const FONT_VARIABLES = [baskervville, plusJakartaSans, geistSans, geistMono]
  .map(font => font.variable)
  .join(' ')

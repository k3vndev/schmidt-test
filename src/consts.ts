import { Baskervville, Plus_Jakarta_Sans } from 'next/font/google'

// Fonts
const baskervville = Baskervville({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['200', '200', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export const FONTS = {
  BASKER: baskervville.className,
  PLUS: plusJakartaSans.className
}

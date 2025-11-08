import { Baskervville, Geist, Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import type { Props as PropertyType } from '@/components/properties-section/PropertyTile'

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

export const PROPERTIES: PropertyType[] = [
  {
    name: 'Residents Zabeel',
    desc: "Za'abeel, Zabeel, Dubai, United Arab Emirates",
    imgUrl: '/properties/01.webp',
    beds: 1,
    baths: 1,
    size: '598 SQ. FT',
    price: 'AED 1,800,000'
  },
  {
    name: 'DAMAC Canal Crown',
    desc: 'Canal Walk, Business Bay, Downtown Dubai',
    imgUrl: '/properties/02.webp',
    price: 'AED 1,120,000',
    beds: 3,
    baths: 4,
    size: '1,883 SQ. FT'
  },
  {
    name: 'Luxurious Apartment in Dubai Marina',
    desc: 'Dubai Marina, Dubai, UAE',
    imgUrl: '/properties/03.webp',
    beds: 1,
    baths: 2,
    size: '805 SQ. FT',
    price: 'AED 2,038,000'
  }
]

import { Baskervville, Geist, Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import type { Property as PropertyType } from '@/components/properties-section/PropertyTile'

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
    name: 'Motivated Seller | Fully Furnished  | Iconic Views',
    imgUrl:
      'https://static.shared.propertyfinder.ae/media/images/listing/01JZSQXAZYNK0Y2QXXKM1ACQHD/da538c6e-5d66-4a93-b105-7dc04c7f3b35.png',
    beds: 1,
    baths: 1,
    size: '598 SQ. FT',
    price: 'AED 915,000.00'
  },
  {
    name: 'High ROI | Elegance Of Nature | Store and Laundry',
    imgUrl:
      'https://static.shared.propertyfinder.ae/media/images/listing/01JZSQXBM3GVRZ3ABFXKPS3DPV/3988f315-e637-4899-8fe8-46432be6b5e5.jpg',
    price: 'AED 4,250,000.00',
    beds: 3,
    baths: 4,
    size: '1,883 SQ. FT'
  },
  {
    name: 'Unique Layout | Excellent Finishing | with Balcony',
    imgUrl:
      'https://static.shared.propertyfinder.ae/media/images/listing/01JZSQXBN2RXBG1YC7G2VD9GDN/29c1fe79-155e-479c-8830-321066120912.png',
    beds: 1,
    baths: 2,
    size: '805 SQ. FT',
    price: 'AED 1,100,000.00'
  }
]

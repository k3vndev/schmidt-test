import Image from 'next/image'
import { BathIcon, BedIcon, SizeIcon } from '@/icons'
import { NavButton } from './NavButton'

export interface Props {
  imgUrl: string
  name: string
  desc: string
  beds: number
  baths: number
  size: string
  price: string
}

export const PropertyTile = ({ name, imgUrl, desc, baths, beds, price, size }: Props) => (
  <article className='flex flex-col gap-5 min-w-96 w-96'>
    <header className='flex flex-col gap-px'>
      <h3 className='font-geist font-medium text-2xl tracking-tight truncate text-black/90'>{name}</h3>
      <span className='text-btn-primary-icons font-plus truncate'>
        <span className='font-plus font-bold text-accent'>For Rent</span>
        <span> in </span>
        <span>{desc}</span>
      </span>
    </header>

    <div className='flex items-center gap-4'>
      <InfoItem label={`${beds} Beds`}>
        <BedIcon />
      </InfoItem>
      <InfoItem label={`${baths} Baths`}>
        <BathIcon />
      </InfoItem>
      <InfoItem label={size}>
        <SizeIcon />
      </InfoItem>
    </div>

    <div
      className={`
        relative [&>button]:absolute [&>button]:top-1/2 [&>button]:-translate-y-1/2
        [&>button]:p-2 [&>button]:bg-white [&>button]:border-none
      `}
    >
      <Image className='w-full h-[250px] object-cover' src={imgUrl} width={512} height={512} alt={name} />

      <NavButton left className='left-4' />
      <NavButton className='right-4' />
    </div>

    <div className='flex items-center gap-2 font-plus self-end'>
      <span className='text-[#4D5157] text-sm tracking-widest'>STARTING PRICE</span>
      <span className='text-accent font-medium text-xl'>{price}</span>
    </div>
  </article>
)

interface InfoItemProps {
  children: React.ReactNode
  label: string
}

const InfoItem = ({ children, label }: InfoItemProps) => (
  <div className='flex items-center gap-2 text-btn-primary-icons'>
    {children}
    <span className='font-plus text-sm'>{label}</span>
  </div>
)

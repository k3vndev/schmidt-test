import { twMerge } from 'tailwind-merge'
import { GoogleBrandIcon } from '@/icons'
import { StarsSection } from '../StarsSection'

interface Props {
  className?: string
}

export const GoogleReviews = ({ className = '' }: Props) => (
  <div className={twMerge(`flex text-center items-center gap-4 not-lg:self-start ${className}`)}>
    <div className='flex items-center gap-2'>
      <span className='text-fore-primary font-semibold font-geist text-xl leading-0'>4.5</span>
      <StarsSection className='[&>svg]:not-lg:not-first:hidden' />
    </div>

    <small className='flex items-center gap-1.5 mt-2 font-plus'>
      <span className='text-fore-secondary font-geist tracking-normal'>+346 Reviews on</span>
      <GoogleBrandIcon className='text-fore-primary w-16 h-8' />
    </small>
  </div>
)

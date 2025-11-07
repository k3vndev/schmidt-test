import { twMerge } from 'tailwind-merge'
import { StarIcon } from '@/icons'

interface Props {
  count?: number
  className?: string
}

export const StarsSection = ({ count = 5, className = '' }: Props) => {
  const stars = Array(count).fill(0)

  return (
    <div className={twMerge(`flex items-center justify-center gap-0 ${className}`)}>
      {stars.map((_, index) => (
        <StarIcon key={index} className='text-fore-primary w-5 h-5 sm:w-6 sm:h-6' />
      ))}
    </div>
  )
}

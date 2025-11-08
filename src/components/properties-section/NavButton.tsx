import { twMerge } from 'tailwind-merge'
import { ChevronIcon } from '@/icons'

export const NavButton = ({ className = '', left = false, onClick = () => {} }) => {
  const orientation = left ? 'rotate-90' : '-rotate-90'

  return (
    <button
      className={twMerge(`
        p-4 rounded-full border border-accent *:text-accent button
        outline-2 outline-transparent hover:outline-accent
        ${className}
      `)}
      {...{ onClick }}
    >
      <ChevronIcon className={`size-5 min-w-5 ${orientation}`} />
    </button>
  )
}

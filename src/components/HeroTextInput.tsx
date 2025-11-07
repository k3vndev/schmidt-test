import { twMerge } from 'tailwind-merge'

interface Props {
  placeholder: string
  label: string
  className?: string
  slot?: React.ReactNode
}

export const HeroTextInput = ({ placeholder, label, className = '', slot }: Props) => (
  <label
    className={twMerge(`
      font-geist font-medium 
      flex flex-col gap-2 w-72 ${className}
    `)}
  >
    <span className='font-plus font-normal text-fore-secondary'>{label}</span>

    <div
      className={`
        flex gap-2 items-center border-b border-white/30 transition
        focus-within:border-fore-secondary py-2 px-1
      `}
    >
      {slot}
      <input
        className='outline-none font-light placeholder:text-fore-terciary text-fore-secondary w-full'
        placeholder={placeholder}
      />
    </div>
  </label>
)

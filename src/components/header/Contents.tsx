import { twMerge } from 'tailwind-merge'

interface Props {
  className?: string
  liStyle?: string
  items: Array<{
    label: string
    icon?: React.ReactNode
  }>
}

export const Contents = ({ className = '', items, liStyle = '' }: Props) => (
  <ul className={twMerge(`flex gap-6 items-center font-plus [&>li]:button ${className}`)}>
    {items.map(({ label, icon }, i) => (
      <li key={i} className={`flex items-center gap-1 ${liStyle}`}>
        <span>{label}</span>
        <span className='*:size-5 *:min-w-5'>{icon}</span>
      </li>
    ))}
  </ul>
)

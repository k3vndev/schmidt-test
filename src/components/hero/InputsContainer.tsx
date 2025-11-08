import { twMerge } from 'tailwind-merge'
import { ChevronIcon, DiagonalArrowIcon, EmiratesFlagIcon, MailIcon } from '@/icons'
import { GoogleReviews } from './GoogleReviews'

export const InputsContainer = () => (
  <div
    className={`
      flex not-xl:flex-col gap-x-10 gap-y-6 py-5
      items-center not-xl:w-full
    `}
  >
    <div className='flex items-center gap-4 not-xl:w-full not-lg:flex-col not-xl:py-4'>
      <TextInput label='Name' placeholder='John Doe' />
      <TextInput
        label='Email'
        placeholder='user@example.com'
        slot={<MailIcon className='text-fore-terciary size-6' />}
      />
      <TextInput
        label='Phone'
        placeholder='000 000 0000'
        slot={
          <div className='flex items-center gap-1.5'>
            <div className='size-6 min-w-6 rounded-full overflow-clip relative'>
              <EmiratesFlagIcon className='h-full absolute top-0 left-1/2 -translate-x-1/2' />
            </div>
            <span className='font-plus text-fore-terciary font-light'>+44</span>
            <ChevronIcon className='size-5 min-w-5 text-fore-terciary' />
          </div>
        }
      />
    </div>

    <button
      className={`
        bg-white flex items-center justify-center gap-2 xl:h-full not-xl:py-4 px-7
        button hover:brightness-90 not-xl:w-full w-full
      `}
    >
      <span className='text-btn-primary-text font-plus'>Claim free consultation</span>
      <DiagonalArrowIcon className='text-btn-primary-icons size-6 stroke-1' />
    </button>

    <GoogleReviews className='xl:hidden' />
  </div>
)

interface TextInputProps {
  placeholder: string
  label: string
  className?: string
  slot?: React.ReactNode
}

const TextInput = ({ placeholder, label, className = '', slot }: TextInputProps) => (
  <label
    className={twMerge(`
      font-geist font-medium 
      flex flex-col gap-2 xl:w-70 w-full ${className}
    `)}
  >
    <span className='font-plus font-normal text-fore-secondary'>{label}</span>

    <div
      className={`
        flex gap-2 items-center border-b border-white/15 transition
        focus-within:border-fore-terciary py-2 px-1
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

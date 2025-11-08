import Image from 'next/image'

export const AppLogo = () => (
  <div className='flex items-center lg:gap-5 gap-4'>
    <Image
      className='w-8 h-12'
      src='/app-icon.png'
      alt='The logo image of the app'
      width={177}
      height={256}
    />
    <div className='flex flex-col'>
      <span className='font-basker lg:text-lg sm:text-sm text-xs tracking-[0.4em]'>SCHMIDT&PARTNER</span>
      <span className='not-lg:hidden font-geist text-[8px] tracking-[0.6em]'>
        SIMPLIFIYING SUCCESS, GLOBALLY
      </span>
    </div>
  </div>
)

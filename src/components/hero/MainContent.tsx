import { GoogleBrandIcon } from '@/icons'
import { StarsSection } from '../StarsSection'

export const MainContent = () => (
  <div className='flex flex-col items-center justify-center w-full h-full -tracking-widest'>
    {/* Text & Headers */}
    <h1
      className={`
        text-fore-primary text-2xl tracking-[0.5rem] font-basker
        flex items-center gap-3 leading-0
      `}
    >
      <span>SCHMIDT</span>
      <span>&</span>
      <span>PARTNER</span>
    </h1>
    <h2 className='text-fore-primary font-semibold font-geist text-[6.5rem]'>Real Estate Done Right.</h2>
    <h3 className='text-fore-terciary text-2xl tracking-widest font-geist'>
      PROFESSIONAL. TRANSPARENT. RELIABLE.
    </h3>

    {/* Stars */}
    <div className='flex text-center items-center gap-4 mt-16'>
      <div className='flex items-center gap-2'>
        <span className='text-fore-primary font-semibold font-geist text-xl leading-0'>4.5</span>
        <StarsSection />
      </div>

      <small className='flex items-center gap-1.5 mt-2 font-plus'>
        <span className='text-fore-secondary font-geist tracking-normal'>+346 Reviews on</span>
        <GoogleBrandIcon className='text-fore-primary w-16 h-8' />
      </small>
    </div>
  </div>
)

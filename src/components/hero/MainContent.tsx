import { GoogleReviews } from './GoogleReviews'

export const MainContent = () => (
  <div
    className={`
      flex flex-col lg:items-center items-start justify-center
      w-full h-full -tracking-widest not-xl:py-10 xl:gap-5
    `}
  >
    {/* Text & Headers */}
    <h2
      className={`
        text-fore-primary lg:text-2xl sm:text-xl tracking-[0.5rem] font-basker
        flex items-center gap-3
      `}
    >
      <span>SCHMIDT</span>
      <span>&</span>
      <span>PARTNER</span>
    </h2>
    <h1
      className={`
        text-fore-primary font-semibold font-geist lg:text-[6.5rem] sm:text-7xl text-6xl
        flex items-center xl:gap-4 text-nowrap not-xl:flex-col lg:leading-26
        xl:my-0 lg:my-8 my-4
      `}
    >
      <span>Real Estate</span>
      <span>Done Right.</span>
    </h1>
    <h2 className='text-fore-terciary lg:text-2xl sm:text-xl text-lg tracking-widest font-geist'>
      PROFESSIONAL. TRANSPARENT. RELIABLE.
    </h2>

    <GoogleReviews className='not-xl:hidden mt-16' />
  </div>
)

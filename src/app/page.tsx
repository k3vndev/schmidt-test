import { StarsSection } from '@/components/StarsSection'
import { GoogleBrandIcon } from '@/icons'

export default function Home() {
  return (
    <div className='w-screen min-h-screen h-screen flex flex-col'>
      <main className='w-full h-full relative flex flex-col items-center overflow-hidden'>
        <MainContent />

        {/* Background */}
        <div className='size-[110%] *:size-full absolute top-1/2 left-1/2 -translate-1/2 *:absolute *:top-0 *:left-0 -z-10'>
          <div
            className='blur-[2px]'
            style={{ background: 'url(/night-city-bg.webp) center / cover no-repeat lightgray' }}
          />
          <div className='bg-linear-to-b from-0% from-darkest-blue/25 via-75% via-darkest-blue/90 to-100% to-darkest-blue'></div>
        </div>
      </main>

      {/* Review Zone*/}
      <article className='w-full h-64 bg-darkest-blue'></article>
    </div>
  )
}

const MainContent = () => (
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
    <h3 className='text-fore-terciary font-semibold text-2xl tracking-widest font-geist'>
      PROFESSIONAL. TRANSPARENT. RELIABLE.
    </h3>

    {/* Stars */}
    <div className='flex text-center items-center gap-4 mt-16'>
      <div className='flex items-center gap-2'>
        <span className='text-fore-primary font-semibold font-geist text-xl leading-0'>4.5</span>
        <StarsSection />
      </div>

      <small className='flex items-center gap-1 mt-2 font-plus'>
        <span className='text-fore-secondary font-geist tracking-normal'>+346 Reviews on</span>
        <GoogleBrandIcon className='text-fore-primary w-16 h-8' />
      </small>
    </div>
  </div>
)

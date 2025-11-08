import { CityBackground } from '@/components/hero/CityBackground'
import { InputsContainer } from '@/components/hero/InputsContainer'
import { MainContent } from '@/components/hero/MainContent'
import { TrustCard } from '@/components/hero/TrustCard'
import { PropertiesSection } from '@/components/properties-section/PropertiesSection'

export default function Home() {
  return (
    <>
      <div className='w-screen xl:h-full flex flex-col'>
        <main
          className={`
            w-full h-full relative flex flex-col
            items-center overflow-hidden
          `}
        >
          <div
            className={`
              mt-(--header-h) w-full h-full flex flex-col items-center
              not-xl:px-(--page-px) not-xl:py-10
            `}
          >
            <MainContent />
            <InputsContainer />
          </div>

          <CityBackground />
        </main>

        <TrustCard />
      </div>
      <PropertiesSection />
    </>
  )
}

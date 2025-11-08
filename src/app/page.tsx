import { CityBackground } from '@/components/hero/CityBackground'
import { InputsContainer } from '@/components/hero/InputsContainer'
import { MainContent } from '@/components/hero/MainContent'
import { TrustCard } from '@/components/hero/TrustCard'

export default function Home() {
  return (
    <div className='w-screen min-h-screen h-screen flex flex-col'>
      <main className='w-full h-full relative flex flex-col items-center overflow-hidden'>
        <MainContent />
        <InputsContainer />

        <CityBackground />
      </main>

      <TrustCard />
    </div>
  )
}

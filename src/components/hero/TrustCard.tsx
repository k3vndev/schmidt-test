import { StarsSection } from '../StarsSection'

export const TrustCard = () => (
  <article className='w-full py-16 bg-darkest-blue flex items-center justify-center'>
    <div className='flex items-start gap-20'>
      <div className='flex items-center gap-5'>
        <span className='text-fore-primary text-xl font-geist font-light'>Jonh Doe</span>
        <StarsSection className='[&>svg]:w-4 [&>svg]:h-4' />
      </div>

      <p className='font-plus text-fore-terciary w-2xl leading-8'>
        We wholeheartedly believe in and appreciate the exceptional services provided by Schmidt and Partner.
        Their professionalism and expertise in the field are truly commendable. We highly recommend them
        without reservation.
      </p>
    </div>
  </article>
)

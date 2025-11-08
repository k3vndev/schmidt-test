export const CityBackground = () => (
  <div
    className={`
      size-[110%] *:size-full absolute top-1/2 left-1/2 -translate-1/2
      *:absolute *:top-0 *:left-0 -z-10
    `}
  >
    <div
      className='blur-[2px]'
      style={{ background: 'url(/night-city-bg.webp) center / cover no-repeat lightgray' }}
    />
    <div className='bg-linear-to-b from-0% from-darkest-blue/25 via-75% via-darkest-blue/90 to-100% to-darkest-blue'></div>
  </div>
)

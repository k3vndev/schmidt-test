export default function Home() {
  return (
    <div className='w-screen min-h-screen flex flex-col'>
      <main className='w-full h-full relative'>
        <h1 className='text-white'>Hello</h1>

        {/* Background */}
        <div className='w-screen h-full *:size-full absolute top-0 left-0 *:absolute *:top-0 *:left-0 -z-10'>
          <div style={{ background: 'url(/night-city-bg.webp) center / cover no-repeat lightgray' }} />
          <div className='bg-linear-to-b from-0% from-darkest-blue/25 via-75% via-darkest-blue/90 to-100% to-darkest-blue'></div>
        </div>
      </main>
      <article className='w-full bg-darkest-blue'></article>
    </div>
  )
}

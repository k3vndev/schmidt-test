export const AppFooter = () => (
  <footer
    className={`
      w-full flex not-md:flex-col items-center 
      justify-center py-12 relative
    `}
  >
    {items.map(({ main, bottom }, i) => (
      <article
        key={i}
        className={`
          flex md:flex-col items-center md:justify-center justify-between gap-1 border-white/10
          lg:px-20 md:px-10 not-md:py-6 md:not-last-of-type:border-r not-md:not-last-of-type:border-b
          not-md:w-[calc(100%-var(--page-px)*2)]
        `}
      >
        <div
          className={`
            flex items-center gap-px font-geist text-white
            md:[&>span]:text-6xl md:[&>small]:text-xl [&>span]:text-3xl [&>small]:text-sm
          `}
        >
          {main}
        </div>

        <span
          className={`
            font-plus text-fore-terciary text-nowrap
            md:text-sm sm:text-lg text-sm not-md:uppercase
          `}
        >
          {bottom}
        </span>
      </article>
    ))}

    {/* Background */}
    <div className='absolute top-0 left-0 size-full bg-accent/60 -z-10'></div>
    <div
      className='absolute size-full top-0 left-0 -z-20'
      style={{ background: 'url(/backgrounds/clouds-bg.webp) center / cover no-repeat lightgray' }}
    ></div>
  </footer>
)

interface FooterItem {
  main: React.ReactNode
  bottom: string
}

const items: FooterItem[] = [
  {
    main: (
      <>
        <small>+</small>
        <span>8</span>
        <small>%</small>
      </>
    ),
    bottom: 'Years of Real Estate Experience'
  },
  {
    main: (
      <>
        <small>$</small>
        <span>100</span>
        <small>+</small>
      </>
    ),
    bottom: 'Properties Sold'
  },
  {
    main: (
      <>
        <span>100</span>
        <small>%</small>
      </>
    ),
    bottom: 'Customer Satisfaction'
  }
]

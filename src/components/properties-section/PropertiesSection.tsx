'use client'

import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { PROPERTIES } from '@/consts'
import { ChevronIcon, DiagonalArrowIcon } from '@/icons'
import { NavButton } from './NavButton'
import { PropertyTile } from './PropertyTile'

export const PropertiesSection = () => {
  const scrollElementRef = useRef<HTMLDivElement>(null)
  const SCROLL_ELEMENT_GAP = 16

  const navigate = (direction: 1 | -1) => {
    /*
      Note:
      This is a really basic implementation that contains many bugs
    */

    const scrollElement = scrollElementRef.current
    const firstArticle = scrollElement?.querySelector('article')
    if (!scrollElement || !firstArticle) return

    const { innerWidth } = window
    const { width: tileWidth } = firstArticle.getBoundingClientRect()

    const aproxTilesOnScreen = Math.floor(innerWidth / tileWidth)
    const scrollTo = tileWidth * aproxTilesOnScreen + SCROLL_ELEMENT_GAP * aproxTilesOnScreen
    scrollElement.scrollTo({ left: scrollElement.scrollLeft + scrollTo * direction, behavior: 'smooth' })
  }

  return (
    <section className='w-full py-20 flex flex-col gap-16'>
      <header className='px-(--page-px) flex items-center justify-between not-lg:justify-center'>
        <h2 className='lg:text-5xl sm:text-4xl text-3xl text-fore-[#212121] font-geist tracking-tighter'>
          Featured Properties
        </h2>

        <ButtonsAndControls navigate={navigate} className='not-lg:hidden' />
      </header>

      <div
        className='flex px-(--page-px) overflow-x-scroll scrollbar-hide'
        ref={scrollElementRef}
        style={{ gap: `${SCROLL_ELEMENT_GAP}px` }}
      >
        {[...PROPERTIES, ...PROPERTIES].map((p, i) => (
          <PropertyTile {...p} key={i} />
        ))}
      </div>

      <ButtonsAndControls navigate={navigate} className='lg:hidden justify-between px-(--page-px)' />
    </section>
  )
}

interface ButtonsAndControlsProps {
  navigate: (direction: 1 | -1) => void
  className?: string
}

const ButtonsAndControls = ({ navigate, className = '' }: ButtonsAndControlsProps) => (
  <div className={twMerge(`flex items-center gap-7 ${className}`)}>
    <div className='flex items-center gap-4'>
      <NavButton left onClick={() => navigate(-1)} />
      <NavButton onClick={() => navigate(1)} />
    </div>
    <button className='flex font-plus items-center gap-2 text-nowrap bg-accent text-white px-8 py-4 button'>
      <span>Explore All</span>
      <DiagonalArrowIcon className='size-5 min-w-5' />
    </button>
  </div>
)

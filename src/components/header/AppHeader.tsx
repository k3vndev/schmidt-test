'use client'

import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ChevronIcon, CrossIcon, DiagonalArrowIcon, MenuIcon } from '@/icons'
import { AppLogo } from './AppLogo'
import { Contents } from './Contents'

export const AppHeader = () => {
  const [isOnTop, setIsOnTop] = useState(true)
  const [isShowingMenu, setIsShowingMenu] = useState(false)
  const NAV_DATA_ID = 'app-header-nav'

  const items = [
    { label: 'Buy' },
    { label: 'Rent' },
    { label: 'New Developments' },
    { label: 'List Your Property' },
    { label: 'More', icon: <ChevronIcon /> },
    { label: '+971 58 969 8721', icon: <DiagonalArrowIcon /> }
  ]

  useEffect(() => {
    const MIN_VALUE = 50

    const handleScroll = () => {
      const { scrollY } = window
      setIsOnTop(scrollY < MIN_VALUE)
    }

    const handleClick = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(`[data-id='${NAV_DATA_ID}']`)) {
        setIsShowingMenu(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('pointerdown', handleClick)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('pointerdown', handleClick)
    }
  }, [])

  const navStyle = isOnTop
    ? 'xl:pt-8'
    : 'bg-black/75 shadow-black/50 shadow-xl backdrop-blur-md shadow-black/15 shadow-md'
  const menuStyle = isShowingMenu ? '' : '-translate-y-full opacity-0'

  return (
    <>
      <nav
        className={twMerge(`
          fixed w-full z-50 text-white md:py-4 py-3 flex justify-center
          border-b border-transparent ${navStyle} transition-all duration-500 text-nowrap 
        `)}
        data-id={NAV_DATA_ID}
      >
        <div
          className={`
            flex justify-between items-center 
            h-full w-full px-(--page-px)
          `}
        >
          <AppLogo />

          <Contents className='not-xl:hidden' {...{ items }} />

          <div className='flex items-center gap-5 xl:hidden'>
            <button className={`flex items-center gap-2 font-plus not-md:hidden`}>
              <span>Get a free quotation</span>
              <DiagonalArrowIcon className='size-5 min-w-5' />
            </button>

            <button onClick={() => setIsShowingMenu(true)} className={`p-3 rounded-full bg-black button`}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      <nav
        className={`
          fixed w-full top-0 left-0 bg-darker-accent z-50 px-(--page-px)
          flex flex-col gap-12 pt-10 pb-20 not-sm:h-full

          bg-black/90 backdrop-blur-md
          transition duration-500 ease-out ${menuStyle}
        `}
        data-id={NAV_DATA_ID}
      >
        <div className='flex w-full items-center justify-between'>
          <AppLogo />

          <button onClick={() => setIsShowingMenu(false)} className='p-3 button text-white'>
            <CrossIcon className='text-white size-8 min-w-8' />
          </button>
        </div>

        <Contents
          className={`
            flex flex-col font-quiche text-white text-2xl items-start
            not-sm:items-center not-sm:gap-12
          `}
          {...{ items }}
        />
      </nav>
    </>
  )
}

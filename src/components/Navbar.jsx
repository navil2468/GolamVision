'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import monogram from '@/assets/monogram.png'
import { navLinks, INSTAGRAM_URL } from '@/data/site'

function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [prevPath, setPrevPath] = useState(pathname)

  // close the mobile panel whenever the route changes
  if (pathname !== prevPath) {
    setPrevPath(pathname)
    setIsOpen(false)
  }

  const linkColor = (href) =>
    pathname === href
      ? 'text-gold-light border-gold'
      : 'text-ivory border-transparent'

  return (
    <header className='sticky top-0 z-20 bg-[rgba(10,9,8,0.92)] backdrop-blur-[10px] border-b border-line'>
      <div className='container-gv py-[14px] flex items-center justify-between gap-6'>
        <Link href='/' className='shrink-0'>
          <Image src={monogram} alt='GVisions' preload className='h-10 w-auto block' />
        </Link>

        <nav className='hidden nav:flex items-center gap-[clamp(18px,2.6vw,36px)]'>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[12px] tracking-[0.24em] font-normal py-[6px] border-b whitespace-nowrap hover:text-gold-light ${linkColor(href)}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-5'>
          <a
            target='_blank'
            rel='noreferrer'
            href={INSTAGRAM_URL}
            className='hidden nav:inline text-[12px] tracking-[0.24em] text-muted hover:text-gold-light'
          >
            INSTAGRAM
          </a>
          <Link href='/Appointment' className='btn-primary hidden xs:inline-block text-[12px] px-[22px] py-3'>
            BOOK A SESSION
          </Link>
          <button
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className='nav:hidden bg-transparent text-ivory border border-line-4 px-[18px] py-3 text-[12px] tracking-[0.22em] hover:border-gold'
          >
            {isOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='nav:hidden border-t border-line pt-3 pb-6 px-[clamp(20px,4vw,48px)] flex flex-col'>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`text-[13px] tracking-[0.24em] py-4 border-b border-row hover:text-gold-light ${pathname === href ? 'text-gold-light' : 'text-ivory'}`}
            >
              {label}
            </Link>
          ))}
          <a
            target='_blank'
            rel='noreferrer'
            href={INSTAGRAM_URL}
            className='text-[13px] tracking-[0.24em] text-muted py-4 hover:text-gold-light'
          >
            INSTAGRAM
          </a>
          <Link
            href='/Appointment'
            onClick={() => setIsOpen(false)}
            className='btn-primary xs:hidden mt-2 p-4 text-[12px]'
          >
            BOOK A SESSION
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar

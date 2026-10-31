'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import monogram from '@/assets/monogram.png'
import { navLinks, contactMethods } from '@/data/site'

function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [prevPath, setPrevPath] = useState(pathname)
  const contactRef = useRef(null)

  // close the mobile panel and contact dropdown whenever the route changes
  if (pathname !== prevPath) {
    setPrevPath(pathname)
    setIsOpen(false)
    setIsContactOpen(false)
  }

  // close the contact dropdown on outside click or Escape
  useEffect(() => {
    if (!isContactOpen) return
    const onClick = (e) => {
      if (!contactRef.current?.contains(e.target)) setIsContactOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setIsContactOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [isContactOpen])

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
          <div ref={contactRef} className='relative hidden nav:block'>
            <button
              type='button'
              onClick={() => setIsContactOpen(!isContactOpen)}
              aria-expanded={isContactOpen}
              className={`bg-transparent text-[12px] tracking-[0.24em] hover:text-gold-light ${isContactOpen ? 'text-gold-light' : 'text-muted'}`}
            >
              CONTACT
            </button>
            {isContactOpen && (
              <div className='absolute right-0 top-full mt-5 min-w-[260px] bg-ink-2 border border-line p-6 flex flex-col gap-5'>
                {contactMethods.map(({ label, value, href, external }) => (
                  <div key={label} className='flex flex-col gap-[6px]'>
                    <div className='eyebrow-label'>{label}</div>
                    <a
                      href={href}
                      {...(external && { target: '_blank', rel: 'noreferrer' })}
                      className='text-[15px] tracking-[0.04em] text-ivory hover:text-gold-light'
                    >
                      {value}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
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
          <div className='flex flex-col gap-4 py-5'>
            <div className='text-[13px] tracking-[0.24em] text-muted'>CONTACT</div>
            {contactMethods.map(({ label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external && { target: '_blank', rel: 'noreferrer' })}
                className='flex justify-between gap-4 text-[14px] tracking-[0.04em] text-ivory hover:text-gold-light'
              >
                <span className='text-[11px] tracking-[0.24em] text-faint'>{label}</span>
                {value}
              </a>
            ))}
          </div>
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

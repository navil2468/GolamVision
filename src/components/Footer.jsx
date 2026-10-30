import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import wordmark from '@/assets/wordmark.png'
import { navLinks, INSTAGRAM_URL } from '@/data/site'

const linkClass = 'text-[11px] tracking-[0.24em] text-muted hover:text-gold-light'

function Footer() {
  return (
    <footer className='border-t border-line'>
      <div className='container-gv py-12 flex justify-between items-center flex-wrap gap-7'>
        <Image src={wordmark} alt='GVisions Photography' className='h-14 w-auto' />
        <div className='flex flex-wrap gap-7'>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass}>{label}</Link>
          ))}
          <a target='_blank' rel='noreferrer' href={INSTAGRAM_URL} className={linkClass}>@GOLAMSVISION</a>
        </div>
        <span className='text-[12px] text-faint tracking-[0.08em]'>© 2026 GVisions Photography</span>
      </div>
    </footer>
  )
}

export default Footer

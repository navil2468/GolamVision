'use client'

import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '/Portraits', label: 'LIFESTYLE' },
  { href: '/Graduation', label: 'GRAD & PROM' },
  { href: '/Events', label: 'EVENTS' },
  { href: '/Studio', label: 'STUDIO' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full border-b border-b-neutral-700 bg-black'>
      <div className='flex items-center justify-between h-20 px-5'>
        <div className='flex items-center justify-start flex-shrink-0'>
          <Link href='/'><Image src={logo} alt='GVisions logo' priority className='h-12 md:h-16 w-auto object-contain'/></Link>
        </div>
        <ul className='hidden lg:flex text-xl text-white font-extrabold gap-x-8 items-center pr-5'>
          {links.map(({ href, label }) => (
            <Link key={href} href={href}><li className='hover:text-yellow-500'>{label}</li></Link>
          ))}
          <li className='hover:text-yellow-500'><a target='_blank' href='https://www.instagram.com/golamsvision/'>IG</a></li>
          <Link href='/Appointment'><button
              className='bg-yellow-500 text-black font-bold text-xl p-3 rounded-lg hover:bg-yellow-50 transition-colors disabled:opacity-50 hover:cursor-pointer'
          > Book Appointment</button></Link>
        </ul>
        <button className='lg:hidden text-white' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className='lg:hidden text-center bg-black border-t border-neutral-700'>
          <ul className='flex flex-col text-xl text-white font-extrabold py-4'>
            {links.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setIsOpen(false)}><li className='hover:text-yellow-500 px-5 py-3'>{label}</li></Link>
            ))}
            <li className='hover:text-yellow-500 px-5 py-3'><a target='_blank' href='https://www.instagram.com/golamsvision/' onClick={() => setIsOpen(false)}>IG</a></li>
            <Link href='/Appointment'><button
              className='bg-yellow-500 text-black font-bold text-xl p-2 rounded-lg hover:bg-yellow-50 transition-colors disabled:opacity-50 hover:cursor-pointer'
          > Book Appointment</button></Link>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar

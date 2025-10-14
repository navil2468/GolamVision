import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full border-b border-b-neutral-700 bg-black'>
      <div className='flex items-center justify-between h-20 px-5'>
        <div className='flex items-center justify-start flex-shrink-0'>
          <Link to={'/'}><img src={logo} alt='Logo' className='h-12 md:h-16 w-auto object-contain'/></Link>
        </div>
        <ul className='hidden md:flex text-xl text-white font-extrabold gap-x-8 items-center pr-5'>
          <Link to={'../Cars'}><li className='hover:text-yellow-500'>CARS</li></Link>
          <Link to={'../Portraits'}><li className='hover:text-yellow-500'>PORTRAITS</li></Link>
          <Link to={'../Landscapes'}><li className='hover:text-yellow-500'>LANDSCAPES</li></Link>
          <li className='hover:text-yellow-500'><a target='_blank' href='https://www.instagram.com/golamsvision/'>IG</a></li>
          <li className='hover:text-yellow-500'><a target='_blank' href='https://www.tiktok.com/@golamsvision'>TIKTOK</a></li>
        </ul>
        <button className='md:hidden text-white' onClick={() => setIsOpen(!isOpen)}>
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
        <div className='md:hidden text-center bg-black border-t border-neutral-700'>
          <ul className='flex flex-col text-xl text-white font-extrabold py-4'>
            <Link to={'../Cars'} onClick={() => setIsOpen(false)}><li className='hover:text-yellow-500 px-5 py-3'>CARS</li></Link>
            <Link to={'../Portraits'} onClick={() => setIsOpen(false)}><li className='hover:text-yellow-500 px-5 py-3'>PORTRAITS</li></Link>
            <Link to={'../Landscapes'} onClick={() => setIsOpen(false)}><li className='hover:text-yellow-500 px-5 py-3'>LANDSCAPES</li></Link>
            <li className='hover:text-yellow-500 px-5 py-3'><a target='_blank' href='https://www.instagram.com/golamsvision/' onClick={() => setIsOpen(false)}>IG</a></li>
            <li className='hover:text-yellow-500 px-5 py-3'><a target='_blank' href='https://www.tiktok.com/@golamsvision' onClick={() => setIsOpen(false)}>TIKTOK</a></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar

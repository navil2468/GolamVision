import React from 'react'
import logo from '../assets/Logo.png'

function Navbar() {
  return (
    <div className='flex justify-between w-full h-25 px-5 border-b-1 border-b-neutral-700'>
      <div>
        <img src={logo} className='object-contain h-full w-full'/>
      </div>
      <ul className='text-xl text-shadow-neutral-50 font-bold flex gap-x-8 justify-center items-center pr-5'>
        <li className='hover:text-amber-300'>CARS</li>
        <li className='hover:text-amber-300'>LANDSCAPE</li>
        <li className='hover:text-amber-300'><a target='_blank' href='https://www.instagram.com/golamsvision/'>IG</a></li>
        <li className='hover:text-amber-300'><a target='_blank' href='https://www.tiktok.com/@golamsvision'>TIKTOK</a></li>
      </ul>
    </div>
  )
}

export default Navbar

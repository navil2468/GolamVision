import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between w-full h-25 px-5 border-b-1 border-b-neutral-700'>
      <div>
        <Link to={'/'}><img src={logo} className='object-contain h-full w-full'/></Link>
      </div>
      <ul className='text-xl text-shadow-neutral-50 font-extrabold flex gap-x-8 justify-center items-center pr-5'>
        <Link to={'../Cars'}><li className='hover:text-yellow-500'>CARS</li></Link>
        <Link to={'../Landscapes'}><li className='hover:text-yellow-500'>LANDSCAPES</li></Link>
        <li className='hover:text-yellow-500'><a target='_blank' href='https://www.instagram.com/golamsvision/'>IG</a></li>
        <li className='hover:text-yellow-500'><a target='_blank' href='https://www.tiktok.com/@golamsvision'>TIKTOK</a></li>
      </ul>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='text-center m-15 lg:m-35'>
      <p className='md:text-6xl text-6xl lg:text-8xl' style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>
        WELCOME! I'M GOLAM MORTUZA <span className='text-neutral-400 '>AND I TAKE PHOTOS AND VIDEOS TO BRING YOUR</span> <span className='text-yellow-500'>VISION</span> TO LIFE
      </p>
      <div className='flex justify-center gap-8 my-15'>
        <Link to={'/Cars'}>
          <h1 className='border-2 border-white px-8 py-4 text-2xl font-bold hover:border-yellow-500 hover:text-yellow-500 transition-colors'>
            CARS
          </h1>
        </Link>
        <Link to={'/Landscapes'}>
          <h1 className='border-2 border-white px-8 py-4 text-2xl font-bold hover:border-yellow-500 hover:text-yellow-500 transition-colors'>
            LANDSCAPES
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
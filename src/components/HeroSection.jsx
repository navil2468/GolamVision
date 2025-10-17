import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='text-center m-15 lg:m-35'>
      <p className='md:text-6xl text-5xl lg:text-7xl' style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>
        WELCOME TO <span className='text-yellow-500'>GOLAMSVISION</span> <span className='text-neutral-400 '> - CAPTURING THE MOMENTS AND IDEAS THAT</span> DEFINE YOU
      </p>
      <div className='flex flex-wrap justify-center gap-8 my-15'>
        <Link to={'/Cars'}>
          <h1 className='border-2 border-white px-8 py-4 text-2xl font-bold hover:border-yellow-500 hover:text-yellow-500 transition-colors'>
            CARS
          </h1>
        </Link>
        <Link to={'/Portraits'}>
          <h1 className='border-2 border-white px-8 py-4 text-2xl font-bold hover:border-yellow-500 hover:text-yellow-500 transition-colors'>
            PORTRAITS
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

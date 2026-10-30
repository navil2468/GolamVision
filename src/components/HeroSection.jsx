import React from 'react'
import Link from 'next/link'
import { categories } from '@/data/packages'

function HeroSection() {
  return (
    <div className='text-center m-15 lg:m-35'>
      <p className='md:text-6xl text-5xl lg:text-7xl' style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>
        WELCOME TO <span className='text-yellow-500'>GVISIONS</span> <span className='text-neutral-400 '> - CAPTURING THE MOMENTS AND IDEAS THAT</span> DEFINE YOU
      </p>
      <div className='flex flex-wrap justify-center gap-8 my-15'>
        {categories.map(({ href, title }) => (
          <Link key={href} href={href}>
            <h1 className='border-2 border-white px-8 py-4 text-2xl font-bold hover:border-yellow-500 hover:text-yellow-500 transition-colors'>
              {title.toUpperCase()}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HeroSection

import React from 'react'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import Ending from '@/components/Ending'
import { getCategory } from '@/data/packages'

export const metadata = { title: 'Studio | GVisions' }

function Studio() {
  return (
    <>
      <Navbar />
      <div className='bg-black py-12 px-4 space-y-16'>
        <h1 className='text-center text-5xl font-bold text-white' style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>STUDIO</h1>
        <Pricing category={getCategory('studio')} />
      </div>
      <Ending />
    </>
  )
}

export default Studio

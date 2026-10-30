import React from 'react'
import Navbar from '@/components/Navbar'
import Gallery from '@/components/Gallery'
import Pricing from '@/components/Pricing'
import Ending from '@/components/Ending'
import { getCategory } from '@/data/packages'
import grad1 from '@/assets/Grad/grad1.jpg'
import grad2 from '@/assets/Grad/grad2.jpg'
import grad3 from '@/assets/Grad/grad3.jpg'
import grad4 from '@/assets/Grad/grad4.jpg'
import grad5 from '@/assets/Grad/grad5.jpg'
import grad6 from '@/assets/Grad/grad6.jpg'
import grad7 from '@/assets/Grad/grad7.jpg'
import grad8 from '@/assets/Grad/grad8.jpg'
import grad9 from '@/assets/Grad/grad9.jpg'

export const metadata = { title: 'Graduation & Prom | GVisions' }

const images = [grad1, grad2, grad3, grad4, grad5, grad6, grad7, grad8, grad9]

function Graduation() {
  return (
    <>
      <Navbar />
      <div className='bg-black py-12 px-4 space-y-16'>
        <h1 className='text-center text-5xl font-bold text-white' style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>GRADUATION &amp; PROM</h1>
        <Gallery images={images} alt='Graduation' />
        <Pricing category={getCategory('graduation')} />
      </div>
      <Ending />
    </>
  )
}

export default Graduation

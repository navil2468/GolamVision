import React from 'react'
import Navbar from './components/Navbar'
import la1 from './assets/Landscapes /DSC00779.jpg'
import la2 from './assets/Landscapes /DSC01636.jpg'
import la3 from './assets/Landscapes /DSC02080.jpg'
import la4 from './assets/Landscapes /DSC08190.jpg'
import la5 from './assets/Landscapes /DSC08192.jpg'
import la6 from './assets/Landscapes /DSC09056.jpg'

function Landscapes() {
  return (
    <>
      <Navbar />
      <div className='bg-black py-12 px-4'>
      <h1 className='text-center text-5xl font-bold mb-15 text-white' style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>LANDSCAPES</h1>
        
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {/* Column 1 */}
            <div className='flex flex-col gap-10'>
              <img
                src={la3}
                alt="Landscape 3"
                className='w-full rounded-lg'
              />
              <img
                src={la6}
                alt="Landscape 6"
                className='w-full rounded-lg'
              />
            </div>

            {/* Column 2 */}
            <div className='flex flex-col gap-10'>
              <img
                src={la2}
                alt="Landscape 2"
                className='w-full rounded-lg'
              />
              <img
                src={la5}
                alt="Landscape 5"
                className='w-full rounded-lg'
              />
            </div>

            {/* Column 3 */}
            <div className='flex flex-col gap-10'>
              <img
                src={la4}
                alt="Landscape 4"
                className='w-full rounded-lg'
              />
              <img
                src={la1}
                alt="Landscape 1"
                className='w-full rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landscapes
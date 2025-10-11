import React from 'react'

import car1 from '../assets/Cars /DSC00110.jpg'
import car2 from '../assets/Cars /DSC00101.jpg'
import car3 from '../assets/Cars /DSC00118.jpg'

import la1 from '../assets/Landscapes /DSC02080.jpg'
import la2 from '../assets/Landscapes /DSC08190.jpg'
import la3 from '../assets/Landscapes /DSC09056.jpg'

import car4 from '../assets/Cars /DSC08165.jpg'
import car5 from '../assets/Cars /DSC09768.jpg'
import car6 from '../assets/Cars /DSC08066.jpg'


function RecentWork() {
  return (
    <div className='text-center py-12 px-4 bg-black'>
      <h1 className='text-5xl font-bold mb-15 text-white' style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>RECENT WORK</h1>
      
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>

          {/* Column 1 */}
          <div className='flex flex-col gap-10'>
            <img
              src={la1}
              alt="Landscape 1"
              className='w-full h-160 object-cover rounded-lg'
            />
            <img
              src={car2}
              alt="Car 2"
              className='w-full rounded-lg'
            />
            <img
              src={car4}
              alt="Car 4"
              className='w-full rounded-lg'
            />
          </div>

          {/* Column 2 */}
          <div className='flex flex-col gap-10'>
            <img
              src={car1}
              alt="Car 1"
              className='w-full rounded-lg'
            />
            <img
              src={car3}
              alt="Car 3"
              className='w-full h-100 object-cover  rounded-lg'
            />
            <img
              src={la2}
              alt="Landscape 2"
              className='w-full rounded-lg'
            />
          </div>

          {/* Column 3 */}
          <div className='flex flex-col gap-10'>
            <img
              src={la3}
              alt="Landscape 3"
              className='w-full rounded-lg'
            />
            <img
              src={car5}
              alt="Car 5"
              className='w-full h-64 object-cover rounded-lg'
            />
            <img
              src={car6}
              alt="Car 6"
              className='w-full rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentWork

import React from 'react'
import Navbar from './components/Navbar'
import car1 from './assets/Cars /DSC00101.jpg'
import car2 from './assets/Cars /DSC00110.jpg'
import car3 from './assets/Cars /DSC00116.jpg'
import car4 from './assets/Cars /DSC00118.jpg'
import car5 from './assets/Cars /DSC00129-2.jpg'
import car6 from './assets/Cars /DSC00130-2.jpg'
import car7 from './assets/Cars /DSC08013.jpg'
import car8 from './assets/Cars /DSC08050.jpg'
import car9 from './assets/Cars /DSC08057.jpg'
import car10 from './assets/Cars /DSC08066.jpg'
import car11 from './assets/Cars /DSC08148.jpg'
import car12 from './assets/Cars /DSC08161.jpg'
import car13 from './assets/Cars /DSC08162.jpg'
import car14 from './assets/Cars /DSC08163.jpg'
import car15 from './assets/Cars /DSC08165.jpg'
import car16 from './assets/Cars /DSC09768.jpg'
import car17 from './assets/Cars /DSC09909.jpg'
import car18 from './assets/Cars /DSC09910.jpg'
import FadeInImage from './components/FadeInImage'

function Cars() {
  return (
    <>
      <Navbar />
      <div className='bg-black py-12 px-4'>
        <h1 className='text-center text-5xl font-bold mb-10 text-white' style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>CARS</h1>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {/* Column 1 */}
            <div className='flex flex-col gap-10'>
              <FadeInImage src={car14} alt="Car 14" className='w-full rounded-lg' />
              <FadeInImage src={car6} alt="Car 6" className='w-full rounded-lg' />
              <FadeInImage src={car11} alt="Car 11" className='w-full rounded-lg' />
              <FadeInImage src={car3} alt="Car 3" className='w-full h-100 object-cover rounded-lg' />
              <FadeInImage src={car17} alt="Car 17" className='w-full rounded-lg' />
              <FadeInImage src={car8} alt="Car 8" className='w-full rounded-lg' />
            </div>
            {/* Column 2 */}
            <div className='flex flex-col gap-10'>
              <FadeInImage src={car5} alt="Car 5" className='w-full rounded-lg' />
              <FadeInImage src={car12} alt="Car 12" className='w-full rounded-lg' />
              <FadeInImage src={car1} alt="Car 1" className='w-full rounded-lg' />
              <FadeInImage src={car16} alt="Car 16" className='w-full rounded-lg' />
              <FadeInImage src={car9} alt="Car 9" className='w-full rounded-lg' />
              <FadeInImage src={car4} alt="Car 4" className='w-full rounded-lg' />
            </div>
            {/* Column 3 */}
            <div className='flex flex-col gap-10'>
              <FadeInImage src={car18} alt="Car 18" className='w-full rounded-lg' />
              <FadeInImage src={car7} alt="Car 7" className='w-full rounded-lg' />
              <FadeInImage src={car13} alt="Car 13" className='w-full rounded-lg' />
              <FadeInImage src={car2} alt="Car 2" className='w-full rounded-lg' />
              <FadeInImage src={car10} alt="Car 10" className='w-full rounded-lg' />
              <FadeInImage src={car15} alt="Car 15" className='w-full h-130 object-cover rounded-lg' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cars
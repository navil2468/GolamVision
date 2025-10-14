import React from 'react'
import Navbar from './components/Navbar'
import pa1 from './assets/Portraits /DSC01076.jpg'
import pa2 from './assets/Portraits /DSC00023-2.jpg'
import pa3 from './assets/Portraits /DSC01077.jpg'
import pa4 from './assets/Portraits /DSC01078.jpg'
import pa5 from './assets/Portraits /DSC01079.jpg'
import pa6 from './assets/Portraits /DSC01080.jpg'
import pa7 from './assets/Portraits /DSC01374.jpg'
import pa8 from './assets/Portraits /DSC01376.jpg'
import pa9 from './assets/Portraits /DSC01382.jpg'
import pa10 from './assets/Portraits /DSC01385.jpg'
import pa11 from './assets/Portraits /DSC01387.jpg'
import pa12 from './assets/Portraits /DSC01394.jpg'
import pa13 from './assets/Portraits /DSC01436.jpg'
import pa14 from './assets/Portraits /DSC01444.jpg'
import pa15 from './assets/Portraits /DSC01712.jpg'
import pa16 from './assets/Portraits /DSC01716.jpg'
import pa17 from './assets/Portraits /DSC01717.jpg'
import pa18 from './assets/Portraits /DSC01081.jpg'

function Portraits() {
  return (
    <>
      <Navbar />
      <div className='bg-black py-12 px-4'>
        <h1 className='text-center text-5xl font-bold mb-10 text-white' style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>PORTRAITS</h1>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {/* Column 1 */}
            <div className='flex flex-col gap-10'>
              <img src={pa7} alt="Portrait 7" className='w-full rounded-lg' />
              <img src={pa2} alt="Portrait 2" className='w-full rounded-lg' />
              <img src={pa13} alt="Portrait 13" className='w-full rounded-lg' />
              <img src={pa4} alt="Portrait 4" className='w-full rounded-lg' />
              <img src={pa16} alt="Portrait 16" className='w-full rounded-lg' />
              <img src={pa10} alt="Portrait 10" className='w-full rounded-lg' />
            </div>
            {/* Column 2 */}
            <div className='flex flex-col gap-10'>
              <img src={pa1} alt="Portrait 1" className='w-full rounded-lg' />
              <img src={pa17} alt="Portrait 17" className='w-full rounded-lg' />
              <img src={pa8} alt="Portrait 8" className='w-full rounded-lg' />
              <img src={pa14} alt="Portrait 14" className='w-full rounded-lg' />
              <img src={pa11} alt="Portrait 11" className='w-full rounded-lg' />
              <img src={pa5} alt="Portrait 5" className='w-full rounded-lg' />
            </div>
            {/* Column 3 */}
            <div className='flex flex-col gap-10'>
              <img src={pa15} alt="Portrait 15" className='w-full rounded-lg' />
              <img src={pa9} alt="Portrait 9" className='w-full rounded-lg' />
              <img src={pa3} alt="Portrait 3" className='w-full rounded-lg' />
              <img src={pa6} alt="Portrait 6" className='w-full rounded-lg' />
              <img src={pa18} alt="Portrait 18" className='w-full rounded-lg' />
              <img src={pa12} alt="Portrait 12" className='w-full rounded-lg' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portraits
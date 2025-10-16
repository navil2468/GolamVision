import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom'


function Ending() {
  return (
    <div className='bg-black text-white py-16 px-4'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
        <div>
          <p className='text-gray-300 text-center leading-relaxed'>
            My name is Golam Mortuza, and I'm a 24-year-old photographer and videographer dedicated to capturing moments that last a lifetime. I offer professional photography with polished edits, event coverage, videography, and dynamic car rollers, bringing creativity and precision to every project. Whether it's showcasing the beauty of cars, documenting special occasions, or creating cinematic visuals, my goal is to deliver high-quality work that tells a story and leaves a lasting impression. If you're looking for visuals that stand out, I'd love the opportunity to bring your vision to life.
          </p>
        </div>
        <div className='text-center'>
          <h3 className='text-3xl font-bold mb-4'>
            Interested?
          </h3>
          <Link to={'../Appointment'}><button
              className='bg-yellow-500 text-black font-bold text-xl p-4 rounded-lg hover:bg-yellow-50 transition-colors disabled:opacity-50 hover:cursor-pointer'
          > Book Appointment</button></Link>
          <div className='flex justify-center mt-5 space-x-6'>
            <a
              target='_blank'
              href='https://www.instagram.com/golamsvision/'
              className='hover:text-yellow-500 text-white transition-colors'
            >
              <FaInstagram size={32} />
            </a>
            <a
              target='_blank'
              href='https://www.tiktok.com/@golamsvision'
              className='hover:text-yellow-500 text-white transition-colors'
            >
              <FaTiktok size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ending
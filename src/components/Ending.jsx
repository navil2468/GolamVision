import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

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
          <p className='text-gray-300 leading-relaxed'>
            Hit me up at
          </p>
          <a target='_blank' href='mailto:Golamsvision@gmail.com'><p className='hover:text-yellow-500 text-gray-300 leading-relaxed'>
            Golamsvision@gmail.com
          </p></a>
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
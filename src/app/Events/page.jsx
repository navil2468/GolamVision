import React from 'react'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import Ending from '@/components/Ending'
import { getCategory } from '@/data/packages'
import sports1 from '@/assets/Sports/sports1.jpg'
import sports2 from '@/assets/Sports/sports2.jpg'
import sports3 from '@/assets/Sports/sports3.jpg'
import sports4 from '@/assets/Sports/sports4.jpg'
import sports5 from '@/assets/Sports/sports5.jpg'
import sports6 from '@/assets/Sports/sports6.jpg'
import sports7 from '@/assets/Sports/sports7.jpg'
import sports8 from '@/assets/Sports/sports8.jpg'
import sports9 from '@/assets/Sports/sports9.jpg'
import sports10 from '@/assets/Sports/sports10.jpg'
import sports11 from '@/assets/Sports/sports11.jpg'
import sports12 from '@/assets/Sports/sports12.jpg'
import sports13 from '@/assets/Sports/sports13.jpg'
import sports14 from '@/assets/Sports/sports14.jpg'

export const metadata = { title: 'Events | GVisions' }

const sports = [sports1, sports2, sports3, sports4, sports5, sports6, sports7, sports8, sports9, sports10, sports11, sports12, sports13, sports14]

const events = getCategory('events')

function Events() {
  return (
    <>
      <Navbar />
      <div className='bg-black py-12 px-4 space-y-16'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold text-white mb-8' style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>EVENTS</h1>
          {/* catalogue jump links */}
          <div className='flex flex-wrap justify-center gap-4'>
            {events.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className='border-2 border-white px-6 py-2 text-lg font-bold hover:border-yellow-500 hover:text-yellow-500 transition-colors'
              >
                {section.title.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
        <Pricing category={events} galleries={{ sports }} />
      </div>
      <Ending />
    </>
  )
}

export default Events

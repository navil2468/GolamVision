import React from 'react'
import Gallery from './Gallery'
import Eyebrow from './Eyebrow'

import lifestyle1 from '../assets/Lifestyle/lifestyle1.jpg'
import lifestyle4 from '../assets/Lifestyle/lifestyle4.jpg'
import lifestyle7 from '../assets/Lifestyle/lifestyle7.jpg'
import lifestyle11 from '../assets/Lifestyle/lifestyle11.jpg'

import grad1 from '../assets/Grad/grad1.jpg'
import grad5 from '../assets/Grad/grad5.jpg'
import grad8 from '../assets/Grad/grad8.jpg'

import sports2 from '../assets/Sports/sports2.jpg'
import sports5 from '../assets/Sports/sports5.jpg'
import sports9 from '../assets/Sports/sports9.jpg'
import sports12 from '../assets/Sports/sports12.jpg'
import sports4 from '../assets/Sports/sports4.jpg'

// mixed so each column gets a blend of portrait and landscape shots
const images = [
  lifestyle1, sports2, grad1,
  sports5, lifestyle4, sports9,
  grad5, sports4, lifestyle7,
  lifestyle11, grad8, sports12,
]

function RecentWork() {
  return (
    <section className='pt-[clamp(48px,6vw,96px)] pb-[clamp(64px,8vw,120px)] border-t border-line'>
      <div className='container-gv flex flex-col gap-[18px] mb-12'>
        <Eyebrow>PORTFOLIO</Eyebrow>
        <h2 className='font-display font-medium text-[clamp(40px,4.4vw,60px)] leading-none'>Recent work</h2>
      </div>
      <Gallery images={images} alt='Recent work' />
    </section>
  )
}

export default RecentWork

import React from 'react'
import Eyebrow from './Eyebrow'

function About() {
  return (
    <section className='container-gv py-[clamp(64px,8vw,120px)] border-t border-line flex flex-wrap gap-[clamp(32px,5vw,80px)]'>
      <div className='flex flex-col gap-[18px] flex-[1_1_280px]'>
        <Eyebrow>ABOUT</Eyebrow>
        <h2 className='font-display font-medium text-[clamp(40px,4.4vw,60px)] leading-none'>Behind the lens</h2>
      </div>
      <p className='font-display text-[clamp(22px,2vw,28px)] leading-[1.5] text-ivory-3 flex-[2_1_420px] text-pretty'>
        I&apos;m Golam Mortuza, a 24-year-old photographer and videographer and the person behind GVisions. I shoot lifestyle and graduation portraits, studio sessions, sports, weddings, engagements and birthday parties, and every shoot gets the same care and a set of polished edits that tell your story. If you want visuals that stand out, I&apos;d love to help bring your vision to life.
      </p>
    </section>
  )
}

export default About

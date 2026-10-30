import React from 'react'
import Link from 'next/link'
import FadeInImage from './FadeInImage'
import ViewfinderFrame from './ViewfinderFrame'
import ScrollButton from './ScrollButton'
import lifestyle4 from '@/assets/Lifestyle/lifestyle4.jpg'

function HeroSection() {
  return (
    <section className='container-gv py-[clamp(48px,7vw,96px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-[clamp(48px,6vw,96px)] items-center'>
      <div className='flex flex-col gap-8'>
        <h1 className='font-display font-medium text-[clamp(48px,6.4vw,92px)] leading-[0.98] tracking-[-0.01em] text-ivory text-balance'>
          Capturing the moments and ideas that <em className='font-medium gold-foil'>define you.</em>
        </h1>
        <p className='text-[18px] leading-[1.65] text-muted max-w-[30em] text-pretty'>
          Lifestyle, graduation, event and studio photography. Polished edits, every raw image included, and a fast turnaround.
        </p>
        <div className='flex flex-wrap gap-4'>
          <Link href='/Appointment' className='btn-primary'>BOOK A SESSION</Link>
          <ScrollButton targetId='sessions' offset={90} className='btn-secondary'>VIEW PACKAGES</ScrollButton>
        </div>
      </div>
      <ViewfinderFrame className='justify-self-center w-full max-w-[520px]'>
        <FadeInImage
          src={lifestyle4}
          alt='Lifestyle portrait'
          preload
          sizes='(min-width: 1180px) 520px, 100vw'
          className='w-full aspect-[4/5] object-cover object-[center_55%]'
        />
      </ViewfinderFrame>
    </section>
  )
}

export default HeroSection

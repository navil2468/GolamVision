import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Eyebrow from './Eyebrow'
import FadeInImage from './FadeInImage'
import { categories, minPrice } from '@/data/packages'
import monogram from '@/assets/monogram.png'
import lifestyle10 from '@/assets/Lifestyle/lifestyle10.jpg'
import grad5 from '@/assets/Grad/grad5.jpg'
import sports2 from '@/assets/Sports/sports2.jpg'

// Studio has no photos yet; it falls back to the monogram tile until one is added here
const cardImages = {
  lifestyle: { src: lifestyle10, position: 'object-[center_60%]' },
  graduation: { src: grad5, position: 'object-[center_60%]' },
  events: { src: sports2, position: 'object-[center_55%]' },
}

function Sessions() {
  return (
    <section id='sessions' className='container-gv py-[clamp(64px,8vw,120px)] border-t border-line'>
      <div className='flex justify-between items-end flex-wrap gap-6 mb-12'>
        <div className='flex flex-col gap-[18px]'>
          <Eyebrow>SESSIONS</Eyebrow>
          <h2 className='font-display font-medium text-[clamp(40px,4.4vw,60px)] leading-none'>Choose your session</h2>
        </div>
        <p className='text-muted text-[16px] leading-[1.6] max-w-[26em]'>
          Every package includes all raw images. A 50% deposit secures your date.
        </p>
      </div>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5'>
        {categories.map((c) => {
          const image = cardImages[c.slug]
          return (
            <Link key={c.slug} href={c.href} className='flex flex-col gap-[18px] text-ivory hover:text-ivory hover:opacity-[0.92]'>
              {image ? (
                <FadeInImage
                  src={image.src}
                  alt={c.title}
                  sizes='(min-width: 1180px) 25vw, (min-width: 560px) 50vw, 100vw'
                  className={`w-full aspect-[3/4] object-cover ${image.position}`}
                />
              ) : (
                <div className='w-full aspect-[3/4] bg-surface border border-line flex items-center justify-center'>
                  <Image src={monogram} alt='' className='w-[46%] h-auto opacity-35' />
                </div>
              )}
              <div className='flex justify-between items-baseline gap-3 border-b border-line-2 pb-[14px]'>
                <span className='font-display text-[30px] font-medium leading-[1.1]'>{c.title}</span>
                <span className='text-[12px] tracking-[0.2em] text-gold whitespace-nowrap'>FROM ${minPrice(c)}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Sessions

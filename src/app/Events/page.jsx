import React from 'react'
import CategoryHeader from '@/components/CategoryHeader'
import PhotoStrip from '@/components/PhotoStrip'
import Pricing from '@/components/Pricing'
import BookCTA from '@/components/BookCTA'
import Policies from '@/components/Policies'
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

const category = getCategory('events')

function Events() {
  return (
    <>
      <CategoryHeader title={category.title} intro='Sports, weddings, engagements and birthday parties, covered from start to finish.'>
        <div className='flex flex-wrap gap-7 mt-3'>
          {category.sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className='text-[12px] tracking-[0.24em] text-ivory pb-[6px] border-b border-line-4 hover:text-gold-light hover:border-gold'
            >
              {section.title.toUpperCase()}
            </a>
          ))}
        </div>
      </CategoryHeader>
      <PhotoStrip images={sports} alt='Events' />
      <Pricing category={category} mergeAs='Event coverage' />
      <BookCTA />
      <Policies />
    </>
  )
}

export default Events

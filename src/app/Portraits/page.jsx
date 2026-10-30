import React from 'react'
import CategoryHeader from '@/components/CategoryHeader'
import PhotoStrip from '@/components/PhotoStrip'
import Pricing from '@/components/Pricing'
import BookCTA from '@/components/BookCTA'
import Policies from '@/components/Policies'
import { getCategory } from '@/data/packages'
import lifestyle1 from '@/assets/Lifestyle/lifestyle1.jpg'
import lifestyle2 from '@/assets/Lifestyle/lifestyle2.jpg'
import lifestyle3 from '@/assets/Lifestyle/lifestyle3.jpg'
import lifestyle4 from '@/assets/Lifestyle/lifestyle4.jpg'
import lifestyle5 from '@/assets/Lifestyle/lifestyle5.jpg'
import lifestyle6 from '@/assets/Lifestyle/lifestyle6.jpg'
import lifestyle7 from '@/assets/Lifestyle/lifestyle7.jpg'
import lifestyle8 from '@/assets/Lifestyle/lifestyle8.jpg'
import lifestyle9 from '@/assets/Lifestyle/lifestyle9.jpg'
import lifestyle10 from '@/assets/Lifestyle/lifestyle10.jpg'
import lifestyle11 from '@/assets/Lifestyle/lifestyle11.jpg'
import lifestyle12 from '@/assets/Lifestyle/lifestyle12.jpg'
import lifestyle13 from '@/assets/Lifestyle/lifestyle13.jpg'
import lifestyle14 from '@/assets/Lifestyle/lifestyle14.jpg'
import lifestyle15 from '@/assets/Lifestyle/lifestyle15.jpg'

export const metadata = { title: 'Lifestyle | GVisions' }

const images = [lifestyle1, lifestyle2, lifestyle3, lifestyle4, lifestyle5, lifestyle6, lifestyle7, lifestyle8, lifestyle9, lifestyle10, lifestyle11, lifestyle12, lifestyle13, lifestyle14, lifestyle15]

const category = getCategory('lifestyle')

function Portraits() {
  return (
    <>
      <CategoryHeader title={category.title} intro='On-location portraits styled around you, from golden-hour streets to city lights after dark.' />
      <PhotoStrip images={images} alt='Lifestyle' />
      <Pricing category={category} />
      <BookCTA />
      <Policies />
    </>
  )
}

export default Portraits

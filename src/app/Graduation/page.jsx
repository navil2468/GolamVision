import React from 'react'
import CategoryHeader from '@/components/CategoryHeader'
import PhotoStrip from '@/components/PhotoStrip'
import Pricing from '@/components/Pricing'
import BookCTA from '@/components/BookCTA'
import Policies from '@/components/Policies'
import { getCategory } from '@/data/packages'
import grad1 from '@/assets/Grad/grad1.jpg'
import grad2 from '@/assets/Grad/grad2.jpg'
import grad3 from '@/assets/Grad/grad3.jpg'
import grad4 from '@/assets/Grad/grad4.jpg'
import grad5 from '@/assets/Grad/grad5.jpg'
import grad6 from '@/assets/Grad/grad6.jpg'
import grad7 from '@/assets/Grad/grad7.jpg'
import grad8 from '@/assets/Grad/grad8.jpg'
import grad9 from '@/assets/Grad/grad9.jpg'

export const metadata = { title: 'Graduation & Prom | GVisions' }

const images = [grad1, grad2, grad3, grad4, grad5, grad6, grad7, grad8, grad9]

const category = getCategory('graduation')

function Graduation() {
  return (
    <>
      <CategoryHeader title={category.title} intro='Cap-and-gown portraits, prom looks and studio sessions to mark the milestone.' />
      <PhotoStrip images={images} alt='Graduation' />
      <Pricing category={category} />
      <BookCTA />
      <Policies />
    </>
  )
}

export default Graduation

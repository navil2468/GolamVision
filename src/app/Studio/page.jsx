import React from 'react'
import CategoryHeader from '@/components/CategoryHeader'
import Pricing from '@/components/Pricing'
import BookCTA from '@/components/BookCTA'
import Policies from '@/components/Policies'
import { getCategory } from '@/data/packages'

export const metadata = { title: 'Studio | GVisions' }

const category = getCategory('studio')

function Studio() {
  return (
    <>
      <CategoryHeader title={category.title} intro='Controlled light, clean backdrops and retouched finals for individuals, families, businesses and maternity.' />
      <Pricing category={category} />
      <BookCTA />
      <Policies />
    </>
  )
}

export default Studio

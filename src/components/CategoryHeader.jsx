import React from 'react'
import Eyebrow from './Eyebrow'

function CategoryHeader({ title, intro, children }) {
  return (
    <section className='container-gv pt-[clamp(56px,7vw,104px)] pb-12 flex flex-col gap-[22px]'>
      <Eyebrow>PACKAGES &amp; PRICING</Eyebrow>
      <h1 className='font-display font-medium text-[clamp(56px,7vw,104px)] leading-[0.95]'>{title}</h1>
      <p className='text-[18px] leading-[1.65] text-muted max-w-[34em]'>{intro}</p>
      {children}
    </section>
  )
}

export default CategoryHeader

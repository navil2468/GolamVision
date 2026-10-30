import React from 'react'
import FadeInImage from './FadeInImage'

// horizontally scrolling, snap-aligned row of tall crops
function PhotoStrip({ images, alt }) {
  return (
    <div className='flex gap-3 overflow-x-auto px-[clamp(20px,4vw,48px)] pb-6 snap-x snap-mandatory [scrollbar-width:thin] [scrollbar-color:#4A443B_transparent]'>
      {images.map((img, i) => (
        <FadeInImage
          key={i}
          src={img}
          alt={`${alt} ${i + 1}`}
          sizes='320px'
          className='h-[min(560px,70vh)] w-auto max-w-none aspect-[9/16] object-cover flex-none snap-start'
        />
      ))}
    </div>
  )
}

export default PhotoStrip

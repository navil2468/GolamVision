import React from 'react'
import FadeInImage from './FadeInImage'

// Masonry-style grid: images are dealt round-robin into three columns
function Gallery({ images, alt }) {
  const columns = [[], [], []]
  images.forEach((img, i) => columns[i % 3].push({ img, i }))

  return (
    <div className='max-w-[1232px] mx-auto px-[clamp(20px,4vw,40px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-10'>
      {columns.map((column, c) => (
        <div key={c} className='flex flex-col gap-10'>
          {column.map(({ img, i }) => (
            <FadeInImage key={i} src={img} alt={`${alt} ${i + 1}`} className='w-full h-auto' />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Gallery

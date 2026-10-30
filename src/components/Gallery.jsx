import React from 'react'
import FadeInImage from './FadeInImage'

// Masonry-style grid: images are dealt round-robin into three columns
function Gallery({ images, alt }) {
  const columns = [[], [], []]
  images.forEach((img, i) => columns[i % 3].push({ img, i }))

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {columns.map((column, c) => (
          <div key={c} className='flex flex-col gap-10'>
            {column.map(({ img, i }) => (
              <FadeInImage key={i} src={img} alt={`${alt} ${i + 1}`} className='w-full rounded-lg' />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

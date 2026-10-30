'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

function FadeInImage( props ) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.6,
      }
    )

    if (img) {
      observer.observe(img)
    }

    return () => {
      if (img) {
        observer.unobserve(img)
      }
    }
  }, [])

  // keep the intrinsic aspect ratio unless a fixed height class is passed in
  const heightClass = /(^|\s)h-/.test(props.className) ? '' : 'h-auto'

  return (
    <Image
      ref={imgRef}
      src={props.src}
      alt={props.alt}
      sizes="(min-width: 768px) 33vw, 100vw"
      className={`${props.className} ${heightClass} transition-opacity duration-1000 ${
        isLoaded && isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onLoad={() => setIsLoaded(true)}
    />
  )
}

export default FadeInImage

// Usage remains the same in your gallery pages:
// <FadeInImage src={car1} alt="Car 1" className='w-full rounded-lg' />

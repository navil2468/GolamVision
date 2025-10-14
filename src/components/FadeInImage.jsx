import React, { useState, useEffect, useRef } from 'react'

function FadeInImage( props ) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
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

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  return (
    <img
      ref={imgRef}
      src={props.src}
      alt={props.alt}
      className={`${props.className} transition-opacity duration-1000 ${
        isLoaded && isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
    />
  )
}

export default FadeInImage

// Usage remains the same in your gallery pages:
// <FadeInImage src={car1} alt="Car 1" className='w-full rounded-lg' />
'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

// Images already on screen at load show immediately; the rest fade in as they scroll into view.
function FadeInImage({ alt, className = '', sizes = '(min-width: 768px) 33vw, 100vw', ...props }) {
  const imgRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img || !('IntersectionObserver' in window)) return
    if (img.getBoundingClientRect().top < window.innerHeight) return

    img.style.opacity = '0'
    img.style.transition = 'opacity 1s ease'
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(img)

    return () => observer.disconnect()
  }, [])

  return <Image ref={imgRef} alt={alt} sizes={sizes} className={`block ${className}`} {...props} />
}

export default FadeInImage

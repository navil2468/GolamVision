'use client'

import React from 'react'

// smooth-scrolls to an element, leaving room for the sticky header
function ScrollButton({ targetId, offset = 0, className, children }) {
  const handleClick = () => {
    const el = document.getElementById(targetId)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
  }

  return (
    <button type='button' onClick={handleClick} className={className}>
      {children}
    </button>
  )
}

export default ScrollButton

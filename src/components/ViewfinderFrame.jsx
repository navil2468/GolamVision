import React from 'react'

// the camera-viewfinder corner brackets from the logo, drawn around a child image
const corners = [
  'top-0 left-0 border-t-[1.5px] border-l-[1.5px]',
  'top-0 right-0 border-t-[1.5px] border-r-[1.5px]',
  'bottom-0 left-0 border-b-[1.5px] border-l-[1.5px]',
  'bottom-0 right-0 border-b-[1.5px] border-r-[1.5px]',
]

function ViewfinderFrame({ className = '', children }) {
  return (
    <div className={`relative p-[18px] ${className}`}>
      {corners.map((c) => (
        <span key={c} className={`absolute w-[34px] h-[34px] border-gold ${c}`} />
      ))}
      {children}
    </div>
  )
}

export default ViewfinderFrame

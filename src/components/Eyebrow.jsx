import React from 'react'

function Eyebrow({ children }) {
  return (
    <div className='eyebrow-label flex items-center gap-[14px]'>
      <span className='w-10 h-px bg-gold' />
      {children}
    </div>
  )
}

export default Eyebrow

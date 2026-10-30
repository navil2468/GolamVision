import React from 'react'

// menu-style rows: name · duration ...... price, with features underneath
function PackageList({ items }) {
  return (
    <div className='flex flex-col'>
      {items.map(({ pkg, anchor }) => (
        <div key={pkg.name} id={anchor} className='flex flex-col gap-2 py-[22px] border-b border-row scroll-mt-[100px]'>
          <div className='flex items-baseline gap-4'>
            <span className='font-display text-[28px] font-medium leading-[1.15]'>{pkg.name}</span>
            <span className='text-[12px] tracking-[0.2em] text-muted whitespace-nowrap'>{pkg.duration.toUpperCase()}</span>
            <span className='flex-1 min-w-6 border-b border-dotted border-line-4 -translate-y-[6px]' />
            <span className='font-display text-[32px] font-medium text-gold leading-none'>${pkg.price}</span>
          </div>
          {pkg.features.length > 0 && (
            <p className='text-[15px] leading-[1.6] text-muted max-w-[46em] whitespace-pre-wrap'>
              {pkg.features.join('  ·  ')}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default PackageList

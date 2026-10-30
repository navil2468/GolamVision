import React from 'react'

function PackageCard({ pkg }) {
  return (
    <div className='flex flex-col w-full sm:w-80 border border-neutral-700 rounded-lg p-6 bg-neutral-950 hover:border-yellow-500 transition-colors'>
      <h3 className='text-2xl font-bold text-white'>{pkg.name}</h3>
      <p className='text-neutral-400 mt-1'>{pkg.duration}</p>
      <p className='text-4xl font-bold text-yellow-500 my-4'>${pkg.price}</p>
      {pkg.features.length > 0 && (
        <ul className='space-y-2 text-gray-300'>
          {pkg.features.map((f) => (
            <li key={f} className='flex gap-2'>
              <span className='text-yellow-500'>✰</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PackageCard

import React from 'react'
import { LATE_POLICY } from '@/data/packages'

function LatePolicy() {
  return (
    <div className='max-w-3xl mx-auto'>
      <h3 className='text-2xl font-bold text-white text-center mb-4'>Late Policy</h3>
      <ul className='space-y-2 text-gray-400 text-sm list-disc pl-5'>
        {LATE_POLICY.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  )
}

export default LatePolicy

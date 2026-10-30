import React from 'react'
import { DEPOSIT_NOTE } from '@/data/packages'

function DepositNote() {
  return (
    <p className='max-w-3xl mx-auto text-center text-gray-300 border border-yellow-500/40 rounded-lg px-6 py-4'>
      <span className='font-bold text-yellow-500'>Before booking: </span>
      {DEPOSIT_NOTE}
    </p>
  )
}

export default DepositNote

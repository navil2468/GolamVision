import React from 'react'
import { DEPOSIT_NOTE, LATE_POLICY } from '@/data/packages'

function Policies() {
  return (
    <section className='container-gv py-[clamp(56px,7vw,96px)] flex flex-wrap gap-[clamp(32px,5vw,72px)]'>
      <div className='flex flex-col gap-[14px] flex-[1_1_280px]'>
        <div className='eyebrow-label'>DEPOSIT</div>
        <p className='text-[15px] leading-[1.7] text-muted'>{DEPOSIT_NOTE}</p>
      </div>
      <div className='flex flex-col gap-[14px] flex-[2_1_480px]'>
        <div className='eyebrow-label'>LATE POLICY</div>
        <ol className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-10 gap-y-4'>
          {LATE_POLICY.map((line, i) => (
            <li key={line} className='flex gap-[14px] text-[15px] leading-[1.7] text-muted'>
              <span className='font-display text-[20px] leading-[1.3] text-faint'>{String(i + 1).padStart(2, '0')}</span>
              <span>{line}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Policies

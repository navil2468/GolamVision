import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import monogram from '@/assets/monogram.png'

function BookCTA() {
  return (
    <section className='mt-[clamp(64px,8vw,120px)] border-y border-line bg-ink-2'>
      <div className='container-gv py-[clamp(64px,8vw,112px)] flex flex-col items-center text-center gap-7'>
        <Image src={monogram} alt='' className='h-[72px] w-auto' />
        <h2 className='font-display font-medium text-[clamp(40px,5vw,72px)] leading-none'>Let&apos;s plan your shoot.</h2>
        <p className='text-muted text-[17px] leading-[1.6] max-w-[30em]'>
          Tell me what you have in mind and your preferred date. I&apos;ll reply by email to confirm.
        </p>
        <Link href='/Appointment' className='btn-primary px-[34px]'>BOOK AN APPOINTMENT</Link>
      </div>
    </section>
  )
}

export default BookCTA

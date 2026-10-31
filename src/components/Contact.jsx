import React from 'react'
import { contactMethods } from '@/data/site'

function Contact() {
  return (
    <section id='contact' className='border-b border-line'>
      <div className='container-gv py-12 flex flex-wrap gap-x-[clamp(32px,5vw,72px)] gap-y-8'>
        {contactMethods.map(({ label, value, href, external }) => (
          <div key={label} className='flex flex-col gap-[10px]'>
            <div className='eyebrow-label'>{label}</div>
            <a
              href={href}
              {...(external && { target: '_blank', rel: 'noreferrer' })}
              className='text-[15px] tracking-[0.04em] text-muted hover:text-gold-light'
            >
              {value}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact

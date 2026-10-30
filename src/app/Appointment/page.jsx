'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import Eyebrow from '@/components/Eyebrow'
import { categories, packageOptions, DEPOSIT_NOTE, LATE_POLICY } from '@/data/packages'

const OTHER = 'Other / Not sure yet'

const emptyForm = {
  name: '',
  email: '',
  service: '',
  package: '',
  message: '',
  date: '',
  agreed: false
}

const labelText = 'text-[11px] tracking-[0.28em] text-muted'

function Field({ label, children }) {
  return (
    <label className='flex flex-col gap-[10px]'>
      <span className={labelText}>{label}</span>
      {children}
    </label>
  )
}

function Appointment() {
  const [formData, setFormData] = useState(emptyForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('idle') // 'idle' | 'sent' | 'error'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
      // a new category invalidates the previously picked package
      ...(name === 'service' && { package: '' })
    })
  }

  const selectedCategory = categories.find((c) => c.title === formData.service)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    const templateParams = {
      name: formData.name,
      email: formData.email,
      Service: formData.service,
      Package: formData.package || 'N/A',
      Message: formData.message,
      date: formData.date,
      from_email: formData.email
    }

    emailjs.send(
      'service_75pgrk5',
      'template_znteavv',
      templateParams,
      '8EPJp1sFt2fTo6DRp'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      setStatus('sent')
      setIsSubmitting(false)
      window.scrollTo(0, 0)
    })
    .catch((error) => {
      console.log('FAILED...', error)
      setStatus('error')
      setIsSubmitting(false)
    })
  }

  return (
    <section className='container-gv py-[clamp(56px,7vw,104px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-[clamp(40px,6vw,96px)] items-start'>
      <div className='flex flex-col gap-6 sticky top-[110px]'>
        <Eyebrow>BOOKING</Eyebrow>
        <h1 className='font-display font-medium text-[clamp(52px,6vw,88px)] leading-[0.95]'>Book an appointment</h1>
        <p className='text-[17px] leading-[1.65] text-muted max-w-[26em]'>
          Pick a service and package, choose a date, and tell me about the shoot. You&apos;ll get a reply by email to confirm details and the deposit.
        </p>
      </div>

      {status === 'sent' ? (
        <div className='border border-line-2 p-12 flex flex-col gap-[18px] items-start'>
          <div className='eyebrow-label'>REQUEST SENT</div>
          <h2 className='font-display font-medium text-[44px] leading-[1.05]'>Thank you, {formData.name}.</h2>
          <p className='text-[16px] leading-[1.65] text-muted'>Check your inbox for a reply confirming your date and deposit.</p>
          <Link href='/' className='btn-secondary px-[26px] py-[14px] text-[12px]'>BACK TO HOME</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='flex flex-col gap-[30px]'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[30px]'>
            <Field label='NAME'>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Your full name'
                className='form-field'
              />
            </Field>
            <Field label='EMAIL'>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='you@email.com'
                className='form-field'
              />
            </Field>
          </div>

          <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[30px]'>
            <Field label='SERVICE'>
              <select
                name='service'
                value={formData.service}
                onChange={handleChange}
                required
                className='form-field'
              >
                <option value=''>Select a service</option>
                {categories.map((c) => (
                  <option key={c.slug} value={c.title}>{c.title}</option>
                ))}
                <option value={OTHER}>{OTHER}</option>
              </select>
            </Field>
            <Field label='PREFERRED DATE'>
              <input
                type='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                required
                className='form-field'
              />
            </Field>
          </div>

          {selectedCategory && (
            <Field label='PACKAGE'>
              <select
                name='package'
                value={formData.package}
                onChange={handleChange}
                required
                className='form-field'
              >
                <option value=''>Select a package</option>
                {packageOptions(selectedCategory).map((label) => (
                  <option key={label} value={label}>{label}</option>
                ))}
              </select>
            </Field>
          )}

          <Field label='MESSAGE'>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              rows='4'
              placeholder='Locations, number of people, outfits, anything I should know'
              className='form-field resize-none leading-[1.6]'
            />
          </Field>

          <div className='border border-line-2 bg-ink-2 p-[26px] flex flex-col gap-[18px]'>
            <p className='text-[15px] leading-[1.7] text-muted'>
              <span className='text-[11px] tracking-[0.28em] text-gold mr-[10px]'>DEPOSIT</span>
              {DEPOSIT_NOTE}
            </p>
            <div className='flex flex-col gap-2'>
              <span className='text-[11px] tracking-[0.28em] text-gold'>LATE POLICY</span>
              {LATE_POLICY.map((line) => (
                <p key={line} className='text-[14px] leading-[1.65] text-muted-2'>{line}</p>
              ))}
            </div>
            <label className='flex items-start gap-3 cursor-pointer text-ivory text-[15px] leading-[1.5] pt-[6px] border-t border-line'>
              <input
                type='checkbox'
                name='agreed'
                checked={formData.agreed}
                onChange={handleChange}
                required
                className='mt-[14px] w-[18px] h-[18px] shrink-0 accent-gold'
              />
              <span className='pt-[10px]'>I understand the 50% non-refundable deposit and the late policy.</span>
            </label>
          </div>

          {status === 'error' && (
            <p className='text-[14px] text-gold-light'>
              Something went wrong. Please try again or message me on Instagram.
            </p>
          )}

          <button type='submit' disabled={isSubmitting} className='btn-primary w-full p-[18px] tracking-[0.24em]'>
            {isSubmitting ? 'SENDING…' : 'REQUEST BOOKING'}
          </button>
        </form>
      )}
    </section>
  )
}

export default Appointment

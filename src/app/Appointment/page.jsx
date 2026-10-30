'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import emailjs from '@emailjs/browser'
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

function Appointment() {
  const [formData, setFormData] = useState(emptyForm)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
      alert('Appointment booked, check your email inbox for a reply!')
      setFormData(emptyForm)
      setIsSubmitting(false)
    })
    .catch((error) => {
      console.log('FAILED...', error)
      alert('Failed to book appointment. Please try again.')
      setIsSubmitting(false)
    })
  }

  return (
    <>
      <Navbar />
      <div className='bg-black min-h-screen py-12 px-4'>
        <h1 className='text-center text-5xl font-bold mb-10 text-white' style={{ fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }}>BOOK AN APPOINTMENT</h1>
        
        <div className='max-w-2xl mx-auto'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-white text-lg font-semibold mb-2'>Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 rounded-lg bg-neutral-900 text-white border border-neutral-700 focus:border-yellow-500 focus:outline-none'
                placeholder='Enter your name'
              />
            </div>

            <div>
              <label className='block text-white text-lg font-semibold mb-2'>Email</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 rounded-lg bg-neutral-900 text-white border border-neutral-700 focus:border-yellow-500 focus:outline-none'
                placeholder='Enter your email'
              />
            </div>

            <div>
              <label className='block text-white text-lg font-semibold mb-2'>Service</label>
              <select
                name='service'
                value={formData.service}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 rounded-lg bg-neutral-900 text-white border border-neutral-700 focus:border-yellow-500 focus:outline-none'
              >
                <option value=''>Select a service</option>
                {categories.map((c) => (
                  <option key={c.slug} value={c.title}>{c.title}</option>
                ))}
                <option value={OTHER}>{OTHER}</option>
              </select>
            </div>

            {selectedCategory && (
              <div>
                <label className='block text-white text-lg font-semibold mb-2'>Package</label>
                <select
                  name='package'
                  value={formData.package}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-lg bg-neutral-900 text-white border border-neutral-700 focus:border-yellow-500 focus:outline-none'
                >
                  <option value=''>Select a package</option>
                  {packageOptions(selectedCategory).map((label) => (
                    <option key={label} value={label}>{label}</option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className='block text-white text-lg font-semibold mb-2'>Preferred Date</label>
              <input
                type='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                required
                className='w-full px-4 py-3 rounded-lg bg-neutral-900 text-white border border-neutral-700 focus:border-yellow-500 focus:outline-none'
              />
            </div>

            <div>
              <label className='block text-white text-lg font-semibold mb-2'>Message</label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows='5'
                className='w-full px-4 py-3 rounded-lg bg-neutral-900 text-white border border-neutral-700 focus:border-yellow-500 focus:outline-none resize-none'
                placeholder='Tell me more about what you need'
              />
            </div>

            <div className='rounded-lg border border-neutral-700 bg-neutral-950 p-5 space-y-3 text-gray-300'>
              <p><span className='font-bold text-yellow-500'>Deposit: </span>{DEPOSIT_NOTE}</p>
              <div>
                <p className='font-bold text-yellow-500'>Late Policy:</p>
                <ul className='list-disc pl-5 text-sm text-gray-400 space-y-1'>
                  {LATE_POLICY.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
              <label className='flex items-start gap-3 text-white cursor-pointer'>
                <input
                  type='checkbox'
                  name='agreed'
                  checked={formData.agreed}
                  onChange={handleChange}
                  required
                  className='mt-1 h-5 w-5 accent-yellow-500'
                />
                <span>I understand the 50% non-refundable deposit and the late policy.</span>
              </label>
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-yellow-500 text-black font-bold text-xl py-4 rounded-lg hover:bg-yellow-50 transition-colors disabled:opacity-50 hover:cursor-pointer'
            >
              {isSubmitting ? 'Booking...' : 'Book Appointment'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Appointment

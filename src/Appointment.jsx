import React, { useState } from 'react'
import Navbar from './components/Navbar'
import emailjs from '@emailjs/browser'

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    date: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const templateParams = {
      name: formData.name,
      email: formData.email,
      Service: formData.service,
      Message: formData.message,
      date: formData.date,
      from_email: formData.email
    }

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_PUBLIC_KEY'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      alert('Appointment booked, check your email inbox for a reply!')
      setFormData({
        name: '',
        email: '',
        service: '',
        message: '',
        date: ''
      })
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
                <option value='Car Photography'>Car Photography</option>
                <option value='Landscape Photography'>Landscape Photography</option>
                <option value='Portrait Photography'>Portrait Photography</option>
                <option value='Event Coverage'>Event Coverage</option>
                <option value='Videography'>Videography</option>
                <option value='Car Rollers'>Car Rollers</option>
              </select>
            </div>

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

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-yellow-500 text-black font-bold text-xl py-4 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
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
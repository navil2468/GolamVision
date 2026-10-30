import { Cormorant_Garamond, Jost } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
})

const jost = Jost({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-jost',
})

export const metadata = {
  title: 'GVisions',
  description: 'Welcome to GVisions - lifestyle, graduation, prom, studio, and event photography that captures the moments and ideas that define you. Book an appointment now!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className='min-h-screen bg-ink'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

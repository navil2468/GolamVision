import React from 'react'
import HeroSection from '@/components/HeroSection'
import Sessions from '@/components/Sessions'
import RecentWork from '@/components/RecentWork'
import About from '@/components/About'
import BookCTA from '@/components/BookCTA'
import Policies from '@/components/Policies'

function App() {
  return (
    <>
      <HeroSection />
      <Sessions />
      <RecentWork />
      <About />
      <BookCTA />
      <Policies />
    </>
  )
}

export default App

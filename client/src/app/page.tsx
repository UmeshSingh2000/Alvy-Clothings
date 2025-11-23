import BoxesSection from '@/components/BoxesSection'
import HeroSection from '@/components/HeroSection'
import { Navbar } from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <main>
      <header className='mt-4'>
        <Navbar />
        <HeroSection />
        <BoxesSection />
      </header>
    </main>
  )
}

export default page

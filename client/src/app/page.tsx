import BoxesSection from '@/components/BoxesSection'

import HeroSection from '@/components/HeroSection'


const page = () => {
  return (
    <main>
      <header className='mt-4'>
        <HeroSection />
        <BoxesSection />
      </header>
    </main>
  )
}

export default page

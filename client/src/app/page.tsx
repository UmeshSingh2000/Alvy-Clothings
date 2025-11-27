import BoxesSection from '@/components/BoxesSection'
import BrandOffers from '@/components/BrandOffers'
import ContactCTA from '@/components/ContactCTA'
import FeaturesSection from '@/components/FeaturesSection'

import HeroSection from '@/components/HeroSection'


const page = () => {
  return (
    <main>
      <header className='mt-4'>
        <HeroSection />
        <BoxesSection />
        <FeaturesSection />
        <BrandOffers />
        <ContactCTA />
      </header>
    </main>
  )
}

export default page

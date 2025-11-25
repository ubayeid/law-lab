import dynamic from 'next/dynamic';
import Navbar from '@/components/LandingPage/Navbar'
import Hero from '@/components/LandingPage/hero'

// Lazy load non-critical components
const HowItWorks = dynamic(() => import('@/components/LandingPage/HowItWorks'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
})
const WhatWeSolve = dynamic(() => import('@/components/LandingPage/WhatWeSolve'), {
  loading: () => <div className="h-96 bg-gray-800 animate-pulse" />
})
const Features = dynamic(() => import('@/components/LandingPage/Features'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
})
const Pricing = dynamic(() => import('@/components/LandingPage/Pricing'), {
  loading: () => <div className="h-96 bg-gray-800 animate-pulse" />
})
const FAQ = dynamic(() => import('@/components/LandingPage/FAQ'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
})
const CTA = dynamic(() => import('@/components/LandingPage/CTA'), {
  loading: () => <div className="h-64 bg-gray-800 animate-pulse" />
})
const Footer = dynamic(() => import('@/components/LandingPage/footer'), {
  loading: () => <div className="h-32 bg-gray-900 animate-pulse" />
})

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhatWeSolve />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

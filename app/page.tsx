import { Navbar } from '@/components/ui/navbar'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { SocialProof } from '@/components/landing/social-proof'
import { VideoTestimonials } from '@/components/landing/video-testimonials'
import { Footer } from '@/components/ui/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <VideoTestimonials />
      <Footer />
    </main>
  )
}

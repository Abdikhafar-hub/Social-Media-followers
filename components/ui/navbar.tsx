'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight">Social<span className="text-primary">Growth</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Features</Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Success Stories</Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Pricing</Link>
            <div className="flex items-center gap-4 ml-4">
              <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">Sign in</Link>
              <Link href="/select-platform">
                <Button className="bg-gradient-primary hover:opacity-90 text-white border-0 rounded-full px-6">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="container px-4 py-6 flex flex-col gap-4">
              <Link href="#features" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Features</Link>
              <Link href="#testimonials" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Success Stories</Link>
              <Link href="#pricing" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Pricing</Link>
              <hr className="border-white/10 my-2" />
              <Link href="/login" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Sign in</Link>
              <Link href="/select-platform" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-primary text-white border-0 rounded-full py-6 text-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

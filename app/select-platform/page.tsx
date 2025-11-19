'use client'

import { motion } from 'framer-motion'
import { Instagram, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/ui/navbar'

// Custom TikTok Icon since Lucide doesn't have it
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
)

export default function SelectPlatform() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-4 pt-20">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Select Your Platform
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              Choose where you want to grow your audience today.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Instagram Card */}
            <Link href="/configure-plan?platform=instagram">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(236, 72, 153, 0.5)' }}
                className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                    <Instagram className="w-10 h-10 text-white" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3">Instagram Growth</h2>
                  <p className="text-muted-foreground mb-8">
                    Get real followers, likes, and comments with our AI-powered organic growth engine.
                  </p>
                  
                  <div className="mt-auto flex items-center text-primary font-bold group-hover:translate-x-1 transition-transform">
                    Select Instagram <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* TikTok Card */}
            <Link href="/configure-plan?platform=tiktok">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                    <TikTokIcon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3">TikTok Growth</h2>
                  <p className="text-muted-foreground mb-8">
                    Explode your views and followers with our viral-focused TikTok growth automation.
                  </p>
                  
                  <div className="mt-auto flex items-center text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                    Select TikTok <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

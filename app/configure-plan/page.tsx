'use client'

import { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Instagram, ArrowRight, Check, Zap, Users, Heart, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/ui/navbar'
import { useRouter, useSearchParams } from 'next/navigation'
import { Slider } from '@/components/ui/slider'

// Custom TikTok Icon
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

function ConfigurePlanContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const platform = searchParams.get('platform') || 'instagram'
  
  const isInstagram = platform === 'instagram'
  const PlatformIcon = isInstagram ? Instagram : TikTokIcon
  const platformName = isInstagram ? 'Instagram' : 'TikTok'
  const gradientClass = isInstagram ? 'from-purple-500 to-pink-500' : 'from-cyan-500 to-blue-500'
  const accentColor = isInstagram ? 'text-pink-500' : 'text-cyan-500'

  const [followers, setFollowers] = useState([1000])
  const [likes, setLikes] = useState([500])
  const [videoViews, setVideoViews] = useState([5000])

  // Simple pricing logic
  const basePrice = 29
  const followerPrice = (followers[0] / 100) * 1.5
  const likesPrice = (likes[0] / 100) * 0.5
  const videoViewsPrice = !isInstagram ? (videoViews[0] / 1000) * 0.3 : 0
  const totalPrice = Math.round(basePrice + followerPrice + likesPrice + videoViewsPrice)

  const handleContinue = () => {
    router.push(`/setup/${platform}`)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-4 pt-24 pb-12">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Configuration Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-lg`}>
                  <PlatformIcon className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold">Configure Your Growth</h1>
              </div>
              <p className="text-muted-foreground text-lg">
                Customize your monthly growth targets. You can adjust this at any time.
              </p>
            </div>

            {/* Followers Slider */}
            <div className="bg-card border border-white/10 rounded-3xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Target Followers</h3>
                    <p className="text-sm text-muted-foreground">Monthly growth estimate</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {followers[0].toLocaleString()}+
                </div>
              </div>
              
              <Slider
                value={followers}
                onValueChange={setFollowers}
                max={10000}
                min={500}
                step={100}
                className="py-4"
              />
              
              <div className="flex justify-between text-xs text-muted-foreground font-medium">
                <span>500</span>
                <span>10,000+</span>
              </div>
            </div>

            {/* Likes Slider */}
            <div className="bg-card border border-white/10 rounded-3xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Target Likes</h3>
                    <p className="text-sm text-muted-foreground">Per post engagement</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-pink-400">
                  {likes[0].toLocaleString()}+
                </div>
              </div>
              
              <Slider
                value={likes}
                onValueChange={setLikes}
                max={5000}
                min={100}
                step={50}
                className="py-4"
              />
              
              <div className="flex justify-between text-xs text-muted-foreground font-medium">
                <span>100</span>
                <span>5,000+</span>
              </div>
            </div>

            {/* Video Views Slider - Only for TikTok */}
            {!isInstagram && (
              <div className="bg-card border border-white/10 rounded-3xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Target Video Views</h3>
                      <p className="text-sm text-muted-foreground">Per video engagement</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">
                    {videoViews[0].toLocaleString()}+
                  </div>
                </div>
                
                <Slider
                  value={videoViews}
                  onValueChange={setVideoViews}
                  max={50000}
                  min={1000}
                  step={500}
                  className="py-4"
                />
                
                <div className="flex justify-between text-xs text-muted-foreground font-medium">
                  <span>1,000</span>
                  <span>50,000+</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Summary Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-card border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${gradientClass}`} />
              
              <h2 className="text-2xl font-bold mb-6">Plan Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-muted-foreground">Platform</span>
                  <span className="font-medium flex items-center gap-2">
                    <PlatformIcon className="w-4 h-4" /> {platformName}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-muted-foreground">Target Followers</span>
                  <span className="font-bold text-blue-400">~{followers[0].toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-muted-foreground">Target Likes</span>
                  <span className="font-bold text-pink-400">~{likes[0].toLocaleString()}/post</span>
                </div>
                {!isInstagram && (
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-muted-foreground">Target Video Views</span>
                    <span className="font-bold text-cyan-400">~{videoViews[0].toLocaleString()}/video</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-muted-foreground">AI Targeting</span>
                  <span className="font-medium text-green-400 flex items-center gap-1">
                    <Check className="w-4 h-4" /> Active
                  </span>
                </div>
              </div>

              <div className="flex items-end justify-between mb-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Monthly Price</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">${totalPrice}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white">
                    7-Day Free Trial
                  </span>
                </div>
              </div>

              <Button 
                onClick={handleContinue}
                className={`w-full h-14 text-lg rounded-xl bg-gradient-to-r ${gradientClass} hover:opacity-90 border-0 shadow-lg`}
              >
                Continue to Setup <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-center text-xs text-muted-foreground mt-4">
                No commitment. Cancel anytime.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="font-bold text-sm">Fast Results</p>
                  <p className="text-xs text-muted-foreground">Starts in 2 mins</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="font-bold text-sm">Guaranteed</p>
                  <p className="text-xs text-muted-foreground">Growth warranty</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function ConfigurePlanPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>}>
      <ConfigurePlanContent />
    </Suspense>
  )
}

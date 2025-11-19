'use client'

import { motion } from 'framer-motion'
import { Zap, Target, BarChart3, Cpu, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Zap,
    title: "Auto-Grow Engine",
    description: "Just 5 minutes of setup gets you 730 hours of growth each month. All automatic.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    points: ["24/7 Growth Engine", "On-Demand Experts", "10x Better than Ads"]
  },
  {
    icon: Target,
    title: "AI-Powered Targeting",
    description: "Our AI analyzes millions of users and interacts only with the ones relevant to you.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    points: ["AI Optimized Audience", "Fast Organic Growth", "Integrated Safety"]
  },
  {
    icon: BarChart3,
    title: "Live Reports",
    description: "Track your Instagram growth in real-time with beautiful reports and rich analytics.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    points: ["Track Growth Results", "Audience Analytics", "AI Strategy Optimization"]
  },
  {
    icon: Cpu,
    title: "AI-Match™ Technology",
    description: "Train your AI model to better identify your ideal target followers by swiping.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    points: ["Growth Auto-Optimization", "Location Targeting Filter", "Smart Followers Magnet"],
    highlight: true
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The #1 Rated Social Growth Service</h2>
          <p className="text-lg text-muted-foreground">
            We help you get more followers, likes and comments (and a bunch of other stuff) 10x faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border ${feature.highlight ? 'border-primary/50 bg-primary/5' : 'border-white/5 bg-white/5'} hover:border-white/10 transition-colors group`}
            >
              {feature.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  New Feature
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-3 mb-8">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className={`w-4 h-4 mt-0.5 ${feature.color}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={feature.highlight ? "default" : "outline"}
                className={`w-full rounded-full ${feature.highlight ? 'bg-gradient-primary border-0' : 'border-white/10 hover:bg-white/5'}`}
              >
                {feature.highlight ? 'Try AI-Match' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

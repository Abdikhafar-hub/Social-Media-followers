'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Instagram } from 'lucide-react'
import Image from 'next/image'

const successStories = [
  {
    name: "Topman",
    handle: "@topman",
    category: "Retail",
    followers: "755K",
    growth: "+213k",
    color: "from-blue-600 to-blue-400",
    image: "/man-portrait.jpg"
  },
  {
    name: "Nicolette Mason",
    handle: "@nicolettemason",
    category: "Influencer",
    followers: "191K",
    growth: "+17k",
    color: "from-slate-800 to-slate-700",
    image: "/woman-portrait.jpg"
  },
  {
    name: "Chad Carroll",
    handle: "@chadcarroll",
    category: "Realtor",
    followers: "512K",
    growth: "+89k",
    color: "from-yellow-500 to-yellow-300",
    image: "/man-suit.jpg"
  },
  {
    name: "AWAY",
    handle: "@away",
    category: "E-commerce",
    followers: "563K",
    growth: "+78k",
    color: "from-yellow-400 to-orange-400",
    image: "/travel-bag.jpg"
  },
  {
    name: "Paper Source",
    handle: "@papersource",
    category: "E-commerce",
    followers: "258K",
    growth: "+188k",
    color: "from-zinc-800 to-zinc-900",
    image: "/stationery-flatlay.png"
  }
]

export function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="testimonials" className="py-20 md:py-32 overflow-hidden bg-background/50">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <div className="hidden md:flex gap-2">
            {/* Navigation buttons could go here */}
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div 
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 30 
          }}
        >
          {[...successStories, ...successStories].map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex-none w-[300px] md:w-[350px] h-[220px] rounded-2xl p-6 bg-gradient-to-br ${story.color} relative group cursor-pointer overflow-hidden hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Instagram className="w-24 h-24" />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-medium opacity-80 mb-1 uppercase tracking-wider">{story.category}</div>
                    <h3 className="text-xl font-bold truncate max-w-[160px]">{story.name}</h3>
                    <p className="text-sm opacity-80">{story.handle}</p>
                  </div>
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                    <Image 
                      src={story.image || "/placeholder.svg"} 
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex items-end justify-between mt-4">
                  <div>
                    <div className="text-xs opacity-80 mb-1">Total Followers</div>
                    <div className="text-2xl font-bold">{story.followers}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs opacity-80 mb-1">Growth</div>
                    <div className="text-2xl font-bold flex items-center gap-1">
                      {story.growth}
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

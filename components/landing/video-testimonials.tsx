'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Image from 'next/image'

const videos = [
  {
    name: "Todrick Hall",
    handle: "@todrick",
    followers: "1.7M Followers",
    image: "/diverse-person-portrait.png",
    color: "border-green-400"
  },
  {
    name: "Jake Pitts",
    handle: "@jakepittsbvb",
    followers: "592K Followers",
    image: "/diverse-musician-ensemble.png",
    color: "border-orange-400"
  },
  {
    name: "Gary Holt",
    handle: "@garyholt_official",
    followers: "424K Followers",
    image: "/guitarist.png",
    color: "border-yellow-400"
  },
  {
    name: "Evan Breen",
    handle: "@laturtle69",
    followers: "614K Followers",
    image: "/diverse-influencers-content-creation.png",
    color: "border-pink-400"
  }
]

export function VideoTestimonials() {
  return (
    <section className="py-20 md:py-32 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Video Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our top creators have to say about their growth journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer border-2 ${video.color}`}
            >
              <Image
                src={video.image || "/placeholder.svg"}
                alt={video.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <Play className="w-5 h-5 text-black fill-black ml-1" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                     <Image src={video.image || "/placeholder.svg"} alt={video.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{video.name}</div>
                    <div className="text-xs text-white/80">{video.handle}</div>
                  </div>
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md text-white border border-white/20`}>
                  {video.followers}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

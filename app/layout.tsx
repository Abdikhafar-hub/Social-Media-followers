import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SocialGrowth - Organic AI-Driven Growth',
  description: 'Grow your Instagram and TikTok followers with real, engaged people using our proprietary AI technology.',
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  )
}

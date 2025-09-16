'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

// Testimonials data structure - translations handled by language context
const testimonialsData = [
  {
    id: 1,
    projectImage: '/testimonials/image1.png',
    aspectRatio: 'aspect-[16/9]',
    translationKey: 'testimonial1'
  },
  {
    id: 2,
    projectImage: '/testimonials/image6.png',
    aspectRatio: 'aspect-[9/16]',
    translationKey: 'testimonial2'
  },
  {
    id: 3,
    projectImage: '/testimonials/web1.png',
    aspectRatio: 'aspect-[4/3]',
    translationKey: 'testimonial3'
  }
]

export function Testimonials() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % testimonialsData.length)
      }, 5000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered])

  // Mouse tracking for subtle 3D effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setMousePosition({ x, y })
    }
  }

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section id="testimonios" className="min-h-screen flex flex-col justify-center px-6 py-32 relative" style={{ backgroundColor: '#080C36' }}>
      
      {/* Binary code decoration - Left */}
      <div className="absolute left-16 top-1/3 accent-text text-xs font-mono leading-loose opacity-30">
        1101100101011001010111001010110010<br />
        1011001010100010101100101001011001<br />
        0101100101011101001010110010101101<br />
        0101100101011001010110010101110100<br />
        1010110011001010011001010110110010<br />
        1011001010111001010110010101100101<br />
        0100010101100101001011001010110010<br />
        1011101001010110010101101010110010
      </div>

      {/* Binary code decoration - Right */}
      <div className="absolute right-16 bottom-1/3 accent-text text-xs font-mono leading-loose opacity-30 text-right">
        1001010011010101100101011101001010<br />
        1100110010110110010101100101011100<br />
        1010110010101100101010001010110010<br />
        1001011001010110010101110100101011<br />
        0010101101010110010101100101011001<br />
        0101110100101011001100101001101010<br />
        1100101011101001010110011001011011<br />
        0010101100101011100101011001010110
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white tracking-wider mb-8">
            {t('testimonials.title')}
          </h2>
        </div>

        {/* 3D Card Stack - Simplified */}
        <div 
          ref={containerRef}
          className="relative max-w-5xl mx-auto perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card Stack Container */}
          <div className="relative h-[500px] flex items-center justify-center">
            {testimonialsData.map((testimonialData, index) => {
              const offset = index - activeIndex
              const isActive = index === activeIndex
              const isVisible = Math.abs(offset) <= 1
              
              if (!isVisible) return null

              return (
                <div
                  key={testimonialData.id}
                  className={`absolute w-full max-w-4xl transition-all duration-700 ease-out cursor-pointer transform-gpu ${
                    isActive ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    transform: `
                      translateX(${offset * 200}px) 
                      rotateY(${isActive ? mousePosition.x * 3 : offset * 15}deg)
                      rotateX(${isActive ? -mousePosition.y * 3 : 0}deg)
                      scale(${isActive ? 1 : 0.85})
                    `,
                    opacity: isActive ? 1 : 0.4
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  {/* Main Card - Solid color design */}
                  <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
                    
                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Project Showcase */}
                      <div className="relative">
                        {/* Project Image - Uniform size */}
                        <div className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
                          <Image
                            src={testimonialData.projectImage}
                            alt={t(`${testimonialData.translationKey}.project`)}
                            fill
                            className="object-cover"
                          />
                          
                          {/* Simple overlay with project info */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                            <div className="absolute bottom-4 left-4 text-white">
                              <h3 className="text-xl font-bold mb-1">{t(`${testimonialData.translationKey}.project`)}</h3>
                              <p className="text-white/80 text-sm">{t(`${testimonialData.translationKey}.company`)}</p>
                              <p className="accent-text text-xs">{t(`${testimonialData.translationKey}.category`)} • {t(`${testimonialData.translationKey}.year`)}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="space-y-6">
                        {/* Quote */}
                        <div className="relative">
                          <div className="text-6xl accent-text font-serif absolute -top-4 -left-4 opacity-30 select-none">"</div>
                          <blockquote className="text-white text-xl md:text-2xl leading-relaxed font-light italic pl-6">
                            {t(`${testimonialData.translationKey}.quote`)}
                          </blockquote>
                        </div>

                        {/* Client Info */}
                        <div className="flex items-center gap-4 pt-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-600">
                            <Image
                              src={testimonialData.projectImage}
                              alt={t(`${testimonialData.translationKey}.client`)}
                              width={64}
                              height={64}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white">{t(`${testimonialData.translationKey}.client`)}</h4>
                            <p className="accent-text font-semibold">{t(`${testimonialData.translationKey}.role`)}</p>
                            <p className="text-white/70 text-sm">{t(`${testimonialData.translationKey}.company`)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Arrow Navigation Only */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setActiveIndex(prev => prev === 0 ? testimonialsData.length - 1 : prev - 1)}
              className="bg-slate-700 hover:bg-slate-600 border border-slate-600 p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex(prev => (prev + 1) % testimonialsData.length)}
              className="p-3 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg border border-pink-500/50"
              style={{ backgroundColor: '#CE125D' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .accent-text {
          color: #CE125D;
        }
      `}</style>
    </section>
  )
}
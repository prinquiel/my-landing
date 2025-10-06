'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/language-context'

// Projects data structure - translations handled by language context
const projectsData = [
  {
    id: 1,
    projectImage: '/testimonials/image1.png',
    aspectRatio: 'aspect-[16/9]',
    translationKey: 'project1',
    technologies: ['React', 'Next.js', 'TypeScript'],
    year: '2024'
  },
  {
    id: 2,
    projectImage: '/testimonials/image2.png',
    aspectRatio: 'aspect-[9/16]',
    translationKey: 'project2',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    year: '2023'
  },
  {
    id: 3,
    projectImage: '/testimonials/enrollment_system.mov',
    aspectRatio: 'aspect-[4/3]',
    translationKey: 'project3',
    technologies: ['React Native', 'Express', 'PostgreSQL'],
    year: '2024'
  }
]

export function Testimonials() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-rotate projects
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % projectsData.length)
      }, 5000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered])

  return (
    <section id="proyectos" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32 relative" style={{ backgroundColor: '#080C36' }}>
      
      {/* Binary code decoration - Left */}
      <div className="absolute left-4 lg:left-16 top-1/3 accent-text text-xs font-mono leading-loose opacity-30">
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
      <div className="absolute right-4 lg:right-16 bottom-1/3 accent-text text-xs font-mono leading-loose opacity-30 text-right">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider mb-8">
            {t('proyectos.title')}
          </h2>
        </div>

        {/* Clean Project Showcase */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Project Image/Video */}
          <div className="relative mb-8">
            <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              {projectsData[activeIndex].projectImage.endsWith('.mov') ? (
                <video
                  src={projectsData[activeIndex].projectImage}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                />
              ) : (
                <Image
                  src={projectsData[activeIndex].projectImage}
                  alt={t(`${projectsData[activeIndex].translationKey}.title`)}
                  fill
                  className="object-cover transition-all duration-700 ease-out"
                  quality={95}
                  priority
                />
              )}
              
              {/* Subtle overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Project title overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  {t(`${projectsData[activeIndex].translationKey}.title`)}
                </h3>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light">
              {t(`${projectsData[activeIndex].translationKey}.description`)}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() => setActiveIndex(prev => prev === 0 ? projectsData.length - 1 : prev - 1)}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 p-4 rounded-full text-white transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Project indicators */}
            <div className="flex gap-2">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-pink-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setActiveIndex(prev => (prev + 1) % projectsData.length)}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 p-4 rounded-full text-white transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .accent-text {
          color: #CE125D;
        }
      `}</style>
    </section>
  )
}
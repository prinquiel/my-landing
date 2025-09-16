'use client';

import Image from "next/image";
import { useLanguage } from '@/lib/language-context';

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="min-h-[120vh] flex flex-col justify-center px-6 py-32 relative">
      {/* Section divider - Top */}
      <div className="absolute top-0 w-full">
        <div className="h-px bg-white border-b border-white"></div>
      </div>
      
      {/* Binary code decoration - Left */}
      <div className="absolute left-16 top-1/4 accent-text text-xs font-mono leading-loose opacity-40">
        1101100101011001010111001010110010<br />
        1011001010100010101100101001011001<br />
        0101100101011101001010110010101101<br />
        0101100101011001010110010101110100<br />
        1010110011001010011001010110110010<br />
        1011001010111001010110010101100101<br />
        0100010101100101001011001010110010<br />
        1011101001010110010101101010110010<br />
        1011001010110010101110100101011001
      </div>

      {/* Binary code decoration - Right */}
      <div className="absolute right-16 top-1/3 accent-text text-xs font-mono leading-loose opacity-40 text-right">
        1001010011010101100101011101001010<br />
        1100110010110110010101100101011100<br />
        1010110010101100101010001010110010<br />
        1001011001010110010101110100101011<br />
        0010101101010110010101100101011001<br />
        0101110100101011001100101001101010<br />
        1100101011101001010110011001011011<br />
        0010101100101011100101011001010110<br />
        0101010001010110010100101100101011
      </div>

      {/* Title with aurora gradient */}
      <div className="relative text-center mb-8">
        {/* Aurora gradient background */}
        <div className="absolute inset-0 -mx-32 -my-8">
          <div className="w-full h-full bg-gradient-to-r from-[#CE125D]/20 via-[#CE125D]/30 to-[#CE125D]/20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-20 bg-[#CE125D]/40 blur-2xl"></div>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-6xl font-bold text-white tracking-wider">
            {t('about.title')}
          </h2>
        </div>
      </div>

      {/* Images section with center text */}
      <div className="relative max-w-7xl mx-auto w-full mt-12">
        <div className="relative">
          {/* Background overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10"></div>
          
          {/* Left Image - Angled */}
          <div className="absolute left-0 top-8 w-[45%] h-[400px] overflow-hidden rounded-2xl border border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
            <Image
              src="/about/about1.jpg"
              alt="About us - Image 1"
              fill
              className="object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
            />
          </div>
          
          {/* Right Image - Angled opposite */}
          <div className="absolute right-0 top-16 w-[45%] h-[400px] overflow-hidden rounded-2xl border border-white/20 transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
            <Image
              src="/about/about2.jpg"
              alt="About us - Image 2"
              fill
              className="object-cover opacity-60 hover:opacity-80 transition-opacity duration-300"
            />
          </div>
          
          {/* Center text overlay with glassmorphism card */}
          <div className="relative z-20 flex items-center justify-center h-[500px]">
            <div className="bg-black/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl max-w-lg text-center transform hover:scale-105 transition-all duration-300">
              <h3 className="text-white text-2xl md:text-3xl font-light leading-relaxed tracking-wide">
                {t('about.center.line1')}<br />
                <span className="accent-text font-medium">{t('about.center.highlight')}</span> {t('about.center.line2')}<br />
                <span className="text-white/90">{t('about.center.line3')}</span>
              </h3>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mt-6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Text content section */}
      <div className="max-w-5xl mx-auto mt-24 px-8">
        <div className="space-y-8 text-white/90 leading-relaxed">
          {/* First text */}
          <p className="text-lg text-center">
            {t('about.intro.part1')}
            <span className="accent-text font-medium">{t('about.intro.highlight')}</span>{t('about.intro.part2')}
          </p>
          
          {/* Second text */}
          <p className="text-lg text-center">
            {t('about.story')}
          </p>
          
          {/* Third text */}
          <div className="text-lg">
            <p className="mb-4 text-center">
              {t('about.why.answer')}
            </p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold accent-text mb-2">50+</div>
            <div className="text-white/70">{t('about.stats.projects')}</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold accent-text mb-2">5+</div>
            <div className="text-white/70">{t('about.stats.experience')}</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold accent-text mb-2">100%</div>
            <div className="text-white/70">{t('about.stats.satisfaction')}</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold accent-text mb-2">24/7</div>
            <div className="text-white/70">{t('about.stats.support')}</div>
          </div>
        </div>
      </div>
      
      {/* Section divider */}
      <div className="w-full mt-16">
        <div className="h-px bg-white border-b border-white"></div>
      </div>
    </section>
  );
} 
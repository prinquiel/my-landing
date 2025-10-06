'use client';

import Image from "next/image";
import { useLanguage } from '@/lib/language-context';

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="min-h-[120vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32 relative">
      {/* Section divider - Top - Hidden on mobile */}
      <div className="hidden md:block absolute top-0 w-full">
        <div className="section-divider-full"></div>
      </div>
      
      {/* Binary code decoration - Left */}
      <div className="absolute left-4 lg:left-16 top-1/4 accent-text text-xs font-mono leading-loose opacity-40">
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
      <div className="absolute right-4 lg:right-16 top-1/3 accent-text text-xs font-mono leading-loose opacity-40 text-right">
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

      {/* Main content section */}
      <div className="max-w-5xl mx-auto mt-16 px-4">
        {/* Mission statement card */}
        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl mb-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-wide text-white mb-8">
              {t('about.center.line1')}<br />
              <span className="accent-text font-medium">{t('about.center.highlight')}</span> {t('about.center.line2')}<br />
              <span className="text-white/90">{t('about.center.line3')}</span>
            </h3>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto"></div>
          </div>
        </div>

        {/* Text content section */}
        <div className="space-y-12 text-white/90 leading-relaxed">
          {/* First paragraph */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-center leading-relaxed">
              {t('about.intro.part1')}
              <span className="accent-text font-medium">{t('about.intro.highlight')}</span>{t('about.intro.part2')}
            </p>
          </div>
          
          {/* Second paragraph */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-center leading-relaxed">
              {t('about.story')}
            </p>
          </div>
          
          {/* Third paragraph */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-center leading-relaxed">
              {t('about.why.answer')}
            </p>
          </div>
        </div>
      </div>

      
      {/* Section divider - Hidden on mobile */}
      <div className="hidden md:block w-full mt-16">
        <div className="section-divider-full"></div>
      </div>
    </section>
  );
} 
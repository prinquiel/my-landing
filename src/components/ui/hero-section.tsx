'use client';

import { useLanguage } from '@/lib/language-context';

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 relative">
      {/* Binary code decoration - Left top */}
      <div className="absolute left-4 lg:left-16 top-1/5 accent-text text-sm font-mono leading-relaxed mb-12">
        1101100101011001010111001010110010101100101010001010110010100101010010101110010100101011001011000101
        <br />
        0101100101011001010100101011100101001010110010110001010111001010110010100101010
        <br />
        101100101011001010111100101011001011011001010110010101110010101
        <br />
        101101010110010101110010101100011110010101
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto text-center z-10 relative px-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight floating">
          {t('hero.title.part1')}{" "}
          <span className="accent-text text-6xl md:text-7xl lg:text-8xl">{t('hero.title.highlight')}</span>{" "}
          {t('hero.title.part2')}
          <br />
          {t('hero.title.part3')}
        </h1>
      </div>

      {/* Binary code decoration - Right bottom */}
      <div className="absolute right-4 lg:right-16 bottom-1/5 accent-text text-sm font-mono leading-relaxed text-right mt-12">
        1101100101011001010111001010110010101100101010001010110010100101010010101110010100101011001011000101
        <br />
        0101100101011001010100101011100101001010110010110001010111001010110010100101010
        <br />
        101100101011001010111100101011001011011001010110010101110010101
        <br />
        101101010110010101110010101100011110010101
      </div>
    </section>
  );
} 
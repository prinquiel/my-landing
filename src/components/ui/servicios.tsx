'use client';

import Image from "next/image";
import { useLanguage } from '@/lib/language-context';

export function Servicios() {
  const { t } = useLanguage();
  
  const services = [
    {
      titleKey: 'services.basic.title',
      descriptionKey: 'services.basic.description',
      features: [
        'services.basic.feature1',
        'services.basic.feature2',
        'services.basic.feature3'
      ]
    },
    {
      titleKey: 'services.ecommerce.title',
      descriptionKey: 'services.ecommerce.description',
      features: [
        'services.ecommerce.feature1',
        'services.ecommerce.feature2',
        'services.ecommerce.feature3'
      ]
    },
    {
      titleKey: 'services.complex.title',
      descriptionKey: 'services.complex.description',
      features: [
        'services.complex.feature1',
        'services.complex.feature2',
        'services.complex.feature3',
        'services.complex.feature4'
      ]
    },
    {
      titleKey: 'services.catalog.title',
      descriptionKey: 'services.catalog.description',
      features: [
        'services.catalog.feature1',
        'services.catalog.feature2',
        'services.catalog.feature3'
      ]
    },
    {
      titleKey: 'services.portfolio.title',
      descriptionKey: 'services.portfolio.description',
      features: [
        'services.portfolio.feature1',
        'services.portfolio.feature2',
        'services.portfolio.feature3'
      ]
    },
    {
      titleKey: 'services.mobile.title',
      descriptionKey: 'services.mobile.description',
      features: [
        'services.mobile.feature1',
        'services.mobile.feature2',
        'services.mobile.feature3',
        'services.mobile.feature4'
      ]
    }
  ];
  return (
    <section id="servicios" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-8 pb-32 relative">

      
      {/* Binary code decoration - Right */}
      <div className="absolute right-4 lg:right-16 top-1/4 accent-text text-xs font-mono leading-loose opacity-40 text-right">
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

      {/* Binary code decoration - Left */}
      <div className="absolute left-4 lg:left-16 bottom-1/3 accent-text text-xs font-mono leading-loose opacity-30">
        1001010011010101100101011101001010<br />
        1100110010110110010101100101011100<br />
        1010110010101100101010001010110010<br />
        1001011001010110010101110100101011<br />
        0010101101010110010101100101011001<br />
        0101110100101011001100101001101010<br />
        1100101011101001010110011001011011<br />
        0010101100101011100101011001010110
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Title with decoration */}
        <div className="text-center mb-16 relative">
          <h2 className="text-6xl font-bold text-white tracking-wider mb-8 relative z-10">
            {t('servicios.title')}
          </h2>
          
          {/* Decoration image on top of title */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <Image
              src="/services/Ellipse 1.png"
              alt="Services decoration"
              width={300}
              height={200}
              className="opacity-60"
            />
          </div>
        </div>
        
        {/* Services list - vertical layout */}
        <div className="space-y-8 relative">
          {/* Floating decoration elements */}
          <div className="absolute -right-8 top-20 w-16 h-16 border border-pink-500/20 rounded-full opacity-60 floating"></div>
          <div className="absolute -left-12 top-64 w-12 h-12 bg-pink-500/10 rounded-full opacity-40"></div>
          <div className="absolute -right-6 top-96 w-8 h-8 border-2 border-pink-500/30 rounded-full opacity-50"></div>
          <div className="absolute -left-8 bottom-32 w-20 h-20 border border-white/10 rounded-full opacity-30"></div>
          
          {services.map((service, index) => (
            <div 
              key={index} 
              className="border-2 border-white bg-transparent rounded-2xl p-8 hover:border-pink-500 transition-all duration-300 hover:transform hover:-translate-y-2 relative"
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{t(service.titleKey)}</h3>
              <p className="text-white/80 mb-6 leading-relaxed text-base">{t(service.descriptionKey)}</p>
              <ul className="space-y-2">
                {service.features.map((featureKey, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-white/70 text-base">
                    <div className="w-1 h-1 accent-bg rounded-full mr-2 mt-2 flex-shrink-0"></div>
                    {t(featureKey)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Multiple decoration images at bottom */}
        <div className="flex justify-center items-center gap-8 mt-16 relative">
          {/* Main decoration */}
          <Image
            src="/services/Ellipse 1.png"
            alt="Services decoration bottom"
            width={300}
            height={200}
            className="opacity-40"
          />
          
          {/* Side decorations */}
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
            <Image
              src="/services/Ellipse 1.png"
              alt="Services decoration left"
              width={150}
              height={100}
              className="opacity-20 rotate-45"
            />
          </div>
          
          <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
            <Image
              src="/services/Ellipse 1.png"
              alt="Services decoration right"
              width={150}
              height={100}
              className="opacity-20 -rotate-45"
            />
          </div>
        </div>
      </div>
      
      {/* Section divider - Bottom - Hidden on mobile */}
      <div className="hidden md:block w-full mt-16">
        <div className="section-divider-full"></div>
      </div>
    </section>
  );
} 
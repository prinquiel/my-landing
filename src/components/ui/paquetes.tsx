'use client';

import { useLanguage } from '@/lib/language-context';

export function Paquetes() {
  const { t } = useLanguage();
  
  const packages = [
    {
      nameKey: "packages.ruby.name",
      descriptionKey: "packages.ruby.description",
      color: "ruby", // Pink/red theme
      popular: false
    },
    {
      nameKey: "packages.esmerald.name",
      descriptionKey: "packages.esmerald.description",
      color: "esmerald", // Gray/silver theme  
      popular: true
    },
    {
      nameKey: "packages.diamond.name",
      descriptionKey: "packages.diamond.description",
      color: "diamond", // Pink/purple theme
      popular: false
    }
  ];
  return (
    <section id="paquetes" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32 relative">

      
      {/* Binary code decoration - spread across top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 accent-text text-xs font-mono leading-relaxed opacity-40 text-center">
        110110010101100101011100101011001010110010101000101011001010010110010101100101011101001010110010101101<br />
        010110010101100101011001010111010010101100110010100110010101101100101011001010111001010110010101100101<br />
        010001010110010100101100101011001010111010010101100101011010101100101011001010110010101110100101011001<br />
        100101001101010110010101110100101011001100101
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider mb-8 leading-tight">
            {t('packages.title.line1')}<br />
            <span className="text-white/90">{t('packages.title.line2')}</span><br />
            <span className="text-white/90">{t('packages.title.line3')}</span>
          </h2>
        </div>
        
        {/* Packages grid - flip cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className="flip-card min-h-[400px] perspective-1000">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                
                {/* Front side - Pink with titles */}
                <div className="flip-card-front absolute inset-0 w-full h-full backface-hidden">
                  <div className="relative bg-gradient-to-br from-pink-600/80 to-pink-700/80 rounded-3xl p-8 border-2 border-pink-500/50 backdrop-blur-sm min-h-[400px] flex flex-col justify-center items-center text-center">
                    {/* Arrow decoration in top right */}
                    <div className="absolute top-6 right-6 text-white/80">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </div>
                    
                    <h3 className="text-3xl font-semibold text-white">
                      {t(pkg.nameKey)}
                    </h3>

                    {/* Popular badge for esmerald */}
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium border-2 border-white">
                          {t('packages.popular')}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Back side - Same color for all */}
                <div className="flip-card-back absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                                     <div className="relative bg-gradient-to-br from-pink-600 to-pink-900 rounded-3xl p-8 border-2 border-pink-500 text-white min-h-[400px] flex flex-col justify-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                    
                    <div className="flex-grow flex items-center justify-center">
                      <p className="leading-relaxed text-lg opacity-90 text-center">
                        {t(pkg.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Section divider - Bottom - Hidden on mobile */}
      <div className="hidden md:block w-full mt-16">
        <div className="section-divider-full"></div>
      </div>
    </section>
  );
} 
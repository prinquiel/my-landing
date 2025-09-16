'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/translations';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-1 bg-white/10 rounded-lg p-1">
      <button
        onClick={() => handleLanguageChange('es')}
        className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
          language === 'es'
            ? 'bg-[#CE125D] text-white shadow-lg'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-[#CE125D] text-white shadow-lg'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
} 
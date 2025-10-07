'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { ChevronDown, Globe } from 'lucide-react';

export function LanguagePicker() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es' as const, name: t('language.spanish'), flag: '🇪🇸' },
    { code: 'en' as const, name: t('language.english'), flag: '🇺🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10"
      >
        <Globe size={16} className="flex-shrink-0" />
        <span className="text-sm sm:text-base font-medium">{currentLanguage?.flag}</span>
        <ChevronDown 
          size={14} 
          className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 py-2 bg-[#0A0F3A] border border-white/20 rounded-lg shadow-xl z-50 min-w-[140px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left text-sm transition-colors duration-200 ${
                  language === lang.code
                    ? 'text-white bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
} 
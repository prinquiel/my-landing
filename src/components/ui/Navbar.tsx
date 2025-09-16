'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { LanguagePicker } from './language-picker';

const navItems = [
  { id: 'inicio', labelKey: 'nav.home' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'servicios', labelKey: 'nav.services' },
  { id: 'testimonios', labelKey: 'nav.testimonials' },
  { id: 'contacto', labelKey: 'nav.contact' },
];

export function Navbar() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080C36]/80 backdrop-blur-md border-b border-white/20">
      <div className="mx-auto max-w-4xl px-6 h-16">
        <nav className="flex items-center justify-between h-full">
          <div className="flex-1 flex justify-center">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'active text-white bg-white/10'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {t(item.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink-0">
            <LanguagePicker />
          </div>
        </nav>
      </div>
    </header>
  );
}
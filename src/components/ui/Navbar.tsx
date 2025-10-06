'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { LanguagePicker } from './language-picker';

const navItems = [
  { id: 'inicio', labelKey: 'nav.home' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'servicios', labelKey: 'nav.servicios' },
  { id: 'proyectos', labelKey: 'nav.proyectos' },
  { id: 'contacto', labelKey: 'nav.contacto' },
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
      <div className="mx-auto max-w-6xl px-3 sm:px-6 h-20">
        <nav className="flex items-center justify-between h-full">
          {/* Mobile and Desktop Navigation */}
          <div className="flex-1 flex justify-center">
            <ul className="flex gap-3 sm:gap-6 lg:gap-10 overflow-x-auto scrollbar-hide">
              {navItems.map((item) => (
                <li key={item.id} className="flex-shrink-0">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link text-sm sm:text-base font-medium py-3 px-3 sm:px-6 rounded-lg transition-all duration-300 whitespace-nowrap ${
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
          <div className="flex-shrink-0 ml-4">
            <LanguagePicker />
          </div>
        </nav>
      </div>
    </header>
  );
}
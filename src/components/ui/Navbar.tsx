'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { LanguagePicker } from './language-picker';
import { Menu, X } from 'lucide-react';

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080C36]/80 backdrop-blur-md border-b border-white/20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 sm:h-20">
          <nav className="flex items-center justify-between h-full">
            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation - Hidden on Mobile */}
            <div className="hidden md:flex flex-1 justify-center">
              <ul className="flex gap-4 lg:gap-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`nav-link text-base font-medium py-2 px-6 rounded-lg transition-all duration-300 whitespace-nowrap ${
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

            {/* Language Picker */}
            <div className="flex-shrink-0 ml-auto sm:ml-4">
              <LanguagePicker />
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Side Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Side Menu */}
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-[#080C36] border-r border-white/20 shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left text-lg font-medium py-4 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white bg-white/10 border-l-4 border-[#CE125D]'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {t(item.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Instagram, Facebook, Mail } from 'lucide-react';

export function Contacto() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contacto" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 relative">
      {/* Section divider - Top - Hidden on mobile */}
      <div className="hidden md:block absolute top-0 w-full">
        <div className="hidden md:block h-px bg-white border-b border-white"></div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute left-2 lg:left-8 top-1/4 accent-text text-xs font-mono leading-loose opacity-20">
        01101001<br />
        10110010<br />
        01011100
      </div>

      <div className="absolute right-2 lg:right-8 bottom-1/4 accent-text text-xs font-mono leading-loose opacity-20 text-right">
        11010010<br />
        01100101<br />
        10110010
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white tracking-wider mb-8">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 accent-text">{t('contact.info.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 accent-bg rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  <span className="text-white/80">+506 6027 2112</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 accent-bg rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <span className="text-white/80">Costa Rica</span>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-medium mb-4 accent-text">Síguenos</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 accent-bg rounded-full flex items-center justify-center mr-4">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                  <a 
                    href="https://instagram.com/quiel.development" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:accent-text transition-colors duration-300"
                  >
                    @quiel.development
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 accent-bg rounded-full flex items-center justify-center mr-4">
                    <Facebook className="w-4 h-4 text-white" />
                  </div>
                  <a 
                    href="https://facebook.com/quiel.development.studio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:accent-text transition-colors duration-300"
                  >
                    Quiel Development Studio
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 accent-bg rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <a 
                    href="mailto:quiel.development.studio@gmail.com" 
                    className="text-white/80 hover:accent-text transition-colors duration-300"
                  >
                    quiel.development@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-pink-500 focus:outline-none text-white placeholder-white/50"
                  placeholder={t('contact.form.name.placeholder')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-pink-500 focus:outline-none text-white placeholder-white/50"
                  placeholder={t('contact.form.email.placeholder')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-pink-500 focus:outline-none text-white placeholder-white/50 resize-none"
                  placeholder={t('contact.form.message.placeholder')}
                />
              </div>
              
              <button
                type="submit"
                className="w-full accent-bg text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 
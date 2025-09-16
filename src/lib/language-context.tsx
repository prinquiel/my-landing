'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations = {
  es: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Servicios',
    'nav.packages': 'Paquetes',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title.part1': 'Convertimos tus',
    'hero.title.highlight': 'ideas',
    'hero.title.part2': 'en una realidad,',
    'hero.title.part3': 'rápido e innovador.',
    
    // About Section
    'about.title': 'Sobre nosotros',
    'about.center.line1': 'Innovación',
    'about.center.highlight': 'con propósito',
    'about.center.line2': 'para hacer brillar',
    'about.center.line3': 'cada idea',
    'about.intro.part1': 'Nuestra historia comienza con una mujer fundadora que decidió abrir camino en el mundo del software, un espacio donde a veces es más difícil destacar. ✨ Ese espíritu de ',
    'about.intro.highlight': 'resiliencia y creatividad',
    'about.intro.part2': ' es hoy parte del ADN de nuestra startup.',
    'about.story': 'Con un equipo diverso y apasionado, desarrollamos soluciones digitales accesibles y confiables para personas, proyectos y pequeñas empresas que buscan crecer sin complicaciones. 💻',
    'about.why.question': '',
    'about.why.answer': 'Creemos en la innovación con propósito: tecnología justa, cercana y diseñada para que cada idea —grande o pequeña— tenga las herramientas que necesita para brillar.',
    'about.stats.projects': 'Proyectos Completados',
    'about.stats.experience': 'Años de Experiencia',
    'about.stats.satisfaction': 'Satisfacción del Cliente',
    'about.stats.support': 'Soporte Técnico',
    
    // Services Section
    'services.title': 'Services',
    'services.basic.title': 'Página web básica',
    'services.basic.description': 'Una web sencilla y directa para mostrar tu marca, producto o idea. Ideal para quienes necesitan presencia en internet con un diseño atractivo y rápido sin funcionalidades complejas. Incluye:',
    'services.basic.feature1': 'Secciones (inicio, contacto, servicios...)',
    'services.basic.feature2': 'Integración de redes sociales',
    'services.basic.feature3': 'Diseño personalizado',
    'services.ecommerce.title': 'Pymes/E-commerce',
    'services.ecommerce.description': 'Tu propia tienda en línea lista para vender. Con un diseño intuitivo y seguro, podrás administrar tus productos y aceptar pagos fácilmente.',
    'services.ecommerce.feature1': 'Catálogo de productos con fotos/descripciones',
    'services.ecommerce.feature2': 'Carritos de compras y métodos de pago',
    'services.ecommerce.feature3': 'Panel de administración de ventas',
    'services.complex.title': 'Sistemas complejos',
    'services.complex.description': 'Soluciones personalizadas para optimizar procesos dentro de tu empresa/negocio/institución. Creamos sistemas que se ajustan a lo que tu negocio realmente necesita.',
    'services.complex.feature1': 'Nos adaptamos a las necesidades de tu sistema',
    'services.complex.feature2': 'Sistemas de reservaciones, citas, control de inventario, gestión de clientes',
    'services.complex.feature3': 'Ofrecemos implementaciones de inteligencia artificial',
    'services.complex.feature4': 'Múltiples páneles según los requisitos del cliente',
    'services.catalog.title': 'Diseño catálogo digital',
    'services.catalog.description': 'Un espacio visual para mostrar tus productos o servicios sin necesidad de una tienda completa. Perfecto para restaurantes, tiendas pequeñas o negocios que quieren dar a conocer su oferta.',
    'services.catalog.feature1': 'Listado ordenado de productos/servicios',
    'services.catalog.feature2': 'Opciones de búsqueda y filtros',
    'services.catalog.feature3': 'Diseño adaptable a móviles',
    'services.portfolio.title': 'Portafolio personal',
    'services.portfolio.description': 'Muestra tu trabajo de manera profesional y atractiva. Perfecto para artistas, freelancers, diseñadores, fotógrafos o cualquier persona que quiera destacar su talento.',
    'services.portfolio.feature1': 'Galería visual de proyectos',
    'services.portfolio.feature2': 'Sección de "Sobre mí"',
    'services.portfolio.feature3': 'Formulario de contacto',
    'services.mobile.title': 'Desarrollo Móvil / Apps',
    'services.mobile.description': 'Aplicaciones nativas e híbridas para Android y iOS, creadas a la medida de tu proyecto.',
    'services.mobile.feature1': 'Diseño moderno y adaptable a diferentes dispositivos',
    'services.mobile.feature2': 'Funcionalidades personalizadas según tus necesidades',
    'services.mobile.feature3': 'Integración con servicios en la nube y bases de datos',
    'services.mobile.feature4': 'Experiencia de usuario intuitiva y atractiva',
    
    // Packages Section
    'packages.title.line1': 'Soluciones a tu medida:',
    'packages.title.line2': 'Emprendimiento, negocio o',
    'packages.title.line3': 'corporación.',
    'packages.ruby.name': 'Paquete Ruby',
    'packages.ruby.description': 'Perfecto para negocios en expansión que necesitan algo más robusto',
    'packages.esmerald.name': 'Paquete Esmerald',
    'packages.esmerald.description': 'Perfecto para negocios en expansión que necesitan algo más robusto',
    'packages.diamond.name': 'Paquete Diamond',
    'packages.diamond.description': 'Perfecto para negocios en expansión que necesitan algo más robusto',
    'packages.popular': 'Más Popular',
    
    // Testimonials Section
    'testimonials.title': 'Lo que dicen nuestros clientes',
    
    // Testimonial 1
    'testimonial1.project': 'Plataforma E-commerce',
    'testimonial1.company': 'TechCorp Inc.',
    'testimonial1.client': 'Sarah Johnson',
    'testimonial1.role': 'CEO',
    'testimonial1.quote': 'Trabajo absolutamente increíble. La atención al detalle y la experiencia de usuario superaron todas nuestras expectativas.',
    'testimonial1.category': 'Desarrollo Web',
    'testimonial1.year': '2024',
    
    // Testimonial 2
    'testimonial2.project': 'App Bancaria Móvil',
    'testimonial2.company': 'FinanceFlow',
    'testimonial2.client': 'Michael Chen',
    'testimonial2.role': 'Gerente de Producto',
    'testimonial2.quote': 'Diseño revolucionario que transformó la forma en que nuestros usuarios interactúan con la banca. ¡Simplemente excepcional!',
    'testimonial2.category': 'App Móvil',
    'testimonial2.year': '2024',
    
    // Testimonial 3
    'testimonial3.project': 'Sistema de Identidad de Marca',
    'testimonial3.company': 'Creative Studios',
    'testimonial3.client': 'Emma Rodriguez',
    'testimonial3.role': 'Directora Creativa',
    'testimonial3.quote': 'Una obra maestra del pensamiento de diseño. Cada elemento perfectamente elaborado para contar nuestra historia.',
    'testimonial3.category': 'Branding',
    'testimonial3.year': '2023',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Listo para comenzar tu proyecto? Conversemos sobre cómo podemos hacer realidad tu visión.',
    'contact.info.title': 'Información de Contacto',
    'contact.schedule.title': 'Horarios de Atención',
    'contact.schedule.weekdays': 'Lunes - Viernes: 9:00 AM - 6:00 PM',
    'contact.schedule.saturday': 'Sábado: 10:00 AM - 4:00 PM',
    'contact.schedule.sunday': 'Domingo: Cerrado',
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.message': 'Mensaje',
    'contact.form.name.placeholder': 'Tu nombre completo',
    'contact.form.email.placeholder': 'tu.correo@ejemplo.com',
    'contact.form.message.placeholder': 'Cuéntanos sobre tu proyecto...',
    'contact.form.submit': 'Enviar Mensaje',
    
    // Language Picker
    'language.spanish': 'Español',
    'language.english': 'English',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.packages': 'Packages',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title.part1': 'We turn your',
    'hero.title.highlight': 'ideas',
    'hero.title.part2': 'into reality,',
    'hero.title.part3': 'fast and innovative.',
    
    // About Section
    'about.title': 'About us',
    'about.center.line1': 'Innovation',
    'about.center.highlight': 'with purpose',
    'about.center.line2': 'to make shine',
    'about.center.line3': 'every idea',
    'about.intro.part1': 'Our story begins with a female founder who decided to pave the way in the software world, a space where it\'s sometimes harder to stand out. ✨ That spirit of ',
    'about.intro.highlight': 'resilience and creativity',
    'about.intro.part2': ' is now part of our startup\'s DNA.',
    'about.story': 'With a diverse and passionate team, we develop accessible and reliable digital solutions for people, projects and small businesses looking to grow without complications. 💻',
    'about.why.question': '',
    'about.why.answer': 'We believe in innovation with purpose: fair, close technology designed so that every idea—big or small—has the tools it needs to shine.',
    'about.stats.projects': 'Completed Projects',
    'about.stats.experience': 'Years of Experience',
    'about.stats.satisfaction': 'Client Satisfaction',
    'about.stats.support': 'Technical Support',
    
    // Services Section
    'services.title': 'Services',
    'services.basic.title': 'Basic website',
    'services.basic.description': 'A simple and direct website to showcase your brand, product or idea. Ideal for those who need an internet presence with an attractive and fast design without complex functionalities. Includes:',
    'services.basic.feature1': 'Sections (home, contact, services...)',
    'services.basic.feature2': 'Social media integration',
    'services.basic.feature3': 'Custom design',
    'services.ecommerce.title': 'SME/E-commerce',
    'services.ecommerce.description': 'Your own online store ready to sell. With an intuitive and secure design, you can manage your products and accept payments easily.',
    'services.ecommerce.feature1': 'Product catalog with photos/descriptions',
    'services.ecommerce.feature2': 'Shopping carts and payment methods',
    'services.ecommerce.feature3': 'Sales administration panel',
    'services.complex.title': 'Complex systems',
    'services.complex.description': 'Custom solutions to optimize processes within your company/business/institution. We create systems that fit what your business really needs.',
    'services.complex.feature1': 'We adapt to your system needs',
    'services.complex.feature2': 'Reservation systems, appointments, inventory control, customer management',
    'services.complex.feature3': 'We offer artificial intelligence implementations',
    'services.complex.feature4': 'Multiple panels according to client requirements',
    'services.catalog.title': 'Digital catalog design',
    'services.catalog.description': 'A visual space to showcase your products or services without the need for a complete store. Perfect for restaurants, small stores or businesses that want to showcase their offerings.',
    'services.catalog.feature1': 'Ordered listing of products/services',
    'services.catalog.feature2': 'Search and filter options',
    'services.catalog.feature3': 'Mobile-responsive design',
    'services.portfolio.title': 'Personal portfolio',
    'services.portfolio.description': 'Showcase your work in a professional and attractive way. Perfect for artists, freelancers, designers, photographers or anyone who wants to highlight their talent.',
    'services.portfolio.feature1': 'Visual project gallery',
    'services.portfolio.feature2': '"About me" section',
    'services.portfolio.feature3': 'Contact form',
    'services.mobile.title': 'Mobile Development / Apps',
    'services.mobile.description': 'Native and hybrid applications for Android and iOS, created to fit your project.',
    'services.mobile.feature1': 'Modern design adaptable to different devices',
    'services.mobile.feature2': 'Custom functionalities according to your needs',
    'services.mobile.feature3': 'Integration with cloud services and databases',
    'services.mobile.feature4': 'Intuitive and attractive user experience',
    
    // Packages Section
    'packages.title.line1': 'Solutions tailored to you:',
    'packages.title.line2': 'Entrepreneurship, business or',
    'packages.title.line3': 'corporation.',
    'packages.ruby.name': 'Ruby Package',
    'packages.ruby.description': 'Perfect for expanding businesses that need something more robust',
    'packages.esmerald.name': 'Emerald Package',
    'packages.esmerald.description': 'Perfect for expanding businesses that need something more robust',
    'packages.diamond.name': 'Diamond Package',
    'packages.diamond.description': 'Perfect for expanding businesses that need something more robust',
    'packages.popular': 'Most Popular',
    
    // Testimonials Section
    'testimonials.title': 'What our clients say',
    
    // Testimonial 1
    'testimonial1.project': 'E-commerce Platform',
    'testimonial1.company': 'TechCorp Inc.',
    'testimonial1.client': 'Sarah Johnson',
    'testimonial1.role': 'CEO',
    'testimonial1.quote': 'Absolutely incredible work! The attention to detail and user experience exceeded all our expectations.',
    'testimonial1.category': 'Web Development',
    'testimonial1.year': '2024',
    
    // Testimonial 2
    'testimonial2.project': 'Mobile Banking App',
    'testimonial2.company': 'FinanceFlow',
    'testimonial2.client': 'Michael Chen',
    'testimonial2.role': 'Product Manager',
    'testimonial2.quote': 'Revolutionary design that transformed how our users interact with banking. Simply outstanding!',
    'testimonial2.category': 'Mobile App',
    'testimonial2.year': '2024',
    
    // Testimonial 3
    'testimonial3.project': 'Brand Identity System',
    'testimonial3.company': 'Creative Studios',
    'testimonial3.client': 'Emma Rodriguez',
    'testimonial3.role': 'Creative Director',
    'testimonial3.quote': 'A masterpiece of design thinking. Every element perfectly crafted to tell our story.',
    'testimonial3.category': 'Branding',
    'testimonial3.year': '2023',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Ready to start your project? Let\'s talk about how we can make your vision a reality.',
    'contact.info.title': 'Contact Information',
    'contact.schedule.title': 'Business Hours',
    'contact.schedule.weekdays': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'contact.schedule.saturday': 'Saturday: 10:00 AM - 4:00 PM',
    'contact.schedule.sunday': 'Sunday: Closed',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Message',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.message.placeholder': 'Tell us about your project...',
    'contact.form.submit': 'Send Message',
    
    // Language Picker
    'language.spanish': 'Español',
    'language.english': 'English',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');
  const [isClient, setIsClient] = useState(false);

  // Set client flag after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load language from localStorage on mount (client-side only)
  useEffect(() => {
    if (isClient) {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
        setLanguage(savedLanguage);
      }
    }
  }, [isClient]);

  // Save language to localStorage when it changes (client-side only)
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('language', language);
      // Update document lang attribute
      document.documentElement.lang = language;
    }
  }, [language, isClient]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 
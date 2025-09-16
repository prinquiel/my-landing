"use client";

import { useState } from 'react';

export function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! Soy Prindi 👋 ¿En qué puedo ayudarte hoy?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const [isLoading, setIsLoading] = useState(false);

  const getKeywordResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Precios
    if (message.includes('precio') || message.includes('costo') || message.includes('cuanto') || message.includes('€') || message.includes('$')) {
      return "Los precios varían según el proyecto:\n\n🌐 **Pagina web básica:** $200+\n🛒 **E-commerce/Tienda online:** $300+\n⚙️ **Sistemas complejos:** cotizable segun el proyecto\n📱 **Catálogo digital:** $80+\n💼 **Portfolio:** cotizacion segun el proyecto +\n\n¿Te interesa algún tipo de proyecto específico?";
    }
    
    // Servicios
    if (message.includes('servicio') || message.includes('que haces') || message.includes('que ofreces')) {
      return "Ofrezco 5 servicios principales:\n\n🌐 Páginas web clásicas\n🛒 E-commerce para PYMES\n⚙️ Sistemas complejos personalizados\n📱 Catálogos digitales\n💼 Portfolios profesionales\n\n¿Cuál te interesa más?";
    }
    
    // Tiempo de desarrollo
    if (message.includes('tiempo') || message.includes('cuanto tard') || message.includes('cuando')) {
      return "Los tiempos de desarrollo varian segun los requerimientos del proyecto:\n\n⏱️ Pagina web básica: 2-3 semanas\n🛒 E-commerce: 3-4 semanas\n⚙️ Sistemas complejos: sujeto a requerimientos del proyecto\n\n¿Qué tipo de proyecto tienes en mente?";
    }
    
    // Contacto
    if (message.includes('contacto') || message.includes('teléfono') || message.includes('email') || message.includes('whatsapp')) {
      return "📞 **Información de contacto:**\n\n📧 **Email:** prindiquielv@gmail.com\n📱 **WhatsApp:** +506 6027 2112\n📍 **Ubicación:** Costa Rica\n\n**Horarios:**\n• Lunes-Viernes: 9:00 AM - 6:00 PM\n• Sábado: 10:00 AM - 4:00 PM\n\n¿Prefieres que te contacte por algún medio específico?";
    }
    
    // Experiencia
    if (message.includes('experiencia') || message.includes('años') || message.includes('portfolio')) {
      return "💪 **Mi experiencia:**\n\n✅ 5+ años en desarrollo web\n✅ 50+ proyectos completados\n✅ Especializada en React, Next.js, WordPress\n✅ Clientes satisfechos en toda Latinoamérica\n\nPuedes ver algunos ejemplos en la sección de testimonios. ¿Te gustaría saber sobre algún proyecto específico?";
    }
    
    // Tecnologías
    if (message.includes('tecnologia') || message.includes('react') || message.includes('next') || message.includes('wordpress')) {
      return "🛠️ **Tecnologías que domino:**\n\n• **Frontend:** React, Next.js, HTML, CSS, JavaScript\n• **Backend:** Node.js, bases de datos modernas\n• **CMS:** WordPress, Sanity\n• **E-commerce:** Shopify, WooCommerce\n• **Otros:** UI/UX, SEO, hosting\n\nElijo la mejor tecnología según las necesidades de tu proyecto.";
    }
    
    // Mantenimiento
    if (message.includes('mantenimiento') || message.includes('actualizar') || message.includes('soporte')) {
      return "🔧 **Soporte y mantenimiento:**\n\n✅ 3 meses de soporte a errores que puedan surgir \n✅ Planes de mantenimiento desde $50/mes o pago por hora en caso de requerir cambios o actualizaciones.\n✅ Actualizaciones de seguridad\n✅ Backup automático\n✅ Soporte técnico prioritario\n\n¿Necesitas soporte a largo plazo?";
    }
    
    // Pago
    if (message.includes('pago') || message.includes('forma de pago') || message.includes('financiamiento')) {
      return "💳 **Formas de pago:**\n\n• Transferencia bancaria (Costa Rica)\n• PayPal (internacional)\n **Plan de pago:**\n• 50% adelanto para comenzar\n• 50% al finalizar el proyecto\n• Plan de pago puede variar segun el proyecto\n¿Te conviene esta modalidad?";
    }
    
    // Ubicación
    if (message.includes('donde') || message.includes('ubicacion') || message.includes('costa rica')) {
      return "📍 **Ubicación y trabajo remoto:**\n\nEstoy ubicada en Costa Rica 🇨🇷, pero trabajo con clientes de toda Latinoamérica de forma completamente remota.\n\n🌎 **Países donde he trabajado:**\n• Costa Rica, México, Colombia\n• Argentina, Chile, España\n• Estados Unidos\n\n¿Desde dónde me escribes?";
    }
    
    // Saludo
    if (message.includes('hola') || message.includes('buenos') || message.includes('buenas')) {
      return "¡Hola! 👋 Me alegra que te pongas en contacto.\n\nSoy **Prindi Quiel**, desarrolladora web especializada en soluciones digitales modernas. Ayudo a emprendedores y empresas a tener presencia digital profesional.\n\n¿En qué puedo ayudarte hoy? 😊";
    }
    
    // Despedida
    if (message.includes('gracias') || message.includes('adiós') || message.includes('hasta luego')) {
      return "¡De nada! 😊 Ha sido un placer ayudarte.\n\nSi tienes más preguntas, no dudes en contactarme:\n📧 prindiquielv@gmail.com\n📱 +506 6027 2112\n\n¡Que tengas un excelente día! ✨";
    }
    
    // Respuesta por defecto
    return "🤔 Interesante pregunta. Te responderé con mucho gusto.\n\nPara una respuesta rápida y personalizada, puedes contactarme directamente:\n\n📧 **Email:** prindiquielv@gmail.com\n📱 **WhatsApp:** +506 6027 2112\n\n¿Hay algo específico sobre mis servicios que te gustaría saber?";
  };

  const getBotResponse = async (userMessage: string): Promise<string> => {
    try {
      setIsLoading(true);
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        // If OpenAI fails, use keyword-based fallback
        console.log('OpenAI API failed, using keyword fallback');
        return getKeywordResponse(userMessage);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error getting bot response:', error);
      // Use keyword-based fallback when OpenAI is unavailable
      return getKeywordResponse(userMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    const userInput = inputValue;
    setInputValue('');

    // Show typing indicator
    const typingMessage = {
      id: messages.length + 2,
      text: "Escribiendo...",
      isBot: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, typingMessage]);

    // Get AI response
    try {
      const botResponseText = await getBotResponse(userInput);
      
      const botResponse = {
        id: messages.length + 2,
        text: botResponseText,
        isBot: true,
        timestamp: new Date()
      };
      
      // Replace typing indicator with actual response
      setMessages(prev => prev.slice(0, -1).concat(botResponse));
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: messages.length + 2,
        text: "Lo siento, hay un problema técnico. Puedes contactarme directamente a prindiquielv@gmail.com o +506 6027 2112.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => prev.slice(0, -1).concat(errorMessage));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white font-bold text-xl ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        {isOpen ? '×' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-[#080C36]/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-pink-600 to-pink-700 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">P</span>
              </div>
              <div>
                <h3 className="font-semibold">Prindi Quiel</h3>
                <p className="text-xs text-white/80">En línea</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.isBot
                      ? 'bg-white/10 text-white border border-white/20'
                      : 'bg-gradient-to-r from-pink-600 to-pink-700 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-60">
                    {message.timestamp.toLocaleTimeString('es-ES', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-pink-500 focus:outline-none text-sm"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading}
                className={`px-4 py-2 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white rounded-lg transition-all duration-300 text-sm font-medium ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? '...' : 'Enviar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 
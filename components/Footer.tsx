
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-24 px-6 custom-gradient text-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-black mb-6 text-white">
          ¿Listo para Competir?
        </h2>
        
        <p className="text-xl md:text-2xl font-light mb-12 text-white/90">
          No pierdas esta oportunidad única de ganar tu kit IRONMAN 70.3 y recuperarte como un profesional.
        </p>
        
        <a 
          href="https://citasfisioterapia.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white text-purple-700 font-black text-2xl py-6 px-12 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          ¡AGENDA TU SESIÓN AHORA!
        </a>
        
        <div className="mt-20 pt-10 border-t border-white/20 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} ANALIZA - Especialistas en Recuperación y Salud.</p>
          <p className="mt-2">Todos los derechos reservados. San Salvador, El Salvador.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

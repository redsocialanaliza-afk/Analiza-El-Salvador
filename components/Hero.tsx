
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden custom-gradient">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-white/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="text-6xl md:text-8xl mb-8 animate-bounce transition-transform">
          🏊‍♂️🚴‍♂️🏃‍♂️
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter drop-shadow-2xl">
          RIFA IRONMAN 70.3
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-10 opacity-90 max-w-2xl mx-auto">
          Tu oportunidad de participar en la competencia más épica del mundo con el respaldo de los expertos.
        </p>
        
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl mb-12 transform hover:scale-[1.02] transition-all">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¡ANALIZA TE REGALA UN KIT COMPLETO!
          </h2>
          <p className="text-lg md:text-xl opacity-80 mb-2">
            Por cada $50.00 de consumo en Laboratorio Clínico y Fisioterapia.
          </p>
          <p className="font-semibold text-pink-200">
            Úsalo para ti o distribúyelo en tu equipo de relevos.
          </p>
        </div>

        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdsqBjJmIe7C8y7Q37xsC3-wf3-pRGNsn2QvrABwiSD7YZ5tg/viewform" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-black text-2xl py-6 px-12 rounded-full shadow-[0_10px_40px_rgba(244,63,94,0.4)] hover:shadow-[0_20px_60px_rgba(244,63,94,0.6)] transform hover:-translate-y-1 transition-all"
        >
          ¡PARTICIPA AHORA!
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

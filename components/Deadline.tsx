
import React from 'react';

const Deadline: React.FC = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-rose-600">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
          GRAN SORTEO
        </h2>
        
        <div className="text-7xl md:text-[10rem] font-black tracking-tighter mb-6 text-white leading-none drop-shadow-2xl">
          15 ENE
        </div>
        
        <p className="text-xl md:text-3xl font-light text-white/90">
          Promoción válida del 26 de diciembre 2025 al 14 de enero 2026.
        </p>
      </div>
    </section>
  );
};

export default Deadline;

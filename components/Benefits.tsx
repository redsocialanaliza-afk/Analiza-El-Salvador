
import React from 'react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  { id: 1, text: "Mejora tu recuperación muscular con cada sesión" },
  { id: 2, text: "Aumenta tus probabilidades de ganar con cada visita" },
  { id: 3, text: "Experimenta los beneficios de la descarga profesional" },
  { id: 4, text: "Kit completo: úsalo solo o compártelo con tu equipo" },
  { id: 5, text: "Oportunidad única de participar en el IRONMAN 70.3 GRATIS" }
];

const Benefits: React.FC = () => {
  return (
    <section className="bg-zinc-900/30 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16 gradient-text">
          Ventajas de Participar
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex items-center gap-4 p-6 bg-zinc-800/40 rounded-2xl border-l-4 border-green-500 backdrop-blur-sm hover:bg-zinc-800/60 transition-all">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-zinc-200 font-medium">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;


import React from 'react';
import { Step } from '../types';

const steps: Step[] = [
  {
    id: 1,
    title: "Realiza tu Consumo",
    description: "Cada $50.00 de consumo en servicios de Laboratorio Clínico o Fisioterapia te otorgan una oportunidad para participar."
  },
  {
    id: 2,
    title: "Registra tu Participación",
    description: "Completa el formulario oficial con tus datos de facturación para activar tus entradas al sorteo."
  },
  {
    id: 3,
    title: "Gran Sorteo",
    description: "El 15 de enero de 2026 realizaremos el sorteo final para conocer al ganador del kit IRONMAN 70.3."
  }
];

const Steps: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="steps">
      <h2 className="text-4xl md:text-6xl font-black text-center mb-16 gradient-text">
        ¿Cómo Funciona?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="group relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/10 rounded-full group-hover:bg-purple-600/20 transition-all"></div>
            
            <div className="w-16 h-16 rounded-2xl custom-gradient flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-purple-500/20">
              {step.id}
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              {step.title}
            </h3>
            
            <p className="text-zinc-400 leading-relaxed text-lg">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;

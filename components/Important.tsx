
import React from 'react';

const Important: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="relative p-10 md:p-16 rounded-[2rem] border-4 border-amber-500 bg-amber-500/5 text-center overflow-visible">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-zinc-950 rounded-full border-4 border-amber-500 flex items-center justify-center text-4xl">
          ⚠️
        </div>
        
        <h3 className="text-3xl font-black text-amber-500 mb-6">Importante</h3>
        
        <p className="text-xl md:text-2xl text-amber-200/90 leading-relaxed font-medium">
          Participan todos los clientes con un <strong>consumo mínimo de $50.00</strong> en servicios de Laboratorio Clínico y Fisioterapia. Asegúrate de registrar tus datos en el formulario oficial para que tu participación sea válida.
        </p>
      </div>
    </section>
  );
};

export default Important;

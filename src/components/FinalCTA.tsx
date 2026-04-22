"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA = ({ onBookingOpen }: { onBookingOpen: () => void }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-space-black">
      {/* Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-barber-red/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass p-10 md:p-20 rounded-[40px] border border-white/5 text-center relative overflow-hidden">
          {/* Barber Pole Stripes Background Decoration */}
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-b from-barber-red via-white to-barber-blue opacity-5 -rotate-12 translate-x-10" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter mb-8 leading-none uppercase">
              O TEU ESTILO <br />
              <span className="text-barber-red">NÃO ESPERA.</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto font-medium">
              Vagas limitadas para esta semana. Garante já o teu lugar na GhostBarber e experimenta o padrão ouro do grooming em Coimbra.
            </p>
            
            <button
              onClick={onBookingOpen}
              className="bg-white text-space-black px-12 py-6 rounded-2xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)] uppercase italic tracking-tighter"
            >
              Marcar agora
            </button>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 grayscale opacity-40">
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Visa / Mastercard</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">MB Way</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Google Pay</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

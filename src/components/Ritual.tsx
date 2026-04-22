"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const rituals = [
  {
    title: "Acolhimento Premium",
    description: "Sinta o ambiente exclusivo com um café acabado de moer ou uma bebida fresca à sua escolha.",
    image: "/images/coffee.png",
  },
  {
    title: "Toalha Quente",
    description: "Um clássico revitalizante para abrir os poros e relaxar antes do barbear tradicional.",
    image: "/images/ritual.png",
  },
];

const Ritual = () => {
  return (
    <section id="experiencia" className="py-24 bg-dark-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-barber-red font-black text-[10px] uppercase tracking-[0.4em] mb-4">The Experience</p>
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-6 italic leading-none uppercase">
                O RITUAL <br />
                <span className="text-white">CONTEMPORÂNEO</span>
              </h2>
              <p className="text-white/30 text-xs md:text-sm mb-10 max-w-sm leading-relaxed font-medium">
                Mais do que um corte, uma experiência de pausa e reflexo. Onde a arte clássica da barbearia encontra o conforto moderno e o rigor técnico da GhostBarber.
              </p>

              <div className="space-y-6">
                {rituals.map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden relative border border-white/5 flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 group-hover:text-barber-red transition-colors italic">
                        {item.title}
                      </h4>
                      <p className="text-white/30 text-xs md:text-sm leading-relaxed max-w-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[400px] aspect-square rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl"
            >
              <Image 
                src="/images/ritual.png" 
                alt="GhostBarber Ritual" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 glass rounded-2xl border border-barber-blue/10">
                <p className="text-barber-blue font-black text-[9px] uppercase tracking-[0.3em] mb-1">Standard of Excellence</p>
                <h3 className="text-lg font-black italic uppercase">PRECISÃO & RIGOR</h3>
              </div>
            </motion.div>
            
            {/* Decorative Element */}
            <div className="absolute -top-5 -right-5 w-32 h-32 bg-barber-blue/5 blur-[60px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ritual;

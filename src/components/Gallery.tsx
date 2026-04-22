"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  { 
    title: "Fade de Precisão", 
    image: "/images/barber_fade.png" 
  },
  { 
    title: "Barba Tradicional", 
    image: "/images/barber_beard.png" 
  },
  { 
    title: "Lifestyle Grooming", 
    image: "/images/barber_lifestyle.png" 
  },
  { 
    title: "Arquitetura Capilar", 
    image: "/images/ritual.png" 
  },
];

const Gallery = () => {
  // Triple the items to ensure the loop is seamless and smooth
  const allItems = [...items, ...items, ...items];

  return (
    <section id="galeria" className="py-24 bg-space-black relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-8 text-center md:text-left">
          <div className="w-full md:w-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black tracking-tighter italic uppercase"
            >
              GALERIA DE <span className="text-barber-red">CORTES</span>
            </motion.h2>
          </div>
          <p className="text-white/30 max-w-sm text-center md:text-right leading-relaxed text-sm font-medium">
            O Teu Estilo, A Nossa Assinatura. Inspira-te com o nosso portfólio de alta performance.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-space-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-space-black after:to-transparent">
        <motion.div
          animate={{
            x: ["0%", "-33.33%"] 
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-6 w-max px-6"
        >
          {allItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative w-[280px] md:w-[350px] aspect-[3/4] rounded-2xl overflow-hidden group border border-white/5 shrink-0"
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-black text-xl italic uppercase tracking-tighter mb-2">{item.title}</p>
                <div className="w-12 h-1 bg-barber-red" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

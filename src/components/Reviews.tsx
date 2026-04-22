"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Paulito Simões",
    text: "O melhor barbeiro de Coimbra! Atendimento excelente, ambiente topo de gama.",
    rating: 5,
  },
  {
    name: "Pedro Pinto",
    text: "Espaço fantástico, o André é um verdadeiro mestre na arte do corte.",
    rating: 5,
  },
  {
    name: "Tiago",
    text: "Experiência verdadeiramente premium. Recomendo vivamente a quem procura qualidade.",
    rating: 5,
  },
  {
    name: "João Oliveira",
    text: "Sempre impecável. O ambiente é incrível e a precisão técnica imbatível.",
    rating: 5,
  },
  {
    name: "Miguel",
    text: "Profissionalismo ao mais alto nível. Uma referência absoluta em Coimbra.",
    rating: 5,
  },
];

const Reviews = () => {
  const allReviews = [...reviews, ...reviews];

  return (
    <section id="testemunhos" className="py-24 relative overflow-hidden bg-space-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-barber-red/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black tracking-tighter mb-4 italic uppercase"
          >
            A VOZ DOS <span className="text-barber-red">CLIENTES</span>
          </motion.h2>
          <p className="text-white/30 max-w-lg mx-auto text-sm font-medium">
            Excelência reconhecida por quem procura o melhor detalhe.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-space-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-space-black after:to-transparent">
        <motion.div
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-6 w-max px-6"
        >
          {allReviews.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className="glass-card p-6 rounded-2xl border border-white/5 w-[300px] md:w-[350px] shrink-0"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-barber-red text-barber-red" />
                ))}
              </div>
              <p className="text-sm md:text-base text-white/70 mb-6 italic font-medium leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-dark-charcoal border border-barber-red/20 flex items-center justify-center text-barber-red text-xs font-black">
                  {review.name[0]}
                </div>
                <h4 className="font-bold text-white/90 text-xs md:text-sm uppercase tracking-tight">{review.name}</h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;

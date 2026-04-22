"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Scissors, Zap } from "lucide-react";

const steps = [
  {
    title: "Agendamento Express",
    description: "30 segundos no teu telemóvel, em qualquer lugar. Sem chamadas, sem espera.",
    icon: Smartphone,
    color: "text-barber-red",
  },
  {
    title: "Maestria Técnica",
    description: "O café, a conversa e a precisão de quem domina a lâmina. O tempo é teu.",
    icon: Scissors,
    color: "text-white",
  },
  {
    title: "Impacto Máximo",
    description: "Sai da cadeira com a tua confiança renovada e pronto para conquistar o dia.",
    icon: Zap,
    color: "text-barber-blue",
  },
];

const Process = () => {
  return (
    <section id="metodo" className="py-24 relative overflow-hidden bg-space-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-barber-red font-black text-[10px] uppercase tracking-[0.4em] mb-4"
          >
            Eficiência & Excelência
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black tracking-tighter mb-4 italic uppercase"
          >
            O MÉTODO <span className="text-barber-red text-glow">GHOST.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-barber-red/50 transition-all duration-500 relative">
                <div className="absolute inset-0 bg-barber-red/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <step.icon className={`${step.color} relative z-10`} size={32} />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-dark-charcoal border border-white/10 rounded-full flex items-center justify-center text-[10px] font-black text-white/40">
                  0{i + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 italic uppercase tracking-tight group-hover:text-barber-red transition-colors">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

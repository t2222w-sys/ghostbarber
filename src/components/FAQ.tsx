"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Aceitam cartões ou MB Way?",
    answer: "Sim, aceitamos todos os cartões de débito/crédito, MB Way e numerário para tua total conveniência.",
  },
  {
    question: "Onde posso estacionar?",
    answer: "Temos facilidade de estacionamento gratuito mesmo à porta ou nas imediações da Rua Ferreira Borges.",
  },
  {
    question: "Quanto tempo demora um serviço médio?",
    answer: "Um corte de precisão ou barba costuma demorar entre 45 a 60 minutos, garantindo que nenhum detalhe é esquecido.",
  },
  {
    question: "Qual a política de cancelamento?",
    answer: "Pedimos que canceles com pelo menos 2 horas de antecedência para darmos oportunidade a outro cliente.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-space-black">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black tracking-tighter mb-4 italic uppercase outline-text"
          >
            DÚVIDAS <span className="text-white">COMUNS.</span>
          </motion.h2>
          <p className="text-white/30 font-medium italic">Tudo o que precisas de saber antes da tua visita.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left transition-colors hover:bg-white/[0.04]"
              >
                <span className="font-bold text-white/80 uppercase tracking-tight italic">{faq.question}</span>
                {openIndex === i ? <Minus size={18} className="text-barber-red" /> : <Plus size={18} className="text-white/20" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white/40 text-sm leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

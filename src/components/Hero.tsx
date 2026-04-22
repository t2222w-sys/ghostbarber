"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = ({ onBookingOpen }: { onBookingOpen: () => void }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -100]);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden px-6">
      {/* Decorative blurred spots */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-barber-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-barber-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left relative"
        >
          {/* Scarcity Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-barber-red/10 border border-barber-red/20 rounded-full mb-6"
          >
            <div className="w-1.5 h-1.5 bg-barber-red rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-barber-red">Apenas 3 vagas para esta semana</span>
          </motion.div>

          <h1 className="text-4xl md:text-8xl font-black leading-tight md:leading-none tracking-tighter mb-6 italic uppercase">
            <span className="text-white">GHOST</span> <br />
            <span className="text-barber-red flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              BARBER <span className="text-white text-[10px] md:text-2xl font-black italic tracking-widest border-l-0 md:border-l border-white/20 pl-0 md:pl-4 py-1">A ARTE DA LÂMINA</span>
            </span>
          </h1>
          <p className="text-base md:text-xl text-white/40 max-w-lg mb-10 font-medium italic mx-auto lg:mx-0">
            O Teu Estilo, A Nossa Tradição. Definição de elite para quem não aceita menos que a perfeição.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <button
              onClick={onBookingOpen}
              className="bg-barber-red text-white px-8 py-4 rounded-xl font-black text-base transition-all hover:bg-barber-red/80 hover:scale-105 active:scale-95 shadow-[0_15px_30px_-5px_rgba(217,26,17,0.3)]"
            >
              MARCAR AGORA
            </button>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-black text-barber-red uppercase tracking-widest leading-none mb-1">Próxima Vaga</span>
              <span className="text-sm font-black text-white/40 uppercase tracking-[0.2em]">Maestria em Coimbra</span>
            </div>
          </div>
        </motion.div>

        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <motion.div
              style={{ y: y1 }}
              animate={isMobile ? {} : { 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full h-full max-h-[450px] z-20"
            >
            <div className="relative w-full h-full rounded-[30px] overflow-hidden border border-white/5 shadow-2xi">
              <Image
                src="/fotos/hero.jpg"
                alt="GhostBarber Styling"
                fill
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

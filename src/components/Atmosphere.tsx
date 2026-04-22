"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Atmosphere = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[80vh] overflow-hidden flex items-center justify-center"
    >
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0"
      >
        <Image 
          src="/images/cinematic_bg.png" 
          alt="Atmosphere" 
          fill 
          className="object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-space-black via-transparent to-space-black" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div style={{ y }}>
          <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none mb-4">
            The <span className="text-barber-red">Art</span> <br />
            of the Blade.
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-xs md:text-sm font-black uppercase tracking-[0.4em]">
            Precision is not a goal, it's our nature.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Atmosphere;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Menu, X } from "lucide-react";
import Image from "next/image";


const Navbar = ({ onBookingOpen }: { onBookingOpen: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ["Serviços", "Galeria", "Testemunhos"];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
      >
        <div className="glass rounded-2xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between border border-white/10">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 md:gap-3"
            >

              <div className="flex flex-col">
                <span className="text-base md:text-lg font-black tracking-tighter text-white uppercase italic leading-none">
                  GHOST<span className="text-vintage-bronze">BARBER</span>
                </span>
                <div className="hidden md:flex gap-1 mt-1">
                  <div className="w-4 h-0.5 bg-barber-red rounded-full" />
                  <div className="w-4 h-0.5 bg-white rounded-full" />
                  <div className="w-4 h-0.5 bg-barber-blue rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-barber-red transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBookingOpen}
              className="bg-barber-red/90 hover:bg-barber-red text-white px-4 md:px-5 py-2 rounded-lg font-bold text-[10px] md:text-xs uppercase tracking-tight transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(217,26,17,0.2)]"
            >
              Marcações
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-white/50 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-[2.5%] w-[95%] z-40 md:hidden"
          >
            <div className="glass rounded-2xl p-6 border border-white/10 flex flex-col gap-4 shadow-2xl">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-black uppercase tracking-[0.2em] text-white/70 hover:text-barber-red transition-colors py-2 border-b border-white/5"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

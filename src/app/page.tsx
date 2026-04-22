"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Ritual from "@/components/Ritual";
import Atmosphere from "@/components/Atmosphere";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import BookingModal from "@/components/BookingModal";
import Location from "@/components/Location";
import WhatsAppButton from "@/components/WhatsAppButton";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="bg-space-black text-white min-h-screen selection:bg-barber-red selection:text-white font-sans">
      <Navbar onBookingOpen={() => setIsBookingOpen(true)} />
      
      <Hero onBookingOpen={() => setIsBookingOpen(true)} />
      
      <Process />

      <Services />

      <Ritual />
      
      <Atmosphere />
      
      <Gallery />

      <Reviews />

      <Location />

      {/* Floating Team Section */}
      <section id="equipa" className="py-24 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-2 italic uppercase">A <span className="text-barber-red">EQUIPA</span></h2>
            <p className="text-white/20 max-w-lg mx-auto text-[10px] font-black uppercase tracking-[0.3em]">Master Artisans of the Blade</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { name: "Luís", image: "/images/barbers/luis.png" },
              { name: "Carlos", image: "/images/barbers/carlos.png" },
              { name: "André", image: "/images/barbers/andre.png" }
            ].map((barber, i) => (
              <motion.div
                key={barber.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "text-center group",
                  i === 2 && "sm:col-span-2 md:col-span-1" 
                )}
              >
                <div className="aspect-[3/4] md:w-full glass rounded-xl mb-4 overflow-hidden relative border border-white/5 group-hover:border-barber-red/30 transition-all duration-500 grayscale group-hover:grayscale-0">
                  <img 
                    src={barber.image} 
                    alt={barber.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-dark-charcoal/40 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent opacity-60" />
                </div>
                <h4 className="font-bold text-sm md:text-base group-hover:text-barber-red transition-colors italic uppercase tracking-tight">{barber.name}</h4>
                <p className="text-[8px] md:text-[9px] text-white/30 uppercase tracking-[0.2em] font-black mt-0.5">Barbeiro</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-space-black relative overflow-hidden">
        <FAQ />
      </div>

      <FinalCTA onBookingOpen={() => setIsBookingOpen(true)} />

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-space-black relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-barber-red/30 to-transparent" />
        
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-black tracking-tighter mb-1 italic uppercase">GHOST<span className="text-barber-red">BARBER</span></h2>
            <p className="text-white/20 text-xs font-bold uppercase tracking-widest">© 2026 GhostBarber. Mastery in Coimbra.</p>
          </div>
          
          <div className="flex gap-6 text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-barber-red transition-colors">Instagram</a>
            <a href="#" className="hover:text-barber-blue transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
          </div>
        </div>
      </footer>

      <WhatsAppButton />

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </main>
  );
}

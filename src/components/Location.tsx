"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section id="localização" className="py-24 relative overflow-hidden bg-space-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 italic uppercase">
              ONDE A ARTE <br />
              <span className="text-barber-red text-glow">ACONTECE.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                  <MapPin className="text-barber-red" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white/40 mb-1 tracking-widest">Morada</h4>
                  <p className="text-white font-bold leading-tight uppercase italic">Rua Ferreira Borges, 124 <br />Coimbra, Portugal</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                  <Clock className="text-barber-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white/40 mb-1 tracking-widest">Horário</h4>
                  <p className="text-white font-bold leading-tight uppercase italic">Terça - Sábado <br />10:00 - 19:30</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                  <Phone className="text-white/40" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-white/40 mb-1 tracking-widest">Contacto</h4>
                  <p className="text-white font-bold leading-tight uppercase italic">+351 912 345 678</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full aspect-video md:aspect-square lg:aspect-[4/3] rounded-[30px] overflow-hidden border border-white/10 relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.8864761014167!2d-8.4285434!3d40.2093554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f96cfb66a50b%3A0x892a0651147a750c!2sRua%20Ferreira%20Borges%2C%20Coimbra!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 pointer-events-none border-[12px] border-space-black/80 rounded-[30px]" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-barber-red/20 to-transparent" />
    </section>
  );
};

export default Location;

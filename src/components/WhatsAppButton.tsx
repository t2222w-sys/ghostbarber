"use client";

import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "351912345678"; // Placeholder
  const message = encodeURIComponent("Olá André! Gostaria de marcar um serviço na GhostBarber.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      {/* Help Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="hidden md:flex bg-white text-space-black px-4 py-2 rounded-2xl rounded-br-none shadow-2xl border border-white/10 pointer-events-auto cursor-pointer items-center gap-2 group"
        onClick={() => window.open(whatsappUrl, "_blank")}
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-wider text-barber-red opacity-60 leading-none mb-1">Dúvidas?</span>
          <span className="text-xs font-bold italic uppercase leading-none">Falar connosco</span>
        </div>
      </motion.div>

      {/* Main Button (Original Style) */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all relative border-4 border-space-black/50 overflow-visible"
      >
        {/* WhatsApp Official SVG Icon */}
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor" 
          className="relative z-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.851 9.851 0 019.884 9.89c-.001 5.45-4.436 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.415 0 12.053c0 2.123.553 4.197 1.604 6.02L0 24l6.136-1.61a11.783 11.783 0 005.91 1.579h.005c6.637 0 12.05-5.415 12.05-12.053a11.791 11.791 0 00-3.628-8.523z"/>
        </svg>
        
        {/* Pulsing Outer Ring */}
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.4, 0, 0.4]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-[-4px] border-2 border-[#25D366] rounded-full -z-10"
        />
        
        {/* Notification Badge */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-barber-red rounded-full border-2 border-space-black flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
        </div>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;

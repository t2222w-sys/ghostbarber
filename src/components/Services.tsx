"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scissors, Shield, ZapIcon, Sparkles, Star, Zap } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Ritual Premium",
    price: "25€",
    duration: "90 min",
    icon: Shield,
    description: "Assinatura Ghost. Toalha quente e corte de mestre.",
    image: "/images/bento_ritual.png",
    className: "md:col-span-2 md:row-span-1 min-h-[160px]",
  },
  {
    title: "Corte Precisão",
    price: "13€",
    duration: "45 min",
    icon: Scissors,
    description: "Contornos impecáveis.",
    image: "/images/bento_fade.png",
    className: "md:col-span-1 md:row-span-1 min-h-[160px]",
  },
  {
    title: "Barba Clássica",
    price: "10€",
    duration: "45 min",
    icon: Sparkles,
    description: "Esculpir com navalha.",
    image: "/images/bento_beard.png",
    className: "md:col-span-1 md:row-span-1 min-h-[160px]",
  },
  {
    title: "Grooming Life",
    price: "18€",
    duration: "60 min",
    icon: Zap,
    description: "Cabelo e barba.",
    image: "/images/bento_lifestyle.png",
    className: "md:col-span-1 md:row-span-1 min-h-[160px]",
  },
  {
    title: "Arquitetura",
    price: "15€",
    duration: "30 min",
    icon: Star,
    description: "Couro cabeludo.",
    image: "/images/ritual_cover.png",
    className: "md:col-span-1 md:row-span-1 min-h-[160px]",
  },
  {
    title: "Marcar Já",
    price: "GO",
    duration: "24/7",
    icon: ZapIcon,
    description: "Garante o teu lugar.",
    image: "/images/cinematic_bg.png",
    className: "md:col-span-2 md:row-span-1 min-h-[160px] bg-barber-blue/20",
    isCTA: true
  },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={cn(
        "relative group overflow-hidden rounded-2xl border border-white/5 bg-dark-charcoal/50",
        service.className,
        service.isCTA && "bg-barber-blue ring-1 ring-barber-blue/50 shadow-xl"
      )}
    >
      <div className="absolute inset-0">
        <Image 
          src={service.image} 
          alt={service.title} 
          fill 
          className={cn(
            "object-cover opacity-10 group-hover:opacity-30 transition-all duration-700",
            service.isCTA && "opacity-5"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-black/20 to-transparent" />
      </div>

      <div className="relative h-full p-4 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className={cn(
              "text-base font-black text-white italic uppercase tracking-tight group-hover:text-barber-red transition-colors",
              service.isCTA && "text-xl group-hover:text-white"
            )}>
              {service.title}
            </h3>
            <p className="text-xs text-white/50 font-medium leading-tight max-w-[180px] mt-1.5 group-hover:text-white/80">
              {service.description}
            </p>
          </div>
          <div className="w-8 h-8 glass rounded-lg flex items-center justify-center border border-white/10 group-hover:border-barber-red/50 transition-colors">
            <service.icon className={cn("w-4 h-4 text-white/40 group-hover:text-barber-red transition-colors", service.isCTA && "text-white")} />
          </div>
        </div>

        <div className="flex items-end justify-between mt-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/30 font-black uppercase tracking-widest leading-none mb-1">{service.duration}</span>
            <span className="text-xl font-black text-white leading-none tracking-tight">{service.price}</span>
          </div>
          <div className="text-[10px] font-black text-barber-red italic uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            Selecionar
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="serviços" className="py-20 relative px-6">
      <div className="container mx-auto">
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-barber-red/10 border border-barber-red/20 rounded-full mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-barber-red underline underline-offset-4">Premium Selection</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic uppercase">
            MÁXIMA <span className="text-barber-red">PRECISÃO.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight, User, ChevronLeft, Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: "corte", name: "Corte Precisão", price: "13.00€" },
  { id: "barba", name: "Barba Clássica", price: "10.00€" },
  { id: "combo", name: "Grooming Life", price: "18.00€" },
  { id: "premium", name: "Ritual Premium", price: "25.00€" },
];

const barbers = [
  { id: "luis", name: "Luís", role: "Master Barber", image: "/images/barbers/luis.png" },
  { id: "carlos", name: "Carlos", role: "Pro Stylist", image: "/images/barbers/carlos.png" },
  { id: "andre", name: "André", role: "Artisan", image: "/images/barbers/andre.png" },
];

const timeSlots = [
  "09:30", "10:15", "11:00", "11:45", "14:00", "14:45", "15:30", "16:15", "17:00", "17:45", "18:30"
];

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    service: "",
    barber: "",
    date: "",
    time: "",
    name: "",
    phone: ""
  });
  const [dateError, setDateError] = useState("");

  const validateDate = (dateStr: string) => {
    const selectedDate = new Date(dateStr);
    const day = selectedDate.getUTCDay(); // 0: Sun, 1: Mon, ..., 6: Sat
    
    if (day === 0 || day === 1) {
      setDateError("Estamos fechados à Segunda e Domingo. Escolhe Terça a Sábado.");
      return false;
    }
    setDateError("");
    return true;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setData({...data, date: val});
    validateDate(val);
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setData({
        service: "",
        barber: "",
        date: "",
        time: "",
        name: "",
        phone: ""
      });
      setDateError("");
    }, 500);
  };

  const steps = [
    // Step 1: Services
    <div key="step1" className="space-y-4">
      <h3 className="text-2xl font-black mb-6 italic uppercase tracking-tighter">Escolhe o Serviço</h3>
      <div className="grid gap-3">
        {services.map((s) => (
          <button
            key={s.id}
            onClick={() => { setData({...data, service: s.name}); nextStep(); }}
            className={cn(
              "w-full p-4 rounded-xl text-left transition-all border",
              data.service === s.name 
                ? "bg-barber-red/20 border-barber-red text-white" 
                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
            )}
          >
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase italic">{s.name}</span>
              <span className="text-barber-red font-black">{s.price}</span>
            </div>
          </button>
        ))}
      </div>
    </div>,

    // Step 2: Barber
    <div key="step2" className="space-y-4">
      <div className="flex items-center gap-2 mb-6">
        <button onClick={prevStep} className="p-2 hover:bg-white/10 rounded-lg"><ChevronLeft className="w-5 h-5"/></button>
        <h3 className="text-2xl font-black italic uppercase tracking-tighter">Escolhe o Barbeiro</h3>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {barbers.map((b) => (
          <button
            key={b.id}
            onClick={() => { setData({...data, barber: b.name}); nextStep(); }}
            className={cn(
              "w-full p-3 rounded-xl text-left transition-all border group",
              data.barber === b.name 
                ? "bg-barber-red/20 border-barber-red text-white" 
                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
            )}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 relative">
                <img src={b.image} alt={b.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-space-black/20" />
              </div>
              <div>
                <div className="font-black italic uppercase text-sm">{b.name}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{b.role}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>,

    // Step 3: Formalities
    <div key="step3" className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <button onClick={prevStep} className="p-2 hover:bg-white/10 rounded-lg"><ChevronLeft className="w-5 h-5"/></button>
        <h3 className="text-2xl font-black italic uppercase tracking-tighter">Detalhes Finais</h3>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Data Sugerida</label>
              {dateError && <span className="text-[10px] text-barber-red font-bold">{dateError}</span>}
            </div>
            <div 
              className="relative cursor-pointer"
              onClick={() => {
                const input = document.getElementById('date-picker') as HTMLInputElement;
                if (input) input.showPicker();
              }}
            >
              <input 
                id="date-picker"
                type="date" 
                className={cn(
                  "w-full bg-white/5 border rounded-xl p-4 outline-none transition-all text-white text-sm cursor-pointer",
                  dateError ? "border-barber-red" : "border-white/10 focus:border-white"
                )}
                onChange={handleDateChange}
              />
              <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Escolher Horário</label>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setData({...data, time: slot})}
                  className={cn(
                    "py-2 rounded-lg text-xs font-bold transition-all border",
                    data.time === slot
                      ? "bg-white text-space-black border-white"
                      : "bg-white/5 border-white/5 text-white/40 hover:border-white/20"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Nome Completo</label>
            <input 
              type="text" 
              placeholder="Ex: André Santos"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-white text-white placeholder:text-white/10"
              onChange={(e) => setData({...data, name: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Telemóvel</label>
            <input 
              type="tel" 
              placeholder="912 345 678"
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-white text-white placeholder:text-white/10"
              onChange={(e) => setData({...data, phone: e.target.value})}
            />
          </div>
        </div>

        <button
          onClick={nextStep}
          disabled={!data.name || !data.phone || !data.date || !data.time || !!dateError}
          className="w-full bg-white text-space-black py-5 rounded-2xl font-black uppercase italic tracking-widest flex items-center justify-center gap-2 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-20 disabled:grayscale shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] mt-4"
        >
          Confirmar Marcação <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>,

    // Step 4: Success
    <div key="step4" className="text-center py-12">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
        <Check className="w-12 h-12 text-space-black" />
      </div>
      <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase italic">Marcação <br/>Confirmada!</h3>
      <p className="text-white/40 mb-12">
        Enviámos um SMS de confirmação para {data.phone}. <br/>
        Esperamos por ti, {data.name.split(' ')[0]}!
      </p>
      <button
        onClick={resetAndClose}
        className="w-full bg-white/5 border border-white/10 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-all"
      >
        Fechar
      </button>
    </div>
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-space-black/90 backdrop-blur-xl">
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="glass w-full max-w-lg rounded-[40px] overflow-hidden relative border border-white/10 shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 text-white/20 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 md:p-12">
              {steps[step - 1]}
            </div>

            {step < 4 && (
              <div className="bg-white/[0.02] border-t border-white/5 px-8 md:px-12 py-6 flex justify-between items-center">
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div 
                      key={s} 
                      className={cn(
                        "h-1 rounded-full transition-all duration-700",
                        step === s ? "w-12 bg-white" : "w-2 bg-white/10"
                      )} 
                    />
                  ))}
                </div>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">
                  {step} / 3
                </span>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;

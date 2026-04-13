/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Search, 
  Calendar, 
  Building2, 
  History, 
  AlertCircle, 
  CheckCircle2, 
  Save, 
  Send,
  ChevronDown
} from "lucide-react";
import { cn } from "@/src/lib/utils";

export const NuevaODC = () => {
  const [step] = useState(2); // Following the image, step 2 (DATOS ODC) is active

  const steps = [
    { id: 1, label: "Solicitud Vinculada" },
    { id: 2, label: "Datos ODC" },
    { id: 3, label: "Validación Precio" },
    { id: 4, label: "Adjuntos" },
    { id: 5, label: "Autorización" },
  ];

  const priceHistory = [
    { vendor: "Refac. Zacatecas", date: "Feb 2026", price: "$1,020" },
    { vendor: "Refac. Zacatecas", date: "Nov 2025", price: "$990" },
    { vendor: "AutoPartes Norte", date: "Ago 2025", price: "$1,010" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="space-y-6 pb-20"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Nueva Orden de Compra</h1>
          <p className="text-[13px] text-gray-500 mt-1">Elaboración y validación de requerimientos de compra</p>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-between max-w-5xl mx-auto mb-10 overflow-x-auto gap-2 py-2 no-scrollbar">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center gap-0 flex-1 min-w-fit">
            <div className="flex flex-col items-center gap-2">
              <div className={cn(
                "px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border",
                step === s.id ? "bg-navy text-white border-navy shadow-md scale-105" : 
                step > s.id ? "bg-teal-light text-teal border-teal/20" : "bg-gray-50 text-gray-400 border-gray-200"
              )}>
                {s.label}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className={cn(
                "h-[1px] flex-1 min-w-[20px] mx-4 transition-all",
                step > s.id ? "bg-teal/30" : "bg-gray-200"
              )} />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Main Form Area */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Encabezado de la orden */}
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50/30">
              <h3 className="font-head text-sm font-bold text-navy">Encabezado de la orden</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">No. ODC</label>
                  <input 
                    type="text" 
                    readOnly 
                    value="ODC-1043 (auto)" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-[13px] text-navy font-mono font-bold outline-none" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Empresa*</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-bold text-navy outline-none focus:ring-2 focus:ring-navy/10">
                      <option>BUSMEN</option>
                      <option>PITBUS</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Proveedor*</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-bold text-navy outline-none focus:ring-2 focus:ring-navy/10">
                      <option>Refac. Zacatecas SA</option>
                      <option>Llantas Express</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Fecha Requerida</label>
                  <div className="relative">
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <input 
                      type="text" 
                      defaultValue="12/04/2026" 
                      className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-bold text-navy outline-none focus:ring-2 focus:ring-navy/10" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detalle de la pieza */}
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50/30">
              <h3 className="font-head text-sm font-bold text-navy">Detalle de la pieza</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Número de Ítem*</label>
                  <input 
                    type="text" 
                    placeholder="FLT-5W30-UNI" 
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-bold text-navy outline-none focus:ring-2 focus:ring-navy/10" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Validación</label>
                  <div className="flex items-center gap-2 h-10 px-3 bg-teal-light/30 border border-teal/10 rounded-md">
                    <CheckCircle2 className="w-4 h-4 text-teal" />
                    <span className="text-[11px] font-bold text-teal">Ítem encontrado en catálogo</span>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Descripción</label>
                  <input 
                    type="text" 
                    placeholder="Filtro de aceite 5W-30 Universal" 
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-bold text-navy outline-none focus:ring-2 focus:ring-navy/10" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Cantidad*</label>
                  <input 
                    type="number" 
                    defaultValue="4" 
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-bold text-navy outline-none focus:ring-2 focus:ring-navy/10" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Precio Unit.*</label>
                  <input 
                    type="number" 
                    defaultValue="1050" 
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-bold text-navy outline-none focus:ring-2 focus:ring-navy/10" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Total</label>
                  <div className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 h-[38px] flex items-center text-[15px] font-mono font-black text-navy">
                    $4,200
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Info Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy flex items-center gap-2">
                <History className="w-4 h-4 text-gray-400" />
                Historial de precios
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                {priceHistory.map((h, i) => (
                  <div key={i} className="flex justify-between items-start pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                    <div>
                      <p className="text-[11px] font-bold text-navy">{h.vendor}</p>
                      <p className="text-[10px] text-gray-400">{h.date}</p>
                    </div>
                    <span className="text-[12px] font-mono font-black text-navy">{h.price}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                   <span className="text-[10px] font-bold text-gray-400 uppercase">Rango aceptable (IPC)</span>
                   <span className="text-[11px] font-mono font-bold text-navy">$940 — $1,100</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-teal-light/50 border border-teal/20 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
                  <span className="text-[11px] font-bold text-teal">Precio dentro de rango</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full py-3.5 bg-navy text-white rounded-md font-bold uppercase tracking-widest text-xs hover:bg-navy-mid transition-all shadow-md flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Enviar a autorización
            </button>
            <button className="w-full py-3.5 bg-white border border-gray-300 text-gray-700 rounded-md font-bold uppercase tracking-widest text-xs hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2">
              <Save className="w-4 h-4" /> Guardar borrador
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

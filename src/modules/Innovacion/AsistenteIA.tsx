/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Cpu,
  Check,
  Search,
  FileText,
  History,
  TrendingUp,
  ShieldAlert,
  ArrowRight,
  MessageSquare,
  Zap,
  MoreVertical
} from "lucide-react";
import { cn } from "@/src/lib/utils";

export const AsistenteIA = () => {
  const [question, setQuestion] = useState("");

  const predictions = [
    { id: "TKT-9921", concept: "Consumo Restaurante – Viáticos GDL", amount: "$840.00", category: "Viáticos y Alimentos", confidence: 99, color: "amber" },
    { id: "GAS-4410", concept: "Carga Diesel Unidad B1828", amount: "$4,200.00", category: "Combustibles y Lubricantes", confidence: 95, color: "amber" },
    { id: "REP-0812", concept: "Filtro Aceite – Refaccionaria Ríos", amount: "$1,250.00", category: "Mantenimiento de Unidades", confidence: 88, color: "amber" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-light rounded-xl flex items-center justify-center text-amber shadow-sm">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-head text-[24px] font-black text-navy leading-tight">Asistente Inteligente</h1>
            <p className="text-[13px] text-gray-500 mt-0.5 font-medium tracking-tight">Predicción contable, OCR y análisis financiero avanzado</p>
          </div>
        </div>
        <button className="px-6 py-2.5 bg-navy text-white text-[13px] font-bold rounded-md hover:bg-navy-mid transition-all shadow-lg shadow-navy/20 flex items-center gap-2">
          <Zap className="w-4 h-4" /> Procesar Facturas
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden min-h-[50vh]">
            <div className="px-8 py-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-head text-sm font-bold text-navy uppercase tracking-widest">Predicciones de Clasificación (OCR)</h3>
              <span className="px-3 py-1 bg-green-light text-green text-[10px] font-black uppercase tracking-[0.1em] rounded-full">98% PRECISIÓN</span>
            </div>
            <div className="p-6 space-y-4">
              {predictions.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-6 p-5 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-navy/5 border border-transparent hover:border-gray-100 rounded-2xl transition-all"
                >
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[11px] font-mono font-bold text-gray-400">{p.id}</span>
                      <strong className="text-[15px] font-bold text-navy truncate">{p.concept}</strong>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-[14px] font-mono font-black text-navy">{p.amount}</span>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300" />
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5",
                          "bg-amber-light text-amber border border-amber/10"
                        )}>
                          <Sparkles className="w-3 h-3" /> {p.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5 text-right">Confianza</span>
                      <span className="text-[14px] font-black text-green">{p.confidence}%</span>
                    </div>
                    <button className="px-4 py-2 bg-navy text-white text-[11px] font-bold uppercase tracking-widest rounded-md hover:bg-navy-mid transition-all shadow-sm">
                      Aceptar Sugerencia
                    </button>
                    <button className="p-2 text-gray-300 hover:text-navy transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-navy rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-navy/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black font-head tracking-tight">Pregunta a la IA</h3>
              </div>

              <div className="relative">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="¿Cuál es la tendencia de gasto en mantenimiento de la flota B1828 en el último trimestre?"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl p-6 text-[15px] placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none h-24"
                />
              </div>

              <div className="p-5 bg-navy-mid/50 border border-white/10 rounded-2xl flex items-start gap-4">
                <div className="w-8 h-8 bg-teal-mid rounded-md flex items-center justify-center shadow-lg pt-0.5">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <p className="text-[14px] text-white/90 leading-relaxed font-head">
                  El gasto ha incrementado un 12% debido a servicios preventivos. Se recomienda revisar el contrato con Refaccionaria Ríos para optimizar costos por volumen.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-6">
            <h3 className="font-head text-sm font-bold text-navy uppercase tracking-widest mb-6">Capacidades Activas</h3>
            <div className="space-y-6">
              {[
                { title: "OCR Multiformato", desc: "Tickets, facturas y estados de cuenta", icon: FileText, color: "blue" },
                { title: "Clasificación Automática", desc: "Asignación de cuentas contables", icon: Zap, color: "green" },
                { title: "Detección de Anomalías", desc: "Identificación de gastos duplicados", icon: ShieldAlert, color: "teal" },
                { title: "Proyección de Flujo", desc: "Predicción de egresos a 30 días", icon: TrendingUp, color: "amber" },
              ].map((cap, i) => (
                <div key={i} className="flex gap-4">
                  <div className={cn(
                    "w-2 h-2 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.15)]",
                    cap.color === "blue" ? "bg-blue" :
                      cap.color === "green" ? "bg-green" :
                        cap.color === "teal" ? "bg-teal" : "bg-amber"
                  )} />
                  <div className="flex flex-col">
                    <strong className="text-[13px] font-black text-navy">{cap.title}</strong>
                    <span className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">{cap.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber to-amber-mid rounded-2xl p-6 text-navy shadow-xl shadow-amber/20">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-6 h-6 opacity-60" />
              <h4 className="text-[14px] font-black uppercase tracking-widest">Optimización</h4>
            </div>
            <p className="text-[13px] font-bold leading-tight mb-4">El asistente ha detectado 4 facturas sin asignar que podrían deducirse este mes.</p>
            <button className="w-full py-2.5 bg-navy text-white rounded-md text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-lg">Asignar Ahora →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CreditCard, 
  History, 
  FileText, 
  FileCheck, 
  BarChart3, 
  Search, 
  Plus, 
  Download, 
  Building2,
  User,
  ArrowUpRight,
  Clock,
  AlertCircle,
  CheckCircle2,
  MapPin,
  Upload,
  X,
  Sparkles,
  Cpu,
  Check,
  ChevronRight,
  ChevronLeft,
  TrendingUp,
  Calculator,
  Zap,
  ArrowDownRight,
  Truck,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/src/lib/utils";

// --- Pago de Pasivos ---
export const Pasivos = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Pago de Pasivos / Nómina</h1>
          <p className="text-[13px] text-gray-500 mt-1">Control de mensualidades y trazabilidad de pagos</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" /> Registrar pago
          </button>
        </div>
      </div>

      <div className="p-4 bg-red-light border border-red/20 rounded-md flex gap-3">
        <AlertCircle className="w-5 h-5 text-red shrink-0 mt-0.5" />
        <div className="flex flex-col">
          <strong className="text-[13px] font-bold text-red">Discrepancia detectada en número de mensualidad</strong>
          <span className="text-[12px] text-red/80">Contrato CTR-2024-018 · Real: 6/36 · Sistema muestra: 5/36 · Verifique antes de continuar.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy">Registrar pago mensual</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Empresa <span className="text-red">*</span></label>
                  <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                    <option>Bus Men México</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Contrato de pasivo <span className="text-red">*</span></label>
                  <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                    <option>CTR-2024-018 — BBVA Crédito Flotilla</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Periodo <span className="text-red">*</span></label>
                  <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                    <option>Abril 2026</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Moneda</label>
                  <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                    <option>MXN</option>
                    <option>USD</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">No. Mensualidad REAL <span className="text-red">*</span></label>
                  <input type="number" defaultValue={6} className="w-full bg-green-light border border-green/30 rounded-md px-3 py-2 text-[13px] text-green font-mono font-bold focus:ring-2 focus:ring-green/10 outline-none" />
                  <span className="text-[10px] text-green font-medium">✔ Calculado desde contrato — fuente de verdad</span>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">No. Mensualidad SISTEMA</label>
                  <input type="number" defaultValue={5} className="w-full bg-red-light border border-red/30 rounded-md px-3 py-2 text-[13px] text-red font-mono font-bold focus:ring-2 focus:ring-red/10 outline-none" />
                  <span className="text-[10px] text-red font-medium">⚠ Difiere del valor real — corrija antes de guardar</span>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[12px] font-bold text-gray-700">Progreso del crédito</label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-navy rounded-full" style={{ width: '17%' }} />
                    </div>
                    <span className="text-[12px] font-mono font-bold text-navy">6 / 36 · 17%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Capital <span className="text-red">*</span></label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input type="number" defaultValue={38420.00} className="w-full bg-white border border-gray-300 rounded-md pl-7 pr-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Interés <span className="text-red">*</span></label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input type="number" defaultValue={8620.00} className="w-full bg-white border border-gray-300 rounded-md pl-7 pr-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">IVA s/ Interés (calc.)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input type="number" readOnly value={1379.20} className="w-full bg-gray-50 border border-gray-200 rounded-md pl-7 pr-3 py-2 text-[13px] text-gray-500 outline-none" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Total a pagar</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-navy font-bold">$</span>
                    <input type="number" readOnly value={48419.20} className="w-full bg-navy-light border border-navy/10 rounded-md pl-7 pr-3 py-2 text-[15px] font-mono font-bold text-navy outline-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">¿Quién pagó? <span className="text-red">*</span></label>
                  <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                    <option>Carlos Martínez</option>
                    <option>Ana López</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">¿Quién validó? <span className="text-red">*</span></label>
                  <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                    <option>Iván Rodríguez</option>
                    <option>Director Finanzas</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">Cancelar</button>
              <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm">Guardar pago →</button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy">Tabla de amortización — CTR-2024-018</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-navy-light text-navy font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-2">Mes</th>
                    <th className="px-4 py-2 text-right">Capital</th>
                    <th className="px-4 py-2 text-right">Interés</th>
                    <th className="px-4 py-2 text-right">Total</th>
                    <th className="px-4 py-2 text-center">Estatus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { mes: "Ene 26", cap: "$38,420", int: "$9,800", tot: "$48,220", status: "Pagado", color: "green" },
                    { mes: "Feb 26", cap: "$38,420", int: "$9,400", tot: "$47,820", status: "Pagado", color: "green" },
                    { mes: "Mar 26", cap: "$38,420", int: "$9,010", tot: "$47,430", status: "Pagado", color: "green" },
                    { mes: "Abr 26", cap: "$38,420", int: "$8,620", tot: "$47,040", status: "Pendiente", color: "amber", current: true },
                    { mes: "May 26", cap: "$38,420", int: "$8,200", tot: "$46,620", status: "Futuro", color: "gray" },
                  ].map((row, i) => (
                    <tr key={i} className={cn("hover:bg-gray-50 transition-colors", row.current ? "bg-amber-light/30" : "")}>
                      <td className="px-4 py-2 font-medium">{row.mes}</td>
                      <td className="px-4 py-2 text-right font-mono">{row.cap}</td>
                      <td className="px-4 py-2 text-right font-mono">{row.int}</td>
                      <td className="px-4 py-2 text-right font-mono font-bold text-navy">{row.tot}</td>
                      <td className="px-4 py-2 text-center">
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest",
                          row.color === "green" ? "bg-green-light text-green" :
                          row.color === "amber" ? "bg-amber-light text-amber" : "bg-gray-100 text-gray-400"
                        )}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
              <p className="text-[10px] text-amber font-bold text-center uppercase tracking-widest">← Mes en curso</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Caja Chica ---
export const CajaChica = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiResult, setAiResult] = useState<{ amount: number, category: string, confidence: number } | null>(null);

  const simulateAiAnalysis = () => {
    setIsAnalyzing(true);
    setAiResult(null);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAiResult({
        amount: 850.00,
        category: "LLANTA — Mantenimiento Correctivo",
        confidence: 0.98
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Caja Chica</h1>
          <p className="text-[13px] text-gray-500 mt-1">Gastos en trayecto — UNIDAD + MOTIVO + GPS = FOLIO</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" /> Nuevo folio
          </button>
        </div>
      </div>

      <div className="p-4 bg-amber-light border border-amber/20 rounded-md flex gap-3">
        <AlertCircle className="w-5 h-5 text-amber shrink-0 mt-0.5" />
        <div className="flex flex-col">
          <strong className="text-[13px] font-bold text-amber">Folio duplicado detectado</strong>
          <span className="text-[12px] text-amber/80">Unidad B1828 · 25 Mar 2026 · 2 eventos el mismo día. Revise antes de aprobar.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-head text-sm font-bold text-navy">Nuevo folio de caja chica</h3>
              <div className="flex items-center gap-2">
                 <div className="flex items-center gap-1.5 px-2 py-1 bg-navy-light rounded-md border border-navy/10">
                    <Sparkles className="w-3.5 h-3.5 text-navy" />
                    <span className="text-[10px] font-bold text-navy uppercase tracking-widest">AI Core Active</span>
                 </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Empresa <span className="text-red">*</span></label>
                  <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                    <option>Bus Men México</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Unidad (vehículo) <span className="text-red">*</span></label>
                  <input type="text" defaultValue="B1828 — Mercedes Benz 2023" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
                </div>

                <div className="md:col-span-2 space-y-1.5 overflow-hidden">
                  <label className="text-[12px] font-bold text-gray-700">Comprobante de Gasto (OCR) <span className="text-red">*</span></label>
                  <div className={cn(
                    "relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center transition-all",
                    isAnalyzing ? "bg-navy-light/30 border-navy" : "bg-gray-50 border-gray-200"
                  )}>
                    <AnimatePresence>
                      {isAnalyzing && (
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: '100%' }}
                          className="absolute top-0 left-0 right-0 bg-navy/5 z-0"
                          transition={{ duration: 2, ease: "linear" }}
                        />
                      )}
                    </AnimatePresence>
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-gray-400 group">
                        {isAnalyzing ? (
                          <Cpu className="w-8 h-8 text-navy animate-pulse" />
                        ) : (
                          <Upload className="w-8 h-8 group-hover:text-navy transition-colors" />
                        )}
                      </div>
                      <p className="text-[13px] font-bold text-navy">ticket_vulcanizadora_010426.jpg</p>
                      <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-widest">JPG · 1.2 MB</p>
                      
                      {!aiResult && !isAnalyzing && (
                        <button 
                          onClick={simulateAiAnalysis}
                          className="mt-4 px-6 py-2 bg-navy text-white text-[11px] font-bold uppercase tracking-widest rounded-lg flex items-center gap-2 hover:bg-navy-mid transition-all shadow-lg shadow-navy/20"
                        >
                          <Sparkles className="w-3.5 h-3.5" /> Analizar con IA
                        </button>
                      )}

                      {aiResult && (
                        <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-green-light border border-green/20 rounded-lg">
                           <Check className="w-4 h-4 text-green" />
                           <span className="text-[11px] font-bold text-green uppercase">Análisis Completo (Score: {(aiResult.confidence * 100).toFixed(0)}%)</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="p-4 bg-navy-light/50 border border-navy/10 rounded-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-[11px] font-bold text-navy uppercase tracking-widest">Predicciones Sugeridas</h4>
                      <Sparkles className="w-4 h-4 text-navy opacity-50" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase">Monto Detectado</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                          <input 
                            type="number" 
                            value={aiResult ? aiResult.amount : 0} 
                            className={cn(
                              "w-full bg-white border border-gray-300 rounded-md pl-7 pr-3 py-2 text-[13px] font-bold outline-none",
                              aiResult && "border-green text-green"
                            )} 
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase">Motivo / Clasificación</label>
                        <input 
                          type="text" 
                          value={aiResult ? aiResult.category : "Esperando análisis..."} 
                          className={cn(
                            "w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-bold outline-none",
                            aiResult && "border-green text-green"
                          )} 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Fecha del evento <span className="text-red">*</span></label>
                  <input type="date" defaultValue="2026-04-01" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">ID Reporte GPS <span className="text-red">*</span></label>
                  <input type="text" defaultValue="GPS-2026-04-001-B1828" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-mono focus:ring-2 focus:ring-navy/10 outline-none" />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Comentarios Adicionales</label>
                  <textarea rows={2} className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none resize-none" placeholder="Opcional..." />
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">Cancelar</button>
              <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm">Solicitar folio ↗</button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy">Folios recientes</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-2">Folio</th>
                    <th className="px-4 py-2">Unidad</th>
                    <th className="px-4 py-2">Motivo</th>
                    <th className="px-4 py-2 text-right">Monto</th>
                    <th className="px-4 py-2 text-center">Est.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { folio: "CAJA-202604-0021", unit: "B1828", reason: "LLANTA", amount: "$850", status: "✓", color: "green" },
                    { folio: "CAJA-202604-0020", unit: "B1828", reason: "MULTA", amount: "$800", status: "⚠ Dup.", color: "amber", highlight: true },
                    { folio: "CAJA-202604-0018", unit: "C0045", reason: "VIALIDAD", amount: "$120", status: "✓", color: "green" },
                  ].map((row, i) => (
                    <tr key={i} className={cn("hover:bg-gray-50 transition-colors", row.highlight ? "bg-amber-light/30" : "")}>
                      <td className="px-4 py-3 font-mono text-navy font-bold">{row.folio}</td>
                      <td className="px-4 py-3">{row.unit}</td>
                      <td className="px-4 py-3">
                        <span className={cn(
                          "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest",
                          row.reason === "LLANTA" ? "bg-blue-light text-navy" : row.reason === "MULTA" ? "bg-amber-light text-amber" : "bg-blue-light text-navy"
                        )}>{row.reason}</span>
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-bold">{row.amount}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={cn(
                          "font-bold",
                          row.color === "green" ? "text-green" : "text-amber"
                        )}>{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Pagos a Jurídico ---
export const Juridico = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Pagos a Jurídico</h1>
          <p className="text-[13px] text-gray-500 mt-1">Egresos derivados de incidentes — GPS + Firmas obligatorios</p>
        </div>
        <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm">
          ＋ Nueva solicitud
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-head text-sm font-bold text-navy">Solicitud #PAG-JUR-2026-008</h3>
              <span className="px-3 py-1 bg-amber-light text-amber text-[10px] font-bold uppercase tracking-widest rounded-full">En validación</span>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Empresa</label>
                  <input type="text" readOnly value="Bus Men México" className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-[13px] text-gray-500 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Despacho jurídico</label>
                  <input type="text" readOnly value="Lic. Martínez Abogados SC" className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-[13px] text-gray-500 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Tipo de incidente</label>
                  <input type="text" readOnly value="ACCIDENTE" className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-[13px] text-gray-500 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Fecha del incidente</label>
                  <input type="date" readOnly defaultValue="2026-03-18" className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-[13px] text-gray-500 outline-none" />
                </div>
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Descripción</label>
                  <textarea readOnly rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-[13px] text-gray-500 outline-none resize-none" defaultValue="Accidente de tránsito unidad B2201 en Blvd. López Mateos · Daños a tercero · Se requiere pago de indemnización conforme a resolución del juzgado 4to civil." />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Monto solicitado</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                    <input type="number" readOnly value={85000} className="w-full bg-gray-50 border border-gray-200 rounded-md pl-7 pr-3 py-2 text-[13px] text-gray-500 outline-none" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700">Monto aprobado</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-navy font-bold">$</span>
                    <input type="number" defaultValue={78500} className="w-full bg-white border border-gray-300 rounded-md pl-7 pr-3 py-2 text-[13px] font-bold text-navy focus:ring-2 focus:ring-navy/10 outline-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy">① Validación GPS</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">ID Reporte GPS <span className="text-red">*</span></label>
                <input type="text" defaultValue="GPS-2026-03-018-B2201" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-mono focus:ring-2 focus:ring-navy/10 outline-none" />
              </div>
              <div className="p-4 bg-green-light border border-green/20 rounded-md flex items-center gap-4">
                <div className="w-10 h-10 bg-green/10 rounded-full flex items-center justify-center text-green">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <strong className="text-[13px] font-bold text-green">GPS Validado ✔</strong>
                  <p className="text-[11px] text-green/80">Unidad B2201 · 18 Mar 2026 14:28 · Blvd. López Mateos km 4.2</p>
                </div>
                <button className="px-3 py-1.5 bg-white border border-gray-200 rounded text-[11px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">Ver evidencia</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy">Documentos adjuntos</h3>
            </div>
            <div className="p-6 space-y-2">
              {[
                { name: "resolucion_juzgado_4to.pdf", type: "PDF", size: "1.2 MB" },
                { name: "factura_honorarios_martinez.xml", type: "XML", size: "42 KB" },
                { name: "fotos_accidente_b2201.zip", type: "ZIP", size: "8.4 MB" },
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 border border-gray-200 rounded-md">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-[12px] font-medium text-gray-700 flex-1 truncate">{doc.name}</span>
                  {doc.type && <span className={cn(
                    "px-1.5 py-0.5 text-[9px] font-bold rounded",
                    doc.type === "PDF" ? "bg-red-light text-red" : doc.type === "XML" ? "bg-teal-light text-teal" : "bg-gray-200 text-gray-500"
                  )}>{doc.type}</span>}
                  <span className="text-[10px] text-gray-400">{doc.size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy">Estado de aprobación</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-bold text-gray-700">GPS validado</span>
                  <span className="px-2 py-0.5 bg-green-light text-green text-[9px] font-bold rounded-full">✔ Completo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-bold text-gray-700">Firmas (2 de 3)</span>
                  <span className="px-2 py-0.5 bg-amber-light text-amber text-[9px] font-bold rounded-full">En proceso</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-bold text-gray-700">Tesorería</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-400 text-[9px] font-bold rounded-full">Pendiente</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-amber rounded-full" style={{ width: '60%' }} />
                </div>
                <p className="text-[11px] text-gray-500 text-center">60% completado · Falta 1 firma</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy">② Autorización por Firmas</h3>
            </div>
            <div className="p-6 space-y-3">
              {[
                { name: "Roberto Leal", role: "Director de Operaciones", status: "Firmado", date: "28 Mar · 11:22", color: "teal" },
                { name: "Mónica García", role: "Dirección Jurídica", status: "Firmado", date: "29 Mar · 09:05", color: "purple" },
                { name: "Carlos Flores", role: "Director General", status: "Pendiente", color: "amber", current: true },
              ].map((firma, i) => (
                <div key={i} className={cn(
                  "p-3 rounded-md border flex items-center gap-3",
                  firma.current ? "bg-amber-light/30 border-amber/20" : "bg-gray-50 border-gray-200"
                )}>
                  <div className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0",
                    firma.color === "teal" ? "bg-teal" : firma.color === "purple" ? "bg-purple" : "bg-amber"
                  )}>
                    {firma.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <strong className="text-[12px] font-bold text-gray-900 block truncate">{firma.name}</strong>
                    <span className="text-[10px] text-gray-500 block truncate">{firma.role}</span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={cn(
                      "text-[9px] font-bold uppercase tracking-widest block",
                      firma.status === "Firmado" ? "text-green" : "text-amber"
                    )}>{firma.status}</span>
                    {firma.date && <span className="text-[8px] text-gray-400">{firma.date}</span>}
                    {firma.current && <button className="mt-1 px-2 py-0.5 bg-amber text-navy text-[9px] font-bold rounded">Firmar</button>}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col gap-3">
              <p className="text-[10px] text-gray-400 text-center">El egreso se generará al completar las 3 firmas</p>
              <button disabled className="w-full py-2 bg-navy/40 text-white rounded-md text-[13px] font-bold cursor-not-allowed">Generar egreso ↗</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Contratos / Pagarés ---
export const Contratos = () => {
  const [activeTab, setActiveTab] = useState("activos");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Contratos y Pagarés</h1>
          <p className="text-[13px] text-gray-500 mt-1">1 contrato puede tener N unidades asociadas — reporte mensual a Finanzas</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 bg-white border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" /> Reporte mensual
          </button>
          <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" /> Nuevo contrato
          </button>
        </div>
      </div>

      <div className="flex border-b border-gray-200">
        {[
          { id: "activos", label: "Contratos activos", badge: 8 },
          { id: "pagares", label: "Pagarés" },
          { id: "liquidados", label: "Liquidados" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-6 py-3 text-[13px] font-bold transition-all border-b-2 -mb-[2px]",
              activeTab === tab.id ? "border-navy text-navy" : "border-transparent text-gray-500 hover:text-navy"
            )}
          >
            {tab.label}
            {tab.badge && <span className="ml-2 px-1.5 py-0.5 bg-teal-light text-teal text-[10px] rounded-full">{tab.badge}</span>}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3">Contrato</th>
                    <th className="px-6 py-3">Tipo</th>
                    <th className="px-6 py-3">Institución</th>
                    <th className="px-6 py-3 text-right">Monto orig.</th>
                    <th className="px-6 py-3 text-right">Saldo</th>
                    <th className="px-6 py-3 text-center">Unidades</th>
                    <th className="px-6 py-3 text-right">Vencimiento</th>
                    <th className="px-6 py-3 text-center">Estatus</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { id: "CTR-2024-018", type: "Crédito", inst: "BBVA Flotilla", orig: "$1,800,000", saldo: "$1,421,500", units: 4, date: "Mar 2027", status: "Vigente", color: "green" },
                    { id: "CTR-2023-044", type: "Pagaré", inst: "Navistar Credit", orig: "$2,400,000", saldo: "$960,000", units: 2, date: "Ene 2028", status: "Vigente", color: "green" },
                    { id: "CTR-2025-007", type: "Arrendamiento", inst: "Daimler Financial", orig: "$950,000", saldo: "$820,000", units: 1, date: "Jun 2026", status: "Por vencer", color: "amber" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors group">
                      <td className="px-6 py-4 font-mono text-navy font-bold">{row.id}</td>
                      <td className="px-6 py-4"><span className="px-2 py-0.5 bg-navy-light text-navy text-[10px] font-bold rounded uppercase tracking-wider">{row.type}</span></td>
                      <td className="px-6 py-4 font-bold text-gray-900">{row.inst}</td>
                      <td className="px-6 py-4 text-right font-mono">{row.orig}</td>
                      <td className="px-6 py-4 text-right font-mono font-bold text-teal">{row.saldo}</td>
                      <td className="px-6 py-4 text-center"><span className="px-2 py-0.5 bg-navy-light text-navy text-[10px] font-bold rounded">{row.units} unidades</span></td>
                      <td className="px-6 py-4 text-right text-gray-500">{row.date}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest",
                          row.color === "green" ? "bg-green-light text-green" : "bg-amber-light text-amber"
                        )}>{row.status}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="px-3 py-1 bg-white border border-gray-300 rounded text-[11px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">Ver</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy">CTR-2024-018 · Detalle</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                {[
                  { label: "Institución", value: "BBVA Flotilla", bold: true },
                  { label: "Monto original", value: "$1,800,000", mono: true, bold: true },
                  { label: "Saldo pendiente", value: "$1,421,500", mono: true, bold: true, color: "teal" },
                  { label: "Mensualidad", value: "$47,040", mono: true, bold: true },
                  { label: "Tasa anual", value: "12.5%", bold: true },
                  { label: "Plazo", value: "36 meses", bold: true },
                  { label: "Mensualidad actual", value: "6 / 36", bold: true, color: "navy" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[13px]">
                    <span className="text-gray-500">{item.label}</span>
                    <span className={cn(
                      item.bold ? "font-bold" : "",
                      item.mono ? "font-mono" : "",
                      item.color === "teal" ? "text-teal" : item.color === "navy" ? "text-navy" : "text-gray-900"
                    )}>{item.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-[11px] font-bold text-navy uppercase tracking-widest mb-3">Unidades vinculadas</h4>
                <div className="space-y-2">
                  {[
                    { id: "B1828", model: "Mercedes 2023", perc: "25%" },
                    { id: "B2201", model: "Mercedes 2023", perc: "25%" },
                    { id: "C0045", model: "Sprinter 2022", perc: "30%" },
                    { id: "C0046", model: "Sprinter 2022", perc: "20%" },
                  ].map((unit, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded-md">
                      <span className="px-1.5 py-0.5 bg-navy text-white text-[9px] font-bold rounded">{unit.id}</span>
                      <span className="text-[12px] text-gray-700 flex-1">{unit.model}</span>
                      <span className="text-[11px] font-bold text-gray-400">{unit.perc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-navy rounded-full" style={{ width: '17%' }} />
                </div>
                <p className="text-[11px] text-gray-400 text-center">17% del crédito amortizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Cotizaciones Unidades ---
export const Cotizaciones = () => {
  const [isNewQuote, setIsNewQuote] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    price: 2460000,
    discount: 5,
    tax: 16,
    downPayment: 500000,
    term: 36,
    rate: 12.5
  });

  const total = formData.price * (1 - formData.discount / 100) * (1 + formData.tax / 100);
  const diff = total - 2180000;
  const perc = (diff / 2180000) * 100;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Cotizaciones de Unidades</h1>
          <p className="text-[13px] text-gray-500 mt-1">Comparativo financiero — modelo nuevo vs modelo anterior</p>
        </div>
        <button 
          onClick={() => { setIsNewQuote(true); setStep(1); }}
          className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Nueva cotización
        </button>
      </div>

      <AnimatePresence>
        {isNewQuote && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy/40 backdrop-blur-[2px]"
              onClick={() => setIsNewQuote(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20"
            >
              <div className="flex flex-col md:flex-row h-[85vh] max-h-[750px]">
                {/* Fixed Sidebar for summary */}
                <div className="w-full md:w-72 bg-navy p-8 text-white shrink-0 flex flex-col justify-between relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl font-head" />
                   <div className="relative z-10">
                      <h4 className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-6">Resumen Ejecutivo</h4>
                      <div className="space-y-6">
                         <div>
                            <p className="text-[11px] text-white/50 font-bold mb-1 uppercase tracking-tight">Total Operación</p>
                            <p className="text-2xl font-black font-mono leading-none">${total.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0})}</p>
                         </div>
                         <div>
                            <p className="text-[11px] text-white/50 font-bold mb-1 uppercase tracking-tight">Diferencia ΔΔ</p>
                            <p className={cn("text-lg font-black font-mono leading-none", diff > 0 ? "text-amber" : "text-green")}>
                               {diff > 0 ? "+" : ""}${diff.toLocaleString(undefined, {maximumFractionDigits: 0})}
                            </p>
                            <p className="text-[10px] text-white/30 font-bold mt-1 uppercase">↑ {perc.toFixed(1)}% vs anterior</p>
                         </div>
                         <div className="pt-6 border-t border-white/10">
                            <p className="text-[11px] text-white/50 font-bold mb-1 uppercase tracking-tight">Costo mensual est.</p>
                            <p className="text-xl font-black font-mono text-teal-mid">${((total - formData.downPayment) / formData.term * (1 + formData.rate/100)).toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
                         </div>
                      </div>
                   </div>
                   <div className="relative z-10 bg-white/5 p-4 rounded-2xl border border-white/10">
                      <p className="text-[10px] text-white/40 font-bold uppercase mb-2">Estatus: Borrador</p>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-teal-mid" style={{ width: `${(step/4)*100}%` }} />
                      </div>
                   </div>
                </div>

                <div className="flex-1 flex flex-col min-w-0 bg-white">
                  <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-navy-light rounded-xl flex items-center justify-center text-navy">
                        <Truck className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-head text-lg font-black text-navy leading-tight">Nueva Cotización de Unidad</h3>
                        <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Paso {step} de 4 · {step === 1 ? "Selección" : step === 2 ? "Costos" : step === 3 ? "Financiamiento" : "Finalizar"}</p>
                      </div>
                    </div>
                    <button onClick={() => setIsNewQuote(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X className="w-5 h-5 text-gray-400" /></button>
                  </div>

                  <div className="flex-1 overflow-y-auto px-10 py-8">
                     {step === 1 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                           <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-1.5 col-span-2 md:col-span-1">
                                 <label className="text-[12px] font-bold text-gray-700 uppercase tracking-tighter">Tipo de Unidad</label>
                                 <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all font-bold">
                                    <option>Autobús · Foráneo</option>
                                    <option>Autobús · Urbano</option>
                                    <option>Van · Ejecutivo</option>
                                    <option>Camioneta · Utilitario</option>
                                 </select>
                              </div>
                              <div className="space-y-1.5 col-span-2 md:col-span-1">
                                 <label className="text-[12px] font-bold text-gray-700 uppercase tracking-tighter">Marca / Fabricante</label>
                                 <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all font-bold">
                                    <option>Mercedes-Benz</option>
                                    <option>Volvo</option>
                                    <option>Toyota</option>
                                    <option>Volkswagen</option>
                                 </select>
                              </div>
                              <div className="space-y-1.5 col-span-2 md:col-span-1">
                                 <label className="text-[12px] font-bold text-gray-700 uppercase tracking-tighter">Modelo</label>
                                 <input type="text" defaultValue="Tourismo" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all font-bold" />
                              </div>
                              <div className="space-y-1.5 col-span-2 md:col-span-1">
                                 <label className="text-[12px] font-bold text-gray-700 uppercase tracking-tighter">Año / Versión</label>
                                 <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all font-bold">
                                    <option>2026 (Nueva Gen)</option>
                                    <option>2025</option>
                                    <option>2024</option>
                                 </select>
                              </div>
                           </div>
                           <div className="p-6 bg-navy-light rounded-2xl flex items-center gap-4 border border-navy/5">
                              <Zap className="w-8 h-8 text-navy opacity-40 shrink-0" />
                              <p className="text-[12px] text-navy font-medium leading-normal italic">Tip: Al elegir el modelo 2026, el sistema activará automáticamente el análisis de ahorro en combustible proyectado vs 2024.</p>
                           </div>
                        </motion.div>
                     )}

                     {step === 2 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                           <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-1.5 col-span-2 md:col-span-1">
                                 <label className="text-[12px] font-bold text-gray-700">Precio Lista (Monto base)</label>
                                 <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">$</span>
                                    <input 
                                       type="number" 
                                       value={formData.price}
                                       onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                                       className="w-full bg-white border border-gray-300 rounded-xl pl-8 pr-4 py-3 text-[15px] font-black focus:ring-4 focus:ring-navy/5 outline-none transition-all" 
                                    />
                                 </div>
                              </div>
                              <div className="space-y-1.5 col-span-2 md:col-span-1">
                                 <label className="text-[12px] font-bold text-gray-700">Descuento Directo (%)</label>
                                 <input 
                                    type="number" 
                                    value={formData.discount}
                                    onChange={(e) => setFormData({...formData, discount: Number(e.target.value)})}
                                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-[15px] font-black text-green focus:ring-4 focus:ring-navy/5 outline-none transition-all" 
                                 />
                              </div>
                           </div>
                           <div className="p-8 border-2 border-gray-100 rounded-[24px] bg-gray-50/50">
                              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Análisis Comparativo vs 2024</h4>
                              <div className="flex items-end justify-between gap-8 h-32">
                                 <div className="flex-1 flex flex-col items-center gap-2">
                                    <div className="w-full h-20 bg-gray-200 rounded-t-xl relative group">
                                       <div className="absolute inset-x-0 bottom-full mb-1 text-[10px] font-bold text-gray-400 text-center opacity-0 group-hover:opacity-100 transition-opacity">$2,180k</div>
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Base 2024</span>
                                 </div>
                                 <div className="flex-1 flex flex-col items-center gap-2">
                                    <div className="w-full h-28 bg-navy rounded-t-xl relative group">
                                       <div className="absolute inset-x-0 bottom-full mb-1 text-[10px] font-bold text-navy text-center opacity-0 group-hover:opacity-100 transition-opacity">${(total/1000).toFixed(0)}k</div>
                                       <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-white text-navy text-[8px] font-black rounded-full shadow-lg">+12%</div>
                                    </div>
                                    <span className="text-[10px] font-bold text-navy uppercase tracking-widest">Proy. 2026</span>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     )}

                     {step === 3 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                           <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-1.5 col-span-2">
                                 <label className="text-[12px] font-bold text-gray-700 tracking-tighter">Enganche Sugerido (Min. 20%)</label>
                                 <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">$</span>
                                    <input 
                                       type="number" 
                                       value={formData.downPayment}
                                       onChange={(e) => setFormData({...formData, downPayment: Number(e.target.value)})}
                                       className="w-full bg-white border border-gray-300 rounded-xl pl-8 pr-4 py-3 text-[15px] font-black focus:ring-4 focus:ring-navy/5 outline-none transition-all" 
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-green uppercase">~ {((formData.downPayment/total)*100).toFixed(1)}%</div>
                                 </div>
                              </div>
                              <div className="space-y-1.5">
                                 <label className="text-[12px] font-bold text-gray-700">Plazo (Meses)</label>
                                 <select 
                                    value={formData.term}
                                    onChange={(e) => setFormData({...formData, term: Number(e.target.value)})}
                                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-[15px] font-black focus:ring-4 focus:ring-navy/5 outline-none transition-all"
                                 >
                                    <option value={12}>12 Meses</option>
                                    <option value={24}>24 Meses</option>
                                    <option value={36}>36 Meses</option>
                                    <option value={48}>48 Meses</option>
                                    <option value={60}>60 Meses</option>
                                 </select>
                              </div>
                              <div className="space-y-1.5">
                                 <label className="text-[12px] font-bold text-gray-700">Tasa Interés Anual (%)</label>
                                 <input 
                                    type="number" 
                                    value={formData.rate}
                                    onChange={(e) => setFormData({...formData, rate: Number(e.target.value)})}
                                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-[15px] font-black text-navy focus:ring-4 focus:ring-navy/5 outline-none transition-all" 
                                 />
                              </div>
                           </div>
                           <div className="p-6 bg-teal-light rounded-2xl border border-teal/10 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                 <Calculator className="w-5 h-5 text-teal" />
                                 <span className="text-[13px] font-bold text-navy">Pago Mensual Estimado:</span>
                              </div>
                              <span className="text-[20px] font-black text-navy font-mono">${((total - formData.downPayment) / formData.term * (1 + formData.rate/100)).toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
                           </div>
                        </motion.div>
                     )}

                     {step === 4 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                           <div className="space-y-4">
                              <h4 className="text-sm font-black text-navy uppercase tracking-tighter">Detalles del Proveedor</h4>
                              <div className="grid grid-cols-2 gap-4">
                                 <div className="space-y-1.5 col-span-2">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase">Agencia / Concecionaria</label>
                                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[14px] font-bold focus:ring-4 focus:ring-navy/5 outline-none">
                                       <option>Mercedes Benz Guadalajara (Vallarta)</option>
                                       <option>Euro Camiones Monterrey</option>
                                       <option>Daimler México Corporativo</option>
                                    </select>
                                 </div>
                                 <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase">Vigencia Cotización</label>
                                    <input type="date" defaultValue="2026-05-15" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-[14px] font-bold focus:ring-4 focus:ring-navy/5 outline-none" />
                                 </div>
                                 <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-gray-400 uppercase">Prioridad Operativa</label>
                                    <div className="flex gap-2">
                                       <button className="flex-1 py-3 bg-gray-100 rounded-xl text-[11px] font-black uppercase text-gray-400">Normal</button>
                                       <button className="flex-1 py-3 bg-red text-white rounded-xl text-[11px] font-black uppercase shadow-lg shadow-red/20">Urgente</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="p-6 bg-navy text-white rounded-[24px] relative overflow-hidden">
                              <ShieldCheck className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5" />
                              <div className="relative z-10">
                                 <h5 className="text-[13px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-teal-mid" /> Todo listo
                                 </h5>
                                 <p className="text-[11px] text-white/60 leading-tight">Al finalizar, esta cotización se enviará automáticamente al departamento de Finanzas para su revisión y posible asignación de crédito.</p>
                              </div>
                           </div>
                        </motion.div>
                     )}
                  </div>

                  <div className="px-10 py-6 border-t border-gray-100 bg-gray-50/50 flex justify-between gap-4">
                    <button 
                      onClick={() => step > 1 && setStep(step - 1)}
                      disabled={step === 1}
                      className="px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-[13px] font-bold text-gray-500 hover:text-navy disabled:opacity-0 transition-all flex items-center gap-2"
                    >
                      <ChevronLeft className="w-4 h-4" /> Anterior
                    </button>
                    <button 
                      onClick={() => {
                        if (step < 4) setStep(step + 1);
                        else setIsNewQuote(false);
                      }}
                      className="px-8 py-2.5 bg-navy text-white rounded-xl text-[13px] font-bold hover:bg-navy-mid transition-all shadow-xl shadow-navy/20 flex items-center gap-2"
                    >
                      {step === 4 ? "Enviar a Revisión" : "Siguiente Paso"} <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-head text-sm font-bold text-navy">Cotización #COT-2026-004 — Bus Mercedes 2026</h3>
          <span className="px-3 py-1 bg-amber-light text-amber text-[10px] font-bold uppercase tracking-widest rounded-full">En revisión Finanzas</span>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-light/30 border border-green/10 rounded-lg p-5 text-center">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Modelo anterior (2024)</p>
              <div className="text-2xl font-black text-green font-head">$2,180,000</div>
              <p className="text-[11px] text-gray-500 mt-1">Mercedes Tourismo 2024</p>
            </div>
            <div className="bg-navy-light border border-navy/10 rounded-lg p-5 text-center">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Cotización nueva (2026)</p>
              <div className="text-2xl font-black text-navy font-head">$2,460,000</div>
              <p className="text-[11px] text-gray-500 mt-1">Mercedes Tourismo 2026</p>
            </div>
            <div className="bg-amber-light border-2 border-amber rounded-lg p-5 text-center">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">Diferencia ΔΔ</p>
              <div className="text-2xl font-black text-amber font-head">+$280,000</div>
              <p className="text-[11px] text-gray-500 mt-1">↑ 12.8% vs modelo anterior</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-100">
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold text-navy uppercase tracking-widest">Detalles de la cotización</h4>
              <div className="space-y-3">
                {[
                  { label: "Proveedor", value: "Daimler México SA" },
                  { label: "Cantidad de unidades", value: "3 unidades" },
                  { label: "Total operación", value: "$7,380,000", mono: true, bold: true, color: "navy" },
                  { label: "Vigencia cotización", value: "15 May 2026" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[13px]">
                    <span className="text-gray-500">{item.label}</span>
                    <span className={cn(
                      item.bold ? "font-bold" : "font-medium",
                      item.mono ? "font-mono" : "",
                      item.color === "navy" ? "text-navy" : "text-gray-900"
                    )}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] font-bold text-navy uppercase tracking-widest">Flujo de aprobación</h4>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-md flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center text-white font-bold text-xs">AL</div>
                  <div className="flex-1">
                    <strong className="text-[12px] font-bold text-gray-900 block">Ana López</strong>
                    <span className="text-[10px] text-gray-500 block">Finanzas</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-amber block">Pendiente</span>
                    <button className="mt-1 px-2 py-0.5 bg-amber text-navy text-[9px] font-bold rounded">Aprobar</button>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-md flex items-center gap-3 opacity-60">
                  <div className="w-9 h-9 rounded-full bg-purple flex items-center justify-center text-white font-bold text-xs">MG</div>
                  <div className="flex-1">
                    <strong className="text-[12px] font-bold text-gray-900 block">Mónica García</strong>
                    <span className="text-[10px] text-gray-500 block">Jurídico</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block">Esperando</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

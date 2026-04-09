/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Search, Download, Calendar, Building2, MoreVertical, X, CreditCard, FileCheck, AlertCircle, CheckCircle2, FileText, Upload } from "lucide-react";
import { cn } from "@/src/lib/utils";

export const Solicitudes = () => {
  const [isNew, setIsNew] = useState(false);
  const [step, setStep] = useState(1);

  if (isNew) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Nueva Solicitud de Egreso</h1>
            <p className="text-[13px] text-gray-500 mt-1">Complete todos los campos obligatorios antes de enviar</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setIsNew(false)} className="px-4 py-2 bg-white border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              ← Cancelar
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Guardar borrador
            </button>
            <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm">
              Enviar a aprobación →
            </button>
          </div>
        </div>

        {/* Step Flow */}
        <div className="flex items-center gap-0 mb-8 max-w-3xl mx-auto">
          <div className={cn("flex items-center gap-2", step >= 1 ? "text-teal" : "text-gray-400")}>
            <div className={cn("w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold", step >= 1 ? "bg-teal text-white" : "bg-gray-200 text-gray-500")}>1</div>
            <span className={cn("text-[12px] font-bold", step === 1 ? "text-navy" : "")}>Datos generales</span>
          </div>
          <div className={cn("flex-1 h-[2px] mx-4", step > 1 ? "bg-teal" : "bg-gray-200")} />
          <div className={cn("flex items-center gap-2", step >= 2 ? "text-teal" : "text-gray-400")}>
            <div className={cn("w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold", step >= 2 ? "bg-teal text-white" : "bg-gray-200 text-gray-500")}>2</div>
            <span className={cn("text-[12px] font-bold", step === 2 ? "text-navy" : "")}>Comprobantes</span>
          </div>
          <div className={cn("flex-1 h-[2px] mx-4", step > 2 ? "bg-teal" : "bg-gray-200")} />
          <div className={cn("flex items-center gap-2", step >= 3 ? "text-teal" : "text-gray-400")}>
            <div className={cn("w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold", step >= 3 ? "bg-teal text-white" : "bg-gray-200 text-gray-500")}>3</div>
            <span className={cn("text-[12px] font-bold", step === 3 ? "text-navy" : "")}>Revisión y envío</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="font-head text-sm font-bold text-navy">Información del pago</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">Empresa <span className="text-red">*</span></label>
                    <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                      <option>Bus Men México</option>
                      <option>Pitbus</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">Proveedor <span className="text-red">*</span></label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                      <input type="text" placeholder="Buscar por nombre o RFC..." className="w-full bg-white border border-gray-300 rounded-md pl-9 pr-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" defaultValue="Taller Mecánico Ríos SA de CV" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">RFC (automático)</label>
                    <input type="text" readOnly className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-[13px] text-gray-500 font-mono" value="TMR980415KL9" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">CLABE destino</label>
                    <input type="text" readOnly className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-[13px] text-gray-500 font-mono" value="012 580 0155 5566 7788 9" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">Tipo de gasto <span className="text-red">*</span></label>
                    <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                      <option>Refacciones y taller</option>
                      <option>Telefonía</option>
                      <option>Combustible</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">Método de pago <span className="text-red">*</span></label>
                    <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                      <option>Transferencia</option>
                      <option>Cheque</option>
                      <option>Efectivo</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">Concepto del pago <span className="text-red">*</span></label>
                    <textarea rows={3} placeholder="Describe detalladamente el servicio o bien pagado..." className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none resize-none" defaultValue="Reparación de motor y frenos preventivos en unidad B1828 — Trabajo realizado del 28 al 31 de marzo 2026" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">Subtotal <span className="text-red">*</span></label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                      <input type="number" className="w-full bg-white border border-gray-300 rounded-md pl-7 pr-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" defaultValue="15862.07" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">IVA aplicable <span className="text-red">*</span></label>
                    <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                      <option>16%</option>
                      <option>8%</option>
                      <option>0% — Exento</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">Total a pagar</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-navy font-bold">$</span>
                      <input type="number" readOnly className="w-full bg-navy-light border border-navy/10 rounded-md pl-7 pr-3 py-2 text-[15px] font-mono font-bold text-navy outline-none" value="18400.00" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="font-head text-sm font-bold text-navy">Comprobantes adjuntos <span className="text-red">*</span></h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="p-3 bg-amber-light border border-amber/20 rounded-md flex gap-3">
                  <AlertCircle className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <strong className="text-[12px] font-bold text-amber">Obligatorio</strong>
                    <span className="text-[11px] text-amber/80">El pago no puede aprobarse sin al menos 1 comprobante adjunto.</span>
                  </div>
                </div>
                
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-navy hover:bg-navy-light transition-all cursor-pointer group">
                  <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2 group-hover:text-navy transition-colors" />
                  <p className="text-[13px] font-bold text-gray-700">Arrastra tus archivos aquí</p>
                  <p className="text-[11px] text-gray-400 mt-1">PDF · XML · JPG · PNG — máx 10 MB c/u</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 bg-gray-50 border border-gray-200 rounded-md">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-[12px] font-medium text-gray-700 flex-1 truncate">factura_taller_rios_mar26.xml</span>
                    <span className="px-1.5 py-0.5 bg-teal-light text-teal text-[9px] font-bold rounded">XML</span>
                    <button className="p-1 text-gray-400 hover:text-red transition-colors"><X className="w-3.5 h-3.5" /></button>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-gray-50 border border-gray-200 rounded-md">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-[12px] font-medium text-gray-700 flex-1 truncate">factura_taller_rios_mar26.pdf</span>
                    <span className="px-1.5 py-0.5 bg-red-light text-red text-[9px] font-bold rounded">PDF</span>
                    <button className="p-1 text-gray-400 hover:text-red transition-colors"><X className="w-3.5 h-3.5" /></button>
                  </div>
                </div>

                <div className="p-3 bg-green-light border border-green/20 rounded-md flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <strong className="text-[12px] font-bold text-green">CFDI Validado en SAT</strong>
                    <span className="text-[11px] text-green/80">UUID: 5FA2E-8B31C... · Vigente</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="font-head text-sm font-bold text-navy">Resumen del pago</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between text-[13px]">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-mono font-bold text-navy">$15,862.07</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-gray-500">IVA (16%)</span>
                  <span className="font-mono font-bold text-navy">$2,537.93</span>
                </div>
                <div className="pt-4 border-t-2 border-navy flex justify-between items-end">
                  <span className="text-[14px] font-bold text-navy uppercase tracking-widest">Total</span>
                  <span className="text-[20px] font-mono font-black text-navy">$18,400.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Solicitudes de Egreso</h1>
          <p className="text-[13px] text-gray-500 mt-1">Gestión y aprobación de pagos a proveedores</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 bg-white border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" /> Exportar
          </button>
          <button onClick={() => setIsNew(true)} className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" /> Nueva solicitud
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["Todas", "Pendientes", "Aprobadas", "Pagadas", "Rechazadas", "Sin comprobante"].map((pill, i) => (
          <button key={pill} className={cn(
            "px-4 py-1.5 rounded-full text-[12px] font-bold transition-all border",
            i === 0 ? "bg-navy text-white border-navy" : "bg-white text-gray-500 border-gray-300 hover:border-navy hover:text-navy"
          )}>
            {pill} <span className="ml-1 opacity-50 font-medium">{[24, 8, 6, 7, 2, 3][i]}</span>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Folio</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Proveedor</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-right">Total</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center">Estatus</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-500 uppercase tracking-wider text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { folio: "SOL-2026-00312", vendor: "Taller Mecánico Ríos", type: "Refacc.", total: "$18,400", status: "Pendiente", color: "amber" },
                { folio: "SOL-2026-00311", vendor: "Telcel Empresarial", type: "Telefonía", total: "$6,240", status: "Pendiente", color: "amber" },
                { folio: "SOL-2026-00308", vendor: "Refaccionaria La Unión", type: "Almacén", total: "$32,000", status: "Sin doc.", color: "red" },
                { folio: "SOL-2026-00305", vendor: "IMSS", type: "IMSS", total: "$148,200", status: "Pagada", color: "green" },
                { folio: "SOL-2026-00301", vendor: "Combustibles del Norte", type: "Diesel", total: "$84,500", status: "Pagada", color: "green" },
                { folio: "SOL-2026-00298", vendor: "Grupo Seguridad Azteca", type: "Vigilancia", total: "$28,000", status: "Rechazada", color: "red" },
              ].map((row) => (
                <tr key={row.folio} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 font-mono text-[12px] text-navy font-bold">{row.folio}</td>
                  <td className="px-6 py-4 text-[13px] font-bold text-gray-900">{row.vendor}</td>
                  <td className="px-6 py-4"><span className="px-2 py-0.5 bg-navy-light text-navy text-[11px] font-bold rounded uppercase tracking-wider">{row.type}</span></td>
                  <td className="px-6 py-4 text-[13px] font-mono font-black text-navy text-right">{row.total}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn(
                      "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-widest",
                      row.color === "amber" ? "bg-amber-light text-[#8a5a00]" :
                      row.color === "green" ? "bg-green-light text-green" : "bg-red-light text-red"
                    )}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="px-3 py-1 bg-white border border-gray-300 rounded text-[11px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">Ver</button>
                      <button className="p-1.5 text-gray-400 hover:text-gray-600"><MoreVertical className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Mostrando 6 de 24 registros</span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-1.5 bg-white border border-gray-300 rounded-md text-[11px] font-bold text-gray-400 cursor-not-allowed" disabled>← Anterior</button>
            <button className="px-4 py-1.5 bg-white border border-gray-300 rounded-md text-[11px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">Siguiente →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

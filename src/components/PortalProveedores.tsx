/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  DollarSign, 
  Download, 
  History, 
  Search,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Calendar,
  X
} from "lucide-react";
import { cn } from "@/src/lib/utils";

export const PortalProveedores = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{name: string, status: string, date: string}[]>([]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFile = {
        name: e.dataTransfer.files[0].name,
        status: "En validación",
        date: new Date().toLocaleDateString()
      };
      setUploadedFiles(prev => [newFile, ...prev]);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 bg-amber text-navy text-[10px] font-bold uppercase rounded">Visión del Proveedor</span>
            <span className="text-gray-400 text-xs">Pit Path · Portal Externo</span>
          </div>
          <h1 className="font-head text-3xl font-black text-navy leading-tight">Panel de Autogestión</h1>
          <p className="text-[14px] text-gray-500 mt-1">Refacciones del Norte SA de CV · RFC: RNO920318-A32</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Saldo por Cobrar</p>
            <p className="text-xl font-black text-teal font-head">$1,420,500.00</p>
          </div>
          <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center text-teal">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lado izquierdo: Carga de Facturas */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-8">
            <div className="mb-6">
              <h3 className="font-head text-lg font-bold text-navy flex items-center gap-2">
                <Upload className="w-5 h-5 text-navy" /> Carga Masiva de Facturas (CFDI)
              </h3>
              <p className="text-[13px] text-gray-500 mt-1">Sube tus archivos XML y PDF para iniciar el proceso de validación y pago.</p>
            </div>

            <div 
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={cn(
                "relative h-64 border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-8 transition-all",
                dragActive ? "border-navy bg-navy/5 scale-[1.01]" : "border-gray-200 bg-gray-50/50 hover:bg-gray-50"
              )}
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-gray-300 shadow-sm mb-4">
                <FileText className="w-10 h-10" />
              </div>
              <p className="text-[14px] font-bold text-navy text-center">Arrastra aquí tus archivos .xml y .pdf</p>
              <p className="text-[12px] text-gray-400 mt-1 text-center">O haz clic para explorar tus archivos locales</p>
              <button className="mt-6 px-6 py-2.5 bg-navy text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-navy-mid transition-all shadow-lg hover:shadow-navy/20">
                Seleccionar Archivos
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-teal-light/30 border border-teal/10 rounded-xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-teal shrink-0" />
                <div className="flex flex-col">
                  <strong className="text-[13px] font-bold text-teal">Validación SAT Integrada</strong>
                  <span className="text-[11px] text-teal/80">Verificamos el estatus del UUID en tiempo real antes de recibir el documento.</span>
                </div>
              </div>
              <div className="p-4 bg-navy-light border border-navy/10 rounded-xl flex items-start gap-3">
                <Clock className="w-5 h-5 text-navy shrink-0" />
                <div className="flex flex-col">
                  <strong className="text-[13px] font-bold text-navy">Trazabilidad Total</strong>
                  <span className="text-[11px] text-navy/70">Conoce exactamente en qué paso de la cadena de pago se encuentra tu factura.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-head text-sm font-bold text-navy uppercase tracking-widest">Cargas Recientes</h3>
              <button className="text-[11px] font-bold text-navy hover:underline">Ver Historial Completo</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 text-center">
                    <th className="px-6 py-4 text-left">Documento</th>
                    <th className="px-6 py-4">Fecha Carga</th>
                    <th className="px-6 py-4">Estatus Validación</th>
                    <th className="px-6 py-4">UUID SAT</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: "FACTURA_B928.zip", date: "Hoy, 11:24 AM", status: "Validado", color: "green", uuid: "4B2A9..." },
                    { name: "INV_NORTE_882.pdf", date: "Ayer, 16:45 PM", status: "Error Estructura", color: "red", uuid: "---" },
                    { name: "COMP_PAGO_772.xml", date: "04 Abr 2026", status: "Pendiente", color: "amber", uuid: "8F1E3..." },
                  ].map((doc, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3 text-center">
                          <FileText className="w-5 h-5 text-gray-400" />
                          <span className="text-[13px] font-medium text-navy">{doc.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-[12px] text-gray-500">{doc.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center">
                          <span className={cn(
                            "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest",
                            doc.color === "green" ? "bg-green/10 text-green" : 
                            doc.color === "red" ? "bg-red/10 text-red" : "bg-amber/10 text-amber"
                          )}>{doc.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center font-mono text-[11px] text-gray-400">{doc.uuid}</td>
                      <td className="px-6 py-4 text-center">
                         <button className="p-1.5 text-gray-400 hover:text-navy transition-colors">
                            <X className="w-4 h-4" />
                         </button>
                      </td>
                    </tr>
                  ))}
                  {uploadedFiles.map((doc, i) => (
                    <tr key={`new-${i}`} className="bg-navy-light/20 hover:bg-navy-light/40 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3 text-center">
                          <FileText className="w-5 h-5 text-navy" />
                          <span className="text-[13px] font-bold text-navy">{doc.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-[12px] text-navy/70">Recién cargado</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center">
                          <span className="px-2.5 py-0.5 rounded-full bg-navy text-white text-[10px] font-bold uppercase tracking-widest animate-pulse">Procesando...</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center font-mono text-[11px] text-navy/40">...</td>
                      <td className="px-6 py-4 text-center"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Estatus de Pagos */}
        <div className="space-y-6">
          <div className="bg-navy rounded-2xl p-6 text-white shadow-xl shadow-navy/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-4">Próximo Pago Programado</h4>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-black font-head">$284,500.00</span>
              <span className="text-xs text-white/60">MXN</span>
            </div>
            <div className="flex items-center gap-2 text-amber text-[13px] font-bold mb-6">
              <Calendar className="w-4 h-4" /> 15 Abr 2026
            </div>
            <button className="w-full py-3 bg-white text-navy font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              Consultar Recibo <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="font-head text-sm font-bold text-navy uppercase tracking-widest">Estatus de Mis Facturas</h3>
            </div>
            <div className="p-6 space-y-6">
              {[
                { amount: "$124,000", id: "F-1029", status: "En Tesorería", date: "Pago: 22 Abr", progress: 80, color: "green" },
                { amount: "$56,500", id: "F-1033", status: "Autorización Gerencia", date: "Est. 18 Abr", progress: 60, color: "teal" },
                { amount: "$12,400", id: "F-1038", status: "Validación CFDI", date: "Pendiente", progress: 20, color: "amber" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div>
                      <strong className="text-[14px] font-black text-navy">{item.amount}</strong>
                      <span className="text-[11px] text-gray-400 block">Folio: {item.id}</span>
                    </div>
                    <div className="text-right">
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        item.color === "green" ? "text-green" : 
                        item.color === "teal" ? "text-teal" : "text-amber"
                      )}>{item.status}</span>
                      <span className="text-[11px] text-gray-500 block">{item.date}</span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full transition-all duration-1000", 
                      item.color === "green" ? "bg-green" : 
                      item.color === "teal" ? "bg-teal" : "bg-amber"
                    )} style={{ width: `${item.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-gray-50 text-center">
               <button className="text-[12px] font-bold text-navy flex items-center gap-2 mx-auto hover:gap-3 transition-all">
                  Descargar Estado de Cuenta <FileText className="w-4 h-4" />
               </button>
            </div>
          </div>

          <div className="bg-teal-mid rounded-2xl p-6 text-white">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                   <Building2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-[14px] font-bold">Ayuda y Soporte</h4>
             </div>
             <p className="text-[12px] text-white/80 mb-6">¿Tienes dudas sobre una factura rechazada o un pago no programado? Contacta directamente al analista.</p>
             <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-bold transition-all">
                Abrir Chat de Tesorería
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

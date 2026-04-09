/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, Clock, ChevronRight, AlertCircle, FileText } from "lucide-react";
import { cn } from "@/src/lib/utils";

const VALIDATIONS = [
  { id: 1, label: "Amarre IVA acreditable vs proveedores", status: "done", user: "Iván R.", date: "29 Mar" },
  { id: 2, label: "ISR e IVA retenidos", status: "done", user: "Iván R.", date: "29 Mar" },
  { id: 3, label: "Base exenta y gravada", status: "done", user: "Iván R.", date: "30 Mar" },
  { id: 4, label: "Conciliaciones bancarias", status: "done", user: "Iván R.", date: "30 Mar" },
  { id: 5, label: "Comparación ISR/IVA retenido vs facturación", status: "done", user: "Iván R.", date: "31 Mar" },
  { id: 6, label: "Depreciaciones mensuales", status: "done", user: "Iván R.", date: "31 Mar" },
  { id: 7, label: "IVA acreditable vs facturación", status: "done", user: "Iván R.", date: "01 Abr" },
  { id: 8, label: "Revisión de traspasos entre cuentas", status: "pending", isCritical: true },
  { id: 9, label: "Pagos erróneos entre intercompañías", status: "pending" },
  { id: 10, label: "Facturas canceladas (emitidas y recibidas)", status: "pending" },
  { id: 11, label: "Facturación ingresos vs contabilidad", status: "pending" },
  { id: 12, label: "Timbrados nómina vs captura contabilidad", status: "pending" },
  { id: 13, label: "IVA causado vs clientes e ingresos bancarios", status: "pending" },
];

export const CierreMensual = () => {
  const progress = 7;
  const total = 13;
  const percentage = Math.round((progress / total) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Cierre Mensual — Abril 2026</h1>
          <p className="text-[13px] text-gray-500 mt-1">13 validaciones obligatorias antes de cerrar el periodo</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Exportar reporte
          </button>
          <button disabled className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold opacity-50 cursor-not-allowed shadow-sm">
            Cerrar periodo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
        <div className="bg-white p-5 rounded-[10px] border border-gray-200 shadow-sm relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-teal">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.06em] mb-2">Validaciones completadas</div>
          <div className="font-head text-[26px] font-extrabold text-teal leading-none">{progress}</div>
          <div className="text-[11px] mt-1.5 text-gray-400">de {total} totales</div>
        </div>
        <div className="bg-white p-5 rounded-[10px] border border-gray-200 shadow-sm relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-amber">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.06em] mb-2">Pendientes</div>
          <div className="font-head text-[26px] font-extrabold text-amber leading-none">{total - progress}</div>
          <div className="text-[11px] mt-1.5 text-gray-400">Requieren revisión</div>
        </div>
        <div className="bg-white p-5 rounded-[10px] border border-gray-200 shadow-sm relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-navy">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.06em] mb-2">Progreso</div>
          <div className="font-head text-[26px] font-extrabold text-navy leading-none">{percentage}%</div>
          <div className="text-[11px] mt-1.5 text-gray-400">Estimado cierre: 3 días</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-head text-sm font-bold text-navy">Checklist de validaciones</h3>
              <div className="flex items-center gap-3">
                <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal transition-all duration-500" style={{ width: `${percentage}%` }} />
                </div>
                <span className="text-[11px] font-bold text-gray-500">{progress}/{total}</span>
              </div>
            </div>
            <div className="p-2">
              <div className="divide-y divide-gray-50">
                {VALIDATIONS.map((v) => (
                  <div key={v.id} className={cn(
                    "flex items-center justify-between p-3 rounded-md transition-all group",
                    v.isCritical && v.status === "pending" ? "bg-amber-light/50" : "hover:bg-gray-50"
                  )}>
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center transition-all",
                        v.status === "done" ? "bg-teal border-teal text-white" : "border-gray-300 bg-white"
                      )}>
                        {v.status === "done" && <span className="text-[10px] font-bold">✓</span>}
                      </div>
                      <div>
                        <p className={cn(
                          "text-[13px] transition-all",
                          v.status === "done" ? "text-gray-400 line-through" : "text-gray-700 font-medium"
                        )}>
                          {v.id}. {v.label}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {v.status === "done" ? (
                        <span className="text-[11px] text-gray-400 font-medium">{v.user} · {v.date}</span>
                      ) : (
                        <button className={cn(
                          "px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wider transition-all",
                          v.isCritical ? "bg-amber text-navy" : "bg-white border border-gray-300 text-gray-500 hover:border-navy hover:text-navy"
                        )}>
                          Revisar
                        </button>
                      )}
                      <ChevronRight className="w-4 h-4 text-gray-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy">Resumen del periodo</h3>
            </div>
            <div className="p-5 space-y-4">
              <div className="space-y-3">
                {[
                  { label: "Empresa", value: "Bus Men México" },
                  { label: "Periodo", value: "Abril 2026" },
                  { label: "Total pólizas", value: "47" },
                  { label: "Total egresos", value: "$1,420,580", mono: true },
                  { label: "Total ingresos", value: "$1,680,000", mono: true, color: "text-green" },
                  { label: "CFDI pendientes", value: "14", color: "text-amber" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-[13px]">
                    <span className="text-gray-500">{item.label}</span>
                    <span className={cn("font-bold", item.mono && "font-mono", item.color || "text-navy")}>{item.value}</span>
                  </div>
                ))}
              </div>
              <hr className="border-gray-100" />
              <div className="p-3 bg-amber-light border border-[#f5d47a] rounded-md flex gap-3">
                <AlertCircle className="w-4 h-4 text-[#7a4a00] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <strong className="text-[12px] font-bold text-[#7a4a00]">Pendiente de cierre</strong>
                  <span className="text-[11px] text-[#7a4a00]/80">Faltan 6 validaciones para habilitar el cierre definitivo.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

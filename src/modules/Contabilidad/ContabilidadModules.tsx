/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BookOpen, 
  FileSearch, 
  Search, 
  Plus, 
  Download, 
  MoreVertical,
  Calendar,
  Building2,
  User,
  ArrowUpRight,
  Clock,
  AlertCircle,
  FileText,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Trash2,
  RefreshCw
} from "lucide-react";
import { cn } from "@/src/lib/utils";

// --- Pólizas ---
export const Polizas = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Captura de Pólizas</h1>
          <p className="text-[13px] text-gray-500 mt-1">Registro contable de diario, ingresos y egresos — balance obligatorio</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" /> Nueva póliza
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy">Datos generales</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Tipo de póliza <span className="text-red">*</span></label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>Egresos</option>
                  <option>Ingresos</option>
                  <option>Diario</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Fecha <span className="text-red">*</span></label>
                <input type="date" defaultValue="2026-04-06" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Concepto general <span className="text-red">*</span></label>
                <input type="text" placeholder="Ej. Pago de nómina administrativa 1ra quincena Abril" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Moneda</label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>MXN</option>
                  <option>USD</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Tipo de cambio</label>
                <input type="number" readOnly value={1.00} className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-[13px] text-gray-500 outline-none" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-head text-sm font-bold text-navy">Partidas contables</h3>
              <button className="text-[12px] font-bold text-navy hover:underline flex items-center gap-1">
                <Plus className="w-3 h-3" /> Agregar partida
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3">Cuenta</th>
                    <th className="px-6 py-3">Concepto</th>
                    <th className="px-6 py-3 text-right">Cargo</th>
                    <th className="px-6 py-3 text-right">Abono</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { account: "601-01-001 · Sueldos y Salarios", concept: "Nómina Carlos M.", cargo: "$12,450.00", abono: "$0.00" },
                    { account: "102-01-001 · Bancos Nacionales", concept: "Pago Quincena", cargo: "$0.00", abono: "$12,450.00" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-mono font-bold text-navy">{row.account}</td>
                      <td className="px-6 py-4 text-gray-500">{row.concept}</td>
                      <td className="px-6 py-4 text-right font-mono font-bold text-navy">{row.cargo}</td>
                      <td className="px-6 py-4 text-right font-mono font-bold text-navy">{row.abono}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 text-gray-400 hover:text-red transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
              <p className="text-[11px] text-gray-400">2 partidas registradas</p>
              <div className="flex gap-4">
                <div className="text-right">
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Total Cargos</p>
                  <p className="text-[14px] font-mono font-black text-navy">$12,450.00</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Total Abonos</p>
                  <p className="text-[14px] font-mono font-black text-navy">$12,450.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy">Resumen de póliza</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-500">Total Cargos</span>
                  <span className="text-[14px] font-mono font-bold text-navy">$12,450.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] text-gray-500">Total Abonos</span>
                  <span className="text-[14px] font-mono font-bold text-navy">$12,450.00</span>
                </div>
                <hr className="border-gray-100" />
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-bold text-gray-700">Diferencia</span>
                  <span className="text-[16px] font-mono font-black text-teal">$0.00</span>
                </div>
              </div>
              <div className="pt-4">
                <div className="p-3 bg-teal-light border border-teal/20 rounded-md flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal" />
                  <div>
                    <strong className="text-[12px] font-bold text-teal">Balance Cuadrado</strong>
                    <p className="text-[10px] text-teal/80">La póliza puede ser guardada</p>
                  </div>
                </div>
              </div>
              <button className="w-full py-3 bg-navy text-white rounded-md text-[14px] font-bold hover:bg-navy-mid transition-all shadow-sm">
                Guardar póliza ↗
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="font-head text-sm font-bold text-navy">Asociar CFDI</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Buscar por UUID o RFC..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-[13px] outline-none focus:ring-2 focus:ring-navy/10" />
              </div>
              <div className="p-3 border border-dashed border-gray-300 rounded-md text-center">
                <p className="text-[12px] text-gray-400">O arrastra el XML aquí para asociar automáticamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- CFDI / SAT ---
export const CFDI = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Gestión de CFDI / SAT</h1>
          <p className="text-[13px] text-gray-500 mt-1">Sincronización directa con el repositorio del SAT</p>
        </div>
        <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2">
          <RefreshCw className="w-4 h-4" /> Sincronizar SAT
        </button>
      </div>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-head text-sm font-bold text-navy">Facturas del periodo</h3>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input type="text" placeholder="Filtrar facturas..." className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-navy/10 w-64" />
            </div>
            <button className="p-1.5 text-gray-400 hover:text-navy transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px]">
            <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3">UUID</th>
                <th className="px-6 py-3">Emisor / Receptor</th>
                <th className="px-6 py-3">Fecha</th>
                <th className="px-6 py-3 text-right">Total</th>
                <th className="px-6 py-3 text-center">Estatus SAT</th>
                <th className="px-6 py-3 text-center">Contabilizado</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { uuid: "4B2A91C2-...", name: "Gasolineras Plus SA", date: "01 Abr 2026", total: "$1,200.00", sat: "Vigente", done: true },
                { uuid: "8F1E33D4-...", name: "Refacciones del Norte", date: "02 Abr 2026", total: "$4,500.00", sat: "Vigente", done: false },
                { uuid: "2C5D00A1-...", name: "Papelería Express", date: "03 Abr 2026", total: "$350.00", sat: "Cancelado", done: false, isRed: true },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-navy font-bold">{row.uuid}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{row.name}</td>
                  <td className="px-6 py-4 text-gray-500">{row.date}</td>
                  <td className="px-6 py-4 text-right font-mono font-black text-navy">{row.total}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest",
                      row.isRed ? "bg-red-light text-red" : "bg-teal-light text-teal"
                    )}>{row.sat}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.done ? (
                      <CheckCircle2 className="w-4 h-4 text-teal mx-auto" />
                    ) : (
                      <div className="w-4 h-4 border-2 border-gray-200 rounded-full mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-navy hover:underline font-bold">Ver XML</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

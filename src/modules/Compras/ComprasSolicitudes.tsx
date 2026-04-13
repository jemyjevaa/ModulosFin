/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Plus, Search, ChevronDown, MoreVertical, Filter, Download } from "lucide-react";
import { cn } from "@/src/lib/utils";

export const ComprasSolicitudes = () => {
  const [search, setSearch] = useState("");

  const rows = [
    { no: "SC-0201", item: "Filtro aceite 5W-30", qty: "4", area: "Taller", date: "08/04/26", origin: "AUTO", status: "PENDIENTE", color: "red" },
    { no: "SC-0200", item: "Balatas traseras uni. 2", qty: "2", area: "Almacén", date: "08/04/26", origin: "AUTO", status: "PENDIENTE", color: "red" },
    { no: "SC-0199", item: "Banda de distribución", qty: "1", area: "Taller", date: "07/04/26", origin: "AUTO", status: "PENDIENTE", color: "red" },
    { no: "SC-0198", item: "Aceite hidráulico 1L", qty: "6", area: "Taller", date: "07/04/26", origin: "MANUAL", status: "EN PROCESO", color: "amber" },
    { no: "SC-0197", item: "Terminales de batería", qty: "10", area: "Almacén", date: "06/04/26", origin: "AUTO", status: "COMPLETADA", color: "teal" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Solicitudes de Compra</h1>
          <p className="text-[13px] text-gray-500 mt-1">Piezas con stock cero o requerimientos manuales</p>
        </div>
        <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2">
          <Plus className="w-4 h-4" /> Nueva Solicitud
        </button>
      </div>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
        {/* Filters bar */}
        <div className="p-4 border-b border-gray-100 flex flex-wrap items-center gap-4 bg-gray-50/30">
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-1.5 text-[12px] font-bold text-gray-700 outline-none focus:ring-2 focus:ring-navy/10 min-w-[140px]">
                <option>Todas las áreas</option>
                <option>Taller</option>
                <option>Almacén</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-1.5 text-[12px] font-bold text-gray-700 outline-none focus:ring-2 focus:ring-navy/10 min-w-[140px]">
                <option>Todos los estados</option>
                <option>Pendiente</option>
                <option>En proceso</option>
                <option>Completada</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar solicitud..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-md pl-9 pr-3 py-1.5 text-[12px] outline-none focus:ring-2 focus:ring-navy/10"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white border-b border-gray-100">
              <tr>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">No.</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ítem / Descripción</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Cant.</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Área</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fecha</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Origen</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Estado</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row) => (
                <tr key={row.no} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-[12px] font-mono font-bold text-navy">{row.no}</td>
                  <td className="px-6 py-4 text-[13px] font-bold text-navy">{row.item}</td>
                  <td className="px-6 py-4 text-[13px] font-mono font-black text-navy text-center">{row.qty}</td>
                  <td className="px-6 py-4 text-[12px] text-gray-500">{row.area}</td>
                  <td className="px-6 py-4 text-[12px] text-gray-400 font-mono">{row.date}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn(
                      "px-1.5 py-0.5 rounded text-[9px] font-bold tracking-tight",
                      row.origin === "AUTO" ? "bg-gray-100 text-gray-500" : "bg-blue-light text-blue"
                    )}>{row.origin}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest whitespace-nowrap",
                      row.color === "red" ? "bg-red-light text-red" : 
                      row.color === "amber" ? "bg-amber-light text-amber" : "bg-teal-light text-teal"
                    )}>{row.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[11px] font-bold text-navy hover:underline whitespace-nowrap">
                      {row.status === "COMPLETADA" ? "Ver ODC" : "Generar ODC"}
                    </button>
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

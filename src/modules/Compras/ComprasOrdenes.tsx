/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Plus, Search, Filter, Download, MoreVertical, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

export const ComprasOrdenes = () => {
  const [activeTab, setActiveTab] = useState("TODAS");
  const [search, setSearch] = useState("");

  const tabs = [
    { id: "TODAS", label: "TODAS" },
    { id: "PENDIENTES", label: "PENDIENTES", badge: 7 },
    { id: "ACTIVAS", label: "ACTIVAS" },
    { id: "FINALIZADAS", label: "FINALIZADAS" },
  ];

  const rows = [
    { no: "ODC-1042", vendor: "Refac. Zacatecas SA", item: "Filtro 5W-30", amount: "$4,200", company: "BUSMEN", date: "09/04/26", status: "PEND. AUTORIZACIÓN", color: "amber" },
    { no: "ODC-1041", vendor: "Distribuidora NW", item: "Banda distribución", amount: "$18,500", company: "PITBUS", date: "08/04/26", status: "PEND. AUTORIZACIÓN", color: "amber" },
    { no: "ODC-1039", vendor: "AutoPartes del Norte", item: "Balatas set completo", amount: "$7,300", company: "BUSMEN", date: "07/04/26", status: "AUTORIZADA", color: "teal" },
    { no: "ODC-1038", vendor: "Grupo Refacciones MX", item: "Aceite hidráulico", amount: "$2,100", company: "BUSMEN", date: "07/04/26", status: "ENVIADA PROV.", color: "navy" },
    { no: "ODC-1035", vendor: "Refac. Zacatecas SA", item: "Terminales batería", amount: "$890", company: "BUSMEN", date: "05/04/26", status: "FINALIZADA", color: "teal" },
    { no: "ODC-1030", vendor: "Llantas Express", item: "Llantas 225/65R17", amount: "$32,000", company: "PITBUS", date: "02/04/26", status: "PAGADA", color: "teal" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Órdenes de Compra</h1>
          <p className="text-[13px] text-gray-500 mt-1">Gestión y seguimiento de adquisiciones activas</p>
        </div>
        <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2">
          <Plus className="w-4 h-4" /> Nueva ODC
        </button>
      </div>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden flex flex-col">
        {/* Tabs Bar */}
        <div className="flex border-b border-gray-100 overflow-x-auto bg-white sticky top-0 z-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-4 text-[11px] font-black uppercase tracking-widest relative whitespace-nowrap transition-all",
                activeTab === tab.id 
                  ? "text-navy" 
                  : "text-gray-400 hover:text-navy/60"
              )}
            >
              <span className="flex items-center gap-2">
                {tab.label}
                {tab.badge && (
                  <span className={cn(
                    "px-1.5 py-0.5 rounded-full text-[9px] font-black",
                    activeTab === tab.id ? "bg-amber text-navy" : "bg-gray-100 text-gray-400"
                  )}>
                    {tab.badge}
                  </span>
                )}
              </span>
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-navy" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Filters/Actions bar */}
        <div className="p-4 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100">
          <div className="relative flex-1 min-w-[240px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar ODC, proveedor..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-md pl-9 pr-3 py-1.5 text-[12px] outline-none focus:ring-2 focus:ring-navy/10"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-navy hover:bg-gray-50 rounded-md transition-all border border-transparent hover:border-gray-200">
              <Filter className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-navy hover:bg-gray-50 rounded-md transition-all border border-transparent hover:border-gray-200">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">No. ODC</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Proveedor</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Pieza</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Monto</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Empresa</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Fecha</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Estado</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {rows.map((row) => (
                <tr key={row.no} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5 text-[12px] font-mono font-bold text-navy">{row.no}</td>
                  <td className="px-6 py-5 text-[13px] font-bold text-gray-700">{row.vendor}</td>
                  <td className="px-6 py-5 text-[13px] text-navy font-medium">{row.item}</td>
                  <td className="px-6 py-5 text-[13px] font-mono font-black text-navy">{row.amount}</td>
                  <td className="px-6 py-5 text-center">
                    <span className="text-[10px] font-black text-gray-400 bg-gray-50 px-2 py-0.5 rounded uppercase tracking-widest border border-gray-100">{row.company}</span>
                  </td>
                  <td className="px-6 py-5 text-center text-[12px] text-gray-400 font-mono">{row.date}</td>
                  <td className="px-6 py-5 text-center">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest whitespace-nowrap",
                      row.color === "amber" ? "bg-amber-light text-amber" : 
                      row.color === "navy" ? "bg-navy-light text-navy" : "bg-teal-light text-teal"
                    )}>{row.status}</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-1 text-gray-300 hover:text-navy transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
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

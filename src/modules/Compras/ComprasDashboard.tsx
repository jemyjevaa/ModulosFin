/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingCart, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp, 
  TrendingDown,
  Download,
  ArrowUpRight,
  MoreVertical
} from "lucide-react";
import { cn } from "@/src/lib/utils";

const StatCard = ({ title, value, change, icon: Icon, color, trend }: any) => (
  <div className="bg-white p-6 rounded-[10px] border border-gray-200 shadow-sm relative overflow-hidden group hover:border-navy/20 transition-all">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{title}</p>
        <h3 className={cn("text-3xl font-mono font-black", color)}>{value}</h3>
      </div>
      <div className={cn("p-2.5 rounded-lg opacity-10 group-hover:opacity-20 transition-opacity", 
        color.includes("navy") ? "bg-navy" : 
        color.includes("amber") ? "bg-amber" : 
        color.includes("red") ? "bg-red" : "bg-teal")}>
        <Icon className={cn("w-5 h-5", color.replace("text-", "text-"))} />
      </div>
    </div>
    <div className="flex items-center gap-1.5">
      <div className={cn("flex items-center text-[11px] font-bold", 
        trend === "up" ? "text-green" : trend === "down" ? "text-red" : "text-gray-400")}>
        {trend === "up" ? <TrendingUp className="w-3 h-3" /> : trend === "down" ? <TrendingDown className="w-3 h-3" /> : null}
        <span className="ml-1">{change}</span>
      </div>
    </div>
  </div>
);

export const ComprasDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Dashboard de Compras</h1>
          <p className="text-[13px] text-gray-500 mt-1">Resumen del ciclo de adquisiciones y abastecimiento</p>
        </div>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-[13px] font-bold text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
          <Download className="w-4 h-4" /> Exportar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="ODC Activas" 
          value="24" 
          change="+3" 
          icon={ShoppingCart} 
          color="text-navy" 
          trend="up" 
        />
        <StatCard 
          title="Pendientes Autorizar" 
          value="7" 
          change="-2" 
          icon={Clock} 
          color="text-amber" 
          trend="down" 
        />
        <StatCard 
          title="Egresos por Validar" 
          value="3" 
          change="!" 
          icon={AlertCircle} 
          color="text-red" 
        />
        <StatCard 
          title="Pagadas Hoy" 
          value="12" 
          change="+5" 
          icon={CheckCircle2} 
          color="text-teal" 
          trend="up" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Solicitudes Pendientes */}
        <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h3 className="font-head text-sm font-bold text-navy">Solicitudes Pendientes</h3>
            <button className="text-[11px] font-bold text-navy hover:underline uppercase tracking-wider">Ver todas</button>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Ítem</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Área</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Antigüedad</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { item: "Filtro aceite 5W-30", area: "Taller", age: "32 H", color: "red" },
                  { item: "Balatas traseras", area: "Almacén", age: "25 H", color: "amber" },
                  { item: "Banda de distribución", area: "Taller", age: "18 H", color: "amber" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/80 transition-colors group">
                    <td className="px-6 py-4 text-[13px] font-bold text-navy">{row.item}</td>
                    <td className="px-6 py-4 text-[12px] text-gray-500">{row.area}</td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2 py-0.5 rounded text-[10px] font-bold",
                        row.color === "red" ? "bg-red-light text-red" : "bg-amber-light text-amber"
                      )}>{row.age}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-[11px] font-bold text-navy hover:text-navy-mid flex items-center justify-end gap-1 ml-auto group-hover:translate-x-1 transition-transform">
                        Generar ODC <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ODC por Autorizar */}
        <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h3 className="font-head text-sm font-bold text-navy">ODC por Autorizar</h3>
            <button className="text-[11px] font-bold text-navy hover:underline uppercase tracking-wider">Ver todas</button>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">No. ODC</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Proveedor</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Monto</th>
                  <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider text-right">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { id: "ODC-1042", vendor: "Refac. Zacatecas", amount: "$4,200", status: "PENDIENTE", color: "amber" },
                  { id: "ODC-1041", vendor: "Distribuidora NW", amount: "$18,500", status: "PENDIENTE", color: "amber" },
                  { id: "ODC-1039", vendor: "AutoPartes del Norte", amount: "$7,300", status: "AUTORIZADA", color: "teal" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4 text-[12px] font-mono font-bold text-navy">{row.id}</td>
                    <td className="px-6 py-4 text-[13px] font-medium text-gray-700">{row.vendor}</td>
                    <td className="px-6 py-4 text-[13px] font-mono font-black text-navy">{row.amount}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={cn(
                        "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest",
                        row.color === "amber" ? "bg-amber-light text-amber" : "bg-teal-light text-teal"
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
  );
};

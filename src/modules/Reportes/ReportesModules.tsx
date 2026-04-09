/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BarChart3, 
  PieChart as PieChartIcon, 
  Search, 
  Download, 
  MoreVertical,
  Calendar,
  Building2,
  User,
  ArrowUpRight,
  Clock,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Package,
  ArrowRight,
  Filter
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  Legend
} from "recharts";
import { cn } from "@/src/lib/utils";

const RENTABILIDAD_DATA = [
  { name: "Ene", ingresos: 4200000, egresos: 3100000, utilidad: 1100000 },
  { name: "Feb", ingresos: 4500000, egresos: 3250000, utilidad: 1250000 },
  { name: "Mar", ingresos: 4800000, egresos: 3400000, utilidad: 1400000 },
  { name: "Abr", ingresos: 5100000, egresos: 3600000, utilidad: 1500000 },
];

const COLORS = ["#0F2A4E", "#2D9B8A", "#F5A623", "#D0021B"];

// --- Rentabilidad ---
export const Rentabilidad = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Reporte de Rentabilidad</h1>
          <p className="text-[13px] text-gray-500 mt-1">Análisis de márgenes operativos por unidad y ruta</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 bg-white border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filtrar periodo
          </button>
          <button className="px-3 py-2 bg-white border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" /> Exportar PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Ingresos Totales", value: "$5,100,000", trend: "+12%", color: "navy" },
          { label: "Egresos Totales", value: "$3,600,000", trend: "+8%", color: "red" },
          { label: "Utilidad Bruta", value: "$1,500,000", trend: "+15%", color: "teal" },
          { label: "% Rentabilidad", value: "29.4%", trend: "+2.1%", color: "teal" },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-5 rounded-[10px] border border-gray-200 shadow-sm">
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">{kpi.label}</p>
            <div className="flex items-end justify-between">
              <span className={cn("text-2xl font-black font-head", kpi.color === "navy" ? "text-navy" : kpi.color === "red" ? "text-red" : "text-teal")}>{kpi.value}</span>
              <span className={cn("text-[11px] font-bold flex items-center gap-0.5", kpi.trend.startsWith('+') ? "text-green" : "text-red")}>
                {kpi.trend.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />} {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-[10px] border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-head text-sm font-bold text-navy">Ingresos vs Egresos vs Utilidad</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-navy" />
                <span className="text-[10px] font-bold text-gray-500 uppercase">Ingresos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red" />
                <span className="text-[10px] font-bold text-gray-500 uppercase">Egresos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-teal" />
                <span className="text-[10px] font-bold text-gray-500 uppercase">Utilidad</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={RENTABILIDAD_DATA}>
                <defs>
                  <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0F2A4E" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0F2A4E" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorUtilidad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2D9B8A" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2D9B8A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EAECF0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#98A2B3" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#98A2B3" }} tickFormatter={(val) => `$${val/1000000}M`} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #D0D5DD", boxShadow: "0 4px 12px rgba(16, 24, 40, .10)", fontSize: "12px" }}
                />
                <Area type="monotone" dataKey="ingresos" stroke="#0F2A4E" strokeWidth={3} fillOpacity={1} fill="url(#colorIngresos)" />
                <Area type="monotone" dataKey="egresos" stroke="#D0021B" strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
                <Area type="monotone" dataKey="utilidad" stroke="#2D9B8A" strokeWidth={3} fillOpacity={1} fill="url(#colorUtilidad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="font-head text-sm font-bold text-navy">Rentabilidad por unidad</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px]">
              <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-2">Unidad</th>
                  <th className="px-4 py-2 text-right">Ingresos</th>
                  <th className="px-4 py-2 text-right">Egresos</th>
                  <th className="px-4 py-2 text-right">% Rent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { id: "B1828", ing: "$142,500", egr: "$98,400", rent: "31%", color: "green" },
                  { id: "B2201", ing: "$128,000", egr: "$105,200", rent: "18%", color: "amber" },
                  { id: "C0045", ing: "$95,000", egr: "$62,000", rent: "35%", color: "green" },
                  { id: "C0046", ing: "$88,000", egr: "$72,500", rent: "17%", color: "amber" },
                  { id: "B1829", ing: "$115,000", egr: "$112,000", rent: "3%", color: "red" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-bold text-navy">{row.id}</td>
                    <td className="px-4 py-3 text-right font-mono">{row.ing}</td>
                    <td className="px-4 py-3 text-right font-mono text-red">{row.egr}</td>
                    <td className="px-4 py-3 text-right">
                      <span className={cn(
                        "font-black",
                        row.color === "green" ? "text-green" : row.color === "amber" ? "text-amber" : "text-red"
                      )}>{row.rent}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 text-center">
            <button className="text-[11px] font-bold text-navy hover:underline">Ver reporte detallado →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Almacenes ---
export const Almacenes = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Reporte de Almacenes</h1>
          <p className="text-[13px] text-gray-500 mt-1">Valorización de inventarios y trazabilidad de movimientos</p>
        </div>
        <button className="px-3 py-2 bg-white border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" /> Reporte valorizado
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-[10px] border border-gray-200 shadow-sm">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Stock Total (Artículos)</div>
          <div className="text-2xl font-black text-navy">1,452</div>
        </div>
        <div className="bg-white p-5 rounded-[10px] border border-gray-200 shadow-sm">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Movimientos (Mes)</div>
          <div className="text-2xl font-black text-teal">248</div>
        </div>
        <div className="bg-white p-5 rounded-[10px] border border-gray-200 shadow-sm">
          <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Valor Inventario</div>
          <div className="text-2xl font-black text-navy">$2,840,500.00</div>
        </div>
      </div>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-head text-sm font-bold text-navy">Movimientos de almacén</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
            <input type="text" placeholder="Buscar por artículo o folio..." className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-navy/10 w-64" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px]">
            <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3">Fecha</th>
                <th className="px-6 py-3">Tipo</th>
                <th className="px-6 py-3">Artículo</th>
                <th className="px-6 py-3">Almacén</th>
                <th className="px-6 py-3 text-right">Cantidad</th>
                <th className="px-6 py-3 text-right">Valor</th>
                <th className="px-6 py-3">Responsable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { date: "06 Abr 2026", type: "Salida", item: "Filtro Aceite MB", wh: "GDL Principal", qty: "2 pzas", val: "$1,450", user: "Juan P.", color: "red" },
                { date: "05 Abr 2026", type: "Entrada", item: "Aceite Sintético 5W30", wh: "GDL Principal", qty: "20 lts", val: "$4,800", user: "Ana L.", color: "green" },
                { date: "04 Abr 2026", type: "Salida", item: "Balatas Delanteras", wh: "MTY Taller", qty: "1 juego", val: "$2,200", user: "Pedro S.", color: "red" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-gray-500">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest",
                      row.color === "green" ? "bg-green-light text-green" : "bg-red-light text-red"
                    )}>{row.type}</span>
                  </td>
                  <td className="px-6 py-4 font-bold text-navy">{row.item}</td>
                  <td className="px-6 py-4 text-gray-500">{row.wh}</td>
                  <td className="px-6 py-4 text-right font-mono">{row.qty}</td>
                  <td className="px-6 py-4 text-right font-mono font-bold text-navy">{row.val}</td>
                  <td className="px-6 py-4 text-gray-500">{row.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

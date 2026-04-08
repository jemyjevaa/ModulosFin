/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  Clock, 
  AlertCircle, 
  FileText, 
  CheckCircle2, 
  MoreVertical,
  TrendingUp,
  TrendingDown,
  CreditCard,
  CheckSquare,
  Receipt,
  DollarSign,
  RefreshCw,
  ArrowRight,
  Calendar,
  User,
  Building2
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  Cell
} from "recharts";
import { cn } from "@/src/lib/utils";

const KPI_DATA = [
  { label: "Ingresos del Mes", value: "$5.1M", trend: "+12%", status: "navy", icon: TrendingUp },
  { label: "Egresos del Mes", value: "$3.6M", trend: "+8%", status: "red", icon: TrendingDown },
  { label: "Utilidad Neta", value: "$1.5M", trend: "+15%", status: "teal", icon: DollarSign },
  { label: "% Rentabilidad", value: "29.4%", trend: "+2.1%", status: "teal", icon: CheckSquare },
];

const CHART_DATA = [
  { name: "Sem 1", ingresos: 1200000, egresos: 850000 },
  { name: "Sem 2", ingresos: 1350000, egresos: 920000 },
  { name: "Sem 3", ingresos: 1100000, egresos: 980000 },
  { name: "Sem 4", ingresos: 1450000, egresos: 850000 },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Dashboard General</h1>
          <p className="text-[13px] text-gray-500 mt-1">Abril 2026 · Bus Men México · Consolidado de Operaciones</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-gray-400 font-medium">Actualizado hace 3 min</span>
          <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-[12px] font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
            <RefreshCw className="w-3 h-3" /> Actualizar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI_DATA.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-5 rounded-[10px] border border-gray-200 shadow-sm relative overflow-hidden group"
          >
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">{kpi.label}</div>
            <div className="flex items-end justify-between">
              <div className={cn("font-head text-[28px] font-black leading-none", kpi.status === "red" ? "text-red" : kpi.status === "teal" ? "text-teal" : "text-navy")}>
                {kpi.value}
              </div>
              <div className={cn("text-[11px] font-bold flex items-center gap-0.5", kpi.trend.startsWith('+') ? "text-green" : "text-red")}>
                {kpi.trend}
              </div>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-navy opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform">
              <kpi.icon className="w-10 h-10" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-head text-sm font-bold text-navy">Comparativa de Flujo Mensual</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase">
                  <div className="w-2.5 h-2.5 rounded bg-navy" /> Ingresos
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase">
                  <div className="w-2.5 h-2.5 rounded bg-red" /> Egresos
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CHART_DATA} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EAECF0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#98A2B3" }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#98A2B3" }} tickFormatter={(val) => `$${val/1000}k`} />
                    <Tooltip
                      cursor={{ fill: '#f9fafb' }}
                      contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #D0D5DD", boxShadow: "0 4px 12px rgba(16, 24, 40, .10)", fontSize: "12px" }}
                    />
                    <Bar dataKey="ingresos" fill="#0F2A4E" radius={[4, 4, 0, 0]} barSize={32} />
                    <Bar dataKey="egresos" fill="#D0021B" radius={[4, 4, 0, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-head text-sm font-bold text-navy">Próximos Pagos Programados</h3>
              <button className="text-[12px] font-bold text-navy hover:underline">Ver calendario →</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3">Fecha</th>
                    <th className="px-6 py-3">Proveedor / Concepto</th>
                    <th className="px-6 py-3 text-right">Monto</th>
                    <th className="px-6 py-3 text-center">Estatus</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { date: "08 Abr", vendor: "Seguros AXA", concept: "Póliza Flota B1828", amount: "$42,500.00", status: "Pendiente" },
                    { date: "10 Abr", vendor: "Mercedes Benz Financial", concept: "Mensualidad Unidad B2201", amount: "$115,000.00", status: "Programado" },
                    { date: "12 Abr", vendor: "Combustibles del Norte", concept: "Carga Semanal GDL", amount: "$88,400.00", status: "Pendiente" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-navy">{row.date}</td>
                      <td className="px-6 py-4">
                        <p className="font-bold text-gray-900">{row.vendor}</p>
                        <p className="text-[11px] text-gray-400">{row.concept}</p>
                      </td>
                      <td className="px-6 py-4 text-right font-mono font-bold text-navy">{row.amount}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest",
                          row.status === "Programado" ? "bg-teal-light text-teal" : "bg-amber-light text-amber"
                        )}>{row.status}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 text-gray-400 hover:text-navy transition-colors"><MoreVertical className="w-4 h-4" /></button>
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
              <h3 className="font-head text-sm font-bold text-navy">Actividad Reciente</h3>
            </div>
            <div className="p-6 space-y-6">
              {[
                { user: "Jessica V.", action: "aprobó solicitud", target: "SOL-2026-00312", time: "Hace 12 min", icon: CheckCircle2, color: "teal" },
                { user: "Iván R.", action: "capturó póliza", target: "EGR-2026-03-0045", time: "Hace 38 min", icon: FileText, color: "navy" },
                { user: "Carlos M.", action: "registró contrato", target: "CTR-2026-0012", time: "Hoy 09:15", icon: CreditCard, color: "amber" },
                { user: "Sistema", action: "descargó CFDI", target: "14 facturas", time: "Hoy 08:00", icon: Receipt, color: "purple" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 relative">
                  {i !== 3 && <div className="absolute left-[15px] top-[30px] bottom-[-30px] w-[2px] bg-gray-100" />}
                  <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10", 
                    item.color === "teal" ? "bg-teal-light text-teal" : 
                    item.color === "navy" ? "bg-navy-light text-navy" : 
                    item.color === "amber" ? "bg-amber-light text-amber" : "bg-purple-light text-purple"
                  )}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[13px] text-gray-700 leading-snug">
                      <span className="font-bold text-gray-900">{item.user}</span> {item.action} <span className="font-bold text-navy">{item.target}</span>
                    </p>
                    <span className="text-[11px] text-gray-400 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-center">
              <button className="text-[11px] font-bold text-navy hover:underline">Ver historial completo →</button>
            </div>
          </div>

          <div className="bg-navy rounded-[10px] p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-head text-lg font-bold mb-2">Cierre Mensual</h3>
              <p className="text-white/70 text-[12px] mb-6 leading-relaxed">Faltan 4 días para el cierre de Abril. Asegúrate de conciliar todos los CFDI.</p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[11px] font-bold mb-1">
                  <span>Progreso</span>
                  <span>75%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-teal w-3/4" />
                </div>
              </div>
              <button className="w-full py-2.5 bg-teal text-white rounded-md text-[12px] font-bold hover:bg-teal-mid transition-all">
                Ir a Cierre Mensual
              </button>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <Calendar className="w-32 h-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

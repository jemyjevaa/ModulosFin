/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Building2, 
  RefreshCw, 
  Link, 
  CheckCircle2, 
  MoreVertical, 
  ArrowUpRight, 
  Search,
  Zap,
  Plus
} from "lucide-react";
import { cn } from "@/src/lib/utils";

export const BancaDirecta = () => {
  const [autoMatch, setAutoMatch] = useState(true);

  const bankAccounts = [
    { name: "BBVA México", account: "*4410", balance: "$1,240,500.00", status: "CONECTADO", color: "blue", lastSync: "Hace 5 min" },
    { name: "Santander", account: "*8821", balance: "$450,200.00", status: "CONECTADO", color: "red", lastSync: "Hace 5 min" },
    { name: "Banamex", account: "*1102", balance: "$0.00", status: "DESCONECTADO", color: "blue-dark", lastSync: "Hace 5 min" },
  ];

  const pendingMatches = [
    { 
      movement: "SPEI RECIBIDO \u2013 CLIENTE ABC", 
      amount: "+$45,000.00", 
      suggestion: "Factura F-1022 (Cliente ABC)", 
      match: 98, 
      type: "income" 
    },
    { 
      movement: "PAGO PROVEEDOR \u2013 GASOLINERA", 
      amount: "-$3,200.00", 
      suggestion: "Solicitud SOL-0031 (Combustibles)", 
      match: 92, 
      type: "expense" 
    },
    { 
      movement: "COMISION BANCARIA", 
      amount: "-$150.00", 
      suggestion: "Gasto General (Comisiones)", 
      match: 85, 
      type: "expense" 
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
           <div className="w-12 h-12 bg-navy-light rounded-2xl flex items-center justify-center text-navy shadow-lg shadow-navy/5">
              <Building2 className="w-7 h-7" />
           </div>
           <div>
              <h1 className="font-head text-[26px] font-black text-navy leading-tight">Integración Bancaria Directa</h1>
              <p className="text-[13px] text-gray-500 mt-0.5 font-medium">Conciliación en tiempo real vía API (SPEI / CLABE)</p>
           </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-white border border-gray-200 text-navy text-[13px] font-bold rounded-xl hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm">
            <RefreshCw className="w-4 h-4" /> Sincronizar ahora
          </button>
          <button className="px-6 py-2.5 bg-navy text-white text-[13px] font-bold rounded-xl hover:bg-navy-mid transition-all shadow-xl shadow-navy/20 flex items-center gap-2">
            <Link className="w-4 h-4" /> Conectar Banco
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bankAccounts.map((acc, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[24px] border border-gray-100 shadow-xl shadow-navy/[0.03] overflow-hidden group"
          >
            <div className={cn(
              "h-1.5 w-full",
              acc.color === "blue" ? "bg-blue" : acc.color === "red" ? "bg-red" : "bg-navy"
            )} />
            <div className="p-8">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h3 className="text-[15px] font-black text-navy mb-0.5">{acc.name}</h3>
                  <span className="text-[11px] font-mono font-bold text-gray-400">{acc.account}</span>
                </div>
                <span className={cn(
                  "px-3 py-1 rounded-full text-[9px] font-black tracking-widest",
                  acc.status === "CONECTADO" ? "bg-green-light text-green" : "bg-red-light text-red"
                )}>{acc.status}</span>
              </div>
              
              <div className="mb-10">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 font-head">Saldo Disponible</p>
                <div className="text-[28px] font-black text-navy tracking-tight font-head">
                  {acc.balance}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <span className="text-[11px] text-gray-400 font-medium">Última sinc: {acc.lastSync}</span>
                <button className="text-[11px] font-black text-navy flex items-center gap-1 hover:gap-2 transition-all">
                   Ver movimientos <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-[32px] border border-gray-200 shadow-2xl shadow-navy/[0.04] overflow-hidden min-h-[500px]">
        <div className="px-10 py-8 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-head text-lg font-black text-navy tracking-tight flex items-center gap-3">
             Conciliación Automática <span className="text-gray-300 font-medium text-[15px] uppercase tracking-widest">(Pendientes)</span>
          </h3>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest font-head">Auto-match habilitado</span>
              <button 
                onClick={() => setAutoMatch(!autoMatch)}
                className={cn(
                  "w-12 h-6 rounded-full p-1 transition-all duration-300 shadow-inner",
                  autoMatch ? "bg-teal" : "bg-gray-200"
                )}
              >
                <div className={cn(
                  "w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300",
                  autoMatch ? "translate-x-6" : "translate-x-0"
                )} />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/40 text-[11px] font-black text-gray-400 uppercase tracking-[0.14em] border-b border-gray-100 font-head">
                <th className="px-10 py-6">Movimiento Bancario</th>
                <th className="px-6 py-6">Monto</th>
                <th className="px-6 py-6">Sugerencia ERP</th>
                <th className="px-6 py-6">Coincidencia</th>
                <th className="px-10 py-6 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pendingMatches.map((m, i) => (
                <tr key={i} className="hover:bg-gray-50/60 transition-all group">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-navy shadow-sm group-hover:scale-110 transition-transform">
                          <RefreshCw className="w-5 h-5 text-gray-300 group-hover:text-navy transition-colors" />
                       </div>
                       <span className="text-[14px] font-black text-navy leading-tight">{m.movement}</span>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <span className={cn(
                      "text-[15px] font-black font-mono",
                      m.type === "income" ? "text-green" : "text-red"
                    )}>{m.amount}</span>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex items-center gap-2.5">
                       <CheckCircle2 className="w-4 h-4 text-green" />
                       <span className="text-[13px] font-bold text-gray-600">{m.suggestion}</span>
                    </div>
                  </td>
                  <td className="px-6 py-8 min-w-[200px]">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${m.match}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={cn(
                            "h-full rounded-full shadow-lg",
                            m.match >= 95 ? "bg-teal" : m.match >= 90 ? "bg-green" : "bg-amber"
                          )}
                        />
                      </div>
                      <span className="text-[13px] font-black text-navy w-12 text-right">{m.match}%</span>
                    </div>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <button className="px-6 py-2.5 bg-navy text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-navy-mid hover:shadow-xl hover:shadow-navy/20 transition-all active:scale-95">
                      Conciliar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-10 bg-gray-50/30 text-center border-t border-gray-100">
           <button className="text-[13px] font-black text-navy flex items-center gap-2 mx-auto hover:gap-3 transition-all opacity-40 hover:opacity-100 group">
              Cargar Mas Movimientos <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
           </button>
        </div>
      </div>
    </div>
  );
};

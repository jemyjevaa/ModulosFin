/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ArrowRight, 
  Search, 
  Download,
  Filter,
  Plus,
  Link,
  DollarSign
} from "lucide-react";
import { cn } from "@/src/lib/utils";

export const ConciliacionBancaria = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync, setLastSync] = useState("06 Abr 2026 · 10:24");
  const [progress, setProgress] = useState(0);

  const handleSync = () => {
    setIsSyncing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsSyncing(false);
            setLastSync(new Date().toLocaleString('es-MX', { 
              day: '2-digit', 
              month: 'short', 
              year: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit' 
            }));
          }, 1000);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const bankTransactions = [
    { id: 1, date: "06 Abr 2026", desc: "SPEI RECIBIDO · GASOLINERAS PLUS", amount: -1200.00, status: "matched", erpId: "EG-2026-104" },
    { id: 2, date: "05 Abr 2026", desc: "ABONO INTERESES · BBVA", amount: 450.20, status: "pending", erpId: null },
    { id: 3, date: "05 Abr 2026", desc: "PAGO SERVICIOS · CFE", amount: -3450.00, status: "mismatch", erpId: "EG-2026-098", erpAmount: -3400.00 },
    { id: 4, date: "04 Abr 2026", desc: "DEPÓSITO CLIENTE · TRANSPORTES UNIDOS", amount: 85200.00, status: "matched", erpId: "IN-2026-042" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight whitespace-nowrap">Conciliación Bancaria Inteligente</h1>
          <p className="text-[13px] text-gray-500 mt-1">Conectado vía Open Banking (STP/SPEI) · Sincronización en tiempo real</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right mr-2 hidden md:block">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Última sincronización</p>
            <p className="text-[12px] font-medium text-navy">{lastSync}</p>
          </div>
          <button 
            onClick={handleSync}
            disabled={isSyncing}
            className={cn(
              "px-4 py-2 rounded-md text-[13px] font-bold transition-all shadow-sm flex items-center gap-2",
              isSyncing ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-navy text-white hover:bg-navy-mid"
            )}
          >
            <RefreshCw className={cn("w-4 h-4", isSyncing && "animate-spin")} />
            {isSyncing ? `Sincronizando ${progress}%` : "Sincronizar Banco"}
          </button>
        </div>
      </div>

      {isSyncing && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-navy-light rounded-lg p-4 border border-navy/10"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-[12px] font-bold text-navy">Obteniendo movimientos de BBVA...</span>
            <span className="text-[12px] font-mono font-bold text-navy">{progress}%</span>
          </div>
          <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-navy"
              animate={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Saldo en Banco", value: "$4,281,450.20", icon: Building2, color: "navy" },
          { label: "Saldo en Libros", value: "$4,277,550.00", icon: DollarSign, color: "teal" },
          { label: "Por Conciliar", value: "8", icon: AlertCircle, color: "amber" },
          { label: "Conciliados (Hoy)", value: "24", icon: CheckCircle2, color: "green" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className={cn("p-2 rounded-lg", 
                stat.color === "navy" ? "bg-navy/5 text-navy" : 
                stat.color === "teal" ? "bg-teal/5 text-teal" : 
                stat.color === "amber" ? "bg-amber/5 text-amber" : "bg-green/5 text-green"
              )}>
                <stat.icon className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{stat.label}</span>
            </div>
            <div className={cn("text-lg font-black font-head", `text-${stat.color}`)}>{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden min-h-[500px]">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h3 className="font-head text-sm font-bold text-navy uppercase tracking-widest">Movimientos de la cuenta</h3>
            <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-200">
              <button className="px-3 py-1 text-[11px] font-bold bg-white text-navy shadow-sm rounded-md border border-gray-200">Pendientes</button>
              <button className="px-3 py-1 text-[11px] font-bold text-gray-500 hover:text-navy transition-colors">Todos</button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Buscar movimiento..." className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-[13px] outline-none w-64" />
            </div>
            <button className="p-2 text-gray-400 hover:text-navy transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] border-b border-gray-100">
                <th className="px-6 py-4">Fecha</th>
                <th className="px-6 py-4">Descripción del Banco</th>
                <th className="px-6 py-4 text-right">Monto</th>
                <th className="px-6 py-4 text-center">Estatus</th>
                <th className="px-6 py-4">Sugerencia de Conciliación</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bankTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-6 py-4 text-[13px] text-gray-500">{tx.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-navy truncate max-w-[300px]">{tx.desc}</span>
                      <span className="text-[11px] text-gray-400">Referencia: 09283741</span>
                    </div>
                  </td>
                  <td className={cn("px-6 py-4 text-right font-mono font-bold text-[14px]", tx.amount < 0 ? "text-red" : "text-green")}>
                    {tx.amount < 0 ? `- $${Math.abs(tx.amount).toLocaleString()}` : `+ $${tx.amount.toLocaleString()}`}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {tx.status === "matched" ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-green/10 text-green text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 justify-center">
                        <CheckCircle2 className="w-3 h-3" /> Conciliado
                      </span>
                    ) : tx.status === "mismatch" ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-red/10 text-red text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 justify-center">
                        <AlertCircle className="w-3 h-3" /> Discrepancia
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber/10 text-amber text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 justify-center">
                        <RefreshCw className="w-3 h-3" /> Pendiente
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {tx.erpId ? (
                      <div className={cn("p-2 rounded-lg border flex items-center gap-3", 
                        tx.status === "mismatch" ? "bg-red/5 border-red/20" : "bg-navy-light/50 border-navy/10"
                      )}>
                        <div className="w-8 h-8 rounded bg-white border border-gray-200 flex items-center justify-center text-navy shadow-sm">
                          <Link className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <strong className="text-[12px] font-bold text-navy truncate">{tx.erpId}</strong>
                            {tx.status === "mismatch" && (
                              <span className="text-[10px] font-bold text-red">Δ $50.00</span>
                            )}
                          </div>
                          <span className="text-[11px] text-gray-500 block truncate">Pago a Proveedor · {tx.status === "mismatch" ? `$${Math.abs(tx.erpAmount!).toLocaleString()}` : `$${Math.abs(tx.amount).toLocaleString()}`}</span>
                        </div>
                      </div>
                    ) : (
                      <button className="text-[12px] font-bold text-navy hover:underline flex items-center gap-1.5">
                        <Plus className="w-4 h-4" /> Buscar en ERP
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {tx.status === "matched" ? (
                      <button className="p-2 text-gray-400 hover:text-navy transition-colors opacity-0 group-hover:opacity-100">
                        <Download className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="px-4 py-1.5 bg-navy text-white rounded text-[11px] font-bold shadow-sm hover:bg-navy-mid transition-all">
                        Conciliar
                      </button>
                    )}
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

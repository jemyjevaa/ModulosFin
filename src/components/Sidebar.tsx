/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { NavItem, View } from "@/src/types";

interface SidebarProps {
  currentView: View;
  setView: (v: View) => void;
  isOpen: boolean;
}

import { 
  LayoutDashboard, 
  Wallet, 
  CreditCard, 
  History, 
  FileText, 
  FileCheck, 
  BarChart3, 
  BookOpen, 
  CheckCircle2, 
  Users, 
  Building2, 
  User, 
  Truck, 
  PieChart as PieChartIcon,
  ClipboardList,
  FileSearch,
  Sparkles,
  Globe
} from "lucide-react";

const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, category: "General", badge: 5, badgeColor: "red" },
  { id: "solicitudes", label: "Solicitudes de Egreso", icon: Wallet, category: "Tesorería", badge: 8 },
  { id: "pasivos", label: "Pago de Pasivos", icon: CreditCard, category: "Tesorería" },
  { id: "caja", label: "Caja Chica", icon: History, category: "Tesorería", badge: 2 },
  { id: "banca_directa", label: "Conciliación Bancaria", icon: CheckCircle2, category: "Tesorería", badge: "API" },
  { id: "juridico", label: "Pagos a Jurídico", icon: FileText, category: "Tesorería" },
  { id: "contratos", label: "Contratos / Pagarés", icon: FileCheck, category: "Tesorería" },
  { id: "cotizaciones", label: "Cotizaciones Unidades", icon: BarChart3, category: "Tesorería" },
  { id: "polizas", label: "Pólizas", icon: BookOpen, category: "Contabilidad" },
  { id: "cierre", label: "Cierre Mensual", icon: CheckCircle2, category: "Contabilidad", badge: "7/13" },
  { id: "cfdi", label: "CFDI / SAT", icon: FileSearch, category: "Contabilidad", badge: 14 },
  { id: "proveedores", label: "Proveedores", icon: Users, category: "Catálogos" },
  { id: "empresas", label: "Empresas", icon: Building2, category: "Catálogos" },
  { id: "usuarios", label: "Usuarios", icon: User, category: "Catálogos" },
  { id: "unidades", label: "Unidades (Vehículos)", icon: Truck, category: "Catálogos" },
  { id: "rentabilidad", label: "Rentabilidad", icon: BarChart3, category: "Reportes" },
  { id: "almacenes", label: "Almacenes", icon: PieChartIcon, category: "Reportes" },
  { id: "asistente_ia", label: "Asistente IA", icon: Sparkles, category: "Innovación", badge: "Beta", badgeColor: "amber" },
  { id: "banca_directa", label: "Banca Directa", icon: Building2, category: "Innovación" },
  { id: "portal_proveedores", label: "Portal Proveedores", icon: Globe, category: "Innovación" },
];

export const Sidebar = ({ currentView, setView, isOpen }: SidebarProps) => {
  const categories = NAV_ITEMS.reduce((acc, item) => {
    const cat = item.category || "General";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {} as Record<string, NavItem[]>);

  return (
    <motion.aside
      initial={false}
      animate={{ width: isOpen ? 248 : 80 }}
      className="fixed top-0 left-0 bottom-0 bg-navy text-white/60 z-50 flex flex-col transition-all duration-300 ease-in-out sidebar-grid-pattern overflow-hidden border-r border-white/10"
    >
      <div className="h-[60px] flex items-center px-5 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-[34px] h-[34px] bg-amber rounded-lg flex items-center justify-center text-navy font-head font-extrabold text-base shrink-0">
            BM
          </div>
          {isOpen && (
            <div className="flex flex-col leading-tight">
              <strong className="font-head text-[13px] font-bold text-white whitespace-nowrap">Pit Path</strong>
              <span className="text-[10px] text-white/45 uppercase tracking-wider whitespace-nowrap">ERP · Tesorería</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 custom-scrollbar overflow-x-hidden">
        {Object.entries(categories).map(([cat, items]) => (
          <div key={cat} className="mb-4">
            {isOpen && (
              <div className="px-5 mb-2 text-[10px] font-bold text-white/35 uppercase tracking-[0.08em]">
                {cat}
              </div>
            )}
            <div className="px-3 space-y-0.5">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-md text-[13px] transition-all group relative",
                    currentView === item.id
                      ? "bg-white/12 text-white border border-white/10 font-medium"
                      : "hover:bg-white/7 hover:text-white/90"
                  )}
                >
                  <item.icon className="w-4 h-4 shrink-0 transition-colors" />
                  {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
                  {item.badge && isOpen && (
                    <span className={cn(
                      "ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full",
                      item.badgeColor === "red" ? "bg-red text-white" : "bg-amber text-navy"
                    )}>
                      {item.badge}
                    </span>
                  )}
                  {!isOpen && (
                    <div className="absolute left-full ml-4 px-2 py-1 bg-navy-mid text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-[100] shadow-xl border border-white/10">
                      {item.label}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-white/10 shrink-0">
        <div className="bg-white/5 rounded-md p-2.5 flex items-center gap-3">
          <div className="w-[30px] h-[30px] rounded-full bg-teal-mid flex items-center justify-center text-white font-bold text-xs shrink-0">
            IR
          </div>
          {isOpen && (
            <div className="flex flex-col min-w-0">
              <strong className="text-white text-xs font-medium truncate">Iván Rodríguez</strong>
              <span className="text-[10px] text-white/40 truncate">Contabilidad</span>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
};

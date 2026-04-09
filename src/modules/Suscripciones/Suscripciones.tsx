/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    FileText,
    CreditCard,
    BarChart3,
    Plus,
    Search,
    ChevronDown,
    LayoutDashboard
} from "lucide-react";
import { cn } from "../../lib/utils";
import { View } from "../../types";

interface SuscripcionesProps {
    setView: (v: View) => void;
}

export const Suscripciones = ({ setView }: SuscripcionesProps) => {
    const tabs = [
        { id: "suscripciones" as View, label: "Suscripciones", icon: FileText },
        { id: "pagos" as View, label: "Pagos", icon: CreditCard },
        { id: "reportes_general" as View, label: "Reportes", icon: BarChart3 },
    ];

    const activeTab = "suscripciones";

    const filters = [
        { label: "Proveedor", options: ["Todos los proveedores", "AWS", "Google Cloud", "Microsoft"] },
        { id: "estado", label: "Estado", options: ["Todos los estados", "Activo", "Pendiente", "Cancelado"] },
        { id: "categoria", label: "Categoría", options: ["Todas las categorías", "Software", "Servicios", "Infraestructura"] },
        { id: "depto", label: "Departamento", options: ["Todos los departamentos", "TI", "Marketing", "Administración"] },
    ];

    return (
        <div className="space-y-6">
            {/* Header Tabs */}
            <div className="flex items-center border-b border-gray-200 -mx-8 px-8 bg-white transition-all">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setView(tab.id)}
                        className={cn(
                            "flex items-center gap-2 px-6 py-4 text-[13px] font-bold transition-all relative uppercase tracking-wider",
                            activeTab === tab.id
                                ? "text-navy"
                                : "text-gray-400 hover:text-navy/70"
                        )}
                    >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTabSusc"
                                className="absolute bottom-0 left-0 right-0 h-[3px] bg-navy rounded-t-full"
                            />
                        )}
                    </button>
                ))}
            </div>

            <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
                <LayoutDashboard className="w-3 h-3" />
                <span className="mx-1 text-gray-300">/</span>
                <span>Suscripciones</span>
            </nav>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="font-head text-[24px] font-black text-navy leading-tight uppercase tracking-tight">Suscripciones</h1>
                    <p className="text-[13px] text-gray-500 mt-1 font-medium">Gestión integral de servicios recurrentes y pagos</p>
                </div>
                <button className="px-5 py-2.5 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2 active:scale-95">
                    <Plus className="w-4 h-4" /> Nueva Suscripción
                </button>
            </div>

            <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm p-6 space-y-6">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar por nombre de servicio..."
                        className="w-full pl-11 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-md text-[13px] outline-none focus:ring-2 focus:ring-navy/5 focus:border-navy/20 transition-all font-medium"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {filters.map((filter) => (
                        <div key={filter.id || filter.label} className="space-y-1.5">
                            <label className="text-[11px] font-bold text-gray-700 uppercase tracking-wider pl-0.5">{filter.label}</label>
                            <div className="relative group">
                                <select className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 text-[13px] font-medium text-gray-700 outline-none focus:ring-2 focus:ring-navy/5 focus:border-navy/20 cursor-pointer transition-all">
                                    {filter.options.map(opt => <option key={opt}>{opt}</option>)}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center justify-center pt-24 pb-12 opacity-30">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 border-[3px] border-navy/10 border-t-navy rounded-full"
                />
                <p className="mt-4 text-[11px] font-bold text-navy uppercase tracking-[0.2em]">Cargando módulos...</p>
            </div>
        </div>
    );
};

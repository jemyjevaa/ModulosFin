/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import {
    FileText,
    CreditCard,
    BarChart3,
    Calendar,
    Info,
    LayoutDashboard,
    Bot
} from "lucide-react";
import { cn } from "../../lib/utils";
import { View } from "../../types";

interface ReportesGeneralProps {
    setView: (v: View) => void;
}

export const ReportesGeneral = ({ setView }: ReportesGeneralProps) => {
    const [activePeriod, setActivePeriod] = useState("Este mes");
    const [activeSubTab, setActiveSubTab] = useState("Por Categoría");

    const tabs = [
        { id: "dashboard" as View, label: "Dashboard", icon: LayoutDashboard },
        { id: "suscripciones" as View, label: "Suscripciones", icon: FileText },
        { id: "pagos" as View, label: "Pagos", icon: CreditCard },
        { id: "reportes_general" as View, label: "Reportes", icon: BarChart3 },
    ];

    const activeTab = "reportes_general";
    const periods = ["Este mes", "Último mes", "Últimos 3 meses", "Este año"];
    const subTabs = ["Por Categoría", "Por Departamento", "Por Proveedor"];

    return (
        <div className="space-y-6 relative pb-20">
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
                                layoutId="activeTabReport"
                                className="absolute bottom-0 left-0 right-0 h-[3px] bg-navy rounded-t-full"
                            />
                        )}
                    </button>
                ))}
            </div>

            <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
                <LayoutDashboard className="w-3 h-3" />
                <span className="mx-1 text-gray-300">/</span>
                <span>Reportes</span>
            </nav>

            <div>
                <h1 className="font-head text-[24px] font-black text-navy leading-tight uppercase tracking-tight">Reportes</h1>
                <p className="text-[13px] text-gray-500 mt-1 font-medium">Análisis multidimensional de gastos y previsiones</p>
            </div>

            <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm p-6 space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-200">
                        {periods.map((period) => (
                            <button
                                key={period}
                                onClick={() => setActivePeriod(period)}
                                className={cn(
                                    "px-4 py-1.5 text-[11px] font-bold rounded-md transition-all uppercase tracking-wider",
                                    activePeriod === period
                                        ? "bg-navy text-white shadow-sm"
                                        : "text-gray-400 hover:text-navy/60"
                                )}
                            >
                                {period}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 px-4 py-1.5 bg-white border border-navy rounded-md text-[12px] font-bold text-navy">
                        <Calendar className="w-3.5 h-3.5 text-navy" />
                        <span>01/04/2026 - 30/04/2026</span>
                    </div>
                    <label className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-50 transition-all select-none group">
                        <input type="checkbox" className="w-3.5 h-3.5 rounded border-gray-300 text-navy focus:ring-navy/5 accent-navy" />
                        <span className="text-[11px] font-bold text-gray-500 group-hover:text-navy uppercase tracking-tight">Conversión Moneda</span>
                    </label>
                </div>
            </div>

            <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden min-h-[400px]">
                <div className="flex border-b border-gray-100 px-6 bg-gray-50/50">
                    {subTabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveSubTab(tab)}
                            className={cn(
                                "px-6 py-4 text-[12px] font-bold transition-all relative uppercase tracking-widest",
                                activeSubTab === tab
                                    ? "text-navy"
                                    : "text-gray-400 hover:text-navy/60"
                            )}
                        >
                            {tab}
                            {activeSubTab === tab && (
                                <motion.div
                                    layoutId="subTabReport"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-navy"
                                />
                            )}
                        </button>
                    ))}
                </div>

                <div className="p-12 flex flex-col items-center justify-center h-full">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-xl p-6 bg-amber-light border border-amber/20 rounded-md flex items-center gap-4 text-amber"
                    >
                        <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center shrink-0 shadow-sm">
                            <Info className="w-6 h-6 text-amber" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-[13px] font-bold uppercase tracking-wider mb-0.5">Módulo de visualización suspendido</h4>
                            <p className="text-[11px] font-medium opacity-80 leading-relaxed mb-4">No se han encontrado registros consolidados para los filtros aplicados. Favor de verificar la sincronización con el servidor central.</p>
                            <button className="px-5 py-2.5 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2 active:scale-95">
                                <BarChart3 className="w-4 h-4" /> Generar Reporte
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating AI Assistant */}
            <button className="fixed bottom-8 right-10 w-12 h-12 bg-navy text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-navy-mid hover:scale-110 transition-all z-50 group">
                <Bot className="w-6 h-6" />
                <div className="absolute bottom-full right-0 mb-4 px-3 py-1.5 bg-navy text-white text-[10px] font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-white/10 uppercase tracking-widest">
                    Asistente IA
                </div>
            </button>
        </div >
    );
};

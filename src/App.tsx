/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { Solicitudes } from "./components/Solicitudes";
import { CierreMensual } from "./components/CierreMensual";
import { Pasivos, CajaChica, Juridico, Contratos, Cotizaciones } from "./components/TesoriaModules";
import { Polizas, CFDI } from "./components/ContabilidadModules";
import { Proveedores, Empresas, Usuarios, Unidades } from "./components/CatalogosModules";
import { Rentabilidad, Almacenes } from "./components/ReportesModules";
import { ConciliacionBancaria } from "./components/ConciliacionBancaria";
import { PortalProveedores } from "./components/PortalProveedores";
import { AsistenteIA } from "./components/AsistenteIA";
import { BancaDirecta } from "./components/BancaDirecta";
import { View } from "./types";
import { cn } from "./lib/utils";
import { LayoutDashboard } from "lucide-react";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const currentViewLabel = useMemo(() => {
    const labels: Record<View, string> = {
      dashboard: "Dashboard",
      solicitudes: "Solicitudes de Egreso",
      pasivos: "Pago de Pasivos",
      caja: "Caja Chica",
      juridico: "Pagos a Jurídico",
      contratos: "Contratos / Pagarés",
      cotizaciones: "Cotizaciones Unidades",
      polizas: "Pólizas",
      cierre: "Cierre Mensual",
      cfdi: "CFDI / SAT",
      proveedores: "Proveedores",
      empresas: "Empresas",
      usuarios: "Usuarios",
      unidades: "Unidades",
      rentabilidad: "Rentabilidad",
      almacenes: "Almacenes",
      asistente_ia: "Asistente IA",
      banca_directa: "Banca Directa",
      portal_proveedores: "Portal de Proveedores",
    };
    return labels[currentView] || "Panel";
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "solicitudes":
        return <Solicitudes />;
      case "pasivos":
        return <Pasivos />;
      case "caja":
        return <CajaChica />;
      case "asistente_ia":
        return <AsistenteIA />;
      case "banca_directa":
        return <BancaDirecta />;
      case "juridico":
        return <Juridico />;
      case "contratos":
        return <Contratos />;
      case "cotizaciones":
        return <Cotizaciones />;
      case "polizas":
        return <Polizas />;
      case "cfdi":
        return <CFDI />;
      case "cierre":
        return <CierreMensual />;
      case "proveedores":
        return <Proveedores />;
      case "portal_proveedores":
        return <PortalProveedores />;
      case "empresas":
        return <Empresas />;
      case "usuarios":
        return <Usuarios />;
      case "unidades":
        return <Unidades />;
      case "rentabilidad":
        return <Rentabilidad />;
      case "almacenes":
        return <Almacenes />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400">
            <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center mb-6 shadow-inner">
              <LayoutDashboard className="w-10 h-10 text-slate-300" />
            </div>
            <h2 className="text-xl font-head font-bold text-navy tracking-tight uppercase tracking-widest">Módulo en Desarrollo</h2>
            <p className="text-sm font-medium text-gray-500 mt-2">La sección "{currentViewLabel}" está siendo integrada al núcleo del ERP.</p>
            <button 
              onClick={() => setCurrentView("dashboard")}
              className="mt-8 px-6 py-2.5 bg-navy text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-navy-mid transition-all shadow-sm"
            >
              Volver al Inicio
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans text-[#101828] flex selection:bg-navy-light selection:text-navy">
      <Sidebar
        currentView={currentView}
        setView={setCurrentView}
        isOpen={isSidebarOpen}
      />

      <main className={cn(
        "flex-1 flex flex-col transition-all duration-300 min-w-0",
        isSidebarOpen ? "lg:ml-[248px]" : "lg:ml-[80px]"
      )}>
        <Header 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          title={currentViewLabel} 
        />

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-8">
          <div className="max-w-[1400px] mx-auto w-full">
            {renderView()}
          </div>
        </div>
      </main>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  Building2,
  User,
  Truck,
  Search,
  Plus,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  AlertCircle,
  Download,
  CreditCard,
  Globe,
  Briefcase,
  X,
  ChevronRight,
  ChevronLeft,
  FileText,
  Key,
  Image as ImageIcon,
  CheckCircle2,
  Lock,
  LayoutDashboard,
  ChevronDown,
  Sparkles,
  Coins
} from "lucide-react";
import { cn } from "@/src/lib/utils";

// --- Participantes (Clientes/Proveedores/etc) ---
export const Participantes = () => {
  const [view, setViewState] = useState<"list" | "form">("list");
  const [activeTab, setActiveTab] = useState("Todos");

  const tabs = ["Todos", "Clientes", "Proveedores", "Empresas", "Personas"];

  if (view === "form") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setViewState("list")}
            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-navy transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al listado
          </button>
        </div>

        <div>
          <h1 className="font-head text-[24px] font-black text-navy leading-tight uppercase tracking-tight">Nuevo Participante</h1>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-head text-sm font-bold text-navy">Datos Generales</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Tipo *</label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>Seleccionar tipo...</option>
                  <option>Cliente</option>
                  <option>Proveedor</option>
                  <option>Empresa</option>
                  <option>Persona</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Código</label>
                <input type="text" placeholder="Código interno (opcional)" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Nombre / Razón Social *</label>
                <input type="text" placeholder="Nombre del participante" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden border-t-2 border-t-navy/5">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
              <h3 className="font-head text-sm font-bold text-navy">Datos Fiscales</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">RFC</label>
                <input type="text" placeholder="XAXX010101000" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none uppercase font-mono" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Régimen Fiscal</label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>Seleccionar régimen...</option>
                  <option>601 · General de Ley Personas Morales</option>
                  <option>626 · RESICO</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Uso CFDI</label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>Seleccionar uso CFDI...</option>
                  <option>G03 · Gastos en general</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">C.P. Fiscal</label>
                <input type="text" placeholder="44100" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Razón Social</label>
                <input type="text" placeholder="Razón social completa" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 pb-8">
            <button
              onClick={() => setViewState("list")}
              className="px-6 py-2.5 border border-gray-300 rounded-md text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition-all uppercase tracking-wide"
            >
              Cancelar
            </button>
            <button className="px-8 py-2.5 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm uppercase tracking-wide">
              Crear Participante
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
        <LayoutDashboard className="w-3 h-3" />
        <span className="mx-1 text-gray-300">/</span>
        <span>Participantes</span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[24px] font-black text-navy leading-tight uppercase tracking-tight">Participantes</h1>
          <p className="text-[13px] text-gray-500 mt-1">Gestión de clientes, proveedores, empresas y personas</p>
        </div>
        <button
          onClick={() => setViewState("form")}
          className="px-5 py-2.5 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2 uppercase tracking-wide"
        >
          <Plus className="w-4 h-4" /> Nuevo Participante
        </button>
      </div>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden min-h-[500px] flex flex-col">
        {/* New Tab Structure from Image 3 */}
        <div className="flex bg-white px-2 mt-2">
          {["Datos Fiscales", "Pagos", "Datos de Contacto", "Generales"].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => { }} // Handle tab change if needed
              className={cn(
                "px-8 py-3.5 text-[13px] font-bold transition-all border-b-2 whitespace-nowrap",
                idx === 0 ? "text-navy border-navy bg-navy/5 rounded-t-lg" : "text-gray-400 border-transparent hover:text-gray-600"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-6 border-b border-gray-100">
              <button className="pb-3 text-[13px] font-bold text-navy border-b-2 border-navy">Régimenes Fiscales</button>
              <button className="pb-3 text-[13px] font-bold text-gray-400 hover:text-gray-600 border-b-2 border-transparent">Usos de CFDI</button>
            </div>
            <button className="px-4 py-2 bg-navy text-white rounded-md text-[12px] font-bold hover:bg-navy-mid transition-all flex items-center gap-2">
              <Plus className="w-4 h-4" /> Agregar Nuevo
            </button>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full max-w-md pl-11 pr-4 py-2 bg-white border border-gray-200 rounded-md text-[13px] outline-none focus:ring-2 focus:ring-navy/5 focus:border-navy transition-all"
            />
          </div>

          <div className="flex-1 border border-gray-100 rounded-xl bg-white flex flex-col items-center justify-center p-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-gray-100 border-t-navy rounded-full mb-4"
            />
            <p className="text-[14px] font-medium text-gray-400">Cargando...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Empresas ---
export const Empresas = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Empresas del Grupo</h1>
          <p className="text-[13px] text-gray-500 mt-1">Configuración de entidades legales, logotipos y certificados SAT</p>
        </div>
        <button
          onClick={() => { setIsRegistering(true); setStep(1); }}
          className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Registrar empresa
        </button>
      </div>

      <AnimatePresence>
        {isRegistering && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy/40 backdrop-blur-[2px]"
              onClick={() => setIsRegistering(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[10px] shadow-2xl overflow-hidden border border-white/20"
            >
              <div className="flex flex-col h-[600px]">
                <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center text-white">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-head text-lg font-black text-navy leading-tight">Registrar Nueva Empresa</h3>
                      <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Paso {step} de 4 · {step === 1 ? "Identidad Fiscal" : step === 2 ? "Ubicación" : step === 3 ? "Certificados SAT" : "Branding"}</p>
                    </div>
                  </div>
                  <button onClick={() => setIsRegistering(false)} className="p-2 hover:bg-gray-200 rounded-full transition-colors"><X className="w-5 h-5 text-gray-400" /></button>
                </div>

                <div className="flex-1 overflow-y-auto px-10 py-8">
                  <div className="mb-8 flex items-center gap-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex-1 flex items-center">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-black transition-all border-2",
                          step >= i ? "bg-navy border-navy text-white" : "bg-white border-gray-200 text-gray-400"
                        )}>
                          {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
                        </div>
                        {i < 4 && <div className={cn("flex-1 h-0.5 mx-2 transition-all", step > i ? "bg-navy" : "bg-gray-100")} />}
                      </div>
                    ))}
                  </div>

                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5 col-span-2">
                          <label className="text-[12px] font-bold text-gray-700">Razón Social <span className="text-red">*</span></label>
                          <input type="text" placeholder="Ej. Bus Men México S.A. de C.V." className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-gray-700">RFC <span className="text-red">*</span></label>
                          <input type="text" placeholder="BMM980415KL9" className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[14px] font-mono focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-gray-700">Nombre Comercial</label>
                          <input type="text" placeholder="Pit Path - Operaciones" className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5 col-span-2">
                          <label className="text-[12px] font-bold text-gray-700">Régimen Fiscal <span className="text-red">*</span></label>
                          <select className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all">
                            <option>601 · General de Ley Personas Morales</option>
                            <option>603 · Personas Morales con Fines no Lucrativos</option>
                            <option>626 · Régimen Simplificado de Confianza (RESICO)</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5 col-span-2">
                          <label className="text-[12px] font-bold text-gray-700">Calle y Número <span className="text-red">*</span></label>
                          <input type="text" placeholder="Av. Vallarta No. 1234" className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-gray-700">Código Postal <span className="text-red">*</span></label>
                          <input type="text" placeholder="44110" className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[14px] font-mono focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-gray-700">Ciudad / Estado</label>
                          <input type="text" placeholder="Guadalajara, Jalisco" className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-gray-700">Teléfono Contacto</label>
                          <input type="tel" placeholder="+52 33 1234 5678" className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-gray-700">Correo Notificaciones</label>
                          <input type="email" placeholder="fiscal@busmen.mx" className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <div className="p-6 bg-amber-light/30 border-2 border-dashed border-amber/20 rounded-2xl text-center">
                        <Lock className="w-10 h-10 text-amber mx-auto mb-3 opacity-60" />
                        <p className="text-[13px] font-bold text-navy mb-1">Carga de Certificados (CSD)</p>
                        <p className="text-[11px] text-gray-500 mb-6 font-medium">Requerido para la facturación electrónica CFDI 4.0</p>
                        <div className="flex gap-4">
                          <div className="flex-1 p-4 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center gap-2">
                            <FileText className="w-6 h-6 text-navy" />
                            <span className="text-[10px] font-black uppercase text-gray-400">Certificado (.cer)</span>
                            <button className="text-[11px] font-bold text-navy hover:underline">Sube archivo</button>
                          </div>
                          <div className="flex-1 p-4 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center gap-2">
                            <Key className="w-6 h-6 text-navy" />
                            <span className="text-[10px] font-black uppercase text-gray-400">Llave (.key)</span>
                            <button className="text-[11px] font-bold text-navy hover:underline">Sube archivo</button>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-bold text-gray-700">Contraseña de Certificado <span className="text-red">*</span></label>
                        <input type="password" placeholder="••••••••••••" className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 flex flex-col items-center">
                      <div className="w-32 h-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 gap-2 mb-4 group hover:border-navy hover:text-navy transition-all cursor-pointer">
                        <ImageIcon className="w-10 h-10 group-hover:scale-110 transition-transform" />
                        <span className="text-[11px] font-bold">Logo (Preview)</span>
                      </div>
                      <div className="text-center space-y-2 mb-6">
                        <h4 className="text-sm font-bold text-navy">Personaliza la identidad visual</h4>
                        <p className="text-[12px] text-gray-500 max-w-sm">Este logo aparecerá en todas las facturas y documentos oficiales generados por el ERP para esta empresa.</p>
                      </div>
                      <div className="w-full grid grid-cols-2 gap-4">
                        <div className="p-4 bg-navy text-white rounded-2xl flex items-center justify-between">
                          <span className="text-[12px] font-bold">Modo Oscuro</span>
                          <div className="w-8 h-4 bg-white/20 rounded-full" />
                        </div>
                        <div className="p-4 bg-gray-50 text-navy rounded-2xl flex items-center justify-between border border-gray-100">
                          <span className="text-[12px] font-bold">Papel Membretado</span>
                          <div className="w-8 h-4 bg-navy/10 rounded-full" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="px-8 py-6 border-t border-gray-100 bg-gray-50/50 flex justify-between gap-4">
                  <button
                    onClick={() => step > 1 && setStep(step - 1)}
                    disabled={step === 1}
                    className="px-6 py-2.5 bg-white border border-gray-200 rounded-md text-[13px] font-bold text-gray-500 hover:text-navy hover:border-navy disabled:opacity-0 transition-all flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" /> Anterior
                  </button>
                  <button
                    onClick={() => {
                      if (step < 4) setStep(step + 1);
                      else setIsRegistering(false);
                    }}
                    className="px-8 py-2.5 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-xl shadow-navy/20 flex items-center gap-2"
                  >
                    {step === 4 ? "Finalizar Registro" : "Siguiente"} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: "Bus Men México S.A. de C.V.", rfc: "BMM980415KL9", location: "Guadalajara, Jal.", color: "bg-navy", logo: "BM" },
          { name: "Pitbus S.A. de C.V.", rfc: "PIT120520XYZ", location: "Monterrey, N.L.", color: "bg-teal-mid", logo: "PB" },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden group">
            <div className={cn("h-2 w-full", item.color)} />
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-navy font-black text-xl group-hover:scale-110 transition-transform border border-gray-100">
                  {item.logo}
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 text-gray-400 hover:text-navy transition-colors"><ShieldCheck className="w-4 h-4" /></button>
                  <button className="p-1.5 text-gray-400 hover:text-navy transition-colors"><MoreVertical className="w-4 h-4" /></button>
                </div>
              </div>
              <h3 className="text-base font-bold text-navy mb-1">{item.name}</h3>
              <p className="text-[12px] font-mono font-bold text-gray-500 mb-4">{item.rfc}</p>
              <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium">
                <MapPin className="w-3.5 h-3.5" /> {item.location}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Cuentas</p>
                    <p className="text-sm font-bold text-navy">4</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Usuarios</p>
                    <p className="text-sm font-bold text-navy">12</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Unidades</p>
                    <p className="text-sm font-bold text-navy">45</p>
                  </div>
                </div>
                <button className="text-[11px] font-bold text-navy hover:underline">Configurar →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Usuarios ---
export const Usuarios = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Gestión de Usuarios</h1>
          <p className="text-[13px] text-gray-500 mt-1">Control de accesos, roles y permisos del sistema ERP</p>
        </div>
        <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2">
          <Plus className="w-4 h-4" /> Nuevo usuario
        </button>
      </div>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px]">
            <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3">Usuario</th>
                <th className="px-6 py-3">Rol / Departamento</th>
                <th className="px-6 py-3">Empresa asignada</th>
                <th className="px-6 py-3 text-center">Último acceso</th>
                <th className="px-6 py-3 text-center">Estatus</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: "Jessica Valderrama", email: "jessica@busmen.mx", role: "Administrador", dept: "Sistemas", company: "Todas", last: "Hoy, 09:42", status: "Activo" },
                { name: "Iván Rodríguez", email: "ivan@busmen.mx", role: "Contador", dept: "Contabilidad", company: "Bus Men México", last: "Ayer, 18:15", status: "Activo" },
                { name: "Carlos Mendoza", email: "carlos@pitbus.mx", role: "Analista", dept: "Tesorería", company: "Pitbus", last: "01 Abr 2026", status: "Inactivo" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-navy-light flex items-center justify-center text-navy font-bold text-xs border border-navy/10">
                      {row.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-navy">{row.name}</p>
                      <p className="text-[11px] text-gray-400 font-medium">{row.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-[13px] font-bold text-gray-700">{row.role}</p>
                    <p className="text-[11px] text-gray-400">{row.dept}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-500 font-medium">{row.company}</td>
                  <td className="px-6 py-4 text-center text-gray-400 font-medium">{row.last}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest",
                      row.status === "Activo" ? "bg-teal-light text-teal" : "bg-gray-100 text-gray-400"
                    )}>{row.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-gray-400 hover:text-navy transition-colors"><MoreVertical className="w-4 h-4" /></button>
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

// --- Unidades ---
export const Unidades = () => {
  const [view, setViewState] = useState<"list" | "form">("list");
  const [activeTab, setActiveTab] = useState("Todas");

  if (view === "form") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setViewState("list")}
            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-navy transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al listado
          </button>
        </div>

        <div>
          <h1 className="font-head text-[24px] font-black text-navy leading-tight uppercase tracking-tight">Nueva Unidad</h1>
          <p className="text-[13px] text-gray-500 mt-1 font-medium">Registra un nuevo vehículo en la flota.</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-gray-400" />
              <h3 className="font-head text-sm font-bold text-navy">Empresa y Sucursal</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Empresa (Participante)</label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>Selecciona una empresa...</option>
                  <option>Bus Men México</option>
                  <option>Pitbus</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Sucursal</label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>Selecciona una sucursal...</option>
                  <option>Guadalajara</option>
                  <option>Monterrey</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-400" />
              <h3 className="font-head text-sm font-bold text-navy">Datos Generales</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Número de Unidad *</label>
                <input type="text" placeholder="Ej. T-001" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Tipo de Unidad *</label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>Selecciona un tipo...</option>
                  <option>Tractocamión</option>
                  <option>Remolque</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Rol Operativo *</label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>Selecciona un rol...</option>
                  <option>Logística</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Marca</label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>Selecciona marca...</option>
                  <option>Mercedes Benz</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Modelo (Línea)</label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>Selecciona modelo...</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">VIN / Número de Serie</label>
                <input type="text" placeholder="17 CARACTERES" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-mono focus:ring-2 focus:ring-navy/10 outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Placas</label>
                <input type="text" placeholder="EJ. 123-ABC" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-mono focus:ring-2 focus:ring-navy/10 outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Modelo (Año)</label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>2026</option>
                  <option>2025</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Color</label>
                <input type="text" placeholder="Ej. Blanco" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700">Capacidad de Asientos</label>
                <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                  <option>Ej. 40</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <h3 className="font-head text-sm font-bold text-navy">Integración GPS / Trackar</h3>
            </div>
            <div className="p-12 flex items-center justify-center text-gray-500 font-medium text-sm">
              Guarda la unidad para agregar dispositivos GPS.
            </div>
          </div>

          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gray-400" />
              <h3 className="font-head text-sm font-bold text-navy">Amenidades</h3>
            </div>
            <div className="p-12 flex items-center justify-center text-gray-500 font-medium text-sm">
              No hay tipos de amenidades registrados. Registra tipos de amenidades en el catálogo.
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 pb-8">
            <button
              onClick={() => setViewState("list")}
              className="px-6 py-2.5 border border-gray-300 rounded-md text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition-all uppercase tracking-wide"
            >
              Cancelar
            </button>
            <button className="px-8 py-2.5 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-md shadow-navy/20 uppercase tracking-wide">
              Crear Unidad
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
        <LayoutDashboard className="w-3 h-3" />
        <span className="mx-1 text-gray-300">/</span>
        <span>Configuración</span>
        <span className="mx-1 text-gray-300">/</span>
        <span>Catálogos de Unidades</span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[24px] font-black text-navy leading-tight uppercase tracking-tight">Configuración de Unidades</h1>
          <p className="text-[13px] text-gray-500 mt-1 font-medium">Gestiona los catálogos base que se utilizan al registrar vehículos.</p>
        </div>
        <button
          onClick={() => setViewState("form")}
          className="px-5 py-2.5 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-md shadow-navy/20 flex items-center gap-2 uppercase tracking-wide"
        >
          <Plus className="w-4 h-4" /> Agregar Nuevo
        </button>
      </div>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
        {/* Secondary Tabs from Image 2 */}
        <div className="flex border-b border-gray-100 px-2 pt-2 bg-gray-50/50">
          {["Datos de Unidad", "Marca y Modelo", "Técnico", "Documentación"].map((tab, idx) => (
            <button
              key={tab}
              className={cn(
                "px-8 py-3 text-[13px] font-bold transition-all border-b-2 whitespace-nowrap",
                idx === 0
                  ? "text-navy border-navy bg-white rounded-t-lg shadow-[0_-2px_4px_rgba(0,0,0,0.02)]"
                  : "text-gray-400 border-transparent hover:text-gray-600"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tertiary Tabs (Current Categorias/etc) */}
        <div className="flex border-b border-gray-100 px-6 bg-white overflow-x-auto gap-4">
          {["Categorías", "Tipos de Unidad", "Roles de Unidad", "Amenidades"].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-4 text-[12px] font-bold transition-all relative uppercase tracking-widest whitespace-nowrap",
                activeTab === tab || (activeTab === "Todas" && idx === 0) ? "text-navy" : "text-gray-400 hover:text-navy/80"
              )}
            >
              {tab}
              {(activeTab === tab || (activeTab === "Todas" && idx === 0)) && (
                <motion.div layoutId="unitTabs" className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-navy rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="p-6 border-b border-gray-100 flex gap-4">
          <div className="w-40 relative group">
            <select className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 text-[13px] font-medium text-gray-700 outline-none focus:ring-2 focus:ring-navy/5 focus:border-navy/20 cursor-pointer transition-all">
              <option>Todo</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" />
          </div>
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar en todos los campos..."
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 rounded-md text-[13px] outline-none focus:ring-2 focus:ring-navy/5 focus:border-navy/20 transition-all font-medium"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px]">
            <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">ID Unidad</th>
                <th className="px-6 py-4">Placas</th>
                <th className="px-6 py-4">Marca / Modelo</th>
                <th className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="px-6 py-32 text-center text-gray-400">
                  <Truck className="w-12 h-12 mx-auto mb-4 opacity-10" />
                  <p className="text-[13px] font-bold uppercase tracking-widest">Inventario de flota vacío</p>
                  <p className="text-[11px] mt-1 font-medium italic">Registra tu primera unidad para comenzar</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// --- Categorías (Suscripciones) ---
export const CategoriasSuscripciones = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
        <LayoutDashboard className="w-3 h-3" />
        <span className="mx-1 text-gray-300">/</span>
        <span>Configuración</span>
        <span className="mx-1 text-gray-300">/</span>
        <span>Subscription-categories</span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[24px] font-black text-navy leading-tight uppercase tracking-tight">Categorías de Suscripciones</h1>
          <p className="text-[13px] text-gray-500 mt-1 font-medium">Gestiona las categorías para organizar tus suscripciones</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-gray-300 rounded-md text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition-all uppercase tracking-wide">
            <Download className="w-4 h-4" /> Crear Categorías Iniciales
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2 uppercase tracking-wide"
          >
            <Plus className="w-4 h-4" /> Nueva Categoría
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" id="inactive-cats" className="w-4 h-4 accent-navy rounded" />
          <label htmlFor="inactive-cats" className="text-[13px] font-medium text-gray-600">Mostrar categorías inactivas</label>
        </div>

        <div className="border border-gray-100 bg-gray-50/50 rounded-md p-12 text-center text-gray-400">
          <LayoutDashboard className="w-12 h-12 mx-auto mb-4 opacity-10 text-navy" />
          <p className="text-[14px] font-bold text-navy/40 uppercase tracking-wider">No se han encontrado categorías configuradas</p>
          <p className="text-[11px] text-gray-500 mt-1 font-medium italic">Utiliza los botones superiores para comenzar</p>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[10px] shadow-2xl overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-head text-lg font-black text-navy uppercase tracking-tight">Nueva Categoría</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Nombre *</label>
                  <input type="text" placeholder="Ej: Cloud Computing, Comunicación, Desarrollo" className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-navy/10" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Descripción</label>
                  <textarea rows={3} placeholder="Describe el tipo de servicios que incluye esta categoría" className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-navy/10 resize-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Estado</label>
                  <select className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-navy/10 cursor-pointer transition-all">
                    <option>Activo</option>
                    <option>Inactivo</option>
                  </select>
                </div>
              </div>

              <div className="px-8 py-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/30">
                <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 border border-gray-200 rounded-md text-[13px] font-bold text-gray-500 hover:bg-gray-50 transition-all uppercase tracking-wide">
                  Cancelar
                </button>
                <button className="px-8 py-2.5 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-xl shadow-navy/20 uppercase tracking-wide">
                  Crear Categoría
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Departamentos ---
export const Departamentos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
        <LayoutDashboard className="w-3 h-3" />
        <span className="mx-1 text-gray-300">/</span>
        <span>Configuración</span>
        <span className="mx-1 text-gray-300">/</span>
        <span>Departments</span>
      </nav>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[24px] font-black text-navy leading-tight uppercase tracking-tight">Departamentos</h1>
          <p className="text-[13px] text-gray-500 mt-1 font-medium">Gestiona los departamentos de tu organización</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-gray-300 rounded-md text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition-all uppercase tracking-wide">
            <Download className="w-4 h-4" /> Crear Departamentos Iniciales
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2 uppercase tracking-wide"
          >
            <Plus className="w-4 h-4" /> Nuevo Departamento
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" id="inactive-depts" className="w-4 h-4 accent-navy rounded" />
          <label htmlFor="inactive-depts" className="text-[13px] font-medium text-gray-600">Mostrar departamentos inactivos</label>
        </div>

        <div className="border border-gray-100 bg-gray-50/50 rounded-md p-12 text-center text-gray-400">
          <LayoutDashboard className="w-12 h-12 mx-auto mb-4 opacity-10 text-navy" />
          <p className="text-[14px] font-bold text-navy/40 uppercase tracking-wider">No se han encontrado departamentos registrados</p>
          <p className="text-[11px] text-gray-500 mt-1 font-medium italic">Haz clic en "Nuevo Departamento" para crear uno nuevo</p>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[10px] shadow-2xl overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-head text-lg font-black text-navy uppercase tracking-tight">Nuevo Departamento</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Nombre *</label>
                  <input type="text" placeholder="Ej: Tecnología, Recursos Humanos, Finanzas" className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-navy/10" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Descripción</label>
                  <textarea rows={3} placeholder="Describe las funciones y responsabilidades de este departamento" className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-navy/10 resize-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-gray-700 uppercase tracking-wide">Estado</label>
                  <select className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-navy/10 cursor-pointer transition-all">
                    <option>Activo</option>
                    <option>Inactivo</option>
                  </select>
                </div>
              </div>

              <div className="px-8 py-6 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/30">
                <button onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 border border-gray-200 rounded-md text-[13px] font-bold text-gray-500 hover:bg-gray-50 transition-all uppercase tracking-wide">
                  Cancelar
                </button>
                <button className="px-8 py-2.5 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2 uppercase tracking-wide">
                  Crear Departamento
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Moneda ---
export const Moneda = () => {
  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
        <LayoutDashboard className="w-3 h-3" />
        <span className="mx-1 text-gray-300">/</span>
        <span>Configuración</span>
        <span className="mx-1 text-gray-300">/</span>
        <span>Currency</span>
      </nav>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm p-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <h1 className="font-head text-[28px] font-bold text-navy leading-tight">Configuración de Moneda</h1>
          <button className="px-6 py-2.5 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" /> Agregar Moneda
          </button>
        </div>

        <div className="max-w-md space-y-2 mb-10">
          <label className="text-[13px] font-bold text-gray-600">Moneda Base</label>
          <div className="relative group">
            <select className="w-full appearance-none bg-white border border-gray-200 rounded-md px-4 py-2.5 text-[14px] text-gray-700 outline-none focus:ring-2 focus:ring-navy/5 focus:border-navy transition-all cursor-pointer">
              <option>MXN - Peso Mexicano</option>
              <option>USD - Dólar Estadounidense</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <p className="text-[12px] text-gray-400 font-medium">Los pagos en esta moneda no requerirán conversión</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px]">
            <thead className="bg-[#f9fafc] text-gray-400 font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Moneda</th>
                <th className="px-6 py-4">Activa</th>
                <th className="px-6 py-4">Requiere Conversión</th>
                <th className="px-6 py-4">Base</th>
                <th className="px-6 py-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="py-20 border-t border-gray-50 flex justify-end">
                  <button className="px-10 py-3 bg-navy text-white rounded-md text-[14px] font-bold hover:bg-navy-mid transition-all shadow-lg mr-6">
                    Guardar Configuración
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

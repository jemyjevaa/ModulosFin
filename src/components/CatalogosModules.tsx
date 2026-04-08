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
  Lock
} from "lucide-react";
import { cn } from "@/src/lib/utils";

// --- Proveedores ---
export const Proveedores = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Catálogo de Proveedores</h1>
          <p className="text-[13px] text-gray-500 mt-1">Gestión de socios comerciales y cumplimiento fiscal (REPSE)</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-2 bg-white border border-gray-300 rounded-md text-[13px] font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" /> Exportar
          </button>
          <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2">
            <Plus className="w-4 h-4" /> Nuevo proveedor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-head text-sm font-bold text-navy">Proveedores registrados</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                <input type="text" placeholder="Buscar por RFC o Razón Social..." className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-navy/10 w-64" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[12px]">
                <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-3">Razón Social</th>
                    <th className="px-6 py-3">RFC</th>
                    <th className="px-6 py-3">Giro</th>
                    <th className="px-6 py-3 text-center">REPSE</th>
                    <th className="px-6 py-3 text-center">Estatus</th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: "Refacciones del Norte SA", rfc: "RNO980415KL9", giro: "Refacciones", repse: "Vigente", status: "Activo", color: "teal" },
                    { name: "Transportes GDL", rfc: "TGDL120520XYZ", giro: "Logística", repse: "Vencido", status: "Activo", color: "red" },
                    { name: "Limpieza Total", rfc: "LTO050830ABC", giro: "Servicios", repse: "N/A", status: "Inactivo", color: "gray" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-navy">{row.name}</td>
                      <td className="px-6 py-4 font-mono font-medium text-gray-600">{row.rfc}</td>
                      <td className="px-6 py-4 text-gray-500">{row.giro}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest",
                          row.repse === "Vigente" ? "bg-teal-light text-teal" : row.repse === "Vencido" ? "bg-red-light text-red" : "bg-gray-100 text-gray-400"
                        )}>{row.repse}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest",
                          row.status === "Activo" ? "bg-blue-light text-navy" : "bg-gray-100 text-gray-400"
                        )}>{row.status}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 text-gray-400 hover:text-navy transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
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
              <h3 className="font-head text-sm font-bold text-navy">Nuevo proveedor</h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h4 className="text-[11px] font-bold text-navy uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> Datos fiscales
                </h4>
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">RFC <span className="text-red">*</span></label>
                    <input type="text" placeholder="ABC010101XYZ" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-mono focus:ring-2 focus:ring-navy/10 outline-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">Razón Social <span className="text-red">*</span></label>
                    <input type="text" placeholder="Nombre legal completo" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">Régimen Fiscal <span className="text-red">*</span></label>
                    <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                      <option>601 · General de Ley Personas Morales</option>
                      <option>626 · Régimen Simplificado de Confianza</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-100">
                <h4 className="text-[11px] font-bold text-navy uppercase tracking-widest flex items-center gap-2">
                  <CreditCard className="w-3.5 h-3.5" /> Datos bancarios
                </h4>
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">Banco <span className="text-red">*</span></label>
                    <select className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-2 focus:ring-navy/10 outline-none">
                      <option>BBVA México</option>
                      <option>Banamex</option>
                      <option>Santander</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">CLABE (18 dígitos) <span className="text-red">*</span></label>
                    <input type="text" placeholder="012345678901234567" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-mono focus:ring-2 focus:ring-navy/10 outline-none" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-gray-700">No. Cuenta</label>
                    <input type="text" placeholder="Opcional" className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-[13px] font-mono focus:ring-2 focus:ring-navy/10 outline-none" />
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-navy text-white rounded-md text-[14px] font-bold hover:bg-navy-mid transition-all shadow-sm">
                Registrar proveedor ↗
              </button>
            </div>
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
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20"
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
                          <input type="text" placeholder="Ej. Bus Men México S.A. de C.V." className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-gray-700">RFC <span className="text-red">*</span></label>
                          <input type="text" placeholder="BMM980415KL9" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] font-mono focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-gray-700">Nombre Comercial</label>
                          <input type="text" placeholder="Pit Path - Operaciones" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5 col-span-2">
                          <label className="text-[12px] font-bold text-gray-700">Régimen Fiscal <span className="text-red">*</span></label>
                          <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all">
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
                          <input type="text" placeholder="Av. Vallarta No. 1234" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-gray-700">Código Postal <span className="text-red">*</span></label>
                          <input type="text" placeholder="44110" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] font-mono focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-gray-700">Ciudad / Estado</label>
                          <input type="text" placeholder="Guadalajara, Jalisco" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-gray-700">Teléfono Contacto</label>
                          <input type="tel" placeholder="+52 33 1234 5678" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-bold text-gray-700">Correo Notificaciones</label>
                          <input type="email" placeholder="fiscal@busmen.mx" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
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
                        <input type="password" placeholder="••••••••••••" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-[14px] focus:ring-4 focus:ring-navy/5 outline-none transition-all" />
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
                    className="px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-[13px] font-bold text-gray-500 hover:text-navy hover:border-navy disabled:opacity-0 transition-all flex items-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" /> Anterior
                  </button>
                  <button 
                    onClick={() => {
                      if (step < 4) setStep(step + 1);
                      else setIsRegistering(false);
                    }}
                    className="px-8 py-2.5 bg-navy text-white rounded-xl text-[13px] font-bold hover:bg-navy-mid transition-all shadow-xl shadow-navy/20 flex items-center gap-2"
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
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-head text-[22px] font-bold text-navy leading-tight">Unidades (Vehículos)</h1>
          <p className="text-[13px] text-gray-500 mt-1">Control de flota, placas, números de serie y estatus operativo</p>
        </div>
        <button className="px-4 py-2 bg-navy text-white rounded-md text-[13px] font-bold hover:bg-navy-mid transition-all shadow-sm flex items-center gap-2">
          <Plus className="w-4 h-4" /> Nueva unidad
        </button>
      </div>

      <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="font-head text-sm font-bold text-navy">Inventario de flota</h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
            <input type="text" placeholder="Buscar por placa o ID..." className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-navy/10 w-64" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[12px]">
            <thead className="bg-gray-50 text-gray-500 font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3">ID Unidad</th>
                <th className="px-6 py-3">Placas</th>
                <th className="px-6 py-3">Modelo / Año</th>
                <th className="px-6 py-3">No. Serie (VIN)</th>
                <th className="px-6 py-3">Empresa</th>
                <th className="px-6 py-3 text-center">Estatus</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { id: "B1828", plates: "ABC-123-X", model: "Mercedes Benz Tourismo", year: "2026", vin: "WDB12345678901234", company: "Bus Men México", status: "En Ruta", color: "teal" },
                { id: "B2201", plates: "XYZ-987-A", model: "Mercedes Benz Tourismo", year: "2023", vin: "WDB98765432109876", company: "Bus Men México", status: "Taller", color: "red" },
                { id: "C0045", plates: "DEF-456-Y", model: "Toyota Hiace", year: "2025", vin: "JTD12345678901234", company: "Pitbus", status: "Disponible", color: "navy" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-black text-navy">{row.id}</td>
                  <td className="px-6 py-4 font-mono font-bold text-gray-700">{row.plates}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{row.model}</p>
                    <p className="text-[11px] text-gray-400">{row.year}</p>
                  </td>
                  <td className="px-6 py-4 font-mono text-gray-400">{row.vin}</td>
                  <td className="px-6 py-4 text-gray-500">{row.company}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest",
                      row.color === "teal" ? "bg-teal-light text-teal" : row.color === "red" ? "bg-red-light text-red" : "bg-blue-light text-navy"
                    )}>{row.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-navy hover:underline font-bold">Expediente</button>
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

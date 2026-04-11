import { motion } from "motion/react";
import {
  Package,
  Users,
  Truck
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { View } from "@/src/types";

import logoPP from "@/src/assets/logos/LogoPP1.png";

interface DashboardProps {
  setView: (v: View) => void;
}

export const Dashboard = ({ setView }: DashboardProps) => {
  const cards = [
    {
      title: "Suscripciones",
      description: "Gestiona tus suscripciones y pagos",
      icon: Package,
      iconColor: "text-navy",
      iconBg: "bg-navy-light",
      view: "suscripciones" as View,
    },
    {
      title: "Participantes",
      description: "Administra clientes y proveedores",
      icon: Users,
      iconColor: "text-teal",
      iconBg: "bg-teal-light",
      view: "participantes" as View,
    },
    {
      title: "Unidades",
      description: "Controla tus unidades y activos",
      icon: Truck,
      iconColor: "text-purple",
      iconBg: "bg-purple-light",
      view: "unidades" as View,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-140px)] py-4 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6 lg:mb-10"
      >
        <div className="flex justify-center mb-4 lg:mb-6">
          <img 
            src={logoPP} 
            alt="PitPath Logo" 
            className="h-32 sm:h-40 md:h-48 lg:h-52 xl:h-60 w-auto object-contain hover:scale-105 transition-transform duration-500" 
          />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-head font-black text-navy mb-1 sm:mb-2 tracking-tight uppercase">
          Bienvenido a PITPATH
        </h1>
        <div className="h-1 w-12 sm:w-16 lg:w-20 bg-amber transition-all duration-500 mx-auto mb-3 sm:mb-4 lg:mb-6 rounded-full" />
        <p className="text-[13px] sm:text-[14px] lg:text-[16px] text-gray-500 max-w-sm sm:max-w-md lg:max-w-xl mx-auto font-medium leading-relaxed">
          Sincroniza tus operaciones, gestiona suscripciones y controla activos
          desde una plataforma unificada impulsada por inteligencia artificial.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 w-full max-w-[1100px]">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            onClick={() => setView(card.view)}
            className="group relative bg-white p-5 lg:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Hover Decorator */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-navy-mid to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className={cn("w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-6 mx-auto transition-all duration-500 group-hover:rotate-6", card.iconBg)}>
              <card.icon className={cn("w-6 h-6 lg:w-8 lg:h-8", card.iconColor)} />
            </div>

            <h3 className="text-sm lg:text-lg font-head font-bold text-navy mb-1 lg:mb-3 uppercase tracking-wider">{card.title}</h3>
            <p className="text-[11px] lg:text-[14px] text-gray-500 font-medium leading-relaxed">
              {card.description}
            </p>

            <div className="mt-3 lg:mt-6 flex items-center justify-center gap-2 text-[10px] font-bold text-navy opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">
              Gestionar <span className="text-lg">→</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-8 lg:mt-16 text-[9px] lg:text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]"
      >
        Portal de Gestión Integral · PitPath ERP v2.0
      </motion.p>
    </div>
  );
};

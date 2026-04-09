import { motion } from "motion/react";
import {
  ShieldCheck,
  Package,
  Users,
  Truck
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { View } from "@/src/types";

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
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14"
      >
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-sm border border-gray-100 relative group">
          <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity" />
          <ShieldCheck className="w-12 h-12 text-navy" />
        </div>
        <h1 className="text-4xl lg:text-5xl font-head font-black text-navy mb-4 tracking-tight uppercase">
          Bienvenido al ERP
        </h1>
        <div className="h-1 w-20 bg-amber transition-all duration-500 mx-auto mb-6 rounded-full" />
        <p className="text-[16px] text-gray-500 max-w-xl mx-auto font-medium leading-relaxed">
          Sincroniza tus operaciones, gestiona suscripciones y controla activos
          desde una plataforma unificada impulsada por inteligencia artificial.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1100px]">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            onClick={() => setView(card.view)}
            className="group relative bg-white p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Hover Decorator */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-navy-mid to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto transition-all duration-500 group-hover:rotate-6", card.iconBg)}>
              <card.icon className={cn("w-8 h-8", card.iconColor)} />
            </div>

            <h3 className="text-xl font-head font-bold text-navy mb-3 uppercase tracking-wider">{card.title}</h3>
            <p className="text-[14px] text-gray-500 font-medium leading-relaxed">
              {card.description}
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-[11px] font-bold text-navy opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">
              Gestionar <span className="text-lg">→</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-20 text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]"
      >
        Portal de Gestión Integral · PitPath ERP v2.0
      </motion.p>
    </div>
  );
};

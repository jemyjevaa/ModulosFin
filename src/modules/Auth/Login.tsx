import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";
import { cn } from '../../lib/utils';

interface LoginProps {
  onLogin: () => void;
}

const phrases = [
  "Donde los datos se convierten en estrategia.",
  "Gestiona con claridad, decide con precisión.",
  "Tu ecosistema operativo, listo.",
  "Hagamos que hoy sea eficiente.",
  "Gestión sin fricciones.",
  "Finanzas en movimiento.",
  "Tu negocio, simplificado.",
  "Evolución operativa."
];

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(() => 
    Math.floor(Math.random() * phrases.length)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1000);
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center flex font-sans overflow-hidden" 
      style={{ backgroundImage: "url('/src/assets/backgrounds/Login.png')" }}
    >
      {/* Left Pane - Hero Text Carousel */}
      <div className="hidden lg:flex lg:w-[60%] items-center justify-center p-16 relative">
        <div className="max-w-xl w-full h-40 flex items-center">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={currentPhraseIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-white text-5xl xl:text-6xl font-bold leading-[1.15]"
            >
              {phrases[currentPhraseIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="w-full lg:w-[40%] flex flex-col p-8 md:p-16 relative">
        {/* Logo Section */}
        <div className="flex justify-end mb-12 lg:mb-24">
          <img 
            src="/src/assets/logos/PPLarge.png" 
            alt="PitPath Logo" 
            className="h-20 md:h-24 object-contain"
          />
        </div>

        {/* Login Form Container */}
        <div className="flex-1 flex flex-col justify-center max-w-[420px] mx-auto w-full">
          <div className="mb-10">
            <h2 className="text-3xl md:text-3xl font-bold text-[#2D2D2D] mb-2 tracking-tight">
              Hola de nuevo, Jessica 
            </h2>
            <p className="text-lg text-[#555555] font-normal">
              Bienvenid@ de vuelta
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-[#A0A0A0]" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
                className="block w-full pl-12 pr-4 py-4 border border-[#E0E0E0] rounded-full bg-white text-gray-900 placeholder-[#A0A0A0] focus:ring-2 focus:ring-[#b09553] focus:border-transparent transition-all outline-none text-base"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-[#A0A0A0]" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="block w-full pl-12 pr-12 py-4 border border-[#E0E0E0] rounded-full bg-white text-gray-900 placeholder-[#A0A0A0] focus:ring-2 focus:ring-[#b09553] focus:border-transparent transition-all outline-none text-base"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-5 flex items-center text-[#A0A0A0] hover:text-[#b09553] transition-colors"
                title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full bg-[#b09553] hover:bg-[#9a8248] text-white py-4 rounded-full font-semibold text-base transition-all shadow-lg active:scale-[0.99] disabled:opacity-70 mt-4",
                isLoading && "cursor-not-allowed"
              )}
            >
              {isLoading ? "Cargando..." : "Iniciar sesión"}
            </button>

            <div className="text-center mt-6">
              <a href="#" className="text-sm font-medium text-[#707070] hover:text-[#b09553] transition-colors">
                Olvidé mi contraseña
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


import { Menu, Search, Bell, Settings, LogOut } from "lucide-react";

interface HeaderProps {
  toggleSidebar: () => void;
  title: string;
  onLogout?: () => void;
}

export const Header = ({ toggleSidebar, title, onLogout }: HeaderProps) => {
  return (
    <header className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-30 shrink-0">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="font-head text-[17px] font-bold text-navy tracking-tight">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center bg-gray-100 border border-gray-200 rounded-md px-3 py-1.5 w-[200px] gap-2 cursor-text group focus-within:ring-2 focus-within:ring-navy/10 focus-within:border-navy transition-all">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar en el sistema..."
            className="bg-transparent border-none focus:ring-0 text-[13px] p-0 w-full text-gray-700 placeholder:text-gray-500"
          />
        </div>

        <button className="w-[34px] h-[34px] flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors relative group">
          <Bell className="w-4 h-4 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red rounded-full border-2 border-white"></span>
        </button>

        <button className="w-[34px] h-[34px] flex items-center justify-center bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
          <Settings className="w-4 h-4 text-gray-600" />
        </button>

        {onLogout && (
          <button 
            onClick={onLogout}
            className="w-[34px] h-[34px] flex items-center justify-center bg-red-light border border-red/20 rounded-md hover:bg-red/10 transition-colors group"
            title="Cerrar Sesión"
          >
            <LogOut className="w-4 h-4 text-red transition-transform group-hover:translate-x-0.5" />
          </button>
        )}
      </div>
    </header>
  );
};

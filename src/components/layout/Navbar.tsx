import { Bell, ChevronDown, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="glass-card border-b border-gold/20 px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold via-gold-light to-gold-dark flex items-center justify-center shadow-lg">
              <span className="font-display font-bold text-background text-lg">N</span>
            </div>
            <span className="font-display font-bold text-xl gold-text">NeoPay</span>
          </div>

          {/* Main Nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavItem label="Overview" icon="grid" />
            <NavItem label="Escrow & Blocks" icon="blocks" active />
            <NavItem label="Billing" icon="receipt" />
            <NavItem label="Analytics" icon="chart" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search credits..."
              className="bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground w-32"
            />
          </div>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-gold">
            <Bell className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-gold">
            <Settings className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-info to-cosmic-purple flex items-center justify-center border-2 border-gold/40">
              <span className="text-sm font-semibold">JD</span>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ label, icon, active = false }: { label: string; icon: string; active?: boolean }) => {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
        active
          ? "bg-gold/20 text-gold border border-gold/40"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
      }`}
    >
      {icon === "grid" && <span className="text-base">⊞</span>}
      {icon === "blocks" && <span className="text-base">🔲</span>}
      {icon === "receipt" && <span className="text-base">📋</span>}
      {icon === "chart" && <span className="text-base">📈</span>}
      {label}
    </button>
  );
};

export default Navbar;

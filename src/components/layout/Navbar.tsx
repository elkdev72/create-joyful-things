import { Bell, ChevronDown, Search, Settings, LayoutGrid, Layers, Receipt, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const blockTabs = [
  { id: "4.1", label: "Care Block Credits", description: "Healthcare Support" },
  { id: "4.2", label: "School Year License Credits", description: "Annual License" },
  { id: "4.3", label: "School FOMO Block Credits", description: "Contest Block" },
  { id: "4.4", label: "SkillLab AR/VR Block Credits", description: "AR/VR Education" },
  { id: "4.5", label: "DroneShow / Media Block Credits", description: "Media Events" },
  { id: "4.6", label: "Collectible FOMO Block Credits", description: "Collectibles" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("escrow");
  const [activeBlock, setActiveBlock] = useState("4.1");

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

          {/* Main Nav - Clickable Tabs */}
          <div className="hidden md:flex items-center">
            <NavItem 
              label="Overview" 
              icon={<LayoutGrid className="w-4 h-4" />} 
              active={activeTab === "overview"}
              onClick={() => setActiveTab("overview")}
            />
            
            {/* Escrow & Blocks with Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`relative flex items-center gap-2 px-5 py-3 transition-all duration-300 font-medium text-sm border-b-2 ${
                    activeTab === "escrow"
                      ? "text-gold border-gold bg-gold/5"
                      : "text-muted-foreground border-transparent hover:text-foreground hover:border-gold/30 hover:bg-muted/20"
                  }`}
                  onClick={() => setActiveTab("escrow")}
                >
                  <Layers className="w-4 h-4" />
                  Escrow & Blocks
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass-card border-gold/30 w-72">
                {blockTabs.map((block) => (
                  <DropdownMenuItem
                    key={block.id}
                    className={`flex flex-col items-start gap-0.5 cursor-pointer py-3 ${
                      activeBlock === block.id ? "bg-gold/10 text-gold" : ""
                    }`}
                    onClick={() => {
                      setActiveBlock(block.id);
                      setActiveTab("escrow");
                    }}
                  >
                    <span className="font-medium">Tab {block.id} – {block.label}</span>
                    <span className="text-xs text-muted-foreground">{block.description}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavItem 
              label="Billing" 
              icon={<Receipt className="w-4 h-4" />}
              active={activeTab === "billing"}
              onClick={() => setActiveTab("billing")}
            />
            <NavItem 
              label="Analytics" 
              icon={<BarChart3 className="w-4 h-4" />}
              active={activeTab === "analytics"}
              onClick={() => setActiveTab("analytics")}
            />
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

const NavItem = ({ 
  label, 
  icon, 
  active = false, 
  onClick 
}: { 
  label: string; 
  icon: React.ReactNode; 
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-2 px-5 py-3 transition-all duration-300 font-medium text-sm border-b-2 ${
        active
          ? "text-gold border-gold bg-gold/5"
          : "text-muted-foreground border-transparent hover:text-foreground hover:border-gold/30 hover:bg-muted/20"
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default Navbar;

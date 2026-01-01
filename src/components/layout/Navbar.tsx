import { Bell, ChevronDown, Search, Settings, Heart, GraduationCap, Trophy, Glasses, Plane, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const blockTabs = [
  { id: "4.1", label: "Care Block", icon: Heart },
  { id: "4.2", label: "School License", icon: GraduationCap },
  { id: "4.3", label: "FOMO Block", icon: Trophy },
  { id: "4.4", label: "AR/VR Block", icon: Glasses },
  { id: "4.5", label: "Media Block", icon: Plane },
  { id: "4.6", label: "Collectibles", icon: Sparkles },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("4.1");

  return (
    <div className="sticky top-0 z-50">
      {/* Main Navbar with Logo */}
      <nav className="glass-card border-b border-gold/20 px-6 py-3">
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold via-gold-light to-gold-dark flex items-center justify-center shadow-lg">
              <span className="font-display font-bold text-background text-lg">N</span>
            </div>
            <span className="font-display font-bold text-xl gold-text">NeoPay</span>
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

      {/* Tab Bar - 6 Block Tabs */}
      <div className="bg-background/60 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-[1800px] mx-auto flex items-center justify-center">
          <div className="flex items-center">
            {blockTabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-3 transition-all duration-300 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-gold border-gold bg-gold/5"
                      : "text-muted-foreground border-transparent hover:text-foreground hover:border-gold/30 hover:bg-muted/20"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

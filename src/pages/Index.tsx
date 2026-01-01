import { useState } from "react";
import cosmicBg from "@/assets/cosmic-bg.jpg";
import Navbar from "@/components/layout/Navbar";
import CareBlockTab from "@/components/tabs/CareBlockTab";
import SchoolLicenseTab from "@/components/tabs/SchoolLicenseTab";
import FOMOBlockTab from "@/components/tabs/FOMOBlockTab";
import ARVRBlockTab from "@/components/tabs/ARVRBlockTab";
import MediaBlockTab from "@/components/tabs/MediaBlockTab";
import CollectiblesTab from "@/components/tabs/CollectiblesTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState("4.1");

  const renderTabContent = () => {
    switch (activeTab) {
      case "4.1": return <CareBlockTab />;
      case "4.2": return <SchoolLicenseTab />;
      case "4.3": return <FOMOBlockTab />;
      case "4.4": return <ARVRBlockTab />;
      case "4.5": return <MediaBlockTab />;
      case "4.6": return <CollectiblesTab />;
      default: return <CareBlockTab />;
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `url(${cosmicBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="min-h-screen bg-background/60 backdrop-blur-[2px]">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="px-4 md:px-6 py-6 max-w-[1800px] mx-auto">
          {renderTabContent()}
        </main>

        <footer className="px-6 py-4 text-center text-muted-foreground text-sm border-t border-gold/10 mt-8">
          <p>Powered by <span className="text-gold font-display">NeoPay</span> · Verified & insured by NeoTrust™</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

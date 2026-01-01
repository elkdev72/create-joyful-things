import cosmicBg from "@/assets/cosmic-bg.jpg";
import Navbar from "@/components/layout/Navbar";
import SubHeader from "@/components/layout/SubHeader";
import PrimaryCareBlock from "@/components/blocks/PrimaryCareBlock";
import LicenseBlock from "@/components/blocks/LicenseBlock";
import SponsorSlot from "@/components/blocks/SponsorSlot";
import RecentUnlocks from "@/components/blocks/RecentUnlocks";
import LiveMetrics from "@/components/metrics/LiveMetrics";
import ProofCompliance from "@/components/metrics/ProofCompliance";
import ActivityPanel from "@/components/metrics/ActivityPanel";
import AIStatus from "@/components/metrics/AIStatus";
import StatusBadges from "@/components/metrics/StatusBadges";

const Index = () => {
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
      {/* Overlay for better readability */}
      <div className="min-h-screen bg-background/60 backdrop-blur-[2px]">
        <Navbar />
        <SubHeader />
        
        <main className="px-4 md:px-6 py-6 max-w-[1600px] mx-auto">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="font-display font-bold text-2xl md:text-3xl gold-text mb-2">
              Tab 4.1 – Care Block Credits
            </h1>
            <p className="text-muted-foreground">
              Allocate credits to care initiatives.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column - Primary Care Block */}
            <div className="lg:col-span-4">
              <PrimaryCareBlock />
            </div>

            {/* Middle Column - License Blocks & Unlocks */}
            <div className="lg:col-span-4 space-y-6">
              <LicenseBlock
                title="Annual License"
                subtitle="School Year Credits"
                goal={10000}
                status="1.2M credits × € 2.5M"
                value="€2.5M"
                locked={true}
                urgency="114,09 INOCKED"
              />
              
              <LicenseBlock
                title="School FOMO Block"
                subtitle="Youth Plush Event"
                goal={10000}
                status="€750K Demo"
                value="€750K"
                urgency="ONLY 2 LEFT TOMORROW"
              />

              <RecentUnlocks />
            </div>

            {/* Right Column - Sponsor & Metrics */}
            <div className="lg:col-span-4 space-y-6">
              <StatusBadges />
              <SponsorSlot />
              <LiveMetrics />
              <ActivityPanel />
              <ProofCompliance />
              <AIStatus />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-4 text-center text-muted-foreground text-sm border-t border-gold/10 mt-8">
          <p>Powered by <span className="text-gold font-display">NeoPay</span> · Verified & insured by NeoTrust™</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

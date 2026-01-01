import { Heart, Clock, Lock, CheckCircle2, Shield, Users, Award, Globe, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CareBlockTab = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-display font-bold gold-text">Tab 4.1 – Care Block Credits</h1>
        <p className="text-muted-foreground mt-1">Allocate credits to care initiatives.</p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Primary Care Block */}
        <div className="glass-card p-6 rounded-2xl border border-gold/30 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" />
              <span className="font-display font-bold text-gold">PRIMARY CARE BLOCK</span>
            </div>
            <span className="text-info font-mono">01:46:12</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Care Block Credits</h3>
              <p className="text-sm text-muted-foreground">Healthcare Support</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Block Value:</span>
              <span className="font-bold gold-text text-xl">€2,500,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Credits Required:</span>
              <span className="font-semibold">10,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Credit Value:</span>
              <span className="font-semibold">€250</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-gold" />
            <span>4 Hour Exclusive Window</span>
            <span className="ml-auto font-mono bg-background/50 px-2 py-1 rounded">01:46:12</span>
          </div>

          <div className="flex items-center gap-2 text-gold text-sm">
            <Award className="w-4 h-4" />
            <span className="font-semibold">OPEN FOR CLAIM</span>
            <span className="ml-auto text-muted-foreground">01:46:12 remaining</span>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span><strong>10,000</strong> VoiceSlogans · 1 CareTV Episode</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Full Audit Proof</span>
              <Shield className="w-4 h-4 text-gold ml-1" />
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>10,000 credits × €250 = €2.5M</span>
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-gold to-gold-light text-background font-bold">
            <Lock className="w-4 h-4 mr-2" />
            CLAIM EXCLUSIVE CARE BLOCK
          </Button>
          <p className="text-xs text-center text-muted-foreground">Locks out all other sponsors</p>

          <div className="flex items-center justify-center gap-4 pt-2 border-t border-gold/20 text-xs text-muted-foreground">
            <span>7 Layer Text ACTIVE</span>
            <span>7 Layer Proof ACTIVE</span>
            <span>+ Audit + Hash</span>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-4">
          {/* Annual License Card */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <div>
                  <h4 className="font-bold">Annual License</h4>
                  <p className="text-xs text-muted-foreground">School Year Credits</p>
                </div>
              </div>
              <span className="bg-info/20 text-info text-xs px-2 py-1 rounded-full">114,09 INOCKED</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-sm">Unlock Goal: <strong>10,000</strong></p>
                <p className="text-sm">Status: 1.2M credits × €2.5M</p>
              </div>
              <div className="w-16 h-12 bg-gradient-to-br from-green-400 to-yellow-400 rounded-lg" />
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded flex items-center gap-1">
                <Lock className="w-3 h-3" /> UNLOCKED ON CLAIM
              </span>
              <Button size="sm" className="ml-auto bg-info hover:bg-info/80">
                Claim School Block
              </Button>
            </div>
          </div>

          {/* School FOMO Block Card */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-cosmic-purple/30 rounded flex items-center justify-center text-xs font-bold">FOMO</div>
                <div>
                  <h4 className="font-bold">School FOMO Block</h4>
                  <p className="text-xs text-muted-foreground">Youth Flash Event</p>
                </div>
              </div>
              <span className="bg-warning/20 text-warning text-xs px-2 py-1 rounded-full">ONLY 2 LEFT TOMORROW</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-sm">Unlock Goal: <strong>10,000</strong></p>
                <p className="text-sm">Status: €750K Demo</p>
              </div>
              <div className="w-16 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg" />
            </div>
            <div className="flex items-center gap-2 mt-3 text-xs">
              <span className="bg-muted px-2 py-1 rounded">PROOF ID: ABC1234</span>
              <span className="bg-success/20 text-success px-2 py-1 rounded flex items-center gap-1">
                <Lock className="w-3 h-3" /> Locked
              </span>
              <Button size="sm" variant="outline" className="ml-auto border-gold/30 text-gold">
                Assign to Block
              </Button>
            </div>
          </div>

          {/* Recent Unlocks */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-3">Recent Unlocks</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-warning" />
                <span>School FOMO Block – <strong>1,000</strong> Unlocked</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-warning" />
                <span>Annual License – <strong>1,000</strong> Unlocked</span>
              </div>
            </div>
          </div>

          {/* Proof References */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-3">Proof References</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-warning" />
                <span>School FOMO Block – <strong>1,000</strong> Unlocked</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-warning" />
                <span>Annual License – <strong>1,000</strong> Unlocked</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Exclusive Sponsor Slot */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-3"><span className="text-gold">EXCLUSIVE</span> SPONSOR SLOT</h4>
            <div className="bg-muted/50 rounded-lg p-6 text-center mb-4">
              <span className="text-lg font-bold text-muted-foreground">YOUR LOGO</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Industry: <strong className="text-foreground">Insurance · Bank · Health</strong> categories
            </p>
            <p className="text-sm text-muted-foreground mb-4">Powered by: <strong className="text-gold">NeoPay × NeoCare</strong></p>
            
            <div className="bg-cosmic-purple/20 rounded-lg h-24 mb-4 flex items-center justify-center">
              <Globe className="w-12 h-12 text-cosmic-purple/50" />
            </div>
            
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-bold">2,941</span>
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> 62</span>
              <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 903</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <strong>903</strong> Care Moments Logged
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <span className="bg-success/20 text-success px-2 py-1 rounded">AUDIT READY / GDPR Compliant</span>
            </div>
          </div>

          {/* Proof & Compliance */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-3">Proof & Compliance</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span><strong>Verified:</strong> DEF5678</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span><strong>PROOF ID:</strong> ABC1234</span>
              </div>
            </div>
            <div className="mt-3 p-2 bg-muted/30 rounded text-xs">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold" />
                <span>PROOF ID: ABC1234 ← ENSISERE + </span>
              </div>
              <p className="text-muted-foreground mt-1">Proof includes UID, Time, Location, Sponsor Hash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareBlockTab;

import { Trophy, Clock, Lock, CheckCircle2, Shield, Users, FileText, Eye, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const FOMOBlockTab = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-display font-bold gold-text">Tab 4.3 – School FOMO Block Credits</h1>
        <p className="text-muted-foreground mt-1">
          Limited-time FOMO contest block for 1 school · Winner earns a <strong>€1,000</strong> payout · Escrow & Proof included.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left/Center - Main Block */}
        <div className="lg:col-span-2 space-y-4">
          {/* Time Remaining Banner */}
          <div className="glass-card px-4 py-2 rounded-xl border border-gold/30 flex items-center gap-3">
            <Clock className="w-5 h-5 text-gold" />
            <span className="text-muted-foreground">TIME REMAINING:</span>
            <span className="font-mono font-bold text-info text-lg">3 HOURS 11 MINUTES</span>
          </div>

          {/* Main FOMO Block */}
          <div className="glass-card p-6 rounded-2xl border border-gold/30 space-y-5">
            <div className="flex items-center gap-4">
              <Trophy className="w-10 h-10 text-gold" />
              <div>
                <h2 className="font-display font-bold text-xl">
                  <span className="gold-text">SCHOOL FOMO BLOCK</span>
                  <span className="text-muted-foreground ml-2">| SPONSOR CONTEST</span>
                </h2>
                <p className="text-muted-foreground">≈ €750K campaign value</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-gold" />
                  <span>Unlock Goal: <strong>10,000</strong> ProofCredits goal</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>78.6% Complete</span>
                  </div>
                  <Progress value={78.6} className="h-3 bg-muted" />
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-gold" />
                  <span><strong>7,861 / 10,000</strong> Actions Logged · 78.6% Complete</span>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span><strong>FOMO Contest Window:</strong> 7K+ actions logged in 4 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <span><strong>Verifiable Proof System:</strong> 7-Layer Proof · Escrow ACTIVE</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm py-3 border-y border-gold/20">
                  <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> Unlock</span>
                  <span>–</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> School Actions</span>
                  <span>–</span>
                  <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> Proof</span>
                  <span>–</span>
                  <span>★</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-24 bg-gradient-to-br from-orange-400 via-yellow-400 to-green-400 rounded-lg shadow-lg" />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-gold to-gold-light text-background px-3 py-1 rounded-lg text-sm font-bold">
                    WIN €1,000 CASH PRIZE
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button className="flex-1 bg-gradient-to-r from-gold to-gold-light text-background font-bold py-5">
                ASSIGN SCHOOL FOMO BLOCK
              </Button>
              <Button variant="outline" className="border-gold/30 text-gold">
                View Contest Terms
              </Button>
            </div>
          </div>

          {/* Bottom Cards Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Promo Vending Tools */}
            <div className="glass-card p-4 rounded-xl border border-gold/20">
              <h4 className="font-bold mb-3">Promo Vending Tools</h4>
              <div className="bg-muted/30 rounded-lg p-3 mb-2">
                <p className="text-xs text-muted-foreground">Promo Capsules</p>
                <p className="font-bold text-lg gold-text">Win €100</p>
                <p className="text-sm">7,611 Circases</p>
                <p className="text-xs text-muted-foreground">7617 Capsules</p>
              </div>
              <div className="text-xs bg-muted/20 px-2 py-1 rounded">
                Proof ID: SCH-7D-B26A
              </div>
            </div>

            {/* Escrow & Proof Tracking */}
            <div className="glass-card p-4 rounded-xl border border-gold/20">
              <h4 className="font-bold mb-3">Escrow & Proof Tracking</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span><strong>Proof status:</strong> Locked</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span><strong>Last Proof ID:</strong> SCH-7D-B26C</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span>Compatible Proof ID Log</span>
                </div>
              </div>
            </div>

            {/* Campaign Highlights */}
            <div className="glass-card p-4 rounded-xl border border-gold/20">
              <h4 className="font-bold mb-3">Campaign Highlights</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold" />
                  <span>Actions logged: <strong>7.8K</strong> Prooffixes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gold" />
                  <span>Students engaged: <strong>650+</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-gold" />
                  <span>Demoing AR/VR lesson Demo</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI MVP */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-2">AI (MVP):</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span><strong>Status mapping:</strong> FOMO timer & triggers, Proof & escrow badges</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Status Badges */}
          <div className="flex items-center gap-2 justify-end flex-wrap">
            <span className="glass-card px-3 py-1.5 rounded-full text-xs flex items-center gap-1 border border-gold/20">
              <Lock className="w-3 h-3" /> Escrow Enabled
            </span>
            <span className="glass-card px-3 py-1.5 rounded-full text-xs flex items-center gap-1 border border-gold/20">
              <Shield className="w-3 h-3" /> 7 Layer Proof
            </span>
          </div>

          {/* Live Metrics */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-4">LIVE METRICS <span className="text-muted-foreground font-normal">(DEMO)</span></h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Schools licensed:</span>
                <span className="font-bold">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Students covered:</span>
                <span className="font-bold gold-text">0 - 1,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Actions logged:</span>
                <span className="font-bold gold-text">0 - 10,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trust Score:</span>
                <span className="font-bold"><span className="gold-text">9.4</span> / 10</span>
              </div>
            </div>
          </div>

          {/* Recent Contest Activity */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-3">Recent Contest Activity</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>FOMO campaign</span>
                </div>
                <Eye className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>FOMO timer & triggers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4" />
                <span>(geen extra AI ontwikkeling)</span>
              </div>
            </div>
          </div>

          {/* Contest Metrics */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-3">Contest Metrics</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                <span>Live Status: <strong>Active</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                <span>FOMO Timer & triggers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                <span>Proof & escrow badges</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4" />
                <span>(geen extra AI ontwikkeling)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FOMOBlockTab;

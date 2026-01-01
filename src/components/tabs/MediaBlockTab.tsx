import { Plane, Lock, CheckCircle2, Shield, Users, FileText, Eye, Award, MapPin, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const MediaBlockTab = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-display font-bold gold-text">Tab 4.5 – DroneShow / Media Block Credits</h1>
        <p className="text-muted-foreground mt-1">
          Take over the sky with drone-powered entertainment · FOMO-friendly event: Escrow & Proof included.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left/Center - Main Block */}
        <div className="lg:col-span-2 space-y-4">
          {/* Main Media Block */}
          <div className="glass-card p-6 rounded-2xl border border-gold/30 space-y-5">
            <div className="flex items-center gap-2 text-sm">
              <Plane className="w-5 h-5 text-gold" />
              <span className="font-bold text-gold">DRONESHOW / MEDIA BLOCK</span>
              <span className="text-muted-foreground">| SPONSOR A</span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-orange-500 flex items-center justify-center">
                    <Plane className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl gold-text">DRONESHOW / MEDIA BLOCK</h2>
                    <p className="text-muted-foreground text-sm">≈ <strong>€750K</strong> sponsor value · 4-hour FOMO window</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>1 selected city · 1 chosen event</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gold" />
                    <span><strong>600+</strong> students on site · priority FOMO time slot</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center relative">
                <div className="w-48 h-32 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-20" />
                  <div className="text-center">
                    <Trophy className="w-12 h-12 text-gold mx-auto mb-1" />
                    <span className="text-gold font-bold text-lg">WINNER</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Flow */}
            <div className="flex items-center justify-center gap-3 text-sm py-3 border-y border-gold/20 flex-wrap">
              <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> UNLOCK</span>
              <span>→</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> ACTIONS</span>
              <span>→</span>
              <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> PROOF</span>
              <span>→</span>
              <span className="flex items-center gap-1"><Award className="w-4 h-4" /> PAYOUT / MEDIA</span>
            </div>

            <Button className="w-full bg-gradient-to-r from-gold to-gold-light text-background font-bold py-5">
              ASSIGN TO BLOCK
            </Button>
          </div>

          {/* Bottom Cards Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Execution Impact */}
            <div className="glass-card p-4 rounded-xl border border-gold/20">
              <h4 className="font-bold mb-3 text-sm">EXECUTION IMPACT</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4 text-gold" />
                  <span>Explosive Drone Show</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-gold" />
                  <span>Live Media Moment</span>
                </div>
              </div>
            </div>

            {/* Escrow & Proof Tracking */}
            <div className="glass-card p-4 rounded-xl border border-gold/20">
              <h4 className="font-bold mb-3 text-sm">ESCROW & PROOF TRACKING</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span><strong>Proof status:</strong> Locked</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span><strong>Last Proof ID:</strong> SCH-7D-G27A</span>
                </div>
              </div>
            </div>

            {/* Event Set-Up */}
            <div className="glass-card p-4 rounded-xl border border-gold/20">
              <h4 className="font-bold mb-3 text-sm">EVENT SET-UP</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>Safety Checks Passed</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span><strong>Last FAA ID:</strong> FAA-62913-CK</span>
                </div>
              </div>
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
                <span className="font-bold gold-text">600+ <span className="text-muted-foreground font-normal">on site</span></span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Actions logged:</span>
                <span className="font-bold gold-text">6,000+ <span className="text-muted-foreground font-normal">ignitions</span></span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trust Score:</span>
                <span className="font-bold"><span className="gold-text">9.4</span> / 10</span>
              </div>
            </div>
          </div>

          {/* Proof Status */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-3">PROOF STATUS</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-muted-foreground" />
                  <span>Locked</span>
                </div>
                <span className="text-muted-foreground">Locked</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <span><strong>Last Proof ID:</strong> SCH-7D-G27A</span>
              </div>
            </div>
          </div>

          {/* Recent Media Activity */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-3">RECENT MEDIA ACTIVITY</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span>Live Status: <strong>Active</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>7-Layer Proof: Verifiable</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span>FOMO ignition Rate: <strong>85+%</strong></span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mt-2">
                <Eye className="w-4 h-4" />
                <span>(geen extra AI ontwikkeling)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBlockTab;

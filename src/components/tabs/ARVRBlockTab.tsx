import { Glasses, Lock, CheckCircle2, Shield, Users, FileText, Eye, Award, Sparkles, BarChart3, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const ARVRBlockTab = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-display font-bold gold-text">Tab 4.4 – SkillLab AR/VR Block Credits</h1>
        <p className="text-muted-foreground mt-1">
          Immerse students with real-world AR/VR education programs: FOMO-friendly contest · Escrow & Proof included.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left/Center - Main Block */}
        <div className="lg:col-span-2 space-y-4">
          {/* Main AR/VR Block */}
          <div className="glass-card p-6 rounded-2xl border border-gold/30 space-y-5">
            <div className="flex items-center gap-2 text-sm">
              <Glasses className="w-5 h-5 text-gold" />
              <span className="font-bold text-gold">SKILLLAB AR/VR Block</span>
              <span className="text-muted-foreground">| SPONSOR A</span>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-purple-600 flex items-center justify-center">
                    <Glasses className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl gold-text">SKILLLAB AR/VR BLOCK</h2>
                    <p className="text-muted-foreground text-sm">≈ €1,25M sponsor value · <strong>5,000</strong> EduCreds unlock</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold flex items-center gap-2">
                    <Users className="w-4 h-4 text-gold" />
                    School Participation:
                  </h4>
                  <ul className="space-y-1 text-sm pl-6">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-cosmic-purple" />
                      Immersive SkillLab demo
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-cosmic-purple" />
                      AR/VR classroom experiences
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-cosmic-purple" />
                      AR/VR hardware support
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-cosmic-purple" />
                      AI Proof tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <BarChart3 className="w-3 h-3 text-cosmic-purple" />
                      Live leaderboard rankings
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-36 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-400 rounded-xl flex items-center justify-center">
                    <Glasses className="w-16 h-16 text-white/80" />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center justify-center gap-4 text-sm py-3 border-y border-gold/20">
              <span className="flex items-center gap-1 cursor-pointer hover:text-gold transition-colors">
                <Glasses className="w-4 h-4" /> Start AR/VR Lesson
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 cursor-pointer hover:text-gold transition-colors">
                <Trophy className="w-4 h-4" /> Leaderboard
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 cursor-pointer hover:text-gold transition-colors">
                <Award className="w-4 h-4" /> FOMO Contest
              </span>
              <span>·</span>
            </div>

            <div className="flex items-center gap-4">
              <Button className="flex-1 bg-gradient-to-r from-gold to-gold-light text-background font-bold py-5">
                ACTIVATE AR/VR BLOCK
              </Button>
              <Button variant="outline" className="border-gold/30 text-gold">
                View Block Details
              </Button>
            </div>
          </div>

          {/* Bottom Cards Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Immersive Upside */}
            <div className="glass-card p-4 rounded-xl border border-gold/20">
              <h4 className="font-bold mb-3">Immersive Upside</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Glasses className="w-4 h-4 text-gold" />
                  <span>High-impact AR/VR lesson</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-gold" />
                  <span>+75 ProofActions</span>
                </div>
              </div>
            </div>

            {/* Built-In Escrow & Proof */}
            <div className="glass-card p-4 rounded-xl border border-gold/20">
              <h4 className="font-bold mb-3">Built-In Escrow & Proof</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span><strong>Proof status:</strong> Locked</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span><strong>Last Proof ID:</strong> SCH-7D-B14C</span>
                </div>
              </div>
            </div>

            {/* FOMO Contest Setup */}
            <div className="glass-card p-4 rounded-xl border border-gold/20">
              <h4 className="font-bold mb-3">FOMO Contest Setup</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-gold" />
                  <span>Week-Long Leaderboard FOMO</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-gold" />
                  <span>€1,000 payout escrowed</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI MVP */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-2">AI (MVP):</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span><strong>Status mapping:</strong> AR/VR proof logic, FOMO contest API hooks</span>
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
                <span className="font-bold gold-text">0 - 500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Actions logged:</span>
                <span className="font-bold gold-text">0 - 5,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trust Score:</span>
                <span className="font-bold"><span className="gold-text">9.4</span> / 10</span>
              </div>
            </div>
          </div>

          {/* Recent Block Activity */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-3">Recent Block Activity</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>SkillLab demo activated</span>
                </div>
                <Eye className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>FOMO proof logic.</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4" />
                <span>(geen extra AI ontwikkeling)</span>
              </div>
            </div>
          </div>

          {/* Campaign Metrics */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-3">Campaign Metrics</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                <span>Live Status: <strong>Active</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                <span>Foot Traffic: <strong>400+</strong> today</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                <span>AR/VR Proofs: <strong>360+</strong> demos logged</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                <span>Trust <strong>+72+%</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARVRBlockTab;

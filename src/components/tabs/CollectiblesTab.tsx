import { Sparkles, Lock, CheckCircle2, Shield, Eye, Zap, Star, FileText, MoreHorizontal } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const CollectiblesTab = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-display font-bold gold-text">Tab 4.6 – Collectible FOMO Block Credits</h1>
        <p className="text-muted-foreground mt-1">
          Limited edition collectibles contest · Escrow & Proofs included · Tab
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left/Center - Main Block */}
        <div className="lg:col-span-2 space-y-4">
          {/* Main Collectible Block */}
          <div className="glass-card p-6 rounded-2xl border border-gold/30 space-y-5">
            <div className="grid grid-cols-2 gap-8">
              {/* Left - Progress Ring */}
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Outer ring */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      className="text-muted/30"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="url(#goldGradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${87 * 2.83} ${100 * 2.83}`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#FFD700" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-bold gold-text">87%</span>
                    </div>
                  </div>
                  {/* Decorative orbs */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-lg shadow-gold/50" />
                  <div className="absolute top-8 left-4 w-3 h-3 rounded-full bg-gold/60" />
                  <div className="absolute top-8 right-4 w-3 h-3 rounded-full bg-gold/60" />
                </div>
              </div>

              {/* Right - Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg">Mystery Collectible Slab – Locked</h3>
                  <p className="text-muted-foreground mt-1">
                    <strong>8,743 / 10,000</strong> Unlocked
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Unlock window closes in <strong>11m 12m</strong> <span className="text-gold ml-2">87%</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gold">
                  <Star className="w-4 h-4 fill-gold" />
                  <span className="text-sm">Legendary collectible unlock in progress</span>
                </div>
              </div>
            </div>

            {/* Collectible Rewards */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Eye className="w-4 h-4 text-gold" />
                <span className="font-bold">Unlocks Next Collectible Reward</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {/* Bronze */}
                <div className="glass-card p-3 rounded-xl border border-gold/20 text-center">
                  <div className="w-full h-24 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-xs text-amber-200">SLAB</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-sm">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    <span>Bronze Collectible</span>
                    <span className="bg-muted/50 text-xs px-1 rounded">Tier C</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Bronze Collectible Slab - Locked</p>
                </div>

                {/* Silver */}
                <div className="glass-card p-3 rounded-xl border border-gold/20 text-center">
                  <div className="w-full h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg mb-2 flex items-center justify-center">
                    <span className="text-xs text-gray-200">SLAB</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-sm">
                    <span className="w-2 h-2 rounded-full bg-gray-400" />
                    <span>Silver Collectible</span>
                    <span className="bg-muted/50 text-xs px-1 rounded">Tier B</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Silver Collectible Slab - Locked</p>
                </div>

                {/* Legendary */}
                <div className="glass-card p-3 rounded-xl border border-gold/40 text-center relative">
                  <div className="absolute -top-2 -right-2 bg-gold text-background text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                  </div>
                  <div className="w-full h-24 bg-gradient-to-br from-gold via-yellow-500 to-amber-600 rounded-lg mb-2 flex items-center justify-center">
                    <Star className="w-8 h-8 text-background" />
                  </div>
                  <div className="flex items-center justify-center gap-1 text-sm">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    <span>Legendary Collectible Slab</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Legendary Collectible Slab - Hidden</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-sm text-muted-foreground pt-4 border-t border-gold/20">
              Powered by <strong>Sponsor X</strong> · Verified & insured by...
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* FOMO Activity */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold">FOMO Activity</h4>
              <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">Participants active</span>
                </div>
                <span className="font-bold">312</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-pink-400" />
                  <span className="text-sm">Reveals completed</span>
                </div>
                <span className="font-bold">48</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Audit actions logged:</span>
                </div>
                <span className="font-bold">1,204</span>
              </div>
            </div>
          </div>

          {/* Reveal Status */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold">Reveal Status</h4>
              <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-info" />
                <span>Current Reveal Stage</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Reveal Stage</span>
                <span className="font-bold">— <span className="gold-text">3</span> / 6</span>
              </div>
              <Progress value={50} className="h-2" />
              <div className="space-y-1 text-sm">
                <p>Completion: <strong>50%</strong></p>
                <p>Anti-Fraud Confidence: <strong>High</strong></p>
              </div>
              <div className="pt-2 border-t border-gold/20">
                <p className="text-sm text-muted-foreground">Last Block ID: <strong>FOMOB-0936</strong> &gt;</p>
              </div>
            </div>
          </div>

          {/* Export */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-muted-foreground" />
              <span className="font-bold">Export:</span>
              <span className="text-sm">PDF | CSV</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectiblesTab;

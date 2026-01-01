import { Clock, Heart, Check, Lock, Volume2, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrimaryCareBlock = () => {
  return (
    <div className="glass-card-gold rounded-2xl p-6 animate-pulse-gold">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
            <span className="text-xl">🏆</span>
          </div>
          <div>
            <h3 className="font-display font-bold text-gold text-lg">PRIMARY CARE BLOCK</h3>
            <span className="text-gold-light text-2xl font-bold font-display">01:46:12</span>
          </div>
        </div>
      </div>

      {/* Care Block Credits */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-destructive/80 to-destructive flex items-center justify-center">
          <Heart className="w-6 h-6 text-foreground" />
        </div>
        <div>
          <h4 className="font-display font-bold text-foreground text-xl">Care Block Credits</h4>
          <p className="text-muted-foreground text-sm">Healthcare Support</p>
        </div>
      </div>

      {/* Block Value */}
      <div className="mb-6">
        <p className="text-muted-foreground text-sm mb-1">Block Value:</p>
        <p className="font-display font-bold text-3xl gold-text">€2,500,000</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-muted-foreground text-sm">Credits Required:</p>
          <p className="font-bold text-foreground text-lg">10,000</p>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">Credit Value:</p>
          <p className="font-bold text-foreground text-lg">€ 250</p>
        </div>
      </div>

      {/* Exclusive Window */}
      <div className="flex items-center gap-4 mb-4 glass-card rounded-xl p-3">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-gold" />
          <span className="text-muted-foreground">4 Hour Exclusive Window</span>
        </div>
        <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-lg">
          <Clock className="w-4 h-4 text-gold" />
          <span className="font-display font-bold text-foreground">01:46:12</span>
        </div>
      </div>

      {/* Status */}
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-gold" />
        <span className="font-bold text-gold">OPEN FOR CLAIM</span>
        <span className="text-muted-foreground ml-2">⏱ 01:46:12 remaining</span>
      </div>

      {/* Features */}
      <div className="space-y-2 mb-6">
        <FeatureItem icon={<Check className="w-4 h-4 text-success" />} text="10,000 VoiceSlogans · 1 CareTV Episode" />
        <FeatureItem icon={<Check className="w-4 h-4 text-success" />} text="Full Audit Proof ✓ 🔒" />
        <FeatureItem icon={<Check className="w-4 h-4 text-success" />} text="10,000 credits × € 250 = €2.5M" />
      </div>

      {/* CTA Button */}
      <Button variant="gold" size="xl" className="w-full mb-4">
        <Lock className="w-5 h-5" />
        CLAIM EXCLUSIVE CARE BLOCK
      </Button>
      <p className="text-center text-muted-foreground text-sm">Locks out all other sponsors</p>

      {/* Bottom Icons */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gold/20">
        <div className="flex items-center gap-4">
          {['🎯', '🔔', '🔊', '💎', '👥', '☁️', '💬', '⭐'].map((icon, i) => (
            <span key={i} className="text-lg opacity-70 hover:opacity-100 cursor-pointer transition-opacity">{icon}</span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>7 Layer Text ACTIVE</span>
          <span>·</span>
          <span>7 Layer Proof ACTIVE</span>
          <span>·</span>
          <span>+ Audit + Hash</span>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span className="text-foreground">{text}</span>
  </div>
);

export default PrimaryCareBlock;

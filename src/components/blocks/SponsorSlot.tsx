import { Globe, Check } from "lucide-react";

const SponsorSlot = () => {
  return (
    <div className="glass-card rounded-xl p-5 h-full">
      {/* Header */}
      <div className="text-center mb-4">
        <h4 className="font-display font-bold text-foreground text-lg">
          <span className="text-muted-foreground">EXCLUSIVE</span> SPONSOR SLOT
        </h4>
      </div>

      {/* Logo Placeholder */}
      <div className="bg-muted/30 rounded-xl p-6 mb-4 text-center border border-dashed border-gold/30">
        <p className="font-display font-bold text-xl text-muted-foreground">YOUR D LOGO</p>
      </div>

      {/* Industry Tags */}
      <p className="text-muted-foreground text-sm mb-4 text-center">
        Industry: <span className="text-foreground">Insurance</span> · <span className="text-foreground">Bank</span> · <span className="text-foreground">Health</span> cussips
      </p>

      {/* Powered By */}
      <p className="text-center text-sm text-muted-foreground mb-6">
        Powered by <span className="text-gold">NeoPay</span> × <span className="text-info">NeoCare</span>
      </p>

      {/* World Map Visual */}
      <div className="relative h-32 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-cosmic-purple/50 to-cosmic-blue/50">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <Globe className="w-24 h-24 text-info" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        {/* Stats overlay */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-6">
          <StatBadge value="2,941" icon="👥" />
          <StatBadge value="62" icon="💎" />
          <StatBadge value="903" icon="⚡" />
        </div>
      </div>

      {/* Moments Logged */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-muted-foreground">📊</span>
        <span className="font-bold text-foreground">903</span>
        <span className="text-muted-foreground">Care Moments Logged</span>
        <div className="flex -space-x-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-info to-cosmic-purple border border-background" />
          ))}
        </div>
      </div>

      {/* Compliance Badge */}
      <div className="flex items-center justify-center gap-2 text-sm">
        <Check className="w-4 h-4 text-success" />
        <span className="text-success font-medium">AUDIT READY</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">GDPR Compliant</span>
        <span className="text-success">✓</span>
      </div>
    </div>
  );
};

const StatBadge = ({ value, icon }: { value: string; icon: string }) => (
  <div className="flex items-center gap-1 text-foreground">
    <span>{icon}</span>
    <span className="font-bold">{value}</span>
  </div>
);

export default SponsorSlot;

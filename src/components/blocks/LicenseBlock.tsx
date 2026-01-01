import { Lock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LicenseBlockProps {
  title: string;
  subtitle: string;
  goal: number;
  status: string;
  value: string;
  locked?: boolean;
  urgency?: string;
}

const LicenseBlock = ({ title, subtitle, goal, status, value, locked = false, urgency }: LicenseBlockProps) => {
  return (
    <div className="glass-card rounded-xl p-5 hover:border-gold/50 transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-success/30 to-success/10 flex items-center justify-center border border-success/30">
            <Check className="w-5 h-5 text-success" />
          </div>
          <div>
            <h4 className="font-display font-bold text-foreground">{title}</h4>
            <p className="text-muted-foreground text-sm">{subtitle}</p>
          </div>
        </div>
        {urgency && (
          <span className="px-2 py-1 rounded-full text-xs font-bold bg-warning/20 text-warning border border-warning/30">
            {urgency}
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-muted-foreground text-xs">Unlock Goal:</p>
          <p className="font-bold text-foreground">{goal.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-muted-foreground text-xs">Status:</p>
          <p className="font-bold text-foreground text-sm">{status}</p>
        </div>
      </div>

      {/* Credit Stack Visual */}
      <div className="flex items-center justify-center mb-4 py-2">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-8 h-6 rounded-sm bg-gradient-to-br from-gold via-gold-light to-warning transform rotate-3 shadow-lg"
              style={{ transform: `rotate(${(i - 2) * 5}deg) translateY(${Math.abs(i - 2.5) * 2}px)` }}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 mb-3">
        {locked && (
          <span className="flex items-center gap-1 px-2 py-1 rounded text-xs bg-gold/20 text-gold border border-gold/30">
            <Lock className="w-3 h-3" />
            UNLOCKED ON CLAIM
          </span>
        )}
        {urgency && (
          <span className="flex items-center gap-1 px-2 py-1 rounded text-xs bg-warning/20 text-warning border border-warning/30">
            ⏱ {urgency}
          </span>
        )}
      </div>

      <Button variant="goldOutline" size="sm" className="w-full">
        Claim School Block
      </Button>
    </div>
  );
};

export default LicenseBlock;

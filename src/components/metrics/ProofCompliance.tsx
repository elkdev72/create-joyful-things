import { Check, FileText, Copy } from "lucide-react";

const ProofCompliance = () => {
  return (
    <div className="glass-card rounded-xl p-5">
      <h4 className="font-display font-bold text-foreground mb-4">Proof & Compliance</h4>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-success" />
          <span className="text-muted-foreground text-sm">Verified:</span>
          <span className="text-foreground font-medium">DEF5678</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-success" />
          <span className="text-muted-foreground text-sm">PROOF ID:</span>
          <span className="text-foreground font-medium">ABC1234</span>
        </div>
        
        <div className="glass-card rounded-lg p-3 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gold" />
              <span className="text-foreground text-sm">PROOF ID: ABC1234</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">ENS1S6RE + 🔗</span>
              <Copy className="w-3 h-3 text-muted-foreground cursor-pointer hover:text-gold transition-colors" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Proof includes UID, Time, Location, Sponsor Hash
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProofCompliance;

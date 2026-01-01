import { Check } from "lucide-react";

const AIStatus = () => {
  const statuses = [
    { icon: "↔", text: "Status logic:", detail: "Proof badge rendering" },
    { icon: "↔", text: "Credit → value mapping", detail: "" },
    { icon: "✓", text: "(geen extra AI ontwikkeling)", detail: "", muted: true },
  ];

  return (
    <div className="glass-card rounded-xl p-5">
      <h4 className="font-display font-bold text-foreground mb-4">AI (MVP):</h4>
      
      <div className="space-y-2">
        {statuses.map((status, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-gold text-sm">{status.icon}</span>
            <span className={status.muted ? "text-muted-foreground text-sm" : "text-foreground text-sm"}>
              {status.text}
            </span>
            {status.detail && (
              <span className="text-muted-foreground text-sm">{status.detail}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIStatus;

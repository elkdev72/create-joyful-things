import { Check } from "lucide-react";

const ActivityPanel = () => {
  const activities = [
    { icon: "✓", text: "Proof stafcLla:", highlight: true },
    { icon: "✓", text: "Proof badge rendering.", highlight: true },
    { icon: "✓", text: "Credit → value mapping", highlight: true },
    { icon: "✏️", text: "(geen extra AI ontwikkeling)", highlight: false },
  ];

  return (
    <div className="glass-card rounded-xl p-5">
      <h4 className="font-display font-bold text-foreground mb-4">Recent License Activity</h4>
      
      <div className="space-y-2">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-center gap-2">
            {activity.highlight ? (
              <Check className="w-4 h-4 text-success" />
            ) : (
              <span className="text-muted-foreground">{activity.icon}</span>
            )}
            <span className={activity.highlight ? "text-foreground text-sm" : "text-muted-foreground text-sm"}>
              {activity.text}
            </span>
            {i === 0 && <span className="ml-auto text-muted-foreground">⊕</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityPanel;

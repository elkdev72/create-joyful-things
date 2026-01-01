const RecentUnlocks = () => {
  const unlocks = [
    { name: "School FOMO Block", amount: "1,000 Unlocked" },
    { name: "Annual License", amount: "1,000 Unlocked" },
  ];

  const references = [
    { name: "School FOMO Block", amount: "1,000 Unlocked" },
    { name: "Annual License", amount: "1,000 Unlocked" },
  ];

  return (
    <div className="space-y-4">
      {/* Recent Unlocks */}
      <div className="glass-card rounded-xl p-4">
        <h4 className="font-display font-bold text-foreground mb-3">Recent Unlocks</h4>
        <div className="space-y-2">
          {unlocks.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-warning" />
              <span className="text-foreground text-sm">{item.name}</span>
              <span className="text-muted-foreground text-sm">- {item.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Proof References */}
      <div className="glass-card rounded-xl p-4">
        <h4 className="font-display font-bold text-foreground mb-3">Proof References</h4>
        <div className="space-y-2">
          {references.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-warning" />
              <span className="text-foreground text-sm">{item.name}</span>
              <span className="text-muted-foreground text-sm">- {item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentUnlocks;

const LiveMetrics = () => {
  const metrics = [
    { label: "Schools licensed:", value: "1" },
    { label: "Students covered:", value: "0 - 1,000" },
    { label: "Actions logged:", value: "0 - 10,000" },
    { label: "Trust Score:", value: "9.4 / 10" },
  ];

  return (
    <div className="glass-card rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-display font-bold text-foreground">LIVE METRICS</h4>
        <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">(DEMO)</span>
      </div>
      
      <div className="space-y-3">
        {metrics.map((metric, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">{metric.label}</span>
            <span className="font-bold text-foreground">{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveMetrics;

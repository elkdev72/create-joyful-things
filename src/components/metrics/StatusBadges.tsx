const StatusBadges = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge icon="📋" label="Escrow Enabled" />
      <Badge icon="⏱" label="7 Layer Proof" />
      <Badge icon="🌐" label="CityTrust Solid Credits" />
    </div>
  );
};

const Badge = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-full border border-gold/20">
    <span>{icon}</span>
    <span className="text-xs text-muted-foreground">{label}</span>
  </div>
);

export default StatusBadges;

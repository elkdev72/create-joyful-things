import { ChevronDown } from "lucide-react";

const SubHeader = () => {
  return (
    <div className="glass-card border-b border-gold/10 px-6 py-3">
      <div className="flex flex-wrap items-center gap-4 max-w-[1600px] mx-auto">
        <SelectDropdown label="Select Sponsor:" value="BrightFuture Foundation" />
        <SelectDropdown label="Assign to Block:" value="NeoCare Program" />
      </div>
    </div>
  );
};

const SelectDropdown = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground text-sm">{label}</span>
      <button className="flex items-center gap-2 bg-muted/30 hover:bg-muted/50 px-4 py-2 rounded-lg border border-gold/20 transition-all duration-300">
        <span className="font-medium text-foreground">{value}</span>
        <ChevronDown className="w-4 h-4 text-gold" />
      </button>
    </div>
  );
};

export default SubHeader;

import { Shield, CheckCircle2, Clock, Lock, Users, FileText, Fingerprint, Mic, AlertTriangle, Award, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const SchoolLicenseTab = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-display font-bold gold-text">Tab 4.2 – School Year License Credits</h1>
        <p className="text-muted-foreground mt-1">
          Exclusive 12-month sponsor license for 1 school (up to <strong>1,000 students</strong>) · Proof & Reporting included.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left/Center - Main License Block */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass-card p-6 rounded-2xl border border-gold/30 space-y-5">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" />
              <span className="text-gold font-bold">DEFAULT</span>
              <span className="text-muted-foreground">· MOST CHOSEN</span>
            </div>

            {/* Title Section */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <Shield className="w-7 h-7 text-background" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl">
                  <span className="gold-text">ANNUAL SCHOOL LICENSE</span>
                  <span className="text-muted-foreground text-lg ml-2">| SPONSOR A</span>
                </h2>
                <p className="text-muted-foreground">≈ €2.5M sponsor value · <strong>10,000</strong> SchoolCredits unlock</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gold" />
                  <span><strong>Duration:</strong> 12 months</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4 text-gold" />
                  <span><strong>Scope:</strong> 1 school · 1 city</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-gold" />
                  <span><strong>Students:</strong> up to <strong>1,000</strong></span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span><strong>Credits Required:</strong> 10,000 SchoolCredits™</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-gold" />
                  <span><strong>Unlock-model:</strong> Proof-based</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Lock className="w-4 h-4 text-gold" />
                  <span><strong>Escrow:</strong> Active</span>
                </div>
              </div>
            </div>

            {/* Action Flow */}
            <div className="flex items-center justify-center gap-4 text-sm py-3 border-y border-gold/20">
              <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> Unlock</span>
              <span>→</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> School Use</span>
              <span>→</span>
              <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> Proof</span>
              <span>–</span>
              <span className="flex items-center gap-1">Media & Reports</span>
            </div>

            <p className="text-center text-muted-foreground text-sm">
              ≈ 1 year visibility · continuous proof · renewable
            </p>

            {/* CTA */}
            <Button className="w-full bg-gradient-to-r from-gold to-gold-light text-background font-bold py-6 text-lg">
              CLAIM ANNUAL LICENSE
            </Button>
            <p className="text-center text-muted-foreground text-sm underline cursor-pointer">View License Terms</p>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-3 gap-4">
            {/* What's Included */}
            <div className="glass-card p-4 rounded-xl border border-gold/20">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-gold" />
                What's Included
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Users className="w-3 h-3" /> Attendance & student
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-3 h-3" /> Exam & presence dashboards
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-3 h-3" /> Proof references per action
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-3 h-3" /> Sponsor reporting dashboard
                </li>
              </ul>
            </div>

            {/* Hardware */}
            <div className="glass-card p-4 rounded-xl border border-gold/20">
              <h4 className="font-bold mb-3">Hardware <span className="text-muted-foreground font-normal">(Optional / Demo)</span></h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Fingerprint className="w-3 h-3" /> Fingerprint check-in
                </li>
                <li className="flex items-center gap-2">
                  <Mic className="w-3 h-3" /> Voice-to-Talk device
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3" /> Fall / safety alert node
                </li>
              </ul>
              <div className="mt-3 bg-muted/30 text-xs px-2 py-1 rounded text-center">
                Hardware optional – MVP demo mode
              </div>
            </div>

            {/* Trust & Compliance */}
            <div className="glass-card p-4 rounded-xl border border-gold/20">
              <h4 className="font-bold mb-3">Trust & Compliance</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span><strong>Proof status:</strong> Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span><strong>Last Proof ID:</strong> SCH-7D-4936</span>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-xs">Export:</span>
                  <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-xs">PDF</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs">CSV</span>
                  <span className="bg-gold/20 text-gold px-2 py-0.5 rounded text-xs flex items-center gap-1">
                    <Eye className="w-3 h-3" /> Audit View
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* AI MVP Section */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-2">AI (MVP):</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span><strong>Status logic:</strong> Proof badge rendering</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span><strong>Credit → value mapping</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
              <span>(geen extra AI ontwikkeling)</span>
            </div>
          </div>
        </div>

        {/* Right Column - Status Badges & Metrics */}
        <div className="space-y-4">
          {/* Status Badges */}
          <div className="flex items-center gap-2 justify-end">
            <span className="glass-card px-3 py-1.5 rounded-full text-xs flex items-center gap-1 border border-gold/20">
              <Lock className="w-3 h-3" /> Escrow Enabled
            </span>
            <span className="glass-card px-3 py-1.5 rounded-full text-xs flex items-center gap-1 border border-gold/20">
              <Shield className="w-3 h-3" /> 7 Layer Proof
            </span>
            <span className="glass-card px-3 py-1.5 rounded-full text-xs flex items-center gap-1 border border-gold/20">
              City/Spent Solo Escrow
            </span>
          </div>

          {/* Live Metrics */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-4">LIVE METRICS <span className="text-muted-foreground font-normal">(DEMO)</span></h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Schools licensed:</span>
                <span className="font-bold">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Students covered:</span>
                <span className="font-bold gold-text">0 - 1,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Actions logged:</span>
                <span className="font-bold gold-text">0 - 10,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Trust Score:</span>
                <span className="font-bold"><span className="gold-text">9.4</span> / 10</span>
              </div>
            </div>
          </div>

          {/* Recent License Activity */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-3">Recent License Activity</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>Proof <strong>staPELLA</strong>:</span>
                </div>
                <Eye className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Proof badge rendering.</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Credit → value mapping</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4" />
                <span>(geen extra AI ontwikkeling)</span>
              </div>
            </div>
          </div>

          {/* AI MVP */}
          <div className="glass-card p-4 rounded-xl border border-gold/20">
            <h4 className="font-bold mb-3">AI (MVP):</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                <span><strong>Status logic:</strong> Proof badge rendering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
                <span><strong>Credit → value mapping</strong></span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4" />
                <span>(geen extra AI ontwikkeling)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolLicenseTab;

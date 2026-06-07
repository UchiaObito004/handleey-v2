// components/ValueProposition.tsx
'use client';

import { useState } from 'react';
import { ShieldCheck, Zap, Layers, BarChart3, Check, Building2, ArrowUpRight } from 'lucide-react';

export default function ValueProposition() {
  const [billingCycle, setBillingCycle] = useState<'standard' | 'priority'>('standard');

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Sub-Second Edge Execution",
      desc: "Our systems are engineered on static edge runtimes, ensuring sub-second rendering speeds and optimized web vital metrics for premium client engagement."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Bank-Grade Encryption Layers",
      desc: "We build native multi-tier isolation and cryptographic security signatures into every internal API route, guaranteeing top-tier protective custody of corporate analytics."
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "Bespoke Cross-Platform Scaling",
      desc: "No rigid out-of-the-box templates. Every section, theme, and data pipeline is custom-coded from the ground up to support the exact workflow metrics your company handles."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: "Automated Data Processing Pipelines",
      desc: "Seamlessly map database telemetry streams into structured Python parsing algorithms, enabling effortless reporting and instant dashboard updates."
    }
  ];

  const partners = [
    { name: "Apex Global FinTech", niche: "Distributed Ledger Assets", region: "Delhi Corp Hub" },
    { name: "LogiRoute Systems", niche: "Fleet Network Delivery", region: "Mumbai Zone" },
    { name: "EduStream Interactive", niche: "Adaptive HLS Media Mesh", region: "Global Edge" },
    { name: "AquaTrust Tech Group", niche: "Ecological Safety Monitors", region: "Regional Nodes" }
  ];

  const pricingTiers = [
    {
      name: "Startup Core Layout",
      desc: "Perfect for lightweight corporate portfolios, fast business landers, and responsive informational layouts.",
      standardPrice: 25000,
      priorityPrice: 35000,
      features: [
        "Custom Full-Stack Next.js Layout",
        "Tailwind CSS Dark Web Architecture",
        "Fully Modular Structural Design Sections",
        "Integrated Local Validation Contact Form",
        "15 Days Post-Deployment Polish SLA"
      ],
      popular: false
    },
    {
      name: "Growth Agency Pipeline",
      desc: "Our sweet-spot plan providing multi-page routing frameworks and dynamic tracking components tailored for SMEs.",
      standardPrice: 55000,
      priorityPrice: 65000,
      features: [
        "Everything in Startup Layout Package",
        "Multi-Page Integration (App Router File Flow)",
        "Premium Case Studies Interactive Showcases",
        "Budget Metrics Slider Interface Controls",
        "Enhanced Responsive Core Components",
        "30 Days Maintenance Coverage Support"
      ],
      popular: true
    },
    {
      name: "Enterprise Specialized Build",
      desc: "Advanced software execution implementing custom data analytics and interactive dashboards under a hard cost cap.",
      standardPrice: 85000,
      priorityPrice: 95000,
      features: [
        "Everything in Agency Pipeline Package",
        "Custom Integrated Python Script Hooks",
        "Real-Time Data Table Visualization Layouts",
        "Complex SVG Layout Asset Component Rigging",
        "Advanced Glassmorphism Glass Accents UI",
        "Priority 60-Day Architecture Guard Support"
      ],
      popular: false
    }
  ];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <>
      {/* SECTION 1: WHY CHOOSE US */}
      <section id="why-choose-us" className="py-24 bg-slate-900 border-t border-slate-800/60 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-semibold text-blue-400 mb-4">
              <span>Architectural Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Why Partner With Handleey?</h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              We eliminate complex software fragmentation by delivering secure, clean codebases designed specifically to maximize continuous system availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 bg-slate-950/40 border border-slate-800/80 rounded-2xl flex gap-6 hover:border-slate-700/60 transition-colors duration-200">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 2: TRUSTED BY GROWING BUSINESSES */}
      <section id="trusted" className="py-20 bg-slate-950 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Validated Across Distributed Industrial Systems
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, i) => (
              <div key={i} className="p-6 bg-slate-900/30 border border-slate-800/60 rounded-xl relative group hover:bg-slate-900/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-sm font-bold text-slate-300 group-hover:text-blue-400 transition-colors">{partner.name}</div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors" />
                </div>
                <div className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
                  <Building2 className="w-3 h-3 text-slate-600" /> {partner.niche}
                </div>
                <div className="text-[10px] text-slate-600 font-semibold mt-1">
                  {partner.region}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PRICING STRUCTURES */}
      <section id="pricing" className="py-24 bg-slate-900 border-t border-slate-800/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-semibold text-purple-400 mb-4">
              <span>Transparent Allocation Metrics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Project Resource Budgets</h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Predictable, flat-rate engagement terms built cleanly to stay within your operational requirements without hidden overhead items.
            </p>

            {/* Toggle Switch */}
            <div className="mt-8 inline-flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setBillingCycle('standard')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${billingCycle === 'standard' ? 'bg-slate-800 text-white' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Standard Track
              </button>
              <button
                onClick={() => setBillingCycle('priority')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${billingCycle === 'priority' ? 'bg-slate-800 text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
              >
                Priority Support Track
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-950/60 border rounded-2xl p-8 relative flex flex-col justify-between min-h-[540px] transition-transform duration-300 hover:-translate-y-1 ${
                  tier.popular ? 'border-blue-500 ring-1 ring-blue-500/30 bg-slate-950 shadow-xl shadow-blue-500/5' : 'border-slate-800'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 border border-blue-400 text-white font-mono text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    Best Value
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-slate-100">{tier.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 min-h-[48px] leading-relaxed">{tier.desc}</p>
                  
                  <div className="mt-6 flex items-baseline gap-1.5 text-white">
                    <span className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                      {formatCurrency(billingCycle === 'standard' ? tier.standardPrice : tier.priorityPrice)}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/ package</span>
                  </div>

                  <ul className="mt-8 space-y-3.5 border-t border-slate-900 pt-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3 text-xs text-slate-400">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#contact"
                    className={`w-full block text-center py-3 rounded-xl text-xs font-bold transition-all ${
                      tier.popular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                    }`}
                  >
                    Select Platform Plan
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
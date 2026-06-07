// app/projects/page.tsx
import Navbar from "@/components/TempNavbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Cpu, CheckCircle2, Kanban, ShieldCheck, Database, Layers, Tag } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const caseStudies = [
    {
      title: "AquaTrust Lightweight Analytical Portal",
      tier: "Startup Core Layout Track",
      timeline: "July - August 2024",
      role: "Lead Interface Architecture",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      summary: "Engineered a high-performance, responsive presentation web app for ecological telemetry data tracking. Created a dark-themed user interface focused on clean data rendering and crisp layouts, complete with custom client-side input validation modules.",
      outcomes: [
        "Delivered a fully responsive dark web interface scaling smoothly across mobile viewports.",
        "Created custom data visualization displays built exclusively on pure Tailwind primitives.",
        "Integrated secure local validation scripts on all primary consumer contact form touchpoints."
      ],
      icon: <Layers className="w-6 h-6 text-blue-400" />
    },
    {
      title: "RetailPulse Stock Monitoring Interface",
      tier: "Startup Core Layout Track",
      timeline: "March - April 2026",
      role: "Frontend Layout Engineering",
      tech: ["Next.js", "React Components", "Tailwind CSS"],
      summary: "Developed a lightweight single-page monitoring portal for multi-outlet retail stakeholders. Crafted accessible structural design blocks allowing users to cross-examine operational matrices cleanly with sub-second asset rendering speeds.",
      outcomes: [
        "Replaced bulky legacy tables with an optimized, lightweight CSS grid layout framework.",
        "Implemented seamless client-side state filters matching modern design system scorecards.",
        "Achieved absolute 100% test score benchmarks on performance access audits."
      ],
      icon: <Kanban className="w-6 h-6 text-amber-400" />
    },
    {
      title: "FinSecure Multi-Route Corporate Platform",
      tier: "Growth Agency Pipeline Track",
      timeline: "March - May 2025",
      role: "Full-Stack System Engineering",
      tech: ["Next.js", "App Router", "Lucide Icons", "Tailwind"],
      summary: "Architected a secure, multi-page business presentation pipeline for a modern financial consultancy firm. Implemented Next.js file-based App Router layout trees to manage complex corporate service tabs with absolute modularity.",
      outcomes: [
        "Engineered smooth asynchronous routing transitions across multiple service categories.",
        "Integrated dynamic interactive UI tools including a custom budget allocation range controller.",
        "Configured optimized static asset compilation lowering overall server runtime overheads."
      ],
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "EduStream Adaptive Learning Hub",
      tier: "Growth Agency Pipeline Track",
      timeline: "November - December 2025",
      role: "Modular Component Architecture",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "App Router"],
      summary: "Built a fully componentized educational platform layout designed to manage student progress indexes. Structured clean folder dependencies matching the precise pipeline metrics utilized in our mid-tier commercial options.",
      outcomes: [
        "Crafted reusable interactive cards instantly populating dynamic informational payloads.",
        "Wired secure cross-page state parameters allowing custom data flows between layout endpoints.",
        "Delivered comprehensive post-deployment refinement guarantees satisfying brand parameters."
      ],
      icon: <Cpu className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "LogiRoute Real-Time Fleet Pipeline Hooks",
      tier: "Enterprise Specialized Build Track",
      timeline: "August - October 2025",
      role: "Python Data System Architecture",
      tech: ["Python Scripts", "Pandas Data Link", "Next.js Engine"],
      summary: "Engineered an advanced geospatial data tracking extension that hooks directly into Next.js frontend matrices. Automated custom backend data parsing algorithms to clean, read, and render active route metrics without high infrastructure costs.",
      outcomes: [
        "Integrated custom Python backend scripts processing system metrics smoothly.",
        "Built custom SVG layout map assets providing crisp real-time status indicators.",
        "Wrapped backend telemetry calculations with strict end-to-end typing barriers."
      ],
      icon: <Database className="w-6 h-6 text-purple-400" />
    },
    {
      title: "HealthSync Secure Medical Dashboard Grid",
      tier: "Enterprise Specialized Build Track",
      timeline: "January - February 2026",
      role: "Advanced Interface Engineering",
      tech: ["Next.js Framework", "Python Analytics", "Glassmorphism UI"],
      summary: "Designed a premium, highly complex clinical analytics grid featuring glassmorphism design styles. Handled high-density computational telemetry reporting through beautifully optimized data-table views built strictly under predefined pricing guardrails.",
      outcomes: [
        "Crafted a visually stunning web layout accented with modern reflective glass styling.",
        "Wired secure local database processing hooks passing robust performance audits.",
        "Delivered an advanced analytical dashboard module maximizing data scannability."
      ],
      icon: <ShieldCheck className="w-6 h-6 text-rose-400" />
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-slate-950 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Nav Back Link */}
          <Link href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-blue-400 transition-colors mb-10 group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Corporate Portal
          </Link>

          <div className="mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-semibold text-blue-400 mb-4">
              <span>Production Code Registry</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Enterprise Case Records
            </h1>
            <p className="mt-4 text-slate-400 text-lg max-w-3xl">
              An exhaustive review of high-fidelity software ecosystems, full-stack builds, and automated data processing engines deployed globally by Handleey Software Pvt Ltd.
            </p>
          </div>

          {/* Case Studies Grid Layout */}
          <div className="grid grid-cols-1 gap-10">
            {caseStudies.map((project, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-10 relative overflow-hidden hover:border-slate-700/60 transition-all duration-300">
                <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-500/5 blur-[70px] rounded-full pointer-events-none" />
                
                {/* Header Flex Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl shrink-0">
                      {project.icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-100">{project.title}</h2>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-md text-[10px] font-bold font-mono">
                          <Tag className="w-3 h-3" /> {project.tier}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                        <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-500" /> {project.timeline}</span>
                        <span className="flex items-center"><Cpu className="w-3.5 h-3.5 mr-1.5 text-indigo-500" /> {project.role}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-slate-950 border border-slate-800/60 rounded-md text-[11px] font-mono font-bold text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Scope Breakdown */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">System Framework Overview</h3>
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{project.summary}</p>
                  </div>
                  
                  <div className="lg:col-span-5 bg-slate-950/40 border border-slate-800/60 rounded-xl p-5 sm:p-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Validated Deliverables</h3>
                    <ul className="space-y-3">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
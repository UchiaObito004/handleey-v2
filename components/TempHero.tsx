'use client';

import { useState } from 'react';
import { ArrowRight, Terminal as TermIcon, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'next' | 'python'>('next');

  const segments = {
    next: {
      file: 'app/api/pipeline/route.ts',
      code: `export async function POST(req: Request) {
  const payload = await req.json();
  const report = await compileDataMetrics(payload);
  
  return Response.json({
    status: 200,
    secureState: "encrypted",
    uptimeMetric: "99.99%"
  });
}`
    },
    python: {
      file: 'analytics/engine.py',
      code: `def compile_data_metrics(payload):
    # Parsing continuous data pipelines
    df = pd.DataFrame(payload)
    optimized = np.dot(df.weights, df.telemetry)
    
    return {
        "status": "synchronized",
        "processed_nodes": len(optimized)
    }`
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-24 bg-slate-950 overflow-hidden">
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      {/* Subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/8 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="inline-flex items-center gap-2 bg-blue-500/8 border border-blue-500/15 px-4 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 tracking-wide">Full-Stack & Systems Architecture</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                We Build
                <br />
                <span className="text-blue-400">Resilient</span>
                <br />
                Digital Engines
              </h1>
              
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg font-light">
                Handleey designs and deploys secure cloud applications, data analytics frameworks, and custom software tailored for enterprise scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-600/25 group">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 px-7 py-3.5 rounded-xl text-sm font-medium transition-all">
                View Services
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-2 border-t border-slate-800/60">
              <div className="text-center">
                <div className="text-xl font-bold text-white">60+</div>
                <div className="text-xs text-slate-500 mt-0.5">Projects Delivered</div>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div className="text-center">
                <div className="text-xl font-bold text-white">99.9%</div>
                <div className="text-xs text-slate-500 mt-0.5">Uptime SLA</div>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div className="text-center">
                <div className="text-xl font-bold text-white">24/7</div>
                <div className="text-xs text-slate-500 mt-0.5">Support</div>
              </div>
            </div>
          </div>

          {/* Right — Code Terminal */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
              
              {/* Terminal top bar */}
              <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-slate-500 text-xs flex items-center gap-1.5">
                    <TermIcon className="w-3 h-3" /> {segments[activeTab].file}
                  </span>
                </div>
                <div className="flex gap-1 bg-slate-800/60 p-0.5 rounded-lg">
                  <button
                    onClick={() => setActiveTab('next')}
                    className={`px-3 py-1 rounded-md text-[11px] font-medium transition-all ${activeTab === 'next' ? 'bg-slate-700 text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    Next.js
                  </button>
                  <button
                    onClick={() => setActiveTab('python')}
                    className={`px-3 py-1 rounded-md text-[11px] font-medium transition-all ${activeTab === 'python' ? 'bg-slate-700 text-amber-400' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    Python
                  </button>
                </div>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-xs text-slate-300 leading-relaxed min-h-[200px] overflow-x-auto">
                <pre><code>{segments[activeTab].code}</code></pre>
              </div>

              {/* Status bar */}
              <div className="bg-slate-950/50 border-t border-slate-800/50 px-4 py-2 flex justify-between items-center text-[10px] text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-400/80">
                  <Code2 className="w-3 h-3" /> System Synchronized
                </span>
                <span>UTF-8</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

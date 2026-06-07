export default function Stats() {
  const metrics = [
    { value: "99.9%", label: "Uptime SLA", desc: "Guaranteed availability" },
    { value: "60+", label: "Projects Delivered", desc: "Across industries" },
    { value: "10k+", label: "API Requests Daily", desc: "Managed reliably" },
    { value: "24/7", label: "DevOps Support", desc: "Always monitoring" }
  ];

  return (
    <section id="stats" className="py-20 bg-slate-950 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-800/40">
          {metrics.map((stat, i) => (
            <div key={i} className="bg-slate-950 p-8 text-center hover:bg-slate-900/50 transition-colors">
              <div className="text-4xl sm:text-5xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-300">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-500">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

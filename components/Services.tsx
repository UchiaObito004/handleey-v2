// components/Services.tsx
import { AppWindow, BarChart3, CloudLightning, Cpu, Globe2, Layers } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      icon: <AppWindow className="h-7 w-7 text-blue-400" />,
      title: "Custom Full-Stack Engineering",
      desc: "Architecting rapid, fully accessible, responsive web frameworks using React, Next.js, and complex microservices architectures."
    },
    {
      icon: <BarChart3 className="h-7 w-7 text-indigo-400" />,
      title: "Data Analytics & Automation",
      desc: "Translating unstructured information profiles into visual corporate data dashboards using intelligent Python parsing layers."
    },
    {
      icon: <CloudLightning className="h-7 w-7 text-purple-400" />,
      title: "Cloud Deployment Strategy",
      desc: "Flawless architecture migration strategies across major AWS, Azure, and Vercel container setups ensuring constant uptime."
    },
    {
      icon: <Layers className="h-7 w-7 text-cyan-400" />,
      title: "Enterprise UX Design",
      desc: "Delivering pixel-perfect digital interactive paradigms calculated explicitly to boost active user retention metrics."
    },
    {
      icon: <Cpu className="h-7 w-7 text-emerald-400" />,
      title: "API Engine Development",
      desc: "Drafting scalable and extensively documented REST and GraphQL system endpoints securely connecting multiple dependencies."
    },
    {
      icon: <Globe2 className="h-7 w-7 text-amber-400" />,
      title: "SEO & Performance Architecture",
      desc: "Optimizing Web Vitals scorecards cleanly to achieve immediate high organic search ranking conversions."
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Our Core Technology Capabilities
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            We deliver targeted, highly performant software products mapped strictly to the scaling priorities of modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
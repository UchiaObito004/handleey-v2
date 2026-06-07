// components/FAQ.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What core tech stack does Handleey specialize in for enterprise builds?",
      answer: "We specialize in modern JavaScript/TypeScript frameworks (Next.js, React, Node.js) paired with highly optimized Python backends for complex data processing, automated parsing, and statistical calculations. Our databases typically leverage highly scalable PostgreSQL architectures or enterprise cloud instances."
    },
    {
      question: "How do you ensure data security and platform integrity?",
      answer: "Security is baked into our development lifecycle. We utilize automated static analysis tooling, implement rigorous environment variables isolation, enforce HTTPS/TLS protocols universally, and build restricted role-based access control (RBAC) layers into all custom APIs."
    },
    {
      question: "Can your team collaborate on existing codebases, or do you only build from scratch?",
      answer: "We do both. We regularly integrate with existing corporate structures to modernize legacy systems, refactor suboptimal styling layers into modern Tailwind systems, and implement clean microservices without disrupting your current operational uptime."
    },
    {
      question: "What does the typical deployment pipeline look like?",
      answer: "We leverage CI/CD pipelines natively. Changes pushed to staging are verified using automated build tests. Upon sign-off, production assets are built statically and distributed instantly across edge networks like Vercel or AWS CloudFront for sub-second page loading speeds."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-900 border-t border-slate-800/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-semibold text-blue-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Answered Metrics</h2>
          <p className="mt-4 text-slate-400">Everything you need to know about our project engagement structures and engineering parameters.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-slate-800 bg-slate-950/40 rounded-xl overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-slate-200 hover:text-white transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 border-t border-slate-800/50' : 'max-h-0'}`}
                >
                  <p className="p-6 text-sm text-slate-400 leading-relaxed bg-slate-950/20">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
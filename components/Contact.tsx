'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ChevronRight, Laptop, Database, Activity } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [budget, setBudget] = useState(30000);
  const [selectedTrack, setSelectedTrack] = useState('Full-Stack Build');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cin, setCin] = useState('');
  const [phone, setPhone] = useState('');
  const [scope, setScope] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && scope) {
      setFormSubmitted(true);
    }
  };

  const formatINR = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="contact" className="py-28 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-semibold text-indigo-400 mb-4">
                <Activity className="w-3.5 h-3.5" />
                <span>Enterprise Portal Pipelines</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Initiate Your Corporate Mandate
              </h2>
              <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
                Connect directly with our engineering architects to map your legacy structures, scale database ingestion framework layers, or deploy production-grade software ecosystems.
              </p>
            </div>

            <div className="space-y-4 border-t border-slate-900 pt-8">
              <div className="flex items-center space-x-4 bg-slate-900/40 p-4 rounded-xl border border-slate-900">
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400"><Mail className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Inquiries Portal</div>
                  <div className="text-slate-300 font-medium text-sm">handleeysoftwares@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-slate-900/40 p-4 rounded-xl border border-slate-900">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400"><MapPin className="w-5 h-5" /></div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Corporate Zone</div>
                  <div className="text-slate-300 font-medium text-sm">New Delhi, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900/30 border border-slate-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-md relative">
            {formSubmitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Project Specifications Ingested</h3>
                <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                  Excellent! The architecture team will process your targeted resource metric configuration ({formatINR(budget)}) and deliver a formal tech brief inside 12 operational hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Project Domain Track */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Project Domain Track</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'Full-Stack Build', label: 'Web Platform', icon: <Laptop className="w-4 h-4" /> },
                      { id: 'Data Pipeline', label: 'Data Analytics', icon: <Database className="w-4 h-4" /> },
                      { id: 'Cloud Solution', label: 'Cloud Systems', icon: <Send className="w-4 h-4" /> }
                    ].map((track) => (
                      <button
                        key={track.id}
                        type="button"
                        onClick={() => setSelectedTrack(track.id)}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold border transition-all ${
                          selectedTrack === track.id
                            ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        {track.icon}
                        {track.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Corporate Identity + Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Corporate Identity (Name)</label>
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none rounded-xl px-4 py-3.5 text-slate-200 text-sm transition-all"
                      placeholder="NexVault Technologies Pvt Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">GST / CIN Number</label>
                    <input
                      type="text"
                      value={cin}
                      onChange={(e) => setCin(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none rounded-xl px-4 py-3.5 text-slate-200 text-sm transition-all"
                      placeholder="U74999DL2021PTC123456"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Business Email Address</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none rounded-xl px-4 py-3.5 text-slate-200 text-sm transition-all"
                      placeholder="cto@nexvault.in"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none rounded-xl px-4 py-3.5 text-slate-200 text-sm transition-all"
                      placeholder="+91 98100 45678"
                    />
                  </div>
                </div>

                {/* Budget Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Target Resource Budget</label>
                    <span className="text-sm font-black text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-md border border-blue-500/20">
                      {formatINR(budget)} INR
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="100000"
                    step="10000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-600 font-semibold mt-1">
                    <span>₹10,000</span>
                    <span>₹50,000</span>
                    <span>₹1,00,000 Max</span>
                  </div>
                </div>

                {/* Project Scope */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Project Scope & Requirements</label>
                  <textarea
                    required
                    rows={4}
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none rounded-xl px-4 py-3.5 text-slate-200 text-sm transition-all resize-none leading-relaxed"
                    placeholder="Provide explicit operational parameters, expected API load, scaling milestones, or analytical data pipeline goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl text-sm transition-all shadow-xl shadow-blue-600/10 group border border-blue-500/50"
                >
                  Transmit Encrypted RFQ Data
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

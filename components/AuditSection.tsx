
import React from 'react';

const AuditSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent hidden md:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 space-y-32 py-32 relative z-10">
        
        {/* Section 01: Audit */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-400 text-sm">Monthly Value</span>
                  <span className="text-green-400 text-sm font-bold">$32,500</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Lead Generation', time: '15 hrs' },
                    { label: 'Client Communication', time: '12 hrs' },
                    { label: 'Lead Qualification', time: '8 hrs' },
                    { label: 'Social Media Posting', time: '6 hrs' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">{item.label}</span>
                      <span className="text-white text-sm font-bold">{item.time}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-white/10 text-left">
                  <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                    <div className="text-2xl font-bold text-white mb-1">$390k+</div>
                    <div className="text-xs text-blue-200">Projected Annual Value</div>
                  </div>
                  <div className="bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
                    <div className="text-2xl font-bold text-white mb-1">13x</div>
                    <div className="text-xs text-purple-200">ROI Year 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">
              01. Audit
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Find the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Biggest Opportunities</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We identify your bottlenecks, uncover high-value opportunities, and quantify exactly how much time and money
              you're leaving on the table. You get a clear roadmap with project value and ROI projections so you can make
              informed decisions.
            </p>
          </div>
        </div>

        {/* Section 02: Custom Projects */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium uppercase tracking-wider">
              02. Custom Projects
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Scale Without<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Hiring More People</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              From advanced lead generation and social media automation to complex data systems. Imagine doubling your
              output without doubling your team. Custom AI systems that handle the work of 5-10 employees, running 24/7 with
              zero mistakes. That's not the future. That's what we build today.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0">
                    <img src="https://picsum.photos/seed/ai/48/48" className="w-full h-full rounded-full object-cover grayscale" alt="avatar" />
                </div>
                <div className="space-y-3 flex-1 text-left">
                  <div className="h-4 bg-white/20 rounded w-1/3"></div>
                  <div className="h-16 bg-white/5 rounded border border-white/5 p-3">
                    <div className="h-2 bg-white/10 rounded w-full mb-2"></div>
                    <div className="h-2 bg-white/10 rounded w-2/3"></div>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <div className="w-4 h-4 bg-blue-500/20 rounded-full"></div>
                      <span>1,240 Likes</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <div className="w-4 h-4 bg-green-500/20 rounded-full"></div>
                      <span>48 Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-white text-sm font-medium">New Lead Captured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 03: Education */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="space-y-6 text-left">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Time Saved Monthly</p>
                    <h3 className="text-4xl font-bold text-white">80-320hrs</h3>
                  </div>
                  <div className="text-green-400 flex items-center gap-1 text-sm font-medium bg-green-500/10 px-2 py-1 rounded-lg">
                    Per System
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                    <div className="text-2xl font-bold text-white mb-1">$4.3M+</div>
                    <div className="text-xs text-green-200">Client Revenue Generated</div>
                  </div>
                  <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                    <div className="text-xs text-emerald-200">ROI Guaranteed</div>
                  </div>
                </div>
                <div className="flex items-end gap-2 h-32 pt-4 border-t border-white/5">
                  <div className="w-full bg-white/5 rounded-t hover:bg-green-500/40 transition-colors h-[30%]"></div>
                  <div className="w-full bg-white/5 rounded-t hover:bg-green-500/40 transition-colors h-[45%]"></div>
                  <div className="w-full bg-white/5 rounded-t hover:bg-green-500/40 transition-colors h-[40%]"></div>
                  <div className="w-full bg-white/5 rounded-t hover:bg-green-500/40 transition-colors h-[65%]"></div>
                  <div className="w-full bg-white/5 rounded-t hover:bg-green-500/40 transition-colors h-[55%]"></div>
                  <div className="w-full bg-green-500 rounded-t shadow-[0_0_20px_rgba(34,197,94,0.3)] h-[90%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium uppercase tracking-wider">
              03. Education
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Master<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">AI Systems Architecture</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Learn the exact frameworks we use to build enterprise-grade AI systems. No theory, no fluff. Just the
              technical architecture that powers real businesses. Join 1,000+ founders building the future with AI.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all"
            >
              Join the Community
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;


import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Deep Atmosphere Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Precision Image Card matching your screenshot frame */}
          <div className="relative group">
            {/* The Outer Glowing Frame seen in your screenshot */}
            <div className="absolute -inset-[2px] bg-blue-500/40 rounded-[2.5rem] blur-sm group-hover:bg-blue-400/50 transition-colors"></div>
            
            <div className="relative bg-[#0d0d12] border border-blue-500/50 rounded-[2.2rem] p-5 shadow-2xl aspect-[1.4/1] flex items-center justify-center overflow-hidden">
              {/* Glass Reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-20"></div>
              
              <img
                alt="Jack Roberts Speaking"
                className="w-full h-full object-cover rounded-[1.5rem] shadow-inner relative z-10 transition-all duration-700"
                src="/Logo/jack_speaking.jpg"
              />
            </div>
          </div>

          {/* Right Side: Precision Typography and UI Elements */}
          <div className="flex flex-col items-start text-left space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">About</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Jack Roberts
            </h2>
            
            <div className="relative pl-8">
              {/* Precision: Thick blue left border matching the screenshot style */}
              <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-blue-600/80 rounded-full"></div>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic font-light opacity-90">
                "After building and selling a Top-100 UK startup and working with hundreds of businesses, I've learned that
                growth doesn't come from more tools - it comes from better systems, built with clarity, speed, and
                measurable ROI"
              </p>
            </div>
            
            {/* Stats Cards: Custom Dark Styled Cards from screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full pt-4">
              {/* YouTube Card */}
              <div className="bg-[#0a0a0c] border border-white/5 p-6 rounded-2xl flex flex-col items-start gap-1 group/stat hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl font-bold text-white tracking-tight">80k</span>
                  <div className="text-red-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </div>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">YouTube</span>
              </div>

              {/* Instagram Card */}
              <div className="bg-[#0a0a0c] border border-white/5 p-6 rounded-2xl flex flex-col items-start gap-1 group/stat hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl font-bold text-white tracking-tight">37k</span>
                  <div className="text-pink-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Instagram</span>
              </div>

              {/* Business Owners Card */}
              <div className="bg-[#0a0a0c] border border-white/5 p-6 rounded-2xl flex flex-col items-start gap-1 group/stat hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl font-bold text-white tracking-tight">4,500+</span>
                  <div className="text-yellow-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  </div>
                </div>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">Business Owners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import React from 'react';

const BookingSection: React.FC = () => {
  return (
    <section id="booking-section" className="py-20 px-6 relative bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Book Your <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 whitespace-nowrap">
              15-Minute Strategy Call
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Get a custom deployment strategy to automate your workflow, reclaim your time, and scale revenue on autopilot.
          </p>
        </div>
        
        <div className="bg-white/5 rounded-3xl p-4 border border-white/10 backdrop-blur-sm overflow-hidden min-h-[600px] flex items-center justify-center relative">
          {/* Iframe Placeholder - in a real app, this would be a Cal.com embed */}
          <div className="w-full h-full min-h-[538px] flex flex-col items-center justify-center space-y-6 opacity-80">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center animate-pulse">
              <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-400 font-medium">Cal.com Scheduler Loading...</p>
            
            <iframe
              className="absolute inset-0 w-full h-full border-0 opacity-0 hover:opacity-100 transition-opacity"
              title="Book a call"
              src="https://cal.com/jackroberts/teddy-15?embed=true"
              allow="payment"
            ></iframe>
            
            {/* Fallback Display if iframe is blocked or empty in this environment */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 pointer-events-none">
                <p className="text-sm text-gray-500 italic">Embed interface placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

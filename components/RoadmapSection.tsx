
import React, { useState } from 'react';

const RoadmapSection: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleStart = () => {
    if (firstName && lastName) {
      alert(`Thanks ${firstName}! Normally we'd take you to step 2 here.`);
    } else {
      alert('Please fill in both names to proceed.');
    }
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Unlock Jack's <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">#1 AI System</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Customised blueprint in less than 30 seconds; businesses pay thousands for this; it's yours for free.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="relative w-full">
            <div className="absolute top-0 left-0 h-1 bg-gray-800 rounded-full w-full overflow-hidden mb-8">
              <div className="h-full bg-blue-500 transition-all duration-500 ease-out" style={{ width: '20%' }}></div>
            </div>
            
            <div className="pt-8">
              <div className="space-y-8 animate-[fadeInUp_0.5s_ease-out_forwards]">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">Let's start with your name</h3>
                  <p className="text-gray-500 text-sm">Question 1 of 5</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-left">
                    <label className="text-xs text-gray-400 uppercase tracking-widest pl-2">First Name</label>
                    <input
                      placeholder="John"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-gray-600"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-xs text-gray-400 uppercase tracking-widest pl-2">Last Name</label>
                    <input
                      placeholder="Doe"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 text-white rounded-xl focus:border-blue-500 focus:bg-white/10 outline-none transition-all placeholder:text-gray-600"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  onClick={handleStart}
                  className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  Start My Roadmap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

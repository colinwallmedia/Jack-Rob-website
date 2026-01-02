
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor(window.innerWidth / 10);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          speed: Math.random() * 0.2 + 0.1,
          opacity: Math.random() * 0.5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) p.y = canvas.height;
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-4 pb-10 overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      
      <div className="mb-12 relative z-20 mt-4">
        <div className="flex items-center gap-2 group cursor-pointer">
           <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
             <text x="0" y="30" fill="white" fontSize="28" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="-1">TEDDY</text>
             <defs>
               <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor="#60A5FA" />
                 <stop offset="50%" stopColor="#A855F7" />
                 <stop offset="100%" stopColor="#EC4899" />
               </linearGradient>
             </defs>
             <text x="100" y="30" fill="url(#logoGradient)" fontSize="28" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="-1">AI</text>
           </svg>
        </div>
      </div>

      <div className="text-center max-w-5xl px-4 md:px-6 relative z-10 transition-all duration-1000 w-full">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards] leading-[1.1]">
          <span className="text-white">Scale Your Business</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">
            with AI Systems
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards] font-light px-4 md:px-0">
          Discover your AI bottlenecks, <br className="md:hidden" /> deploy high ROI systems, and<br />
          access world-class AI education.
        </p>

        <div className="relative z-10 w-full max-w-3xl mx-auto mb-0 opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards] scale-100 md:scale-90 origin-top px-0 md:px-0">
          <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full"></div>
          
          <div className="glass-panel w-full h-auto md:aspect-[21/9] rounded-3xl border border-white/10 relative z-10 overflow-hidden flex flex-col shadow-2xl group hover:border-white/20 transition-all duration-500">
            <div className="h-10 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <div className="text-[10px] font-mono text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
                Live AI Dashboard
              </div>
            </div>

            <div className="flex-1 p-3 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 relative">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>
              
              <div className="flex flex-col gap-4 w-full md:w-56 z-10">
                <div className="bg-white/5 rounded-2xl p-3 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full p-[1px] bg-gradient-to-tr from-purple-500 to-cyan-500">
                    <img alt="Jack Roberts" className="w-full h-full rounded-full object-cover" src="/Logo/jack_speaking.jpg" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">Jack Roberts</div>
                    <div className="text-[10px] text-purple-400">Teddy AI</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl p-4 border border-purple-500/30 flex flex-col h-full group/ai hover:border-purple-400/50 transition-all relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`, backgroundSize: '20px 20px' }}></div>
                  <div className="relative z-10 text-center mb-6 mt-2">
                    <div className="text-4xl font-bold text-white mb-1 tracking-tight">713</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">AI Systems Deployed</div>
                  </div>
                  
                  <div className="hidden md:flex flex-1 items-end justify-center gap-1.5 px-4 pb-2 relative z-10">
                    {[35, 50, 40, 65, 50, 75, 60, 85, 70, 95].map((h, i) => (
                      <div key={i} className="w-full bg-white/5 rounded-sm relative group/bar overflow-hidden" style={{ height: `${h}%` }}>
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-blue-500/60 to-purple-500/60 opacity-80 group-hover/bar:opacity-100 transition-opacity"></div>
                      </div>
                    ))}
                  </div>

                  <div className="md:hidden relative z-10 h-24 w-full -mx-1 translate-y-2 mt-auto">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
                      <defs>
                        <linearGradient id="mobileGreenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3"></stop>
                          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path d="M0,35 C20,32 30,25 50,20 S80,10 100,5" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]"></path>
                      <path d="M0,35 C20,32 30,25 50,20 S80,10 100,5 V45 H0 Z" fill="url(#mobileGreenGradient)" stroke="none"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col z-10 gap-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { label: 'Total Revenue', value: '$985,000', change: '+12%' },
                    { label: 'Pipeline Value', value: '$320,000', change: '+8%' },
                    { label: 'Booked Calls', value: '142', change: '+24%', hideMobile: true }
                  ].map((stat, i) => (
                    <div key={i} className={`bg-white/5 rounded-xl p-3 border border-white/5 hover:border-white/10 transition-colors ${stat.hideMobile ? 'hidden sm:block' : ''}`}>
                      <div className="text-gray-400 text-[10px] uppercase tracking-wider text-left">{stat.label}</div>
                      <div className="text-xl font-bold text-white mt-1 text-left">{stat.value}</div>
                      <div className="text-green-400 text-[10px] mt-1 flex items-center gap-1">
                        <span>▲</span> {stat.change} vs last month
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-4 hidden md:flex flex-col justify-between relative overflow-hidden group/chart hover:border-white/10 transition-all">
                  <div className="flex justify-between items-start z-10">
                    <div className="text-left">
                      <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Weekly Growth</div>
                      <div className="text-3xl font-bold text-white tracking-tight">+24.5%</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/chart:bg-green-500/20 group-hover/chart:border-green-500/30 transition-all">
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="relative w-full h-16 mt-4 z-10 translate-y-2">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
                      <defs>
                        <linearGradient id="growthGradientGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3"></stop>
                          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path d="M0,35 C15,32 25,34 35,28 S55,20 65,22 S85,15 100,5" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="drop-shadow-[0_0_6px_rgba(74,222,128,0.5)]"></path>
                      <path d="M0,35 C15,32 25,34 35,28 S55,20 65,22 S85,15 100,5 V45 H0 Z" fill="url(#growthGradientGreen)" stroke="none"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards] relative group mt-8 inline-flex justify-center items-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60 rounded-xl overflow-hidden">
              <div className="absolute inset-0 animate-[cosmicShift_14s_ease-in-out_infinite]" style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 60%)', filter: 'blur(10px)' }}></div>
            </div>
            <button className="relative z-10 flex items-center gap-2 bg-white text-black px-8 py-3.5 text-base font-bold hover:bg-gray-100 transition-all rounded-xl cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] group/btn">
              Scale My Business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from 'react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechFlow Logistics',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    quote: "We automated our entire order processing workflow. What used to take my team 25 hours per week now runs automatically. We've processed 10,000+ orders without adding a single person to the team."
  },
  {
    name: 'David Chen',
    role: 'Founder, Peak Performance Coaching',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    quote: "The AI system handles all my client onboarding, scheduling, and follow-ups. I went from spending 15 hours a week on admin to zero. Now I can focus on coaching and we've doubled our client capacity."
  },
  {
    name: 'Jennifer Rodriguez',
    role: 'Owner, Summit Marketing Group',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    quote: "We built a custom content system that generates, schedules, and posts for all our clients. Cut our content production time by 60% and increased output quality. Our clients are seeing 3x better engagement."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 relative bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">High-Growth Businesses</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-panel p-8 md:p-10 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500 border border-white/5"
            >
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-blue-500/20 transition-colors duration-500">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.23858 12.2556 4 15.017 4H19.017C21.7784 4 24.017 6.23858 24.017 9V15C24.017 18.3137 21.3307 21 18.017 21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H1.017C0.464722 13 0.017 12.5523 0.017 12V9C0.017 6.23858 2.25558 4 5.017 4H9.017C11.7784 4 14.017 6.23858 14.017 9V15C14.017 18.3137 11.3307 21 8.017 21H4.017Z" />
                </svg>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-20"></div>
                  <img
                    className="w-14 h-14 rounded-full border border-white/10 relative z-10 object-cover"
                    alt={t.name}
                    src={t.image}
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-blue-400 text-sm font-medium">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed relative z-10 text-left">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

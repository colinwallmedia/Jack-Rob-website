
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              {/* High Fidelity SVG Logo - Scaled for Footer consistency */}
              <div className="flex items-center group cursor-pointer">
                <svg width="135" height="30" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="30" fill="white" fontSize="28" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="-1">TEDDY</text>
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="50%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                  <text x="100" y="30" fill="url(#footerLogoGradient)" fontSize="28" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="-1">AI</text>
                </svg>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm">
              Building custom AI systems and automation for businesses making $50k/mo+ who want to scale.
              <br />
              <br />
              <a
                href="mailto:jack@aiautomationswithjack.com"
                className="text-white hover:text-blue-400 transition-colors"
              >
                jack@aiautomationswithjack.com
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-8 md:justify-end"></div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2025 Growth Intelligence. All Rights Reserved.</p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

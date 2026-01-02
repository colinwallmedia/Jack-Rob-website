
import React from 'react';

const brands = [
  { name: 'Messenger', url: 'https://cdn.worldvectorlogo.com/logos/messenger-01.svg' },
  { name: 'iMessage', url: 'https://cdn.worldvectorlogo.com/logos/imessage-1.svg' },
  { name: 'Replit', url: 'https://cdn.worldvectorlogo.com/logos/replit.svg' },
  { name: 'GitHub', url: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
  { name: 'OneNote', url: 'https://cdn.worldvectorlogo.com/logos/microsoft-onenote-2018-present-.svg' },
  { name: 'Notion', url: 'https://cdn.worldvectorlogo.com/logos/notion-2.svg' },
  { name: 'Gmail', url: 'https://cdn.worldvectorlogo.com/logos/gmail-icon.svg' },
  { name: 'Obsidian', url: 'https://cdn.worldvectorlogo.com/logos/obsidian-icon.svg' },
  { name: 'Perplexity', url: 'https://www.perplexity.ai/favicon.ico' },
  { name: 'Figma', url: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg' },
  { name: 'Outlook', url: 'https://cdn.worldvectorlogo.com/logos/outlook-1.svg' },
  { name: 'Google', url: 'https://cdn.worldvectorlogo.com/logos/google-icon.svg' },
  { name: 'Adobe', url: 'https://cdn.worldvectorlogo.com/logos/adobe-2.svg' },
  { name: 'TikTok', url: 'https://cdn.worldvectorlogo.com/logos/tiktok-icon-2.svg' },
];

const TechSection: React.FC = () => {
  const brandList = [...brands, ...brands]; // Double for seamless scroll

  return (
    <section className="py-12 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-center text-gray-500 text-xs font-semibold uppercase tracking-[0.2em] mb-12">
          Build with your favorite tech
        </p>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-20 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-20 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none"></div>
          
          <div className="flex animate-scroll hover:[animation-play-state:paused] cursor-default whitespace-nowrap">
            {brandList.map((brand, idx) => (
              <div key={idx} className="flex-shrink-0 mx-8 md:mx-12 group inline-block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    alt={brand.name}
                    className="h-10 md:h-12 w-auto object-contain relative z-10 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                    src={brand.url}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;

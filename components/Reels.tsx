
import React from 'react';
import { Heart, Share2, MoreHorizontal, Music2, Signal, Wifi, Battery } from 'lucide-react';

interface Reel {
  id: string;
  label: string;
  youtubeId: string;
  stats: string;
  desc: string;
}

const Reels: React.FC = () => {
  const reels: Reel[] = [
    {
      id: '1',
      label: 'Machinfy Academy',
      youtubeId: 'B5HNa0CNlrw',
      stats: '3.4K',
      desc: 'لو عايز تبدء كاريرك في مجال UI UX Design اعمل كومنت بكلمة UI UX وهنبعتلك كل التفاصيل !'
    },
    {
      id: '2',
      label: 'Machinfy Academy',
      youtubeId: 'zg404hLIREA',
      stats: '1.3K',
      desc: 'ناس كتير فاكرة إن واجهة المستخدم وتجربة المستخدم معناهم ألوان وشكل حلو وخلاص… لكن الحقيقة؟ الموضوع!'
    },
    {
      id: '3',
      label: 'Machinfy Academy',
      youtubeId: 'eCIb-0b2HlI',
      stats: '1.8K',
      desc: 'كل التصميمات اللي بتشوفها على Behance وانبهرت بيها، وراها رحلة طويلة من التجارب، الغلطات، والرفض...'
    },
    {
      id: '4',
      label: 'Machinfy Academy',
      youtubeId: 'r6d5G0Tbsqw',
      stats: '1.2K',
      desc: 'كل التصميمات اللي بتشوفها على Behance وانبهرت بيها، وراها رحلة طويلة من التجارب، الغلطات، والرفض...'
    },
  ];

  return (
    <section id='reels' className="py-24 bg-[#020203] relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E11D48]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Left Aligned Header with Badge */}
        <div className="flex flex-col mb-16 gap-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 w-fit rounded-full border border-[#E11D48]/30 bg-[#E11D48]/10 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse"></span>
            <span className="text-[10px] font-mono text-[#E11D48] uppercase tracking-widest">Motion Laboratory</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-bold tracking-tight text-white uppercase">
            Live <span className="text-slate-600 italic">Feed.</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-sm font-mono leading-relaxed">
      Technical insights and creative storytelling delivered through high-impact digital reels. Exploring the boundaries of UI/UX and frontend engineering.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-4 lg:gap-10"
        >
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="snap-center shrink-0 group relative w-[280px] sm:w-[300px] lg:w-full aspect-[9/19.5] flex-none"
            >
              {/* iPhone 15 Pro Style Mockup */}
              <div className="relative w-full h-full bg-black rounded-[3.5rem] border-[8px] border-[#1A1A1E] shadow-2xl overflow-hidden ring-1 ring-white/10 group-hover:ring-[#E11D48]/50 transition-all duration-500 transform group-hover:-translate-y-2">

                {/* Physical Frame Accents */}
                <div className="absolute top-24 -left-[2px] w-[3px] h-10 bg-[#2A2A2E] rounded-r-sm z-40"></div>
                <div className="absolute top-44 -left-[2px] w-[3px] h-16 bg-[#2A2A2E] rounded-r-sm z-40"></div>
                <div className="absolute top-48 -right-[2px] w-[3px] h-20 bg-[#2A2A2E] rounded-l-sm z-40"></div>

                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-3xl z-50 flex items-center justify-center border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-[#1A1A1E] absolute right-6"></div>
                </div>

                {/* YouTube Video Content */}
                <div className="absolute inset-0 bg-gray-900 z-10">
                  <iframe
                    className="w-full h-full object-cover scale-[1.05]"
                    src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=0&controls=1&rel=0`}
                    title={reel.label}
                    frameBorder="0"
                  // allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>

                {/* Social UI Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-6 bg-gradient-to-b from-black/20 via-transparent to-black/60">
                  {/* Top Bar - Device Status */}
                  <div className="flex justify-between items-center px-2 pt-1">
                    <span className="text-[11px] font-bold text-white/90">9:41</span>
                    <div className="flex gap-1.5 items-center">
                      <Signal size={12} className="text-white/90" />
                      <Wifi size={12} className="text-white/90" />
                      <Battery size={14} className="text-white/90" />
                    </div>
                  </div>

                  {/* Right Side Interaction Column */}
                  <div className="flex flex-col items-end gap-6 absolute bottom-28 right-4">
                    <div className="flex flex-col items-center gap-1">
                      <div className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                        <Heart size={24} className="text-white drop-shadow-lg" />
                      </div>
                      <span className="text-[10px] font-bold text-white drop-shadow-md">{reel.stats}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                        <Share2 size={24} className="text-white drop-shadow-lg" />
                      </div>
                      <span className="text-[10px] font-bold text-white drop-shadow-md">Share</span>
                    </div>
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                      <MoreHorizontal size={24} className="text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Content Info (Profile & Caption) */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E11D48] to-black border border-white/20 shadow-lg flex items-center justify-center overflow-hidden">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-xs font-bold text-white drop-shadow-md tracking-tight">Machinfy Academy</span>
                      <div className="px-2 py-0.5 rounded-full border border-white/30 text-[8px] font-bold text-white uppercase backdrop-blur-md bg-white/10">Follow</div>
                    </div>

                    <p className="text-white text-[11px] font-medium leading-relaxed drop-shadow-md line-clamp-2 max-w-[200px]">
                      {reel.desc}
                    </p>

                    <div className="flex items-center gap-2 opacity-80">
                      <Music2 size={10} className="text-white animate-spin-slow" />
                      <span className="text-[9px] text-white whitespace-nowrap font-mono tracking-tighter uppercase">Original Audio — HESHAM ARCHIVES</span>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
                </div>

                {/* Reflection Overlay */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 via-transparent to-transparent opacity-30 pointer-events-none z-30" />
              </div>

              {/* Protocol Label */}
              <div className="mt-8 text-center space-y-1">
                <span className="text-[10px] font-mono text-[#E11D48] uppercase tracking-[0.4em] block">PROTOCOL_{reel.id}</span>
                <span className="text-sm font-display font-bold text-white tracking-wide block uppercase">{reel.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Reels;

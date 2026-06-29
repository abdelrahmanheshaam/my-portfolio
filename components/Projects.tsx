import React, { useEffect, useRef, useState } from 'react';
import { Code, ArrowUpRight, Monitor, Globe, Cpu, Layers, MousePointer2, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'City Donuts',
    client: 'City Donuts',
    category: 'LUXURY E-COMMERCE',
    image: '/assets/city.png',
    colors: ['#00F2FF', '#001A1A', '#003333'],
    liveUrl: '',
    description:"Curating artisanal indulgence through handcrafted, small-batch donuts. We fuse premium global ingredients with innovative flavor profiles to redefine your dessert experience."  ,
    details: 'Creative Studio with React and Gsap.js and Creative UI & UX ',
    isComingSoon: true 
  },
  {
    id: '2',
    title: 'Rbadw Creative Studio',
    client: 'Rbadw',
    category: 'LUXURY E-COMMERCE',
    image: '/assets/rbadw (1).png',
    colors: ['#FF4655', '#0F1923', '#ECE8E1'],
    liveUrl: 'https://rbadw.com/',
    description:  "Defined a new standard for creative portfolios. Engineered a high-performance, design-centric environment where brand narrative meets seamless technical execution.",
    details: 'Creative Studio with React and Gsap.js and Creative UI & UX '
  },
  {
    id: '3',
    title: 'Bridges PR',
    client: 'Bridges PR',
    category: 'LUXURY E-COMMERCE',
    image: '/assets/bridges.png',
    colors: ['#040406', '#DB735C', '#6F110D'],
    liveUrl: 'https://thebridgespr.com/',
    description: "Crafted a bespoke digital identity for high-impact communication. Integrated strategic messaging with a sophisticated interface to amplify brand authority and elevate client market presence.",
    details: 'Creative Studio with React and Gsap.js and Creative UI & UX '
  },
  {
    id: '4',
    title: 'Dress Me By Sara',
    client: 'Sara',
    category: 'LUXURY E-COMMERCE',
    image: '/assets/sara.png',
    colors: ['#00F2FF', '#001A1A', '#003333'],
    liveUrl: 'https://dressmebysara.com/',
    description: 'Engineered a high-performance, minimalist digital storefront for luxury fashion. Optimized asset delivery and interactive UI flows to maximize user engagement and facilitate seamless collection launches.',
    details: 'Wordpress E-commerce Platform for selling Fashion clothes  '
  },
  {
    id: '5',
    title: 'GOC Clinics',
    client: 'Bassim Fleega',
    category: 'HEALTHCARE PLATFORM & Booking system',
    image: '/assets/goc.png',
    colors: ['#040406', '#DB735C', '#6F110D'],
    liveUrl: 'https://gocclinics.com/',
    description: 'Developed a secure, custom scheduling architecture with integrated payment gateway APIs. Bridged complex backend booking logic with a seamless, accessible frontend user experience.',
    details: 'Built with React Three Fiber and Cannon.js. Custom lighting rig simulation with real-time shadow casting.'
  },
  {
    id: '6',
    title: 'Recruit CO',
    client: 'Aya',
    category: 'Immersive Web',
    image: '/assets/recrute.png',
    colors: ['#030753', '#020617', '#EEECE8'],
    liveUrl: 'https://rycruit.co/',
    description: 'Built robust, responsive UI components and dynamic data-handling modules. Focused on clean code architecture and state management to streamline professional workflows and user acquisition.',
    details: 'Advanced particle systems with compute shaders. Narrative-driven UI built with Atomic Design principles.'
  },
  {
    id: '7',
    title: 'The AK Designs',
    client: 'Akram',
    category: 'E-commerce',
    image: '/assets/ak.png',
    colors: ['#000000', '#020617', '#816849'],
    liveUrl: 'https://theakdesigns.com/',
    description: 'Crafted a visually striking digital presence tailored for A-class market targeting. Leveraged fluid animations and immersive layouts to translate premium interior aesthetics into a scalable web experience.',
    details: 'Advanced particle systems with compute shaders. Narrative-driven UI built with Atomic Design principles.'
  },
];

const Projects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const itemWidth = scrollContainerRef.current.children[0].clientWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <section id="projects" className="py-32 bg-[#020203] relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E11D48]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col mb-16 gap-6 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-[1px] bg-[#E11D48]"></div>
                <span className="text-[#E11D48] font-mono text-[10px] tracking-[0.5em] uppercase">Archive_01</span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white uppercase whitespace-normal md:whitespace-nowrap">
                Selected <span className="text-slate-700 italic">Deployments.</span>
              </h2>
            </div>

            <div className="hidden lg:flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-widest text-slate-400">
                <Globe size={12} className="text-[#E11D48]" /> Multi-Regional
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-widest text-slate-400">
                <Cpu size={12} className="text-[#E11D48]" /> Edge Node 2.4
              </div>
            </div>
          </div>

          <p className="text-slate-500 text-sm max-w-xl font-mono leading-relaxed">
            A continuous scroll-feed of immersive digital products. Swipe or scroll horizontally to explore the frontend archive.
          </p>
        </div>

        {/* Mobile Swipe Indicator (Above Cards) */}
        <div className="flex md:hidden justify-end mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Swipe</span>
            <ArrowRight size={14} className="text-[#E11D48] animate-swipe-right" />
          </div>
        </div>

        {/* Horizontal Scroll Feed */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-8 pb-4 md:pb-20 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing"
        >
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] group relative"
            >
              <div className="flex flex-col gap-8">
                {/* Browser Mockup Card */}
                <a
                  href={project.isComingSoon ? undefined : project.liveUrl}
                  target={project.isComingSoon ? undefined : "_blank"}
                  rel={project.isComingSoon ? undefined : "noopener noreferrer"}
                  className={`relative transition-all duration-700 block ${
                    project.isComingSoon 
                      ? 'cursor-default' 
                      : 'cursor-pointer group-hover:-translate-y-3'
                  }`}
                >
                  <div className={`bg-[#111118] rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 ${
                    !project.isComingSoon ? 'group-hover:border-[#E11D48]/40 group-hover:shadow-[0_40px_100px_-10px_rgba(225,29,72,0.15)]' : ''
                  }`}>
                    {/* Browser Toolbar */}
                    <div className="h-12 bg-[#1A1A1E] border-b border-white/5 flex items-center px-6 gap-4 relative z-30">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors"></div>
                      </div>
                      <div className="flex-1 max-w-md h-6 bg-black/40 rounded-lg flex items-center px-4 justify-center">
                        <span className="text-[9px] font-mono text-slate-600 truncate tracking-tight">{project.title.toLowerCase().replace(' ', '_')}.hesham.arc</span>
                      </div>
                      <div className="hidden sm:flex gap-4">
                        <Monitor size={14} className="text-slate-700" />
                        <Globe size={14} className="text-slate-700" />
                      </div>
                    </div>

                    {/* Content Image */}
                    <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-1000 ${
                          project.isComingSoon ? 'opacity-40 grayscale-[40%]' : 'scale-100 group-hover:scale-105'
                        }`}
                      />
                      
                      {/* Dark overlay for normal hover */}
                      {!project.isComingSoon && (
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700 z-10"></div>
                      )}

                      {/* Coming Soon Glassmorphism Overlay */}
                      {project.isComingSoon && (
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#020203]/40 backdrop-blur-[6px]">
                          <div className="flex items-center gap-3 px-6 py-3 bg-black/60 border border-white/10 rounded-full backdrop-blur-md shadow-2xl">
                            <div className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse"></div>
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white mt-[2px]">Coming Soon</span>
                          </div>
                        </div>
                      )}

                      {/* Hover Overlay Icon (Red Arrow) */}
                      {!project.isComingSoon && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                          <div className="w-20 h-20 bg-[#E11D48] rounded-full flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform">
                            <ArrowUpRight size={32} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Underglow */}
                  {!project.isComingSoon && (
                    <div className="absolute -z-10 inset-0 bg-[#E11D48]/5 rounded-2xl blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  )}
                </a>

                {/* Project Brief */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-[#E11D48] uppercase tracking-[0.3em] block">{project.category}</span>
                      <h3 className="text-3xl font-display font-bold text-white tracking-tight uppercase">{project.title}</h3>
                    </div>
                    <div className="px-3 py-1 border border-white/10 rounded text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                      {project.id.padStart(2, '0')}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-8">
          {PROJECTS.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeIndex ? 'w-8 bg-[#E11D48]' : 'w-1.5 bg-white/20'
              }`}
            />
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
        @keyframes swipeRight {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }
        .animate-swipe-right {
          animation: swipeRight 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
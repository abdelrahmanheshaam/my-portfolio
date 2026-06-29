
import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, ChevronRight, Cpu, Globe, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WorkEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  image: string;
  description: string;
  stack: string[];
}

const EXPERIENCE: WorkEntry[] = [
  {
    id: 'OP_04',
    company: 'Rbadw Creative Studio ',
    role: 'Web Developer ',
    period: 'May 2026 -Present',
    image: '/assets/rbadw.png',
    description: 'Architecting interactive brand platforms and immersive interfaces using GSAP and Three.js. Engineered seamless payment integrations and optimized asset delivery pipelines to ensure high-performance user journeys.',
    stack: ['WORDPRESS', 'REACT', 'THREE.JS', 'Optimization', 'PERFORMANCE']
  },
  {
    id: 'OP_03',
    company: 'PO5 Marketing',
    role: 'Frontend Developer',
    period: 'May 2025 - May 2026',
    image: 'https://www.po5agency.com/assets/po5logo.png',
    description: 'Architecting interactive brand platforms and immersive interfaces using GSAP and Three.js. Engineered seamless payment integrations and optimized asset delivery pipelines to ensure high-performance user journeys.',
    stack: ['WORDPRESS', 'REACT', 'THREE.JS', 'Optimization', 'PERFORMANCE']
  },
  {
    id: 'OP_02',
    company: 'Machinfy Acafemy',
    role: 'Junior Frontend Developer',
    period: 'Dec 2024 - Apr 2025',
    image: '/assets/machinfy.png',
    description: 'Developed responsive CRM dashboard modules and scalable UI components. Focused on build optimization using Webpack and Vite, while maintaining reliability through unit testing and Lighthouse performance audits.',
    stack: ['React', 'Next.js', 'WEBPACK', 'VITE', 'UNIT TESTING', 'AI Integration']
  },
  {
    id: 'OP_01',
    company: 'Freelance',
    role: 'Frontend Developer',
    period: 'April 2023 - Present',
    image: 'https://cdn3.f-cdn.com/ppic/234610445/logo/24295157/gzqsk/CROPPED_profile_logo_PXKDH_719f3fcba77d5c1695e751a70fd802f2.png?image-optimizer=force&format=webply&width=336',
    description: 'Deploying high-performance e-commerce interfaces and custom booking workflows. Specialized in bridging REST APIs with React architectures to deliver SEO-optimized and mobile-first digital products.',
    stack: ['E-COMMERCE', 'Design Systems', 'NEXT.JS', 'Wordpress', 'REST APIS', ' SEO']  
  }
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.exp-card');
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="py-32 bg-[#020203] relative overflow-hidden border-t border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#E11D48 1px, transparent 1px), linear-gradient(90deg, #E11D48 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        {/* Consistent Section Header */}
        <div className="flex flex-col mb-24 gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-[1px] bg-[#E11D48]"></div>
                <span className="text-[#E11D48] font-mono text-[10px] tracking-[0.5em] uppercase">Archive_03</span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white uppercase whitespace-nowrap">
                Experience <span className="text-slate-700 italic">History.</span>
              </h2>
            </div>

            <div className="hidden lg:flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-widest text-slate-400">
                <Briefcase size={12} className="text-[#E11D48]" /> Pro Node
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-widest text-slate-400">
                <Terminal size={12} className="text-[#E11D48]" /> Active_Stack
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-sm max-w-xl font-mono leading-relaxed">
            Deciphering complex requirements into seamless front-end deployments and interactive system architectures.
          </p>
        </div>

        {/* Timeline Structure */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#E11D48] via-[#E11D48]/20 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-24">
            {EXPERIENCE.map((exp, index) => (
              <div key={exp.id} className={`exp-card relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#020203] border-2 border-[#E11D48] rounded-full md:-translate-x-1/2 z-20 shadow-[0_0_15px_rgba(225,29,72,0.5)]"></div>

                {/* Content Side */}
                <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-right'}`}>
                  <div className="space-y-4">
                    <div className={`flex items-center gap-3 font-mono text-[10px] text-[#E11D48] tracking-widest uppercase ${index % 2 === 0 ? '' : 'justify-end'}`}>
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase">{exp.company}</h3>
                    <p className="text-[#E11D48] font-mono text-xs uppercase tracking-[0.2em]">{exp.role}</p>
                    <p className={`text-slate-400 text-sm leading-relaxed max-w-md ${index % 2 === 0 ? '' : 'ml-auto'}`}>
                      {exp.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 pt-2 ${index % 2 === 0 ? '' : 'justify-end'}`}>
                      {exp.stack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded text-[9px] font-mono text-slate-500 uppercase tracking-tighter">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-crosshair">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-full object-contain  group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020203] to-transparent opacity-60"></div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

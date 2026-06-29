
import React from 'react';
import { Terminal, Code2, Zap, Palette, Boxes, Cpu, Database, Layout, Command, ShieldCheck, Cpu as Chip, Globe, Zap as Flash, Monitor } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'React / Next.js', icon: <Boxes size={18} />, size: 'large', color: '#E11D48' },
    { name: 'TypeScript', icon: <Code2 size={16} />, size: 'small', color: '#3178C6' },
    { name: 'GSAP / Framer', icon: <Flash size={18} />, size: 'medium', color: '#E11D48' },
    { name: 'Three.js / WebGL', icon: <Chip size={18} />, size: 'large', color: '#E11D48' },
    { name: 'Tailwind CSS', icon: <Layout size={16} />, size: 'small', color: '#38B2AC' },
    { name: 'Zustand / Redux', icon: <Database size={16} />, size: 'small', color: '#764ABC' },
    { name: 'Shader Programming', icon: <Monitor size={18} />, size: 'medium', color: '#E11D48' },
    { name: 'API Architecture', icon: <Globe size={16} />, size: 'small', color: '#00DC82' },
    { name: 'Wordpress', icon: <Globe size={16} />, size: 'small', color: '#00DC82' },
  ];

  return (
    <section className="py-20 lg:py-40 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

        {/* Left Column: Profession & Expertise */}
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 text-[#E11D48] font-mono text-[10px] tracking-[0.4em] uppercase">
              <div className="w-8 h-[1px] bg-[#E11D48]"></div>
              Front End Developer
            </div>
            <h2 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tighter">
              From complex UI  <br />
              <span className="text-slate-600">to scalable code</span>
            </h2>
          </div>

          <p className="text-slate-400 text-lg lg:text-xl font-light leading-relaxed max-w-xl">
            I specialize in crafting <span className="text-white font-medium">immersive digital experiences</span> using modern tools like GSAP and Three.js. I build high-performance architectures where <span className="text-white font-medium">technical precision</span> meets <span className="text-white font-medium">aesthetic mastery</span>, translating business goals into seamless user journeys.
          </p>

          {/* Creative Staggered Skill Matrix */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`
                  group relative flex items-center gap-3 p-4 rounded-full border border-white/5 
                  bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-500 cursor-default
                  ${skill.size === 'large' ? 'px-8 border-[#E11D48]/20' : ''}
                  ${skill.size === 'medium' ? 'px-6' : 'px-5'}
                `}
              >
                {/* Subtle Hover Glow */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity blur-md"
                  style={{ backgroundColor: skill.color }}
                ></div>

                <div className="text-[#E11D48] group-hover:scale-110 transition-transform duration-500">
                  {skill.icon}
                </div>
                <span className={`
                  font-mono uppercase tracking-widest
                  ${skill.size === 'large' ? 'text-xs font-bold text-white' : 'text-[10px] text-slate-400'}
                `}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Representation (Pure Image) */}
        <div className="relative group">
          <div className="aspect-[4/5] lg:aspect-square w-full relative overflow-hidden rounded-[2.5rem] bg-[#0A0A10]">
            <img
              src="/assets/skills-photos.png"
              alt="Data and Design Concept"
              className="w-full h-full object-contain brightness-90 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
            />
            {/* Simple Premium Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-transparent opacity-80"></div>
          </div>

          {/* Minimalist Tech Stats Overlay */}
          <div className="absolute -bottom-6 -right-6 lg:-right-12 p-8 bg-[#020203]/90 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-2xl space-y-4 max-w-[240px]">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-[#E11D48]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">Identity Protocol</span>
            </div>
            <div className="h-px w-full bg-white/5"></div>
            <p className="text-[11px] font-mono text-slate-400 leading-relaxed italic">
              Execution focus: Immersive performance, pixel-perfect logic, and scalable design systems.
            </p>
          </div>

          {/* Decorative Framing */}
          <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-[#E11D48]/20 hidden lg:block"></div>
        </div>

      </div>
    </section>
  );
};

export default About;

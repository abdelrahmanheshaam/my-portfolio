import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const steps = [
    { 
      year: '2020 - 2024', 
      school: 'Higher Technological Institute', 
      desc: 'Acquired a Bachelor’s degree in Information Systems, focusing on core computer science principles and system architecture.' 
    },
    { 
      year: '2023 - 2024', 
      school: 'Machinfy Academy & IT Share', 
      desc: 'Completed professional certifications in Full-Stack Development, AI Copilot, and Software Testing to master modern workflows.' 
    },
    { 
      year: 'Present', 
      school: 'Self-Directed Evolution', 
      desc: 'Dedicated to mastering advanced web graphics (Three.js/GSAP) and Next.js to stay at the forefront of immersive technology.' 
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A10]/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-24">
          <div className="w-12 h-12 rounded-full bg-[#B61409]/10 flex items-center justify-center mb-4">
            <GraduationCap className="text-[#B61409]" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Education <span className="text-slate-500">Background.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Connector Line */}
          <div className="absolute top-[44px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="group">
                {/* Year Bubble */}
                <div className="mb-8 relative inline-block">
                  <div className="w-24 h-24 rounded-full bg-[#0A0A10] border border-[#B61409]/40 flex flex-col items-center justify-center transition-all duration-500 group-hover:border-[#B61409] group-hover:scale-110">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-slate-500 mb-1">Year</span>
                    <span className="text-[12px] font-mono font-bold text-white whitespace-pre-line leading-tight">
                      {step.year.replace(' - ', '\n')}
                    </span>
                  </div>
                  
                  {/* Decorative Outer Ring */}
                  <div className="absolute -inset-2 rounded-full border border-white/5 group-hover:border-[#B61409]/20 transition-colors duration-500"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#B61409] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-4 text-white group-hover:text-[#B61409] transition-colors duration-300">
                  {step.school}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light max-w-[280px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
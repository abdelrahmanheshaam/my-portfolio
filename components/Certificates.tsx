import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Award, ExternalLink, Cpu, Lock, Unlock, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  hash: string;
  category: string;
}

const CERTS: Certificate[] = [
  {
    id: 'CRT-001',
    title: 'AI Copilot Mastery',
    issuer: 'Machinfy Academy',
    date: '2024',
    hash: 'A1-2024-MCH-CP',
    category: 'AI Integration'
  },
  {
    id: 'CRT-002',
    title: 'Software Testing Certification',
    issuer: 'Machinfy Academy',
    date: '2024',
    hash: 'ST-2024-MCH-QA',
    category: 'Quality Assurance'
  },
  {
    id: 'CRT-003',
    title: 'Full-Stack Web Development',
    issuer: 'IT Share',
    date: '2023',
    hash: 'FS-2023-ITS-DB',
    category: 'Architecture'
  },
  {
    id: 'CRT-004',
    title: 'English Proficiency',
    issuer: '4 Level 1',
    date: '2023',
    hash: 'EN-2023-L4-V1',
    category: 'Communication'
  }
];

const CertCard: React.FC<{ cert: Certificate; index: number }> = ({ cert, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    
    gsap.fromTo(cardRef.current, 
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      { 
        opacity: 1, y: 0, filter: 'blur(0px)',
        duration: 1,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
        }
      }
    );
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="group relative bg-[#050508] border border-white/5 p-6 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#E11D48]/40 hover:shadow-[0_0_50px_rgba(225,29,72,0.1)]"
    >
      {/* Background Tech Detail */}
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <ShieldCheck size={80} className="text-[#E11D48]" />
      </div>

      <div className="relative z-10 space-y-6">
        {/* Header: ID and Category */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <span className="text-[9px] font-mono text-[#E11D48] tracking-[0.3em] uppercase block">Clearance_{cert.id}</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[8px] font-mono text-slate-500 uppercase">Verified_Status: ACTIVE</span>
            </div>
          </div>
          <div className="p-2 bg-white/5 rounded-lg text-slate-600 group-hover:text-[#E11D48] transition-colors">
            <Award size={16} />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h3 className="text-xl font-display font-bold text-white group-hover:text-[#E11D48] transition-colors leading-tight">
            {cert.title}
          </h3>
          <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px]">
            <Cpu size={12} />
            <span>{cert.issuer}</span>
          </div>
        </div>

        {/* Footer Metadata */}
        <div className="pt-6 border-t border-white/5 flex items-end justify-between">
          <div className="space-y-1">
            <span className="text-[8px] font-mono text-slate-600 uppercase block">Verification_Hash</span>
            <span className="text-[10px] font-mono text-slate-400">{cert.hash}</span>
          </div>

        </div>
      </div>

      {/* Hover "Scan Line" */}
      <div className="absolute inset-x-0 h-[2px] bg-[#E11D48] opacity-0 group-hover:opacity-40 shadow-[0_0_15px_#E11D48] z-20 pointer-events-none group-hover:animate-scan-vertical"></div>
    </div>
  );
};

const Certificates: React.FC = () => {
  return (
    <section className="py-32 bg-[#020203] relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Matrix */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#E11D48 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16 gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-10 h-[1px] bg-[#E11D48]"></div>
                <span className="text-[#E11D48] font-mono text-[10px] tracking-[0.5em] uppercase">Credential_Registry</span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white uppercase whitespace-nowrap">
                Validation <span className="text-slate-700 italic">Matrix.</span>
              </h2>
            </div>
            
            <div className="flex gap-4">
               <div className="hidden sm:flex items-center gap-4 px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] font-mono text-slate-600 uppercase">System Integrity</span>
                    <span className="text-[10px] font-mono text-green-500">100% SECURE</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-green-500/20 flex items-center justify-center">
                    <ShieldCheck size={20} className="text-green-500" />
                  </div>
               </div>
            </div>
          </div>
          <p className="text-slate-500 text-sm max-w-xl font-mono leading-relaxed">
            A secure registry of verified technical certifications and specialized training, validating core competencies in frontend architecture and system testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTS.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scanVertical {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 0.4; }
          80% { opacity: 0.4; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan-vertical {
          animation: scanVertical 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Certificates;
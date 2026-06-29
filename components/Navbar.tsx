
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-4 lg:p-6 pointer-events-none rounded-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center rounded-full bg-[#020203]/80 backdrop-blur-xl border border-white/5 px-4 lg:px-8 py-3 lg:py-4 pointer-events-auto shadow-2xl">
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#E11D48] flex items-center justify-center">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full"></div>
          </div>
          <span className="font-display font-bold text-base lg:text-lg tracking-tighter uppercase">
            Abdelrahman.<span className="text-[#E11D48]">Hesham</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.4em] text-slate-500">
          <a href="#projects" className="hover:text-[#E11D48] transition-all relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E11D48] transition-all group-hover:w-full"></span>
          </a>
          <a href="#reels" className="hover:text-[#E11D48] transition-all relative group">
            Reels
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E11D48] transition-all group-hover:w-full"></span>
          </a>
          <a href="#experience" className="hover:text-[#E11D48] transition-all relative group">
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#E11D48] transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <div className="flex gap-3 lg:gap-4">
            <a href="https://github.com/abdelrahmanheshaam/" className="text-slate-600 hover:text-[#E11D48] transition-colors"><Github size={16} /></a>
            <a href="https://www.linkedin.com/in/abdelrahman-hesham-591636320?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="text-slate-600 hover:text-[#E11D48] transition-colors"><Linkedin size={16} /></a>
          </div>
          <button className="hidden sm:block bg-[#E11D48] px-4 lg:px-6 py-2 text-[9px] lg:text-[10px] font-mono text-white uppercase tracking-widest hover:bg-[#9F1239] transition-all">
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

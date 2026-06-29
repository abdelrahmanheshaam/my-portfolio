
import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040406] border-t border-white/5 py-24 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B61409]/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-display font-bold">Abdelrahman.Hesham</h3>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            A frontend-centric engineer crafting high-end digital experiences and immersive web architectures for the modern web.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/abdelrahmanheshaam/" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#B61409] transition-all group">
              <Github size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/abdelrahman-hesham-591636320?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#B61409] transition-all group">
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:abdelrahmanhesham507@gmail.com" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#B61409] transition-all group">
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-[#B61409]">Navigation</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#home" className="hover:text-white transition-colors flex items-center gap-2 group">Home <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            <li><a href="#experience" className="hover:text-white transition-colors flex items-center gap-2 group">Projects <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            <li><a href="#home" className="hover:text-white transition-colors flex items-center gap-2 group">Contact <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-[#B61409]">Social Protocol</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="https://www.facebook.com/abdelrahman.hesham.50746444" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="https://www.instagram.com/abdelrahman_heshaam_0/" className="hover:text-white transition-colors">Instagram</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-[#B61409]">Status Report</h4>
          <div className="glass-gaming p-6 space-y-3">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-slate-500">SYSTEM HEALTH</span>
              <span className="text-green-500">OPTIMAL</span>
            </div>
            <div className="w-full h-1 bg-white/5">
              <div className="w-3/4 h-full bg-[#B61409]"></div>
            </div>
            <p className="text-[10px] font-mono text-slate-500 leading-relaxed italic">
              Currently architecting high-performance interfaces at PO5 Agency.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 text-[10px] font-mono uppercase tracking-widest">
          © 2024 Powred by ENG.Abdelrahman Hesham, ALL RIGHTS RESERVED.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

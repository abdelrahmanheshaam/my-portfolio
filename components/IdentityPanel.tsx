
import React from 'react';
import { DesignSystem } from '../types';
import { Target, Info, ChevronRight } from 'lucide-react';

const IdentityPanel: React.FC<{ system: DesignSystem }> = ({ system }) => {
  return (
    <div className="glass rounded-[2rem] p-10 border-white/5 relative overflow-hidden h-full">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
      
      <div className="flex items-start justify-between mb-12">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-red-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-2">
            <Target size={14} />
            Visual Blueprint
          </div>
          <h2 className="text-4xl font-display font-bold">{system.visualLanguage.aesthetic}</h2>
        </div>
        <div className="flex gap-2">
          {system.visualLanguage.keywords.map((word, i) => (
            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-slate-400">
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Info size={18} className="text-slate-500" />
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">Core Narrative</h4>
          </div>
          <p className="text-2xl text-slate-300 font-light leading-snug">
            "{system.visualLanguage.description}"
          </p>
        </div>

        <div className="pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">Layout Engine</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{system.layout}</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">3D Strategy</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{system.animations.threejs}</p>
          </div>
          <div className="space-y-4 col-span-2 md:col-span-1">
             <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-2xl flex flex-col justify-between h-full hover:bg-red-500/10 transition-colors group cursor-pointer">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-red-400 mb-4">Export Specs</span>
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">JSON/CSS</span>
                <ChevronRight className="text-red-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityPanel;

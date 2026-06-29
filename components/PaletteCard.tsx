
import React from 'react';
import { ColorSwatch } from '../types';
import { Copy } from 'lucide-react';

const PaletteCard: React.FC<{ color: ColorSwatch; index: number }> = ({ color, index }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="glass p-4 rounded-[2rem] border-white/5 group hover:border-red-500/30 transition-all duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div 
        className="w-full aspect-square rounded-2xl mb-6 relative overflow-hidden shadow-2xl"
        style={{ backgroundColor: color.hex }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
        <button 
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-black"
        >
          <Copy size={14} className={copied ? "text-green-400" : "text-white"} />
        </button>
      </div>
      
      <div className="space-y-1">
        <h5 className="font-display font-bold text-lg">{color.name}</h5>
        <p className="font-mono text-xs uppercase tracking-widest text-red-500/80 mb-2">{color.hex}</p>
        <p className="text-[11px] text-slate-500 leading-relaxed font-mono">
          {color.description}
        </p>
      </div>
    </div>
  );
};

export default PaletteCard;

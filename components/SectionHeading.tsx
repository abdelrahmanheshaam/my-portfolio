
import React from 'react';

const SectionHeading: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <div className="h-[1px] w-12 bg-red-500"></div>
        <span className="text-xs font-mono uppercase tracking-[0.5em] text-red-500">{subtitle}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">{title}</h2>
    </div>
  );
};

export default SectionHeading;

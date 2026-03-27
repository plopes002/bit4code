import React from 'react';

export const Logo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 120 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <rect x="0" y="5" width="30" height="30" rx="6" className="fill-primary" />
      <path 
        d="M10 12H20M10 20H20M10 28H15" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />
      <circle cx="24" cy="28" r="3" fill="white" />
      <text 
        x="38" 
        y="28" 
        className="fill-foreground font-headline font-bold text-2xl"
        style={{ letterSpacing: '-0.02em' }}
      >
        Bit<tspan className="fill-primary">4</tspan>Code
      </text>
    </svg>
  );
};
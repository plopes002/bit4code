"use client";

import React from 'react';

export default function HeroArt() {
  return (
    <div className="hero-art-container w-full h-full min-h-[300px] flex items-center justify-center relative overflow-hidden">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
        <defs>
          <filter id="premium-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="art-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
        
        <g filter="url(#premium-glow)">
          <path 
            d="M250 50 L450 150 V350 L250 450 L50 350 V150 L250 50Z" 
            stroke="url(#art-grad)" 
            strokeWidth="1" 
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <path d="M250 50 V450" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <path d="M50 150 L450 350" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <path d="M50 350 L450 150" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          
          <circle cx="250" cy="250" r="100" stroke="url(#art-grad)" strokeWidth="0.5" strokeDasharray="10 5" className="animate-spin" style={{ animationDuration: '20s' }} />
          <circle cx="250" cy="250" r="150" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        </g>
        
        <circle cx="250" cy="50" r="4" fill="hsl(var(--primary))" />
        <circle cx="450" cy="150" r="4" fill="hsl(var(--primary))" />
        <circle cx="450" cy="350" r="4" fill="hsl(var(--primary))" />
        <circle cx="250" cy="450" r="4" fill="hsl(var(--primary))" />
        <circle cx="50" cy="350" r="4" fill="hsl(var(--primary))" />
        <circle cx="50" cy="150" r="4" fill="hsl(var(--primary))" />
      </svg>
    </div>
  );
}

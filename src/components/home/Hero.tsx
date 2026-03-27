"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Terminal } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Abstract SVG Background Art */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-40">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="800" cy="200" r="400" fill="url(#grad1)" />
          <circle cx="100" cy="800" r="300" fill="url(#grad1)" />
          
          <g className="animate-pulse duration-[4000ms]">
            {[...Array(20)].map((_, i) => (
              <rect 
                key={i}
                x={100 + (i * 40)} 
                y={100 + (Math.sin(i) * 100)} 
                width="2" 
                height="200" 
                fill="hsl(var(--primary))" 
                opacity={0.1 + (Math.random() * 0.2)}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <Terminal className="h-3 w-3" />
            <span>Redefining Code Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight leading-[1.1]">
            Digital Transformation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Starts with Bit4Code
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            We build institutional-grade software solutions that combine high-performance architecture with modern digital dynamism.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto px-8 h-14 text-lg font-bold shadow-xl glow-magenta group" asChild>
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-14 text-lg font-bold hover:bg-muted transition-colors" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 pt-8 border-t border-border/50">
            <div>
              <p className="text-2xl font-bold">99.9%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Uptime</p>
            </div>
            <div>
              <p className="text-2xl font-bold">250+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Deployments</p>
            </div>
            <div>
              <p className="text-2xl font-bold">15ms</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Avg Latency</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative h-[500px] w-full">
          {/* Interactive Hero Art Piece */}
          <div className="absolute inset-0 animate-float">
            <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              
              {/* Abstract Cube Structure */}
              <g filter="url(#glow)">
                <path d="M250 100 L400 180 V320 L250 400 L100 320 V180 L250 100Z" stroke="hsl(var(--primary))" strokeWidth="2" strokeOpacity="0.8" />
                <path d="M250 100 V400" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M100 180 L250 260 L400 180" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M100 320 L250 260 L400 320" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3" />
              </g>

              {/* Glowing Points */}
              <circle cx="250" cy="100" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
              <circle cx="400" cy="180" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
              <circle cx="400" cy="320" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
              <circle cx="250" cy="400" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
              <circle cx="100" cy="320" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
              <circle cx="100" cy="180" r="4" fill="hsl(var(--primary))" className="animate-pulse" />
              <circle cx="250" cy="260" r="6" fill="white" className="animate-ping" style={{ animationDuration: '3s' }} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
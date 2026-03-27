import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Logo className="h-8 w-auto mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Pioneering digital excellence through precision code and visionary strategy. Bit4Code is your institutional partner for software evolution.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Capabilities</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Software Engineering</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cloud Architecture</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Contact</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Level 24, Tech Plaza<br />
              Innovation District, SF
            </p>
            <Link 
              href="mailto:hello@bit4code.com" 
              className="text-sm font-medium text-primary hover:underline transition-all"
            >
              hello@bit4code.com
            </Link>
          </div>
        </div>

        <Separator className="bg-border opacity-50 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Bit4Code Institutional. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">LinkedIn</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">X / Twitter</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
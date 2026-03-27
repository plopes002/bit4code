import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ServicesSection } from '@/components/home/ServicesSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <section className="py-12 border-y bg-muted/30">
          <div className="container mx-auto px-4 overflow-hidden">
            <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-8">Trusted Partners</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
              {['TECHCORE', 'QUANTUM', 'NEXTGEN', 'ALPHABIT', 'VELOCITY'].map((brand) => (
                <span key={brand} className="text-2xl font-black tracking-tighter">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        <ServicesSection />

        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold max-w-3xl mx-auto">
              Ready to evolve your institutional digital landscape?
            </h2>
            <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl mx-auto">
              Our engineering team is ready to discuss your next mission-critical project.
            </p>
            <div className="pt-4">
              <Button variant="secondary" size="lg" className="h-14 px-12 text-lg font-bold" asChild>
                <Link href="/contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
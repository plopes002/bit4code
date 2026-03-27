import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2 } from 'lucide-react';

const serviceDetails = [
  {
    title: "Software Engineering Excellence",
    description: "We don't just write code; we engineer systems. Our approach prioritizes maintainability, scalability, and type-safety to ensure long-term stability.",
    features: ["Domain-Driven Design", "Microservices Architecture", "Performance-first Code", "Test-driven Development"]
  },
  {
    title: "Institutional Digital Strategy",
    description: "Aligning your technological roadmap with business objectives. We help institutional leaders make informed decisions on their tech stack evolution.",
    features: ["Tech Auditing", "Cloud Roadmap Design", "AI Implementation Strategy", "Security Governance"]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mb-20 space-y-6">
            <h1 className="text-5xl md:text-6xl font-headline font-black">Our Capabilities</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bit4Code provides elite software engineering and strategic digital solutions for institutions that demand reliability and performance.
            </p>
          </header>

          <div className="space-y-32">
            {serviceDetails.map((s, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={i % 2 !== 0 ? 'lg:order-last' : ''}>
                  <div className="space-y-8">
                    <h2 className="text-4xl font-headline font-bold">{s.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {s.features.map((f, j) => (
                        <li key={j} className="flex items-center space-x-3 text-foreground font-medium">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-muted rounded-3xl aspect-video relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:opacity-100 transition-opacity duration-500 opacity-50" />
                  <div className="h-full w-full flex items-center justify-center">
                     <span className="text-8xl opacity-10 font-black select-none">{s.title.split(' ')[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
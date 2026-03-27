import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Cpu, Cloud, Shield, Zap, Code2, Layers } from 'lucide-react';

const services = [
  {
    title: 'Custom Engineering',
    description: 'High-performance software tailored to complex institutional workflows.',
    icon: Code2,
  },
  {
    title: 'Cloud Architecture',
    description: 'Scalable, resilient cloud infrastructures designed for zero downtime.',
    icon: Cloud,
  },
  {
    title: 'Security Hardening',
    description: 'Advanced protocols and auditing for mission-critical digital assets.',
    icon: Shield,
  },
  {
    title: 'Legacy Migration',
    description: 'Seamlessly transition legacy systems into modern stack architectures.',
    icon: Layers,
  },
  {
    title: 'AI Integration',
    description: 'Leveraging modern LLMs and data science for institutional efficiency.',
    icon: Cpu,
  },
  {
    title: 'Performance Ops',
    description: 'Latency-focused optimization for high-traffic digital interfaces.',
    icon: Zap,
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Core Services</h2>
          <h3 className="text-4xl md:text-5xl font-headline font-bold">Institutional Capabilities</h3>
          <p className="text-muted-foreground text-lg">
            We provide a comprehensive suite of digital services designed for technical superiority and long-term institutional stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:border-primary/50 transition-custom bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground pt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-1 w-0 group-hover:w-full bg-primary/30 transition-all duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
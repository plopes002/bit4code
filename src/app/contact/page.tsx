import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <header className="space-y-6">
                <h1 className="text-5xl font-headline font-black">Get in Touch</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Have an institutional project or a complex technical challenge? Let's discuss how Bit4Code can help you scale.
                </p>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email us</h4>
                    <Link href="mailto:hello@bit4code.com" className="text-primary hover:underline transition-all">hello@bit4code.com</Link>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call us</h4>
                    <p className="text-muted-foreground">+1 (555) 0123-CODE</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Institutional HQ</h4>
                    <p className="text-muted-foreground">Tech Plaza, SF, California</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Support</h4>
                    <Link href="#" className="text-primary hover:underline transition-all">Visit Help Center</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-3xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider opacity-70">First Name</label>
                    <Input placeholder="John" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider opacity-70">Last Name</label>
                    <Input placeholder="Doe" className="h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-70">Email Address</label>
                  <Input type="email" placeholder="john@company.com" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-70">Message</label>
                  <Textarea placeholder="Tell us about your project..." className="min-h-[150px]" />
                </div>
                <Button className="w-full h-14 text-lg font-bold glow-magenta" type="submit">
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
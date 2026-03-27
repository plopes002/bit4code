import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-headline font-black mb-12">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information Collection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bit4Code Institutional respects your privacy. We collect only the information necessary to provide our services and communicate with our clients. This includes contact details provided through our inquiry forms and analytical data to improve our digital experiences.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Data Usage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your data is used solely for service delivery, institutional communication, and internal analytics. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">3. Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement advanced security measures including encryption and secure headers (CSP, HSTS) to maintain the safety of your information across all Bit4Code digital properties.
              </p>
            </section>
            <p className="text-sm text-muted-foreground italic pt-8 border-t">
              Last Updated: May 2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
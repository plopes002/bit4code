import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-headline font-black mb-12">Terms of Use</h1>
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Institutional Engagement</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing this website, you are agreeing to be bound by these Terms of Use, all applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials contained in this website are protected by applicable copyright and trademark law. The "Bit4Code" brand and associated graphics are the exclusive property of Bit4Code Institutional.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">3. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Bit4Code or its suppliers be liable for any damages arising out of the use or inability to use the materials on Bit4Code's website.
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
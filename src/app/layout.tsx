import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import BrandLogo from '@/components/BrandLogo';

export const metadata: Metadata = {
  metadataBase: new URL('https://bit4code.digital'),
  title: {
    default: 'Bit4code | Tecnologia, Automação, IA e CyberSecurity',
    template: '%s | Bit4code',
  },
  description:
    'A Bit4code desenvolve soluções digitais com foco em programação, automação, IA, SaaS, TI, CyberSecurity e produtos próprios como o ViraLink.',
  applicationName: 'Bit4code',
  keywords: [
    'Bit4code',
    'programação',
    'automação',
    'inteligência artificial',
    'TI',
    'cybersecurity',
    'SaaS',
    'ViraLink',
  ],
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/icon',
    shortcut: '/icon',
    apple: '/icon',
  },
  openGraph: {
    title: 'Bit4code',
    description:
      'Tecnologia sob medida para acelerar negócios com software, automação, IA, TI e segurança digital.',
    url: 'https://bit4code.digital',
    siteName: 'Bit4code',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Bit4code',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bit4code',
    description:
      'Tecnologia sob medida para acelerar negócios com software, automação, IA, TI e segurança digital.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navItems = [
  { href: '/', label: 'Início' },
  { href: '/services', label: 'Serviços' },
  { href: '/contact', label: 'Contato' },
  { href: '/privacy', label: 'Privacidade' },
  { href: '/terms', label: 'Termos' },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="font-body antialiased bg-background text-foreground">
        <div className="site-shell">
          <header className="topbar">
            <div className="container topbar-inner mx-auto px-4">
              <BrandLogo href="/" size="md" variant="full" />

              <nav className="nav hidden md:flex" aria-label="Principal">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-grow">{children}</main>

          <footer className="footer mt-auto py-12 border-t bg-card">
            <div className="container footer-grid mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <BrandLogo href="/" size="sm" variant="full" showTagline />
                <p className="footer-copy mt-4 text-muted-foreground text-sm">
                  Soluções digitais profissionais em software, automação, IA, TI e segurança.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Empresa</h3>
                <p className="text-muted-foreground text-sm">BIT 4 CODE LTDA</p>
                <p className="text-muted-foreground text-sm">CNPJ: 36.989.661/0001-39</p>
              </div>

              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Contato</h3>
                <p className="text-sm">
                  <a href="mailto:dev@bit4code.digital" className="text-primary hover:underline transition-all">dev@bit4code.digital</a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

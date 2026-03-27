import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://bit4code.digital'),
  title: {
    default: 'Bit4code | Tecnologia, Automação, IA, TI e CyberSecurity',
    template: '%s | Bit4code',
  },
  description:
    'A Bit4code desenvolve soluções profissionais em programação, automação, inteligência artificial, TI, CyberSecurity, SaaS e produtos digitais como o ViraLink.',
  applicationName: 'Bit4code',
  keywords: [
    'Bit4code',
    'programação',
    'automação',
    'inteligência artificial',
    'TI',
    'CyberSecurity',
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
      'Tecnologia profissional para empresas que precisam de software, automação, IA, TI e segurança digital.',
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
      'Tecnologia profissional para empresas que precisam de software, automação, IA, TI e segurança digital.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased">
        <div className="site-shell flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-grow">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
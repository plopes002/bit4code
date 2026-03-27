import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bit4Code | Digital Innovation & Code Mastery',
  description: 'Bit4Code delivers high-performance digital solutions and software engineering excellence for the modern institution.',
  keywords: ['software development', 'code quality', 'digital innovation', 'institutional tech', 'Bit4Code'],
  openGraph: {
    title: 'Bit4Code | Digital Innovation',
    description: 'Expert software engineering for the digital age.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
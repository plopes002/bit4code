'use client';

import Link from 'next/link';
import { useState } from 'react';
import Brand from '@/components/Brand';

const links = [
  { href: '/', label: 'Início' },
  { href: '/services', label: 'Serviços' },
  { href: '/contact', label: 'Contato' },
  { href: '/privacy', label: 'Privacidade' },
  { href: '/terms', label: 'Termos' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="container topbar-inner mx-auto px-4">
        <Brand href="/" />

        <button
          type="button"
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Principal">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:dev@bit4code.digital"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Fale conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
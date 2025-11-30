'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/60 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="text-2xl font-bold text-white transition-opacity hover:opacity-80"
        >
          willian-dev
          <span className="text-cyan-400">/</span>
        </Link>

        <nav className="text-md hidden gap-8 font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative after:block after:h-0.5 after:w-0 after:bg-cyan-500 after:transition-all after:duration-300 after:content-[''] hover:text-cyan-500 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon-lg"
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>

        {isOpen && (
          <nav className="absolute top-20 left-0 w-full border-b border-white/10 bg-slate-950/95 backdrop-blur-md md:hidden">
            <div className="flex flex-col items-end gap-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg transition-colors hover:text-cyan-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

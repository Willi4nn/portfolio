'use client';

import { useMotionValueEvent, useScroll } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
];

export function Header() {
  const [isTop, setIsTop] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsTop(latest < 10);
  });

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isTop
          ? 'bg-transparent'
          : 'bg-black/70 shadow-lg backdrop-blur-xl supports-backdrop-filter:bg-black/30'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-center px-4 sm:h-20 sm:px-6 md:px-12">
        <nav className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium md:gap-8 md:text-base">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-neon-cyan hover:text-glow-cyan after:bg-neon-cyan relative text-slate-300 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

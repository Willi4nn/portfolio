'use client';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
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
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsOpen(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-lg supports-backdrop-filter:bg-slate-950/40"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="text-2xl font-bold text-white transition-opacity hover:opacity-80"
        >
          willian-dev<span className="text-cyan-500">/</span>
        </Link>

        <nav className="text-md hidden gap-8 font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-slate-300 transition-colors hover:text-cyan-400"
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
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 left-0 w-full border-b border-white/5 bg-slate-950/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-end gap-4 p-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg text-slate-300 transition-colors hover:text-cyan-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}

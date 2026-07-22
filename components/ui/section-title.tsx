'use client';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  highlighted?: string;
  className?: string;
}

export function SectionTitle({
  children,
  highlighted,
  className = '',
}: SectionTitleProps) {
  return (
    <motion.h2
      className={`mb-10 text-center text-2xl font-bold tracking-tight text-white md:text-3xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}{' '}
      {highlighted && (
        <span className="text-neon-cyan text-glow-cyan">{highlighted}</span>
      )}
    </motion.h2>
  );
}

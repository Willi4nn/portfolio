'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function GridBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 z-0',
          'bg-grid-neon',
          'mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]'
        )}
      />

      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="from-neon-purple/30 via-neon-magenta/20 to-neon-cyan/10 absolute top-10 left-10 h-[500px] w-[500px] rounded-full bg-linear-to-br blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="from-neon-cyan/20 via-neon-blue/20 to-neon-pink/10 absolute right-10 bottom-10 h-[600px] w-[600px] rounded-full bg-linear-to-tl blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="from-neon-magenta/20 via-neon-purple/20 absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tr to-transparent blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

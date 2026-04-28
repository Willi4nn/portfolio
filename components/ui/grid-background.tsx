'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GridBackgroundProps {
  children: ReactNode;
}

export function GridBackground({ children }: GridBackgroundProps) {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 z-0',
          'bg-size-[40px_40px]',
          'bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]',
          'mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]'
        )}
      />

      <div className="pointer-events-none absolute inset-0 z-0 flex justify-center overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-100 h-[400px] w-[400px] rounded-full bg-linear-to-br from-purple-600 via-blue-500 to-teal-400 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-[30%] left-180 h-[400px] w-[400px] rounded-full bg-linear-to-br from-purple-600 via-blue-500 to-teal-400 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="absolute top-20 right-100 h-[300px] w-[300px] rounded-full bg-linear-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

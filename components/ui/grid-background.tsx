import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GridBackgroundProps {
  children: ReactNode;
}

export function GridBackground({ children }: GridBackgroundProps) {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden'
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0',
          'bg-size-[40px_40px]',
          'bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]',
          'mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]'
        )}
      />
      <div className="absolute top-10 left-100 h-[400px] w-[400px] rounded-full bg-linear-to-br from-purple-600 via-blue-500 to-teal-400 opacity-40 blur-3xl" />
      <div className="absolute top-[30%] left-180 h-[400px] w-[400px] rounded-full bg-linear-to-br from-purple-600 via-blue-500 to-teal-400 opacity-40 blur-3xl" />
      <div className="absolute top-20 right-100 h-[300px] w-[300px] rounded-full bg-linear-to-tr from-indigo-500 via-fuchsia-500 to-pink-500 opacity-40 blur-3xl" />
      {children}
    </div>
  );
}

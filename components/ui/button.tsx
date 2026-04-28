import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
  {
    variants: {
      variant: {
        default:
          'bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/20',
        outline:
          'border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-600',
        secondary:
          'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:-translate-y-0.5 hover:shadow-md',
        ghost: 'hover:bg-slate-800/50 hover:text-white',
        link: 'text-cyan-400 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4',
        lg: 'h-12 px-8 text-base',
        icon: 'size-11',
        'icon-sm': 'size-9',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  cn(
    'group inline-flex items-center justify-center gap-2 shrink-0',
    'whitespace-nowrap rounded-lg text-sm font-semibold tracking-wide',
    'transition-all duration-300 ease-out active:scale-[0.96]',
    'outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4',
    'effect-shine'
  ),
  {
    variants: {
      variant: {
        default:
          'bg-neon-cyan text-background border border-neon-cyan hover:bg-neon-cyan/90 hover:-translate-y-1 hover:shadow-[0_0_30px] hover:shadow-neon-cyan/50',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 hover:-translate-y-1 hover:shadow-[0_0_30px] hover:shadow-red-500/50',
        outline:
          'border-2 border-white/10 bg-transparent text-white/80 hover:-translate-y-1 hover:border-neon-cyan/80 hover:bg-neon-cyan/10 hover:text-neon-cyan hover:shadow-[0_0_20px] hover:shadow-neon-cyan/30',
        secondary:
          'bg-white/5 text-white/90 backdrop-blur-md hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg',
        ghost: 'hover:bg-white/5 hover:text-white',
        link: 'text-neon-cyan underline-offset-4 hover:underline [removeClass:effect-shine]',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-8 text-base',
        icon: 'h-11 w-11',
        'icon-sm': 'h-9 w-9',
        'icon-lg': 'h-12 w-12',
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
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
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

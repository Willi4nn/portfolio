import { IconKey, iconMap } from '@/lib/icons';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  href: string;
  icon: IconKey;
  borderColor?:
    | 'white'
    | 'blue-500'
    | 'red-500'
    | 'green-500'
    | 'magenta'
    | 'cyan';
  label: string;
  className?: string;
}

const themeMap = {
  white:
    'hover:border-white hover:bg-white/10 hover:shadow-white/30 hover:text-white',
  'blue-500':
    'hover:border-[#00a0ff] hover:bg-[#00a0ff]/10 hover:shadow-[#00a0ff]/40 hover:text-[#00a0ff]',
  'red-500':
    'hover:border-[#ff003c] hover:bg-[#ff003c]/10 hover:shadow-[#ff003c]/40 hover:text-[#ff003c]',
  'green-500':
    'hover:border-[#00ffaa] hover:bg-[#00ffaa]/10 hover:shadow-[#00ffaa]/40 hover:text-[#00ffaa]',
  magenta:
    'hover:border-neon-magenta hover:bg-neon-magenta/10 hover:shadow-neon-magenta/40 hover:text-neon-magenta',
  cyan: 'hover:border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-neon-cyan/40 hover:text-neon-cyan',
} as const;

export default function SocialLink({
  href,
  icon,
  borderColor = 'white',
  label,
  className,
}: SocialLinkProps) {
  const isExternal = href.startsWith('http');
  const activeThemeClass = themeMap[borderColor] || themeMap.white;

  const IconComponent = iconMap[icon];
  if (!IconComponent) return null;

  return (
    <a
      href={href}
      className={cn(
        'group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/70 bg-white/5 text-white/70 shadow-sm backdrop-blur-md transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-1.5 hover:scale-105 hover:shadow-[0_0_20px] active:scale-95 active:transition-none',
        activeThemeClass,
        className
      )}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={label}
    >
      <span className="bg-background/95 text-foreground pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 scale-50 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold tracking-wider opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-100 group-hover:opacity-100">
        {label}
        <span className="bg-background/95 absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-white/10" />
      </span>

      <IconComponent
        className="size-6 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />
    </a>
  );
}

import { IconKey, iconMap } from '@/lib/icons';

interface SocialLinkProps {
  href: string;
  icon: IconKey;
  borderColor?: 'white' | 'blue-500' | 'red-500' | 'green-500';
  label: string;
}

const borderHoverMap = {
  white: 'hover:border-white hover:shadow-white/20',
  'blue-500': 'hover:border-blue-500 hover:shadow-blue-500/20',
  'red-500': 'hover:border-red-500 hover:shadow-red-500/20',
  'green-500': 'hover:border-green-500 hover:shadow-green-500/20',
} as const;

export default function SocialLink({
  href,
  icon,
  borderColor = 'white',
  label,
}: SocialLinkProps) {
  const isExternal = href.startsWith('http');
  const hoverClass = borderHoverMap[borderColor];

  const IconComponent = iconMap[icon];

  if (!IconComponent) return null;

  return (
    <a
      href={href}
      className={`group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-white/80 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/5 hover:text-white hover:shadow-lg active:scale-95 ${hoverClass}`}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={label}
    >
      <IconComponent
        className="size-6 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />
    </a>
  );
}

import { IconKey, iconMap } from '@/lib/icons';

interface SocialLinkProps {
  href: string;
  icon: IconKey;
  borderColor?: 'white' | 'blue-500' | 'red-500' | 'green-500';
  label: string;
}

const borderHoverMap = {
  white: 'hover:border-white',
  'blue-500': 'hover:border-blue-500',
  'red-500': 'hover:border-red-500',
  'green-500': 'hover:border-green-500',
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
      className={`group flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-white/80 transition-all duration-200 hover:scale-105 hover:bg-white/5 hover:text-white ${hoverClass}`}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={label}
    >
      <IconComponent
        className="h-6 w-6 transition-transform group-hover:scale-110"
        aria-hidden="true"
      />
    </a>
  );
}

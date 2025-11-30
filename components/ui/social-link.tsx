import { IconType } from 'react-icons';

interface SocialLinkProps {
  href: string;
  icon: IconType;
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
  icon: Icon,
  borderColor = 'white',
  label,
}: SocialLinkProps) {
  const isExternal = href.startsWith('http');
  const hoverClass = borderHoverMap[borderColor];

  return (
    <a
      href={href}
      className={`group flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-white/80 transition-all duration-200 hover:scale-105 hover:bg-white/5 hover:text-white ${hoverClass}`}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={label}
    >
      <Icon
        className="h-6 w-6 transition-transform group-hover:scale-110"
        aria-hidden="true"
      />
    </a>
  );
}

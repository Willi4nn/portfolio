import { IconKey, iconMap } from '@/lib/icons';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  icon: IconKey;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: { icon: 'w-4 h-4', gap: 'gap-2' },
  md: { icon: 'w-5 h-5', gap: 'gap-3' },
  lg: { icon: 'w-8 h-8', gap: 'gap-3' },
};

export function SkillBadge({
  icon,
  name,
  size = 'lg',
  className = '',
}: SkillBadgeProps) {
  const IconComponent = iconMap[icon];
  if (!IconComponent) return null;

  const { icon: iconSize, gap } = sizeMap[size];

  return (
    <div
      className={cn(
        `flex items-center ${gap} font-medium whitespace-nowrap text-white/90 transition-colors duration-200 select-none`,
        className
      )}
    >
      <IconComponent className={cn(iconSize, 'text-white/90')} />
      <span>{name}</span>
    </div>
  );
}

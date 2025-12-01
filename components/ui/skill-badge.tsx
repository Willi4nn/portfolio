import { IconKey, iconMap } from '@/lib/icons';

interface SkillBadgeProps {
  icon: IconKey;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { icon: 'w-4 h-4', text: 'text-sm' },
  md: { icon: 'w-5 h-5', text: 'text-base' },
  lg: { icon: 'w-8 h-8', text: 'text-xl' },
};

export function SkillBadge({ icon, name, size = 'md' }: SkillBadgeProps) {
  const IconComponent = iconMap[icon];

  if (!IconComponent) return null;

  return (
    <div className="flex min-w-max items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition-colors select-none hover:bg-white/10">
      <IconComponent className={`${sizeMap[size].icon} text-white/80`} />
      <span
        className={`${sizeMap[size].text} font-medium whitespace-nowrap text-white/90`}
      >
        {name}
      </span>
    </div>
  );
}

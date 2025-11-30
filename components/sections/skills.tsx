'use client';
import { SKILLS } from '@/data/skills';
import { useEffect, useRef, useState } from 'react';
import { SkillBadge } from '../ui/skill-badge';

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const third = el.scrollWidth / 3;

    const handleScroll = () => {
      if (el.scrollLeft >= third * 2) el.scrollLeft = third;
      else if (el.scrollLeft <= 0) el.scrollLeft = third;
    };

    el.scrollLeft = third;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const onStart = (clientX: number) => {
    if (!ref.current) return;
    setIsDragging(true);

    dragState.current = {
      startX: clientX - (ref.current.offsetLeft || 0),
      scrollLeft: ref.current.scrollLeft || 0,
    };
  };

  const onMove = (clientX: number) => {
    if (!isDragging || !ref.current) return;
    const { startX, scrollLeft } = dragState.current;
    const x = clientX - (ref.current.offsetLeft || 0);

    ref.current.scrollLeft = scrollLeft - (x - startX) * 2;
  };

  const onEnd = () => setIsDragging(false);

  const infiniteSkills = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <section
      id="skills"
      className="scroll-mt-10 border-t border-white/10 bg-transparent py-16"
    >
      <div className="mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Minhas {''} <span className="text-cyan-500">Habilidades</span>
        </h2>

        <div
          ref={ref}
          className="scrollbar-hide relative cursor-grab overflow-x-auto overflow-y-hidden active:cursor-grabbing"
          onMouseDown={(e) => onStart(e.pageX)}
          onMouseMove={(e) => onMove(e.pageX)}
          onMouseUp={onEnd}
          onMouseLeave={onEnd}
          onTouchStart={(e) => onStart(e.touches[0].pageX)}
          onTouchMove={(e) => onMove(e.touches[0].pageX)}
          onTouchEnd={onEnd}
        >
          <div className={`flex gap-3 ${!isDragging ? 'animate-marquee' : ''}`}>
            {infiniteSkills.map((skill, i) => (
              <SkillBadge
                key={i}
                icon={skill.icon}
                name={skill.name}
                size="lg"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          to { transform: translateX(-33.333333%); } // Mais preciso
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

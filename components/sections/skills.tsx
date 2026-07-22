'use client';
import { LogoCloud } from '@/components/ui/logo-cloud';
import { SectionTitle } from '@/components/ui/section-title';
import { SKILLS } from '@/data/skills';
import { motion } from 'motion/react';

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative scroll-mt-24 py-16 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="container mx-auto px-6">
        <SectionTitle highlighted="Habilidades">Minhas</SectionTitle>
        <LogoCloud skills={SKILLS} speed={35} direction="left" />
      </div>
    </motion.section>
  );
}

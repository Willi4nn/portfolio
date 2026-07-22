'use client';

import { motion } from 'motion/react';
import { GridBackground } from '../ui/grid-background';
import HeroCanvas from '../ui/hero-canvas';
import SocialLink from '../ui/social-link';
import { TypingText } from '../ui/typing-text';

export function About() {
  return (
    <section
      id="about"
      className="bg-background relative min-h-[70vh] w-full overflow-hidden md:min-h-[60vh]"
    >
      <HeroCanvas />

      <GridBackground>
        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center md:min-h-[70vh] md:py-20 lg:py-24">
          <motion.div
            className="w-full max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-neon-cyan mt-2 font-mono text-sm font-medium tracking-widest md:mt-4 md:text-xl lg:text-2xl">
              Olá, eu sou
            </p>

            <h1 className="mb-4 font-mono text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <TypingText
                text="Willian Pereira"
                className="text-foreground text-glow-magenta"
                typingSpeed={100}
                delay={500}
                loop={false}
              />
            </h1>

            <div className="text-neon-magenta mb-4 flex min-h-12 items-center justify-center font-mono text-lg font-semibold md:mb-8 md:min-h-16 md:text-3xl">
              <TypingText
                text={[
                  'Desenvolvedor Full Stack',
                  'Especialista em React e Node.js',
                  'Background Sólido em QA/SDET',
                ]}
                typingSpeed={60}
                eraseSpeed={30}
                pauseTime={2500}
                delay={2500}
                loop={true}
              />
            </div>

            <div className="text-foreground/80 mx-auto max-w-3xl space-y-4 px-2 text-sm leading-relaxed font-light sm:text-base md:space-y-6 md:text-lg lg:text-xl">
              <p>
                Desenvolvedor Full Stack com quase 3 anos de experiência em
                Quality Assurance (QA), combinando visão de engenharia,
                qualidade e experiência do usuário para construir aplicações web
                modernas, performáticas e confiáveis.
              </p>

              <p>
                Bacharel em Sistemas de Informação, especializado no ecossistema
                <strong className="font-medium text-white">
                  {' '}
                  TypeScript, React, Next.js e Node.js
                </strong>
                . Desenvolvo aplicações do frontend ao backend com foco em
                arquitetura escalável, código limpo, performance e excelente
                experiência do usuário.
              </p>
            </div>
          </motion.div>

          <div className="h-8 md:h-14" />

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <SocialLink
              href="https://github.com/Willi4nn"
              icon="github"
              borderColor="white"
              label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/willian-psilva"
              icon="linkedin"
              borderColor="blue-500"
              label="LinkedIn"
            />
          </motion.div>
        </div>
      </GridBackground>

      <div
        className="border-neon-magenta/20 absolute bottom-0 w-full border-t"
        aria-hidden="true"
      />
    </section>
  );
}

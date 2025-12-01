import { GridBackground } from '../ui/grid-background';
import SocialLink from '../ui/social-link';

export function About() {
  return (
    <div className="relative overflow-hidden bg-[#050505]">
      <GridBackground>
        <section
          id="about"
          className="relative mb-16 flex min-h-[50vh] flex-col items-center justify-center px-8 pt-35 text-center"
        >
          <div className="max-w-3xl text-center">
            <h1 className="mb-2 text-5xl font-bold">
              Olá, sou <span className="text-cyan-500">Willian</span>
            </h1>
            <p className="mb-4 text-4xl font-bold text-cyan-500">
              Desenvolvedor Frontend
            </p>
            <p className="justify-center text-lg leading-relaxed text-gray-300">
              Sou desenvolvedor front-end com formação em QA, o que me permite
              escrever código de qualidade, robusto e de fácil manutenção desde
              o início. Atuo com React (React.js e Mobile) e Node.js, entregando
              interfaces de alto desempenho com padrões sólidos de engenharia.
              <br />
              Formado em Sistemas de Informação, tenho experiência em trabalho
              remoto com soluções B2B. Minha combinação de expertise técnica e
              mentalidade analítica garante aplicações confiáveis, escaláveis e
              bem estruturadas.
            </p>
          </div>
          <div className="mx-2 h-8 w-px" />
          <div className="flex items-center gap-5">
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
          </div>
        </section>
      </GridBackground>
    </div>
  );
}

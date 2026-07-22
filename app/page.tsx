import { Header } from '@/components/layout/header';
import { About } from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden text-slate-50">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

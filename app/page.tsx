import { Header } from '@/components/layout/header';
import { About } from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />
      <div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

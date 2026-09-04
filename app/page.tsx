import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/skills/Skills';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-tertiary">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

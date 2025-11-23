import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Entrepreneurship from '@/components/Entrepreneurship';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="wavy-bg"></div>
      
      <Navigation />

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-4 pb-12">
        <Hero />
        <AboutMe />
        <Experience />
        <Entrepreneurship />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

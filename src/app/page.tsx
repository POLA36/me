import ThreeBackground from '@/components/ThreeBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ResearchIndex from '@/components/ResearchIndex';
import Projects from '@/components/Projects';
import Creative from '@/components/Creative';
import AboutMe from '@/components/AboutMe';
import Mission from '@/components/Mission';
import WorkWithLitapola from '@/components/WorkWithLitapola';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div
      style={{
        position: 'relative',
        background: '#000',
        color: '#fff',
        overflowX: 'hidden',
        width: '100%',
        minHeight: '100vh',
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* Three.js canvas background */}
      <ThreeBackground />

      {/* Subtle grid overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px),' +
            'linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),' +
            'linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)',
          backgroundSize: '40px 40px,40px 40px,200px 200px,200px 200px',
        }}
      />

      {/* Radial vignette */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,.85) 100%)',
        }}
      />

      {/* Page content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navigation />
        <Hero />
        <ResearchIndex />
        <Projects />
        <Creative />
        <AboutMe />
        <Mission />
        <WorkWithLitapola />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

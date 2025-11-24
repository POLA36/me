'use client';

import { scrollToSection } from '@/utils/scroll';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/80 backdrop-blur-md border-b border-white/5 supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-4">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
            <span className="text-sm font-bold text-white">LA</span>
          </div>
        </a>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <a 
          href="#contact" 
          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          className="btn-primary text-sm"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      onClick={(e) => { e.preventDefault(); scrollToSection(href.replace('#', '')); }}
      className="text-sm text-white/60 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}


'use client';

import { scrollToSection } from '@/utils/scroll';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-2 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-4">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center hover:scale-110 transition-transform">
            <span className="text-sm font-bold">LP</span>
          </div>
        </a>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a 
          href="#about" 
          onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          className="text-sm hover:text-purple-400 transition-colors"
        >
          About Me
        </a>
        <a 
          href="#experience" 
          onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
          className="text-sm hover:text-purple-400 transition-colors"
        >
          Experience
        </a>
        <a 
          href="#skills" 
          onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
          className="text-sm hover:text-purple-400 transition-colors"
        >
          Our Service
        </a>
        <a 
          href="#contact" 
          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          className="gradient-button px-6 py-2 rounded-full text-sm font-medium"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}


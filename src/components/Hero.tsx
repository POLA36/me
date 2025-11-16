export default function Hero() {
  return (
    <section id="home" className="mt-24 md:mt-32 mb-24 md:mb-32 scroll-mt-20">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Left Side - Greeting and Tagline */}
        <div className="md:col-span-1">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Hello,
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Delivering reliable, scalable financial and enterprise systems for the next generation of African innovation.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-purple-400">—</span>
              <span className="text-lg text-gray-300">Software Engineer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">—</span>
              <span className="text-lg text-gray-300">Fullstack</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">—</span>
              <span className="text-lg text-gray-300">Enterprise Systems</span>
            </div>
          </div>
        </div>

        {/* Center - Profile Picture with Social Icons */}
        <div className="relative flex justify-center items-center md:col-span-1">
          <div className="relative">
            {/* Profile Picture Container */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-purple-500/30 to-orange-500/30 p-1">
              <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center">
                <div className="w-44 h-44 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center text-5xl md:text-6xl font-bold">
                  AL
                </div>
              </div>
            </div>

            {/* Social Media Icons with Connecting Lines */}
            <a 
              href="https://github.com/POLA36" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute -top-4 -left-4 w-12 h-12 dark-card rounded-lg flex items-center justify-center border border-white/10 social-icon"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/litapola/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-1/2 -left-8 w-12 h-12 dark-card rounded-lg flex items-center justify-center border border-white/10 social-icon"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://www.behance.net/abdellita" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-1/2 -right-8 w-12 h-12 dark-card rounded-lg flex items-center justify-center border border-white/10 social-icon"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2c0-2.8-2.2-5-5-5s-5 2.2-5 5v2H2v6h7v8h6v-8h7V7zm-11-2c0-1.7 1.3-3 3-3s3 1.3 3 3v2h-6V5z"/>
              </svg>
            </a>
            <a 
              href="https://x.com/_litapola" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute -top-4 -right-4 w-12 h-12 dark-card rounded-lg flex items-center justify-center border border-white/10 social-icon"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://medium.com/@litapo489" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute -bottom-4 -left-4 w-12 h-12 dark-card rounded-lg flex items-center justify-center border border-white/10 social-icon"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
              <line x1="50%" y1="50%" x2="8%" y2="8%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="8%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="92%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="92%" y2="8%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="8%" y2="92%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* Right Side - Name */}
        <div className="md:col-span-1 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            I am <br />
            <span className="gradient-text">Lita Abdel</span>
          </h2>
        </div>
      </div>
    </section>
  );
}


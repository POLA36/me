'use client';

export default function AboutMe() {
  return (
    <section id="about" className="mb-24 md:mb-32 mt-24 md:mt-32 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-blue-500/50"></span>
              About Me
            </h2>
            
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-3 space-y-6 text-gray-400 leading-relaxed font-light text-lg">
                <p>
                  I am a <span className="text-white font-medium">bilingual (English/French) software engineer</span> specialized in payment systems, core banking, and system integration. 
                  I’ve built and contributed to four major banking products: an EHR platform, a Core Banking System, a Payment System, and a Middleware platform.
                </p>
                <p>
                  I work <span className="text-white">end-to-end</span> — from understanding regulations, business logic, and workflows to designing and implementing secure, reliable, production-grade systems. 
                  I solve problems before writing code, and I bridge the gap between business and technology.
                </p>
                <p>
                  I currently work as both a frontend engineer on Payments and a backend integrator on Middleware, while also leading the development of my own startup, <span className="text-white">Roof</span>. 
                  I build systems that cannot fail.
                </p>
              </div>

              <div className="md:col-span-2 flex flex-col gap-4">
                <FeatureCard 
                  title="Enterprise Systems"
                  desc="Spring Boot, Java, Node.js"
                  icon="server"
                />
                <FeatureCard 
                  title="Architecture"
                  desc="Payment Systems, Automation"
                  icon="layout"
                />
                <FeatureCard 
                  title="Full Stack"
                  desc="React, Next.js, TypeScript"
                  icon="code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        {icon === 'server' && <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>}
        {icon === 'layout' && <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>}
        {icon === 'code' && <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
        <h3 className="font-medium text-white">{title}</h3>
      </div>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}


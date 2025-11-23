'use client';

export default function Entrepreneurship() {
  return (
    <section id="entrepreneurship" className="mb-24 md:mb-32 scroll-mt-20">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-orange-500/5 to-purple-500/5 rounded-2xl blur-3xl"></div>
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-orange-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Entrepreneurial Experience</h2>
          </div>

          {/* Roof App Card */}
          <div className="relative overflow-hidden rounded-2xl border border-orange-500/20 backdrop-blur-xl bg-[#1a1a1a]/90 p-6 md:p-8">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5 opacity-50"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center border border-orange-500/30 flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Founder & CEO — Roof (Real Estate App)</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>2023 – Present</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs bg-orange-500/10 border border-orange-500/30 text-orange-300">React Native</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-500/10 border border-purple-500/30 text-purple-300">Node.js</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-orange-500/10 border border-orange-500/30 text-orange-300">Startup</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Responsibilities</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                    <span className="leading-relaxed">Built entire application: React Native frontend, Node.js/Express backend</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                    <span className="leading-relaxed">Integrated video/image upload workflows using Cloudinary</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                    <span className="leading-relaxed">Designed product structure, navigation, monetization (credits, visit payments)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                    <span className="leading-relaxed">Led soft-launch and onboarding of property owners</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                    <span className="leading-relaxed">Collaborated with designer and CTO on expansion features</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></div>
                    <span className="leading-relaxed">Managed deployment (Render, Vercel) and technical strategy</span>
                  </li>
                </ul>
              </div>

              {/* Key Learnings */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Learnings</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-sm text-gray-300 italic">
                    <span className="text-lg text-orange-400">•</span>
                    <span className="leading-relaxed">End-to-end problem solving</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300 italic">
                    <span className="text-lg text-orange-400">•</span>
                    <span className="leading-relaxed">Product design + architecture</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300 italic">
                    <span className="text-lg text-orange-400">•</span>
                    <span className="leading-relaxed">Balancing speed with quality</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300 italic">
                    <span className="text-lg text-orange-400">•</span>
                    <span className="leading-relaxed">User behavior understanding</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-300 italic">
                    <span className="text-lg text-orange-400">•</span>
                    <span className="leading-relaxed">Leading small engineering/product teams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


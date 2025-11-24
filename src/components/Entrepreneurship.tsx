'use client';

export default function Entrepreneurship() {
  return (
    <section id="entrepreneurship" className="mb-24 md:mb-32 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-blue-500/50"></span>
          <h2 className="text-2xl md:text-3xl font-bold">Entrepreneurial Experience</h2>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">Founder & CEO — Roof</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    2023 – Present
                  </span>
                </div>
                <p className="text-gray-400 mb-6 text-lg">Real Estate Management Platform</p>

                <div className="space-y-4 mb-8">
                  <ResponsibilityItem text="Built entire application: React Native frontend, Node.js/Express backend" />
                  <ResponsibilityItem text="Integrated video/image upload workflows using Cloudinary" />
                  <ResponsibilityItem text="Designed product structure, navigation, monetization (credits, visit payments)" />
                  <ResponsibilityItem text="Led soft-launch and onboarding of property owners" />
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['React Native', 'Node.js', 'Startup', 'Product Design'].map((tag, i) => (
                    <span key={i} className="text-xs text-gray-500 px-2 py-1 rounded border border-white/5 bg-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a 
                    href="https://www.roofapp.app/en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                    Visit Website
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.abdelpola.Roof&pcampaignid=web_share" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                    Play Store
                  </a>
                </div>
              </div>

              {/* Key Learnings Side Panel */}
              <div className="w-full md:w-72 bg-white/5 rounded-xl p-6 border border-white/5">
                <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Key Learnings
                </h4>
                <ul className="space-y-3">
                  <LearningItem text="End-to-end problem solving" />
                  <LearningItem text="Product design + architecture" />
                  <LearningItem text="Balancing speed with quality" />
                  <LearningItem text="Leading small engineering teams" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResponsibilityItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-gray-300">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-500/50 flex-shrink-0"></span>
      <span className="leading-relaxed">{text}</span>
    </div>
  );
}

function LearningItem({ text }: { text: string }) {
  return (
    <li className="text-sm text-gray-400 flex items-start gap-2">
      <span className="text-orange-400/50 mt-0.5">•</span>
      {text}
    </li>
  );
}


'use client';

export default function AboutMe() {
  const features = [
    {
      number: '08+',
      title: 'Build Enterprise Systems',
      description: 'Build enterprise systems with Spring Boot, Java, Node.js, React, and Next.js.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-purple-500/20 to-orange-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      number: '∞',
      title: 'Enterprise Architecture',
      description: 'Understand enterprise architecture, payment systems, banking software, and process automation.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-orange-500/20 to-purple-500/20',
      borderColor: 'border-orange-500/30'
    }
  ];

  return (
    <section id="about" className="mb-24 md:mb-32 scroll-mt-20">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-orange-500/5 to-purple-500/5 rounded-2xl blur-3xl"></div>
        
        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Main About Card */}
          <div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-purple-500/20 backdrop-blur-xl bg-[#1a1a1a]/90 p-8 md:p-10">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-orange-500 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">About Me</h2>
              </div>
              
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I&apos;m <span className="text-purple-400 font-semibold">LITA POLA ABDEL</span>, a bilingual (EN/FR) engineer with hands-on experience building systems that keep organisations running.
                </p>
                <p>
                  I work on complex, high-impact systems used daily by staff, accountants, HR teams, and financial departments.
                </p>
                <p className="pt-2">
                  My strength is understanding both <span className="text-orange-400 font-semibold">business logic</span> and <span className="text-purple-400 font-semibold">technical architecture</span>, allowing me to deliver solutions that are both functional and robust.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-1">8+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-1">∞</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text mb-1">100%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Dedicated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="md:col-span-1 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border backdrop-blur-xl bg-[#1a1a1a]/80 p-6 transition-all duration-300 hover:border-purple-400/50 hover:bg-[#1a1a1a]/90 cursor-default"
                style={{
                  borderColor: feature.borderColor.includes('purple') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(249, 115, 22, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = feature.borderColor.includes('purple') ? 'rgba(139, 92, 246, 0.5)' : 'rgba(249, 115, 22, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = feature.borderColor.includes('purple') 
                    ? '0 10px 30px rgba(139, 92, 246, 0.2)' 
                    : '0 10px 30px rgba(249, 115, 22, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = feature.borderColor.includes('purple') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(249, 115, 22, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Glowing corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-3">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center border ${feature.borderColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <div className={feature.borderColor.includes('purple') ? 'text-purple-400' : 'text-orange-400'}>
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className={`text-3xl font-bold mb-1 ${feature.borderColor.includes('purple') ? 'text-purple-400' : 'text-orange-400'}`}>
                        {feature.number}
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition-all duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


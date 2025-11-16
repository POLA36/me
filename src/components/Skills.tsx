'use client';

export default function Skills() {
  const skills = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Fast',
      description: 'Optimal performance, ensuring quick load times and seamless user experience across all platforms.',
      gradient: 'from-purple-500/20 to-orange-500/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      hoverGlow: 'rgba(139,92,246,0.3)'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Responsive',
      description: 'Adaptive layouts designed to work flawlessly on any screen size, from mobile to desktop.',
      gradient: 'from-orange-500/20 to-purple-500/20',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-400',
      hoverGlow: 'rgba(249,115,22,0.3)'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Intuitive',
      description: 'Crafting user-friendly interfaces that prioritize ease of navigation and smooth interaction.',
      gradient: 'from-purple-500/20 to-orange-500/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      hoverGlow: 'rgba(139,92,246,0.3)'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Dynamic',
      description: 'Bringing web pages to life with interactive elements and modern animations.',
      gradient: 'from-orange-500/20 to-purple-500/20',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-400',
      hoverGlow: 'rgba(249,115,22,0.3)'
    }
  ];

  return (
    <section id="skills" className="mb-24 md:mb-32 scroll-mt-20">
      <div className="relative">
        {/* Futuristic background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-purple-500/10 rounded-2xl blur-3xl"></div>
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-orange-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">My Skills and Development</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border backdrop-blur-xl bg-[#1a1a1a]/80 p-6 transition-all duration-300 cursor-default"
                style={{
                  borderColor: skill.borderColor.includes('purple') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(249, 115, 22, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = skill.borderColor.includes('purple') ? 'rgba(139, 92, 246, 0.5)' : 'rgba(249, 115, 22, 0.5)';
                  e.currentTarget.style.boxShadow = `0 0 30px ${skill.hoverGlow}`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = skill.borderColor.includes('purple') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(249, 115, 22, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Glowing corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${skill.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 mb-4 rounded-lg bg-gradient-to-br ${skill.gradient} flex items-center justify-center border ${skill.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                    <div className={skill.iconColor}>
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition-all duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {skill.description}
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


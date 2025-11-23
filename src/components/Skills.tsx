'use client';

export default function Skills() {
  const technicalSkills = [
    {
      category: 'Frontend',
      items: ['React', 'React Native', 'Tailwind', 'Next.js'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'purple'
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'REST APIs'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'orange'
    },
    {
      category: 'Banking & Payments',
      items: ['SWIFT MT103/MT180', 'ISO 20022', 'RTGS', 'ACH', 'Reconciliation'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'purple'
    },
    {
      category: 'Middleware',
      items: ['Camunda BPMN', 'Workflow Automation', 'System Integration'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'orange'
    },
    {
      category: 'Systems',
      items: ['CBS modules', 'Party Management', 'EOD', 'Branch/Division Systems'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'purple'
    },
    {
      category: 'DevOps & Cloud',
      items: ['Docker', 'Render', 'Vercel', 'Cloudinary', 'API Integration'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: 'orange'
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'SQL'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: 'purple'
    },
    {
      category: 'Professional',
      items: ['Business Logic', 'System Architecture', 'Problem Solving', 'Documentation', 'Stakeholder Communication', 'Compliance'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'orange'
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
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border backdrop-blur-xl bg-[#1a1a1a]/80 p-6 transition-all duration-300 cursor-default"
                style={{
                  borderColor: skill.color === 'purple' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(249, 115, 22, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = skill.color === 'purple' ? 'rgba(139, 92, 246, 0.5)' : 'rgba(249, 115, 22, 0.5)';
                  e.currentTarget.style.boxShadow = skill.color === 'purple' ? '0 0 30px rgba(139,92,246,0.3)' : '0 0 30px rgba(249,115,22,0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = skill.color === 'purple' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(249, 115, 22, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color === 'purple' ? 'from-purple-500/20 to-orange-500/20' : 'from-orange-500/20 to-purple-500/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Glowing corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${skill.color === 'purple' ? 'from-purple-500/20 to-orange-500/20' : 'from-orange-500/20 to-purple-500/20'} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 mb-4 rounded-lg bg-gradient-to-br ${skill.color === 'purple' ? 'from-purple-500/20 to-purple-500/10' : 'from-orange-500/20 to-orange-500/10'} flex items-center justify-center border ${skill.color === 'purple' ? 'border-purple-500/30' : 'border-orange-500/30'} group-hover:scale-110 transition-transform duration-300`}>
                    <div className={skill.color === 'purple' ? 'text-purple-400' : 'text-orange-400'}>
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition-all duration-300">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span key={itemIndex} className={`text-xs px-2 py-1 rounded ${skill.color === 'purple' ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20' : 'bg-orange-500/10 text-orange-300 border border-orange-500/20'}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


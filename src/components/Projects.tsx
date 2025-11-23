'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Roof - Real Estate App',
      description: 'React Native frontend, Node.js/Express backend. Property management with video/image uploads, monetization system',
      gradient: 'from-orange-500/20 to-purple-500/20',
      borderColor: 'border-orange-500/30',
      hoverGlow: 'rgba(249,115,22,0.3)',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: 'Payment Processing Engine',
      description: 'Payment UI, transaction management, RTGS/ACH/SWIFT integration, reconciliation automation',
      gradient: 'from-purple-500/20 to-orange-500/20',
      borderColor: 'border-purple-500/30',
      hoverGlow: 'rgba(139,92,246,0.3)',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: 'Middleware Integration Hub',
      description: 'Camunda BPMN workflows, system-to-system communication, message routing and transformation',
      gradient: 'from-orange-500/20 to-purple-500/20',
      borderColor: 'border-orange-500/30',
      hoverGlow: 'rgba(249,115,22,0.3)',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Core Banking System (CBS)',
      description: 'Party Management, End-of-Day (EOD) subsystem, Division Management System',
      gradient: 'from-purple-500/20 to-orange-500/20',
      borderColor: 'border-purple-500/30',
      hoverGlow: 'rgba(139,92,246,0.3)',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="mb-24 md:mb-32">
      <div className="relative">
        {/* Futuristic background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-purple-500/10 rounded-2xl blur-3xl"></div>
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-orange-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">My Recent Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border backdrop-blur-xl bg-[#1a1a1a]/80 p-6 transition-all duration-300 cursor-default"
                style={{
                  borderColor: project.borderColor.includes('purple') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(249, 115, 22, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = project.borderColor.includes('purple') ? 'rgba(139, 92, 246, 0.5)' : 'rgba(249, 115, 22, 0.5)';
                  e.currentTarget.style.boxShadow = `0 0 30px ${project.hoverGlow}`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = project.borderColor.includes('purple') ? 'rgba(139, 92, 246, 0.3)' : 'rgba(249, 115, 22, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Glowing corner accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.gradient} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center border ${project.borderColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <div className={project.borderColor.includes('purple') ? 'text-purple-400' : 'text-orange-400'}>
                        {project.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {project.description}
                  </p>
                </div>
                
                {/* Hover arrow indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className={`w-5 h-5 ${project.borderColor.includes('purple') ? 'text-purple-400' : 'text-orange-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


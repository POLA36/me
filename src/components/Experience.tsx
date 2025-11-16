'use client';

export default function Experience() {
  const projects = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'E-HR (Enterprise Human Resource Platform)',
      items: [
        'Built employee management, payroll, allocation, attendance tracking',
        'Designed and consumed APIs, built UI flows, and led technical implementation',
        'Supported HR teams by integrating evaluation system, leave management, and contract workflows'
      ],
      color: 'purple'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Core Banking System (CBS)',
      items: [
        'Worked on party management, accounts, transactions, opposition management',
        'Built reconciliation logic and end-of-day processes',
        'Supported database modeling and business process definitions'
      ],
      color: 'orange'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Payment System',
      items: [
        'Implemented RTGS, ACH, and SWIFT flows (ISO20022 + MT messages)',
        'Developed payment repair flows and transaction validation logic',
        'Built generators for reconciliation reports and ledger updates',
        'Collaborated closely with finance teams to implement SLA, instant payments, and batch processes'
      ],
      color: 'purple'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Middleware Engineering',
      items: [
        'Built enterprise middleware connecting CBS, Payment, Internet banking, and third-party systems',
        'Developed IBAN transformation logic',
        'Built APIs for checkbook types, data mapping, and system-to-system communication',
        'Developed using Spring Boot, Java, Swagger, Docker, and Camunda'
      ],
      color: 'orange'
    }
  ];

  return (
    <section id="experience" className="mb-24 md:mb-32 scroll-mt-20">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-orange-500/5 to-purple-500/5 rounded-2xl blur-3xl"></div>
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-orange-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Engineering Success Stories</h2>
          </div>

          {/* Main Experience Card */}
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 backdrop-blur-xl bg-[#1a1a1a]/90 p-8 md:p-10">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 opacity-50"></div>
            
            {/* Header Section */}
            <div className="relative z-10 mb-8 pb-6 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Software Engineer</h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 text-purple-300">
                  PKFokam Research Center
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">September 2022 – Present</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 rounded-full text-xs bg-purple-500/10 border border-purple-500/30 text-purple-300">Enterprise Systems</span>
                <span className="px-3 py-1 rounded-full text-xs bg-orange-500/10 border border-orange-500/30 text-orange-300">Banking</span>
                <span className="px-3 py-1 rounded-full text-xs bg-purple-500/10 border border-purple-500/30 text-purple-300">Payments</span>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="relative z-10 grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border backdrop-blur-sm bg-[#0a0a0a]/60 p-6 transition-all duration-300 hover:border-purple-400/50 hover:bg-[#0a0a0a]/80"
                  style={{
                    borderColor: project.color === 'purple' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(249, 115, 22, 0.2)'
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color === 'purple' ? 'from-purple-500/10 to-transparent' : 'from-orange-500/10 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative z-10 flex items-center gap-3 mb-4`}>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color === 'purple' ? 'from-purple-500/20 to-purple-500/10' : 'from-orange-500/20 to-orange-500/10'} flex items-center justify-center border ${project.color === 'purple' ? 'border-purple-500/30' : 'border-orange-500/30'} group-hover:scale-110 transition-transform duration-300`}>
                      <div className={project.color === 'purple' ? 'text-purple-400' : 'text-orange-400'}>
                        {project.icon}
                      </div>
                    </div>
                    <h4 className={`text-lg font-bold ${project.color === 'purple' ? 'text-purple-300' : 'text-orange-300'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition-all duration-300`}>
                      {project.title}
                    </h4>
                  </div>
                  
                  {/* Items List */}
                  <ul className="relative z-10 space-y-2.5">
                    {project.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${project.color === 'purple' ? 'bg-purple-400' : 'bg-orange-400'} flex-shrink-0`}></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


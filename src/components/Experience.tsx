'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineer — Payments (Frontend) & Transaction Workflows',
      company: 'PKFokam Research Center (PKFokam Institute of Excellence)',
      period: 'Jan 2024 – Present',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      responsibilities: [
        'Develop and maintain the bank\'s payment UI and transaction management interfaces',
        'Implement payment repair workflows, exception handling, and validation steps',
        'Integrate and test payments using RTGS, ACH, SWIFT (ISO 20022, MT103, MT180)',
        'Build automation tools for reconciliation and report generation',
        'Support production teams with transaction issue investigation and root-cause analysis',
        'Collaborate on bank–client agreements, SLA requirements, and compliance',
        'Ensure secure, traceable, and auditable payment flows'
      ],
      achievements: [
        'Reduced payment failure cases through improved validations',
        'Automated reconciliation steps, reducing operator workload',
        'Improved transaction dashboards and operator experience'
      ],
      learnings: [
        'Precision and strict logic required in payment systems',
        'Business logic understanding is as important as coding',
        'How end-to-end flows work between CBS → Payment → Settlement'
      ],
      color: 'purple',
      tags: ['Payments', 'Frontend', 'SWIFT', 'RTGS', 'ACH']
    },
    {
      title: 'Middleware Engineer — Backend Integration & Workflow Automation',
      company: 'PKFokam Research Center (PKFokam Institute of Excellence)',
      period: 'Jul 2023 – Present',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      responsibilities: [
        'Build and maintain middleware for system-to-system communication',
        'Design and automate workflows using Camunda BPMN',
        'Develop backend services for CBS, Payment, and external APIs',
        'Create workflow maps and documentation for all process chains',
        'Automate message routing, transformation, and validation'
      ],
      achievements: [
        'Standardized workflow orchestration across departments',
        'Improved reliability of inter-system communication',
        'Enhanced deployment and debugging processes for middleware'
      ],
      learnings: [
        'System architecture thinking and clean workflow design',
        'Importance of structured communication between enterprise systems'
      ],
      color: 'orange',
      tags: ['Middleware', 'Camunda', 'BPMN', 'Integration']
    },
    {
      title: 'Core Banking System (CBS) Developer — Backend',
      company: 'PKFokam Research Center (PKFokam Institute of Excellence)',
      period: 'Jul 2022 – Jul 2023',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      responsibilities: [
        'Developed Party Management System modules (customer/KYC data)',
        'Worked on the End-of-Day (EOD) subsystem',
        'Built the Division Management System'
      ],
      achievements: [
        'Improved CBS response times and module reliability',
        'Stabilized EOD operations through backend optimizations',
        'Strengthened data handling security'
      ],
      learnings: [
        'Deep understanding of core banking logic',
        'Precision, discipline, and regulatory compliance in CBS development'
      ],
      color: 'purple',
      tags: ['CBS', 'Backend', 'Banking', 'EOD']
    },
    {
      title: 'EHR Developer — HR Information Systems',
      company: 'PKFokam Research Center (PKFokam Institute of Excellence)',
      period: 'Sep 2021 – Jul 2022',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      responsibilities: [
        'Built the Recruitment Management System',
        'Developed features for the Employee Evaluation System',
        'Built the Allocation System for staff and task assignments',
        'Contributed to the Payroll System',
        'Developed the CNPS Declaration Module (Cameroon social security)',
        'Delivered urgent HR modules with strict deadlines'
      ],
      achievements: [
        'Automated key HR processes used organization-wide',
        'Improved compliance with HR regulations',
        'Delivered critical features under high time pressure'
      ],
      learnings: [
        'Nothing is impossible: deliver even under pressure',
        'How HR systems function behind the scenes',
        'Importance of secure handling of sensitive employee data'
      ],
      color: 'orange',
      tags: ['EHR', 'HR Systems', 'Payroll', 'Recruitment']
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
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Professional Experience</h2>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border backdrop-blur-xl bg-[#1a1a1a]/90 p-6 md:p-8 transition-all duration-300 hover:border-purple-400/50"
                style={{
                  borderColor: exp.color === 'purple' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(249, 115, 22, 0.2)'
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color === 'purple' ? 'from-purple-500/5' : 'from-orange-500/5'} via-transparent to-transparent opacity-50`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color === 'purple' ? 'from-purple-500/20 to-purple-500/10' : 'from-orange-500/20 to-orange-500/10'} flex items-center justify-center border ${exp.color === 'purple' ? 'border-purple-500/30' : 'border-orange-500/30'} flex-shrink-0`}>
                        <div className={exp.color === 'purple' ? 'text-purple-400' : 'text-orange-400'}>
                          {exp.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-purple-300 text-sm md:text-base mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={`px-3 py-1 rounded-full text-xs ${exp.color === 'purple' ? 'bg-purple-500/10 border border-purple-500/30 text-purple-300' : 'bg-orange-500/10 border border-orange-500/30 text-orange-300'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-3 text-sm text-gray-300">
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${exp.color === 'purple' ? 'bg-purple-400' : 'bg-orange-400'} flex-shrink-0`}></div>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-sm text-gray-300">
                          <svg className={`w-4 h-4 mt-0.5 ${exp.color === 'purple' ? 'text-purple-400' : 'text-orange-400'} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="leading-relaxed">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What I Learned */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">What I Learned</h4>
                    <ul className="space-y-2">
                      {exp.learnings.map((learn, learnIndex) => (
                        <li key={learnIndex} className="flex items-start gap-3 text-sm text-gray-300 italic">
                          <span className={`text-lg ${exp.color === 'purple' ? 'text-purple-400' : 'text-orange-400'}`}>•</span>
                          <span className="leading-relaxed">{learn}</span>
                        </li>
                      ))}
                    </ul>
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


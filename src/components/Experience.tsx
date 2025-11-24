'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineer (Backend) — Middleware / Camunda Platform',
      company: 'PKFokam Research Center',
      period: 'Jul 2025 – Present',
      responsibilities: [
        'Build and maintain the integration layer connecting Core Banking, Payment, and Internet Banking systems',
        'Develop and expose REST APIs for inter-system communication and workflow orchestration',
        'Implement checkbook type APIs and IBAN transformation logic for international transactions',
        'Design and automate workflows using Camunda BPMN / DMN for process visualization',
        'Work on internationalization of services to standardize data exchange'
      ],
      tags: ['Spring Boot', 'Camunda', 'Swagger', 'REST APIs', 'Business Analysis']
    },
    {
      title: 'Software Engineer (Frontend + BA) — Payment System',
      company: 'PKFokam Research Center',
      period: 'Feb 2025 – Present',
      responsibilities: [
        'Built interfaces for RTGS, ACH, and SWIFT payment flows configurations',
        'Contributed to business analysis for reconciliation and SLA processes',
        'Developed dashboards for Transaction Monitoring, Payment Repair, and Message Validation',
        'Enabled real-time visibility and streamlined payment operations'
      ],
      tags: ['Next.js', 'ReactQuery', 'DevOps', 'Business Analysis', 'Team Leadership']
    },
    {
      title: 'Software Engineer (Frontend + BA) — Core Banking System',
      company: 'PKFokam Research Center',
      period: 'Jul 2024 – Feb 2025',
      responsibilities: [
        'Developed frontend for Party, Division, and Opposition modules',
        'Analyzed banking processes and translated them into functional UI logic',
        'Integrated APIs for Account, Loan, and Deposit management',
        'Improved banking operation visibility and user workflow efficiency'
      ],
      tags: ['Next.js', 'ReactQuery', 'Formik', 'Antd', 'Business Analysis']
    },
    {
      title: 'Frontend Lead Developer (Freelance)',
      company: 'ITC Service — Seedtrack.org',
      period: 'Mar 2024 – Sep 2024',
      responsibilities: [
        'Led UI development for an innovative agricultural platform',
        'Designed and optimized frontend components using ReactJS',
        'Integrated Google Maps API for geolocation and mapping features',
        'Collaborated with remote teams to deliver scalable solutions'
      ],
      tags: ['ReactJS', 'Google Maps API', 'Remote', 'Leadership']
    },
    {
      title: 'Software Engineer (Full-Stack + BA) — EHR System',
      company: 'PKFokam Research Center',
      period: 'Feb 2023 – Jul 2024',
      responsibilities: [
        'Took full ownership of frontend and backend modules for HR processes (CNPS, Payroll)',
        'Developed secure REST APIs with Spring Boot and maintained React.js frontend',
        'Conducted business analysis with HR teams to refine workflows and map data processes',
        'Introduced DevOps practices for smoother build and deployment cycles (Git)'
      ],
      tags: ['ReactJS', 'AngularJS', 'Spring Boot', 'DevOps', 'Architecture']
    },
    {
      title: 'Full-Stack Developer Intern (EHR System)',
      company: 'PKFokam Research Center',
      period: 'Sep 2022 – Feb 2023',
      responsibilities: [
        'Developed Recruitment, Payroll, and Employee Evaluation modules',
        'Built and consumed REST APIs using Spring Boot under supervision',
        'Contributed to frontend development using AngularJS and React.js',
        'Supported database design and query optimization with PostgreSQL'
      ],
      tags: ['Leadership', 'JavaScript', 'React.js', 'Full-Stack']
    }
  ];

  return (
    <section id="experience" className="mb-24 md:mb-32 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-blue-500/50"></span>
          <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-panel p-6 md:p-8 rounded-2xl relative group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-blue-400 text-sm font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5 w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0"></span>
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="text-xs text-gray-500 px-2 py-1 rounded border border-white/5 bg-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


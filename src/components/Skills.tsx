'use client';

export default function Skills() {
  const technicalSkills = [
    {
      category: 'Frontend',
      items: ['React', 'React Native', 'Tailwind', 'Next.js'],
      icon: 'layout'
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'REST APIs'],
      icon: 'server'
    },
    {
      category: 'Banking & Payments',
      items: ['SWIFT MT103/MT180', 'ISO 20022', 'RTGS', 'ACH', 'Reconciliation'],
      icon: 'credit-card'
    },
    {
      category: 'Middleware',
      items: ['Camunda BPMN', 'Workflow Automation', 'System Integration'],
      icon: 'git-merge'
    },
    {
      category: 'Systems',
      items: ['CBS modules', 'Party Management', 'EOD', 'Branch/Division Systems'],
      icon: 'database'
    },
    {
      category: 'DevOps & Cloud',
      items: ['Docker', 'Render', 'Vercel', 'Cloudinary', 'API Integration'],
      icon: 'cloud'
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'SQL'],
      icon: 'database'
    },
    {
      category: 'Professional',
      items: ['Business Logic', 'System Architecture', 'Problem Solving', 'Documentation'],
      icon: 'briefcase'
    }
  ];

  return (
    <section id="skills" className="mb-24 md:mb-32 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-blue-500/50"></span>
          <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel p-5 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white/5 text-blue-400">
                  {/* Simple Icon Placeholder based on name */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-medium text-white text-sm">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                    {item}
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


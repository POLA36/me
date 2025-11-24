'use client';

export default function Projects() {
  interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    links?: { label: string; url: string }[];
  }

  const projects: Project[] = [
    {
      title: 'Roof - Real Estate App',
      description: 'Property management platform with video/image uploads and monetization system.',
      tech: ['React Native', 'Node.js', 'Express'],
      links: [
        { label: 'Website', url: 'https://www.roofapp.app/en' },
        { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.abdelpola.Roof&pcampaignid=web_share' }
      ]
    },
    {
      title: 'Seedtrack - AgriTech Platform',
      description: 'Frontend development for an agricultural tracking platform with Google Maps integration.',
      tech: ['ReactJS', 'Google Maps API', 'HTML/CSS'],
      links: [
        { label: 'Website', url: 'https://seedtrack.org' }
      ]
    },
    {
      title: 'Payment Processing Engine',
      description: 'High-volume transaction management system with RTGS/ACH/SWIFT integration.',
      tech: ['Next.js', 'React Hooks', 'Java', 'Spring Boot'],
      // link: '#'
    },
    {
      title: 'Middleware Integration Hub',
      description: 'Enterprise message routing and transformation system using Camunda BPMN.',
      tech: ['Camunda', 'Java', 'REST'],
      // link: '#'
    },
    {
      title: 'Core Banking System',
      description: 'Comprehensive banking modules for Party Management and End-of-Day processing.',
      tech: ['Java', 'Oracle', 'Microservices'],
      // link: '#'
    }
  ];

  return (
    <section id="projects" className="mb-24 md:mb-32 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-px bg-blue-500/50"></span>
          <h2 className="text-2xl md:text-3xl font-bold">Selected Work</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-xl group relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                {(project.links || project.link) && (
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    {project.links ? (
                      project.links.map((link, i) => (
                        <a 
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                        >
                          {link.label}
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      ))
                    ) : (
                      <a 
                        href={project.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                      >
                        View Project
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


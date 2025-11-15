'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <div className="wavy-bg"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-8">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="text-xl font-bold gradient-text"
          >
            AL
          </a>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className="text-sm hover:text-purple-400 transition-colors"
          >
            About Me
          </a>
          <a 
            href="#experience" 
            onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
            className="text-sm hover:text-purple-400 transition-colors"
          >
            Experience
          </a>
          <a 
            href="#skills" 
            onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
            className="text-sm hover:text-purple-400 transition-colors"
          >
            Skills
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="gradient-button px-6 py-2 rounded-full text-sm font-medium"
          >
            Contact Me
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Hero Section */}
        <section id="home" className="mb-24 md:mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                Hello,
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Delivering reliable, scalable financial and enterprise systems for the next generation of African innovation.
              </p>
              <div className="flex flex-col gap-2 mb-8">
                <span className="text-lg text-gray-400">Software Engineer</span>
                <span className="text-lg text-gray-400">Fullstack & Backend</span>
                <span className="text-lg text-gray-400">Enterprise Systems</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                I am <span className="gradient-text">Abdel Lita</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                I build production-grade solutions that power real institutions — from HR platforms to Core Banking components, payment workflows, and enterprise middleware.
              </p>
            </div>
            <div className="relative">
              <div className="dark-card p-8">
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-4xl font-bold">
                    AL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="mb-24 md:mb-32">
          <div className="dark-card p-8 md:p-12 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a bilingual (EN/FR) engineer with hands-on experience building systems that keep organisations running:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="dark-card p-6">
                <div className="text-4xl font-bold gradient-text mb-3">08+</div>
                <p className="text-gray-300">
                  Core Banking (CBS) modules, Payment systems (Domestic + RTGS + SWIFT flows), Enterprise Human Resource (E-HR) systems
                </p>
              </div>
              <div className="dark-card p-6">
                <div className="text-4xl font-bold gradient-text mb-3">∞</div>
                <p className="text-gray-300">
                  Middleware for integrating internal and external services, Workflow automation with Camunda BPMN, APIs & microservice architectures
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              I work on complex, high-impact systems used daily by staff, accountants, HR teams, and financial departments. My strength is understanding both <strong>business logic</strong> and <strong>technical architecture</strong>, allowing me to deliver solutions that are both functional and robust.
            </p>
          </div>
        </section>

        {/* Engineering Success Stories */}
        <section id="experience" className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Engineering Success Stories</h2>
          
          <div className="dark-card p-8 md:p-12 mb-6">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h3 className="text-2xl font-bold">Software Engineer – PKFokam Research Center</h3>
              <span className="tag">Enterprise Systems</span>
              <span className="tag">Banking</span>
              <span className="tag">Payments</span>
            </div>
            <p className="text-gray-400 mb-6">September 2022 – Present</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 gradient-text">E-HR (Enterprise Human Resource Platform)</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Built employee management, payroll, allocation, attendance tracking</li>
                  <li>Designed and consumed APIs, built UI flows, and led technical implementation</li>
                  <li>Supported HR teams by integrating evaluation system, leave management, and contract workflows</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 gradient-text">Core Banking System (CBS)</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Worked on party management, accounts, transactions, opposition management</li>
                  <li>Built reconciliation logic and end-of-day processes</li>
                  <li>Supported database modeling and business process definitions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 gradient-text">Payment System</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Implemented RTGS, ACH, and SWIFT flows (ISO20022 + MT messages)</li>
                  <li>Developed payment repair flows and transaction validation logic</li>
                  <li>Built generators for reconciliation reports and ledger updates</li>
                  <li>Collaborated closely with finance teams to implement SLA, instant payments, and batch processes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 gradient-text">Middleware Engineering</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Built enterprise middleware connecting CBS, Payment, Internet banking, and third-party systems</li>
                  <li>Developed IBAN transformation logic</li>
                  <li>Built APIs for checkbook types, data mapping, and system-to-system communication</li>
                  <li>Developed using Spring Boot, Java, Swagger, Docker, and Camunda</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* My Skills and Development */}
        <section id="skills" className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">My Skills and Development</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="dark-card p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Fast</h3>
              <p className="text-gray-300">
                Optimized performance across backend services, ensuring reliable execution even under heavy load.
              </p>
            </div>
            
            <div className="dark-card p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3">Responsive</h3>
              <p className="text-gray-300">
                Designed UIs and dashboards that adapt to all screens — mobile, tablet, web.
              </p>
            </div>
            
            <div className="dark-card p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Intuitive</h3>
              <p className="text-gray-300">
                Focused on smooth user experience, clear workflows, and easy-to-understand interactions.
              </p>
            </div>
            
            <div className="dark-card p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Dynamic</h3>
              <p className="text-gray-300">
                Engineered scalable systems using modular designs, microservices, and modern architectures.
              </p>
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">My Recent Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="dark-card p-6">
              <h3 className="text-xl font-bold mb-3 gradient-text">Payment Processing Engine</h3>
              <p className="text-gray-300">
                Audit trails, validation rules, and SWIFT/RTGS flows
              </p>
            </div>
            
            <div className="dark-card p-6">
              <h3 className="text-xl font-bold mb-3 gradient-text">Full E-HR Suite</h3>
              <p className="text-gray-300">
                Payroll, attendance, recruitment, evaluation
              </p>
            </div>
            
            <div className="dark-card p-6">
              <h3 className="text-xl font-bold mb-3 gradient-text">Middleware Integration Hub</h3>
              <p className="text-gray-300">
                Connecting CBS ↔ Payments ↔ External services
              </p>
            </div>
            
            <div className="dark-card p-6">
              <h3 className="text-xl font-bold mb-3 gradient-text">Camunda BPMN Automation</h3>
              <p className="text-gray-300">
                Internal processes (onboarding, approvals, transactions)
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24">
          <div className="dark-card p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
            <p className="text-lg text-gray-300 mb-6">
              Available for:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-8 ml-4">
              <li>Software engineering roles</li>
              <li>Backend / API development</li>
              <li>Banking & payment systems</li>
              <li>Freelance system integration projects</li>
              <li>Fintech product development</li>
            </ul>
            <div className="space-y-4">
              <div>
                <strong className="text-lg">Email:</strong>
                <a href="mailto:litapo489@gmail.com" className="ml-2 text-purple-400 hover:text-orange-400 transition-colors">
                  litapo489@gmail.com
                </a>
              </div>
              <div>
                <strong className="text-lg">Phone:</strong>
                <a href="tel:+237658415339" className="ml-2 text-purple-400 hover:text-orange-400 transition-colors">
                  +237 658415339
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 text-center py-8 text-gray-400">
        <p>&copy; 2024 Abdel Lita. All rights reserved.</p>
      </footer>
    </div>
  );
}

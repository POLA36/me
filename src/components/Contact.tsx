export default function Contact() {
  const opportunities = [
    'Software engineering roles',
    'Backend / API development',
    'Banking & payment systems',
    'Freelance system integration projects',
    'Fintech product development'
  ];

  return (
    <section id="contact" className="mb-24 scroll-mt-20">
      <div className="relative">
        {/* Futuristic background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-purple-500/10 rounded-2xl blur-3xl"></div>
        
        <div className="relative dark-card p-8 md:p-12 border border-purple-500/20 backdrop-blur-xl bg-[#1a1a1a]/80">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-orange-500 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Contact</h2>
          </div>
          
          <p className="text-lg text-gray-300 mb-6 font-light">
            Available for new opportunities:
          </p>
          
          {/* Futuristic opportunity tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {opportunities.map((opp, index) => (
              <div
                key={index}
                className="group relative px-4 py-2 rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-orange-500/10 backdrop-blur-sm hover:border-purple-400/50 hover:from-purple-500/20 hover:to-orange-500/20 transition-all duration-300 cursor-default"
              >
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors relative z-10">
                  {opp}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Futuristic contact cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <a
              href="mailto:litapo489@gmail.com"
              className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent p-6 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-orange-500/10 transition-all duration-500"></div>
              
              {/* Glowing corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-orange-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email</div>
                    <div className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      Send Message
                    </div>
                  </div>
                </div>
                <div className="text-purple-400 font-mono text-sm group-hover:text-orange-400 transition-colors">
                  litapo489@gmail.com
                </div>
              </div>
              
              {/* Hover arrow indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+237658415339"
              className="group relative overflow-hidden rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-6 hover:border-orange-400/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/5 to-purple-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
              
              {/* Glowing corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Phone</div>
                    <div className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                      Call Now
                    </div>
                  </div>
                </div>
                <div className="text-orange-400 font-mono text-sm group-hover:text-purple-400 transition-colors">
                  +237 658 415 339
                </div>
              </div>
              
              {/* Hover arrow indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>

            {/* Location Card */}
            <div className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent p-6">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-orange-500/0"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-orange-500/20 flex items-center justify-center border border-purple-500/30">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</div>
                    <div className="text-lg font-semibold text-white">
                      Yaoundé, Cameroon
                    </div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">
                  English–French Bilingual
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


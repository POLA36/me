export default function Contact() {
  return (
    <section id="contact" className="mb-24 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to build something amazing?</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I'm currently available for new opportunities in software engineering, 
              backend development, and fintech projects.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:litapo489@gmail.com"
                className="btn-primary w-full md:w-auto px-8 py-3 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                litapo489@gmail.com
              </a>
              <a 
                href="tel:+237658415339"
                className="btn-secondary w-full md:w-auto px-8 py-3 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +237 658 415 339
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


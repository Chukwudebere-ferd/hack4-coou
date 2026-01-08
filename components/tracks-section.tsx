export function TracksSection() {
  return (
    <section className="py-24 bg-[#0B0C10] relative overflow-hidden" id="tracks">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#13ec80]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-300 mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Competition <span className="text-[#13ec80]">Tracks</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Choose your arena. We have four distinct tracks designed to challenge your creativity and technical prowess.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Track 1 */}
          <div className="group relative p-6 bg-[#15181E] rounded-xl border border-[#283930] hover:border-[#13ec80]/50 transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#283930] flex items-center justify-center mb-4 text-[#13ec80] group-hover:bg-[#13ec80] group-hover:text-black transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI & Machine Learning</h3>
            <p className="text-sm text-gray-400 mb-4">
              Build intelligent systems that solve complex problems using modern AI frameworks.
            </p>
            <a
              className="text-[#13ec80] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
              href="/tracks-details"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Track 2 */}
          <div className="group relative p-6 bg-[#15181E] rounded-xl border border-[#283930] hover:border-[#13ec80]/50 transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#283930] flex items-center justify-center mb-4 text-[#13ec80] group-hover:bg-[#13ec80] group-hover:text-black transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">FinTech Evolution</h3>
            <p className="text-sm text-gray-400 mb-4">
              Reimagine the future of finance with decentralized apps and secure payment gateways.
            </p>
            <a
              className="text-[#13ec80] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
              href="/tracks-details"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Track 3 */}
          <div className="group relative p-6 bg-[#15181E] rounded-xl border border-[#283930] hover:border-[#13ec80]/50 transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#283930] flex items-center justify-center mb-4 text-[#13ec80] group-hover:bg-[#13ec80] group-hover:text-black transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Green Tech</h3>
            <p className="text-sm text-gray-400 mb-4">
              Develop sustainable solutions for a cleaner, greener planet using IoT and data.
            </p>
            <a
              className="text-[#13ec80] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
              href="/tracks-details"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Track 4 */}
          <div className="group relative p-6 bg-[#15181E] rounded-xl border border-[#283930] hover:border-[#13ec80]/50 transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#283930] flex items-center justify-center mb-4 text-[#13ec80] group-hover:bg-[#13ec80] group-hover:text-black transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Health & Wellness</h3>
            <p className="text-sm text-gray-400 mb-4">
              Innovate in the healthcare space with tools that improve patient outcomes.
            </p>
            <a
              className="text-[#13ec80] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
              href="/tracks-details"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

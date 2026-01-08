export function WhoCanParticipateSection() {
  return (
    <section className="py-24 px-4 md:px-10 bg-[#0B0C10] relative overflow-hidden">
      <div className="absolute -left-20 top-20 w-72 h-72 bg-[#13ec80]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-[960px] mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-5 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
            WHO CAN <br />
            <span className="text-[#13ec80]">PARTICIPATE?</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Innovation has no boundaries. We are looking for passionate students from all backgrounds. No experience? No
            problem. We provide the mentorship you need.
          </p>
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-3 text-white font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-[#13ec80] shadow-[0_0_8px_rgba(19,236,128,0.8)]"></div>
              Open to all University Students
            </div>
            <div className="flex items-center gap-3 text-white font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-[#13ec80] shadow-[0_0_8px_rgba(19,236,128,0.8)]"></div>
              All Majors & Skill Levels
            </div>
            <div className="flex items-center gap-3 text-white font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-[#13ec80] shadow-[0_0_8px_rgba(19,236,128,0.8)]"></div>
              Individuals or Teams (2-5)
            </div>
          </div>
        </div>
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group relative overflow-hidden bg-[#15181E] border border-[#283930] p-6 rounded-2xl hover:border-[#13ec80]/40 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-16 h-16 text-[#13ec80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0B0C10] text-[#13ec80] border border-[#283930] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Developers</h3>
                <p className="text-sm text-gray-500">Frontend, Backend, Mobile, AI/ML enthusiasts ready to build.</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden bg-[#15181E] border border-[#283930] p-6 rounded-2xl hover:border-[#13ec80]/40 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-16 h-16 text-[#13ec80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between gap-8">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0B0C10] text-[#13ec80] border border-[#283930] group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Designers</h3>
                <p className="text-sm text-gray-500">UI/UX, Graphics, and Product Designers crafting experiences.</p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 group relative overflow-hidden bg-[#15181E] border border-[#283930] p-6 rounded-2xl hover:border-[#13ec80]/40 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-16 h-16 text-[#13ec80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#0B0C10] text-[#13ec80] border border-[#283930] group-hover:scale-110 transition-transform shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Problem Solvers</h3>
                <p className="text-sm text-gray-500">
                  Visionaries, Pitchers, and Strategists. You identify the problems, we help you solve them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

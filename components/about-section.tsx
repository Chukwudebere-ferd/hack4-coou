"use client"

export function AboutSection() {
  return (
    <section className="py-24 px-4 md:px-10 bg-[#0B0C10] border-t border-[#283930] relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(28,39,33,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(28,39,33,0.4)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>
      <div className="max-w-250 mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-[#13ec80] font-bold tracking-widest text-sm uppercase">
            <span className="w-8 h-0.5 bg-[#13ec80]"></span>
            About Hack4COOU
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Forging a Legacy of{" "}
            <span className="text-transparent bg-clip-text bg-[#13ec80]">
              Innovation
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Hack4COOU is more than just a hackathon; it is a movement born from a deep-seated desire to bridge the gap
            between academic theory and real-world application. We exist to empower the next generation of
            technologists.
          </p>
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex gap-4">
              <div className="mt-1 shrink-0 w-12 h-12 rounded-xl bg-[#15181E] border border-[#283930] flex items-center justify-center text-[#13ec80] shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-xl">Our Vision</h4>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  To cultivate a thriving ecosystem where the brightest minds converge to engineer sustainable,
                  tech-driven solutions for Africa and the world.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 shrink-0 w-12 h-12 rounded-xl bg-[#15181E] border border-[#283930] flex items-center justify-center text-[#13ec80] shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-xl">Our Mission</h4>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  We provide accessible resources, world-class mentorship, and a collaborative platform, turning 48
                  hours of intense creativity into a lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group mt-8 md:mt-0">
          <div className="absolute -inset-1 bg-linear-to-r from-[#13ec80]/30 to-blue-500/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-[#15181E] border border-[#283930] rounded-2xl p-6 sm:p-8 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 mb-6 border-b border-[#283930] pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-4 text-xs text-gray-500 font-mono">hack4coou_manifesto.js</div>
            </div>
            <div className="font-mono text-sm sm:text-base leading-relaxed space-y-2">
              <div className="text-blue-400">
                const <span className="text-yellow-400">GDGOC_COOU</span> ={" "}
                <span className="text-purple-400">new</span> Hackathon({"{"}
              </div>
              <div className="pl-4 text-gray-300">
                target: <span className="text-green-400">'Future Leaders'</span>,
              </div>
              <div className="pl-4 text-gray-300">
                focus: [<span className="text-green-400">'Impact'</span>, <span className="text-green-400">'Code'</span>
                , <span className="text-green-400">'Community'</span>],
              </div>
              <div className="pl-4 text-gray-300">
                legacy: <span className="text-[#13ec80]">true</span>,
              </div>
              <div className="pl-4 text-gray-300">
                execute: <span className="text-blue-400">async function</span>() {"{"}
              </div>
              <div className="pl-8 text-gray-400">// Transforming ideas to reality</div>
              <div className="pl-8 text-white">
                <span className="text-purple-400">await</span> this.build(
                <span className="text-green-400">'The Future'</span>);
              </div>
              <div className="pl-4 text-gray-300">{"}"}</div>
              <div className="text-blue-400">{"});"}</div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#13ec80]/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

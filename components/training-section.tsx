import { trainingCourses } from "@/data/training-data"

export function TrainingSection() {
  return (
    <section className="py-24 px-4 md:px-10 bg-[#0B0C10] relative overflow-hidden" id="training">
      <div className="absolute top-0 right-0 w-150 h-150 bg-[#13ec80]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
      <div className="max-w-275 mx-auto relative z-10 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-[#13ec80] text-sm font-bold tracking-widest uppercase">Level Up Skills</span>
          <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase">
            Pre-Hackathon Training
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Prepare for the challenge with our exclusive workshop series. Master the tools and technologies you will
            need to build winning solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trainingCourses.map((course) => (
            <div
              key={course.id}
              className={`group relative flex flex-col h-full bg-[#15181E] border border-[#283930] rounded-2xl p-8 ${
                course.color === "text-[#13ec80]"
                  ? "hover:border-[#13ec80]/50 hover:shadow-[0_10px_40px_-10px_rgba(19,236,128,0.1)]"
                  : course.color === "text-blue-400"
                    ? "hover:border-blue-500/50 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.1)]"
                    : "hover:border-purple-500/50 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.1)]"
              } transition-all duration-300 hover:-translate-y-1`}
            >
              <div
                className={`w-14 h-14 rounded-xl bg-[#0B0C10] flex items-center justify-center ${course.color} border border-[#283930] mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {course.icon === "computer" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  )}
                  {course.icon === "smartphone" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  )}
                  {course.icon === "code" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  )}
                </svg>
              </div>
              <h3 className={`text-white text-2xl font-bold mb-3 ${course.hoverColor} transition-colors`}>
                {course.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{course.description}</p>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={course.link}
                  target="_blank"
                  className={`inline-flex items-center gap-2 ${course.color} font-bold text-sm tracking-wide uppercase hover:underline underline-offset-4 group/link`}
                >
                  Register Now{" "}
                  <svg
                    className="w-5 h-5 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

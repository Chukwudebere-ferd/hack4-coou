import { ArrowRight } from "lucide-react"
import { mentors } from "@/data/mentors-data"

const personIcons = ["person", "person_4", "face_3", "person_2"]

export function MentorsSection() {
  return (
    <section className="py-20 px-4 md:px-10 bg-[#0B0C10] relative overflow-hidden" id="mentors">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#13ec80]/20 to-transparent"></div>
      <div className="absolute -right-20 top-40 w-64 h-64 bg-[#13ec80]/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto flex flex-col gap-12 relative z-10">
        <div className="text-center flex flex-col items-center gap-4">
          <span className="text-[#13ec80] text-sm font-bold tracking-widest uppercase">Expert Guidance</span>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">MENTORS & JUDGES</h2>
          <p className="text-gray-400 max-w-2xl text-center text-base md:text-lg">
            Meet the industry leaders, tech pioneers, and visionaries who will be guiding your journey and evaluating
            your innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={mentor.id}
              className="group flex flex-col items-center bg-[#15181E] border border-[#283930] rounded-xl p-6 hover:border-[#13ec80]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-24 h-24 mb-4">
                <div className="absolute inset-0 rounded-full border border-dashed border-gray-600 group-hover:border-[#13ec80] group-hover:rotate-180 transition-all duration-700"></div>
                <div className="absolute inset-1 rounded-full bg-[#0B0C10] flex items-center justify-center overflow-hidden">
                  {mentor.profilePic ? (
                    <img
                      src={mentor.profilePic || "/placeholder.svg"}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-4xl text-gray-400 group-hover:text-white transition-colors">
                      {personIcons[index % personIcons.length]}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-white font-bold text-lg">{mentor.name}</h3>
              <p className="text-[#13ec80] text-sm font-medium mb-1">{mentor.title}</p>
              <p className="text-gray-500 text-xs mb-4">{mentor.company}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {mentor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#0B0C10] border border-[#283930] text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 text-[#13ec80] font-bold hover:text-white transition-colors group">
            <span>View All Mentors</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

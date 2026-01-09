import { User, Terminal, Palette, Megaphone, Link2, Mail, Code, Brush, MessageSquare } from "lucide-react"
import { teamMembers } from "@/data/team-data"

const iconMap = {
  leadership: User,
  technical: Terminal,
  creative: Palette,
  operations: Megaphone,
}

const secondaryIconMap = {
  leadership: Mail,
  technical: Code,
  creative: Brush,
  operations: MessageSquare,
}

export function TeamSection() {
  return (
    <section className="py-20 px-4 md:px-10 bg-[#0B0C10] relative" id="team">
      <div className="max-w-250 mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <span className="text-[#13ec80] text-sm font-bold tracking-widest uppercase">Student Leadership</span>
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">ORGANIZING TEAM</h2>
            <p className="text-gray-400 max-w-xl">
              Hack4COOU is a community-driven effort, built by students for students. Meet the core team making it
              happen.
            </p>
          </div>
          {/* <a
            className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#13ec80] transition-colors"
            href="/team-details"
          >
            View All Members{" "}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => {
            const IconComponent = iconMap[member.category]
            const SecondaryIconComponent = secondaryIconMap[member.category]

            return (
              <div
                key={member.id}
                className="group flex flex-col gap-4 p-5 rounded-xl border border-[#283930] bg-[#15181E]/50 hover:bg-[#15181E] hover:border-[#13ec80]/30 transition-all duration-300"
              >
                <div className="relative w-full aspect-4/3 rounded-lg bg-[#0B0C10] overflow-hidden flex items-end justify-center border border-[#283930] group-hover:border-[#13ec80]/20 transition-colors">
                  <div className="absolute inset-0 bg-linear-to-t from-[#15181E] to-transparent opacity-60"></div>
                  {member.profilePic ? (
                    <img
                      src={member.profilePic || "/placeholder.svg"}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <IconComponent
                      className="w-16 h-16 text-gray-700 mb-2 transition-colors duration-500"
                      style={{
                        color: `${member.roleColor}80`,
                      }}
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{member.name}</h3>
                  <p className="text-sm font-medium" style={{ color: member.roleColor }}>
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-xs mt-2 line-clamp-2">{member.description}</p>
                </div>
                <div className="flex gap-3 mt-auto pt-4 border-t border-[#283930]/50">
                  {member.social.website && (
                    <a className="text-gray-500 hover:text-white transition-colors" href={member.social.website}>
                      <Link2 className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      className="text-gray-500 hover:text-white transition-colors"
                      href={`mailto:${member.social.email}`}
                    >
                      <SecondaryIconComponent className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a className="text-gray-500 hover:text-white transition-colors" href={member.social.github}>
                      <SecondaryIconComponent className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a className="text-gray-500 hover:text-white transition-colors" href={member.social.linkedin}>
                      <SecondaryIconComponent className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-12 p-8 rounded-2xl bg-linear-to-r from-[#15181E] to-[#0B0C10] border border-[#283930] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-white text-xl font-bold">Want to join the organizing team?</h3>
            <p className="text-gray-400 text-sm">
              We are looking for volunteers for the event days. Get exclusive swag and experience.
            </p>
          </div>
          <button className="px-6 py-3 rounded-lg bg-[#15181E] border border-[#283930] text-white font-bold hover:border-[#13ec80] hover:text-[#13ec80] transition-all whitespace-nowrap">
            Apply as Volunteer
          </button>
        </div>
      </div>
    </section>
  )
}

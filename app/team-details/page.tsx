"use client"

import { Navbar } from "@/components/navbar"
import { teamMembers } from "@/data/team-data"

export default function TeamDetailsPage() {
  const leadershipMembers = teamMembers.filter((m) => m.category === "leadership")
  const technicalMembers = teamMembers.filter((m) => m.category === "technical")
  const operationsMembers = teamMembers.filter((m) => m.category === "operations")
  const creativeMembers = teamMembers.filter((m) => m.category === "creative")

  const SocialIcon = ({ platform, url, label }: { platform: string; url: string; label: string }) => {
    if (!url || url === "#") return null

    const iconMap: Record<string, { icon: string; color: string }> = {
      github: { icon: "code", color: "hover:text-gray-300" },
      twitter: { icon: "public", color: "hover:text-blue-400" },
      x: { icon: "public", color: "hover:text-gray-300" },
      linkedin: { icon: "person", color: "hover:text-blue-500" },
      email: { icon: "mail", color: "hover:text-red-400" },
    }

    const iconData = iconMap[platform] || { icon: "language", color: "hover:text-gray-400" }

    return (
      <a
        href={url}
        title={label}
        className={`text-gray-400 transition-colors ${iconData.color}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-xl">{iconData.icon}</span>
      </a>
    )
  }

  const TeamCard = ({ member }: { member: (typeof teamMembers)[0] }) => (
    <div className="group relative bg-[#1a2420] rounded-2xl p-6 border border-[#283930] hover:border-[#13ec80] transition-all duration-300 hover:shadow-lg flex flex-col gap-5">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-[#283930] group-hover:border-[#13ec80] transition-colors">
        {member.profilePic ? (
          <img src={member.profilePic || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#283930] to-[#15181E] flex items-center justify-center">
            <span className="text-4xl text-gray-600">{member.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="text-xl font-bold text-white group-hover:text-[#13ec80] transition-colors">{member.name}</h4>
          <p className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: member.roleColor }}>
            {member.role}
          </p>
          <p className="text-gray-400 text-sm">{member.description}</p>
        </div>
        <div className="flex gap-3 pt-3 border-t border-[#283930]">
          {member.social.github && <SocialIcon platform="github" url={member.social.github} label="GitHub" />}
          {member.social.twitter && <SocialIcon platform="x" url={member.social.twitter} label="X (Twitter)" />}
          {member.social.linkedin && <SocialIcon platform="linkedin" url={member.social.linkedin} label="LinkedIn" />}
          {member.social.email && <SocialIcon platform="email" url={`mailto:${member.social.email}`} label="Email" />}
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full min-h-screen bg-[#0B0C10] text-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full border-b border-[#283930] py-16 md:py-24">
        <div className="max-w-[960px] mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a2420] text-[#13ec80] text-xs font-bold uppercase tracking-wider mb-6 border border-[#13ec80]/20">
            <span className="material-symbols-outlined text-sm">groups</span>
            Meet the Organizers
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4">
            The Architects of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#13ec80] to-white">
              Hack4COOU
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8">
            A passionate student-led initiative driving innovation, collaboration, and building the future of tech at
            COOU.
          </p>
        </div>
      </div>

      {/* Core Leadership Section */}
      <div className="flex-1 w-full bg-[#0B0C10] py-12">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#13ec80] rounded-sm"></span>
              Core Leadership
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadershipMembers.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-sm"></span>
              Technical Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalMembers.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          {operationsMembers.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-pink-500 rounded-sm"></span>
                Operations & Support
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {operationsMembers.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}

          {creativeMembers.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-purple-500 rounded-sm"></span>
                Creative Team
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {creativeMembers.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0B0C10] border-t border-[#283930] py-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Hack4COOU. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

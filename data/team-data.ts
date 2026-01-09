export interface TeamMember {
  id: string
  name: string
  role: string
  roleColor: string
  description: string
  profilePic?: string
  category: "leadership" | "technical" | "creative" | "operations"
  social: {
    website?: string
    email?: string
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Blessing Emejulu",
    role: "Lead Organizer",
    roleColor: "#13ec80",
    description: "Lead organizer of GDG on Campus COOU, passionate about building tech communities at the university.",
    profilePic: "/images/blessing-emejulu.jpg",
    category: "leadership",
    social: {
      website: "#",
      email: "blessing@gdgcoou.com",
    },
  },
  {
    id: "2",
    name: "Paul Nwokolo",
    role: "Co-Organizer",
    roleColor: "#60a5fa",
    description: "Co-organizer working with Blessing to ensure successful events and community engagement.",
    profilePic: "/images/paul-nwokolo.webp",
    category: "leadership",
    social: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    id: "3",
    name: "Dennis Ajulu",
    role: "Web Development Lead",
    roleColor: "#fb923c",
    description: "Web development lead ensuring all technical projects and workshops run smoothly.",
    profilePic: "/images/ajulu-dennis.webp",
    category: "technical",
    social: {
      website: "#",
      github: "#",
    },
  },
  {
    id: "4",
    name: "Kelvin Akpamgbo",
    role: "Web3/Blockchain Lead",
    roleColor: "#a78bfa",
    description: "Web3 and blockchain specialist leading initiatives in decentralized technology.",
    profilePic: "/images/kcc-akpamgbo-rtc28sc.webp",
    category: "technical",
    social: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    id: "5",
    name: "Mildred Nnazor",
    role: "Graphic Designer",
    roleColor: "#c084fc",
    description: "Creative designer crafting visual identity and marketing materials for COOU tech events.",
    profilePic: "/images/mildred-nnazor-s633fno.webp",
    category: "creative",
    social: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    id: "6",
    name: "Ike Mgbeafulike",
    role: "Faculty Advisor",
    roleColor: "#22d3ee",
    description: "Faculty advisor providing guidance and institutional support for all hackathon initiatives.",
    category: "operations",
    social: {
      website: "#",
      email: "ike@coou.edu.ng",
    },
  },
  {
    id: "7",
    name: "Okoye Genevieve",
    role: "Cloud Computing Lead",
    roleColor: "#f59e0b",
    description: "Cloud computing specialist leading infrastructure and deployment initiatives for hackathon projects.",
    category: "technical",
    social: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    id: "8",
    name: "Faith Amara",
    role: "Partnership & Operations Lead",
    roleColor: "#ec4899",
    description: "Operations and partnerships lead coordinating sponsorships and event logistics.",
    profilePic: "/images/faith-amara-lncle8n.webp",
    category: "operations",
    social: {
      website: "https://devfoma.vercel.app",
      email: "faithamarachi860@gmail.com",
    },
  },
  {
    id: "9",
    name: "Wisdom Ejiofor",
    role: "Creative Lead",
    roleColor: "#8b5cf6",
    description: "Crafting brand visuals and marketing materials to promote hackathon events effectively.",
    category: "creative",
    social: {
      website: "#",
      github: "#",
    },
  },
]

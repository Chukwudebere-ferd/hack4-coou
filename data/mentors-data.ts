export interface Mentor {
  id: string
  name: string
  title: string
  company: string
  profilePic?: string
  expertise: string[]
  category: "mentor" | "judge" | "both"
}

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Dr. Sarah Lin",
    title: "Chief Data Scientist",
    company: "Nexus AI",
    category: "judge",
    expertise: ["AI/ML", "Python"],
  },
  {
    id: "2",
    name: "James Okon",
    title: "Product Lead",
    company: "FinTech Solutions",
    category: "mentor",
    expertise: ["Product", "Strategy"],
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    title: "Frontend Architect",
    company: "Creative Cloud",
    category: "mentor",
    expertise: ["UI/UX", "React"],
  },
  {
    id: "4",
    name: "Michael Chen",
    title: "Founding Partner",
    company: "Ventures Capital",
    category: "judge",
    expertise: ["Funding", "Pitching"],
  },
]

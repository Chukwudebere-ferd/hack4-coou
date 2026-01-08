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
    name: "coming soon",
    title: "coming soon",
    company: "coming soon",
    category: "judge",
    expertise: ["coming soon", "coming soon"],
  },
  {
    id: "2",
    name: "coming soon",
    title: "coming soon",
    company: "coming soon",
    category: "mentor",
    expertise: ["coming soon", "coming soon"],
  },
]

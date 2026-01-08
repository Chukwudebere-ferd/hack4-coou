export interface TrainingCourse {
  id: string
  title: string
  description: string
  icon: string
  color: string
  hoverColor: string
  accentColor: string
}

export const trainingCourses: TrainingCourse[] = [
  {
    id: "1",
    title: "AI & Machine Learning",
    description:
      "Unlock the power of data. Learn to implement predictive models, natural language processing, and computer vision into your hackathon project.",
    icon: "computer",
    color: "text-[#13ec80]",
    hoverColor: "group-hover:text-[#13ec80]",
    accentColor: "#13ec80",
  },
  {
    id: "2",
    title: "Mobile App Development",
    description:
      "Build for the billion-user platform. Master cross-platform development with Flutter or React Native to create responsive, high-performance mobile apps.",
    icon: "smartphone",
    color: "text-blue-400",
    hoverColor: "group-hover:text-blue-400",
    accentColor: "blue",
  },
  {
    id: "3",
    title: "Website Development",
    description:
      "Craft the web of tomorrow. From modern frontend frameworks like React to robust backend APIs, get the full-stack skills needed to deploy live.",
    icon: "code",
    color: "text-purple-400",
    hoverColor: "group-hover:text-purple-400",
    accentColor: "purple",
  },
]

export interface TimelineEvent {
  id: string
  time: string
  day: string
  title: string
  description: string
  icon: string
  color: "primary" | "secondary"
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    time: "Friday - 09:00 AM",
    day: "Day 1",
    title: "Opening Ceremony",
    description: "Welcome address, introduction to judges and sponsors, hackathon rules, and team formation.",
    icon: "presentation",
    color: "primary",
  },
  {
    id: "2",
    time: "Friday - 11:00 AM",
    day: "Day 1",
    title: "Hacking Begins",
    description: "Start your engines! The 48-hour countdown begins. Build, code, and innovate.",
    icon: "code",
    color: "secondary",
  },
  {
    id: "3",
    time: "Saturday - 09:00 AM",
    day: "Day 2",
    title: "Workshops & Mentor Sessions",
    description: "AI/ML tools workshop, Web3 basics, and pitch skills training. Connect with industry mentors.",
    icon: "book",
    color: "secondary",
  },
  {
    id: "4",
    time: "Saturday - 11:00 AM",
    day: "Day 2",
    title: "Mid-Point Check-ins",
    description: "Quick progress reviews with mentors. Get feedback and adjust your project strategy.",
    icon: "check",
    color: "secondary",
  },
  {
    id: "5",
    time: "Sunday - 09:00 AM",
    day: "Day 3",
    title: "Final Development Sprint",
    description: "Last hours to finalize your project. Polish your code and prepare your pitch deck.",
    icon: "code",
    color: "secondary",
  },
  {
    id: "6",
    time: "Sunday - 12:30 PM",
    day: "Day 3",
    title: "Submission Deadline",
    description: "Code freeze! Final submissions close. Time to prepare for your project presentation.",
    icon: "plus",
    color: "secondary",
  },
  {
    id: "7",
    time: "Sunday - 04:00 PM",
    day: "Day 3",
    title: "Presentations & Awards",
    description: "Team demos, judging, winner announcements, and prize distribution. Let's celebrate innovation!",
    icon: "star",
    color: "secondary",
  },
]

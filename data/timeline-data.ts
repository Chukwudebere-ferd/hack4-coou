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
    time: "Wednesday (May 27th) - 09:00 AM",
    day: "Day 1",
    title: "Registration & Check-In",
    description: "Participant onboarding, badge collection, and team verification.",
    icon: "check",
    color: "primary",
  },
  {
    id: "2",
    time: "Wednesday (May 27th) - 10:00 AM",
    day: "Day 1",
    title: "Opening Ceremony",
    description: "Welcome address, introduction of organizers, judges, mentors, sponsors, and overview of hackathon rules and judging criteria.",
    icon: "presentation",
    color: "primary",
  },
  {
    id: "3",
    time: "Wednesday (May 27th) - 11:30 AM",
    day: "Day 1",
    title: "Team Formation & Ideation",
    description: "Idea pitching, team formation, and problem statement validation.",
    icon: "check",
    color: "secondary",
  },
  {
    id: "4",
    time: "Wednesday (May 27th) - 01:00 PM",
    day: "Day 1",
    title: "Hacking Begins",
    description: "The hackathon officially kicks off. Teams start building and coding their solutions.",
    icon: "code",
    color: "secondary",
  },
  {
    id: "5",
    time: "Wednesday (May 27th) - 04:00 PM",
    day: "Day 1",
    title: "Mentor Office Hours",
    description: "One-on-one technical and product guidance from mentors.",
    icon: "check",
    color: "secondary",
  },
  {
    id: "6",
    time: "Thursday (May 28th) - 09:00 AM",
    day: "Day 2",
    title: "Workshops & Masterclasses",
    description: "Hands-on sessions on AI/ML, Web3, product design, and pitching.",
    icon: "presentation",
    color: "secondary",
  },
  {
    id: "7",
    time: "Thursday (May 28th) - 11:30 AM",
    day: "Day 2",
    title: "Mentor Office Hours",
    description: "Deeper feedback on implementation, scalability, and impact.",
    icon: "check",
    color: "secondary",
  },
  {
    id: "8",
    time: "Thursday (May 28th) - 02:00 PM",
    day: "Day 2",
    title: "Mid-Point Check-ins",
    description: "Short progress reviews with mentors and organizers to refine project direction.",
    icon: "check",
    color: "secondary",
  },
  {
    id: "9",
    time: "Thursday (May 28th) - 05:00 PM",
    day: "Day 2",
    title: "Pitch Preparation Session",
    description: "Guidance on storytelling, demos, and judging expectations.",
    icon: "presentation",
    color: "secondary",
  },
  {
    id: "10",
    time: "Friday (May 29th) - 09:00 AM",
    day: "Day 3",
    title: "Submission Deadline",
    description: "Code freeze. All projects must be submitted.",
    icon: "check",
    color: "secondary",
  },
  {
    id: "11",
    time: "Friday (May 29th) - 10:30 AM",
    day: "Day 3",
    title: "Hack4Coou Conference",
    description: "Keynotes, panels, and fireside chats with industry leaders and ecosystem partners.",
    icon: "star",
    color: "primary",
  },
  {
    id: "12",
    time: "Friday (May 29th) - 01:30 PM",
    day: "Day 3",
    title: "Project Presentations & Demos",
    description: "Teams present their solutions to judges and the audience.",
    icon: "presentation",
    color: "secondary",
  },
  {
    id: "13",
    time: "Friday (May 29th) - 05:30 PM",
    day: "Day 3",
    title: "Awards & Closing Ceremony",
    description: "Winner announcements, prize distribution, and closing remarks.",
    icon: "star",
    color: "secondary",
  },
];

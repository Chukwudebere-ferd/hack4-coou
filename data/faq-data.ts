export interface FAQ {
  id: string
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Who can participate?",
    answer:
      "Hack4COOU is open to all university students, recent graduates, and tech enthusiasts. You don't need to be a pro coder. Designers and project managers are welcome too!",
  },
  {
    id: "2",
    question: "Is there a participation fee?",
    answer:
      "No, participation in Hack4COOU is completely free. We also provide swag, meals, and resources during the event for physical attendees.",
  },
  {
    id: "3",
    question: "Can I apply as a team?",
    answer:
      "Yes! You can form teams of 2-4 members. If you don't have a team yet, don't worry—we'll have a team-building session at the start of the event.",
  },
]

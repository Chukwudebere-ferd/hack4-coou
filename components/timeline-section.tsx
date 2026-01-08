"use client"

import { timelineEvents } from "@/data/timeline-data"
import { useEffect, useState } from "react"

export function TimelineSection() {
  const [activeTimelineId, setActiveTimelineId] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTimelineId(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    // Observe all timeline items
    const items = document.querySelectorAll("[data-timeline-item]")
    items.forEach((item) => observer.observe(item))

    return () => {
      items.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <section className="py-24 bg-[#0B0C10]" id="schedule">
      <div className="max-w-300 mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Event <span className="text-[#13ec80]">Schedule</span>
            </h2>
            <p className="text-gray-400">A roadmap of the 48-hour journey at COOU Campus, Uli.</p>
          </div>
          <a
            href="/hack4coou-schedule.txt"
            download="Hack4COOU_Schedule.txt"
            className="text-sm font-bold text-[#13ec80] flex items-center gap-2 hover:underline group"
          >
            Download Schedule
            <svg
              className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-linear-to-b before:from-transparent before:via-[#283930] before:to-transparent md:before:mx-auto md:before:translate-x-0">
          {timelineEvents.map((event) => (
            <div
              key={event.id}
              id={`timeline-${event.id}`}
              data-timeline-item
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-[#0E1014] shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-300 ${
                  activeTimelineId === `timeline-${event.id}`
                    ? "bg-[#13ec80] shadow-[#13ec80]/50 scale-125"
                    : event.color === "primary"
                      ? "bg-[#13ec80] shadow-[#13ec80]/50"
                      : "bg-[#283930]"
                }`}
              >
                <svg
                  className={`w-5 h-5 ${activeTimelineId === `timeline-${event.id}` || event.color === "primary" ? "text-[#0B0C10]" : "text-gray-400"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {event.icon === "presentation" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  )}
                  {event.icon === "code" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  )}
                  {event.icon === "book" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  )}
                  {event.icon === "check" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  )}
                  {event.icon === "plus" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  )}
                  {event.icon === "star" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  )}
                </svg>
              </div>

              {/* Content */}
              <div
                className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded-xl bg-[#15181E] border transition-all duration-300 p-6 shadow-lg ${
                  activeTimelineId === `timeline-${event.id}`
                    ? "border-[#13ec80] shadow-[#13ec80]/20"
                    : "border-[#283930] hover:border-[#13ec80]/50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-bold ${event.color === "primary" ? "text-[#13ec80]" : "text-gray-400"}`}>
                    {event.time}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold border ${
                      event.color === "primary"
                        ? "bg-[#13ec80]/10 text-[#13ec80] border-[#13ec80]/20"
                        : "bg-gray-800 text-gray-400 border-gray-700"
                    }`}
                  >
                    {event.day}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-white mb-2">{event.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

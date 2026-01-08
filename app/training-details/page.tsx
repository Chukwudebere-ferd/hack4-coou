"use client"

import { Navbar } from "@/components/navbar"

export default function TrainingDetailsPage() {
  const courses = [
    {
      id: "ai",
      icon: "smart_toy",
      title: "AI & Machine Learning",
      description:
        "Dive deep into the world of Artificial Intelligence. This comprehensive track will take you from the fundamentals of Python programming to deploying your own machine learning models.",
      learning: [
        "From Python basics to building your first neural network",
        "Understanding supervised vs. unsupervised learning paradigms",
        "Data preprocessing using Pandas and NumPy",
        "Real-world application: Building a predictive model",
      ],
      schedule: { date: "Oct 12 - Oct 14", time: "4:00 PM - 7:00 PM", location: "Virtual Hall A" },
      instructor: "Dr. Ada Okeke",
    },
    {
      id: "mobile",
      icon: "smartphone",
      title: "Mobile App Development",
      description:
        "Learn to build high-performance, cross-platform mobile applications. We will focus on modern frameworks that allow you to write code once and deploy to both iOS and Android.",
      learning: [
        "Introduction to Flutter & Dart ecosystem",
        "Building responsive UI layouts for mobile",
        "State management solutions (Provider/Riverpod)",
        "Consuming REST APIs and handling JSON data",
      ],
      schedule: { date: "Oct 15 - Oct 17", time: "10:00 AM - 1:00 PM", location: "Physical Lab 3" },
      instructor: "James Okoro",
    },
    {
      id: "web",
      icon: "web",
      title: "Website Development",
      description:
        "Master the modern web stack. This track focuses on the MERN (MongoDB, Express, React, Node) stack, enabling you to build full-stack web applications from scratch.",
      learning: [
        "Frontend mastery with React.js & Tailwind CSS",
        "Backend basics with Node.js and Express",
        "Database design with MongoDB",
        "Deployment strategies for full-stack apps",
      ],
      schedule: { date: "Oct 18 - Oct 20", time: "2:00 PM - 5:00 PM", location: "Lab 1 & 2" },
      instructor: "Chioma Nwosu",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-[#0B0C10] text-white flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <header className="relative flex w-full flex-col px-4 md:px-10 lg:px-20 py-12 border-b border-[#283930]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-[#13ec80]/30 bg-[#13ec80]/10 px-3 py-1 text-xs font-bold text-[#13ec80] mb-4 w-fit">
            <span className="material-symbols-outlined text-[16px] mr-1">school</span>
            Bootcamp 2026
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Level Up Before You Build
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl">
            Join our comprehensive pre-hackathon training sessions designed to sharpen your skills in AI, Mobile, and
            Web Development. Get ready to innovate.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-10 lg:px-20 py-12">
        <div className="max-w-4xl space-y-12">
          {courses.map((course) => (
            <section key={course.id} className="flex flex-col lg:flex-row gap-8">
              {/* Left: Content */}
              <div className="lg:flex-1 flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#1a2420] border border-[#283930]">
                    <span className="material-symbols-outlined text-[#13ec80] text-2xl">{course.icon}</span>
                  </div>
                  <h2 className="text-white text-3xl font-bold">{course.title}</h2>
                </div>

                <div className="bg-[#1a2420] rounded-xl p-6 border border-[#283930]">
                  <p className="text-gray-300 text-base leading-relaxed mb-6">{course.description}</p>

                  <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#13ec80] text-sm">check_circle</span>
                    What You'll Learn
                  </h3>
                  <div className="space-y-3">
                    {course.learning.map((item, idx) => (
                      <label
                        key={idx}
                        className="flex gap-3 items-start p-3 rounded-lg hover:bg-white/5 transition-colors cursor-default"
                      >
                        <div className="mt-0.5 min-w-[20px]">
                          <span className="material-symbols-outlined text-[#13ec80] text-[20px]">check</span>
                        </div>
                        <p className="text-gray-200 text-sm md:text-base">{item}</p>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Meta Info */}
              <div className="lg:w-80 flex flex-col gap-4">
                {/* Schedule Card */}
                <div className="bg-[#1a2420] p-5 rounded-xl border border-[#283930]">
                  <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">Schedule</h4>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#13ec80]/10 flex items-center justify-center text-[#13ec80]">
                        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">{course.schedule.date}</p>
                        <p className="text-gray-400 text-xs">Intensive</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#13ec80]/10 flex items-center justify-center text-[#13ec80]">
                        <span className="material-symbols-outlined text-[18px]">schedule</span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">{course.schedule.time}</p>
                        <p className="text-gray-400 text-xs">GMT +1</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#13ec80]/10 flex items-center justify-center text-[#13ec80]">
                        <span className="material-symbols-outlined text-[18px]">location_on</span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">{course.schedule.location}</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-5 bg-[#13ec80]/10 hover:bg-[#13ec80]/20 text-[#13ec80] text-sm font-bold py-2 rounded transition-colors border border-[#13ec80]/20">
                    Add to Calendar
                  </button>
                </div>

                {/* Instructor Card */}
                <div className="bg-[#1a2420] p-5 rounded-xl border border-[#283930]">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Instructor</p>
                  <p className="text-white text-sm font-bold">{course.instructor}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0B0C10] border-t border-[#283930] py-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Hack4COOU. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

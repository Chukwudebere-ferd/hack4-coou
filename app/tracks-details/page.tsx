"use client"

import { Navbar } from "@/components/navbar"

export default function TracksDetailsPage() {
  const tracks = [
    {
      id: "fintech",
      icon: "payments",
      title: "FinTech Revolution",
      description:
        "Reimagine the future of finance. We are looking for decentralized solutions, AI-driven fraud detection, or inclusive banking tools.",
      challenge:
        "How can we leverage blockchain or open banking APIs to create a more transparent, secure, and accessible financial ecosystem?",
      tech: ["Solidity", "Python", "React", "Stripe API"],
      criteria: [
        "Security & Privacy Implementation",
        "Scalability of the Solution",
        "User Experience (UX) for Non-Techies",
      ],
    },
    {
      id: "edtech",
      icon: "school",
      title: "EdTech Futures",
      description:
        "Bridge the knowledge gap. Create tools that make personalized learning accessible, engaging, and effective.",
      challenge:
        "Develop a platform or tool that enhances remote learning engagement or simplifies complex subjects using gamification or AI tutoring.",
      tech: ["Flutter", "Node.js", "WebRTC", "OpenAI API"],
      criteria: ["Accessibility Features", "Impact on Learning Outcomes", "Offline Capability"],
    },
    {
      id: "health",
      icon: "monitor_heart",
      title: "Health Informatics",
      description:
        "Innovate for well-being. Tackle issues in patient data management, telemedicine, or mental health awareness.",
      challenge:
        "Build a system that predicts health risks based on lifestyle data or improves the efficiency of emergency response services.",
      tech: ["TensorFlow", "IoT Sensors", "FastAPI", "FHIR Standards"],
      criteria: ["Data Privacy Compliance (HIPAA etc.)", "Accuracy of Predictions", "Ease of Integration"],
    },
    {
      id: "sustainability",
      icon: "eco",
      title: "Sustainability",
      description:
        "Drive environmental impact. Create solutions that help combat climate change or promote sustainable living.",
      challenge:
        "Develop an app or platform that tracks and reduces carbon footprint or promotes sustainable practices.",
      tech: ["React", "Node.js", "MongoDB", "Google Maps API"],
      criteria: ["Environmental Impact", "User Engagement", "Scalability"],
    },
  ]

  return (
    <div className="w-full min-h-screen bg-[#0B0C10] text-white flex flex-col">
      <Navbar />

      {/* Page Heading */}
      <div className="px-6 lg:px-20 py-12 border-b border-[#283930]">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white mb-4">
            Choose Your <span className="text-[#13ec80]">Arena</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Deep dive into the challenges. Whether you're disrupting finance or saving the planet, find the track that
            sparks your innovation.
          </p>
        </div>
      </div>

      {/* Tracks Content */}
      <main className="flex-1 px-6 lg:px-20 py-12">
        <div className="max-w-4xl space-y-12">
          {tracks.map((track) => (
            <section
              key={track.id}
              className="bg-[#1a2420] rounded-xl overflow-hidden border border-[#283930] hover:border-[#13ec80]/50 transition-all"
            >
              <div className="p-8 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#13ec80]/20 border border-[#13ec80]/40">
                    <span className="material-symbols-outlined text-[#13ec80] text-2xl">{track.icon}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{track.title}</h2>
                </div>

                <p className="text-gray-400 leading-relaxed text-lg">{track.description}</p>

                <div>
                  <h3 className="flex items-center gap-2 text-white font-bold text-lg mb-3">
                    <span className="material-symbols-outlined text-[#13ec80]">lightbulb</span>
                    The Challenge
                  </h3>
                  <p className="text-sm text-gray-300 bg-[#0B0C10] p-4 rounded-lg border-l-4 border-[#13ec80]">
                    {track.challenge}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Suggested Tech</h3>
                    <div className="flex flex-wrap gap-2">
                      {track.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-[#1a2420] text-[#13ec80] text-xs font-bold border border-[#13ec80]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Key Criteria</h3>
                    <ul className="space-y-2">
                      {track.criteria.map((criterion, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="material-symbols-outlined text-[#13ec80] text-sm mt-0.5">check_circle</span>
                          {criterion}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#283930] flex justify-end">
                  <button className="flex items-center gap-2 bg-[#13ec80] hover:bg-[#0fd970] transition-colors text-[#0B0C10] font-bold py-2.5 px-6 rounded-lg">
                    <span>Register for {track.title.split(" ")[0]}</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
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

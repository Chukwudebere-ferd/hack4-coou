"use client"

import { ArrowRight, Lightbulb, GraduationCap, Rocket } from "lucide-react"
import Image from "next/image"

export function WhyParticipateSection() {
  return (
    <section className="py-24 px-4 md:px-10 bg-[#0B0C10] relative overflow-hidden" id="why-participate">
      <div className="absolute inset-0 bg-linear-to-br from-[#13ec80]/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      <div className="max-w-275 mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-start lg:items-center">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[#13ec80] text-sm font-bold tracking-widest uppercase">Why Participate?</span>
              <h2 className="text-white text-3xl md:text-5xl font-black leading-tight">
                Launch Your Career <br />
                <span className="text-[#13ec80]">In 48 Hours</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Join a diverse community of innovators. Whether you're writing your first line of code or deploying
                complex AI models, Hack4COOU is your platform to grow, connect, and shine.
              </p>
            </div>
            <div className="grid gap-8">
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-xl bg-[#15181E] border border-[#283930] flex items-center justify-center text-[#13ec80] shrink-0 group-hover:bg-[#13ec80] group-hover:text-black transition-all duration-300 shadow-lg shadow-[#13ec80]/5">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-2 group-hover:text-[#13ec80] transition-colors">
                    Innovation Experience
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Turn your wildest ideas into working prototypes. Learn new technologies and agile methodologies by
                    doing.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-xl bg-[#15181E] border border-[#283930] flex items-center justify-center text-[#13ec80] shrink-0 group-hover:bg-[#13ec80] group-hover:text-black transition-all duration-300 shadow-lg shadow-[#13ec80]/5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-2 group-hover:text-[#13ec80] transition-colors">
                    Expert Mentorship
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Get unstuck fast with 24/7 access to mentors from top tech giants and successful startups who are
                    here to help you succeed.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-xl bg-[#15181E] border border-[#283930] flex items-center justify-center text-[#13ec80] shrink-0 group-hover:bg-[#13ec80] group-hover:text-black transition-all duration-300 shadow-lg shadow-[#13ec80]/5">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-bold mb-2 group-hover:text-[#13ec80] transition-colors">
                    Career Growth & Networking
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Connect with future co-founders and impressive recruiters. Many hackers leave with internship offers
                    right on the spot!
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <button className="inline-flex items-center justify-center gap-2 text-[#13ec80] font-bold hover:text-white transition-colors group">
                See Success Stories
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden border border-[#283930] shadow-2xl group transform transition-transform duration-500 hover:rotate-1">
              <div className="absolute inset-0 bg-[#13ec80]/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
              <Image
                alt="Diverse group of students collaborating on a project"
                className="w-full h-125 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                height={500}
                src="/images/about2.jpg"
                width={600}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0B0C10] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-60 right-6 z-20">
                <p className="text-white font-bold text-lg">"The best workshop of my college life."</p>
                <p className="text-[#13ec80] text-sm mt-1">- Blessing Emejulu (GDG COOU Lead Organizer)</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#15181E] p-4 rounded-xl border border-[#283930] shadow-xl z-30 flex flex-col gap-2 max-w-50 animate-fade-in-up">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-bold text-sm">Resume Boost</span>
              </div>
              <div className="h-1.5 w-full bg-[#0B0C10] rounded-full overflow-hidden">
                <div className="h-full bg-[#13ec80] w-[90%]"></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Valued by top employers</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-[#15181E] p-4 rounded-xl border border-[#283930] shadow-xl z-30 hidden md:block rotate-6 hover:rotate-0 transition-transform">
              <svg className="w-12 h-12 text-[#13ec80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import RegistrationModal from "@/components/registration-modal"
import { AboutSection } from "@/components/about-section"
import { WhyParticipateSection } from "@/components/why-participate-section"
import { WhoCanParticipateSection } from "@/components/who-can-participate-section"
import { PrizesSection } from "@/components/prizes-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { TrainingSection } from "@/components/training-section"
import { MentorsSection } from "@/components/mentors-section"
import { TeamSection } from "@/components/team-section"
import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { FAQSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export default function HackathonLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const scrollToSchedule = () => {
    const scheduleSection = document.getElementById("schedule")
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0b0f] via-[#0B0C10] to-[#0a0b0f] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0B0C10]/80 border-b border-[#283930]">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="text-[#13ec80]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h2 className="text-white text-xl font-bold tracking-tight">Hack4COOU</h2>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a className="text-gray-300 hover:text-[#13ec80] transition-colors text-sm font-medium" href="#about">
                About
              </a>
              <a className="text-gray-300 hover:text-[#13ec80] transition-colors text-sm font-medium" href="#tracks">
                Tracks
              </a>
              <a className="text-gray-300 hover:text-[#13ec80] transition-colors text-sm font-medium" href="#prizes">
                Prizes
              </a>
              <a className="text-gray-300 hover:text-[#13ec80] transition-colors text-sm font-medium" href="#faq">
                FAQ
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Button
                onClick={openModal}
                className="bg-[#13ec80] hover:bg-[#13ec80]/90 text-[#0B0C10] font-bold shadow-[0_0_20px_-5px_rgba(19,236,128,0.4)] hover:shadow-[0_0_30px_-5px_rgba(19,236,128,0.6)] transition-all rounded-full pl-8 pr-8"
              >
                Register
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button className="text-white hover:text-[#13ec80]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onRegisterClick={openModal} onScheduleClick={scrollToSchedule} />

      {/* About Section */}
      <AboutSection />

      {/* Why Participate Section */}
      <WhyParticipateSection />

      {/* Who Can Participate Section */}
      <WhoCanParticipateSection />

      {/* Tracks Section */}
      {/* <TracksSection /> */}

      {/* Prizes Section */}
      <PrizesSection />

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Training Section */}
      <TrainingSection />

      {/* Mentors Section */}
      <MentorsSection />

      {/* Timeline Section */}
      <TimelineSection />

      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Team Section */}
      <TeamSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  )
}

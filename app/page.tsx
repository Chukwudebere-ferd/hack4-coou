"use client";
import { useState } from "react";
import { AboutSection } from "@/components/sections/about-section";
import { WhyParticipateSection } from "@/components/sections/why-participate-section";
import { WhoCanParticipateSection } from "@/components/sections/who-can-participate-section";
import { PrizesSection } from "@/components/sections/prizes-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { TrainingSection } from "@/components/sections/training-section";
import { MentorsSection } from "@/components/sections/mentors-section";
import { TeamSection } from "@/components/sections/team-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { FooterSection } from "@/components/sections/footer-section";
import { AIChatbot } from "@/components/sections/ai-chatbot";

export default function HackathonLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const openModal = () => setIsModalOpen(true)
  // const closeModal = () => setIsModalOpen(false)

  const scrollToSchedule = () => {
    const scheduleSection = document.getElementById("schedule");
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#0a0b0f] via-[#0B0C10] to-[#0a0b0f] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0B0C10]/80 border-b border-[#283930]">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="text-[#13ec80]">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h2 className="text-white text-xl font-bold tracking-tight">
                Hack4COOU
              </h2>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                className="text-gray-300 hover:text-[#13ec80] transition-colors text-sm font-medium"
                href="#about"
              >
                About
              </a>
              <a
                className="text-gray-300 hover:text-[#13ec80] transition-colors text-sm font-medium"
                href="#training"
              >
                Training
              </a>
              <a
                className="text-gray-300 hover:text-[#13ec80] transition-colors text-sm font-medium"
                href="#prizes"
              >
                Prizes
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <a
                href="https://gdg.community.dev/events/details/google-gdg-on-campus-chukwuemeka-odumegwu-ojukwu-university-anambra-nigeria-presents-hack4coou-innovate-amp-build/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#13ec80] hover:bg-[#13ec80]/90 text-[#0B0C10] font-bold shadow-[0_0_20px_-5px_rgba(19,236,128,0.4)] hover:shadow-[0_0_30px_-5px_rgba(19,236,128,0.6)] transition-all rounded-full pl-8 pr-8 py-2 inline-flex items-center"
              >
                Register
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-[#13ec80] transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-[#283930]">
              <a
                href="#about"
                onClick={handleMobileMenuClick}
                className="block px-4 py-2 text-gray-300 hover:text-[#13ec80] hover:bg-[#283930]/30 transition-colors text-sm font-medium"
              >
                About
              </a>
              <a
                href="#training"
                onClick={handleMobileMenuClick}
                className="block px-4 py-2 text-gray-300 hover:text-[#13ec80] hover:bg-[#283930]/30 transition-colors text-sm font-medium"
              >
                Training
              </a>
              <a
                href="#prizes"
                onClick={handleMobileMenuClick}
                className="block px-4 py-2 text-gray-300 hover:text-[#13ec80] hover:bg-[#283930]/30 transition-colors text-sm font-medium"
              >
                Prizes
              </a>

              <div className="px-4 py-2">
                <a
                  href="https://gdg.community.dev/events/details/google-gdg-on-campus-chukwuemeka-odumegwu-ojukwu-university-anambra-nigeria-presents-hack4coou-innovate-amp-build/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMobileMenuClick}
                  className="w-full bg-[#13ec80] hover:bg-[#13ec80]/90 text-[#0B0C10] font-bold shadow-[0_0_20px_-5px_rgba(19,236,128,0.4)] hover:shadow-[0_0_30px_-5px_rgba(19,236,128,0.6)] transition-all rounded-full px-6 py-2 inline-flex items-center justify-center"
                >
                  Register
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onScheduleClick={scrollToSchedule} />

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

      {/* <RegistrationModal isOpen={isModalOpen} onClose={closeModal} /> */}

      {/* Team Section */}
      <TeamSection />

      {/* Footer Section */}
      <FooterSection />

      {/* AI Chatbot Assistant */}
      <AIChatbot />
    </div>
  );
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { heroData } from "@/data/hero-data"

interface HeroSectionProps {
  onScheduleClick: () => void
}

export function HeroSection({ onScheduleClick }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(heroData.eventDate).getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24))
        const months = Math.floor(totalDays / 30)
        const days = totalDays % 30

        return {
          months: months,
          days: days,
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }
      return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-[#13ec80]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-100 h-100 bg-purple-500/10 rounded-full blur-[120px]"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#283930_1px,transparent_1px),linear-gradient(to_bottom,#283930_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
      </div>

      {/* Laptop Image */}
      <div className="relative z-10 w-full flex justify-center px-6 pt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#283930]/50 border border-[#13ec80]/20 text-[#13ec80] text-xs font-semibold tracking-wider uppercase mb-4 absolute top-4">
          <span className="w-2 h-2 rounded-full bg-[#13ec80] animate-in"></span>
          {heroData.registrationStatus}
        </div>
        <img
          src="/images/hack4coou-laptop-with-hands-2-gemini.png"
          alt="Hack4COOU Laptop"
          className="w-full max-w-175 h-auto drop-shadow-[0_0_40px_rgba(19,236,128,0.4)]"
        />
      </div>

      {/* Content Container - Overlaps the hands */}
      <div className="relative z-20 mt-1 mb-20 w-full">
        <div className="mx-auto max-w-4xl px-6 py-12 bg-[#0B0C10]/95 backdrop-blur-md border-t border-[#283930] rounded-t-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.5)]">
          <div className="text-center flex flex-col items-center gap-6">
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              {heroData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={heroData.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 rounded-full bg-[#13ec80] text-[#0B0C10] font-bold text-base hover:shadow-[0_0_20px_-5px_rgba(19,236,128,0.4)] transition-all hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto flex items-center justify-center"
              >
                {heroData.ctaText}
              </a>
              <Button
                onClick={onScheduleClick}
                variant="outline"
                className="h-12 px-8 rounded-full border border-[#283930] bg-transparent text-white font-medium text-base hover:bg-[#283930] hover:border-[#13ec80]/50 transition-all w-full sm:w-auto group"
              >
                {heroData.secondaryCtaText}
                <svg
                  className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </div>

            {/* Timer Component */}
            <div className="mt-8 w-full max-w-2xl">
              <div className="grid grid-cols-5 gap-2 sm:gap-4 p-4 rounded-full bg-[#15181E]/50 border border-[#283930] backdrop-blur-sm">
                <div className="flex flex-col items-center gap-1">
                  <div className="text-2xl sm:text-4xl font-bold text-white tabular-nums">
                    {String(timeLeft.months).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Months</div>
                </div>
                <div className="flex flex-col items-center gap-1 relative after:content-[':'] after:absolute after:-right-2 sm:after:-right-3 after:top-1 after:text-gray-600 after:text-2xl sm:after:text-4xl">
                  <div className="text-2xl sm:text-4xl font-bold text-white tabular-nums">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Days</div>
                </div>
                <div className="flex flex-col items-center gap-1 relative after:content-[':'] after:absolute after:-right-2 sm:after:-right-3 after:top-1 after:text-gray-600 after:text-2xl sm:after:text-4xl">
                  <div className="text-2xl sm:text-4xl font-bold text-white tabular-nums">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Hours</div>
                </div>
                <div className="flex flex-col items-center gap-1 relative after:content-[':'] after:absolute after:-right-2 sm:after:-right-3 after:top-1 after:text-gray-600 after:text-2xl sm:after:text-4xl">
                  <div className="text-2xl sm:text-4xl font-bold text-white tabular-nums">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Mins</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="text-2xl sm:text-4xl font-bold text-[#13ec80] tabular-nums">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Secs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

"use client"

import { sponsors } from "@/data/sponsors-data"

export function SponsorsSection() {
  return (
    <section className="py-24 bg-[#0B0C10]" id="partners">
      <div className="max-w-300 mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-[#13ec80]">Sponsors & Partners</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Powering innovation together with industry leaders and tech innovators
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="group relative flex items-center justify-center w-full h-32 bg-[#15181E] rounded-xl border border-[#283930] hover:border-[#13ec80]/50 transition-all p-6"
            >
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                className="w-full h-full mb-8 md:mb-8 sm:md-8 object-contain group-hover:scale-105 transition-transform"
              />
              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-100 group-hover:text-[#13ec80] transition-opacity text-center">
                {sponsor.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

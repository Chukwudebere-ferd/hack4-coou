"use client"

import Link from "next/link"

export function Navbar() {
  return (
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
            <Link className="text-gray-300 hover:text-[#13ec80] transition-colors text-sm font-medium" href="/#about">
              About
            </Link>
            <Link className="text-gray-300 hover:text-[#13ec80] transition-colors text-sm font-medium" href="/#tracks">
              Tracks
            </Link>
            <Link className="text-gray-300 hover:text-[#13ec80] transition-colors text-sm font-medium" href="/#prizes">
              Prizes
            </Link>
            <Link className="text-gray-300 hover:text-[#13ec80] transition-colors text-sm font-medium" href="/#faq">
              FAQ
            </Link>
          </div>

          <a
            href="https://gdg.community.dev/events/details/google-gdg-on-campus-chukwuemeka-odumegwu-ojukwu-university-anambra-nigeria-presents-hack4coou-innovate-amp-build/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#13ec80] text-[#0B0C10] font-bold text-sm hover:bg-[#0fd970] transition-colors">
              Register
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

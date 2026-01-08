"use client"

import type React from "react"
import { useState } from "react"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    track: "",
    experience: "",
    terms: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.university.trim()) {
      newErrors.university = "University/Institution is required"
    }

    if (!formData.track) {
      newErrors.track = "Please select a competition track"
    }

    if (!formData.experience) {
      newErrors.experience = "Please select your experience level"
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", formData)
    alert("Registration successful! We will send you a confirmation email shortly.")

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      university: "",
      track: "",
      experience: "",
      terms: false,
    })
    setIsSubmitting(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[600px] bg-[#15181E] border border-[#283930] rounded-xl p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Join the <span className="text-[#13ec80]">Revolution</span>
          </h2>
          <p className="text-gray-400">Register now to secure your spot in the biggest hackathon of the year</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                <span className="text-red-500">*</span> First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-[#0B0C10] border rounded-lg text-white focus:outline-none focus:ring-1 transition-all ${
                  errors.firstName
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-[#283930] focus:border-[#13ec80] focus:ring-[#13ec80]"
                }`}
                placeholder="John"
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                <span className="text-red-500">*</span> Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-[#0B0C10] border rounded-lg text-white focus:outline-none focus:ring-1 transition-all ${
                  errors.lastName
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-[#283930] focus:border-[#13ec80] focus:ring-[#13ec80]"
                }`}
                placeholder="Doe"
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              <span className="text-red-500">*</span> Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-[#0B0C10] border rounded-lg text-white focus:outline-none focus:ring-1 transition-all ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-[#283930] focus:border-[#13ec80] focus:ring-[#13ec80]"
              }`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="university" className="block text-sm font-medium text-gray-300 mb-2">
              <span className="text-red-500">*</span> University/Institution
            </label>
            <input
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-[#0B0C10] border rounded-lg text-white focus:outline-none focus:ring-1 transition-all ${
                errors.university
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-[#283930] focus:border-[#13ec80] focus:ring-[#13ec80]"
              }`}
              placeholder="Chukwuemeka Odumegwu Ojukwu University"
            />
            {errors.university && <p className="mt-1 text-sm text-red-500">{errors.university}</p>}
          </div>

          <div>
            <label htmlFor="track" className="block text-sm font-medium text-gray-300 mb-2">
              <span className="text-red-500">*</span> Competition Track
            </label>
            <select
              id="track"
              name="track"
              value={formData.track}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-[#0B0C10] border rounded-lg text-white focus:outline-none focus:ring-1 transition-all ${
                errors.track
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-[#283930] focus:border-[#13ec80] focus:ring-[#13ec80]"
              }`}
            >
              <option value="">Select a track</option>
              <option value="web3">Web3 & Blockchain</option>
              <option value="ai">AI & Machine Learning</option>
              <option value="fintech">FinTech Innovation</option>
              <option value="health">Health Tech</option>
            </select>
            {errors.track && <p className="mt-1 text-sm text-red-500">{errors.track}</p>}
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
              <span className="text-red-500">*</span> Experience Level
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-[#0B0C10] border rounded-lg text-white focus:outline-none focus:ring-1 transition-all ${
                errors.experience
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-[#283930] focus:border-[#13ec80] focus:ring-[#13ec80]"
              }`}
            >
              <option value="">Select your level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            {errors.experience && <p className="mt-1 text-sm text-red-500">{errors.experience}</p>}
          </div>

          <div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 rounded border-[#283930] bg-[#0B0C10] text-[#13ec80] focus:ring-[#13ec80]"
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                <span className="text-red-500">*</span> I agree to the terms and conditions and confirm my participation
                in Hack4COOU
              </label>
            </div>
            {errors.terms && <p className="mt-1 text-sm text-red-500">{errors.terms}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#13ec80] text-[#0B0C10] font-bold rounded-lg hover:bg-[#13ec80]/90 transition-all hover:shadow-lg hover:shadow-[#13ec80]/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Register Now"}
          </button>
        </form>
      </div>
    </div>
  )
}

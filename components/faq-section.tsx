import { faqs } from "@/data/faq-data"

export function FAQSection() {
  return (
    <section className="py-24 bg-[#0B0C10]" id="faq">
      <div className="max-w-200 mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Frequently Asked <span className="text-[#13ec80]">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group bg-[#15181E] border border-[#283930] rounded-lg open:border-[#13ec80]/30 transition-all"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium hover:text-[#13ec80] transition-colors">
                <span>{faq.question}</span>
                <svg
                  className="w-6 h-6 transform group-open:rotate-180 transition-transform text-gray-500 group-open:text-[#13ec80]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-[#283930] pt-4">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

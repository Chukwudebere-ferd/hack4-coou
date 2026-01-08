import { prizes } from "@/data/prizes-data"

export function PrizesSection() {
  return (
    <section className="py-24 bg-[#0B0C10] relative overflow-hidden" id="prizes">
      <div className="max-w-240 mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          Champion <span className="text-[#13ec80]">Rewards</span>
        </h2>

        <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-8 min-h-100">
          {prizes.map((prize) => (
            <div
              key={prize.id}
              className={`w-full ${prize.rank === "1" ? "md:w-1/3 order-1 md:order-2 z-10" : "md:w-1/3"} ${prize.rank === "2" ? "order-2 md:order-1" : ""} ${prize.rank === "3" ? "order-3" : ""} flex flex-col items-center`}
            >
              <div
                className={`${prize.color} font-bold mb-4 ${prize.rank === "1" ? "text-2xl animate-pulse text-[#13ec80]" : "text-xl"}`}
              >
                {prize.title}
              </div>
              <div
                className={`w-full bg-linear-to-b ${prize.bgGradient} border-t-4 ${prize.borderColor} rounded-t-xl ${prize.height} relative group flex items-end justify-center pb-8 ${prize.hoverHeight} transition-all duration-500 ${prize.rank === "1" ? prize.hoverBg : ""}`}
              >
                <svg
                  className={`w-${prize.rank === "1" ? "20" : "16"} h-${prize.rank === "1" ? "20" : "16"} ${prize.color} ${prize.rank === "1" ? "" : "group-hover:text-white"} transition-colors mb-4`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {prize.icon === "trophy" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  )}
                  {prize.icon === "medal" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  )}
                </svg>
                <div className="absolute top-4 sm:top-6 w-full text-center">
                  <p className={`${prize.rank === "1" ? "text-4xl" : "text-2xl"} font-bold text-white`}>
                    {prize.amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export interface Prize {
  id: string
  rank: string
  title: string
  color: string
  borderColor: string
  bgGradient: string
  hoverBg: string
  icon: string
  height: string
  hoverHeight: string
  amount: string
}

export const prizes: Prize[] = [
  {
    id: "1",
    rank: "2",
    title: "2nd Place",
    color: "text-gray-500",
    borderColor: "border-gray-400",
    bgGradient: "from-gray-700 to-gray-900",
    hoverBg: "hover:shadow-none",
    icon: "medal",
    height: "h-62.5",
    hoverHeight: "hover:h-67.5",
    amount: "coming soon",
  },
  // {
  //   id: "2",
  //   rank: "1",
  //   title: "1st Place",
  //   color: "text-[#13ec80]",
  //   borderColor: "border-[#13ec80]",
  //   bgGradient: "from-[#13ec80]/20 to-[#0B0C10]",
  //   hoverBg: "shadow-[0_-10px_40px_-10px_rgba(19,236,128,0.3)]",
  //   icon: "medal",
  //   height: "h-62.5",
  //   hoverHeight: "hover:h-67.5",
  //   amount: "coming soon",
  // },
   {
    id: "4",
    rank: "4",
    title: "1st Place",
    color: "text-[#13ec80]",
    borderColor: "border-[#13ec80]",
    bgGradient: "from-[#13ec80]/20 to-[#0B0C10]",
    hoverBg: "shadow-[0_-10px_40px_-10px_rgba(19,236,128,0.3)]",
    icon: "medal",
    height: "h-62.5",
    hoverHeight: "hover:h-80",
    amount: "coming soon",
  },
  {
    id: "3",
    rank: "3",
    title: "3rd Place",
    color: "text-amber-800",
    borderColor: "border-amber-700",
    bgGradient: "from-amber-900/30 to-gray-900",
    hoverBg: "hover:shadow-none",
    icon: "medal",
    height: "h-50",
    hoverHeight: "hover:h-55",
    amount: "coming soon",
  },
]

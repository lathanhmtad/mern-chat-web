import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import animationData from '@/assets/lottie-json'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const colors = [
  'bg-[#4cc9f02a] text-[#4cc9f0] border-[1px] border-[#4cc9f0bb]',
  'bg-[#06d6a02a] text-[#0066a0] border-[1px] border-[#0066a0bb]',
  'bg-[#ff660a2a] text-[#ff660a] border-[1px] border-[#ff660abb]',
  'bg-[#712c4a57] text-[#ff006e] border-[1px] border-[#ff006faa]'
]
export const getColor = (color) => {
  if (color >= 0 && color < colors.length) {
    return colors[color]
  }
  return colors[0]
}

export const animationDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData
}
import { useEffect, useState } from 'react'
import WhatsAppIcon from './WhatsAppIcon'
import { WA } from '../data/content'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <a
      href={WA.default}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`group fixed bottom-5 right-5 z-[999] flex items-center gap-0 rounded-full bg-wa p-4 text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:gap-2 hover:bg-waDark active:scale-[0.95] sm:bottom-7 sm:right-7 ${
        visible ? 'opacity-100 translate-y-0' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <WhatsAppIcon size={22} className="shrink-0" />
      <span className="overflow-hidden whitespace-nowrap font-body text-[0px] font-semibold uppercase tracking-wide transition-all duration-300 group-hover:text-[12px]">
        Falar agora
      </span>
    </a>
  )
}

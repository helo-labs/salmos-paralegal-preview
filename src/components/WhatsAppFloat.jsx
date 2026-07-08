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
      className={`fixed bottom-5 right-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-card transition-all duration-500 hover:-translate-y-0.5 hover:bg-waDark active:scale-[0.95] sm:h-auto sm:w-auto sm:gap-2.5 sm:rounded-full sm:py-3.5 sm:pl-4 sm:pr-5 sm:font-body sm:text-[12px] sm:font-semibold sm:uppercase sm:tracking-wide sm:bottom-7 sm:right-7 ${
        visible ? 'opacity-100 translate-y-0' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <WhatsAppIcon size={22} />
      <span className="hidden sm:inline">Falar agora</span>
    </a>
  )
}

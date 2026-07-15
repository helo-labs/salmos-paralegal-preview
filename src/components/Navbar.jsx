import { useEffect, useState } from 'react'
import Logo from './Logo'
import Icon from './Icon'
import { NAV_LINKS, SOCIAL, WA } from '../data/content'
import { scrollToId } from '../scrollToId'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-bg/90 border-border backdrop-blur-xl'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-6xl items-center gap-6 px-5 sm:px-7">
        <Logo shape="square" />

        <nav className="ml-auto hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); scrollToId(l.href) }}
              className="rounded-md px-3.5 py-2 font-body text-[13px] text-mid transition-colors hover:text-hi hover:bg-surface"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1.5">
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="flex h-8 w-8 items-center justify-center rounded-full text-lo transition-colors hover:bg-surface hover:text-blue"
          >
            <Icon name="instagram" size={15} />
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-full text-lo transition-colors hover:bg-surface hover:text-blue"
          >
            <Icon name="linkedin" size={15} />
          </a>
        </div>

        <a
          href={WA.default}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2.5 font-body text-[13px] font-semibold text-hi transition-all hover:-translate-y-0.5 active:scale-[0.96]"
        >
          Falar agora
          <Icon name="arrow" size={14} strokeWidth={2.5} />
        </a>

        <button
          className="ml-auto md:hidden text-hi p-2 transition-transform active:scale-90"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-border bg-bg2 transition-[max-height] duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); setOpen(false); scrollToId(l.href) }}
              className="border-b border-border2 py-3.5 font-body text-[15px] text-mid"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA.default}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-lg bg-gold py-3.5 text-center font-body text-[14px] font-semibold text-hi transition-transform active:scale-[0.97]"
          >
            Falar no WhatsApp →
          </a>
        </div>
      </div>
    </header>
  )
}

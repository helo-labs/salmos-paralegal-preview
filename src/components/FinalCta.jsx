import WhatsAppIcon from './WhatsAppIcon'
import { FOOTER_STRIP_ITEMS, WA } from '../data/content'

export default function FinalCta() {
  return (
    <section id="contato" className="border-t border-border bg-bg2 px-5 py-8 sm:px-7">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.1em] text-lo">
          {FOOTER_STRIP_ITEMS.map((item, i) => (
            <span key={item} className="flex items-center gap-2.5">
              {item}
              {i < FOOTER_STRIP_ITEMS.length - 1 && <span className="text-sage">•</span>}
            </span>
          ))}
        </div>

        <a
          href={WA.default}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-[13.5px] font-semibold text-wa transition-all hover:opacity-75 active:scale-[0.97]"
        >
          <WhatsAppIcon size={16} />
          Fale com um especialista agora mesmo!
        </a>
      </div>
    </section>
  )
}

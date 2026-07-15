import { useState } from 'react'
import Icon from './Icon'
import WhatsAppIcon from './WhatsAppIcon'
import { FAQ_ITEMS, WA } from '../data/content'

function FaqRow({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-border2">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-body text-[14.5px] font-semibold text-hi sm:text-[15.5px]">
          {item.q}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-mid transition-transform duration-300 ${
            isOpen ? 'rotate-45 border-blue/40 text-blue' : ''
          }`}
        >
          <Icon name="close" size={13} strokeWidth={2.4} className="rotate-45" />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <p className="max-w-2xl font-body text-[13.5px] font-light leading-[1.7] text-mid">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="border-t border-border bg-bg2 px-5 py-24 sm:px-7">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="sr lg:sticky lg:top-28">
          <p className="mb-3 font-accent italic text-[14px] font-semibold uppercase tracking-[0.16em] text-blue">
            Perguntas frequentes
          </p>
          <span aria-hidden className="mb-6 block h-[2px] w-8 bg-gold" />
          <h2 className="font-display text-[28px] font-extrabold leading-tight tracking-tight text-hi sm:text-[36px]">
            Ficou com
            <br />
            alguma <span className="text-blue2">dúvida?</span>
          </h2>
          <p className="mt-5 max-w-sm font-body text-[14.5px] font-light leading-[1.7] text-mid">
            Se a sua pergunta não estiver aqui, é só chamar a gente no
            WhatsApp — respondemos rápido.
          </p>
          <a
            href={WA.default}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2.5 rounded-xl bg-wa px-5 py-3 font-body text-[13.5px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-waDark"
          >
            <WhatsAppIcon size={16} />
            Perguntar no WhatsApp
          </a>
        </div>

        <div className="sr d2 rounded-2xl border border-border bg-bg3 px-6 sm:px-8">
          {FAQ_ITEMS.map((item, i) => (
            <FaqRow
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import Icon from './Icon'
import WhatsAppIcon from './WhatsAppIcon'
import { HERO_BADGES, WA } from '../data/content'
import { scrollToId } from '../scrollToId'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pt-[110px] pb-16 sm:pt-[130px] sm:pb-24">
      {/* grain texture — dá um acabamento "papel/selo" em vez de flat */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay">
        <filter id="heroGrain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#heroGrain)" />
      </svg>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-7 xl:grid-cols-2 xl:items-center">
        <div className="min-w-0">
          <h1 className="sr d1 break-words font-display text-[28px] font-extrabold leading-[1.08] tracking-tight text-hi sm:text-[46px]">
            Registros e <span className="text-gold">regularização</span>
            <br />
            de empresas.
          </h1>

          <p className="sr d2 mt-6 max-w-md font-body text-[16px] font-light leading-[1.7] text-mid">
            Soluções completas para o seu negócio crescer com segurança.
            Cuidamos de toda a burocracia para você focar no que importa.
          </p>

          <div className="sr d3 mt-9 flex flex-wrap gap-3">
            <a
              href={WA.default}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-wa px-6 py-3.5 font-body text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-waDark active:scale-[0.97] active:translate-y-0"
            >
              <WhatsAppIcon size={17} />
              Falar com um especialista
            </a>
            <a
              href="#servicos"
              onClick={(e) => { e.preventDefault(); scrollToId('servicos') }}
              className="inline-flex items-center rounded-xl border border-border px-6 py-3.5 font-body text-[14px] font-medium text-mid transition-all hover:border-xlo hover:bg-surface hover:text-hi active:scale-[0.97]"
            >
              Ver serviços
            </a>
          </div>

          {/* Badges */}
          <div className="sr d4 mt-11 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
            {HERO_BADGES.map((b) => (
              <div key={b.label + b.sub} className="flex flex-col gap-2">
                <Icon name={b.icon} size={20} className="text-gold" />
                <p className="font-body text-[12.5px] leading-tight text-mid">
                  <span className="font-semibold text-hi">{b.label}</span>
                  <br />
                  {b.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: card antes/depois — só desktop, contraste de experiência em vez de repetir listas de conteúdo ── */}
        <div className="sr d2 hidden xl:block">
          <div className="mx-auto max-w-[380px] overflow-hidden rounded-2xl border border-border shadow-card">
            <div className="flex flex-col items-center gap-3 bg-surface px-8 py-9 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-xlo/15 text-lo">
                <Icon name="folder" size={22} />
              </span>
              <p className="font-body text-[10px] font-bold uppercase tracking-[0.14em] text-lo">
                Antes
              </p>
              <p className="font-body text-[14.5px] font-light leading-[1.6] text-mid">
                Papelada, prazos incertos, burocracia parada.
              </p>
            </div>

            <div className="flex items-center justify-center bg-blue2/15 py-2">
              <Icon name="arrow" size={16} strokeWidth={2.5} className="rotate-90 text-blue2" />
            </div>

            <div className="flex flex-col items-center gap-3 bg-forest px-8 py-9 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon name="check" size={22} strokeWidth={3} />
              </span>
              <p className="font-body text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                Depois
              </p>
              <p className="font-body text-[14.5px] font-light leading-[1.6] text-white/80">
                Empresa aberta, documentação em dia, processo simplificado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

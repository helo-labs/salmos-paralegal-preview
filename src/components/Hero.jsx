import Icon from './Icon'
import WhatsAppIcon from './WhatsAppIcon'
import Logo from './Logo'
import { HERO_BADGES, SERVICES, WA } from '../data/content'

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

      {/* anéis concêntricos — ecoam o selo circular da marca */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[440px] w-[440px] rounded-full border border-blue/[0.20] sm:h-[560px] sm:w-[560px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 hidden h-[440px] w-[440px] translate-x-14 translate-y-14 rounded-full border border-sage/[0.10] sm:block sm:h-[560px] sm:w-[560px]"
      />

      {/* glows em camadas — dourado + sálvia, mais quente e menos "SaaS genérico" */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(31,56,86,.16) 0%, transparent 65%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(31,56,86,.12) 0%, transparent 70%)' }}
      />

      {/* dot grid, sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dotgrid bg-dotgrid opacity-70"
        style={{
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 28%, black 25%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 28%, black 25%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-7 lg:grid-cols-2 lg:items-center">
        {/* ── Left ── */}
        <div>
          <p className="sr mb-6 font-mono text-[11px] tracking-[0.1em] text-lo">
            REGISTROS E REGULARIZAÇÃO DE EMPRESAS
          </p>

          <h1 className="sr d1 font-display text-[34px] font-extrabold leading-[1.08] tracking-tight text-hi sm:text-[46px] lg:text-[54px]">
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

        {/* ── Right: services preview panel — só desktop/tablet. No mobile ele ocupava espaço sem agregar (os serviços já aparecem logo na seção seguinte) ── */}
        <div className="sr d2 hidden lg:block">
          <div className="mx-auto max-w-[420px] overflow-hidden rounded-2xl border border-border bg-bg2 shadow-card">
            {/* header do painel, com selo da marca em vez de bolinhas genéricas de "browser" */}
            <div className="flex items-center gap-3 border-b border-border bg-surface px-5 py-4">
              <Logo showName={false} size={30} />
              <span className="font-mono text-[11px] tracking-[0.06em] text-lo">
                Áreas de atuação
              </span>
            </div>

            <div className="flex flex-col gap-1 p-4">
              {SERVICES.map((sv, i) => (
                <div
                  key={sv.title}
                  className="flex items-center gap-3.5 rounded-lg border border-border2 bg-surface px-4 py-3.5"
                >
                  <span className="w-6 shrink-0 font-mono text-[11px] font-bold text-gold">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="font-body text-[13px] font-semibold text-hi">
                      {sv.title}
                    </p>
                    <p className="mt-0.5 font-body text-[11.5px] font-light text-lo">
                      {sv.desc}
                    </p>
                  </div>
                </div>
              ))}

              <a
                href={WA.default}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-forest py-3.5 font-body text-[13px] font-semibold text-sage transition-colors hover:bg-green"
              >
                Falar com um especialista
              </a>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-border2 px-5 py-3.5">
              {['Empresarial', 'Societário', 'Compliance'].map((t) => (
                <span
                  key={t}
                  className="rounded border border-border2 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.08em] text-lo"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

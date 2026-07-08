import Logo from './Logo'
import { WA } from '../data/content'

export default function GrowthBanner() {
  return (
    <section className="relative overflow-hidden bg-bg px-5 py-24 sm:px-7">
      {/* skyline silhouette */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 opacity-40">
        <svg viewBox="0 0 1200 220" className="w-full text-forest" fill="currentColor">
          <rect x="20" y="90" width="70" height="130" />
          <rect x="110" y="40" width="55" height="180" />
          <rect x="185" y="120" width="60" height="100" />
          <rect x="265" y="10" width="50" height="210" />
          <rect x="335" y="70" width="65" height="150" />
          <rect x="420" y="130" width="45" height="90" />
          <rect x="485" y="55" width="60" height="165" />
          <rect x="565" y="95" width="70" height="125" />
          <rect x="655" y="25" width="50" height="195" />
          <rect x="725" y="105" width="60" height="115" />
          <rect x="805" y="60" width="55" height="160" />
          <rect x="880" y="115" width="65" height="105" />
          <rect x="965" y="35" width="50" height="185" />
          <rect x="1035" y="100" width="60" height="120" />
          <rect x="1115" y="70" width="65" height="150" />
        </svg>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, #ffffff 10%, rgba(255,255,255,.4) 55%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="sr font-display text-[26px] font-extrabold leading-[1.25] tracking-tight text-hi sm:text-[34px] lg:max-w-xl">
          Cuidamos da burocracia para você focar no que realmente importa:{' '}
          <span className="text-gold">fazer sua empresa crescer.</span>
        </h2>

        <div className="sr d2 flex flex-col items-start gap-5 lg:items-end">
          <Logo showName />
          <a
            href={WA.default}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-gold px-6 py-3.5 font-body text-[14px] font-semibold text-hi transition-all hover:-translate-y-0.5 active:scale-[0.97]"
          >
            Começar agora
          </a>
        </div>
      </div>
    </section>
  )
}

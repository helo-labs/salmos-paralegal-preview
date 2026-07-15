import Icon from './Icon'
import { TRUST_STATS } from '../data/content'

export default function Trust() {
  return (
    <section id="seguranca" className="relative overflow-hidden border-t border-border bg-bg px-5 py-24 sm:px-7">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full sm:block"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,.08) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="sr mb-10 max-w-xl sm:mb-14">
          <p className="mb-3 font-body text-[12px] font-bold uppercase tracking-[0.16em] text-blue">
            Segurança jurídica
          </p>
          <h2 className="font-display text-[24px] font-extrabold leading-tight tracking-tight text-hi sm:text-[36px]">
            Segurança jurídica para
            <br />
            <span className="text-blue2">decisões inteligentes.</span>
          </h2>
          <p className="mt-4 font-body text-[14px] font-light leading-[1.7] text-mid sm:mt-5 sm:text-[14.5px]">
            A base legal que sua empresa precisa para ir mais longe.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:grid-cols-4">
          {TRUST_STATS.map((t, i) => (
            <div
              key={t.label}
              className={`sr d${(i % 4) + 1} flex flex-col items-center gap-2.5 rounded-xl border border-border bg-bg3 px-3 py-5 text-center transition-colors hover:border-blue/30 sm:gap-4 sm:rounded-2xl sm:px-6 sm:py-9`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue/30 bg-forest text-gold sm:h-14 sm:w-14">
                <Icon name={t.icon} size={20} className="sm:hidden" />
                <Icon name={t.icon} size={24} className="hidden sm:block" />
              </span>
              <p className="font-display text-[13px] font-bold tracking-tight text-hi sm:text-[15px]">
                {t.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

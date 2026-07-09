import WhatsAppIcon from './WhatsAppIcon'
import { HOW_IT_WORKS, WA } from '../data/content'

export default function HowItWorks() {
  return (
    <section className="border-t border-border bg-bg px-5 py-24 sm:px-7">
      <div className="mx-auto max-w-6xl">
        <div className="sr mb-14 max-w-xl">
          <p className="mb-3 font-mono text-[12px] font-bold tracking-[0.06em] text-blue">
            // como funciona
          </p>
          <h2 className="font-display text-[28px] font-extrabold leading-tight tracking-tight text-hi sm:text-[36px]">
            Do primeiro contato ao registro,
            <br />
            <span className="text-blue2">em 4 passos simples.</span>
          </h2>
        </div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* linha conectora — só desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-blue/35 to-transparent lg:block"
          />

          {HOW_IT_WORKS.map((step, i) => (
            <div key={step.title} className={`sr d${i + 1} relative flex flex-col gap-4`}>
              <div className="relative z-10 flex h-[54px] w-[54px] items-center justify-center rounded-full border border-blue/40 bg-bg2 font-display text-[18px] font-extrabold text-blue shadow-card">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="font-display text-[16px] font-bold tracking-tight text-hi">
                  {step.title}
                </h3>
                <p className="mt-1.5 font-body text-[13.5px] font-light leading-[1.65] text-mid">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="sr d4 mt-12 flex justify-center">
          <a
            href={WA.default}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-wa px-6 py-3.5 font-body text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-waDark active:scale-[0.97]"
          >
            <WhatsAppIcon size={17} />
            Dar o primeiro passo agora
          </a>
        </div>
      </div>
    </section>
  )
}

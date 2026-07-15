import Icon from './Icon'
import { SERVICES, WA } from '../data/content'

export default function Services() {
  return (
    <section id="servicos" className="border-t border-border bg-bg2 px-5 py-24 sm:px-7">
      <div className="mx-auto max-w-6xl">
        <div className="sr mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-3 font-accent italic text-[14px] font-semibold uppercase tracking-[0.16em] text-blue">
              Nossos serviços
            </p>
            <span aria-hidden className="mb-6 block h-[2px] w-8 bg-gold" />
            <h2 className="font-display text-[28px] font-extrabold leading-tight tracking-tight text-hi sm:text-[38px]">
              Tudo que sua empresa precisa,
              <br />
              <span className="text-blue2">em um só lugar.</span>
            </h2>
          </div>
          <p className="font-body text-[15px] font-light leading-[1.7] text-mid">
            Sem deslocamento, sem papelada física, sem filas. Atendemos em
            todo o Brasil, com processos online e acompanhamento em
            cada etapa.
          </p>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((sv, i) => (
            <div
              key={sv.title}
              className={`sr d${(i % 4) + 1} group flex flex-col gap-3 rounded-2xl border border-border bg-bg3 p-6 transition-all hover:-translate-y-1 hover:border-blue/30 hover:shadow-card active:scale-[0.98]`}
            >
              <div className="text-lo transition-colors group-hover:text-blue">
                <Icon name={sv.icon} size={24} />
              </div>
              <h3 className="font-display text-[17px] font-bold tracking-tight text-hi">
                {sv.title}
              </h3>
              <p className="flex-1 font-body text-[13.5px] font-light leading-[1.65] text-mid">
                {sv.desc}
              </p>
              <a
                href={WA.service(sv.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta mt-1 inline-flex w-fit items-center gap-1.5 border-t border-border2 pt-3 font-body text-[12.5px] font-semibold text-blue transition-colors hover:text-gold"
              >
                <span className="relative">
                  Falar sobre isso
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover/cta:w-full" />
                </span>
                <Icon
                  name="arrow"
                  size={13}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover/cta:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>

        {/* strip */}
        <div className="sr d2 mt-6 flex flex-col items-center gap-5 rounded-2xl border border-border bg-surface px-7 py-7 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-[17px] font-bold tracking-tight text-hi">
              Não sabe qual serviço precisa?
            </p>
            <p className="mt-1 font-body text-[13px] font-light text-mid">
              Mande uma mensagem e receba uma orientação personalizada.
            </p>
          </div>
          <a
            href={WA.default}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-gold px-6 py-3.5 font-body text-[13.5px] font-semibold text-hi transition-all hover:-translate-y-0.5 active:scale-[0.97]"
          >
            Vamos conversar!
          </a>
        </div>
      </div>
    </section>
  )
}

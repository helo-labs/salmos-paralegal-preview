import Checklist from './Checklist'
import Icon from './Icon'
import { WHY_US_ITEMS } from '../data/content'

export default function WhyUs() {
  return (
    <section id="por-que-nos" className="border-t border-border bg-bg2 px-5 py-24 sm:px-7">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
        <div className="sr">
          <p className="mb-3 font-accent italic text-[14px] font-semibold uppercase tracking-[0.16em] text-blue">
            Diferenciais
          </p>
          <span aria-hidden className="mb-6 block h-[2px] w-8 bg-gold" />
          <h2 className="font-display text-[28px] font-extrabold leading-tight tracking-tight text-hi sm:text-[36px]">
            Por que escolher a{' '}
            <span className="text-gold">Salmos?</span>
          </h2>
          <div className="mt-8">
            <Checklist items={WHY_US_ITEMS} />
          </div>
        </div>

        {/* pilha de "documentos" ilustrativa, em CSS puro — reforça visualmente o cuidado com o processo, sem repetir texto de outra seção */}
        <div className="sr d2 flex justify-center lg:justify-end">
          <div className="relative mx-auto h-64 w-56 sm:h-72 sm:w-64">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute inset-x-0 rounded-xl border border-border bg-bg3 shadow-card"
                style={{
                  bottom: i * 18,
                  left: i * 10,
                  right: -(i * 10),
                  height: '75%',
                  zIndex: 3 - i,
                }}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 z-10 flex h-3/4 flex-col gap-2.5 rounded-xl border border-blue/25 bg-surface p-5 shadow-card">
              <div className="h-2 w-2/3 rounded-full bg-lo" />
              <div className="h-2 w-1/2 rounded-full bg-lo" />
              <div className="mt-2 h-2 w-full rounded-full bg-xlo" />
              <div className="h-2 w-5/6 rounded-full bg-xlo" />
              <div className="h-2 w-3/4 rounded-full bg-xlo" />
              <div className="mt-auto flex items-center gap-2 border-t border-border2 pt-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue/40 text-blue">
                  <Icon name="check" size={12} strokeWidth={3} />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-lo">
                  documento validado
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

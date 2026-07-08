import Logo from './Logo'
import Icon from './Icon'
import WhatsAppIcon from './WhatsAppIcon'
import { SERVICES, SOCIAL, WA } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-bg px-5 sm:px-7">
      <div className="mx-auto grid max-w-6xl gap-12 py-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs font-body text-[13px] font-light leading-[1.7] text-lo">
            Abertura e alterações contratuais para empreendedores em
            todo o Brasil, 100% online.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-lo transition-colors hover:border-gold/40 hover:text-gold"
            >
              <Icon name="instagram" size={15} />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-lo transition-colors hover:border-gold/40 hover:text-gold"
            >
              <Icon name="linkedin" size={15} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          <div>
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-lo">
              Serviços
            </p>
            <div className="flex flex-col">
              {SERVICES.map((sv) => (
                <a
                  key={sv.title}
                  href="#servicos"
                  className="py-1 font-body text-[13px] font-light text-mid transition-colors hover:text-hi"
                >
                  {sv.title}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-lo">
              Contato
            </p>
            <a
              href={WA.default}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 flex items-center gap-2 font-body text-[13px] font-semibold text-wa transition-opacity hover:opacity-75"
            >
              <WhatsAppIcon size={13} />
              WhatsApp
            </a>
            <p className="py-0.5 font-body text-[12.5px] font-light text-lo">
              atendimento@salmosconsultoriaparalegal.com.br
            </p>
            <p className="py-0.5 font-body text-[12.5px] font-light text-lo">
              Atendimento em todo o Brasil
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border py-5 sm:flex-row">
        <span className="font-mono text-[10px] tracking-[0.07em] text-xlo">
          © 2026 Salmos Consultoria Paralegal
        </span>
        <span className="font-mono text-[10px] tracking-[0.07em] text-xlo">
          Atendimento 100% online
        </span>
      </div>
    </footer>
  )
}

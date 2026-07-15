import logoIcon from '../assets/logo1.png'
import logoFull from '../assets/logo.jpg'
import { scrollToId } from '../scrollToId'

export default function Logo({ size = 40, showName = true, variant = 'icon', shape = 'circle', className = '' }) {
  const src = variant === 'full' ? logoFull : logoIcon
  return (
    <a
      href="#top"
      onClick={(e) => { e.preventDefault(); scrollToId('top') }}
      className={`flex items-center gap-2.5 shrink-0 ${className}`}
    >
      <img
        src={src}
        alt="Salmos Consultoria Paralegal"
        width={size}
        height={size}
        className={`shrink-0 object-cover ${shape === 'square' ? 'rounded-2xl' : 'rounded-full'}`}
        style={{ width: size, height: size }}
      />
      {showName && (
        <span className="leading-tight">
          <span className="block font-display font-bold text-hi text-[15px] tracking-tight">
            Salmos Consultoria Paralegal
          </span>
        </span>
      )}
    </a>
  )
}

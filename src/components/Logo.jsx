import logo from '../assets/logo.jpg'

export default function Logo({ size = 40, showName = true, className = '' }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 shrink-0 ${className}`}>
      <img
        src={logo}
        alt="Salmos Consultoria Paralegal"
        width={size}
        height={size}
        className="shrink-0 rounded-full object-cover"
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

import Icon from './Icon'

export default function Checklist({ items }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
            <Icon name="check" size={12} strokeWidth={3} />
          </span>
          <span className="font-body text-[14.5px] leading-snug text-mid">{item}</span>
        </li>
      ))}
    </ul>
  )
}

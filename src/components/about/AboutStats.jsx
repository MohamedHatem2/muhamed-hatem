import { aboutStats } from '../../data/portfolio'
import AnimatedNumber from '../ui/AnimatedNumber'

export default function AboutStats() {
  return (
    <dl aria-label="Experience in numbers" className="mt-7 grid grid-cols-3 gap-3 sm:gap-0 lg:mt-5 lg:[@media(max-height:680px)]:mt-3">
      {aboutStats.map(({ value, label, detail }, index) => (
        <div key={label} data-reveal="rise" data-reveal-delay={index * 80} className="flex min-w-0 flex-col sm:px-5 sm:first:pl-0 sm:last:pr-0 sm:not-first:border-l sm:not-first:border-border lg:px-4">
          <dt className="order-2 mt-1 text-[11px] leading-relaxed text-muted sm:text-[13px] lg:text-[11px]">{label}</dt>
          <dd className="order-1 text-3xl leading-tight font-extrabold tracking-[-0.05em] sm:text-4xl lg:text-[28px] lg:[@media(max-height:680px)]:text-2xl"><AnimatedNumber value={value} /></dd>
          <dd className="order-3 mt-0.5 text-[10px] leading-relaxed text-muted sm:text-xs lg:text-[10px]">{detail}</dd>
        </div>
      ))}
    </dl>
  )
}

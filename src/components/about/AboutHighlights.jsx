import { CodeXml, GraduationCap, Layers3, UsersRound } from 'lucide-react'
import { aboutHighlights } from '../../data/portfolio'

const icons = {
  education: GraduationCap,
  teaching: UsersRound,
  development: CodeXml,
  approach: Layers3,
}

export default function AboutHighlights() {
  return (
    <ul aria-label="About me at a glance" className="mt-6 grid gap-3 min-[480px]:grid-cols-2 sm:gap-4 lg:mt-4 lg:gap-2.5 lg:[@media(max-height:680px)]:mt-3 lg:[@media(max-height:680px)]:gap-2">
      {aboutHighlights.map(({ id, title, details }, index) => {
        const Icon = icons[id]
        return (
          <li key={id} data-glass data-reveal="slide" data-reveal-delay={index * 80} className="relative flex items-center gap-4 rounded-[22px] border border-border bg-surface/85 p-4 shadow-card backdrop-blur-sm sm:p-5 lg:gap-3 lg:p-3 lg:[@media(max-height:680px)]:p-2">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-surface-soft text-accent sm:size-14 lg:size-10 lg:[@media(max-height:680px)]:size-8">
              <Icon className="size-7 sm:size-8 lg:size-6" strokeWidth={1.7} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h2 className="text-sm leading-snug font-extrabold tracking-[-0.025em] sm:text-[15px] lg:text-xs xl:text-[13px]">{title}</h2>
              <p className="mt-1 text-xs leading-[1.5] text-muted sm:text-[13px] lg:text-[11px] lg:[@media(max-height:680px)]:mt-0.5 lg:[@media(max-height:680px)]:text-[10px] lg:[@media(max-height:680px)]:leading-[1.4]">
                {details.map(detail => <span key={detail} className="block">{detail}</span>)}
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

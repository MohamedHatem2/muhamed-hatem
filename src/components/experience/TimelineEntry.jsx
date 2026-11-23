import { BriefcaseBusiness, Check, CodeXml, GraduationCap, NotebookPen, Presentation, UsersRound } from 'lucide-react'
import TimelineDate from './TimelineDate'

const entryIcons = {
  education: GraduationCap,
  training: NotebookPen,
  work: BriefcaseBusiness,
  code: CodeXml,
  teaching: Presentation,
  mentoring: UsersRound,
}

export default function TimelineEntry({ entry, index = 0 }) {
  const Icon = entryIcons[entry.icon] ?? BriefcaseBusiness
  const isCurrent = !entry.endDate

  return (
    <li data-reveal="slide" data-reveal-delay={index * 110} className="relative min-w-0 pl-10 sm:pl-16">
      <span aria-hidden="true" className="absolute top-6 left-0 z-10 flex size-9 items-center justify-center rounded-full border border-primary/25 bg-surface text-accent ring-[5px] ring-canvas sm:size-11">
        <Icon size={19} strokeWidth={1.7} />
      </span>

      <article aria-labelledby={`experience-${entry.id}`} data-glass className="relative min-w-0 rounded-2xl border border-border bg-surface/90 p-4 shadow-card transition-shadow hover:shadow-card-hover sm:p-6">
        <span aria-hidden="true" className="pointer-events-none absolute top-10 -left-4 h-px w-4 bg-primary/25 sm:-left-5 sm:w-5" />
        <span aria-hidden="true" className="absolute right-6 bottom-0 left-6 h-0.5 rounded-full bg-gradient-to-r from-primary/70 to-primary/10" />

        {(entry.logo || entry.label || isCurrent) && (
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            {entry.logo && <img src={entry.logo.src} alt={entry.logo.alt} width={entry.logo.width} height={entry.logo.height} loading="lazy" className="h-14 w-auto max-w-full shrink-0 rounded-lg bg-white p-1 object-contain" />}
            {(entry.label || isCurrent) && <div className="flex max-w-full flex-wrap items-center gap-2">
              {entry.label && <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-accent">{entry.label}</span>}
              {isCurrent && <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-accent"><span aria-hidden="true" className="motion-status-dot size-1.5 rounded-full bg-primary" />Current role</span>}
            </div>}
          </div>
        )}
        <div className="flex min-w-0 flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
          <div className="min-w-0 flex-1">
            <h3 id={`experience-${entry.id}`} className="text-base leading-snug font-extrabold tracking-[-0.025em] sm:text-lg">{entry.title}</h3>
            <p className="mt-2 text-xs leading-6 font-semibold text-accent sm:text-sm">{entry.organization}</p>
          </div>
          <TimelineDate startDate={entry.startDate} endDate={entry.endDate} className="self-start rounded-xl border border-border bg-surface-alt px-3 py-2 md:max-w-[40%]" />
        </div>

        {entry.description && <p className="mt-3 text-sm leading-7 text-muted">{entry.description}</p>}
        {entry.highlights?.length > 0 && (
          <ul className="mt-4 space-y-3">
            {entry.highlights.map(highlight => <li key={highlight} className="flex items-start gap-2 text-sm leading-7 text-muted"><Check size={14} className="mt-1.5 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" /><span>{highlight}</span></li>)}
          </ul>
        )}
        {entry.certificateUrl && <a href={entry.certificateUrl} target="_blank" rel="noreferrer" className="button-secondary mt-4 min-h-10 rounded-xl px-4 py-2 text-xs">View NASA Certificate</a>}
        {entry.skills?.length > 0 && (
          <ul aria-label={`${entry.title} skills`} className="mt-4 flex flex-wrap gap-1.5">
            {entry.skills.map(skill => <li key={skill} className="rounded-lg bg-surface-alt px-2.5 py-1.5 text-[11px] leading-4 font-medium text-muted">{skill}</li>)}
          </ul>
        )}
      </article>

    </li>
  )
}

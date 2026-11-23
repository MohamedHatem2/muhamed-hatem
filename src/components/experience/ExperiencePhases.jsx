import { useRef } from 'react'
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, NotebookPen } from 'lucide-react'

const icons = { education: GraduationCap, training: NotebookPen, work: BriefcaseBusiness }

function phaseYears(entries) {
  const starts = entries.map(entry => entry.startDate).sort()
  const ends = entries.map(entry => entry.endDate).filter(Boolean).sort()
  return `${starts[0].slice(0, 4)} – ${entries.some(entry => !entry.endDate) ? 'Present' : ends.at(-1).slice(0, 4)}`
}

export default function ExperiencePhases({ phases, activePhase, onChange }) {
  const tabs = useRef([])

  function handleKeyDown(event, index) {
    let next
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % phases.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + phases.length) % phases.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = phases.length - 1
    else return
    event.preventDefault()
    onChange(phases[next].id)
    tabs.current[next]?.focus()
  }

  return (
    <div role="tablist" aria-label="Experience phases" className="grid gap-3 sm:grid-cols-3 sm:gap-4">
      {phases.map((phase, index) => {
        const active = phase.id === activePhase
        const Icon = icons[phase.icon] ?? BriefcaseBusiness
        return (
          <button key={phase.id} ref={element => { tabs.current[index] = element }} data-reveal="zoom" data-reveal-delay={index * 80} type="button" role="tab" id={`experience-tab-${phase.id}`} aria-selected={active} aria-controls={`experience-panel-${phase.id}`} tabIndex={active ? 0 : -1} onClick={() => onChange(phase.id)} onKeyDown={event => handleKeyDown(event, index)} className={`motion-phase group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-2xl border p-4 text-left transition-colors sm:items-start sm:p-5 ${active ? 'border-primary/60 bg-primary/8 shadow-card' : 'border-border bg-surface/75 hover:border-primary/40 hover:bg-surface'}`}>
            <span aria-hidden="true" className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${active ? 'bg-primary text-on-primary' : 'bg-surface-alt text-accent'}`}><Icon size={22} strokeWidth={1.7} /></span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm leading-5 font-extrabold tracking-[-0.025em] sm:text-base">{phase.title}</span>
              <span className="mt-2 block text-xs text-muted">{phaseYears(phase.entries)}</span>
            </span>
            <ArrowUpRight size={17} aria-hidden="true" className={`absolute top-4 right-4 hidden text-accent sm:block ${active ? 'opacity-100' : 'opacity-35'}`} />
            {active && <span aria-hidden="true" className="absolute inset-x-5 bottom-0 h-0.5 rounded-full bg-primary" />}
          </button>
        )
      })}
    </div>
  )
}

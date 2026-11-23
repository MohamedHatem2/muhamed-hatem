import { useState } from 'react'
import timeline from '../../data/experience.json'
import { Link } from 'react-router'
import ExperiencePhases from './ExperiencePhases'
import TimelineGroup from './TimelineGroup'
import MotionAtmosphere from '../ui/MotionAtmosphere'

export default function ExperienceSection() {
  const [activePhase, setActivePhase] = useState('work-experience')
  return (
    <section aria-labelledby="experience-heading" className="relative isolate overflow-hidden bg-gradient-to-br from-canvas via-canvas to-glow/45">
      <MotionAtmosphere scene="experience" />
      <div aria-hidden="true" className="pointer-events-none absolute top-20 right-[8%] h-32 w-40 opacity-40 [background-image:radial-gradient(var(--color-dot)_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
      <div className="page-container relative pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-9">
        <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="max-w-[720px]">
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.035em] text-muted"><span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-primary" />MY JOURNEY</p>
            <h1 id="experience-heading" data-reveal="mask" className="mt-3 text-[clamp(2.25rem,4.2vw,3.75rem)] leading-[1.12] font-extrabold tracking-[-0.045em]">Education &amp; <span className="motion-ink text-primary">Experience</span></h1>
            <p data-reveal="rise" data-reveal-delay="140" className="mt-4 max-w-[650px] text-sm leading-7 text-muted sm:text-base">From educational technology to product thinking, UX/UI, and AI automation — the milestones that shaped how I approach problems and build solutions.</p>
          </div>
          <Link to="/contact" className="button-primary relative z-10 w-full shrink-0 self-start sm:w-auto sm:self-center sm:px-5 sm:text-sm">Let’s Connect</Link>
        </header>

        <div className="mx-auto mt-8 max-w-[1100px] sm:mt-10">
          <ExperiencePhases phases={timeline} activePhase={activePhase} onChange={setActivePhase} />
          {timeline.map((group, index) => (
            <div key={group.id} role="tabpanel" id={`experience-panel-${group.id}`} aria-labelledby={`experience-tab-${group.id}`} tabIndex={0} hidden={activePhase !== group.id} className="mt-5 rounded-3xl sm:mt-6 sm:border sm:border-border sm:bg-surface/55 sm:p-6 sm:shadow-card lg:p-8">
              <TimelineGroup group={group} phaseNumber={index + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Building2, CalendarDays, Check, CircleCheck, FolderOpen, Monitor, UserRound, KeyRound, Mail } from 'lucide-react'
import { Link } from 'react-router'
import ProjectGallery from './ProjectGallery'
import ProjectScreenshot from './ProjectScreenshot'
import ProjectViewer from './ProjectViewer'
import MotionAtmosphere from '../ui/MotionAtmosphere'

const detailFields = [
  { key: 'client', label: 'Client', Icon: Building2 },
  { key: 'type', label: 'Type', Icon: FolderOpen },
  { key: 'status', label: 'Status', Icon: CircleCheck },
  { key: 'role', label: 'Role', Icon: UserRound },
  { key: 'platform', label: 'Platform', Icon: Monitor },
  { key: 'year', label: 'Year', Icon: CalendarDays },
]

export default function ProjectDetailsSection({ project }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showViewer, setShowViewer] = useState(false)
  const screenshots = project.gallery?.length ? project.gallery : [
    { src: project.image, label: project.image ? 'Desktop view' : 'Project concept preview', type: project.image ? 'desktop' : 'cover' },
    ...(project.mobileImage ? [{ src: project.mobileImage, label: 'Mobile view', type: 'mobile' }] : []),
  ]
  const selectedScreenshot = screenshots[selectedIndex]
  const details = detailFields.filter(({ key }) => project.details?.[key])

  function selectScreenshot(index) {
    setSelectedIndex(index)
    document.getElementById('project-main-screenshot')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' })
  }

  return (
    <section aria-labelledby="project-detail-heading" className="relative isolate bg-radial-[at_top_right] from-glow/40 via-canvas to-surface">
      <MotionAtmosphere scene="projects" />
      <div className="page-container py-6 sm:py-8 lg:py-7">
        <div className="mx-auto max-w-[1180px]">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs font-medium text-muted">
            <Link to="/projects" className="inline-flex min-h-8 items-center gap-1.5 rounded-md hover:text-accent"><ArrowLeft size={14} aria-hidden="true" />Projects</Link>
            <span aria-hidden="true" className="text-muted/50">/</span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
            <h1 id="project-detail-heading" data-reveal="soft" className="min-w-0 text-2xl leading-tight font-extrabold tracking-[-0.045em] sm:flex-1 sm:text-3xl lg:text-[34px]">
              {project.title} <span aria-hidden="true" className="text-primary">–</span> {project.description}
            </h1>
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="button-primary w-full shrink-0 rounded-xl px-5 py-3 text-sm sm:w-auto sm:text-sm">
                Visit Live Project <ArrowRight size={16} aria-hidden="true" />
              </a>
            ) : null}
          </div>

          <figure id="project-main-screenshot" data-reveal="zoom" data-reveal-delay="120" aria-label="Project visual preview" className="mt-5 scroll-mt-5">
            <div data-glass data-tilt className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface-soft shadow-card transition-shadow hover:shadow-card-hover sm:aspect-[2.1] lg:aspect-[2.45]">
              <ProjectScreenshot project={project} screenshot={selectedScreenshot} showPhone />
              {project.url && <button type="button" aria-label={`Open ${project.title} live preview`} title={`Open ${project.title} live preview`} aria-haspopup="dialog" onClick={() => setShowViewer(true)} className="absolute inset-0 z-10 rounded-[inherit] bg-transparent focus-visible:outline-offset-[-3px]" />}
            </div>
            <figcaption aria-live="polite" className="mt-2 text-xs text-muted">{selectedScreenshot?.label ?? 'Project preview'}</figcaption>
          </figure>

          {project.demoAccess && (
            <section aria-labelledby="demo-access-heading" data-reveal="rise" className="mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-5">
              <div className="min-w-0"><p className="text-[11px] font-bold tracking-[0.12em] text-accent uppercase">Try the live demo</p><h2 id="demo-access-heading" className="mt-1 text-base font-extrabold">Demo account credentials</h2><p className="mt-1 text-xs leading-5 text-muted">Use these test credentials if you would like to explore the platform.</p></div>
              <dl className="mt-4 grid gap-2 text-xs sm:mt-0 sm:min-w-[330px]">
                <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2"><Mail size={14} className="shrink-0 text-accent"/><dt className="font-semibold text-muted">Email</dt><dd className="ml-auto font-mono font-bold">{project.demoAccess.email}</dd></div>
                <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2"><KeyRound size={14} className="shrink-0 text-accent"/><dt className="font-semibold text-muted">Password</dt><dd className="ml-auto font-mono font-bold">{project.demoAccess.password}</dd></div>
              </dl>
            </section>
          )}

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
            <div>
              <section aria-labelledby="project-overview-heading" data-reveal="rise">
                <h2 id="project-overview-heading" className="text-lg font-extrabold">Project Overview</h2>
                <p className="mt-3 max-w-prose text-sm leading-7 text-muted">{project.overview || project.description}</p>
                <ul aria-label="Project technologies" className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => <li key={tag} className={`rounded-full px-3 py-1.5 text-xs font-medium ${tag === 'React' ? 'bg-primary/10 text-accent' : tag === 'MongoDB' ? 'bg-success-soft text-success' : 'bg-surface-soft text-muted'}`}>{tag}</li>)}
                </ul>
              </section>
              {project.features?.length > 0 && (
                <section aria-labelledby="project-features-heading" data-reveal="rise" className="mt-7">
                  <h2 id="project-features-heading" className="text-lg font-extrabold">Key Features</h2>
                  <ul className="mt-4 space-y-3">
                    {project.features.map(feature => <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-muted"><span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-md bg-primary/10 text-accent"><Check size={11} strokeWidth={3} aria-hidden="true" /></span>{feature}</li>)}
                  </ul>
                </section>
              )}
            </div>
            <div>
              {details.length > 0 && (
                <section aria-labelledby="project-details-heading" data-reveal="slide" data-reveal-delay="100">
                  <h2 id="project-details-heading" className="text-lg font-extrabold">Project Details</h2>
                  <dl className="mt-4 space-y-4">
                    {details.map(({ key, label, Icon }) => <div key={key} className="flex items-start gap-3 text-sm"><Icon size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" /><dt className="w-16 shrink-0 font-bold">{label}</dt><dd className="min-w-0 leading-6 text-muted">{project.details[key]}</dd></div>)}
                  </dl>
                </section>
              )}
              <ProjectGallery project={project} screenshots={screenshots} selectedIndex={selectedIndex} onSelect={selectScreenshot} />
            </div>
          </div>
          {project.caseStudy?.length > 0 && (
            <div className="mt-10 grid gap-5 border-t border-border pt-8 sm:grid-cols-2">
              {project.caseStudy.map((item, index) => (
                <section key={item.title} data-reveal="rise" data-reveal-delay={index * 70} className="rounded-2xl border border-border bg-surface/75 p-5 shadow-card sm:p-6">
                  <h2 className="text-base font-extrabold tracking-tight">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
                </section>
              ))}
            </div>
          )}
          <Link to="/projects" className="mt-9 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-accent hover:text-primary-dark dark:hover:text-primary-light"><ArrowLeft size={17} aria-hidden="true" />Back to projects</Link>
        </div>
      </div>
      {showViewer && <ProjectViewer project={project} onClose={() => setShowViewer(false)} />}
    </section>
  )
}

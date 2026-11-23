import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import ProjectCover from './ProjectCover'
import { getGithubUrl } from '../../utils/projectPreview'

export default function ProjectCard({ project, index = 0 }) {
  const [failedImage, setFailedImage] = useState(null)
  const [failedMobileImage, setFailedMobileImage] = useState(null)
  const hasImage = project.image && failedImage !== project.image
  const githubUrl = getGithubUrl(project.url, window.location.origin)
  return (
    <article aria-labelledby={`project-${project.id}`} data-glass data-tilt data-reveal="zoom" data-reveal-delay={index * 80} className="group relative flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-border bg-surface/90 text-left shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-card-hover motion-reduce:transform-none">
      {githubUrl ? (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} on GitHub (opens in a new tab)`} title="Open GitHub in a new tab" className="absolute inset-0 z-30 rounded-[inherit] focus-visible:outline-offset-[-3px]" />
      ) : (
        <Link to={`/projects/${encodeURIComponent(project.id)}`} aria-label={`View ${project.title} project details`} className="absolute inset-0 z-30 rounded-[inherit] focus-visible:outline-offset-[-3px]" />
      )}
      <div className="relative aspect-[1.9] w-full overflow-hidden bg-surface-soft lg:aspect-auto lg:h-[clamp(112px,17svh,192px)]">
        {!hasImage && <ProjectCover project={project} />}
        {hasImage && <img src={project.image} alt={`${project.title} website preview`} loading="lazy" className="absolute inset-0 size-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none" onError={() => setFailedImage(project.image)} />}
        {hasImage && project.mobileImage && failedMobileImage !== project.mobileImage && <div aria-hidden="true" className="absolute right-[4%] bottom-[-12%] h-[94%] w-[21%] rotate-5 overflow-hidden rounded-[12px] border-[3px] border-device bg-device-screen shadow-lg"><img src={project.mobileImage} alt="" loading="lazy" className="size-full object-cover object-top" onError={() => setFailedMobileImage(project.mobileImage)} /><span className="absolute top-0 left-1/4 h-1 w-1/2 rounded-b-md bg-device" /></div>}
      </div>
      <div className="flex w-full flex-1 flex-col p-4 lg:p-3">
        <div className="flex items-center justify-between gap-2">
          <h2 id={`project-${project.id}`} className="text-lg leading-snug font-extrabold tracking-[-0.035em] lg:text-base">{project.title}</h2>
          <ArrowUpRight className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" aria-hidden="true" />
        </div>
        <p className="mt-1 min-h-[2.8em] text-xs leading-[1.4] text-muted lg:mt-0.5 lg:text-[11px]">{project.description}</p>
        <ul aria-label="Technologies" className="mt-2 flex flex-wrap gap-1.5 lg:gap-1">
          {project.tags.map(tag => <li key={tag} className={`rounded-full px-2.5 py-1 text-[10px] leading-none font-medium lg:px-2 lg:text-[9px] xl:text-[10px] ${tag === 'React' ? 'bg-primary/10 text-accent' : tag === 'MongoDB' ? 'bg-success-soft text-success' : 'bg-surface-soft text-muted'}`}>{tag}</li>)}
        </ul>
        <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-accent">View project details <ArrowUpRight size={15} aria-hidden="true" /></div>
      </div>
    </article>
  )
}

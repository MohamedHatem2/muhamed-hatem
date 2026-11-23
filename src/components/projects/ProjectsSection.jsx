import projectData from '../../data/projects.json'
import ProjectCard from './ProjectCard'
import ProjectsHeader from './ProjectsHeader'
import MotionAtmosphere from '../ui/MotionAtmosphere'

export default function ProjectsSection() {
  const projects = projectData.filter(project => project.featured !== false)

  return (
    <section aria-labelledby="projects-heading" className="relative isolate overflow-hidden bg-radial-[at_top_right] from-glow/40 via-canvas to-surface">
      <MotionAtmosphere scene="projects" />
      <div aria-hidden="true" className="pointer-events-none absolute top-12 right-[12%] h-36 w-44 opacity-50 [background-image:radial-gradient(var(--color-dot)_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
      <div className="page-container relative pt-8 pb-10 sm:pt-10 lg:flex lg:min-h-[calc(100svh-80px)] lg:flex-col lg:justify-center lg:py-[clamp(12px,2.5svh,24px)] lg:[@media(max-height:760px)]:py-2">
        <ProjectsHeader />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-4 lg:grid-cols-3 lg:gap-3 xl:gap-4">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
      </div>
    </section>
  )
}

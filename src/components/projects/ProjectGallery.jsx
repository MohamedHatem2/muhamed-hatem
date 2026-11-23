import { Check } from 'lucide-react'
import ProjectScreenshot from './ProjectScreenshot'

export default function ProjectGallery({ project, screenshots, selectedIndex, onSelect }) {
  if (screenshots.length < 2) return null

  return (
    <section aria-labelledby="project-screenshots-heading" data-reveal="rise" className="mt-7">
      <h2 id="project-screenshots-heading" className="mb-3 text-base font-extrabold">Project Screenshots</h2>
      <div className="grid grid-cols-2 gap-3">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.src}
            data-glass
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Show ${screenshot.label} screenshot`}
            aria-pressed={selectedIndex === index}
            className={`group relative overflow-hidden rounded-xl border bg-surface text-left transition-colors ${selectedIndex === index ? 'border-primary shadow-primary' : 'border-border hover:border-primary/40'}`}
          >
            <span className="relative block aspect-[1.7] overflow-hidden">
              <ProjectScreenshot project={project} screenshot={screenshot} />
              {selectedIndex === index && <span className="absolute top-2 right-2 flex size-5 items-center justify-center rounded-full bg-primary text-on-primary"><Check size={12} aria-hidden="true" /></span>}
            </span>
            <span className={`block px-3 py-2 text-xs font-semibold ${selectedIndex === index ? 'text-accent' : 'text-muted'}`}>{screenshot.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

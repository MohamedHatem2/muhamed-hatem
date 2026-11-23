import ProjectCoverArt from './ProjectCoverArt'
import TechLogo from '../ui/TechLogo'

// These colors belong to the project previews, rather than the portfolio theme.
const themes = {
  dessert: { background: 'linear-gradient(135deg,#d7edff,#fff7e6 60%,#ffe071)', accent: '#00a899', dark: false },
  studio: { background: 'linear-gradient(135deg,#070d27,#18254c)', accent: '#54bdff', dark: true },
  industry: { background: 'linear-gradient(135deg,#fff,#edf4ff 65%,#bfddff)', accent: '#0671ff', dark: false },
  platform: { background: 'linear-gradient(135deg,#f7fbff,#fff 60%,#dcecff)', accent: '#006aff', dark: false },
  custom: { background: 'linear-gradient(135deg,#dceff7,#f4fbfc 65%,#b9e4e1)', accent: '#159a9a', dark: false },
  collection: { background: 'linear-gradient(135deg,#0c1230,#303f78)', accent: '#7c9aff', dark: true },
}

export default function ProjectCover({ project }) {
  const theme = themes[project.cover] ?? themes.industry
  if (project.cover === 'github') {
    return (
      <div aria-hidden="true" className="relative flex size-full items-center justify-center gap-5 overflow-hidden bg-radial-[at_top_right] from-glow via-surface-soft to-surface px-5">
        <div className="absolute top-[-35%] right-[-10%] size-48 rounded-full border-[20px] border-primary/5" />
        <div className="relative shrink-0 rounded-full bg-device-screen p-1.5"><TechLogo name="github" className="size-14 sm:size-16 lg:size-14" /></div>
        <div className="relative"><p className="text-xl font-extrabold tracking-tight text-ink">GitHub</p><p className="mt-1 text-xs text-muted">More projects &amp; source code</p><span className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-[9px] font-semibold text-accent">Build. Share. Keep learning.</span></div>
      </div>
    )
  }
  if (project.cover === 'collection') {
    return <div aria-hidden="true" className="size-full overflow-hidden px-3 py-1.5" style={{ background: theme.background }}><ProjectCoverArt variant="collection" /></div>
  }
  return (
    <div aria-hidden="true" className="relative size-full overflow-hidden px-4 py-3 text-left" style={{ background: theme.background, color: theme.dark ? '#ffffff' : '#171923' }}>
      <div className="relative z-10 flex items-center justify-between gap-2">
        <span className="truncate text-[10px] font-extrabold tracking-[-0.04em] sm:text-xs lg:text-[10px]">{project.title}</span>
        <div className="flex gap-2 text-[5px] font-semibold opacity-70 sm:text-[6px] lg:text-[5px]"><span>Home</span><span>Work</span><span>About</span><span>Contact</span></div>
        <span className="shrink-0 rounded-md px-2 py-1 text-[5px] font-bold text-white" style={{ background: theme.accent }}>Get in touch</span>
      </div>
      <div className="relative z-10 mt-5 max-w-[56%] sm:mt-6 lg:mt-4">
        <p className="text-[clamp(0.875rem,2.4vw,1.25rem)] leading-[1.13] font-extrabold tracking-[-0.04em] lg:text-[clamp(0.875rem,1.3vw,1.125rem)]">
          {(project.headline ?? [project.title]).map((line, index) => <span key={line} className="block" style={{ color: index > 0 && !theme.dark ? theme.accent : undefined }}>{line}</span>)}
        </p>
        <span className="mt-2 inline-flex rounded-md px-2.5 py-1 text-[6px] font-bold text-white sm:text-[7px]" style={{ background: theme.accent }}>Discover more</span>
      </div>
      <div className="absolute top-[19%] right-[3%] h-[86%] w-[47%]"><ProjectCoverArt variant={project.cover} /></div>
      <div className="absolute right-[4%] bottom-[-15%] z-20 hidden h-[85%] w-[20%] rotate-5 overflow-hidden rounded-[12px] border-[3px] border-device bg-device-screen shadow-lg sm:block">
        <div className="mx-auto h-1 w-1/2 rounded-b-md bg-device" />
        <div className="px-1.5 py-2"><span className="block truncate text-[6px] font-extrabold text-device">{project.title}</span><span className="mt-3 block text-[8px] leading-tight font-extrabold" style={{ color: theme.accent }}>{project.headline?.slice(0, 2).join(' ') ?? project.title}</span><span className="mt-2 block h-1 w-3/4 rounded bg-device/15" /><span className="mt-1 block h-1 w-1/2 rounded bg-device/15" /><div className="mt-2 aspect-square"><ProjectCoverArt variant={project.cover} /></div></div>
      </div>
    </div>
  )
}

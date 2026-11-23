import { Target, Workflow, PanelsTopLeft, UsersRound, Wrench } from 'lucide-react'
import SkillTile from './SkillTile'

const categoryIcons = {
  product: Target,
  automation: Workflow,
  ux: PanelsTopLeft,
  tools: Wrench,
  teaching: UsersRound,
}

export default function SkillCategory({ category, index = 0 }) {
  const Icon = categoryIcons[category.id]
  const isWide = category.skills.length === 5
  return (
    <article aria-labelledby={`skills-${category.id}`} data-glass data-reveal="rise" data-reveal-delay={index * 80} className={`relative flex flex-col rounded-[22px] border border-border bg-surface/90 p-4 shadow-card backdrop-blur-md sm:p-5 lg:p-3.5 xl:p-4 lg:[@media(max-height:680px)]:p-3 ${category.id === 'product' || category.id === 'automation' || category.id === 'ux' ? 'xl:col-span-2' : 'md:col-span-1 xl:col-span-3'}`}>
      <div className="mb-3 flex items-center gap-3 sm:gap-4 lg:mb-2.5 lg:gap-2.5 lg:[@media(max-height:680px)]:mb-2">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-surface-soft text-accent sm:size-14 lg:size-10 lg:rounded-xl lg:[@media(max-height:680px)]:size-9">
          <Icon className="size-7 sm:size-8 lg:size-6" strokeWidth={1.7} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h2 id={`skills-${category.id}`} className="text-base leading-snug font-extrabold tracking-[-0.03em] sm:text-lg lg:text-[13px] xl:text-[15px] 2xl:text-base">{category.title}</h2>
          <p className="mt-1 text-xs leading-relaxed text-muted sm:text-[13px] lg:mt-0.5 lg:text-[10px] xl:text-[11px] 2xl:text-xs">{category.description}</p>
        </div>
      </div>
      <ul className={`grid flex-1 gap-2 sm:gap-3 lg:gap-2 ${isWide ? 'grid-cols-2 min-[480px]:grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5' : 'grid-cols-2 min-[480px]:grid-cols-4 md:grid-cols-2 lg:grid-cols-4'}`}>
        {category.skills.map((skill, index) => <SkillTile key={skill.id} skill={skill} index={index} />)}
      </ul>
    </article>
  )
}

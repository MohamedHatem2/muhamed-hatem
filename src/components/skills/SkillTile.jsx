import SkillIcon from './SkillIcon'

export default function SkillTile({ skill, index = 0 }) {
  return (
    <li data-reveal="zoom" data-reveal-delay={index * 55} style={{ '--skill-glow': skill.color ?? 'var(--brand-primary)' }} className="motion-skill relative flex min-w-0 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface-alt/90 px-2 py-3 text-center shadow-card after:absolute after:inset-x-3 after:bottom-0 after:h-[2px] after:rounded-full after:bg-secondary/70 sm:py-4 lg:min-h-[86px] lg:gap-2 lg:px-1.5 lg:py-2.5 lg:[@media(max-height:680px)]:min-h-[72px] lg:[@media(max-height:680px)]:gap-1.5 lg:[@media(max-height:680px)]:py-2">
      <span aria-hidden="true" className="absolute inset-x-3 top-0 h-[2px] rounded-full bg-primary/80" />
      <SkillIcon name={skill.id} className="size-10 shrink-0 sm:size-11 lg:size-8 xl:size-9 lg:[@media(max-height:680px)]:size-7" />
      <span className="max-w-full text-xs leading-[1.4] font-semibold tracking-[-0.02em] text-ink sm:text-[13px] lg:text-[10px] xl:text-[11px] 2xl:text-xs">{skill.name}</span>
    </li>
  )
}

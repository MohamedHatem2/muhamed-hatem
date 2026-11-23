export default function SkillsHeader() {
  return (
    <header className="relative z-10 max-w-3xl">
      <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.08em] text-muted"><span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-primary" />SKILLS</p>
      <h1 id="skills-heading" data-reveal="mask" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] leading-tight font-extrabold tracking-[-0.045em]">Skills &amp; <span className="motion-ink text-primary">Technologies</span></h1>
      <p data-reveal="rise" data-reveal-delay="140" className="mt-3 max-w-[720px] text-sm leading-7 text-muted sm:text-base">I build AI-powered workflows, connect business systems, and translate operational challenges into practical product and automation solutions.</p>
    </header>
  )
}

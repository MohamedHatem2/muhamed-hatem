import { skillCategories } from '../../data/skills'
import SkillCategory from './SkillCategory'
import SkillsHeader from './SkillsHeader'
import MotionAtmosphere from '../ui/MotionAtmosphere'

export default function SkillsSection() {
  return (
    <section aria-labelledby="skills-heading" className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_85%_10%,var(--color-glow)_0%,var(--color-canvas)_55%,var(--color-canvas)_100%)]">
      <MotionAtmosphere scene="skills" />

      <div className="page-container relative pt-10 pb-14 sm:pt-12 sm:pb-16 lg:min-h-[calc(100svh-80px)] lg:py-12">
        <SkillsHeader />
        <div className="relative z-20 mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6 xl:gap-4">
          {skillCategories.map((category, index) => <SkillCategory key={category.id} category={category} index={index} />)}
        </div>
      </div>
    </section>
  )
}

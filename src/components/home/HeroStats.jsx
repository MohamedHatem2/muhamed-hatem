import { BookOpen, CodeXml, GraduationCap } from 'lucide-react'
import AnimatedNumber from '../ui/AnimatedNumber'

const stats = [
  { Icon: GraduationCap, value: '200+', label: 'Learners Supported', detail: 'Technical & Freelancing Sessions' },
  { Icon: CodeXml, value: '4', label: 'Training Duration', detail: 'ITI Scholarship · Months' },
  { Icon: BookOpen, value: 'ITI', label: 'Instructor', detail: 'Technical & Freelancing Sessions' },
]

export default function HeroStats() {
  return (
    <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 sm:mt-12 sm:grid-cols-3 sm:gap-x-0 lg:mt-6">
      {stats.map(({ Icon, value, label, detail }, index) => (
        <div key={label} data-reveal="rise" data-reveal-delay={260 + index * 70} className="relative sm:px-4 sm:first:pl-0 sm:last:pr-0 sm:not-first:before:absolute sm:not-first:before:top-4 sm:not-first:before:bottom-0 sm:not-first:before:left-0 sm:not-first:before:w-px sm:not-first:before:bg-border lg:px-3 xl:px-4">
          <span className="mb-3 flex size-9 items-center justify-center rounded-full bg-surface-soft text-accent lg:mb-2 lg:size-8">
            <Icon size={27} className="lg:size-6" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <dd className="text-3xl font-extrabold tracking-tight lg:text-[28px]"><AnimatedNumber value={value} /></dd>
          <dt className="mt-1 text-xs leading-relaxed font-medium text-muted lg:text-[11px]">{label}</dt>
          <dd className="mt-1 text-[10px] leading-relaxed text-muted">{detail}</dd>
        </div>
      ))}
    </dl>
  )
}

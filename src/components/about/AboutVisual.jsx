import { useId } from 'react'
import { ChartNoAxesColumnIncreasing, CodeXml, PanelsTopLeft, UsersRound } from 'lucide-react'
import { profile } from '../../data/portfolio'

export default function AboutVisual() {
  const clipId = useId().replaceAll(':', '')

  return (
    <div data-reveal="zoom" className="motion-portrait relative mx-auto mt-6 aspect-[6/5] w-[calc(100%-3rem)] max-w-[720px] overflow-hidden rounded-[32px] sm:mt-8 sm:w-[calc(100%-5rem)] sm:rounded-[48px] lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:aspect-auto lg:h-full lg:w-[66%] lg:max-w-none lg:overflow-visible lg:rounded-none">
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d="M .34 0 C .22 .03 .20 .23 .26 .36 C .20 .36 .24 .52 .23 .64 C .22 .78 .27 .87 .22 .91 C .20 .96 .13 .98 0 1 L 1 1 L 1 0 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="relative h-full w-full lg:[clip-path:var(--about-clip)]" style={{ '--about-clip': `url(#${clipId})` }}>
        <img src={profile.aboutImage} alt="Mohamed Hatem" width="1371" height="1148" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[48%_center] lg:object-[30%_top]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-glow/30 via-transparent to-primary/5 dark:from-canvas/45 dark:to-canvas/15" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-canvas/20 to-transparent dark:from-canvas/60" />
        <div aria-hidden="true" className="pointer-events-none absolute top-[11%] right-[18%] hidden -rotate-6 rounded-2xl border border-border bg-surface/90 px-3 py-2 font-handwriting text-[28px] leading-[1.02] font-semibold text-accent backdrop-blur-md xl:block">
          Understand<br />Build<br />Automate<br />Improve.
          <span className="mt-3 block h-0.5 w-28 -rotate-8 rounded-full bg-accent/70" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute top-[7%] right-6 hidden flex-col gap-3 xl:flex 2xl:right-8">
          {[CodeXml, PanelsTopLeft, UsersRound, ChartNoAxesColumnIncreasing].map((Icon, index) => (
            <span key={index} data-glass style={{ '--float-delay': `${index * -1.2}s` }} className="motion-float relative flex size-14 items-center justify-center rounded-2xl border border-border bg-surface/90 text-accent shadow-card backdrop-blur-md">
              <Icon size={28} strokeWidth={1.7} />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

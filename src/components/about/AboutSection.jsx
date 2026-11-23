import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import AboutHighlights from './AboutHighlights'
import AboutStats from './AboutStats'
import AboutVisual from './AboutVisual'
import MotionAtmosphere from '../ui/MotionAtmosphere'

export default function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_15%_35%,var(--color-canvas)_0%,var(--color-canvas)_60%,var(--color-glow)_100%)] pb-10 lg:min-h-[calc(100svh-80px)] lg:pb-0">
      <MotionAtmosphere scene="about" />
      <div aria-hidden="true" className="pointer-events-none absolute top-0 right-0 hidden h-full w-2/3 bg-[radial-gradient(ellipse_at_top_right,var(--color-glow-strong),transparent_70%)] lg:block" />
      <AboutVisual />
      <div className="page-container relative z-10 pt-8 sm:pt-12 lg:flex lg:min-h-[calc(100svh-80px)] lg:items-center lg:py-[clamp(1rem,3svh,2rem)] lg:[@media(max-height:680px)]:py-3">
        <div className="max-w-[720px] lg:w-[49%] lg:max-w-[660px]">
          <p data-reveal="rise" className="flex items-center gap-3 text-xs font-semibold tracking-[0.035em] text-muted sm:text-sm lg:text-xs">
            <span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-primary" />
            ABOUT ME
          </p>
          <h1 id="about-heading" data-reveal="mask" data-reveal-delay="90" className="mt-5 text-[clamp(3rem,7vw,6.5rem)] leading-[1.06] font-extrabold tracking-[-0.045em] lg:mt-3 lg:text-[clamp(2.75rem,7.5svh,4.5rem)] lg:[@media(max-height:680px)]:mt-2 lg:[@media(max-height:680px)]:text-[2.5rem]">
            <span className="mr-[0.12em]">Who</span>{' '}<span className="motion-ink text-primary">I Am</span>
          </h1>
          <p data-reveal="rise" data-reveal-delay="160" className="mt-4 text-lg leading-[1.55] font-semibold tracking-[-0.02em] text-muted sm:text-xl lg:mt-3 lg:text-[clamp(1rem,1.15vw,1.125rem)] lg:[@media(max-height:680px)]:mt-2 lg:[@media(max-height:680px)]:text-[15px] lg:[@media(max-height:680px)]:leading-[1.45]">
            <strong className="font-bold text-ink">I’m Mohamed Hatem Sadek,</strong> an AI automation builder focused on product thinking, intelligent workflows, and practical business solutions.
          </p>
          <p data-reveal="rise" data-reveal-delay="230" className="mt-4 text-sm leading-[1.75] text-muted sm:text-base lg:mt-3 lg:text-[clamp(0.875rem,1vw,0.9375rem)] lg:leading-[1.6] lg:[@media(max-height:680px)]:mt-2 lg:[@media(max-height:680px)]:text-[13px] lg:[@media(max-height:680px)]:leading-[1.5]">
            I identify operational problems, map the process, and build AI-powered workflows that connect tools, organize data, and reduce repetitive work. My product mindset helps me focus on outcomes—not automation for its own sake. Alongside building, I deliver technical and freelancing sessions at ITI, supporting more than 200 learners.
          </p>
          <AboutHighlights />
          <AboutStats />
          <Link to="/experience" className="button-primary mt-6 w-full rounded-full px-8 sm:w-auto lg:mt-5 lg:min-h-11 lg:px-6 lg:py-2.5 lg:text-sm lg:[@media(max-height:680px)]:mt-3 lg:[@media(max-height:680px)]:min-h-10 lg:[@media(max-height:680px)]:py-2" aria-label="More about me: explore my experience">
            More About Me <ArrowRight size={21} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

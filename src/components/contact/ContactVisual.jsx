import { profile } from '../../data/portfolio'

export default function ContactVisual() {
  return (
    <div data-reveal="zoom" data-reveal-delay="100" className="motion-portrait relative h-[260px] min-w-0 overflow-hidden rounded-[28px] border border-primary/15 bg-surface-alt shadow-portrait sm:h-[320px] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-[clamp(300px,42svh,360px)] lg:self-center">
      <img src={profile.image} alt="Mohamed Hatem, product and AI automation" width="1122" height="1402" fetchPriority="high" className="size-full object-cover object-top" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-canvas/60 to-transparent dark:from-canvas/75" />
      <p aria-hidden="true" className="absolute top-7 right-5 hidden -rotate-6 rounded-2xl bg-surface/85 px-3 py-2 font-handwriting text-[27px] leading-[1.05] font-semibold text-accent backdrop-blur-sm sm:right-7 sm:block sm:text-[32px] lg:top-4 lg:right-4 lg:text-[24px]">Understand<br />Build<br />Automate<br />Improve.<span className="mt-2 block h-0.5 w-20 -rotate-6 rounded-full bg-primary/70" /></p>
    </div>
  )
}

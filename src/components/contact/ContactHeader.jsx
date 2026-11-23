export default function ContactHeader() {
  return (
    <header data-reveal="soft" className="min-w-0 lg:col-start-1 lg:row-start-1">
      <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.035em] text-muted"><span aria-hidden="true" className="h-0.5 w-8 rounded-full bg-primary" />CONTACT</p>
      <h1 id="contact-heading" className="mt-4 text-[clamp(2.5rem,4vw,4rem)] leading-[1.12] font-extrabold tracking-[-0.045em] lg:mt-2 lg:text-[clamp(2rem,3vw,3rem)]">Let’s Build <span className="motion-ink text-primary">Something Useful</span></h1>
      <p className="mt-4 max-w-[640px] text-sm leading-7 text-muted sm:text-base lg:mt-2 lg:max-w-none lg:text-sm lg:leading-5">I’m open to product, AI automation, UX/UI, and frontend opportunities, as well as collaborations and practical project ideas.</p>
    </header>
  )
}

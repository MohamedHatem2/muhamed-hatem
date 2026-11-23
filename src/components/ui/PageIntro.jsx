export default function PageIntro({ eyebrow, title, description, children }) {
  return (
    <section className="page-container pt-10 pb-20 sm:pt-16 lg:pt-20">
      <p data-reveal="rise" className="mb-4 text-xs font-bold tracking-[0.18em] text-accent uppercase">{eyebrow}</p>
      <h1 data-reveal="soft" data-reveal-delay="90" className="max-w-4xl text-4xl leading-tight font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-6xl">{title}</h1>
      {description && <p data-reveal="rise" data-reveal-delay="160" className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{description}</p>}
      {children && <div data-reveal="rise" data-reveal-delay="230" className="mt-10 sm:mt-14">{children}</div>}
    </section>
  )
}

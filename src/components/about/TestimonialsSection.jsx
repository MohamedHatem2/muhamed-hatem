import { Quote, Star } from 'lucide-react'

const testimonials = [
  { name: 'Sohaila Waleed', role: 'UX UI Developer', quote: 'I highly recommend him as an educator and mentor. He is deeply supportive, exceptionally honest in his critiques, and focused on real-world outcomes. His guidance during our time at ITI went beyond the curriculum; he gave us the exact strategic direction and confidence we needed to land and successfully deliver our first freelance projects.' },
  { name: 'Shahd Gamal', role: 'UI/UX & Graphic Designer', quote: 'I had the opportunity to learn from him during a freelancing session at ITI, and it was a highly valuable experience. He has an excellent ability to simplify complex concepts and share practical insights from real-world freelancing experiences. His guidance helped participants gain a better understanding of client communication, project management, and professional growth in the freelance industry. What stands out most is his supportive approach, professionalism, and willingness to share knowledge. He inspires confidence and motivates others to continuously improve their skills. I highly recommend him to anyone looking to build a successful freelancing career and learn from an experienced and dedicated instructor.' },
  { name: 'Nora Khaled', role: 'Front End Developer', quote: 'I highly recommend him for anyone seeking a dedicated and talented professional. His strong communication skills, commitment to quality, and ability to deliver projects on time make him a valuable asset in the freelancing industry. He consistently demonstrates professionalism, creativity, and a client-focused mindset. I am confident that he will continue to achieve great success and provide exceptional results in any freelance project he undertakes.' },
  { name: 'Khaled Mohammed', role: 'Freelancer Front-End Developer @ Mostaql | ITI Graduated', quote: 'Thank you for all your effort and support throughout the ITI journey. I learned a lot from your sessions and truly appreciate your guidance. Wishing you continued success.' },
  { name: 'Nariman Agami', role: 'Front-end Developer | ITI Trainee', quote: 'I was pleased to learn with Eng. Mohamed Hatem during the freelancing training. He is professional, explains concepts clearly, and is always keen to support and guide trainees. I benefited greatly from his experience and practical advice, and I highly recommend him as an outstanding and inspiring instructor.' },
]

export default function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="relative isolate overflow-hidden bg-surface/60 py-14 sm:py-18 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_10%,var(--color-glow),transparent_45%)]" />
      <div className="page-container relative">
        <header className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.12em] text-muted"><span className="h-0.5 w-7 rounded-full bg-primary"/>KIND WORDS</p>
          <h2 id="testimonials-heading" data-reveal="mask" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-[-0.045em]">What learners <span className="motion-ink text-primary">say</span></h2>
          <p className="mt-3 text-sm leading-7 text-muted sm:text-base">A few words from learners and people I had the chance to work with at ITI.</p>
        </header>
        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <article key={item.name} data-glass data-reveal="rise" data-reveal-delay={index * 70} className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 shadow-card sm:p-6">
              <div className="flex items-center justify-between"><span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-accent"><Quote size={20}/></span><span className="flex gap-0.5 text-secondary" aria-label="Recommendation"><Star size={13} fill="currentColor"/><Star size={13} fill="currentColor"/><Star size={13} fill="currentColor"/><Star size={13} fill="currentColor"/><Star size={13} fill="currentColor"/></span></div>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted">“{item.quote}”</p>
              <div className="mt-5 border-t border-border pt-4"><h3 className="text-sm font-extrabold">{item.name}</h3><p className="mt-1 text-xs leading-5 text-accent">{item.role}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

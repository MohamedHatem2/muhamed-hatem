import { ArrowUpRight, BriefcaseBusiness, Lightbulb, Mail, MessageCircle, UsersRound } from 'lucide-react'
import contact from '../../data/contact.json'

const opportunities = [
  { title: 'Job Opportunities', description: 'Full-time, part-time, or freelance', Icon: BriefcaseBusiness },
  { title: 'Teaching & Training', description: 'Workshops, courses, or collaborations', Icon: UsersRound },
  { title: 'Project Ideas', description: 'Let’s turn your idea into a real project', Icon: Lightbulb },
  { title: 'Just Say Hello', description: 'I’d love to hear from you', Icon: MessageCircle },
]

const socials = [
  { label: 'LinkedIn', value: 'Mohamed Hatem', href: contact.linkedin, image: '/social/linkedin.svg', external: true },
  { label: 'WhatsApp', value: 'Chat with me', href: contact.whatsapp, image: '/social/whatsapp.svg', external: true },
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, Icon: Mail },
].filter(item => Boolean(item.href))

export default function ContactInfo() {
  return (
    <div className="min-w-0 space-y-5 lg:col-start-1 lg:row-start-2 lg:space-y-3">
      <ul aria-label="Ways we can work together" className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-2">
        {opportunities.map(({ title, description, Icon }, index) => (
          <li key={title} data-glass data-reveal="zoom" data-reveal-delay={index * 65} className="motion-opportunity relative min-w-0 rounded-2xl border border-border bg-surface/85 p-4 shadow-card lg:p-3">
            <div className="lg:flex lg:items-center lg:gap-2">
              <Icon size={25} strokeWidth={1.7} className="shrink-0 text-accent lg:size-5" aria-hidden="true" />
              <h2 className="mt-3 text-xs leading-5 font-extrabold lg:mt-0 lg:leading-4">{title}</h2>
            </div>
            <p className="mt-1 text-xs leading-5 text-muted lg:mt-2 lg:text-[11px] lg:leading-4">{description}</p>
          </li>
        ))}
      </ul>

      <section aria-labelledby="contact-socials-heading">
        <h2 id="contact-socials-heading" className="mb-3 flex items-center gap-3 text-sm font-semibold text-muted lg:mb-2 lg:text-xs"><span aria-hidden="true" className="h-0.5 w-7 rounded-full bg-primary" />Find me on</h2>
        <ul className="grid gap-3 sm:grid-cols-2 lg:gap-2">
          {socials.map(({ label, value, href, image, Icon, external }, index) => (
            <li key={label}>
              <a href={href} data-glass data-reveal="slide" data-reveal-delay={index * 65} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} aria-label={`${label}: ${value}${external ? ' (opens in a new tab)' : ''}`} className="motion-social group relative flex h-full items-center gap-3 rounded-2xl border border-border bg-surface/90 p-3 shadow-card transition-colors hover:border-primary/40 lg:gap-2 lg:px-3 lg:py-2">
                {image ? <img src={image} alt="" width="36" height="36" className="size-9 shrink-0 rounded-lg bg-white p-0.5 lg:size-8" /> : <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-accent lg:size-8"><Icon size={23} strokeWidth={1.7} aria-hidden="true" /></span>}
                <span className="min-w-0 flex-1"><span className="block text-xs font-extrabold">{label}</span><span className="mt-1 block text-[11px] break-words text-muted">{value}</span></span>
                <ArrowUpRight size={16} className="shrink-0 text-accent" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </section>

    </div>
  )
}

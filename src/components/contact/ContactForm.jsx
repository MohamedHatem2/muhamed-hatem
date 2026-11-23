import { useState } from 'react'
import { ArrowRight, CheckCircle2, List, Mail, MessageCircle, MessageSquareText, Send, UserRound } from 'lucide-react'
import contact from '../../data/contact.json'

const fieldDefinitions = [
  { name: 'name', label: 'Your Name', placeholder: 'Enter your name', type: 'text', autoComplete: 'name', maxLength: 100, Icon: UserRound },
  { name: 'email', label: 'Your Email', placeholder: 'example@gmail.com', type: 'email', autoComplete: 'email', maxLength: 254, Icon: Mail },
  { name: 'subject', label: 'Subject', placeholder: 'Project, job opportunity, etc.', type: 'text', maxLength: 150, Icon: List },
]

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const fields = Object.fromEntries(new FormData(form))
    const message = [
      'Hello Mohamed! You have a new portfolio inquiry.',
      '',
      `Name: ${fields.name.trim()}`,
      `Email: ${fields.email.trim()}`,
      `Subject: ${fields.subject.trim()}`,
      '',
      'Message:',
      fields.message.trim(),
    ].join('\n')
    const phone = contact.whatsappNumber || '201094160673'
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setStatus('opened')
  }

  return (
    <section aria-labelledby="contact-form-heading" data-glass data-reveal="rise" data-reveal-delay="140" className="motion-form relative w-full rounded-3xl border border-border bg-surface/95 p-5 shadow-card sm:p-7 lg:p-4">
      <div className="flex items-start gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-accent lg:size-9"><MessageSquareText size={24} strokeWidth={1.7} aria-hidden="true" /></span>
        <div className="min-w-0 flex-1"><h2 id="contact-form-heading" className="text-lg font-extrabold tracking-[-0.025em] sm:text-xl lg:text-lg">Send Me a Message</h2><p className="mt-1 text-xs leading-6 text-muted sm:text-sm lg:mt-0.5 lg:text-xs lg:leading-5">Fill out the form and WhatsApp will open with your message ready to send.</p></div>
        <Send size={30} strokeWidth={1.5} className="motion-paperplane hidden shrink-0 -rotate-12 text-accent sm:block" aria-hidden="true" />
      </div>

      <form onSubmit={handleSubmit} className="mt-5 lg:mt-3" onInput={() => status !== 'idle' && setStatus('idle')}>
        <fieldset className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <legend className="sr-only">Your contact details and message</legend>
          {fieldDefinitions.map(({ name, label, placeholder, type, autoComplete, maxLength, Icon }) => (
            <label key={name} className={`flex min-w-0 items-start gap-3 rounded-2xl border border-border bg-surface-soft px-4 py-3 transition-colors focus-within:border-accent focus-within:ring-2 focus-within:ring-primary/15 lg:py-2 ${name === 'subject' ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <Icon size={19} className="mt-1 shrink-0 text-muted" strokeWidth={1.7} aria-hidden="true" />
              <span className="min-w-0 flex-1"><span className="block text-xs font-bold">{label} <span aria-hidden="true" className="text-error">*</span></span><input name={name} type={type} autoComplete={autoComplete} maxLength={maxLength} required placeholder={placeholder} className="mt-1 w-full min-w-0 border-0 bg-transparent py-1 text-sm text-ink outline-none placeholder:text-muted focus-visible:outline-none" /></span>
            </label>
          ))}
          <label className="flex min-w-0 items-start gap-3 rounded-2xl border border-border bg-surface-soft px-4 py-3 transition-colors focus-within:border-accent focus-within:ring-2 focus-within:ring-primary/15 sm:col-span-2 lg:col-span-3 lg:py-2">
            <MessageCircle size={19} className="mt-1 shrink-0 text-muted" strokeWidth={1.7} aria-hidden="true" />
            <span className="min-w-0 flex-1"><span className="block text-xs font-bold">Your Message <span aria-hidden="true" className="text-error">*</span></span><textarea name="message" rows={4} maxLength={5000} required placeholder="Tell me more about your idea…" className="mt-1 w-full min-w-0 resize-y border-0 bg-transparent py-1 text-sm leading-6 text-ink outline-none placeholder:text-muted focus-visible:outline-none lg:h-16 lg:min-h-16" /></span>
          </label>
        </fieldset>

        {status === 'opened' && <p role="status" className="mt-4 flex items-start gap-2 rounded-xl bg-success-soft p-3 text-sm leading-6 text-success"><CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />WhatsApp opened with your message. Please review it and press Send in WhatsApp.</p>}

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:mt-3">
          <button type="submit" className="button-primary w-full shrink-0 rounded-full px-5 py-3 text-sm sm:w-auto sm:text-sm"><Send size={18} aria-hidden="true" />Send Message<ArrowRight size={17} aria-hidden="true" /></button>
          <p className="flex max-w-[250px] items-start gap-2 text-[11px] leading-5 text-muted">Your message will be sent to my WhatsApp number after you confirm it in WhatsApp.</p>
        </div>
      </form>
    </section>
  )
}

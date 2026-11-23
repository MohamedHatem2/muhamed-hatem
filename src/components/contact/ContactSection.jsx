import ContactForm from './ContactForm'
import ContactHeader from './ContactHeader'
import ContactInfo from './ContactInfo'
import ContactVisual from './ContactVisual'
import MotionAtmosphere from '../ui/MotionAtmosphere'

export default function ContactSection() {
  return (
    <section aria-labelledby="contact-heading" className="relative isolate overflow-hidden bg-gradient-to-br from-canvas via-canvas to-glow/45">
      <MotionAtmosphere scene="contact" />
      <div className="page-container pt-8 pb-12 sm:pt-10 sm:pb-14 lg:py-4">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-x-6 lg:gap-y-3 xl:gap-x-8">
          <ContactHeader />
          <ContactVisual />
          <ContactInfo />
        </div>
        <div className="mt-6 lg:mt-4">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

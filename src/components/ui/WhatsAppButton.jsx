import contact from '../../data/contact.json'

export default function WhatsAppButton() {
  if (!contact.whatsapp) return null
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mohamed on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full border-2 border-white/80 bg-[#159A68] shadow-[0_12px_30px_-10px_rgba(21,154,104,.65)] transition duration-200 hover:-translate-y-1 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary sm:bottom-7 sm:right-7"
    >
      <img src="/social/whatsapp.svg" alt="" width="29" height="29" className="size-7 brightness-0 invert" />
    </a>
  )
}

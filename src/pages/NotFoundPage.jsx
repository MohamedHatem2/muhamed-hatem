import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import PageIntro from '../components/ui/PageIntro'

export default function NotFoundPage() {
  return (
    <PageIntro eyebrow="404 · Page not found" title={<>A little <span className="text-primary">off the path.</span></>} description="This page doesn’t exist. Let’s get you back to the portfolio.">
      <Link to="/" className="button-primary">Back to home <ArrowRight size={20} aria-hidden="true" /></Link>
    </PageIntro>
  )
}

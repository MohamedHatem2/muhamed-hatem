import { Link } from 'react-router'

export default function Logo() {
  return (
    <Link to="/" aria-label="Mohamed Hatem home" className="navbar-logo">
      <img src="/public/me.png" alt="" className="!h-12 !w-12 aspect-square shrink-0 rounded-xl border border-primary/20 object-cover object-top shadow-md" />
      <span className="navbar-logo-divider" aria-hidden="true" />
      <span className="navbar-logo-name" aria-hidden="true">
        <span className="navbar-logo-word">Mohamed</span>
        <span className="navbar-logo-word navbar-logo-word--accent">Hatem</span>
      </span>
    </Link>
  )
}

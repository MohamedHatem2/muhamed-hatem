import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navigation } from '../../data/portfolio'
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar() {
  const [openPath, setOpenPath] = useState(null)
  const { pathname } = useLocation()
  const menuButton = useRef(null)
  const isOpen = openPath === pathname

  useEffect(() => {
    if (!isOpen) return
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpenPath(null)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <header className="sticky top-0 z-30 bg-canvas/90 backdrop-blur-xl">
      <div className="page-container flex h-24 items-center justify-between gap-8 lg:h-20">
        <div className="flex items-center gap-10 xl:gap-16">
          <Logo />
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex xl:gap-10">
            {navigation.map(({ label, path }) => (
              <NavLink key={path} to={path} end={path === '/'} className={({ isActive }) => `relative py-4 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-transform xl:text-base ${isActive ? 'text-accent after:scale-x-100' : 'text-muted after:scale-x-0 hover:text-accent hover:after:scale-x-100'}`}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/contact" className="button-primary hidden shadow-none sm:inline-flex lg:min-h-11 lg:px-5 lg:py-2.5 lg:text-sm">
            Let’s Talk <ArrowRight size={20} aria-hidden="true" />
          </Link>
          <button ref={menuButton} type="button" aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setOpenPath(isOpen ? null : pathname)} className="flex size-12 items-center justify-center rounded-xl border border-border text-accent hover:bg-surface-alt lg:hidden">
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!isOpen} className="absolute inset-x-4 top-[88px] rounded-2xl border border-border bg-surface p-3 shadow-xl shadow-black/15 sm:inset-x-10 lg:hidden">
        {navigation.map(({ label, path }) => (
          <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpenPath(null)} className={({ isActive }) => `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${isActive ? 'bg-primary/10 text-accent' : 'text-muted hover:bg-surface-alt hover:text-accent'}`}>
            {label}<ArrowRight size={17} aria-hidden="true" />
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import { navigation } from '../../data/portfolio'
import projects from '../../data/projects.json'
import Navbar from './Navbar'
import MotionPage from './MotionPage'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function SiteLayout() {
  const { pathname } = useLocation()
  const content = useRef(null)
  const previousPath = useRef(pathname)

  useEffect(() => {
    const page = navigation.find(({ path }) => path === pathname)
    const project = projects.find(({ id }) => pathname.replace(/\/$/, '') === `/projects/${encodeURIComponent(id)}`)
    document.title = `${project?.title ?? page?.label ?? 'Page not found'} | Mohamed Hatem`
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (previousPath.current !== pathname) {
      content.current?.focus({ preventScroll: true })
      previousPath.current = pathname
    }
  }, [pathname])

  return (
    <div className="min-h-screen bg-canvas bg-[radial-gradient(ellipse_at_90%_40%,var(--color-glow)_0%,transparent_55%)]">
      <a href="#main-content" className="sr-only fixed top-3 left-3 z-50 rounded-xl bg-primary px-5 py-3 text-on-primary focus:not-sr-only">Skip to content</a>
      <Navbar />
      <main id="main-content" ref={content} tabIndex={-1} className="scroll-mt-24 outline-none lg:scroll-mt-20">
        <MotionPage key={pathname} scene={pathname === '/' ? 'home' : pathname.split('/')[1]}><Outlet /></MotionPage>
      </main>
      <WhatsAppButton />
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, LoaderCircle, Monitor, RotateCcw, Smartphone, Tablet, X } from 'lucide-react'
import useTheme from '../../hooks/useTheme'
import { getProjectUrl, getUnavailablePreview } from '../../utils/projectPreview'

const devices = [
  { id: 'desktop', label: 'Desktop preview', Icon: Monitor },
  { id: 'tablet', label: 'Tablet preview', Icon: Tablet },
  { id: 'mobile', label: 'Mobile preview', Icon: Smartphone },
]

export default function ProjectViewer({ project, onClose }) {
  const dialog = useRef(null)
  const closeButton = useRef(null)
  const { theme } = useTheme()
  const [device, setDevice] = useState('desktop')
  const [reloadCount, setReloadCount] = useState(0)
  const [loadedKey, setLoadedKey] = useState(null)
  const previewUrl = getProjectUrl(project.url, window.location.origin)
  const frameKey = `${project.id}-${reloadCount}-${previewUrl ? 'live' : theme}`

  useEffect(() => {
    const element = dialog.current
    const opener = document.activeElement
    const previousOverflow = document.body.style.overflow
    const previousPadding = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight) + scrollbarWidth}px`
    element.showModal()
    closeButton.current?.focus({ preventScroll: true })
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPadding
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus({ preventScroll: true })
    }
  }, [])

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return
    const bounds = event.currentTarget.getBoundingClientRect()
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose()
  }

  return (
    <dialog ref={dialog} aria-labelledby="project-viewer-title" onCancel={event => { event.preventDefault(); onClose() }} onClick={closeOnBackdrop} className="motion-dialog fixed inset-0 m-auto h-[calc(100svh-16px)] max-h-[1000px] w-[calc(100%-16px)] max-w-[1680px] overflow-hidden rounded-2xl border border-border bg-canvas p-0 text-ink shadow-2xl backdrop:bg-device/70 backdrop:backdrop-blur-sm sm:h-[92svh] sm:w-[94vw] sm:rounded-3xl">
      <div className="flex h-full flex-col">
        <header className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border bg-surface px-3 py-3 sm:flex-nowrap sm:px-5">
          <div className="min-w-0 flex-1"><p className="text-[9px] font-bold tracking-[0.16em] text-accent uppercase">Project Preview</p><h2 id="project-viewer-title" className="truncate text-sm font-bold sm:text-lg">{project.title}</h2></div>
          <div className="flex items-center gap-2">
            <div aria-label="Preview size" role="group" className="flex gap-1 rounded-xl bg-surface-soft p-1">
              {devices.map(({ id, label, Icon }) => <button key={id} type="button" aria-label={label} aria-pressed={device === id} onClick={() => setDevice(id)} className={`flex size-8 items-center justify-center rounded-lg transition-colors sm:size-9 ${device === id ? 'bg-surface text-accent shadow-sm' : 'text-muted hover:bg-surface/60'}`}><Icon size={17} aria-hidden="true" /></button>)}
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label="Open live project in a new tab" className="flex size-9 items-center justify-center rounded-xl text-muted hover:bg-primary/5 hover:text-accent sm:size-10"><ExternalLink size={18} aria-hidden="true" /></a>
            <button type="button" aria-label="Reload project preview" onClick={() => setReloadCount(count => count + 1)} className="flex size-9 items-center justify-center rounded-xl text-muted hover:bg-primary/5 hover:text-accent sm:size-10"><RotateCcw size={18} aria-hidden="true" /></button>
            <button ref={closeButton} type="button" aria-label="Close project preview" onClick={onClose} className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-accent hover:bg-primary/15 sm:size-10"><X size={21} aria-hidden="true" /></button>
          </div>
        </header>
        <div className="relative flex min-h-0 flex-1 justify-center overflow-hidden bg-surface-alt p-1.5 sm:p-3">
          {loadedKey !== frameKey && <div role="status" className="absolute inset-0 z-10 flex items-center justify-center gap-3 bg-canvas text-sm text-muted"><LoaderCircle size={22} className="animate-spin motion-reduce:animate-none text-accent" aria-hidden="true" />Loading project preview…</div>}
          <iframe key={frameKey} title={`${project.title} embedded preview`} src={previewUrl ?? undefined} srcDoc={previewUrl ? undefined : getUnavailablePreview(project)} sandbox="allow-scripts allow-same-origin allow-forms" referrerPolicy="no-referrer" loading="eager" allow="fullscreen" onLoad={() => setLoadedKey(frameKey)} className={`h-full w-full rounded-xl border border-border bg-device-screen shadow-sm ${device === 'tablet' ? 'max-w-[768px]' : device === 'mobile' ? 'max-w-[390px]' : ''}`} />
        </div>
      </div>
    </dialog>
  )
}

import { useEffect, useState } from 'react'
import BrandMark from '../ui/BrandMark'

export default function InitialLoad({ children }) {
  const [phase, setPhase] = useState('loading')
  const isFinished = phase === 'finished'

  useEffect(() => {
    const startedAt = performance.now()
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const minimumDuration = reducedMotion ? 200 : 3_000
    const timers = []
    let ready = false

    function finishLoading() {
      if (ready) return
      ready = true
      window.clearTimeout(fallback)
      timers.push(window.setTimeout(() => {
        setPhase('completing')
        timers.push(window.setTimeout(() => setPhase('exiting'), reducedMotion ? 100 : 300))
        timers.push(window.setTimeout(() => setPhase('finished'), reducedMotion ? 100 : 550))
      }, Math.max(0, minimumDuration - (performance.now() - startedAt))))
    }

    // Finish even if an external font or image never completes its request.
    const fallback = window.setTimeout(finishLoading, 4_500)
    if (document.readyState === 'complete') finishLoading()
    else window.addEventListener('load', finishLoading, { once: true })

    return () => {
      window.removeEventListener('load', finishLoading)
      window.clearTimeout(fallback)
      timers.forEach(timer => window.clearTimeout(timer))
    }
  }, [])

  useEffect(() => {
    if (isFinished) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [isFinished])

  return (
    <>
      {!isFinished && (
        <div role="status" aria-live="polite" aria-label="Loading Mohamed Hatem’s portfolio" className={`logo-loader ${phase !== 'loading' ? 'logo-loader--complete' : ''} ${phase === 'exiting' ? 'logo-loader--exiting' : ''}`}>
          <div className="logo-loader-content flex flex-col items-center gap-6">
            <BrandMark />
            <div className="space-y-2 text-center">
              <p className="text-base font-extrabold tracking-[-0.03em] text-ink">Mohamed Hatem</p>
              <p className="text-[10px] font-semibold tracking-[0.18em] text-muted">PRODUCT · AUTOMATE · BUILD</p>
            </div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-primary/40" />
              <p className="text-[10px] font-semibold tracking-[0.14em] text-muted">LOADING PORTFOLIO</p>
              <span aria-hidden="true" className="logo-loader-dots"><i /><i /><i /></span>
            </div>
          </div>
        </div>
      )}
      <div inert={!isFinished} aria-hidden={isFinished ? undefined : true} className={isFinished ? undefined : 'invisible'}>
        {children}
      </div>
    </>
  )
}

import { useEffect } from 'react'

const entrances = {
  rise: [{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'none' }],
  slide: [{ opacity: 0, transform: 'translateX(-24px)' }, { opacity: 1, transform: 'none' }],
  soft: [{ opacity: 0, filter: 'blur(7px)', transform: 'translateY(12px)' }, { opacity: 1, filter: 'blur(0)', transform: 'none' }],
  zoom: [{ opacity: 0, transform: 'scale(0.96)' }, { opacity: 1, transform: 'none' }],
  mask: [{ opacity: 0, clipPath: 'inset(0 0 100% 0)', transform: 'translateY(12px)' }, { opacity: 1, clipPath: 'inset(0)', transform: 'none' }],
}

function attachMotion(root) {
  if (!window.IntersectionObserver || !Element.prototype.animate) return () => {}
  const played = new WeakSet()
  const animations = new Map()
  const counts = new Map()
  let pointerFrame = 0
  let pointer = null
  let activeGlass = null
  root.dataset.motionReady = 'true'

  function stopCount(element) {
    const running = counts.get(element)
    if (!running) return
    window.clearTimeout(running.timer)
    window.cancelAnimationFrame(running.frame)
    element.textContent = running.finalText
    counts.delete(element)
  }

  function countUp(element, delay) {
    stopCount(element)
    const target = Number(element.dataset.count)
    const suffix = element.dataset.countSuffix || ''
    const running = { finalText: `${target}${suffix}`, timer: 0, frame: 0 }
    counts.set(element, running)
    running.timer = window.setTimeout(() => {
      if (!element.getClientRects().length) { stopCount(element); return }
      const startedAt = performance.now()
      function update(now) {
        const progress = Math.min(1, (now - startedAt) / 1_100)
        element.textContent = `${Math.round(target * (1 - (1 - progress) ** 3))}${suffix}`
        if (progress < 1) running.frame = window.requestAnimationFrame(update)
        else counts.delete(element)
      }
      running.frame = window.requestAnimationFrame(update)
    }, delay + 100)
  }

  function reveal(element) {
    if (played.has(element) || !element.getClientRects().length) return
    played.add(element)
    const delay = Math.min(400, Number(element.dataset.revealDelay || 0))
    const animation = element.animate(entrances[element.dataset.reveal] || entrances.rise, {
      duration: 700, delay, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both',
    })
    animations.set(element, animation)
    animation.onfinish = () => { animation.cancel(); animations.delete(element) }
    element.querySelectorAll('[data-count]').forEach(number => countUp(number, delay))
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target) })
  }, { threshold: 0.08, rootMargin: '0px 0px -12px 0px' })

  function observeTree(element) {
    if (element.matches('[data-reveal]')) observer.observe(element)
    element.querySelectorAll('[data-reveal]').forEach(node => observer.observe(node))
  }
  observeTree(root)

  const changes = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'attributes') {
        record.target.querySelectorAll('[data-reveal]').forEach(element => {
          animations.get(element)?.cancel()
          animations.delete(element)
          played.delete(element)
          element.querySelectorAll('[data-count]').forEach(stopCount)
          observer.unobserve(element)
          observer.observe(element)
        })
      } else {
        record.addedNodes.forEach(node => { if (node instanceof Element) observeTree(node) })
      }
    }
  })
  changes.observe(root, { subtree: true, childList: true, attributes: true, attributeFilter: ['hidden'] })

  function resetGlass() {
    if (!activeGlass) return
    activeGlass.style.removeProperty('--tilt-x')
    activeGlass.style.removeProperty('--tilt-y')
    activeGlass.style.removeProperty('--glass-x')
    activeGlass.style.removeProperty('--glass-y')
    activeGlass = null
  }

  function movePointer(event) {
    if (event.pointerType === 'touch' || !window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)').matches) return
    pointer = { x: event.clientX, y: event.clientY, target: event.target }
    if (pointerFrame) return
    pointerFrame = window.requestAnimationFrame(() => {
      pointerFrame = 0
      const bounds = root.getBoundingClientRect()
      root.style.setProperty('--scene-x', `${((pointer.x - bounds.left) / bounds.width - 0.5) * 14}px`)
      root.style.setProperty('--scene-y', `${((pointer.y - bounds.top) / Math.min(bounds.height, innerHeight) - 0.5) * 10}px`)
      const glass = pointer.target instanceof Element ? pointer.target.closest('[data-glass]') : null
      if (glass !== activeGlass) resetGlass()
      if (!glass || !root.contains(glass)) return
      activeGlass = glass
      const box = glass.getBoundingClientRect()
      const x = Math.max(0, Math.min(1, (pointer.x - box.left) / box.width))
      const y = Math.max(0, Math.min(1, (pointer.y - box.top) / box.height))
      glass.style.setProperty('--glass-x', `${x * 100}%`)
      glass.style.setProperty('--glass-y', `${y * 100}%`)
      if (glass.hasAttribute('data-tilt')) {
        glass.style.setProperty('--tilt-x', `${(0.5 - y) * 4}deg`)
        glass.style.setProperty('--tilt-y', `${(x - 0.5) * 4}deg`)
      }
    })
  }

  function showFocusedContent(event) {
    let element = event.target instanceof Element ? event.target : null
    while (element && element !== root) {
      animations.get(element)?.cancel()
      animations.delete(element)
      if (element.hasAttribute('data-reveal')) played.add(element)
      element = element.parentElement
    }
  }

  function pauseWhenHidden() { root.dataset.motionPaused = String(document.hidden) }
  root.addEventListener('pointermove', movePointer, { passive: true })
  root.addEventListener('pointerleave', resetGlass)
  root.addEventListener('focusin', showFocusedContent)
  document.addEventListener('visibilitychange', pauseWhenHidden)
  pauseWhenHidden()

  return () => {
    observer.disconnect()
    changes.disconnect()
    animations.forEach(animation => animation.cancel())
    counts.forEach((_, element) => stopCount(element))
    window.cancelAnimationFrame(pointerFrame)
    root.removeEventListener('pointermove', movePointer)
    root.removeEventListener('pointerleave', resetGlass)
    root.removeEventListener('focusin', showFocusedContent)
    document.removeEventListener('visibilitychange', pauseWhenHidden)
    resetGlass()
    delete root.dataset.motionReady
    delete root.dataset.motionPaused
    root.style.removeProperty('--scene-x')
    root.style.removeProperty('--scene-y')
  }
}

export default function usePageMotion(ref) {
  useEffect(() => {
    const root = ref.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let stop = () => {}
    let waiting = null

    function synchronize() {
      stop()
      waiting?.disconnect()
      if (preference.matches) return
      if (document.querySelector('.logo-loader')) {
        waiting = new MutationObserver(() => {
          if (document.querySelector('.logo-loader')) return
          waiting.disconnect()
          stop = attachMotion(root)
        })
        waiting.observe(document.getElementById('root'), { childList: true, subtree: true })
      } else stop = attachMotion(root)
    }

    synchronize()
    preference.addEventListener('change', synchronize)
    return () => { waiting?.disconnect(); stop(); preference.removeEventListener('change', synchronize) }
  }, [ref])
}

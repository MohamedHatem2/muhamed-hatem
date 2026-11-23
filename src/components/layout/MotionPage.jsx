import { useRef } from 'react'
import usePageMotion from '../../hooks/usePageMotion'

export default function MotionPage({ scene, children }) {
  const root = useRef(null)
  usePageMotion(root)
  return <div ref={root} className="motion-page" data-motion-scene={scene}>{children}</div>
}

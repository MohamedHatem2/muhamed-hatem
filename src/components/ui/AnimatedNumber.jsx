export default function AnimatedNumber({ value }) {
  const match = String(value).match(/^(\d+)(.*)$/)
  if (!match) return value
  return (
    <span className="motion-number">
      <span aria-hidden="true" data-count={match[1]} data-count-suffix={match[2]}>{value}</span>
      <span className="sr-only">{value}</span>
    </span>
  )
}

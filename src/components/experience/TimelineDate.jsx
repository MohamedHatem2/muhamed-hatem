import { CalendarDays } from 'lucide-react'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

function formatDate(value) {
  return dateFormatter.format(new Date(`${value}-01T00:00:00Z`))
}

export default function TimelineDate({ startDate, endDate, className = '' }) {
  return (
    <span className={`inline-flex max-w-full items-start gap-2 text-xs font-semibold leading-5 text-muted ${className}`}>
      <CalendarDays size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
      <span className="inline-flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
        <time dateTime={startDate}>{formatDate(startDate)}</time>
        <span aria-hidden="true">–</span>
        <span className="sr-only">to</span>
        {endDate ? <time dateTime={endDate}>{formatDate(endDate)}</time> : <span className="text-accent">Present</span>}
      </span>
    </span>
  )
}

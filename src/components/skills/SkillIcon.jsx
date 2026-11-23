import { Bug, ClipboardList, Cloud, CodeXml, Layers3, MonitorSmartphone, Presentation, UsersRound } from 'lucide-react'
import TechLogo from '../ui/TechLogo'

const workflowIcons = {
  responsive: MonitorSmartphone,
  architecture: Layers3,
  instruction: Presentation,
  guidance: ClipboardList,
  review: CodeXml,
  debugging: Bug,
  mentoring: UsersRound,
}

export default function SkillIcon({ name, className = 'size-9' }) {
  if (name === 'api') {
    return (
      <span className={`relative inline-flex items-center justify-center text-accent ${className}`} aria-hidden="true">
        <Cloud className="absolute inset-0 size-full" strokeWidth={1.6} />
        <span className="mt-1 text-[8px] leading-none font-extrabold">API</span>
      </span>
    )
  }
  const Icon = workflowIcons[name]
  if (Icon) return <Icon className={`text-accent ${className}`} strokeWidth={1.6} aria-hidden="true" />
  return <TechLogo name={name} className={className} />
}

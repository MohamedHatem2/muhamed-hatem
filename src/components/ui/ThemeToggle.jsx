import { Moon, Sun } from 'lucide-react'
import useTheme from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const label = `Switch to ${isDark ? 'light' : 'dark'} mode`

  return (
    <button type="button" onClick={toggleTheme} aria-label={label} title={label} className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface/70 text-accent transition-colors hover:bg-surface-alt">
      {isDark ? <Sun size={21} strokeWidth={1.8} aria-hidden="true" /> : <Moon size={21} strokeWidth={1.8} aria-hidden="true" />}
    </button>
  )
}

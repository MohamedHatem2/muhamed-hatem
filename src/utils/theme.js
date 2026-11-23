export const THEME_STORAGE_KEY = 'mohamed-hatem-portfolio-theme'

export function readStoredTheme() {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    return null
  }
}

export function getPreferredTheme() {
  return readStoredTheme() ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}

export function applyTheme(theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
  const styles = getComputedStyle(root)
  const color = styles.getPropertyValue('--color-canvas').trim()
  if (color) document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color)
}

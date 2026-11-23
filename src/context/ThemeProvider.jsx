import { useEffect, useRef, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { applyTheme, getPreferredTheme, readStoredTheme, THEME_STORAGE_KEY } from '../utils/theme'

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || getPreferredTheme())
  const preference = useRef(readStoredTheme())

  useEffect(() => { applyTheme(theme) }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    function followSystem(event) {
      if (!preference.current) {
        const nextTheme = event.matches ? 'dark' : 'light'
        applyTheme(nextTheme)
        setTheme(nextTheme)
      }
    }
    function syncPreference(event) {
      if (event.key !== THEME_STORAGE_KEY && event.key !== null) return
      preference.current = event.newValue === 'dark' || event.newValue === 'light' ? event.newValue : null
      const nextTheme = preference.current || (media.matches ? 'dark' : 'light')
      applyTheme(nextTheme)
      setTheme(nextTheme)
    }
    media.addEventListener('change', followSystem)
    window.addEventListener('storage', syncPreference)
    return () => {
      media.removeEventListener('change', followSystem)
      window.removeEventListener('storage', syncPreference)
    }
  }, [])

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    preference.current = nextTheme
    applyTheme(nextTheme)
    setTheme(nextTheme)
    try { window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme) } catch { /* Keep the selection for this tab if storage is unavailable. */ }
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

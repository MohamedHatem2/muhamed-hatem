export function getProjectUrl(value, origin) {
  if (typeof value !== 'string' || !value.trim()) return null
  try {
    const url = new URL(value.trim(), origin)
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) return null
    return url.href
  } catch {
    return null
  }
}

export function getGithubUrl(value, origin) {
  const url = getProjectUrl(value, origin)
  if (!url) return null
  return ['github.com', 'www.github.com'].includes(new URL(url).hostname) ? url : null
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character])
}

export function getUnavailablePreview(project) {
  const title = escapeHtml(project.title)
  const defaults = { canvas: '#f3f8fb', ink: '#172b3a', muted: '#607482', accent: '#176b9a', 'surface-soft': '#e8f3f7', glow: '#cce8ee' }
  const styles = typeof document !== 'undefined' ? getComputedStyle(document.documentElement) : null
  const palette = Object.fromEntries(Object.entries(defaults).map(([token, fallback]) => {
    const value = styles?.getPropertyValue(`--color-${token}`).trim()
    const validColor = value && !/[<>;{}]/.test(value) && typeof CSS !== 'undefined' && CSS.supports('color', value)
    return [token, validColor ? escapeHtml(value) : fallback]
  }))
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} preview</title><style>*{box-sizing:border-box}body{margin:0;min-height:100vh;padding:32px;display:grid;place-items:center;background:radial-gradient(ellipse at top right,${palette.glow},${palette.canvas} 65%);color:${palette.ink};font-family:system-ui,sans-serif}.content{max-width:520px;text-align:center}.symbol{display:grid;place-items:center;margin:0 auto 24px;width:64px;height:64px;border-radius:20px;background:${palette['surface-soft']};color:${palette.accent};font-size:26px;font-weight:bold}h1{font-size:clamp(28px,5vw,44px);letter-spacing:-.04em;margin:0 0 12px}p{color:${palette.muted};line-height:1.7}.status{display:inline-block;margin-top:12px;padding:8px 16px;border-radius:30px;background:${palette['surface-soft']};color:${palette.accent};font-size:13px}</style></head><body><div class="content"><div class="symbol" aria-hidden="true">&lt;/&gt;</div><h1>${title}</h1><p>${escapeHtml(project.description)}</p><span class="status">Live preview coming soon</span><p>This project’s live preview is being prepared.<br>You can close this viewer to explore more of my work.</p></div></body></html>`
}

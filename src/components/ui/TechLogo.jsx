export default function TechLogo({ name, className = 'size-8' }) {
  if (name === 'python') {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <path d="M23 4c-10 0-10 4-10 9v6h12v2H8c-5 0-7 4-7 10s2 9 7 9h5v-7c0-5 3-8 8-8h11c4 0 7-3 7-7V13c0-6-5-9-16-9Z" fill="#3776ab"/>
        <path d="M25 44c10 0 10-4 10-9v-6H23v-2h17c5 0 7-4 7-10s-2-9-7-9h-5v7c0 5-3 8-8 8H16c-4 0-7 3-7 7v7c0 6 5 9 16 9Z" fill="#ffd343"/>
        <circle cx="18" cy="11" r="2" fill="white"/><circle cx="30" cy="37" r="2" fill="white"/>
      </svg>
    )
  }
  if (name === 'n8n') {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <g fill="none" stroke="#ea4b71" strokeWidth="5" strokeLinecap="round"><path d="M12 24h10m8 0h6" /></g>
        <circle cx="10" cy="24" r="6" fill="#ea4b71" /><circle cx="26" cy="24" r="6" fill="#f6a4b7" /><circle cx="38" cy="24" r="6" fill="#ea4b71" />
      </svg>
    )
  }
  if (name === 'figma') {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <path d="M16 3h8v14h-8a7 7 0 1 1 0-14Z" fill="#f24e1e" /><path d="M24 3h8a7 7 0 1 1 0 14h-8Z" fill="#ff7262" /><path d="M16 17h8v14h-8a7 7 0 1 1 0-14Z" fill="#a259ff" /><circle cx="31" cy="24" r="7" fill="#1abcfe" /><path d="M16 31h8v7a7 7 0 1 1-8-7Z" fill="#0acf83" />
      </svg>
    )
  }
  if (name === 'ai-agents') {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <path d="M24 5v7m0 24v7M5 24h7m24 0h7M10.6 10.6l5 5m16.8 16.8 5 5m0-26.8-5 5m-16.8 16.8-5 5" stroke="#159a9a" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="24" r="12" fill="#176b9a" /><circle cx="24" cy="24" r="5" fill="#fff" />
      </svg>
    )
  }
  if (name === 'html' || name === 'css') {
    const isHtml = name === 'html'
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <path d="M5 3h38l-3.5 37L24 45 8.5 40Z" fill={isHtml ? '#e44d26' : '#1572b6'} />
        <path d="M24 6h15.5l-3 31L24 41Z" fill={isHtml ? '#f16529' : '#33a9dc'} />
        {isHtml ? <path d="M13 11h23l-.6 5H19l.5 5h15l-1.3 13L24 37l-9.2-3-.6-7h5l.3 3.3 4.5 1.5 4.5-1.5.5-4.3H15Z" fill="white" /> : <path d="M13 11h23l-.6 5-10 5h9.5l-1.3 13L24 37l-9.2-3-.6-7h5l.3 3.3 4.5 1.5 4.5-1.5.5-4.3H15l-.5-5 10.4-5H13.5Z" fill="white" />}
      </svg>
    )
  }
  if (['javascript', 'typescript', 'bootstrap'].includes(name)) {
    const brands = {
      javascript: { label: 'JS', background: '#f7df1e', foreground: '#111111' },
      typescript: { label: 'TS', background: '#3178c6', foreground: '#ffffff' },
      bootstrap: { label: 'B', background: '#7952b3', foreground: '#ffffff' },
    }
    const brand = brands[name]
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <rect x="2" y="2" width="44" height="44" rx={name === 'bootstrap' ? '10' : '5'} fill={brand.background} />
        <text x="24" y="35" textAnchor="middle" fill={brand.foreground} fontFamily="Arial, sans-serif" fontSize={name === 'bootstrap' ? '36' : '27'} fontWeight="700">{brand.label}</text>
      </svg>
    )
  }
  if (name === 'redux') {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke="#764abc" strokeWidth="3" strokeLinecap="round" className={className} aria-hidden="true">
        <path d="M24 10c-11-6-22 6-17 17 3 8 11 11 18 7M36 32c10-7 4-24-8-25M11 32c-1 13 18 14 25 4 5-8 1-15-6-18" />
        <circle cx="24" cy="10" r="3" fill="#764abc" stroke="white" strokeWidth="1.5" />
        <circle cx="36" cy="32" r="3" fill="#764abc" stroke="white" strokeWidth="1.5" />
        <circle cx="11" cy="32" r="3" fill="#764abc" stroke="white" strokeWidth="1.5" />
      </svg>
    )
  }
  if (name === 'sass') {
    return (
      <svg viewBox="0 0 64 48" className={className} aria-hidden="true">
        <text x="32" y="34" textAnchor="middle" fill="#cc6699" fontFamily="Caveat, cursive" fontSize="36" fontWeight="600" fontStyle="italic">Sass</text>
      </svg>
    )
  }
  if (name === 'mui') {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <path d="M3 9v22l6 3V20l12 7 12-7v14l6-3V9L21 20ZM45 9l-6 3v7l6-3ZM45 23l-6 3v11l-18 10-12-7v-7l12 7 18-10v-1l6-3Z" fill="#007fff" />
      </svg>
    )
  }
  if (name === 'git') {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <rect x="7" y="7" width="34" height="34" rx="3" transform="rotate(45 24 24)" fill="#f05032" />
        <path d="m15 10 18 18M21 16v20" fill="none" stroke="white" strokeWidth="3" />
        <g fill="white"><circle cx="21" cy="16" r="3.5" /><circle cx="33" cy="28" r="3.5" /><circle cx="21" cy="36" r="3.5" /></g>
      </svg>
    )
  }
  if (name === 'github') {
    return (
      <svg viewBox="0 0 48 48" className={`${className} rounded-full dark:bg-device-screen dark:p-0.5`} aria-hidden="true">
        <circle cx="24" cy="24" r="23" fill="#181717" />
        <path d="m13 15-1-7 8 4a22 22 0 0 1 8 0l8-4-1 7c8 11 2 17-8 18 3 2 3 6 3 11H18v-7c-8 2-9-6-13-6 4-3 6 4 13 2-10-1-13-9-5-18Z" fill="white" />
      </svg>
    )
  }
  if (name === 'react') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <g stroke="#00bce8" strokeWidth="2">
          <ellipse cx="24" cy="24" rx="22" ry="8" />
          <ellipse cx="24" cy="24" rx="22" ry="8" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="22" ry="8" transform="rotate(120 24 24)" />
        </g>
        <circle cx="24" cy="24" r="4" fill="#00bce8" />
      </svg>
    )
  }
  if (name === 'angular') {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <path d="M24 2 3 10l4 27 17 9 17-9 4-27Z" fill="#e40035" />
        <path d="m24 8 15 29h-6l-3-6H18l-3 6H9Zm0 11-4 8h8Z" fill="white" />
      </svg>
    )
  }
  if (name === 'tailwind') {
    return (
      <svg viewBox="0 0 48 32" className={className} aria-hidden="true">
        <path fill="#21b9de" d="M24 0Q12 0 9 12q6-6 12-3c4 2 6 7 12 7q12 0 15-12-6 6-12 3C32 5 30 0 24 0ZM12 16Q0 16-3 28q6-6 12-3c4 2 6 7 12 7q12 0 15-12-6 6-12 3c-4-2-6-7-12-7Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 48 48" className={`${className} rounded-full dark:bg-device-screen dark:p-0.5`} aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#0a0a0a" />
      <path d="M15 34V14l19 26M15 14l14 20V14" fill="none" stroke="white" strokeWidth="2" />
    </svg>
  )
}

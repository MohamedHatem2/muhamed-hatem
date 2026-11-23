import { BriefcaseBusiness, Building2, CheckCheck, Clapperboard, Coffee, FileText, ShoppingBag, Store } from 'lucide-react'

export default function ProjectCoverArt({ variant }) {
  if (variant === 'dessert') {
    return (
      <svg viewBox="0 0 200 180" className="size-full" aria-hidden="true">
        <ellipse cx="105" cy="158" rx="66" ry="10" fill="#d6913a" opacity=".16" />
        <path d="m58 70 12 78q35 20 69 0l14-78Z" fill="#9c572d" />
        <path d="m69 83 10 62q25 14 51 0l10-62Z" fill="#c58b51" />
        <ellipse cx="106" cy="71" rx="48" ry="19" fill="#f5ddad" />
        <g fill="#fff2d7"><circle cx="84" cy="58" r="21" /><circle cx="115" cy="47" r="25" /><circle cx="140" cy="64" r="19" /></g>
        <g fill="#e7503c"><circle cx="80" cy="65" r="12" /><circle cx="126" cy="60" r="11" /><circle cx="105" cy="30" r="10" /></g>
        <g fill="#264e89"><circle cx="94" cy="77" r="7" /><circle cx="134" cy="41" r="7" /><circle cx="69" cy="47" r="6" /></g>
        <path d="m98 32 6-11 6 10M75 63l7-9 5 10" fill="#46a66e" />
        <path d="m148 8-11 47" stroke="#ab6d38" strokeWidth="8" strokeLinecap="round" />
        <path d="m143 12 6 2m-9 10 6 2m-9 10 6 2" stroke="#f8dba7" strokeWidth="2" />
      </svg>
    )
  }
  if (variant === 'studio') {
    return (
      <div aria-hidden="true" className="relative size-full [transform:rotate(-18deg)]">
        <div className="absolute top-[10%] left-[8%] h-[75%] w-[82%] rounded-[50%] border-[22px] border-[#3373d8] bg-[#101e40] shadow-[inset_12px_14px_30px_#080e23,12px_12px_24px_#0008]" />
        <div className="absolute top-[45%] left-[5%] h-[31%] w-[90%] -rotate-25 rounded-[50%] border-[13px] border-[#159a9a] shadow-[0_0_20px_#159a9a40]" />
      </div>
    )
  }
  if (variant === 'industry') {
    return (
      <svg viewBox="0 0 200 180" fill="none" className="size-full" aria-hidden="true">
        <path d="M15 159h174" stroke="#73b4ff" strokeWidth="4" />
        <g fill="#dceaff" stroke="#317dd1" strokeWidth="3">
          <rect x="52" y="38" width="38" height="118" rx="12" /><ellipse cx="71" cy="38" rx="19" ry="7" />
          <rect x="126" y="18" width="25" height="138" rx="10" /><ellipse cx="138.5" cy="18" rx="12.5" ry="5" />
          <rect x="102" y="80" width="15" height="77" rx="5" /><rect x="163" y="92" width="13" height="65" rx="4" />
          <path d="M52 60h38M52 100h38M126 60h25M126 104h25M28 158v-39h24M88 135h37M151 123h14" />
        </g>
        <path d="M34 161V68m0 14h14m-14 20h14m-14 20h14m43 36V53m0 15h11m-11 25h11m51 66V41m0 16h12m-12 26h12" stroke="#164e98" strokeWidth="3" />
      </svg>
    )
  }
  if (variant === 'platform') {
    const tiles = [[BriefcaseBusiness, 'Services', '#24b56c'], [ShoppingBag, 'Marketplace', '#ff9a26'], [Store, 'Store', '#159a9a'], [Building2, 'Real Estate', '#2b8cff']]
    return (
      <div aria-hidden="true" className="grid size-full grid-cols-2 content-center gap-2 p-3">
        {tiles.map(([Icon, label, color]) => (
          <div key={label} className="flex flex-col items-center gap-1 rounded-xl border border-[#dce8ff] bg-white/90 p-3 shadow-sm">
            <span className="flex size-7 items-center justify-center rounded-lg text-white" style={{ background: color }}><Icon size={15} /></span>
            <span className="text-[7px] font-semibold text-device">{label}</span>
          </div>
        ))}
      </div>
    )
  }
  if (variant === 'custom') {
    return (
      <svg viewBox="0 0 200 180" className="size-full drop-shadow-lg" aria-hidden="true">
        <path d="m70 24 30 8 30-8 40 27-20 33-19-13v88H69V71L50 84 30 51Z" fill="#fff" stroke="#dbdcff" strokeWidth="2" />
        <path d="M78 26q22 28 44 0" fill="none" stroke="#d4d7ff" strokeWidth="4" />
        <circle cx="100" cy="88" r="25" fill="#d3edf1" /><circle cx="90" cy="87" r="18" fill="#176b9a" /><circle cx="113" cy="78" r="14" fill="#159a9a" /><circle cx="109" cy="101" r="15" fill="#598fea" />
        <path d="m79 133 14-8 26 7" fill="none" stroke="#e5e9ff" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  }
  const panels = [[FileText, 'Blog Platform', '#eef3ff'], [Clapperboard, 'Movie App', '#151f44'], [Coffee, 'Coffee Menu', '#4d332c'], [CheckCheck, 'Task Manager', '#f7f9ff']]
  return (
    <div aria-hidden="true" className="grid size-full grid-cols-2 gap-2 p-2 [transform:rotate(-5deg)]">
      {panels.map(([Icon, label, color], index) => (
        <div key={label} className={`flex flex-col justify-between rounded-lg p-2 shadow-lg ${index === 0 || index === 3 ? 'text-device' : 'text-white'}`} style={{ background: color }}>
          <Icon size={22} className={index === 0 || index === 3 ? 'text-[#263cff]' : 'text-white/80'} />
          <span className="text-[8px] font-bold">{label}</span>
          <div className="flex gap-1"><span className="h-1 w-1/2 rounded-full bg-current opacity-20" /><span className="h-1 w-1/4 rounded-full bg-current opacity-10" /></div>
        </div>
      ))}
    </div>
  )
}

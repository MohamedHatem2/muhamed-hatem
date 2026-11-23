export default function MotionAtmosphere({ scene }) {
  return (
    <div aria-hidden="true" className={`motion-atmosphere motion-atmosphere--${scene}`}>
      <span className="motion-halo motion-halo--one" />
      <span className="motion-halo motion-halo--two" />
      <svg viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" fill="none">
        {scene === 'home' && <g className="motion-orbit"><circle cx="1160" cy="390" r="270" /><circle cx="1160" cy="390" r="230" strokeDasharray="1 18" /><circle cx="1430" cy="390" r="4" className="motion-dot" /></g>}
        {scene === 'about' && <g className="motion-mesh"><path d="M850-80C1120 200 870 450 1460 850" /><path d="M960-80C1220 200 980 450 1570 850" /><path d="M1070-80C1330 200 1090 450 1680 850" /></g>}
        {scene === 'skills' && <g><path className="motion-circuit-grid" d="M850 120H1150V260H1500M990 0V360H1330V650H1600M780 440H1060V740M1260 0V100H1470V420" /><path className="motion-circuit-trace" d="M850 120H1150V260H1500" /><path className="motion-circuit-trace motion-circuit-trace--second" d="M990 0V360H1330V650H1600" /><circle cx="1150" cy="120" r="4" className="motion-dot" /><circle cx="1330" cy="650" r="4" className="motion-dot" /></g>}
        {scene === 'projects' && <g className="motion-ribbon"><rect x="1210" y="40" width="220" height="640" rx="110" /><rect x="1280" y="90" width="220" height="640" rx="110" strokeDasharray="3 12" /></g>}
        {scene === 'experience' && <g><path className="motion-circuit-grid" d="M1260-40V170Q1260 210 1300 210H1460Q1500 210 1500 250V850" /><path className="motion-journey-trace" d="M1260-40V170Q1260 210 1300 210H1460Q1500 210 1500 250V850" /></g>}
        {scene === 'contact' && <g className="motion-signal"><circle cx="1270" cy="310" r="100" /><circle cx="1270" cy="310" r="160" /><circle cx="1270" cy="310" r="220" /></g>}
      </svg>
    </div>
  )
}

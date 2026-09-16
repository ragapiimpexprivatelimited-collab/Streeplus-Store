// Three custom, license-free stage illustrations for the Impact page.
// Built to replace the AI-generated stock photography in the reference
// design, using the same brand palette established across the site.

export function ChallengeArt({ className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-[#F6EFE4] ${className}`}>
      <svg viewBox="0 0 520 420" className="h-full w-full" role="img" aria-label="Illustration representing barriers to menstrual hygiene access">
        <circle cx="260" cy="200" r="150" fill="#EADFCB" />
        <g opacity="0.9">
          <rect x="120" y="150" width="90" height="110" rx="10" fill="#C98B2E" opacity="0.18" />
          <rect x="230" y="120" width="90" height="140" rx="10" fill="#A23E64" opacity="0.16" />
          <rect x="330" y="170" width="80" height="90" rx="10" fill="#2F6B4F" opacity="0.2" />
        </g>
        <g transform="translate(260,205)">
          <circle r="46" fill="#E2557A" />
          <path d="M-16 -4 L0 -22 L16 -4" stroke="#F6EFE4" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="0" y1="-14" x2="0" y2="8" stroke="#F6EFE4" strokeWidth="5" strokeLinecap="round" />
          <circle cx="0" cy="20" r="3.4" fill="#F6EFE4" />
        </g>
        <g className="ia-drift" opacity="0.75">
          <circle cx="140" cy="90" r="6" fill="#A23E64" />
          <circle cx="390" cy="110" r="5" fill="#2F6B4F" />
          <circle cx="400" cy="290" r="7" fill="#C98B2E" />
          <circle cx="120" cy="300" r="5" fill="#2F6B4F" />
        </g>
      </svg>
      <style>{`
        .ia-drift { animation: ia-drift 6s ease-in-out infinite; transform-origin: center; }
        @keyframes ia-drift { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @media (prefers-reduced-motion: reduce) { .ia-drift { animation: none; } }
      `}</style>
    </div>
  )
}

export function SolutionArt({ className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 to-emerald-900 ${className}`}>
      <svg viewBox="0 0 520 420" className="h-full w-full" role="img" aria-label="Illustration of an open hygiene kit with essential items">
        <rect x="90" y="140" width="340" height="200" rx="16" fill="#1F4C38" />
        <path d="M90 156 L260 90 L430 156 L260 190 Z" fill="#8FC7A6" />
        <path d="M90 156 L260 190 L260 340 L90 300 Z" fill="#2F6B4F" />
        <path d="M430 156 L260 190 L260 340 L430 300 Z" fill="#245C43" />

        <g transform="translate(260,150)">
          <circle r="26" fill="#F3EDE0" />
          <path d="M-9 2c0-7 4.5-11 9-11s9 4 9 11-4.5 13-9 15c-4.5-2-9-8-9-15z" fill="#2F6B4F" />
        </g>

        <rect x="130" y="215" width="60" height="70" rx="8" fill="#F3EDE0" opacity="0.92" />
        <rect x="205" y="230" width="46" height="55" rx="8" fill="#E2557A" opacity="0.85" />
        <rect x="270" y="215" width="60" height="70" rx="8" fill="#F3EDE0" opacity="0.92" />
        <circle cx="365" cy="255" r="30" fill="#C98B2E" opacity="0.9" />

        <g className="ia-float" opacity="0.85">
          <path d="M150 90c10-8 24-6 30 4 6 10 1 24-10 28-10 4-22-2-25-12-2-8 1-16 5-20z" fill="#F3EDE0" opacity="0.4" />
        </g>
      </svg>
      <style>{`
        .ia-float { animation: ia-float 7s ease-in-out infinite; transform-origin: center; }
        @keyframes ia-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @media (prefers-reduced-motion: reduce) { .ia-float { animation: none; } }
      `}</style>
    </div>
  )
}

export function VisionArt({ className = '' }) {
  const chips = 10
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-[#FBF3EE] ${className}`}>
      <svg viewBox="0 0 520 420" className="h-full w-full" role="img" aria-label="Illustration of hands forming a circle around the words break the silence, embrace hygiene">
        <circle cx="260" cy="210" r="170" fill="#F6E2E9" opacity="0.6" />
        {Array.from({ length: chips }).map((_, i) => {
          const angle = (i / chips) * Math.PI * 2 - Math.PI / 2
          const r = 130
          const x = 260 + r * Math.cos(angle)
          const y = 210 + r * Math.sin(angle)
          const rot = (angle * 180) / Math.PI + 90
          const colors = ['#A23E64', '#2F6B4F', '#C98B2E', '#5C7A6B']
          const fill = colors[i % colors.length]
          return (
            <g key={i} transform={`translate(${x},${y}) rotate(${rot})`}>
              <rect x="-16" y="-22" width="32" height="44" rx="5" fill={fill} opacity="0.9" />
            </g>
          )
        })}
        <circle cx="260" cy="210" r="92" fill="#FFFFFF" />
        <text x="260" y="196" textAnchor="middle" fontSize="24" fontWeight="700" fill="#16233A" fontFamily="Space Grotesk, sans-serif">
          Break the
        </text>
        <text x="260" y="224" textAnchor="middle" fontSize="24" fontWeight="700" fill="#16233A" fontFamily="Space Grotesk, sans-serif">
          Silence
        </text>
        <text x="260" y="246" textAnchor="middle" fontSize="12" fill="#2F6B4F" fontFamily="IBM Plex Mono, monospace" letterSpacing="1">
          EMBRACE HYGIENE
        </text>
      </svg>
    </div>
  )
}
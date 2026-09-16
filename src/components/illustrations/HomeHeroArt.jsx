// Custom, license-free hero illustration — a "circle of support" scene in
// the same spirit as the reference (women exchanging a hygiene kit),
// built from shapes instead of a purchased/stock illustration.

export default function HomeHeroArt({ className = '' }) {
  const figures = [
    { x: 90, y: 260, color: '#2F6B4F', h: 150 },
    { x: 220, y: 190, color: '#A23E64', h: 190 },
    { x: 360, y: 230, color: '#C98B2E', h: 165 },
    { x: 470, y: 300, color: '#5C7A6B', h: 140 },
  ]

  return (
    <div className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-50 via-[#FBF3EE] to-emerald-100 ${className}`}>
      <svg viewBox="0 0 600 460" className="h-full w-full" role="img" aria-label="Illustration of women in a community circle sharing a hygiene kit">
        {/* botanical backdrop */}
        <g opacity="0.5">
          <path d="M-20 460 C 40 340, 20 220, 80 100" stroke="#8FC7A6" strokeWidth="26" fill="none" strokeLinecap="round" />
          <path d="M60 460 C 100 360, 70 260, 120 160" stroke="#2F6B4F" strokeWidth="16" fill="none" strokeLinecap="round" opacity="0.4" />
          <path d="M640 460 C 560 340, 590 220, 520 100" stroke="#8FC7A6" strokeWidth="26" fill="none" strokeLinecap="round" />
        </g>

        {/* ground */}
        <ellipse cx="300" cy="410" rx="230" ry="18" fill="#E7DFCB" opacity="0.6" />

        {/* figures */}
        {figures.map((f, i) => (
          <g key={i} className="hh-float" style={{ animationDelay: `${i * 0.4}s` }} transform={`translate(${f.x},${f.y})`}>
            <path d={`M-30 ${f.h} C -30 ${f.h - 70}, 30 ${f.h - 70}, 30 ${f.h} Z`} fill={f.color} />
            <circle cx="0" cy={f.h - 100} r="22" fill="#3A2A20" opacity="0.85" />
            <circle cx="0" cy={f.h - 105} r="20" fill="#EFC9A5" />
          </g>
        ))}

        {/* central shared kit */}
        <g className="hh-pulse" transform="translate(300,300)">
          <rect x="-26" y="-20" width="52" height="40" rx="6" fill="#F3EDE0" stroke="#2F6B4F" strokeWidth="2" />
          <path d="M-10 -20 L0 -32 L10 -20" fill="none" stroke="#2F6B4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* floating accents */}
        <g className="hh-drift-a" opacity="0.8">
          <circle cx="140" cy="90" r="7" fill="#E2557A" />
        </g>
        <g className="hh-drift-b" opacity="0.8">
          <circle cx="470" cy="120" r="6" fill="#2F6B4F" />
        </g>
        <g className="hh-drift-a" opacity="0.7">
          <path d="M500 340c8-6 18-4 22 4 4 8 0 18-8 21-8 3-17-2-19-10-2-6 1-12 5-15z" fill="#C98B2E" />
        </g>
      </svg>

      <style>{`
        .hh-float { animation: hh-float 5.5s ease-in-out infinite; transform-origin: center; }
        .hh-drift-a { animation: hh-float 6.5s ease-in-out infinite; transform-origin: center; }
        .hh-drift-b { animation: hh-float 4.5s ease-in-out infinite reverse; transform-origin: center; }
        .hh-pulse { animation: hh-pulse 3s ease-in-out infinite; transform-origin: 300px 300px; }
        @keyframes hh-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        @keyframes hh-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.06); } }
        @media (prefers-reduced-motion: reduce) {
          .hh-float, .hh-drift-a, .hh-drift-b, .hh-pulse { animation: none; }
        }
      `}</style>
    </div>
  )
}
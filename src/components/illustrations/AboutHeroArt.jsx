export default function AboutHeroArt({ className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 ${className}`}>
      <svg viewBox="0 0 600 460" className="h-full w-full" role="img" aria-label="Illustration of four women standing in a circle, exchanging a hygiene kit">
        <defs>
          <radialGradient id="glow" cx="50%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#3f8f6c" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1f4c38" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="460" fill="url(#glow)" />
        <circle cx="300" cy="255" r="150" fill="none" stroke="#F3EDE0" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="2 10" />
        <g className="ab-float-slow" opacity="0.85">
          <path d="M120 90c14-10 32-8 40 6 8 14 2 32-14 38-14 6-30-2-34-16-3-12 1-22 8-28z" fill="#8FC7A6" />
        </g>
        <g className="ab-float-fast" opacity="0.7">
          <path d="M470 110c12-9 27-7 34 5 7 12 2 27-12 32-12 5-26-2-29-14-3-10 1-18 7-23z" fill="#E2557A" opacity="0.55" />
        </g>
        <g transform="translate(300,120)">
          <circle cx="0" cy="0" r="26" fill="#F3EDE0" />
          <path d="M-34 92c0-30 15.2-55 34-55s34 25 34 55" fill="#C98B2E" />
        </g>
        <g transform="translate(430,255)">
          <circle cx="0" cy="0" r="26" fill="#F3EDE0" />
          <path d="M-34 92c0-30 15.2-55 34-55s34 25 34 55" fill="#A23E64" />
        </g>
        <g transform="translate(300,390)">
          <circle cx="0" cy="0" r="26" fill="#F3EDE0" />
          <path d="M-34 92c0-30 15.2-55 34-55s34 25 34 55" fill="#2F6B4F" />
        </g>
        <g transform="translate(170,255)">
          <circle cx="0" cy="0" r="26" fill="#F3EDE0" />
          <path d="M-34 92c0-30 15.2-55 34-55s34 25 34 55" fill="#5C7A6B" />
        </g>
        <g className="ab-pulse" transform="translate(300,255)">
          <circle cx="0" cy="0" r="22" fill="#F3EDE0" />
          <path d="M-8 2c0-6 4-10 8-10s8 4 8 10-4 12-8 14c-4-2-8-8-8-14z" fill="#2F6B4F" />
        </g>
        <line x1="300" y1="150" x2="300" y2="233" stroke="#F3EDE0" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="404" y1="255" x2="322" y2="255" stroke="#F3EDE0" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="300" y1="360" x2="300" y2="277" stroke="#F3EDE0" strokeOpacity="0.3" strokeWidth="1.5" />
        <line x1="196" y1="255" x2="278" y2="255" stroke="#F3EDE0" strokeOpacity="0.3" strokeWidth="1.5" />
      </svg>
      <style>{`
        .ab-float-slow { animation: ab-float 7s ease-in-out infinite; transform-origin: center; }
        .ab-float-fast { animation: ab-float 5s ease-in-out infinite; transform-origin: center; }
        .ab-pulse { animation: ab-pulse 3.2s ease-in-out infinite; transform-origin: 300px 255px; }
        @keyframes ab-float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes ab-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
      `}</style>
    </div>
  );
}
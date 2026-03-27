export default function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <svg viewBox="0 0 600 600" className="hero-bg-svg">
        {/* círculo base */}
        <circle cx="300" cy="300" r="220" className="bg-circle" />

        {/* hexágono */}
        <polygon
          points="300,80 480,190 480,410 300,520 120,410 120,190"
          className="bg-hex"
        />

        {/* linhas internas */}
        <line x1="300" y1="80" x2="300" y2="520" className="bg-line" />
        <line x1="120" y1="190" x2="480" y2="410" className="bg-line" />
        <line x1="480" y1="190" x2="120" y2="410" className="bg-line" />

        {/* pontos */}
        <circle cx="300" cy="80" r="5" className="bg-dot" />
        <circle cx="480" cy="190" r="5" className="bg-dot" />
        <circle cx="480" cy="410" r="5" className="bg-dot" />
        <circle cx="300" cy="520" r="5" className="bg-dot" />
        <circle cx="120" cy="410" r="5" className="bg-dot" />
        <circle cx="120" cy="190" r="5" className="bg-dot" />

        {/* círculo animado */}
        <circle cx="380" cy="200" r="120" className="bg-orbit" />
      </svg>
    </div>
  );
}

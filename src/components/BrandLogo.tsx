import Link from 'next/link';

type BrandLogoProps = {
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'mark' | 'wordmark';
  showTagline?: boolean;
};

const sizeMap = {
  sm: {
    full: { width: 188, height: 44 },
    mark: { width: 42, height: 42 },
    wordmark: { width: 150, height: 34 },
  },
  md: {
    full: { width: 236, height: 56 },
    mark: { width: 52, height: 52 },
    wordmark: { width: 188, height: 42 },
  },
  lg: {
    full: { width: 330, height: 78 },
    mark: { width: 70, height: 70 },
    wordmark: { width: 265, height: 60 },
  },
};

function BrandMark({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Símbolo Bit4code"
    >
      <defs>
        <linearGradient id="b4c-mark-pink" x1="10" y1="10" x2="82" y2="82">
          <stop offset="0%" stopColor="#ff4aa5" />
          <stop offset="100%" stopColor="#cf2f86" />
        </linearGradient>
        <linearGradient id="b4c-mark-dark" x1="18" y1="16" x2="78" y2="78">
          <stop offset="0%" stopColor="#6d6d72" />
          <stop offset="100%" stopColor="#4d4d52" />
        </linearGradient>
      </defs>

      <rect x="6" y="6" width="80" height="80" rx="24" fill="rgba(255,255,255,0.04)" />
      <rect
        x="6"
        y="6"
        width="80"
        height="80"
        rx="24"
        stroke="rgba(255,255,255,0.08)"
      />

      <path
        d="M22 22H42C49 22 54 26 54 33C54 37 52 40 48 42C53 44 56 48 56 54C56 62 50 67 41 67H22V22Z"
        fill="url(#b4c-mark-pink)"
      />
      <path
        d="M31 31H40C43 31 45 32 45 35C45 38 43 39 40 39H31V31ZM31 48H41C44 48 47 50 47 54C47 57 44 59 41 59H31V48Z"
        fill="white"
        opacity="0.95"
      />

      <path d="M47 52L62 25H73V67H62V58H47V52ZM62 52H67V39L62 52Z" fill="url(#b4c-mark-dark)" />

      <path
        d="M40 66H55"
        stroke="white"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M38 69H55"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M36 72H55"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Wordmark({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 320 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Bit4code"
    >
      <defs>
        <linearGradient id="bit4codePinkWord" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff4aa5" />
          <stop offset="100%" stopColor="#cf2f86" />
        </linearGradient>
      </defs>

      <g>
        <path
          d="M8 10H44C57 10 66 16 66 28C66 35 63 40 57 43C65 46 69 52 69 61C69 74 59 80 44 80H8V10Z"
          fill="url(#bit4codePinkWord)"
          transform="scale(0.9)"
        />
        <path
          d="M27 23H43C47 23 49 25 49 29C49 33 47 35 43 35H27V23ZM27 47H44C49 47 52 50 52 55C52 60 49 63 44 63H27V47Z"
          fill="white"
          opacity="0.95"
          transform="translate(0 -2) scale(0.9)"
        />
      </g>

      <rect x="70" y="9" width="24" height="58" rx="2" fill="url(#bit4codePinkWord)" />
      <rect x="100" y="9" width="20" height="12" rx="2" fill="url(#bit4codePinkWord)" />
      <rect x="104" y="21" width="12" height="46" rx="2" fill="url(#bit4codePinkWord)" />

      <g>
        <path
          d="M130 9H188L154 59H188V67H129L163 17H130V9Z"
          fill="url(#bit4codePinkWord)"
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x={130 + i * 4}
            y={59 + i * 0.1}
            width={24}
            height={1.6}
            fill="white"
            opacity="0.75"
          />
        ))}
      </g>

      <g>
        <path
          d="M188 46L208 9H230V67H208V53H188V46ZM208 46H219V27L208 46Z"
          fill="#5c5c5f"
        />
      </g>

      <g fill="#5c5c5f">
        <path d="M258 8C275 8 289 20 289 38C289 56 275 68 258 68C241 68 227 56 227 38C227 20 241 8 258 8ZM258 24C249 24 243 30 243 38C243 46 249 52 258 52C267 52 273 46 273 38C273 30 267 24 258 24Z" />
        <path
          d="M297 9H333C352 9 365 20 365 38C365 56 352 67 333 67H297V9ZM319 26V50H331C339 50 344 45 344 38C344 31 339 26 331 26H319Z"
          transform="translate(-68 0)"
        />
        <path
          d="M372 9H416V25H394V31H414V45H394V51H416V67H372V9Z"
          transform="translate(-54 0)"
        />
      </g>
    </svg>
  );
}

export default function BrandLogo({
  href = '/',
  size = 'md',
  variant = 'full',
  showTagline = false,
}: BrandLogoProps) {
  const dimensions = sizeMap[size][variant];

  const content = (
    <div className={`brand-logo-wrap brand-logo-wrap--${variant}`}>
      {variant === 'mark' ? (
        <BrandMark width={dimensions.width} height={dimensions.height} />
      ) : null}

      {variant === 'wordmark' ? (
        <Wordmark width={dimensions.width} height={dimensions.height} />
      ) : null}

      {variant === 'full' ? (
        <>
          <BrandMark width={size === 'lg' ? 70 : size === 'md' ? 52 : 42} height={size === 'lg' ? 70 : size === 'md' ? 52 : 42} />
          <Wordmark width={size === 'lg' ? 240 : size === 'md' ? 172 : 136} height={size === 'lg' ? 54 : size === 'md' ? 38 : 30} />
        </>
      ) : null}

      {showTagline ? (
        <span className="brand-tagline">software • automação • IA • cybersecurity</span>
      ) : null}
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="brand-logo-link" aria-label="Bit4code - página inicial">
      {content}
    </Link>
  );
}

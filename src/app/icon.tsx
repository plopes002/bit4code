import { ImageResponse } from 'next/og';

export const size = {
  width: 512,
  height: 512,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(circle at top left, rgba(217,50,138,0.28), transparent 30%), linear-gradient(180deg, #060606 0%, #101014 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 28,
            borderRadius: 90,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.04)',
          }}
        />

        <svg
          width="320"
          height="320"
          viewBox="0 0 92 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="b4c-mark-pink-icon" x1="10" y1="10" x2="82" y2="82">
              <stop offset="0%" stopColor="#ff4aa5" />
              <stop offset="100%" stopColor="#cf2f86" />
            </linearGradient>
            <linearGradient id="b4c-mark-dark-icon" x1="18" y1="16" x2="78" y2="78">
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
            fill="url(#b4c-mark-pink-icon)"
          />
          <path
            d="M31 31H40C43 31 45 32 45 35C45 38 43 39 40 39H31V31ZM31 48H41C44 48 47 50 47 54C47 57 44 59 41 59H31V48Z"
            fill="white"
            opacity="0.95"
          />

          <path
            d="M47 52L62 25H73V67H62V58H47V52ZM62 52H67V39L62 52Z"
            fill="url(#b4c-mark-dark-icon)"
          />

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
      </div>
    ),
    {
      ...size,
    }
  );
}

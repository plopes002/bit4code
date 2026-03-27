import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background:
            'radial-gradient(circle at top left, rgba(217,50,138,0.28), transparent 24%), radial-gradient(circle at top right, rgba(58,113,255,0.10), transparent 18%), linear-gradient(180deg, #060606 0%, #101014 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          padding: '48px 56px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: 40,
            top: 40,
            width: 260,
            height: 260,
            border: '2px solid rgba(217,50,138,0.24)',
            borderRadius: 36,
            transform: 'rotate(12deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 120,
            bottom: -20,
            width: 320,
            height: 320,
            border: '2px solid rgba(255,255,255,0.12)',
            borderRadius: 44,
            transform: 'rotate(12deg)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 2,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div
              style={{
                width: 88,
                height: 88,
                borderRadius: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <svg
                width="58"
                height="58"
                viewBox="0 0 92 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="b4c-mark-pink-og" x1="10" y1="10" x2="82" y2="82">
                    <stop offset="0%" stopColor="#ff4aa5" />
                    <stop offset="100%" stopColor="#cf2f86" />
                  </linearGradient>
                  <linearGradient id="b4c-mark-dark-og" x1="18" y1="16" x2="78" y2="78">
                    <stop offset="0%" stopColor="#6d6d72" />
                    <stop offset="100%" stopColor="#4d4d52" />
                  </linearGradient>
                </defs>

                <path
                  d="M22 22H42C49 22 54 26 54 33C54 37 52 40 48 42C53 44 56 48 56 54C56 62 50 67 41 67H22V22Z"
                  fill="url(#b4c-mark-pink-og)"
                />
                <path
                  d="M31 31H40C43 31 45 32 45 35C45 38 43 39 40 39H31V31ZM31 48H41C44 48 47 50 47 54C47 57 44 59 41 59H31V48Z"
                  fill="white"
                  opacity="0.95"
                />
                <path
                  d="M47 52L62 25H73V67H62V58H47V52ZM62 52H67V39L62 52Z"
                  fill="url(#b4c-mark-dark-og)"
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

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  color: '#ffd0ea',
                  marginBottom: 6,
                }}
              >
                BIT4CODE
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: '#bdbdc5',
                }}
              >
                software • automação • IA • cybersecurity
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div
              style={{
                fontSize: 68,
                lineHeight: 1,
                fontWeight: 700,
                maxWidth: 860,
                letterSpacing: -2,
              }}
            >
              Tecnologia com presença forte, execução sólida e visual profissional.
            </div>

            <div
              style={{
                fontSize: 28,
                lineHeight: 1.4,
                color: '#c8c8cf',
                maxWidth: 900,
              }}
            >
              Programação, automação, IA, TI, CyberSecurity, SaaS e produtos próprios como o ViraLink.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            {['Programação', 'Automação', 'IA', 'TI', 'CyberSecurity', 'SaaS', 'ViraLink'].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    padding: '10px 16px',
                    borderRadius: 999,
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.05)',
                    fontSize: 18,
                    color: '#ededf2',
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

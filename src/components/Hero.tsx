import Image from 'next/image';

const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";

const stats = [
  { value: '6+', label: 'Projects built' },
  { value: '2.4k', label: 'Amarah waitlist' },
  { value: '2.5M', label: 'XAF invested in farm' },
  { value: '3+', label: 'Years exploring' },
];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: 'calc(100vh - 62px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(20px,3.5vh,40px) clamp(20px,5vw,64px) 0',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,0.72fr)',
          gap: 'clamp(28px,5vw,76px)',
          alignItems: 'center',
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* Left: text */}
        <div>
          <div
            style={{
              fontFamily: FF_MONO,
              fontSize: 11,
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: 'clamp(16px,3vh,30px)',
              textTransform: 'uppercase',
            }}
          >
            Personal Portfolio — 2026
          </div>

          <h1
            style={{
              fontFamily: FF_SYNE,
              fontWeight: 800,
              fontSize: 'clamp(38px,5.6vw,92px)',
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            <span style={{ display: 'block', color: '#fff' }}>Creative.</span>
            <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.45)' }}>
              Builder
            </span>
            <span style={{ display: 'block', color: '#fff' }}>
              when it{' '}
              <span style={{ color: 'transparent', WebkitTextStroke: '1.2px #fff' }}>helps.</span>
            </span>
          </h1>

          <p
            style={{
              maxWidth: 520,
              fontSize: 'clamp(14px,1.4vw,17px)',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.6)',
              margin: 'clamp(18px,3vh,30px) 0 0',
              fontWeight: 300,
            }}
          >
            Not tech-first. A creative who moves through fashion, music, and film — and builds infrastructure for
            the next internet when the problem demands it.
          </p>
          <div style={{ fontFamily: FF_MONO, fontSize: 12, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)', marginTop: 16 }}>
            Abdel A. Lita · Yaoundé, Cameroon
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              borderTop: '0.5px solid rgba(255,255,255,0.1)',
              marginTop: 'clamp(22px,3.5vh,38px)',
              maxWidth: 640,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '16px 14px 14px 0',
                  borderRight: '0.5px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  style={{
                    fontFamily: FF_SYNE,
                    fontWeight: 800,
                    fontSize: 'clamp(22px,2.6vw,34px)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: FF_MONO,
                    fontSize: 10,
                    letterSpacing: '0.04em',
                    color: 'rgba(255,255,255,0.42)',
                    marginTop: 7,
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: portrait */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ position: 'relative', border: '0.5px solid rgba(255,255,255,0.16)' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(360px,50vh,540px)',
                overflow: 'hidden',
                filter: 'grayscale(1) contrast(1.04)',
              }}
            >
              <Image
                src="/LikendinImage.jpg"
                alt="Abdel A. Lita"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
            <div
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
                fontFamily: FF_MONO,
                fontSize: 10,
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.55)',
                pointerEvents: 'none',
              }}
            >
              FIG.01 — POLA
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 12,
                right: 14,
                fontFamily: FF_SYNE,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: '0.05em',
                color: 'rgba(255,255,255,0.7)',
                pointerEvents: 'none',
              }}
            >
              3°52′N 11°31′E
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
            <span style={{ fontFamily: FF_SYNE, fontWeight: 800, fontSize: 18, letterSpacing: '0.04em' }}>POLA</span>
            <span style={{ fontFamily: FF_MONO, fontSize: 10, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.45)' }}>
              Abdel A. Lita
            </span>
          </div>
          <div
            style={{
              fontFamily: FF_MONO,
              fontSize: 10.5,
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.4)',
              fontStyle: 'italic',
              borderTop: '0.5px solid rgba(255,255,255,0.1)',
              paddingTop: 11,
            }}
          >
            Litapola is Lita and Pola — two names that belong together, even if the paperwork disagrees.
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'clamp(14px,2.5vh,26px) 0 20px',
        }}
      >
        <div style={{ fontFamily: FF_MONO, fontSize: 11, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.42)' }}>
          3°52′N 11°31′E · CEMAC
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontFamily: FF_MONO, fontSize: 11, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <span style={{ width: 'clamp(40px,8vw,90px)', height: '0.5px', background: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
          <span style={{ display: 'inline-block', animation: 'lp-scrollhint 1.8s ease-in-out infinite', color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}

const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";

const disciplines = [
  'Fintech Infrastructure',
  'AI Agent Systems',
  'Clinical Intelligence',
  'Agricultural Technology',
  'Creative Practice',
];

const log = [
  { date: '2026.06', text: 'AgentPay concept spec initiated' },
  { date: '2026.04', text: 'EyeDoc MVP specification complete' },
  { date: '2026.01', text: 'Amarah waitlist reached 2,400' },
  { date: '2025.11', text: 'Roof · pivoted · lesson documented' },
  { date: '2025.08', text: 'PaymentHub delivered to PKF' },
];

export default function Experience() {
  return (
    <section
      style={{
        padding: 'clamp(56px,9vh,120px) clamp(20px,5vw,64px)',
        borderTop: '0.5px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.85fr 1.15fr',
          gap: 'clamp(40px,7vw,96px)',
          alignItems: 'start',
        }}
      >
        {/* Disciplines */}
        <div>
          <div
            style={{
              fontFamily: FF_MONO,
              fontSize: 11,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.42)',
              textTransform: 'uppercase',
              marginBottom: 'clamp(24px,4vh,40px)',
            }}
          >
            Disciplines
          </div>
          <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.12)' }}>
            {disciplines.map((d) => (
              <div
                key={d}
                style={{
                  padding: 'clamp(14px,2vh,20px) 0',
                  borderBottom: '0.5px solid rgba(255,255,255,0.12)',
                  fontFamily: FF_SYNE,
                  fontWeight: 700,
                  fontSize: 'clamp(15px,1.8vw,22px)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.88)',
                }}
              >
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* Field Log */}
        <div>
          <div
            style={{
              fontFamily: FF_MONO,
              fontSize: 11,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.42)',
              textTransform: 'uppercase',
              marginBottom: 'clamp(24px,4vh,40px)',
            }}
          >
            Field Log
          </div>
          <div style={{ border: '0.5px solid rgba(255,255,255,0.12)', background: 'rgba(8,8,8,0.6)' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '11px 16px',
                borderBottom: '0.5px solid rgba(255,255,255,0.12)',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', opacity: 0.85, display: 'inline-block' }} />
              <span style={{ fontFamily: FF_MONO, fontSize: 10, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.45)' }}>
                litapola@lab — activity.log
              </span>
            </div>
            <div style={{ padding: 'clamp(16px,3vw,26px)', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {log.map((l) => (
                <div
                  key={l.date}
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'baseline',
                    fontFamily: FF_MONO,
                    fontSize: 'clamp(11px,1.3vw,13.5px)',
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.45)', whiteSpace: 'nowrap' }}>[{l.date}]</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>—</span>
                  <span style={{ color: 'rgba(255,255,255,0.82)' }}>{l.text}</span>
                </div>
              ))}
              <div
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'center',
                  fontFamily: FF_MONO,
                  fontSize: 'clamp(11px,1.3vw,13.5px)',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: 4,
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>litapola@lab:~$</span>
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 15,
                    background: '#fff',
                    animation: 'lp-pulse 1.2s steps(2) infinite',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

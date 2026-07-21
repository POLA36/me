'use client';

const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";

export default function Navigation() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px clamp(20px,5vw,64px)',
        borderBottom: '0.5px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        background: 'rgba(0,0,0,0.4)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <div style={{ fontFamily: FF_SYNE, fontWeight: 800, fontSize: 19, letterSpacing: '0.04em', lineHeight: 1 }}>
          LITA<span style={{ opacity: 0.55 }}>POLA</span>
        </div>
        <div style={{ fontFamily: FF_MONO, fontSize: 9, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)' }}>
          Lita and Pola — two names that belong together.
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,3vw,40px)' }}>
        {['Work', 'Creative', 'About'].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            style={{ fontFamily: FF_MONO, fontSize: 12, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#fff')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)')}
          >
            {label}
          </a>
        ))}

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 'clamp(8px,2vw,20px)', borderLeft: '0.5px solid rgba(255,255,255,0.12)' }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#fff',
              display: 'inline-block',
              animation: 'lp-pulse 1.8s ease-in-out infinite',
            }}
          />
          <span style={{ fontFamily: FF_MONO, fontSize: 11, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)' }}>
            Yaoundé, CM
          </span>
        </div>
      </div>
    </nav>
  );
}

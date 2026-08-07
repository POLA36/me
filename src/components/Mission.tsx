const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";

export default function Mission() {
  return (
    <section
      style={{
        padding: 'clamp(56px,9vh,110px) clamp(20px,5vw,64px)',
        borderTop: '0.5px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        style={{
          fontFamily: FF_MONO,
          fontSize: 11,
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.42)',
          textTransform: 'uppercase',
          marginBottom: 'clamp(22px,4vh,36px)',
        }}
      >
        Mission
      </div>
      <p
        style={{
          fontFamily: FF_SYNE,
          fontWeight: 800,
          fontSize: 'clamp(24px,4vw,54px)',
          lineHeight: 1.18,
          letterSpacing: '-0.025em',
          margin: 0,
          maxWidth: 1180,
          color: 'rgba(255,255,255,0.12)',
        }}
      >
        Using technology to{' '}
        <span style={{ color: '#fff' }}>close access gaps</span>
        , in finance, healthcare, and agriculture, across{' '}
        <span style={{ color: '#fff' }}>Africa</span>. Not because it&apos;s a market.{' '}
        <span style={{ color: '#fff' }}>Because it&apos;s home.</span>
      </p>
    </section>
  );
}

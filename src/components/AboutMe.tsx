const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";

export default function AboutMe() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(80px,16vh,180px) clamp(20px,5vw,64px)',
        borderTop: '0.5px solid rgba(255,255,255,0.1)',
      }}
    >
      <div style={{ maxWidth: 820 }}>
        <div
          style={{
            fontFamily: FF_MONO,
            fontSize: 11,
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.42)',
            textTransform: 'uppercase',
            marginBottom: 28,
          }}
        >
          The name
        </div>
        <p
          style={{
            fontFamily: FF_SYNE,
            fontWeight: 600,
            fontSize: 'clamp(22px,3.6vw,42px)',
            lineHeight: 1.35,
            letterSpacing: '-0.02em',
            margin: 0,
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          My full name is <span style={{ color: '#fff' }}>Lita Pola Abdel.</span> Two names — Lita and Pola — that
          belong together. The birth certificate only kept one. So I built something that puts them back where they
          belong: <span style={{ color: '#fff' }}>Litapola.</span>
        </p>
      </div>
    </section>
  );
}

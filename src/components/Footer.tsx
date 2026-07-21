const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";

export default function Footer() {
  return (
    <footer
      style={{
        padding: 'clamp(40px,7vh,72px) clamp(20px,5vw,64px)',
        borderTop: '0.5px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 18,
      }}
    >
      <div style={{ fontFamily: FF_MONO, fontSize: 11, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.42)' }}>
        © {new Date().getFullYear()} LITA POLA · SOMEWHERE IN AFRICA · 3°52′N 11°31′E
      </div>
      <div style={{ fontFamily: FF_SYNE, fontWeight: 800, fontSize: 16, letterSpacing: '0.03em' }}>
        LITAPOLA<span style={{ opacity: 0.55 }}>.org</span>
      </div>
    </footer>
  );
}

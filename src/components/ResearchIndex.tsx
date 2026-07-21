'use client';

const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";

const index = [
  { num: '001', name: 'Amarah', domain: 'Fintech Infrastructure', status: 'Live', year: '2025' },
  { num: '002', name: 'AgentPay', domain: 'AI Agent Systems', status: 'Concept', year: '2026' },
  { num: '003', name: 'EyeDoc', domain: 'Clinical Intelligence', status: 'Spec written', year: '2026' },
  { num: '004', name: 'The Farm', domain: 'Agricultural Technology', status: 'Phase 3 active', year: '2025' },
  { num: '005', name: 'PaymentHub', domain: 'Financial Messaging', status: 'Research', year: '2025' },
  { num: '006', name: 'Roof', domain: 'Lesson Documented', status: 'Pivoted', year: '2025' },
];

export default function ResearchIndex() {
  return (
    <section
      style={{
        padding: 'clamp(40px,7vh,72px) clamp(20px,5vw,64px)',
        borderTop: '0.5px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: 24,
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <div style={{ fontFamily: FF_MONO, fontSize: 11, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.42)', textTransform: 'uppercase' }}>
          Research Index — 006 entries
        </div>
        <div style={{ fontFamily: FF_MONO, fontSize: 10, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)' }}>
          CLASSIFICATION / STATUS / YEAR
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 1,
          background: 'rgba(255,255,255,0.1)',
          border: '0.5px solid rgba(255,255,255,0.1)',
        }}
      >
        {index.map((ix) => (
          <IndexCard key={ix.num} ix={ix} />
        ))}
      </div>
    </section>
  );
}

function IndexCard({ ix }: { ix: (typeof index)[0] }) {
  return (
    <a
      href={`#work`}
      style={{
        background: '#000',
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        textDecoration: 'none',
        color: '#fff',
        transition: 'background .3s',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#0c0c0c')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#000')}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: FF_SYNE, fontWeight: 700, fontSize: 13, color: 'rgba(255,255,255,0.4)', fontVariantNumeric: 'tabular-nums' }}>
          {ix.num}
        </span>
        <span style={{ fontFamily: FF_MONO, fontSize: 10, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)' }}>
          {ix.year}
        </span>
      </div>
      <div style={{ fontFamily: FF_SYNE, fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em', lineHeight: 1 }}>
        {ix.name}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 'auto' }}>
        <div style={{ fontFamily: FF_MONO, fontSize: 10.5, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.55)' }}>
          {ix.domain}
        </div>
        <div style={{ fontFamily: FF_MONO, fontSize: 10, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.35)' }}>
          STATUS — {ix.status}
        </div>
      </div>
    </a>
  );
}

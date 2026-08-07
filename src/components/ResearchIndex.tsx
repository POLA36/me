'use client';

import { projects, type Project } from '@/data/projects';

const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";

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
          Research Index, {String(projects.length).padStart(3, '0')} entries
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
        {projects.map((ix) => (
          <IndexCard key={ix.num} ix={ix} />
        ))}
      </div>
    </section>
  );
}

function IndexCard({ ix }: { ix: Project }) {
  const isExternal = !!ix.href;
  const href = ix.href ?? `/work/${ix.slug}`;

  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
          STATUS, {ix.status}
        </div>
      </div>
    </a>
  );
}

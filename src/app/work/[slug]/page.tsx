import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";
const FF_SPACE = "var(--font-space, 'Space Grotesk', sans-serif)";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.name} — LITAPOLA` };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.indexOf(project);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  const dotStyle = project.dotFill
    ? { background: '#fff', opacity: project.dotOp }
    : { background: 'transparent', border: `1px solid rgba(255,255,255,${project.dotOp})`, width: 5, height: 5 };

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
      {/* Nav */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(20px,5vw,64px)',
          height: 60,
          borderBottom: '0.5px solid rgba(255,255,255,0.1)',
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: FF_SYNE,
            fontWeight: 800,
            fontSize: 15,
            letterSpacing: '0.1em',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          LITAPOLA
        </a>
        <a
          href="/#work"
          style={{
            fontFamily: FF_MONO,
            fontSize: 10,
            letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.45)',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          ← Back to work
        </a>
      </nav>

      {/* Main */}
      <main style={{ padding: 'clamp(60px,10vh,120px) clamp(20px,5vw,64px)', maxWidth: 960, margin: '0 auto' }}>
        {/* Number + domain */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            marginBottom: 32,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: FF_MONO,
              fontSize: 11,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            {project.num}
          </span>
          <span
            style={{
              fontFamily: FF_MONO,
              fontSize: 10,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.28)',
              textTransform: 'uppercase',
            }}
          >
            {project.domain}
          </span>
          <span
            style={{
              fontFamily: FF_MONO,
              fontSize: 10,
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: FF_SYNE,
            fontWeight: 800,
            fontSize: 'clamp(52px,9vw,120px)',
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            margin: '0 0 32px',
          }}
        >
          {project.name}
        </h1>

        {/* Status + role row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 56, flexWrap: 'wrap' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              padding: '5px 13px',
              border: '0.5px solid rgba(255,255,255,0.22)',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                flexShrink: 0,
                display: 'inline-block',
                ...dotStyle,
              }}
            />
            <span style={{ fontFamily: FF_MONO, fontSize: 10, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)' }}>
              {project.status}
            </span>
          </div>
          {project.role && (
            <span style={{ fontFamily: FF_MONO, fontSize: 10, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.35)' }}>
              {project.role}
            </span>
          )}
          {project.note && (
            <span style={{ fontFamily: FF_MONO, fontSize: 9.5, letterSpacing: '0.04em', color: 'rgba(255,255,255,0.2)' }}>
              {project.note}
            </span>
          )}
        </div>

        {/* Divider */}
        <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.12)', marginBottom: 56 }} />

        {/* Description */}
        <p
          style={{
            fontFamily: FF_SPACE,
            fontSize: 'clamp(17px,2.2vw,24px)',
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: 720,
            margin: '0 0 48px',
            fontWeight: 300,
          }}
        >
          {project.desc}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 64 }}>
          {project.tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: FF_MONO,
                fontSize: 10,
                letterSpacing: '0.06em',
                color: 'rgba(255,255,255,0.5)',
                border: '0.5px solid rgba(255,255,255,0.16)',
                padding: '6px 12px',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Live link */}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: FF_SYNE,
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.1em',
              color: '#fff',
              textDecoration: 'none',
              border: '0.5px solid rgba(255,255,255,0.3)',
              padding: '12px 24px',
              textTransform: 'uppercase',
            }}
          >
            Visit {project.name} ↗
          </a>
        )}
      </main>

      {/* Project navigation */}
      <div
        style={{
          borderTop: '0.5px solid rgba(255,255,255,0.1)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {prev ? (
          <a
            href={`/work/${prev.slug}`}
            style={{
              padding: 'clamp(28px,5vh,48px) clamp(20px,5vw,64px)',
              borderRight: '0.5px solid rgba(255,255,255,0.1)',
              textDecoration: 'none',
              color: '#fff',
            }}
          >
            <div style={{ fontFamily: FF_MONO, fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>
              ← PREVIOUS
            </div>
            <div style={{ fontFamily: FF_SYNE, fontWeight: 800, fontSize: 'clamp(18px,2.5vw,28px)', letterSpacing: '-0.02em' }}>
              {prev.name}
            </div>
          </a>
        ) : (
          <div />
        )}
        {next ? (
          <a
            href={`/work/${next.slug}`}
            style={{
              padding: 'clamp(28px,5vh,48px) clamp(20px,5vw,64px)',
              textDecoration: 'none',
              color: '#fff',
              textAlign: 'right',
            }}
          >
            <div style={{ fontFamily: FF_MONO, fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>
              NEXT →
            </div>
            <div style={{ fontFamily: FF_SYNE, fontWeight: 800, fontSize: 'clamp(18px,2.5vw,28px)', letterSpacing: '-0.02em' }}>
              {next.name}
            </div>
          </a>
        ) : (
          <div />
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: '0.5px solid rgba(255,255,255,0.08)',
          padding: 'clamp(24px,4vh,40px) clamp(20px,5vw,64px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <span style={{ fontFamily: FF_MONO, fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)' }}>
          © 2026 LITA POLA · SOMEWHERE IN AFRICA · 3°52′N 11°31′E
        </span>
        <span style={{ fontFamily: FF_MONO, fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.22)' }}>
          LITAPOLA.org
        </span>
      </div>
    </div>
  );
}

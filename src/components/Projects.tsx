'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';

const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";
const FF_SPACE = "var(--font-space, 'Space Grotesk', sans-serif)";

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="work"
      style={{
        padding: 'clamp(70px,12vh,140px) clamp(20px,5vw,64px)',
        borderTop: '0.5px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: 'clamp(40px,6vh,72px)',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <h2
          style={{
            fontFamily: FF_SYNE,
            fontWeight: 800,
            fontSize: 'clamp(30px,5vw,64px)',
            letterSpacing: '-0.03em',
            margin: 0,
          }}
        >
          Selected Work
        </h2>
        <div style={{ fontFamily: FF_MONO, fontSize: 11, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.42)' }}>
          007 — built when the problem demanded it
        </div>
      </div>

      <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.12)' }}>
        {projects.map((p, i) => {
          const active = hovered === i;
          const isExternal = !!p.href;
          const href = p.href ?? `/work/${p.slug}`;
          const arrow = isExternal ? '↗' : '→';

          const dotStyle = p.dotFill
            ? { background: '#fff', opacity: p.dotOp }
            : { background: 'transparent', border: `1px solid rgba(255,255,255,${p.dotOp})`, width: 5, height: 5 };

          const rowStyle = {
            display: 'block',
            position: 'relative' as const,
            padding: `clamp(26px,4vh,40px) 0`,
            paddingLeft: active ? 18 : 0,
            borderBottom: '0.5px solid rgba(255,255,255,0.12)',
            cursor: 'pointer',
            transition: 'padding-left .4s ease',
            textDecoration: 'none',
            color: '#fff',
          };

          const inner = (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 'clamp(18px,4vw,56px)',
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  fontFamily: FF_SYNE,
                  fontWeight: 700,
                  fontSize: 'clamp(15px,1.6vw,20px)',
                  color: 'rgba(255,255,255,0.35)',
                  paddingTop: 6,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {p.num}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <h3
                    style={{
                      fontFamily: FF_SYNE,
                      fontWeight: 800,
                      fontSize: 'clamp(28px,5vw,58px)',
                      letterSpacing: '-0.03em',
                      margin: 0,
                      lineHeight: 1,
                    }}
                  >
                    {p.name}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 7,
                      padding: '4px 11px',
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
                      {p.status}
                    </span>
                  </div>
                </div>

                {p.role && (
                  <div style={{ fontFamily: FF_MONO, fontSize: 10, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.35)', marginTop: 8 }}>
                    {p.role}
                  </div>
                )}

                <p
                  style={{
                    maxWidth: 620,
                    fontSize: 'clamp(13px,1.4vw,15.5px)',
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.55)',
                    margin: '14px 0 0',
                    fontWeight: 300,
                    fontFamily: FF_SPACE,
                  }}
                >
                  {p.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: FF_MONO,
                        fontSize: 10,
                        letterSpacing: '0.04em',
                        color: 'rgba(255,255,255,0.5)',
                        border: '0.5px solid rgba(255,255,255,0.14)',
                        padding: '4px 9px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    height: 1,
                    background: '#fff',
                    marginTop: 22,
                    transition: 'width .45s cubic-bezier(.2,.8,.2,1)',
                    width: active ? '100%' : '0%',
                  }}
                />
              </div>

              <div
                style={{
                  fontFamily: FF_SYNE,
                  fontSize: 'clamp(24px,3vw,40px)',
                  color: '#fff',
                  paddingTop: 4,
                  transition: 'opacity .35s, transform .35s',
                  opacity: active ? 1 : 0,
                  transform: active ? 'translateX(0px)' : 'translateX(-8px)',
                }}
              >
                {arrow}
              </div>
            </div>
          );

          return (
            <a
              key={p.num}
              href={href}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={rowStyle}
            >
              {inner}
            </a>
          );
        })}
      </div>
    </section>
  );
}

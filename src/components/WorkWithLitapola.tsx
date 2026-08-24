'use client';

import { useState } from 'react';

const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";
const FF_SPACE = "var(--font-space, 'Space Grotesk', sans-serif)";

const contacts = [
  {
    num: '01',
    label: 'Investors',
    body: "Interested in Tsʉ̌, Amarah, AgentPay, or EyeDoc? Let's talk.",
    email: 'investor@litapola.org',
  },
  {
    num: '02',
    label: 'Grants & NGOs',
    body: 'Development organizations, foundations, and government partners.',
    email: 'grants@litapola.org',
  },
  {
    num: '03',
    label: 'Press',
    body: 'Writing about African tech, fintech, agritech, or health AI?',
    email: 'press@litapola.org',
  },
  {
    num: '04',
    label: 'Hello',
    body: 'Collaborations, partnerships, ideas, or just to say hi.',
    email: 'hello@litapola.org',
  },
];

export default function WorkWithLitapola() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(70px,12vh,140px) clamp(20px,5vw,64px)',
        borderTop: '0.5px solid rgba(255,255,255,0.1)',
      }}
    >
      <div style={{ marginBottom: 'clamp(40px,6vh,64px)' }}>
        <div
          style={{
            fontFamily: FF_MONO,
            fontSize: 11,
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.42)',
            textTransform: 'uppercase',
            marginBottom: 18,
          }}
        >
          Work with Litapola
        </div>
        <h2
          style={{
            fontFamily: FF_SYNE,
            fontWeight: 800,
            fontSize: 'clamp(30px,5vw,64px)',
            letterSpacing: '-0.03em',
            margin: 0,
            maxWidth: 780,
            lineHeight: 1,
          }}
        >
          Let&apos;s build something that matters.
        </h2>
      </div>

      <div
        className="lp-work-grid"
        style={{
          display: 'grid',
          gap: 1,
          background: 'rgba(255,255,255,0.1)',
          border: '0.5px solid rgba(255,255,255,0.1)',
        }}
      >
        {contacts.map((c, i) => {
          const active = hovered === i;
          return (
            <a
              key={c.email}
              href={`mailto:${c.email}`}
              style={{
                position: 'relative',
                background: active ? '#0c0c0c' : '#000',
                padding: 'clamp(28px,3.5vw,44px)',
                minHeight: 200,
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                color: '#fff',
                transition: 'background .3s',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                <span
                  style={{
                    fontFamily: FF_SYNE,
                    fontWeight: 700,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.35)',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {c.num}
                </span>
                <span
                  style={{
                    fontFamily: FF_SYNE,
                    fontWeight: 800,
                    fontSize: 'clamp(15px,1.8vw,20px)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {c.label}
                </span>
              </div>

              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.55)',
                  margin: '16px 0 0',
                  fontWeight: 300,
                  fontFamily: FF_SPACE,
                  maxWidth: 360,
                }}
              >
                {c.body}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: 'auto',
                  paddingTop: 22,
                }}
              >
                <span
                  style={{
                    fontFamily: FF_MONO,
                    fontSize: 12.5,
                    letterSpacing: '0.02em',
                    color: active ? '#fff' : 'rgba(255,255,255,0.7)',
                    transition: 'color .3s',
                  }}
                >
                  {c.email}
                </span>
                <span
                  style={{
                    fontFamily: FF_SYNE,
                    fontSize: 15,
                    color: '#fff',
                    transition: 'opacity .35s, transform .35s',
                    opacity: active ? 1 : 0,
                    transform: active ? 'translateX(0px)' : 'translateX(-6px)',
                  }}
                >
                  ↗
                </span>
              </div>
            </a>
          );
        })}
      </div>

      <div
        style={{
          fontFamily: FF_MONO,
          fontSize: 11,
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.4)',
          marginTop: 'clamp(24px,4vh,36px)',
        }}
      >
        Based in Yaoundé, Cameroon · Available globally · Response within 48 hours
      </div>
    </section>
  );
}

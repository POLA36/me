const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";
const FF_SPACE = "var(--font-space, 'Space Grotesk', sans-serif)";

const TICKER =
  'Fashion · Music · Film · Architecture · Aesthetic · Mützig Star 2018 · Limbe 2017 · Onyama Laura · ';

const cards = [
  {
    meta: 'Film / 2017, Limbe, Cameroon',
    glyph: '◈',
    title: 'Stood in the room.',
    body: "Auditioned for a role in Limbe. Opportunity came through Onyama Laura, the Cameroonian actress. Didn't pass, but stood in the room.",
  },
  {
    meta: 'Music / 2018, Selected',
    glyph: '♫',
    title: "It doesn't expire.",
    body: "Selected for the Mützig Star competition. Didn't participate. But the selection said something about what's inside, and that doesn't expire.",
  },
  {
    meta: 'Fashion & Aesthetic / Always',
    glyph: '✦',
    title: 'The creative eye.',
    body: 'Taste that runs through everything, how products look, how stories are told, how systems feel. The creative eye behind every build.',
  },
];

export default function Creative() {
  return (
    <section
      id="creative"
      style={{
        padding: 'clamp(70px,12vh,140px) 0',
        borderTop: '0.5px solid rgba(255,255,255,0.1)',
      }}
    >
      <div style={{ padding: '0 clamp(20px,5vw,64px)', marginBottom: 'clamp(40px,6vh,64px)' }}>
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
          Before the code
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
          The creative came first.
        </h2>
      </div>

      {/* Ticker */}
      <div
        style={{
          overflow: 'hidden',
          borderTop: '0.5px solid rgba(255,255,255,0.1)',
          borderBottom: '0.5px solid rgba(255,255,255,0.1)',
          padding: '20px 0',
          marginBottom: 'clamp(40px,6vh,64px)',
          whiteSpace: 'nowrap',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            animation: 'lp-ticker 28s linear infinite',
            willChange: 'transform',
          }}
        >
          <span
            style={{
              fontFamily: FF_SYNE,
              fontWeight: 700,
              fontSize: 'clamp(24px,3.4vw,42px)',
              letterSpacing: '-0.01em',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            {TICKER}
          </span>
          <span
            style={{
              fontFamily: FF_SYNE,
              fontWeight: 700,
              fontSize: 'clamp(24px,3.4vw,42px)',
              letterSpacing: '-0.01em',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            {TICKER}
          </span>
        </div>
      </div>

      {/* Cards */}
      <div
        className="lp-creative-grid"
        style={{
          display: 'grid',
          gap: 1,
          background: 'rgba(255,255,255,0.1)',
          margin: '0 clamp(20px,5vw,64px)',
          border: '0.5px solid rgba(255,255,255,0.1)',
        }}
      >
        {cards.map((c, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              background: '#000',
              padding: 'clamp(28px,3.5vw,44px)',
              overflow: 'hidden',
              minHeight: 300,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: -10,
                bottom: -30,
                fontSize: 'clamp(120px,16vw,210px)',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.05)',
                fontFamily: FF_SYNE,
                pointerEvents: 'none',
              }}
            >
              {c.glyph}
            </div>
            <div
              style={{
                fontFamily: FF_MONO,
                fontSize: 10.5,
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                position: 'relative',
              }}
            >
              {c.meta}
            </div>
            <h3
              style={{
                fontFamily: FF_SYNE,
                fontWeight: 800,
                fontSize: 'clamp(22px,2.6vw,30px)',
                letterSpacing: '-0.02em',
                margin: '16px 0 0',
                lineHeight: 1.05,
                position: 'relative',
              }}
            >
              {c.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.55)',
                margin: '14px 0 0',
                fontWeight: 300,
                position: 'relative',
                fontFamily: FF_SPACE,
              }}
            >
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

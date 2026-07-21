const FF_SYNE = "var(--font-syne, 'Syne', sans-serif)";
const FF_MONO = "var(--font-mono, 'JetBrains Mono', monospace)";
const FF_SPACE = "var(--font-space, 'Space Grotesk', sans-serif)";

const skills = [
  { name: 'Backend development', note: 'core', w: '88%', op: 0.9 },
  { name: 'API integration', note: 'core', w: '85%', op: 0.9 },
  { name: 'Docker & containers', note: 'strong', w: '78%', op: 0.8 },
  { name: 'Java / Web', note: 'strong', w: '80%', op: 0.8 },
  { name: 'Camunda BPMN', note: 'strong', w: '74%', op: 0.75 },
  { name: 'Workflow automation', note: 'strong', w: '76%', op: 0.75 },
  { name: 'Mobile Money / CEMAC', note: 'domain strength', w: '96%', op: 1 },
  { name: 'ISO 20022 / SWIFT', note: 'domain strength', w: '90%', op: 1 },
];

const affiliations = [
  { code: 'LP', org: 'Litapola', role: 'Founder · Research & Ventures' },
  { code: 'PK', org: 'PKF Research Center', role: 'Researcher · Software Engineer' },
  { code: 'IA', org: "Institut Africain d'Informatique", role: 'Alumni · Computer Science' },
  { code: 'TEF', org: 'Tony Elumelu Foundation', role: 'Certificate · Business Management' },
  { code: 'Re', org: 'React Certification', role: 'Certified · Frontend Development' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(70px,12vh,140px) clamp(20px,5vw,64px)',
        borderTop: '0.5px solid rgba(255,255,255,0.1)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 'clamp(40px,7vw,100px)',
          alignItems: 'start',
        }}
      >
        {/* Skills */}
        <div>
          <div
            style={{
              fontFamily: FF_MONO,
              fontSize: 11,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.42)',
              textTransform: 'uppercase',
              marginBottom: 36,
            }}
          >
            Skills &amp; Tooling
          </div>
          {skills.map((sk) => (
            <div key={sk.name} style={{ marginBottom: 22 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: 9,
                }}
              >
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', fontWeight: 400, fontFamily: FF_SPACE }}>
                  {sk.name}
                </span>
                <span style={{ fontFamily: FF_MONO, fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>
                  {sk.note}
                </span>
              </div>
              <div style={{ height: 1.5, background: 'rgba(255,255,255,0.1)', width: '100%' }}>
                <div style={{ height: '100%', background: '#fff', width: sk.w, opacity: sk.op }} />
              </div>
            </div>
          ))}
        </div>

        {/* Affiliations */}
        <div>
          <div
            style={{
              fontFamily: FF_MONO,
              fontSize: 11,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.42)',
              textTransform: 'uppercase',
              marginBottom: 36,
            }}
          >
            Affiliations
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              background: 'rgba(255,255,255,0.1)',
              border: '0.5px solid rgba(255,255,255,0.1)',
            }}
          >
            {affiliations.map((a) => (
              <div
                key={a.code}
                style={{
                  background: '#000',
                  padding: '22px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    flexShrink: 0,
                    border: '0.5px solid rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: FF_SYNE,
                    fontWeight: 800,
                    fontSize: 15,
                    letterSpacing: '0.02em',
                  }}
                >
                  {a.code}
                </div>
                <div>
                  <div style={{ fontFamily: FF_SYNE, fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em' }}>
                    {a.org}
                  </div>
                  <div
                    style={{
                      fontFamily: FF_MONO,
                      fontSize: 10.5,
                      letterSpacing: '0.03em',
                      color: 'rgba(255,255,255,0.45)',
                      marginTop: 5,
                    }}
                  >
                    {a.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

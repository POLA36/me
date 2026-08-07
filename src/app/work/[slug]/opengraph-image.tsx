import { ImageResponse } from 'next/og';
import { projects } from '@/data/projects';
import { AUTHOR_NAME } from '@/lib/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const name = project?.name ?? 'LITAPOLA';
  const domain = project?.domain ?? '';
  const status = project?.status ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#000',
          color: '#fff',
          padding: 64,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 24,
            border: '1px solid rgba(255,255,255,0.18)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span
            style={{
              fontSize: 18,
              letterSpacing: 3,
              color: 'rgba(255,255,255,0.4)',
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
            }}
          >
            {domain}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 128,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1,
              fontFamily: 'sans-serif',
              display: 'flex',
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.55)',
              marginTop: 24,
              fontFamily: 'sans-serif',
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: 2,
              display: 'flex',
            }}
          >
            {status}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 18,
            letterSpacing: 2,
            color: 'rgba(255,255,255,0.4)',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
          }}
        >
          <span>LITAPOLA, {AUTHOR_NAME}</span>
          <span>litapola.org/work/{slug}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

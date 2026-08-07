import { ImageResponse } from 'next/og';
import { AUTHOR_NAME } from '@/lib/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
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

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#fff',
              display: 'flex',
            }}
          />
          <span
            style={{
              fontSize: 20,
              letterSpacing: 4,
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
            }}
          >
            {AUTHOR_NAME}
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 148,
              fontWeight: 800,
              letterSpacing: -4,
              lineHeight: 1,
              fontFamily: 'sans-serif',
              display: 'flex',
            }}
          >
            LITAPOLA
          </div>
          <div
            style={{
              fontSize: 26,
              color: 'rgba(255,255,255,0.65)',
              marginTop: 24,
              maxWidth: 900,
              fontFamily: 'sans-serif',
              fontWeight: 300,
              display: 'flex',
            }}
          >
            Fintech, payments &amp; enterprise systems engineering,
            plus fashion, music, and film on the side.
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
          <span>Somewhere in Africa · 3°52′N 11°31′E</span>
          <span>litapola.org</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

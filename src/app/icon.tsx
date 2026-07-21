import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 1,
            border: '0.5px solid rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              color: '#fff',
              fontSize: 13,
              fontWeight: 900,
              fontFamily: 'sans-serif',
              letterSpacing: '0.5px',
              lineHeight: 1,
            }}
          >
            LP
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

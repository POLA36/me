import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
        }}
      >
        <span
          style={{
            color: '#fff',
            fontSize: 72,
            fontWeight: 900,
            fontFamily: 'sans-serif',
            letterSpacing: '1px',
            lineHeight: 1,
          }}
        >
          LP
        </span>
      </div>
    ),
    { ...size }
  );
}

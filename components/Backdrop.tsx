import React from 'react';
import { CLIPS } from '../constants.tsx';
import { useScrollProgress } from '../lib/motion.ts';

interface BackdropProps {
  clip: keyof typeof CLIPS;
  /* Floor for legibility, not a preference. Copy has to survive whatever
     frame happens to be showing. */
  dim?: number;
}

/* Background layer for a section.

   A standing constraint for anything rendered over one of these: small text
   must be cream, never `lift` or `ember`. Measured against the brightest pixel
   in each clip, the warm accent lands at 3.0-3.3:1 because it shares a hue
   family with the warm lighting in the footage. Cream measures 7.6-8.2:1.
   Accent colour on a backdrop belongs in rules and fills, not in type.

   The footage sits on a taller box than the section and drifts against the
   scroll, so the frame is never static behind moving type. Without a clip it
   falls back to the drifting warm fields, and nothing above it changes. */
const Backdrop: React.FC<BackdropProps> = ({ clip, dim = 0.62 }) => {
  const { src, poster } = CLIPS[clip];
  const ref = useScrollProgress<HTMLDivElement>();

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden bg-void">
      <div className="absolute -inset-y-[12%] inset-x-0 p-slow will-change-transform">
        {src ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={src}
            poster={poster ?? undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          <>
            <div className="absolute inset-0 drift-a" />
            <div className="absolute inset-0 drift-b" />
          </>
        )}
      </div>

      <div className="absolute inset-0" style={{ background: `rgba(13,13,13,${src ? dim : 0.45})` }} />
      <div className="absolute inset-0 grain" />
    </div>
  );
};

export default Backdrop;

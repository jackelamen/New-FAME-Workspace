import React from 'react';
import { CLIPS } from '../constants.tsx';

interface BackdropProps {
  clip: keyof typeof CLIPS;
  /* How far the footage is pushed down behind the type. Copy has to stay
     readable over whatever lands here, so this is a floor, not a preference. */
  dim?: number;
  children?: React.ReactNode;
}

/* Background layer for a section.

   With a clip configured it plays muted, looping, inline, and is marked
   aria-hidden because it carries no information a reader needs.

   Without one it renders the fallback: two slow counter-drifting warm fields
   plus a grain plate. It reads as film rather than as a missing asset, and it
   costs no network request. */
const Backdrop: React.FC<BackdropProps> = ({ clip, dim = 0.62, children }) => {
  const { src, poster } = CLIPS[clip];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-void">
      {src ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
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

      {/* Legibility plate. Footage needs a heavy one because we cannot know
          which frame is showing; the fallback is already dark by construction,
          so it takes a lighter plate and keeps its warmth. Text over either is
          verified against the brightest point the backdrop can reach. */}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(13,13,13,${src ? dim : 0.45})` }}
      />
      <div className="absolute inset-0 grain" />
      {children}
    </div>
  );
};

export default Backdrop;

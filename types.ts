export interface Pillar {
  letter: string;
  name: string;
  line: string;
  detail: string;
}

/* A background clip. `src` is an mp4 URL (self-hosted under /public/video, or a
   stock CDN). Null renders the filmic motion fallback instead, so every section
   is complete with or without footage. */
export interface Clip {
  src: string | null;
  poster?: string | null;
}

export interface Offer {
  index: string;
  title: string;
  detail: string;
}

export interface Step {
  index: string;
  title: string;
  detail: string;
}

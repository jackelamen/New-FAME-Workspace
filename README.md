# FAME Collective

Recruitment site for FAME, a collective of artists and entrepreneurs forming in
Seoul across food, artistry, media and events.

This is **not** a portfolio or a company site. It is a pitch aimed at one
reader: someone who could join. Every section exists to answer an objection
they will have, in the order they will have it.

## Run locally

```bash
npm install
npm run dev
```

`npm run build` compiles the bundle, prerenders the app to static HTML and
injects it into `dist/index.html`.

## The name

**FAME = Food. Artistry. Media. Events.**

The current and only acronym. The earlier one (Fashion, Arts, Music,
Entertainment) is retired and must not appear anywhere. `PILLARS` in
`constants.tsx` is the single source of truth, and here the four letters also
define who is eligible to join.

## The argument

The page order is the pitch, and it should not be shuffled casually:

| Section | Job |
|---|---|
| Hero | The invitation, and that it is forming now |
| Why | Their problem, before ours |
| The idea | Collective, not agency. Ownership, not a roster |
| Members | The four letters as a membership map |
| What you get | Five concrete benefits, then what we ask in return |
| Honestly | Who it is not for, which makes the yes column credible |
| Joining | Four steps, so it reads real rather than aspirational |
| The founding cohort | Scarcity that is true, and the apply CTA |

Copy stays sparse and states results, not process. That is the brand voice.

## Footage

Every background clip is declared in `CLIPS` in `constants.tsx`:

```ts
export const CLIPS: Record<string, Clip> = {
  hero:       { src: null, poster: null },
  tension:    { src: null, poster: null },
  idea:       { src: null, poster: null },
  invitation: { src: null, poster: null },
};
```

Set `src` to an mp4 URL and that section becomes video-led. Leave it `null` and
`Backdrop` renders a filmic fallback (two slow counter-drifting warm fields plus
a grain plate). **No section depends on footage existing**, so clips can land one
at a time with no layout change.

Shooting or sourcing notes:

- 1080p, muted, 8 to 12 seconds, under ~4MB. It loops, so pick a clip whose
  first and last frames are close.
- Self-host under `public/video/` rather than hotlinking a stock CDN. A
  hotlinked clip breaks silently when the host reorganises it.
- Set a `poster` frame too. It is what shows on slow connections and on
  browsers that block autoplay.
- Good subjects, in priority order: a room being built before an event; hands
  working (kitchen pass, camera, lighting desk); a crowd at night, shot wide
  and dark. Avoid anything that reads as stock-cheerful.

**Licensing:** if you use stock, Pexels, Coverr and Mixkit all permit
commercial use without attribution. Check the specific clip's licence before it
goes live, and keep a record of where each came from.

## Design system

| Token | Value | Use |
|---|---|---|
| `void` | `#0D0D0D` | Page ground |
| `pitch` | `#080808` | Recessed sections, application panel |
| `raise` | `#151413` | Lifted surfaces |
| `cream` | `#F5F0E8` | Primary text |
| `ember` | `#C4622D` | Brand accent. Text on plain grounds, and button fills |
| `lift` | `#E08344` | The same hue lifted, for text **over footage** |
| `dim` | `#98958F` | Secondary text on plain grounds only |

Type: **Cormorant Garamond** (display) and **Figtree** (functional).

Rules that keep it working:

- Cormorant is display only. It falls apart below ~1.5rem.
- **Accent colour over a backdrop must be `lift`, never `ember`.** At the
  brightest point a backdrop can reach, flat ember measures 3.0:1 and fails AA.
  `lift` holds 5.2:1 there and 6.9:1 on plain void.
- `dim` is for plain grounds only. Over a backdrop use `cream/75`.
- Solid ember buttons carry `text-void` (4.75:1), never `text-cream` (3.61:1).
- `Backdrop` uses a heavier plate over video than over the fallback, because we
  cannot know which frame of a clip is showing.
- One entrance animation on load. Nothing animates on scroll.
- No em dashes anywhere in the copy.

## Applications

`components/ContactModal.tsx` composes a `mailto:` draft. There is no backend.
For a real intake, replace `handleSubmit` with a POST to a form endpoint and
keep the mailto as the fallback. Worth doing before this link goes out widely:
applications are the entire point of the page.

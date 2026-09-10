# fameentgroup.com

Marketing site for FAME Entertainment Group, a Seoul creative and experiential company.

## Run locally

```bash
npm install
npm run dev
```

No environment variables are required. `npm run build` compiles the client bundle,
renders the app to static HTML, and injects it into `dist/index.html`.

## The name

**FAME = Food. Artistry. Media. Events.**

This is the current and only acronym. An earlier version (Fashion, Arts, Music,
Entertainment) is retired and must not appear anywhere on the site, including in
historical or "founded as" copy.

The order is fixed because it spells the company name. `PILLARS` in
`constants.tsx` is the single source of truth: the hero, the disciplines list and
the footer all derive from it, so the four never drift out of sync.

## Structure

- `index.html` — fonts, meta, JSON-LD
- `index.css` — type utilities and the entrance animation
- `tailwind.config.js` — colour and font tokens
- `constants.tsx` — all site copy and content; edit here, not in components
- `components/` — one file per section

## Design system

| Token | Value | Use |
|---|---|---|
| `void` | `#0D0D0D` | Brand near-black. Page ground. |
| `pitch` | `#080808` | Recessed sections and the enquiry panel. |
| `raise` | `#151413` | Lifted surfaces. Warm-tinted, not neutral grey. |
| `cream` | `#F5F0E8` | Brand off-white. All primary text. |
| `ember` | `#C4622D` | Brand burnt orange. **Sparingly.** |
| `dim` | `#98958F` | Secondary copy. |

Type: **Cormorant Garamond** (display) and **Figtree** (everything functional).
Utilities `u-display`, `u-display-it`, `u-label`, `u-body`, `u-rule` are in `index.css`.

Rules that keep it on-brand:

- Cormorant is display only. It is a high-contrast face and gets weak below ~1.5rem.
- Ember earns its place or it comes out. Currently: the four hero initials (which
  spell FAME), section labels, rules under links, and the enquiry button.
- Every text pair passes WCAG AA on its own ground. Ember on `void` is 4.75:1;
  the enquiry button is `void` on ember at 4.75:1, not cream on ember (3.61:1).
- Layout is built from hairline rules, not cards or boxes.
- One entrance animation on load. Nothing animates on scroll.

## Imagery

The brand is image-forward and the site is built for photography that does not
exist in the repo yet. Nothing ships with stock imagery standing in for FAME's
own work.

- **Hero still** — set `HERO_IMAGE` in `constants.tsx` to a path under `public/`.
  Until then the hero renders a quiet tonal panel.
- **Work** — each entry in `WORK` has `image: null`. Add a file under
  `public/work/` and set the path. The Work section renders as a typographic
  index while every entry is imageless, and switches to the image-led grid as
  soon as any entry has one. The heading changes with it ("What we produce" →
  "Selected work"), so the page never claims a portfolio it is not showing.

Project titles in `WORK` are formats, not named client projects. Replace them
with real titles once client clearances are in hand.

## Enquiry form

`components/ContactModal.tsx` composes a `mailto:` draft. There is no backend.
To wire a real endpoint, replace `handleSubmit` with a POST and keep the mailto
as the fallback.

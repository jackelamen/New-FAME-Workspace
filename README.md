# fameentgroup.com

Marketing site for FAME Entertainment Group, a Seoul-based lifestyle trading house.

## Run locally

```bash
npm install
npm run dev
```

No environment variables are required.

## Structure

- `index.html` — design tokens (Tailwind config + CSS custom rules), fonts, import map
- `constants.tsx` — all site copy and content; edit here, not in components
- `components/` — one file per page section
- `components/SectionHead.tsx` — shared section header, keeps type hierarchy consistent

## Design system

| Token | Value | Use |
|---|---|---|
| `ink` | `#101211` | All body and headline text, dark section backgrounds |
| `paper` | `#F6F5F2` | Page background, text on dark |
| `haze` | `#EAE8E2` | Alternate section background |
| `turq` | `#40E0D0` | Brand accent. **Fills and rules only.** Fails text contrast on light backgrounds |
| `deep` | `#0A5F58` | Accent for text on light backgrounds (accessible turquoise) |
| `muted` | `#5A5F5C` | Secondary text |

Type: **Archivo** (variable width axis) for display, **Newsreader** for reading copy.
Utility classes `u-display`, `u-display-tight`, `u-eyebrow`, `u-read` live in `index.html`.

Rules that keep the page working:
- The hero headline is the only type above ~3.2rem. Section heads use `SectionHead`.
- Turquoise never carries text on light ground. Use `deep` there.
- No label smaller than 13px (`u-eyebrow` sets the floor).
- One entrance animation (`.rise`) on the hero. Nothing else animates on scroll.

## Contact form

`components/ContactModal.tsx` composes a `mailto:` draft. There is no backend.
To wire a real endpoint, replace `handleSubmit` with a POST and keep the mailto
as the fallback.

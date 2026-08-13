# ui_context.md — Look and Feel (v4)

**GL Studio** — light, image-forward, cool blue + navy + gold professional.

**Code folder:** `Gisele-LaRose-V5/site/` · port **8081**

---

## Design goal

- Cool blue mist canvas, deep navy + gold — works with sky blue banners and glossy black-gold logo
- Lots of real project screenshots (no stock-as-work)
- Movement with purpose: cursor follower, scroll reveals, magnetic buttons, image galleries
- Fun and current without looking like a template

**Avoid:** full-page charcoal, Cormorant Garamond, sparse corporate layouts, flat leaf-green chrome.

## Layout width

| Token | Value | Use |
|-------|--------|-----|
| `--max` | `100rem` (~1600px) | Text, cards, header, grids |
| `--gutter` | `clamp(1.25rem, 4vw, 4rem)` | Side padding |
| `.banner` / `.full-bleed` | `100vw` | Background images edge to edge |

Banners sit outside `.container`. Overlay copy goes in `.banner__content` > `.container`.

**Home — What I do:** plain section (no banner image), Primary / Add-on panels.

**Home — Selected work:** `assets/images/banners/sleeping-beauty.jpg` behind Bathroom Busters + Alderleaf. Scaled to 118% width; raised with `margin-top` (not transform). Light blue scrim for type.

**Home — hero:** `ocean-view.jpg` photo banner — **locked** `object-position: center 40%`. Heading + CTAs only (no lead paragraph, no copy card).

**Hero background favorites to remember:** option 1 (soft cream→sage + gold glow) and option 4 (quiet geometric sage band + gold light). Option 2 (coastal mist) was also liked earlier.

---

## Color palette

| Token | Purpose | Value |
|-------|---------|--------|
| `--color-bg` | Page | `#dde8f4` |
| `--color-bg-alt` | Bands | `#cddced` |
| `--color-surface` | Cards | `#eef4fb` |
| `--color-ink` | Text | `#15253a` |
| `--color-muted` | Secondary (still readable) | `#445872` |
| `--color-gold` | Accent / secondary CTAs | `#c9a24a` |
| `--color-gold-bright` | Hover / glow | `#e4c36a` |
| `--color-green` | Primary buttons / deep navy | `#1e3a5f` |
| `--color-teal` | Live-product badge | `#2a5080` |
| `--color-ink-deep` | Footer / dark bands | `#1a3352` |

---

## Typography

| Element | Font |
|---------|------|
| Headlines | **Fraunces** — optical size, weight 600–700 |
| Body, nav, UI | **Outfit** — weight 500–650, body ≥ 1.05rem |

---

## Motion

| Layer | Choice |
|-------|--------|
| Cursor | Forest accent follower (desktop, respects reduced motion) |
| Scroll | Lenis + GSAP ScrollTrigger (CDN) |
| Extra | Magnetic buttons, logo tilt, screenshot cycle |

---

## Logo

Brand originals in `site/assets/brand/` (from `GL Solutions 2026\`).

**Selected:** hero `GL-blue-flat.png` · nav `GL-blue-flat-monogram.png` (GL letters only, transparent).

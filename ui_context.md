# ui_context.md — Look and Feel (v4)

**GL Studio** — light, image-forward, green/earthy coastal professional.

**Code folder:** `Gisele-LaRose-V5/site/` · port **8081**

---

## Design goal

- Cool mist canvas (not yellow cream), rich emerald + gold — works with sky blue banners and green logo
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

**Home — systems section:** `assets/images/banners/sleeping-beauty.jpg` (Sleeping Beauty mountain). Scaled to 118% width for taller coverage; raised with `margin-top` (not transform) so scroll stays stable. Sage scrim for type.

**Home — hero:** trying option 5 — `ocean-view.jpg` as blurred texture + strong wash (not a photo banner).

**Hero background favorites to remember:** option 1 (soft cream→sage + gold glow) and option 4 (quiet geometric sage band + gold light). Option 2 (coastal mist) was also liked earlier.

---

## Color palette

| Token | Purpose | Value |
|-------|---------|--------|
| `--color-bg` | Page | `#e6ebec` |
| `--color-bg-alt` | Bands | `#d8e0e2` |
| `--color-surface` | Cards | `#f1f5f5` |
| `--color-ink` | Text | `#1a2a20` |
| `--color-muted` | Secondary (still readable) | `#4a5a50` |
| `--color-gold` | Accent / secondary CTAs | `#c9a24a` |
| `--color-gold-bright` | Hover / glow | `#e4c36a` |
| `--color-green` | Primary buttons / deep green | `#1f4d3a` |
| `--color-teal` | Live-product badge | `#1f4d3a` |
| `--color-ink-deep` | Footer / dark bands | `#14281f` |

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
| Extra | Magnetic buttons, logo tilt, screenshot cycle, skill marquee |

---

## Logo

Brand originals in `site/assets/brand/` (from `GL Solutions 2026\`).

**Selected (hero + nav):** `GL-Logo-Luxury-Green-Emblem.png`

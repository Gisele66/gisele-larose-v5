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

**Home — Selected work:** `assets/images/banners/sleeping-beauty.jpg` behind Bathroom Busters + Alderleaf on desktop (118% width, `margin-top`, light blue scrim). Mobile: photo is a header band only; BB + Alderleaf cards sit below. **Alderleaf** desktop + phone locked (2026-08-14); tablet stacks full-aspect screenshot (2026-08-21). BB card open for slideshow motion.

## Breakpoints

| Range | Role |
|-------|------|
| ≤520px | Narrow phone — single-column skills/systems |
| ≤767px | Phone — Alderleaf media crop `12rem` (locked 2026-08-14) |
| ≤900px | Phone / small tablet — stacked grids, featured photo band, hamburger |
| 768–1100px | Tablet — Alderleaf stacks copy above full-aspect screenshot (no side-by-side crop) |
| 901–1600px | Tablet mid + landscape (incl. iPad Pro 13" ~1376) — Alderleaf stacks |
| 901–1100px | Tablet mid — hamburger, 2-col skills, BB laptop full-width then phone+copy, shorter hero |
| ≥1101px | Desktop — full multi-column layout |

**Home — hero:** `ocean-view.jpg` photo banner — **locked** `object-position: center 40%`. Name image `gisele-larose-name-2.png` + tagline “Full-stack web development and business solutions built to deliver.” — **locked** (2026-08-21).

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
| Extra | Magnetic buttons, screenshot cycle |

---

## Logo

Brand originals in `site/assets/brand/` (from `GL Solutions 2026\`).

**Selected:** nav at top `GL-blue-flat-monogram.png` · nav on scroll `gisele-larose-solutions-2.png`. Hero name `gisele-larose-name-2.png`. **Nav scroll swap + hero name/tagline locked** (2026-08-21).

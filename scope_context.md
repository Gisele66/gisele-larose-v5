# scope_context.md — What to Touch and What to Leave Alone (v4)

**If it is not in the prompt, do not change it.**

---

## Locked sections

**Status:** `locked` = do not edit. `open` = can still change.

Say **unlock [section]** to set a row back to `open`.

**Revert rule:** A lock is also the revert point. If anything in a locked section goes wrong (accidental edit, failed polish, rollback request), restore it to the **last locked position** — the frozen state as of that row’s current **Locked date** / Notes. Do not invent a new design while reverting.

| Section | Page / file | Status | Locked date | Notes |
|---------|-------------|--------|-------------|-------|
| Bathroom Busters featured card | Home — `site/js/projects.js` bathroom-busters entry; `site/js/main.js` featured render; `site/js/motion.js` gallery cycle; CSS `.project-card--featured`, `.project-cycle-frame`, `.project-cycle`, `.project-card-aside`, `.gallery-row` / `.gallery-shot`; mobile `@media (max-width: 900px)` featured-band + BB card rules in `site/css/theme.css`; assets under `bathroom-busters/` incl. `BB-*.jpg` | **open** | 2026-08-14 (last locked) | Unlocked for phone slideshow motion trial (card flip). Last locked position remains the Aug 14 desktop + mobile layout if revert is needed. |
| Bathroom Busters project modal | Shared modal CSS defaults (`.modal-box` width/padding, `.modal-media` inset matching content, `22rem` cover image) as approved for Bathroom Busters | **locked** | 2026-08-12 | Keep BB modal chrome as the default. Other projects use `[data-modal-project]` overrides only — do not change BB defaults to tweak other modals. |
| Alderleaf.ca card (both columns) | Home — full `#alderleaf` card: left copy (label, title, 3-paragraph claim, tags incl. Lightbox & modals + No build step, View details); right media `site/assets/images/projects/alderleaf.png`; CSS `#alderleaf` plus mobile `#alderleaf` overrides in `site/css/theme.css` `@media (max-width: 900px)` | **locked** | 2026-08-14 | **Revert to this date.** Desktop + phone (≤767) frozen. **Tablet open (2026-08-21):** 768–1100 stacks copy above full-aspect screenshot (`1720/1088`); do not change desktop/phone unless unlocked. |
| Alderleaf.ca project modal | `[data-modal-project="alderleaf"]` media override in `site/css/theme.css`; modal copy/systems from `site/js/projects.js` alderleaf entry | **locked** | 2026-08-13 | Full-height screenshot via `aspect-ratio: 1720 / 1088` + `object-position: center top` so hero nav through phone CTA show. Lower modal copy approved — do not change unless unlocked. |
| Home hero ocean-view placement | `site/css/theme.css` `.hero-bg` — `object-fit: cover`, `object-position: center 40%` | **locked** | 2026-08-13 | Approved crop/framing of `ocean-view.jpg`. Do not change placement unless unlocked. Overlay/readability chrome may still be tuned. |
| Home hero name + tagline | `site/index.html` `.hero-copy`; CSS `.hero-name` / `.hero-name-img` / `.hero-tagline`; asset `site/assets/brand/gisele-larose-name-2.png` | **locked** | 2026-08-21 | **Revert to this date.** Hero name image `gisele-larose-name-2.png`. Tagline: “Full-stack web development and business solutions *built to deliver*.” No large GL logo in hero. Do not change unless unlocked. |
| Sticky nav + scroll logo swap | `#site-header` sticky; `site/js/main.js` `renderHeader` + `initHeaderScroll`; CSS `.logo-img--mark` / `.logo-img--word`, `.site-header.is-scrolled`; assets `GL-blue-flat-monogram.png` + `gisele-larose-solutions-2.png` | **locked** | 2026-08-21 | **Revert to this date.** Sticky header. Top: GL monogram. On scroll (~56px): fade to `gisele-larose-solutions-2.png`, left-aligned to GL, height ~`4.45rem`. Do not change unless unlocked. |

---

## File boundaries

| Area | Rule |
|------|------|
| `Gisele-LaRose-V5/site/` | Active build |
| v1 / v2 / v3 / v4 | Do not edit unless asked |

**Clean code:** When something is replaced, delete the unused CSS/JS/assets it supersedes. See `.cursor/rules/no-dead-code.mdc`.

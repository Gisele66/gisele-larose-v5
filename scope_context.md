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
| Alderleaf.ca card (both columns) | Home — full `#alderleaf` card: left copy (label, title, 3-paragraph claim, tags incl. Lightbox & modals + No build step, View details); right media `site/assets/images/projects/alderleaf.png`; CSS `#alderleaf` plus mobile `#alderleaf` overrides in `site/css/theme.css` `@media (max-width: 900px)` | **locked** | 2026-08-14 | **Revert to this date.** Desktop: both columns frozen; screenshot cover `~30.5rem`, `object-position: center 12%`; padding `2.5rem 1.75rem`. Mobile: screenshot `12rem`; title `1.2rem`; claim `1.05rem`; padding `1.25rem 1.35rem`. Do not change card unless unlocked. |
| Alderleaf.ca project modal | `[data-modal-project="alderleaf"]` media override in `site/css/theme.css`; modal copy/systems from `site/js/projects.js` alderleaf entry | **locked** | 2026-08-13 | Full-height screenshot via `aspect-ratio: 1720 / 1088` + `object-position: center top` so hero nav through phone CTA show. Lower modal copy approved — do not change unless unlocked. |
| Home hero ocean-view placement | `site/css/theme.css` `.hero-bg` — `object-fit: cover`, `object-position: center 40%` | **locked** | 2026-08-13 | Approved crop/framing of `ocean-view.jpg`. Do not change placement unless unlocked. Overlay/readability chrome may still be tuned. |
| Sticky nav + scroll logo swap | `#site-header` sticky; `site/js/main.js` `renderHeader` + `initHeaderScroll`; CSS `.logo-img--mark` / `.logo-img--word`, `.site-header.is-scrolled`; assets `GL-blue-flat-monogram.png` (top) + scroll logo | **open** | 2026-08-20 (last locked) | Unlocked to swap scrolled logo from GL Solutions wordmark to `gisele-larose-solutions.png`. Top of page still uses GL monogram. Last locked Aug 20 remains the revert point. |

---

## File boundaries

| Area | Rule |
|------|------|
| `Gisele-LaRose-V5/site/` | Active build |
| v1 / v2 / v3 / v4 | Do not edit unless asked |

**Clean code:** When something is replaced, delete the unused CSS/JS/assets it supersedes. See `.cursor/rules/no-dead-code.mdc`.

# scope_context.md — What to Touch and What to Leave Alone (v4)

**If it is not in the prompt, do not change it.**

---

## Locked sections

**Status:** `locked` = do not edit. `open` = can still change.

Say **unlock [section]** to set a row back to `open`.

**Revert rule:** If anything in a locked section needs to be undone (accidental edit, failed polish, rollback request), restore that section to its **last locked position** — the frozen state as of the row’s current **Locked date** / Notes. Do not redesign while reverting.

| Section | Page / file | Status | Locked date | Notes |
|---------|-------------|--------|-------------|-------|
| Bathroom Busters featured card | Home — `site/js/projects.js` bathroom-busters entry; `site/js/main.js` featured render; `site/js/motion.js` gallery swipe; CSS `.project-card--featured`, `.project-cycle-frame`, `.project-cycle`, `.project-card-aside`, `.gallery-row` / `.gallery-shot`; assets under `bathroom-busters/` incl. `BB-*.jpg` | **locked** | 2026-08-12 | Laptop mockup + swipe-left mobile slideshow + thumbnails (`BB-Main` lead). Copy: 756 locations claim + stack pills. Card padding `2.5rem 1.75rem`; stack gap `6rem`. Do not change layout, motion, assets, or copy unless unlocked. |
| Bathroom Busters project modal | Shared modal CSS defaults (`.modal-box` width/padding, `.modal-media` inset matching content, `22rem` cover image) as approved for Bathroom Busters | **locked** | 2026-08-12 | Keep BB modal chrome as the default. Other projects use `[data-modal-project]` overrides only — do not change BB defaults to tweak other modals. |
| Alderleaf.ca card (both columns) | Home — full `#alderleaf` card: left copy (label, title, 3-paragraph claim, tags incl. Lightbox & modals + No build step, View details); right media `site/assets/images/projects/alderleaf.png`; CSS `#alderleaf` padding/stretch, `#alderleaf .project-card-media` / img cover (~`30.5rem`, `object-position: center 12%`), `#alderleaf .tag-list` spacing; stack gap `6rem` shared with BB | **locked** | 2026-08-13 | Entire card frozen — both columns. Screenshot ~`1720×1088` (cover, no stretch). Claim: redesign + compositional framing/sizing + popups/lightbox. Card padding matches BB (`2.5rem`). Do not change card unless unlocked. |
| Alderleaf.ca project modal | `[data-modal-project="alderleaf"]` media override in `site/css/theme.css`; modal copy/systems from `site/js/projects.js` alderleaf entry | **locked** | 2026-08-13 | Full-height screenshot via `aspect-ratio: 1720 / 1088` + `object-position: center top` so hero nav through phone CTA show. Lower modal copy approved — do not change unless unlocked. |

---

## File boundaries

| Area | Rule |
|------|------|
| `Gisele-LaRose-V5/site/` | Active build |
| v1 / v2 / v3 / v4 | Do not edit unless asked |

**Clean code:** When something is replaced, delete the unused CSS/JS/assets it supersedes. See `.cursor/rules/no-dead-code.mdc`.

# context.md — Portfolio v5

## Status

Forked from v4 (Aug 13, 2026) for colour / hero atmosphere experiments. **v4 stays at its last committed state** — do not commit v5 work into v4.

**Folder:** `Career-Portfolio/Gisele-LaRose-V5/site/` · **port 8081**

## Rules

- Edit `Gisele-LaRose-V5/site/` only. Do not change v1–v4 unless asked.
- One page/section/task at a time unless the prompt says otherwise.
- **Strict scope:** Do only what the prompt asks. Do not wander. Do not revise, redo, or restyle layout or content that was not explicitly requested. Do not reinvent, infer, or assume extra changes.
- No invented projects, skills, jobs, or metrics.
- Copy: `content_context.md`. Look and feel: `ui_context.md`. Locks: `scope_context.md`.
- **Locked sections are frozen.** Do not edit them unless the prompt says **unlock [section]** or asks for a specific change to that section.
- Light, modern, image-forward — not the dark law-firm palette.
- **Logo files from disk only:** Never audit or install logos from Cursor chat image uploads — they strip alpha. Use OneDrive/project paths. See `Career-Portfolio/.cursor/rules/logo-files-from-disk.mdc`.

## Local preview

```powershell
Set-Location Career-Portfolio\Gisele-LaRose-V5\site
powershell -ExecutionPolicy Bypass -File .\start-local.ps1
```

## Session log

### Aug 11, 2026

- User moved Career-Portfolio into GL Solutions 2026; deleted leftover `Projects/Gisele-LaRose-V2` copy.
- None of v1–v3 were speaking to her. Requested **v4 from scratch**: modern, fresh, professional, movement, cool engaging interactive elements; speak to what she does and showcase work; **v1 information, not v1 dark style**; lots of images; **new GL overlap logo**; keep **cursor follow dot**.
- Built first v4 pass: light cream + gold + teal, Fraunces + Outfit, logo-led hero, marquee, systems split, image-heavy featured work, gold cursor follower, GSAP/Lenis, magnetic buttons.
- Widen layout: content max ~1600px; added full-bleed `.banner` for edge-to-edge background images.
- Systems section uses Survivor `hgBanner2.jpg` as full-width background.
- Added strict-scope rule: do only the asked task; no inferred layout/content changes.
- Reverted banner zoom (`contain`, full frame). Restored project card media to 16rem / featured 22rem so Bathroom Busters is fully visible.
- **Locked:** Bathroom Busters featured card (laptop + swipe-left slideshow + thumbnails).
- **Rule locked:** Logo/brand images must come from disk paths, never Cursor chat uploads (chat re-encodes and strips alpha → false “not transparent”). See `.cursor/rules/logo-files-from-disk.mdc`.

### Aug 12, 2026

- Replaced Bathroom Busters mobile gallery with `BB-*.jpg` screenshots (`BB-Main` lead). Laptop mockup unchanged.
- **Re-locked:** Bathroom Busters featured card — no edits until unlock or an explicit change request.
- Home #2 → Alderleaf.ca (v3 stack). Screenshot content locked (nav/hero/CTAs + photo framing); card chrome around it stays open for polish.
- Expanded Bathroom Busters + Alderleaf employer-facing claim/tags. Unified project-card padding to 1.6rem; subtle Alderleaf media border.
- **Locked both:** Bathroom Busters featured card and Alderleaf.ca card (full sections).

### Aug 13, 2026

- Alderleaf modal: image uses natural `aspect-ratio: 1720 / 1088` so full hero (including phone CTA) shows; lower modal copy unchanged.
- **Locked:** Alderleaf.ca project modal — no edits until unlock or an explicit change request.
- Logo trials: settled on `GL-glossy-black-gold.png` for hero + nav (transparent). Brand folder cleaned of hard-cut transparent exports.
- Hero bg trials: remember **option 1** (cream→sage + gold glow) and **option 4** (geometric sage band + gold). Trying option 5 (blurred ocean as texture).

### Aug 14, 2026

- Mobile Selected work: Sleeping Beauty as a header band; BB card below it; Alderleaf type/screenshot scaled to fit the card.
- **Re-locked:** Bathroom Busters featured card and Alderleaf.ca card (desktop + approved mobile). Last locked date is the revert point.

### Aug 20, 2026

- Sticky nav on `#site-header`; scroll swaps nav monogram → wordmark.
- **Locked:** Sticky nav + scroll logo swap — revert to this date.

### Aug 21, 2026

- **Locked:** Home hero name + tagline (`gisele-larose-name-2.png` + built to deliver).
- **Re-locked:** Sticky nav + scroll logo swap (monogram → `gisele-larose-solutions-2.png`). Both are revert points until a later polish pass.
- Tablet Alderleaf: stack copy above full-aspect screenshot (768–1100); phone ≤767 crop and desktop unchanged.

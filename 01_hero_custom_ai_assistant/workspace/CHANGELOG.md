<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
<!-- NEXT_ENTRY_HERE -->

### 2026-03-15 (latest)
- Fixed CTA button: restored static SVG border (`rectangle-12.svg`) always visible, animated conic-gradient plays on hover on top, SVG fades out during animation
- Fixed "Повысьте эффективность" block position: changed from `bottom-[63px]` to `top-[508px]` for correct desktop placement
- Added `.cta-static-border` opacity transition class and `z-index: 2` on `::before` pseudo-element
- Debug logs added per runtime debug session for interaction verification

### 2026-03-15
- Full responsive rewrite of `src/screens/Home/Home.tsx`: desktop layout (≥1280px) preserved pixel-perfect with `xl:block`, mobile/tablet/laptop uses flex column layout with relative units
- CTA border animation fix in `tailwind.css`: `spin-angle-once` now properly spins conic-gradient once on hover then stops; added `.cta-btn-responsive` class for mobile CTA with same animation
- Nav uses `<nav>` + `<a>` tags for semantics; hidden on small screens, visible at `md:`
- Typewriter hero text scales with responsive `text-[]` utilities from `2rem` to `86px` across breakpoints
- Split into `TypewriterHero` (responsive) and `TypewriterDesktop` (absolute, desktop-only) components

### 2026-03-15
- Added `egg-float` keyframe animation (6s ease-in-out infinite) to the egg image wrapper
- Added `logo-glow-pulse` keyframe animation (2.8s ease-in-out infinite) to the logo glow dot
</changelog>

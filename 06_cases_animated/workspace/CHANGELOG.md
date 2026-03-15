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
### 2026-03-15 — Responsive layout
- Rewrote `Home.tsx`: replaced absolute positioning with CSS Grid `.cases-grid`
- Added responsive grid rules in `tailwind.css` (1-col mobile, 2-col tablet, 4-col desktop via `grid-template-areas`)
- Button converted from absolute `<div>` to semantic `<button>`, centered with flex
- Removed `min-w-[1920px]`; container now uses `max-w-[1200px]` + responsive padding

### 2026-03-15 (earlier)
- Replaced SVG image-based indicators with programmatic `CircleGauge`/`SpeedometerGauge` in `Home.tsx`
- Added per-color inner glow classes (`.card-glow-*`) in `tailwind.css`
- Added button hover/active effects (scale, glow, brightness)
<!-- NEXT_ENTRY_HERE -->
</changelog>

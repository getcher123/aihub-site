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
### [2026-03-15] — Inner glow + responsive layout
- Rewrote `src/screens/Home/Home.tsx` — replaced absolute positioning with CSS Grid (1col mobile, 2col md+)
- Added per-card `box-shadow` inner glow matching each card's border gradient color
- Hover state intensifies glow via `useState` tracking `hoveredId`
- Removed `min-w-[1920px]` fixed width, replaced with fluid `max-w-[1200px]` container
- Title & logo made responsive with Tailwind breakpoint utilities

<!-- NEXT_ENTRY_HERE -->
</changelog>

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
### [2026-03-15] — Responsive layout for Home component
- Converted absolute-positioned layout to CSS Grid for mobile/tablet (`grid-cols-2`, `sm:grid-cols-3`)
- Desktop (`lg:`) retains exact original absolute positioning and `min-w-[1920px]`
- Blocks use `aspect-ratio` on small screens, fixed dimensions on `lg:`
- Title and header image scale fluidly below 1024px
- File: `src/screens/Home/Home.tsx`

### [2026-03-15] — Fix inner glow colors for blocks 2, 4, 6
- Block 2 (small middle): yellow → blue `rgba(3,133,255,...)`
- Block 4 (top-right): blue → red `rgba(255,40,40,...)`
- Block 6 (bottom-right): blue → yellow `rgba(255,212,9,...)`

### [2026-03-15] — Inner glow + hover effects
- Added `shadow-[inset_...]` inner glow to all 6 client blocks in `src/screens/Home/Home.tsx`
- Each block glows in its matching border color (orange, purple, blue, green, yellow)
- Hover intensifies glow via `hover:shadow-[inset_...]` with smooth `transition-shadow duration-300`
- SVG `img` blocks wrapped in `div` containers to support hover/shadow
<!-- NEXT_ENTRY_HERE -->
</changelog>

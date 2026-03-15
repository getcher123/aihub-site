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
### 2026-03-15 — Responsive redesign of Home component
- Rewrote `src/screens/Home/Home.tsx`: replaced fixed 1920px layout with flex-based responsive design
- Removed all absolute pixel positioning; uses Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)
- Form + text stack vertically on mobile, side-by-side on `lg:` breakpoint
- Decorative elements (glow, union bar, egg images) scale proportionally
<!-- NEXT_ENTRY_HERE -->
</changelog>

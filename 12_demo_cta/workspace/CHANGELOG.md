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
### 2026-03-15 — Responsive layout + floating egg
- Rewrote `src/screens/Home/Home.tsx`: replaced `min-w-[1920px]` + absolute px positioning with Flexbox + responsive Tailwind prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- Added `@keyframes egg-float` in `tailwind.css` for a smooth 4s cyclic hover animation on the egg
- Changed CTA from `<div>` to `<button>` for proper semantics and keyboard accessibility
- Egg + text stack vertically on mobile, go side-by-side on `lg:` breakpoint
<!-- NEXT_ENTRY_HERE -->
</changelog>

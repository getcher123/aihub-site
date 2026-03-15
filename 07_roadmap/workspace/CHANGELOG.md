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
### 2026-03-15 — Responsive layout + hover effects
- Converted `Home.tsx` from fixed 1920px absolute layout to dual-layout: `xl:` preserves desktop, `<xl` uses flex/grid
- Added `mobile` prop to all 5 card sections with responsive variants using `sm:`, `md:`, `lg:` Tailwind prefixes
- Hover effect on cards: brighter gradient + green glow shadow via `transition-all duration-300`
- Files: `Home.tsx`, all 5 section components under `src/screens/Home/sections/`
<!-- NEXT_ENTRY_HERE -->
</changelog>

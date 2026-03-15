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
## 2026-03-15
- Updated card hover: gradient flips horizontally and becomes brighter on hover (`tailwind.css`, `Home.tsx`)
- Added `.card-yellow-ltr` / `.card-yellow-rtl` CSS classes for directional gradient flip
- Fixed button hover: added `filter: brightness(1.1)` and stronger shadow to `.btn-demo:hover`
- Cards 1 & 3 use `ltr` class (left-to-right → flips to right-to-left), Card 2 uses `rtl` class
- Fixed yellow icon positioning in all 3 feature blocks (`src/screens/Home/Home.tsx`)
</changelog>

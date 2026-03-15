# Debugging Records & Issue Tracking

*This file is the single source of truth for debugging sessions, issues, and troubleshooting history in this project.*

## Purpose

Records debugging sessions, error patterns, root causes, solutions, and recurring issues. This file enables systematic problem-solving, prevents re-solving the same bugs, and provides context for future debugging efforts. It supports Roo Code's Debug Mode by maintaining a persistent record of diagnostic work.

## When to Update This File

Update this file when:
- Encountering a new error, bug, or unexpected behavior
- Identifying a root cause during investigation
- Applying a fix or workaround (successful or not)
- Noticing a recurring issue pattern
- During systematic debugging sessions (e.g., in Debug Mode)
- Discovering performance issues, edge cases, or race conditions
- After verifying a fix works across relevant scenarios

**Do not** log transient one-liners or obvious typos. Focus on issues requiring investigation or likely to recur.

## Format

Each entry follows this structure:

```
### [YYYY-MM-DD HH:MM] — [Short Issue Title]

**Status:** Open | Investigating | Fixed | Recurring | Won't Fix
**Symptoms:** What went wrong. Error messages, stack traces, reproduction steps.
**Environment:** dependencies, affected files.
**Root Cause:** (if found) What caused it.
**Investigation Steps:**
- Step 1: What was tried, results.
- Step 2: etc.
**Solution:** What fixed it (code changes, config, workaround).
**Prevention:** How to avoid this in future (patterns, tests, docs).
**Related:** Links to DECISIONS.md entries, commits, or tickets.
```

Mark as **Recurring** if the issue returns.

If this file gets corrupted, re-create it. 
CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

---

## Current Issues

### [2026-03-15] — CTA button lost static border + efficiency block mispositioned

**Status:** Investigating
**Symptoms:** Desktop CTA button lost its original SVG outer border (rectangle-12.svg) — only the animated conic-gradient ::before was showing on hover. The "Повысьте эффективность" card shifted from its original position.
**Root Cause:** The SVG border image was always present but the ::before animation approach made it look like the border was replaced. The efficiency block used `bottom-[63px]` instead of `top-[508px]`.
**Solution:** Kept SVG border always visible with `.cta-static-border` class, fades out on hover while gradient animates. Changed block to `top-[508px]`.
**Prevention:** When adding hover animations, preserve the default/static visual state.

<!-- Newest debugging entries first. Closed issues move to "Resolved Issues" below. -->

## Resolved Issues

<!-- Historical debugging records -->

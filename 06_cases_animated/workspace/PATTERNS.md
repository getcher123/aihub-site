# System Patterns & Conventions

*This file is the single source of truth for recurring patterns, conventions, and technical standards in this project.*

## Purpose

Documents the established architecture patterns, coding conventions, and technical standards the project follows. This file exists so the agent (and future sessions) can produce consistent code without re-discovering or re-debating how things are done here.

## When to Update This File

Update this file when:
- A new architectural pattern is introduced or adopted (e.g., repository pattern, event-driven flow)
- A coding convention is established that deviates from language defaults
- A reusable approach is identified and should be applied consistently (error handling, logging, validation)
- A pattern is deprecated or replaced by a better approach
- A new integration point is added that follows (or defines) a standard interface
- File/folder structure conventions change

**Do not** document one-off implementations. Only patterns that should be **replicated** across the codebase belong here.

## Format

Organize patterns by category. Each pattern follows this structure:

```
### [Pattern Name]

**Category:** Architecture | Data Flow | Error Handling | Testing | API Design | File Structure | [Other]
**Status:** Active | Deprecated
**Description:** What the pattern is and when to apply it.
**Implementation:**
[Code example or step-by-step description]
**Rationale:** Why this pattern was chosen.
```

When a pattern is **deprecated** you can either delete it or update its status and note the replacement.

If this file gets corrupted, re-create it. 
CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

---

## Architecture

### SVG Gauge Components
**Category:** Architecture
**Status:** Active
**Description:** Circular progress indicators (percentage donut charts and speedometer gauges) are rendered as inline SVG via React components `CircleGauge` and `SpeedometerGauge` rather than external SVG image files. This allows dynamic values and color theming.
**Rationale:** External SVG images couldn't be aligned/positioned reliably; inline SVG gives full control over arcs, needles, and glow effects.

### Card Glow Classes
**Category:** Architecture
**Status:** Active
**Description:** Each card color theme has a `.card-glow-{color}` CSS class in `tailwind.css` providing `box-shadow: inset` glow, with `:hover` intensification. Colors: purple, red, green, orange, teal, yellow.
**Rationale:** Tailwind arbitrary `box-shadow` with hover transitions is verbose; dedicated utility classes keep JSX readable.

### Responsive Card Grid
**Category:** Architecture
**Status:** Active
**Description:** Cards use a CSS Grid (`.cases-grid`) with named areas. Mobile: 1 column. Tablet (≥640px): 2 columns with wide cards spanning 2. Desktop (≥1140px): 4-column grid with `grid-template-areas` mapping each card to its position.
**Rationale:** Replaces absolute positioning so the layout re-flows at every viewport; named areas make the desktop arrangement explicit and maintainable.

## Data Flow

<!-- Patterns for how data moves through the system -->

## Error Handling

<!-- Standard approaches to errors, validation, and recovery -->

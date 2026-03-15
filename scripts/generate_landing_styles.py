from __future__ import annotations

from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "src" / "styles.css"
SECTION_DIRS = [
    "01_hero_custom_ai_assistant",
    "02_instant_business_results",
    "03_clients_logos",
    "04_services_directions",
    "06_cases_animated",
    "07_roadmap",
    "08_contact_form",
    "09_ai_process_integrations",
    "10_work_process",
    "11_team",
    "12_demo_cta",
    "13_footer_contacts",
]

PREAMBLE = """@import url("https://fonts.googleapis.com/css?family=Geologica:300,400,500,600,700");

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  button,
  input,
  select,
  textarea {
    @apply appearance-none bg-transparent border-0 outline-none;
  }
}

@layer components {
  .all-\\[unset\\] {
    all: unset;
  }
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Geologica", Helvetica, Arial, sans-serif;
}

.glow-button {
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    filter 0.28s ease;
  will-change: transform, box-shadow, filter;
}

.glow-button:active {
  transform: scale(0.98);
}

.glow-button--green:hover,
.glow-button--green:focus-visible,
.cta-btn-wrapper:hover .glow-button--green {
  transform: translateY(-2px) scale(1.03);
  filter: brightness(1.12);
  box-shadow:
    0px 6px 34px rgba(8, 208, 112, 0.58),
    0px 0px 68px rgba(8, 208, 112, 0.32),
    inset 0px 8px 12px rgba(255, 255, 255, 0.34);
}

.glow-button--yellow:hover,
.glow-button--yellow:focus-visible {
  transform: translateY(-2px) scale(1.03);
  filter: brightness(1.1);
  box-shadow:
    0px 6px 34px rgba(255, 212, 9, 0.55),
    0px 0px 68px rgba(255, 212, 9, 0.28),
    inset 0px 8px 12px rgba(255, 255, 255, 0.34);
}

.glow-button--orange:hover,
.glow-button--orange:focus-visible {
  transform: translateY(-2px) scale(1.03);
  filter: brightness(1.1);
  box-shadow:
    0px 6px 34px rgba(254, 138, 4, 0.55),
    0px 0px 68px rgba(254, 138, 4, 0.28),
    inset 0px 8px 12px rgba(255, 255, 255, 0.34);
}

.glow-button--blue:hover,
.glow-button--blue:focus-visible {
  transform: translateY(-2px) scale(1.03);
  filter: brightness(1.12);
  box-shadow:
    0px 6px 34px rgba(3, 133, 255, 0.58),
    0px 0px 68px rgba(3, 133, 255, 0.32),
    inset 0px 8px 12px rgba(255, 255, 255, 0.34);
}
"""


def strip_preamble(text: str) -> str:
    lines = text.splitlines()
    output: list[str] = []
    index = 0
    skip_depth = 0

    while index < len(lines):
      line = lines[index]
      stripped = line.strip()

      if skip_depth:
          skip_depth += line.count("{") - line.count("}")
          index += 1
          continue

      if stripped.startswith("@tailwind "):
          index += 1
          continue

      if stripped.startswith("@import url("):
          index += 1
          continue

      if stripped == "@layer base {" or stripped == "@layer components {":
          skip_depth = 1
          index += 1
          continue

      output.append(line)
      index += 1

    return "\n".join(output).strip()


def main() -> None:
    parts = [PREAMBLE]

    for section_dir in SECTION_DIRS:
        css_path = ROOT / section_dir / "tailwind.css"
        content = strip_preamble(css_path.read_text())
        parts.append(f"/* {section_dir} */\n{content}")

    OUT.write_text("\n\n".join(parts).strip() + "\n")


if __name__ == "__main__":
    main()

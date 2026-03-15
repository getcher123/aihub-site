import fs from "node:fs/promises";
import path from "node:path";

import { chromium } from "playwright";

const URL = "http://127.0.0.1:8000/";
const WIDTHS = [320, 375, 768, 1024, 1440];
const OUT_DIR = path.resolve("tmp", "responsive-audit");

function selectorFor(element) {
  if (!(element instanceof HTMLElement)) return "unknown";
  if (element.id) return `#${element.id}`;

  const parts = [];
  let current = element;
  while (current && current instanceof HTMLElement && parts.length < 4) {
    let part = current.tagName.toLowerCase();
    if (current.classList.length) {
      part += `.${Array.from(current.classList).slice(0, 2).join(".")}`;
    }
    parts.unshift(part);
    current = current.parentElement;
  }

  return parts.join(" > ");
}

await fs.mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const width of WIDTHS) {
  const page = await browser.newPage({ viewport: { width, height: 2400 }, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  const report = await page.evaluate(({ selectorSource }) => {
    const makeSelector = new Function(`${selectorSource}; return selectorFor(arguments[0]);`);
    const viewportWidth = window.innerWidth;
    const sections = Array.from(document.querySelectorAll("main > section")).map((section) => {
      const rect = section.getBoundingClientRect();
      return {
        id: section.id || "no-id",
        left: Math.round(rect.left),
        right: Math.round(rect.right),
        width: Math.round(rect.width),
        clientWidth: section.clientWidth,
        scrollWidth: section.scrollWidth,
      };
    });

    const offenders = Array.from(document.querySelectorAll("body *"))
      .filter((node) => node instanceof HTMLElement)
      .map((node) => {
        const rect = node.getBoundingClientRect();
        const style = getComputedStyle(node);
        const visible =
          rect.width > 0 &&
          rect.height > 0 &&
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          style.opacity !== "0";

        if (!visible) return null;

        const overflowLeft = rect.left < -1;
        const overflowRight = rect.right > viewportWidth + 1;
        if (!overflowLeft && !overflowRight) return null;

        const section = node.closest("section");
        return {
          sectionId: section?.id || "no-section",
          selector: makeSelector(node),
          left: Number(rect.left.toFixed(1)),
          right: Number(rect.right.toFixed(1)),
          width: Number(rect.width.toFixed(1)),
          text: (node.textContent || "").replace(/\s+/g, " ").trim().slice(0, 80),
          position: style.position,
          overflowX: style.overflowX,
        };
      })
      .filter(Boolean)
      .sort((a, b) => Math.max(b.right - viewportWidth, -b.left) - Math.max(a.right - viewportWidth, -a.left))
      .slice(0, 30);

    const buttons = Array.from(document.querySelectorAll("button"))
      .map((button) => {
        const rect = button.getBoundingClientRect();
        const style = getComputedStyle(button);
        return {
          text: (button.textContent || "").replace(/\s+/g, " ").trim(),
          width: Number(rect.width.toFixed(1)),
          sectionId: button.closest("section")?.id || "no-section",
          background: style.backgroundColor,
          boxShadow: style.boxShadow,
          borderRadius: style.borderRadius,
          classes: button.className,
        };
      });

    return {
      viewportWidth,
      documentClientWidth: document.documentElement.clientWidth,
      documentScrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      sections,
      offenders,
      buttons,
    };
  }, { selectorSource: selectorFor.toString() });

  await page.screenshot({ path: path.join(OUT_DIR, `${width}.png`), fullPage: true });
  await fs.writeFile(
    path.join(OUT_DIR, `${width}.json`),
    JSON.stringify(report, null, 2),
    "utf8",
  );

  console.log(`=== ${width}px ===`);
  console.log(JSON.stringify(report, null, 2));
  await page.close();
}

await browser.close();

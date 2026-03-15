const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const sectionDirs = [
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
];

function loadSectionConfig(dir) {
  const configPath = path.join(__dirname, dir, "tailwind.config.js");
  const source = fs.readFileSync(configPath, "utf8");
  const module = { exports: {} };

  vm.runInNewContext(source, { module, exports: module.exports }, { filename: configPath });

  return module.exports;
}

const mergedExtend = {};
const mergedPlugins = [];

for (const dir of sectionDirs) {
  const config = loadSectionConfig(dir);
  const extend = config.theme?.extend ?? {};

  for (const [key, value] of Object.entries(extend)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      mergedExtend[key] = {
        ...(mergedExtend[key] ?? {}),
        ...value,
      };
      continue;
    }

    mergedExtend[key] = value;
  }

  if (Array.isArray(config.plugins)) {
    mergedPlugins.push(...config.plugins);
  }
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    ...sectionDirs.map((dir) => `./${dir}/src/**/*.{html,js,ts,jsx,tsx}`),
  ],
  theme: {
    extend: mergedExtend,
  },
  plugins: mergedPlugins,
};

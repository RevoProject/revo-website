export const translations = {
  en: {
    cta: "RevoLution in streaming",
    tryAlpha: "Try alpha version",
    milestones: "Milestones",
    roadmap: "Roadmap",
    milestone1: "Core streaming engine implementation",
    milestone2: "Web interface and control panel",
    milestone3: "Multi-platform integration",
    milestone4: "Beta release and community testing",
    "rs-item1-title": "Streaming Core",
    "rs-item1-desc": "RTMP, SRT, WebRTC support",
    "rs-item2-title": "Scene Management",
    "rs-item2-desc": "Dynamic scene switching and overlays",
    "rs-item3-title": "Plugin System",
    "rs-item3-desc": "Extensible architecture for custom features",
    "rl-item1-title": "Media Processing",
    "rl-item1-desc": "Low-level video/audio codecs",
    "rl-item2-title": "FFI Bindings",
    "rl-item2-desc": "Native integration for multiple languages",
    "rl-item3-title": "Performance Tools",
    "rl-item3-desc": "Benchmarking and optimization utilities",
    "status-added": "Added",
    "status-in-progress": "In progress",
    "status-future": "Future idea",
    "status-partial": "Partially implemented",
    "filter-all": "All",
    viewOnGitHub: "View on GitHub",
    historyTitle: "History",
    "history-step1-title": "First step — C++ core",
    "history-step1-desc": "Build on C++ code (practical, but I don't like the language — I often get lost in the logic).",
    "history-step2-title": "Second step — Streamlabs / OBS Studio Node",
    "history-step2-desc": "Build for Streamlabs/OBS Studio Node — historically tied to older versions and limited to Windows & macOS.",
    "history-step3-title": "Third step — libobs → revo-lib → Rust",
    "history-step3-desc": "Target official libobs and port via revo-lib to Rust bindings for long-term, cross-platform support."
  },
  pl: {
    cta: "RevoLution w streamingu",
    tryAlpha: "Wypróbuj wersję alpha",
    milestones: "Znaczne osiągnięcia",
    roadmap: "Mapa postępu",
    milestone1: "Implementacja podstawowego silnika streamingu",
    milestone2: "Interfejs webowy i panel sterowania",
    milestone3: "Integracja z wieloma platformami",
    milestone4: "Wydanie beta i testy społecznościowe",
    "rs-item1-title": "Rdzeń Streamingu",
    "rs-item1-desc": "Wsparcie dla RTMP, SRT, WebRTC",
    "rs-item2-title": "Zarządzanie Scenami",
    "rs-item2-desc": "Dynamiczne przełączanie scen i nakładek",
    "rs-item3-title": "System Wtyczek",
    "rs-item3-desc": "Rozszerzalna architektura dla własnych funkcji",
    "rl-item1-title": "Przetwarzanie Mediów",
    "rl-item1-desc": "Nisko-poziomowe kodeki wideo/audio",
    "rl-item2-title": "Bindowania FFI",
    "rl-item2-desc": "Natywna integracja dla wielu języków",
    "rl-item3-title": "Narzędzia Wydajności",
    "rl-item3-desc": "Narzędzia do benchmarkingu i optymalizacji",
    "status-added": "Dodane",
    "status-in-progress": "W trakcie",
    "status-future": "Przyszły pomysł",
    "status-partial": "Częściowo dodane",
    "filter-all": "Wszystkie",
    viewOnGitHub: "Zobacz na GitHub",
    historyTitle: "Historia",
    "history-step1-title": "Pierwszy krok — rdzeń C++",
    "history-step1-desc": "Budowa na kodzie C++ (praktyczne, ale nie podoba mi się ten język — strasznie się gubię w logice).",
    "history-step2-title": "Drugi krok — Streamlabs / OBS Studio Node",
    "history-step2-desc": "Budowa dla Streamlabs/OBS Studio Node — zwykle związana ze starszymi wersjami i dostępną tylko na Windows i macOS.",
    "history-step3-title": "Trzeci krok — libobs → revo-lib → Rust",
    "history-step3-desc": "Port libobs do revo-lib za pomocą bindingów Rust dla długoterminowego, wieloplatformowego wsparcia."
  }
};

export const milestoneItems = [
  { quarter: "Q1 2026", status: "added", textKey: "milestone1" },
  { quarter: "Q2 2026", status: "future", textKey: "milestone2" },
  { quarter: "Q3 2026", status: "future", textKey: "milestone3" },
  { quarter: "Q4 2026", status: "future", textKey: "milestone4" }
];

export const roadmapItems = {
  revostream: [
    { status: "in-progress", titleKey: "rs-item1-title", descKey: "rs-item1-desc" },
    { status: "future", titleKey: "rs-item2-title", descKey: "rs-item2-desc" },
    { status: "future", titleKey: "rs-item3-title", descKey: "rs-item3-desc" }
  ],
  revolib: [
    { status: "in-progress", titleKey: "rl-item1-title", descKey: "rl-item1-desc" },
    { status: "future", titleKey: "rl-item2-title", descKey: "rl-item2-desc" },
    { status: "future", titleKey: "rl-item3-title", descKey: "rl-item3-desc" }
  ]
};

export const statusKeyByStatus = {
  added: "status-added",
  "in-progress": "status-in-progress",
  partial: "status-partial",
  future: "status-future"
};

function translate(lang, key, fallback) {
  const langTable = translations[lang] || translations.en || {};
  if (langTable[key]) return langTable[key];
  if (translations.en && translations.en[key]) return translations.en[key];
  return fallback || key;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderMilestonesHTML(lang = "en") {
  return milestoneItems
    .map(function (item) {
      const statusKey = statusKeyByStatus[item.status] || "status-future";
      return [
        '<div class="timeline-item" data-status="' + escapeHtml(item.status) + '">',
        '<div class="timeline-marker"></div>',
        '<div class="timeline-content">',
        '<div class="timeline-head">',
        '<h3>' + escapeHtml(item.quarter) + '</h3>',
        '<span class="status-badge" data-i18n="' + escapeHtml(statusKey) + '">' + escapeHtml(translate(lang, statusKey)) + '</span>',
        '</div>',
        '<p data-i18n="' + escapeHtml(item.textKey) + '">' + escapeHtml(translate(lang, item.textKey)) + '</p>',
        '</div>',
        '</div>'
      ].join("");
    })
    .join("");
}

export function renderRoadmapHTML(product, lang = "en") {
  const list = roadmapItems[product] || [];
  return list
    .map(function (item) {
      const statusKey = statusKeyByStatus[item.status] || "status-future";
      return [
        '<div class="roadmap-card" data-status="' + escapeHtml(item.status) + '">',
        '<span class="card-status-label" data-i18n="' + escapeHtml(statusKey) + '">' + escapeHtml(translate(lang, statusKey)) + '</span>',
        '<h3 data-i18n="' + escapeHtml(item.titleKey) + '">' + escapeHtml(translate(lang, item.titleKey)) + '</h3>',
        '<p data-i18n="' + escapeHtml(item.descKey) + '">' + escapeHtml(translate(lang, item.descKey)) + '</p>',
        '</div>'
      ].join("");
    })
    .join("");
}
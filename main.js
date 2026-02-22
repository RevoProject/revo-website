import {
  milestoneItems,
  roadmapItems,
  statusKeyByStatus,
  translations
} from "./site-content.js";

let currentLang = "en";

function t(key, fallback) {
  const langTable = translations[currentLang] || translations.en || {};
  if (langTable[key]) return langTable[key];
  if (translations.en && translations.en[key]) return translations.en[key];
  return fallback || key;
}

// Lightweight virtual DOM
function h(tag, props) {
  const children = [];
  for (let i = 2; i < arguments.length; i += 1) {
    const child = arguments[i];
    if (Array.isArray(child)) {
      for (let j = 0; j < child.length; j += 1) {
        children.push(child[j]);
      }
    } else {
      children.push(child);
    }
  }
  return { tag: tag, props: props || {}, children: children };
}

function createNode(vnode) {
  if (vnode === null || vnode === undefined || vnode === false) {
    return document.createTextNode("");
  }
  if (typeof vnode === "string" || typeof vnode === "number") {
    return document.createTextNode(String(vnode));
  }

  const el = document.createElement(vnode.tag);
  const props = vnode.props || {};
  const keys = Object.keys(props);

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const value = props[key];
    if (value === null || value === undefined || value === false) continue;

    if (key === "class") {
      el.className = value;
      continue;
    }

    if (key.slice(0, 2) === "on" && typeof value === "function") {
      el.addEventListener(key.slice(2).toLowerCase(), value);
      continue;
    }

    el.setAttribute(key, String(value));
  }

  const children = vnode.children || [];
  for (let i = 0; i < children.length; i += 1) {
    el.appendChild(createNode(children[i]));
  }

  return el;
}

function mountList(container, vnodes) {
  if (!container) return;
  container.innerHTML = "";
  for (let i = 0; i < vnodes.length; i += 1) {
    container.appendChild(createNode(vnodes[i]));
  }
}

function milestoneVNode(item) {
  const statusKey = statusKeyByStatus[item.status] || "status-future";

  return h(
    "div",
    { class: "timeline-item", "data-status": item.status },
    h("div", { class: "timeline-marker" }),
    h(
      "div",
      { class: "timeline-content" },
      h(
        "div",
        { class: "timeline-head" },
        h("h3", null, item.quarter),
        h("span", { class: "status-badge", "data-i18n": statusKey }, t(statusKey))
      ),
      h("p", { "data-i18n": item.textKey }, t(item.textKey))
    )
  );
}

function roadmapCardVNode(item) {
  const statusKey = statusKeyByStatus[item.status] || "status-future";
  return h(
    "div",
    { class: "roadmap-card", "data-status": item.status },
    h("span", { class: "card-status-label", "data-i18n": statusKey }, t(statusKey)),
    h("h3", { "data-i18n": item.titleKey }, t(item.titleKey)),
    h("p", { "data-i18n": item.descKey }, t(item.descKey))
  );
}

function renderMilestones() {
  const container = document.getElementById("milestones-timeline");
  mountList(
    container,
    milestoneItems.map(function (item) {
      return milestoneVNode(item);
    })
  );
}

function renderRoadmap() {
  const revostreamGrid = document.getElementById("roadmap-grid-revostream");
  const revolibGrid = document.getElementById("roadmap-grid-revolib");

  mountList(
    revostreamGrid,
    roadmapItems.revostream.map(function (item) {
      return roadmapCardVNode(item);
    })
  );

  mountList(
    revolibGrid,
    roadmapItems.revolib.map(function (item) {
      return roadmapCardVNode(item);
    })
  );
}

function applyTranslations(lang) {
  const langTable = translations[lang] || translations.en || {};
  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (langTable[key]) {
      el.textContent = langTable[key];
    }
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyTranslations(lang);

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    const btnLang = btn.getAttribute("data-lang");
    btn.setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
  });

  document.documentElement.lang = lang;
}

function initTabs() {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const targetTab = tab.getAttribute("data-tab");

      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      contents.forEach(function (c) {
        c.classList.remove("active");
      });

      tab.classList.add("active");
      const targetContent = document.querySelector('[data-content="' + targetTab + '"]');
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
}

function initRoadmapFilters() {
  const filterBadges = document.querySelectorAll(".filter-badge");

  function setActiveBadge(activeBtn) {
    filterBadges.forEach(function (b) {
      const isActive = b === activeBtn;
      b.setAttribute("aria-pressed", isActive ? "true" : "false");
      if (isActive) b.classList.add("active");
      else b.classList.remove("active");
    });
  }

  function filterRoadmap(status) {
    const grids = document.querySelectorAll(".roadmap-grid");
    grids.forEach(function (grid) {
      const cards = Array.from(grid.querySelectorAll(".roadmap-card"));
      cards.forEach(function (card) {
        if (status === "all") {
          card.style.display = "";
          return;
        }
        const st = card.getAttribute("data-status");
        card.style.display = st === status ? "" : "none";
      });
    });
  }

  filterBadges.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const status = btn.getAttribute("data-filter");
      const currently = btn.getAttribute("aria-pressed") === "true";
      if (currently) {
        const allBtn = document.querySelector('.filter-badge[data-filter="all"]');
        if (allBtn) setActiveBadge(allBtn);
        filterRoadmap("all");
      } else {
        setActiveBadge(btn);
        filterRoadmap(status);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initTabs();
  renderMilestones();
  renderRoadmap();
  initRoadmapFilters();

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  const savedLang = localStorage.getItem("lang");
  if (savedLang === "pl") {
    setLanguage("pl");
  } else {
    setLanguage("en");
  }
});

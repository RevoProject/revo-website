import { defineConfig } from "vite";
import { renderMilestonesHTML, renderRoadmapHTML } from "./site-content.js";

function staticVirtualDomSections() {
  return {
    name: "static-virtual-dom-sections",
    apply: "build",
    transformIndexHtml(html) {
      return html
        .replace(
          /<div class="timeline" id="milestones-timeline"><\/div>/,
          '<div class="timeline" id="milestones-timeline">' + renderMilestonesHTML("en") + "</div>"
        )
        .replace(
          /<div class="roadmap-grid" id="roadmap-grid-revostream"><\/div>/,
          '<div class="roadmap-grid" id="roadmap-grid-revostream">' + renderRoadmapHTML("revostream", "en") + "</div>"
        )
        .replace(
          /<div class="roadmap-grid" id="roadmap-grid-revolib"><\/div>/,
          '<div class="roadmap-grid" id="roadmap-grid-revolib">' + renderRoadmapHTML("revolib", "en") + "</div>"
        );
    }
  };
}

export default defineConfig({
  plugins: [staticVirtualDomSections()]
});
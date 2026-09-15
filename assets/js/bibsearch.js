import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("bibsearch");
  const category = document.getElementById("publication-category");
  const year = document.getElementById("publication-year");
  const reset = document.getElementById("publication-reset");
  const count = document.getElementById("publication-count");
  const empty = document.getElementById("publication-empty");
  const publications = document.querySelector(".publications");
  if (!search || !category || !year || !publications) return;

  const items = Array.from(publications.querySelectorAll("ol.bibliography > li"), (element) => {
    const metadata = element.querySelector("[data-publication-category]");
    return {
      element,
      category: metadata?.dataset.publicationCategory || "",
      year: metadata?.dataset.publicationYear || "",
      text: element.textContent.toLowerCase(),
    };
  });

  const addOptions = (select, values) => {
    values.forEach((value) => select.add(new Option(value, value)));
  };
  let selectedCategory = "";
  const topicOrder = ["Image Restoration", "Multimodal Machine Learning", "Other"];
  const topics = [...new Set(items.map((item) => item.category).filter(Boolean))];
  const topicRank = (topic) => (topicOrder.includes(topic) ? topicOrder.indexOf(topic) : topicOrder.length);
  topics.sort((a, b) => topicRank(a) - topicRank(b) || a.localeCompare(b));
  topics.forEach((value) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.category = value;
    button.textContent = value;
    button.setAttribute("aria-pressed", "false");
    category.appendChild(button);
  });
  addOptions(year, [...new Set(items.map((item) => item.year).filter(Boolean))].sort((a, b) => Number(b) - Number(a)));

  const filterItems = () => {
    const term = search.value.trim().toLowerCase();
    let visibleCount = 0;
    items.forEach((item) => {
      const matches = (!selectedCategory || item.category === selectedCategory) && (!year.value || item.year === year.value) && item.text.includes(term);
      item.element.classList.toggle("unloaded", !matches);
      if (matches) visibleCount++;
    });

    // Walk backwards so each grouping heading reflects its following list(s).
    const visibleByLevel = new Map();
    Array.from(publications.children).reverse().forEach((element) => {
      if (element.matches("ol.bibliography")) {
        const visible = !!element.querySelector(":scope > li:not(.unloaded)");
        element.classList.toggle("unloaded", !visible);
        for (let level = 1; level <= 6; level++) {
          visibleByLevel.set(level, visibleByLevel.get(level) || visible);
        }
      } else if (element.matches("h1.bibliography, h2.bibliography, h3.bibliography, h4.bibliography, h5.bibliography, h6.bibliography")) {
        const level = Number(element.tagName.substring(1));
        element.classList.toggle("unloaded", !visibleByLevel.get(level));
        for (let nested = level; nested <= 6; nested++) visibleByLevel.set(nested, false);
      }
    });

    if (window.CSS?.highlights) {
      highlightSearchTerm({ search: term, selector: ".publications ol.bibliography > li:not(.unloaded)" });
    }
    count.textContent = `${visibleCount} of ${items.length} publications`;
    empty.hidden = visibleCount !== 0;
    reset.disabled = !search.value && !selectedCategory && !year.value;
    category.querySelectorAll("button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.category === selectedCategory));
    });
  };

  let timeoutId;
  search.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(filterItems, 150);
  });
  category.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    selectedCategory = button.dataset.category;
    filterItems();
  });
  year.addEventListener("change", filterItems);
  reset.addEventListener("click", () => {
    clearTimeout(timeoutId);
    search.value = "";
    selectedCategory = "";
    year.value = "";
    if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);
    filterItems();
  });

  const updateFromHash = () => {
    try {
      search.value = decodeURIComponent(window.location.hash.substring(1));
    } catch {
      search.value = window.location.hash.substring(1);
    }
    filterItems();
  };
  window.addEventListener("hashchange", updateFromHash);
  updateFromHash();
});

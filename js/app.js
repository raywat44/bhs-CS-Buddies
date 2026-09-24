// ============================================================
//  Byte Buddies — Main App Logic
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  let filteredResources = [...RESOURCES];
  let activeFilters = { tags: [], siblings: [], types: [], grade: "" };
  let searchQuery = "";

  // ── DOM refs ─────────────────────────────────────────────
  const searchInput   = document.getElementById("search-input");
  const clearSearch   = document.getElementById("clear-search");
  const resultsGrid   = document.getElementById("results-grid");
  const resultsCount  = document.getElementById("results-count");
  const filterTagsEl  = document.getElementById("filter-tags");
  const noResults     = document.getElementById("no-results");
  const gradeButtons  = document.querySelectorAll(".grade-btn");

  // ── Build tag cloud ───────────────────────────────────────
  const allTags = [...new Set(RESOURCES.flatMap(r => r.tags))].sort();
  allTags.forEach(tag => {
    const btn = document.createElement("button");
    btn.className = "tag-filter-btn";
    btn.textContent = tag;
    btn.style.setProperty("--tag-bg", getTagColor(tag));
    btn.addEventListener("click", () => toggleTagFilter(tag, btn));
    filterTagsEl.appendChild(btn);
  });

  // ── Sibling filter buttons ─────────────────────────────────
  document.querySelectorAll(".sibling-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const sibling = btn.dataset.sibling;
      btn.classList.toggle("active");
      if (activeFilters.siblings.includes(sibling)) {
        activeFilters.siblings = activeFilters.siblings.filter(x => x !== sibling);
      } else {
        activeFilters.siblings.push(sibling);
      }
      applyFilters();
    });
  });

  // ── Type filter buttons ───────────────────────────────────
  document.querySelectorAll(".type-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const t = btn.dataset.type;
      btn.classList.toggle("active");
      if (activeFilters.types.includes(t)) {
        activeFilters.types = activeFilters.types.filter(x => x !== t);
      } else {
        activeFilters.types.push(t);
      }
      applyFilters();
    });
  });

  // ── Grade filter ──────────────────────────────────────────
  gradeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active") && activeFilters.grade === btn.dataset.grade) {
        btn.classList.remove("active");
        activeFilters.grade = "";
      } else {
        gradeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeFilters.grade = btn.dataset.grade;
      }
      applyFilters();
    });
  });

  // ── Search ────────────────────────────────────────────────
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    clearSearch.style.display = searchQuery ? "flex" : "none";
    applyFilters();
  });

  clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearch.style.display = "none";
    applyFilters();
    searchInput.focus();
  });

  document.getElementById("clear-all-filters").addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearch.style.display = "none";
    activeFilters = { tags: [], siblings: [], types: [], grade: "" };
    document.querySelectorAll(".tag-filter-btn.active, .sibling-btn.active, .type-btn.active, .grade-btn.active")
      .forEach(btn => btn.classList.remove("active"));
    applyFilters();
  });

  // ── Core logic ────────────────────────────────────────────
  function toggleTagFilter(tag, btn) {
    btn.classList.toggle("active");
    if (activeFilters.tags.includes(tag)) {
      activeFilters.tags = activeFilters.tags.filter(t => t !== tag);
    } else {
      activeFilters.tags.push(tag);
    }
    applyFilters();
  }

  function applyFilters() {
    filteredResources = RESOURCES.filter(r => {
      // Search
      if (searchQuery) {
        const haystack = [r.name, r.fun_facts, r.nick_name, ...r.tags].join(" ").toLowerCase();
        if (!haystack.includes(searchQuery)) return false;
      }
      // Tags
      if (activeFilters.tags.length > 0) {
        if (!activeFilters.tags.every(t => r.tags.includes(t))) return false;
      }
      // Siblings
      if (activeFilters.siblings.length > 0) {
        if (!activeFilters.siblings.includes(r.sibling)) return false;
      }
      // Types
      if (activeFilters.types.length > 0) {
        if (!activeFilters.types.includes(r.resource_type)) return false;
      }
      // Grade
      if (activeFilters.grade) {
        if (r.grade_level !== activeFilters.grade) return false;
      }
      return true;
    });
    renderResults();
  }

  function renderResults() {
    resultsGrid.innerHTML = "";
    const count = filteredResources.length;
    resultsCount.textContent = `${count} resource${count !== 1 ? "s" : ""} found`;

    if (count === 0) {
      noResults.style.display = "flex";
      resultsGrid.style.display = "none";
      return;
    }

    noResults.style.display = "none";
    resultsGrid.style.display = "grid";

    filteredResources.forEach((r, i) => {
      const card = buildCard(r, i);
      resultsGrid.appendChild(card);
    });
  }

  function buildCard(r, index) {
    const card = document.createElement("article");
    card.className = "resource-card";
    card.style.animationDelay = `${index * 50}ms`;

    const siblingIcon = SIBLING_ICONS[r.sibling] || "📚";
    const typeIcon   = TYPE_ICONS[r.resource_type] || "🔗";

    const tagsHTML = r.tags.map(tag =>
      `<span class="tag" style="background:${getTagColor(tag)}">${tag}</span>`
    ).join("");

    card.innerHTML = `
      <div class="card-header">
        <span class="card-sibling-badge sibling-${r.sibling}">${siblingIcon} ${SIBLING_LABELS[r.sibling]}</span>
        <span class="card-type-icon">${typeIcon}</span>
      </div>
      <h3 class="card-title">${r.name}</h3>
      <p class="card-description">${r.fun_facts}</p>
      <div class="card-tags">${tagsHTML}</div>
      <div class="card-footer">
        <div class="contributor">
          <span class="contributor-avatar">${getInitials(r.nick_name)}</span>
          <span class="contributor-name">${r.nick_name}</span>
        </div>
        <span class="grade-badge">${r.grade_level}</span>
      </div>
      <a href="resource.html?id=${r.id}" class="card-link" aria-label="View ${r.name}">
        <span>View Resource →</span>
      </a>
    `;

    // Clicking anywhere on card except the link itself
    card.addEventListener("click", (e) => {
      if (!e.target.closest(".card-link")) {
        window.location.href = `resource.html?id=${r.id}`;
      }
    });

    return card;
  }

  function getInitials(name) {
    return name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();
  }

  // Initial render
  renderResults();

  // Animate hero on load
  document.querySelector(".hero-title")?.classList.add("loaded");
});

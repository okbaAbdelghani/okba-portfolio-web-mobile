// index.js — Dynamic Rendering, Categorization & Live Action Engine
const projectsContainer = document.querySelector(".projects-grid");

function renderProjects(categoryFilter = "all") {
  // Clear layout tree
  projectsContainer.innerHTML = "";

  const filtered = window.projectsData.filter(project => {
    if (categoryFilter === "all") return true;
    return project.category === categoryFilter;
  });

  filtered.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.style.opacity = 0;
    card.style.transform = "translateY(24px)";

    // Determine if the root project possesses a live external production link
    const hasLiveLink = project.link && project.link !== "#";

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${project.images[0]}" alt="${project.title}" loading="lazy">
      </div>
      <div class="card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-tags">
          ${project.tech.map(t => `<span>${t}</span>`).join("")}
        </div>
        
        <div class="btn-group" style="display: flex; gap: 12px; width: 100%; margin-top: auto;">
          <a href="project.html" class="btn btn-details" style="flex: 1; justify-content: center; margin: 0; padding: 12px;" onclick="localStorage.setItem('projectId', '${project.id}')">
            Architecture <i class="fas fa-arrow-right" style="font-size:0.75rem; margin-left: 4px;"></i>
          </a>
          ${hasLiveLink ? `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn btn-visit" style="flex: 1; justify-content: center; margin: 0; padding: 12px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Visit Live
            </a>
          ` : ''}
        </div>
      </div>
    `;

    projectsContainer.appendChild(card);

    // Staggered presentation loop
    setTimeout(() => {
      card.style.transition = "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 80);
  });
}

function filterProjects(category, buttonEl) {
  // Update control states
  document.querySelectorAll(".filter-chip").forEach(btn => btn.classList.remove("active"));
  buttonEl.classList.add("active");
  
  // Re-run population loop
  renderProjects(category);
}

// Initial execution point
document.addEventListener("DOMContentLoaded", () => {
  if (window.projectsData) {
    renderProjects("all");
  }
});
// index.js — Dynamic Rendering & Categorization Engine
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
        <a href="project.html" class="btn" onclick="localStorage.setItem('projectId', '${project.id}')">
          Explore Architecture <i class="fas fa-arrow-right" style="font-size:0.8rem;"></i>
        </a>
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
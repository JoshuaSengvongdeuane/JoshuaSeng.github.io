function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function filterProjects(category) {
  const projects = document.querySelectorAll('.pic');

  projects.forEach(project => {
    if (project.classList.contains(category) || category === 'all') {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}
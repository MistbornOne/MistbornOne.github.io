// Add additional JavaScript functionality here
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Add active class to current page in navigation
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");

    // Check if current path starts with the link path
    // This handles both exact matches and sub-paths
    if (
      currentPath === linkPath ||
      (currentPath.startsWith(linkPath) &&
        linkPath !== "/" &&
        linkPath.length > 1)
    ) {
      link.classList.add("active");
    }
  });

  // Make sure home link is only active on the actual homepage
  const homeLink = document.querySelector('.main-nav a[href="/"]');
  if (homeLink && currentPath !== "/") {
    homeLink.classList.remove("active");
  }

  // Enhance sticky header with shadow on scroll
  const header = document.querySelector(".sticky-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    });
  }
});

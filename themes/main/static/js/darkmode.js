// Check for saved theme preference or use the default
document.addEventListener("DOMContentLoaded", () => {
  const defaultTheme = document.body.classList.contains("theme-dark")
    ? "dark"
    : "light";
  const savedTheme = localStorage.getItem("theme") || defaultTheme;

  setTheme(savedTheme);

  // Theme toggle button functionality
  const themeToggle = document.getElementById("theme-toggle-btn");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.body.classList.contains("theme-dark")
        ? "dark"
        : "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    if (theme === "dark") {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
    }
    localStorage.setItem("theme", theme);
  }
});

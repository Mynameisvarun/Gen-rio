const preLoader = document.querySelector("#preloader");
const mainContent = document.querySelector("#main-content");

setTimeout(() => {
  preLoader.style.display = "none"; // Hide the preloader
  mainContent.style.display = "block"; // Show the main content
}, 3000);

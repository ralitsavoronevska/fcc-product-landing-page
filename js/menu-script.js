document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector(".mobile-menu-icon");
  const navWrapper = document.querySelector(".header-navigation-wrapper");
  const navLinks = document.querySelectorAll(".header-navigation-wrapper a");
  let header = document.querySelector("#header");

  burger.addEventListener("click", () => {
    const isOpen = navWrapper.classList.toggle("open");
    burger.classList.toggle("active", isOpen);
    burger.setAttribute("aria-expanded", isOpen);
    // Toggle header background when menu is open
    header.classList.toggle("primary-bg", isOpen);
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!navWrapper.contains(e.target) && !burger.contains(e.target)) {
      navWrapper.classList.remove("open");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", false);
      header.classList.remove("primary-bg");
    }
  });

  // Close when clicking a nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navWrapper.classList.remove("open");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", false);
      header.classList.remove("primary-bg");
    });
  });

  // Reset on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 769) {
      navWrapper.classList.remove("open");
      burger.classList.remove("active");
      burger.setAttribute("aria-expanded", false);
      header.classList.remove("primary-bg");
    }
  }); 
});  
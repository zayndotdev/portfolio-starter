const myName = "zayn";

const navToggle = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".nav-overlay");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navbar.classList.remove("open");
  overlay.classList.remove("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("open")) {
      navbar.classList.remove("open");
      overlay.classList.remove("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navItem = document.querySelector(`.nav-link[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          navItem.classList.add("active");
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach((section) => observer.observe(section));
});

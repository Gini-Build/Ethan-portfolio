document.addEventListener("DOMContentLoaded", () => {
  startLoader();
  initHeroVideo();
  initExperience();
  initFadeAnimations();
  initNavbarScroll();
  initProjects();
  initMobileMenu();
});

/* -----------------------------
LOADER
-----------------------------*/

function startLoader() {
  const loader = document.getElementById("loader");
  const percent = document.getElementById("loaderPercent");

  let p = 0;

  const interval = setInterval(() => {
    p += 10;

    if (percent) percent.textContent = p + "%";

    if (p >= 100) {
      clearInterval(interval);

      setTimeout(() => {
        loader.style.display = "none";
      }, 300);
    }
  }, 80);
}

/* -----------------------------
HERO VIDEO
-----------------------------*/

function initHeroVideo() {
  const video = document.querySelector(".hero-video");
  if (!video) return;

  video.src =
    window.innerWidth <= 768
      ? "/images/Hero-Video-Mobile.mp4"
      : "/images/Hero-Video.mp4";

  video.load();
}

/* -----------------------------
EXPERIENCE TIMELINE
-----------------------------*/

function initExperience() {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  items.forEach((item) => observer.observe(item));
}

/* -----------------------------
NAVBAR SCROLL EFFECT
-----------------------------*/

function initNavbarScroll() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".main-header");

    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

function initProjects() {
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  cards.forEach((card) => observer.observe(card));
}

function initFadeAnimations() {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  elements.forEach((el) => observer.observe(el));
}

function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav-menu");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

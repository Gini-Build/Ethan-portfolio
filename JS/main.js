document.addEventListener("DOMContentLoaded", () => {
  startLoader();
  initParticles();
  initSkills();
  initExperience();
  initFadeAnimations();
  initNavbarScroll();
  initProjects();
  //initContactForm();
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
PARTICLES
-----------------------------*/

function initParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  const symbols = [
    "{",
    "}",
    "<",
    ">",
    "=",
    "+",
    "-",
    "/",
    "&&",
    "||",
    "=>",
    "()",
    "[]",
    "<>",
  ];

  for (let i = 0; i < 40; i++) {
    const el = document.createElement("div");

    el.className = "particle";

    el.innerText = symbols[Math.floor(Math.random() * symbols.length)];

    el.style.left = Math.random() * 100 + "%";
    el.style.top = Math.random() * 100 + "%";

    container.appendChild(el);
  }
}

/* -----------------------------
SKILLS ANIMATION
-----------------------------*/

function initSkills() {
  const skills = document.querySelectorAll(".skill-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const item = entry.target;

          const progress = item.querySelector(".skill-progress");
          const percentEl = item.querySelector(".skill-percent");

          const percent = item.getAttribute("data-percent");

          progress.style.width = percent + "%";

          let count = 0;

          const counter = setInterval(() => {
            count++;

            if (percentEl) percentEl.textContent = count + "%";

            if (count >= percent) {
              clearInterval(counter);
            }
          }, 15);

          observer.unobserve(item);
        }
      });
    },
    { threshold: 0.3 },
  );

  skills.forEach((skill) => observer.observe(skill));
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

function initContactForm() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Message sent successfully!");

    form.reset();
  });
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

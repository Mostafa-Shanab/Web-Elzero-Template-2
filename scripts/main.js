"use strict";

// for menu icon in mobile
const menuBtn = document.querySelector("header .toggle");
const navLinks = document.querySelector("nav ul");
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("show");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("show") &&
    !navLinks.contains(e.target) &&
    e.target !== menuBtn
  )
    navLinks.classList.remove("show");
});

// to make the bullets and links active when clicked
const bullets_home = document.querySelectorAll("#home .bullets span");
bullets_home.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    // remove active class from all
    bullets_home.forEach((b) => b.classList.remove("active"));
    // add active to the one clicked
    bullet.classList.add("active");
  });
});

const bullets_about = document.querySelectorAll("#about .bullets span");
bullets_about.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    bullets_about.forEach((b) => b.classList.remove("active"));
    bullet.classList.add("active");
  });
});

// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     links.forEach((b) => b.classList.remove("active"));
//     link.classList.add("active");
//   });
// });

const portfolio_filters = document.querySelectorAll(
  "#portfolio .filter button"
);
portfolio_filters.forEach((button) => {
  button.addEventListener("click", () => {
    portfolio_filters.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
  });
});

// // to make header color change on scrolling to Sections
// const header = document.querySelector("header");

// // observer for sections
// const observer = new IntersectionObserver(
//   ([entry]) => {
//     if (entry.isIntersecting) {
//       // ✅ While Section is under the header
//       header.classList.add("srv-overlay");
//     } else {
//       // ❌ Before Section OR After Section → reset
//       header.classList.remove("srv-overlay");
//     }
//   },
//   {
//     threshold: 0,
//     rootMargin: `-${header.offsetHeight / 2}px 0px -100% 0px`,
//   }
// );
// const services = document.getElementById("services");
// observer.observe(services);

// const portfolio = document.getElementById("portfolio");
// observer.observe(portfolio);

// const about = document.getElementById("about");
// observer.observe(about);

// const pricing = document.getElementById("pricing");
// observer.observe(pricing);

// const contact = document.getElementById("contact");
// observer.observe(contact);

// // observer for backgrounds
// const observer_bg = new IntersectionObserver(
//   ([entry]) => {
//     if (entry.isIntersecting) {
//       header.classList.remove("srv-overlay");
//     } else {
//       header.classList.add("srv-overlay");
//     }
//   },
//   {
//     threshold: 0,
//     rootMargin: `-${header.offsetHeight / 2}px 0px -100% 0px`,
//   }
// );
// const services_bg = document.querySelector("#services .overlay");
// observer_bg.observe(services_bg);

// const home = document.getElementById("home");
// observer_bg.observe(home);

const header = document.querySelector("header");
const sections = document.querySelectorAll("section");

const links = document.querySelectorAll(".nav-links ul a");
// observer to track when header is inside a section
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // remove old classes (keep 'default' if needed)
        header.className = "";
        // add new class for this section
        header.classList.add(`header--${entry.target.id}`);

        //to keep nav links updated to current section
        let current_section = document.querySelector(
          `nav a[href="#${entry.target.id}"]`
        );
        links.forEach((link) => {
          link.classList.remove("active");
        });
        current_section.classList.add("active");
      }
    });
  },
  {
    root: null, // viewport
    threshold: 0,
    // trigger exactly when section top touches the header bottom
    rootMargin: `-${header.offsetHeight / 2}px 0px -100% 0px`,
  }
);

const observer_bg = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // remove old classes (keep 'default' if needed)
        header.className = "";
        // add new class for this section
        header.classList.add("header--diff");
      } else header.className = "header--services";
    });
  },
  {
    root: null, // viewport
    threshold: 0,
    // trigger exactly when section top touches the header bottom
    rootMargin: `-${header.offsetHeight / 2}px 0px -100% 0px`,
  }
);

sections.forEach((sec) => observer.observe(sec));
observer_bg.observe(document.querySelector("#services > .overlay"));
observer_bg.observe(document.querySelector("#portfolio > .overlay"));
observer_bg.observe(document.querySelector("#portfolio .grid"));
observer_bg.observe(document.querySelector("#about > .overlay"));
observer_bg.observe(document.querySelector("#about > .overlay2"));
observer_bg.observe(document.querySelector("#pricing > .overlay"));

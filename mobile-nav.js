let headerBar = document.querySelector(".header__bar");
let mobileNav = document.querySelector(".mobile-nav");
let mobileNavLinks = document.querySelectorAll(".mobile-nav__link");
let bars = document.querySelectorAll(".header__bar span");

let isMobileNavOpen = false;

const setMobileNavState = (open) => {
  isMobileNavOpen = open;

  if (mobileNav) {
    mobileNav.classList.toggle("is-open", open);
  }

  if (headerBar) {
    headerBar.classList.toggle("is-open", open);
    headerBar.setAttribute("aria-expanded", String(open));
  }

  if (bars.length) {
    bars[0].style.transform = open ? "translateY(6px) rotate(45deg)" : "translateY(0) rotate(0)";
    bars[1].style.opacity = open ? "0" : "1";
    bars[2].style.transform = open ? "translateY(-6px) rotate(-45deg)" : "translateY(0) rotate(0)";
  }

  document.body.style.overflow = open ? "hidden" : "";
};

if (headerBar) {
  headerBar.addEventListener("click", () => {
    setMobileNavState(!isMobileNavOpen);
  });
}

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMobileNavState(false);
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    setMobileNavState(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isMobileNavOpen) {
    setMobileNavState(false);
  }
});

setMobileNavState(false);
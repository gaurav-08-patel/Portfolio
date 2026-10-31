let header = document.querySelector(".header");

const updateHeaderState = () => {
  if (!header) return;

  if (window.scrollY > 12) {
   header.classList.add("header--scrolled");
  } else {
   header.classList.remove("header--scrolled");
  }
};

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

// ===============================
// Site Roney Sousa
// Animações e Interações
// ===============================

// Cabeçalho ao rolar a página
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Animação das seções
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach((section) => {
  observer.observe(section);
const menuMobile = document.getElementById("menuMobile");
const menu = document.getElementById("menu");

menuMobile.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

const linksMenu = document.querySelectorAll(".menu a");

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
    });
});
});
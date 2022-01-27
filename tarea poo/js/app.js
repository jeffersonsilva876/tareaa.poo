//MENU
//creacion de menu para moviles mediante javasripc
const menu = document.querySelector(".menu");
//declaramos las varias const para optener  del boton un confimacion
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
//creamos laa funcion Menu  del token
function toggleMenu() {
  // verificamos que optiene el token si un true folse
  menu.classList.toggle("menu_opened");
}
//utilizamos el evento  addEventListerner para ver  que datos optenemos al momento de dar click en nuestro botones
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rooMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);

  if (target) {
    observer.observe(target);
  }
});

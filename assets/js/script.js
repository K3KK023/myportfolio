"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Ottieni tutti gli elementi <li> del carousel
const carouselItems = document.querySelectorAll(".project-item");

// Aggiungi un gestore di eventi a ciascun link
carouselItems.forEach((item) => {
  const links = item.querySelectorAll(".slider-nav a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Impedisce il comportamento predefinito del link
      event.preventDefault();

      // Ottieni l'ID dell'immagine target dall'attributo href
      const targetImageId = link.getAttribute("href").substring(1); // Rimuove il "#" dall'href

      // Trova l'elemento immagine corrispondente
      const targetImage = item.querySelector(`#${targetImageId}`);

      // Calcola la posizione dell'immagine target all'interno del carousel
      const scrollPosition = targetImage.offsetLeft - item.offsetLeft;

      // Scorri l'elemento <li> corrente verso la posizione dell'immagine target
      item.querySelector(".slider").scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    });
  });
});

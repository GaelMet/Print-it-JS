document.addEventListener("DOMContentLoaded", function () {
  const slides = [
    {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];

  let currentIndex = 0;
  const tagLineElement = document.querySelector("#banner p");
  const arrowRight = document.querySelector(".arrow_right");
  const arrowLeft = document.querySelector(".arrow_left");

  // fonction pour mettre à jour le carousel

  function updateCarousel(index) {
    const imageElement = document.querySelector(".banner-img");

    if (imageElement) {
      imageElement.src = `./assets/images/slideshow/${slides[index].image}`;
    }

    tagLineElement.innerHTML = slides[index].tagLine;
  }

  // fonction  pour faire defiler les dots
  function updateDots(index) {
    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("dot_selected");
      } else {
        dot.classList.remove("dot_selected");
      }
    });
  }

  if (arrowRight && arrowLeft) {
    // me permet d'acceder a la verification
    arrowRight.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel(currentIndex);
      updateDots(currentIndex);
    });

    arrowLeft.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel(currentIndex);
      updateDots(currentIndex);
    });

    // Initialiser le carrousel avec le premier slide
    updateCarousel(currentIndex);
    updateDots(currentIndex);
  } else {
    console.error(
      "Les éléments nécessaires au fonctionnement du carrousel sont introuvables."
    );
  }
});

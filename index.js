const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

document
  .getElementById("carousel-btn-next")
  .addEventListener("click", function moveToNextSlide() {
    hideAllSlides();
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition += 1;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
  });

document
  .getElementById("carousel-btn-prev")
  .addEventListener("click", function moveToPrevSlide() {
    hideAllSlides();
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition -= 1;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
  });

function hideAllSlides() {
  for (const slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

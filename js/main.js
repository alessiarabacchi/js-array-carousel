// # HTML ELEMENTS
const slidesContainerEl = document.getElementById("slides-container");
const arrowUpEl = document.querySelector(".arrow-up");
const arrowDownEl = document.querySelector(".arrow-down");

// # ON LOAD
// * definisco l'Array delle slide
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

// * definisco la slide mostrata
let slideIndex = 0;

// * genero le slide
let slidesHtml = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  let activeClass = i == slideIndex ? "active" : "";

  slidesHtml += `<img src="./img/${slide}" class="slide ${activeClass}" alt="slide ${i}">`;
}

slidesContainerEl.innerHTML = slidesHtml;

// # CLICK ARROW UP
arrowUpEl.addEventListener("click", function () {
  //* recupero tutte le slide
  const allSlides = document.getElementsByClassName("slide");

  //* elimino la classe active dalla slide attualmente mostrata
  const oldSlide = allSlides[slideIndex];
  oldSlide.classList.remove("active");

  //* incremento slideIndex
  if (slideIndex >= allSlides.lenght - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }

  //* mostro la nuova slide
  const newSlide = allSlides[slideIndex];
  newSlide - classList.add("active");
});

// # CLICK ARROW DOWN
arrowDownEl.addEventListener("click", function () {
  //* recupero tutte le slide
  const allSlides = document.getElementsByClassName("slide");

  //* elimino la classe active dalla slide attualmente mostrata
  const oldSlide = allSlides[slideIndex];
  oldSlide.classList.remove("active");

  //* decremento slideIndex
  if (slideIndex <= 0) {
    slideIndex = allSlides.length - 1;
  } else {
    slideIndex--;
  }

  //* mostro la nuova slide
  const newSlide = allSlides[slideIndex];
  newSlide - classList.add("active");
});

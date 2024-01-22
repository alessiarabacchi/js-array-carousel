const slidesContainerEl = document.getElementById("slides-container");
const arrowUpEl = document.querySelector(".arrow-up");
const arrowDownEl = document.querySelector(".arrow-down");

// Funzione per aggiornare la slide attiva
function updateSlide(index) {
  const allSlides = document.getElementsByClassName("slide");

  // Elimino la classe active dalla slide attualmente mostrata
  const oldSlide = allSlides[slideIndex];
  oldSlide.classList.remove("active");

  // Mostro la nuova slide
  slideIndex = index;
  const newSlide = allSlides[slideIndex];
  newSlide.classList.add("active");
}

// # ON LOAD
// * definisco l'Array delle slide
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

// * definisco la slide mostrata
let slideIndex = 0;

// * genero le slide
let slidesHtml = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  let activeClass = i === slideIndex ? "active" : "";

  slidesHtml += `<img src="./img/${slide}" class="slide ${activeClass}" alt="slide ${i}">`;
}

slidesContainerEl.innerHTML = slidesHtml;

// # CLICK ARROW UP
arrowUpEl.addEventListener("click", function () {
  const newIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
  updateSlide(newIndex);
});

// # CLICK ARROW DOWN
arrowDownEl.addEventListener("click", function () {
  const newIndex = (slideIndex + 1) % slides.length;
  updateSlide(newIndex);
});

// Impostazione dell'intervallo per lo slider automatico ogni 3 secondi
setInterval(function () {
  const newIndex = (slideIndex + 1) % slides.length;
  updateSlide(newIndex);
}, 3000);

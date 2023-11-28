const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;
let slideWidth = slides.children[0].offsetWidth;
let autoSlideInterval;

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === 0) ? slides.childElementCount / 2 - 1 : slideIndex - 1;
  updateSlidePosition();
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === slides.childElementCount / 2 - 1) ? 0 : slideIndex + 1;
  updateSlidePosition();
  resetAutoSlide();
});

function updateSlidePosition() {
  slideWidth = slides.children[0].offsetWidth;
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function autoSlide() {
  autoSlideInterval = setInterval(() => {
    slideIndex = (slideIndex === slides.childElementCount / 2 - 1) ? 0 : slideIndex + 1;
    updateSlidePosition();
  }, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlide();
}

autoSlide();
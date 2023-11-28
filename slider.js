const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;
let autoSlideInterval;

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === 0) ? slides.childElementCount - 1 : slideIndex - 1;
  updateSlidePosition();
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex === slides.childElementCount - 1) ? 0 : slideIndex + 1;
  updateSlidePosition();
  resetAutoSlide();
});

function updateSlidePosition() {
  const slideWidth = slides.children[0].offsetWidth;
  slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function autoSlide() {
  autoSlideInterval = setInterval(() => {
    slideIndex = (slideIndex === slides.childElementCount - 1) ? 0 : slideIndex + 1;
    updateSlidePosition();
  }, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlide();
}

autoSlide();
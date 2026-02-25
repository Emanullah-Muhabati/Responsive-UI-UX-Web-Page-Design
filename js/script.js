let currentSlide = 1;
let timeLeft = document.querySelectorAll('.time-left');

function changeSlide(inputId, slideNumber) {
  currentSlide = slideNumber;
  const slides = document.querySelectorAll('.image');
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  const item = document.getElementById(inputId);
  item.classList.add('active');
}

setInterval(() => {
  currentSlide += 1;
  if (currentSlide == 5) {
    currentSlide = 1;
  }
  changeSlide(`slide${currentSlide}`, currentSlide);
  // console.log('auto worked');
}, 5000); 

let time = new Date(24, 0, 1, 0, 0, 0);
setInterval(() => {
  h = time.getHours();
  m = time.getMinutes();
  s = time.getSeconds();
  time.setSeconds(s - 1);
  time.setMinutes(m - (s === 0 ? 1 : 0));
  time.setHours(h - (m === 0 && s === 0 ? 1 : 0));
  timeLeft.forEach((timeElement) => {
    timeElement.innerHTML = `${h.toString().padStart(2, '0')} : ${m
      .toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
  });
}, 1000);
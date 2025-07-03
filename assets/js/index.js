const slider = document.getElementById('scroll');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const scrollAmount = 600;

  next.addEventListener('click', () => {
    slider.scrollLeft -= scrollAmount;
  });

  prev.addEventListener('click', () => {
    slider.scrollLeft += scrollAmount;
  });
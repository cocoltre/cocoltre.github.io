const cards = document.querySelectorAll('.reddit-card');
const track = document.querySelector('.reddit-track');
const total = cards.length;
let currentIndex = 0;

// set total counter
document.getElementById('total').textContent = total;

// function to move slider
const updateSlider = () => {
  const cardWidth = cards[0].getBoundingClientRect().width; // actual card width
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  // update current counter
  document.getElementById('current').textContent = currentIndex + 1;
};

// previous button
document.querySelector('.nav-btn.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// next button
document.querySelector('.nav-btn.next').addEventListener('click', () => {
  if (currentIndex < total - 1) {
    currentIndex++;
    updateSlider();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.reddit-track');
  const cards = document.querySelectorAll('.reddit-card');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  if (!track || cards.length === 0) return;

  const currentEl = document.getElementById('current');
  const totalEl = document.getElementById('total');

  let index = 0;
  const total = cards.length;

  totalEl.textContent = total;

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
    currentEl.textContent = index + 1;
  }

  next.addEventListener('click', () => {
    index = (index + 1) % total;
    updateSlider();
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + total) % total;
    updateSlider();
  });
});

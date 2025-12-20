document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.reddit-hero');

  sliders.forEach(slider => {
    const track = slider.querySelector('.reddit-track');
    const cards = slider.querySelectorAll('.reddit-card');
    const prevBtn = slider.querySelector('.nav-btn.prev');
    const nextBtn = slider.querySelector('.nav-btn.next');
    const currentEl = slider.querySelector('.current');
    const totalEl = slider.querySelector('.total');
    
    let currentIndex = 0;
    totalEl.textContent = cards.length;

    const updateSlider = () => {
      const cardWidth = cards[0].getBoundingClientRect().width;
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      currentEl.textContent = currentIndex + 1;
    };

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSlider();
      }
    });

    updateSlider(); // initialize
  });
});

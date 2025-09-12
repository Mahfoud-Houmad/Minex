const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.arrow-left');
  const nextBtn = document.querySelector('.arrow-right');
  const cards = document.querySelectorAll('.carousel-card');

  let index = 0;

  function updateSlider(newIndex) {
    if (newIndex < 0) newIndex = cards.length - 1;
    if (newIndex >= cards.length) newIndex = 0;
    index = newIndex;

    // largeur d'une carte + margin (ajustement pour centrage)
    const cardWidth = cards[0].offsetWidth + 30; 
    const carouselWidth = document.querySelector('.carousel').offsetWidth;

    // calcul du décalage pour centrer la carte active
    const offset = (carouselWidth - cardWidth) / 2;

    track.style.transform = `translateX(${-index * cardWidth + offset}px)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', () => updateSlider(index + 1));
  prevBtn.addEventListener('click', () => updateSlider(index - 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => updateSlider(i)));

  // Initial centering
  window.addEventListener("load", () => updateSlider(0));
  window.addEventListener("resize", () => updateSlider(index));
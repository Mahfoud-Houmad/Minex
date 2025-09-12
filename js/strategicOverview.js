const toggleBtn = document.querySelector('.toggle-btn');
const extraCards = document.querySelectorAll('.cardOver.extra');

toggleBtn.addEventListener('click', () => {
  extraCards.forEach(card => {
    if(card.style.display === 'flex') {
      card.style.display = 'none';
      console.log('its hidden');
    } else {
      card.style.display = 'flex';
      console.log('its hidden');
    }
  });

  toggleBtn.textContent = toggleBtn.textContent === 'Show More' ? 'Show Less' : 'Show More';
});
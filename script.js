// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Work section filtering
const filterPills = document.querySelectorAll('.filter-pill');
const cards = document.querySelectorAll('.card');

filterPills.forEach((pill) => {
  pill.addEventListener('click', () => {
    filterPills.forEach((p) => p.setAttribute('aria-selected', 'false'));
    pill.setAttribute('aria-selected', 'true');

    const filter = pill.dataset.filter;

    cards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !matches);
    });
  });
});

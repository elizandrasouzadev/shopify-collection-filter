const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.product-card');
const countEl = document.getElementById('count');
const emptyState = document.getElementById('emptyState');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    let visible = 0;

    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;

      if (match) {
        card.classList.remove('hidden');
        card.classList.add('fade-in');
        card.addEventListener('animationend', () => card.classList.remove('fade-in'), { once: true });
        visible++;
      } else {
        card.classList.add('hidden');
      }
    });

    countEl.textContent = `${visible} produto${visible !== 1 ? 's' : ''}`;
    emptyState.classList.toggle('visible', visible === 0);
  });
});

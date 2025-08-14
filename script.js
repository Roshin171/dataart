// Year filtering
document.querySelectorAll('.year-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const year = e.target.dataset.filter;
    filterByYear(year);
  });
});

function filterByYear(year) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (year === 'all' || card.dataset.year === year) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Theme toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

const timeline = document.getElementById('timeline');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalCategory = document.getElementById('modalCategory');
const closeModalBtn = document.getElementById('closeModal');

fetch('events.json')
  .then(response => response.json())
  .then(events => {
    renderTimeline(events);
    attachEventHandlers();
  })
  .catch(err => console.error('Error loading events:', err));

function renderTimeline(events) {
  timeline.innerHTML = '';
  events.forEach(event => {
    const article = document.createElement('article');
    article.id = `year-${event.year}`;
    article.innerHTML = `
      <header>
        <p><time datetime="${event.year}">${event.year}</time></p>
        <h2>${event.title}</h2>
      </header>
      <figure>
        <img src="${event.imageURL}" alt="${event.title}" width="100" height="100" />
        <figcaption>${event.title}</figcaption>
      </figure>
      <p>${event.description}</p>
      <button aria-label="Learn more about ${event.title}">Learn More</button>
    `;
    timeline.appendChild(article);
  });
}

function attachEventHandlers() {
  document.querySelectorAll('#timeline button').forEach(button => {
    button.addEventListener('click', () => {
      const article = button.closest('article');
      modalTitle.textContent = article.querySelector('h2').textContent;
      modalImage.src = article.querySelector('img').src;
      modalDescription.textContent = article.querySelectorAll('p')[1].textContent;
      modalCategory.textContent = events.find(e => `year-${e.year}` === article.id)?.category || '';
      modal.removeAttribute('hidden');
    });
  });
}

closeModalBtn.addEventListener('click', () => {
  modal.setAttribute('hidden', '');
});

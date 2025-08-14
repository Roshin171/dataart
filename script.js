// Fetch and render events
fetch('events.json') // or 'data/events.json' if you keep a data folder
  .then(response => response.json())
  .then(events => {
    const timeline = document.getElementById('timeline');

    events.forEach(event => {
      // Create event marker
      const marker = document.createElement('div');
      marker.className = 'event-marker';
      marker.innerText = event.year;

      // Click handler to open modal
      marker.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        const overlay = document.getElementById('modal-overlay');

        modal.querySelector('.modal-title').innerText = event.title;
        modal.querySelector('.modal-description').innerText = event.description;
        modal.querySelector('.modal-image').src = event.imageURL;

        modal.style.display = 'block';
        overlay.style.display = 'block';
      });

      timeline.appendChild(marker);
    });
  })
  .catch(error => console.error('Error loading events:', error));

// Close modal functionality
const modal = document.getElementById('modal');
const overlay = document.getElementById('modal-overlay');
document.getElementById('modal-close').addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});

// Close modal when clicking outside
overlay.addEventListener('click', () => {
  modal.style.display = 'none';
  overlay.style.display = 'none';
});


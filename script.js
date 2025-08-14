// Fetch and render events
fetch('data/events.json')
  .then(response => response.json())
  .then(events => {
    const timeline = document.getElementById('timeline');

    events.forEach((event, index) => {
      // Create event marker
      const marker = document.createElement('div');
      marker.className = 'event-marker';
      marker.innerText = event.year;
      marker.style.cursor = 'pointer';

      // Click handler to open modal
      marker.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        modal.querySelector('.modal-title').innerText = event.title;
        modal.querySelector('.modal-description').innerText = event.description;
        modal.querySelector('.modal-image').src = event.imageURL;
        modal.style.display = 'block';
      });

      timeline.appendChild(marker);
    });
  })
  .catch(error => console.error('Error loading events:', error));

// Close modal functionality
document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

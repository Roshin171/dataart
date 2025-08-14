fetch('events.json')
  .then(response => response.json())
  .then(data => {
    const timeline = document.getElementById('timeline');
    data.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.className = 'event-card';

      const img = document.createElement('img');
      img.src = event.imageURL; // No /images/ prefix since images are in root
      img.alt = event.title;

      const content = document.createElement('div');
      content.className = 'event-content';

      const year = document.createElement('h2');
      year.textContent = event.year;

      const title = document.createElement('h3');
      title.textContent = event.title;

      const desc = document.createElement('p');
      desc.textContent = event.description;

      content.appendChild(year);
      content.appendChild(title);
      content.appendChild(desc);

      eventCard.appendChild(img);
      eventCard.appendChild(content);

      timeline.appendChild(eventCard);
    });
  })
  .catch(error => console.error('Error loading events:', error));


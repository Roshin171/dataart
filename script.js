document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const closeModalBtn = document.getElementById("closeModal");
  const yearLinks = document.getElementById("year-links");

  // Fetch and render events
  fetch("data/events.json")
    .then(res => res.json())
    .then(events => {
      events.forEach(event => {
        // Add year link to navigation
        const yearItem = document.createElement("li");
        yearItem.innerHTML = `<a href="#year-${event.year}">${event.year}</a>`;
        yearLinks.appendChild(yearItem);

        // Create event card
        const article = document.createElement("article");
        article.id = `year-${event.year}`;
        article.innerHTML = `
          <header>
            <time datetime="${event.year}">${event.year}</time>
            <h2>${event.title}</h2>
          </header>
          <figure>
            <img src="${event.imageURL}" alt="${event.title}" width="100" height="100">
          </figure>
          <p>${event.description.substring(0, 80)}...</p>
          <button data-year="${event.year}">Learn More</button>
        `;
        timeline.appendChild(article);
      });
    })
    .catch(err => console.error("Error loading events:", err));

  // Open modal
  timeline.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      const year = e.target.getAttribute("data-year");
      fetch("data/events.json")
        .then(res => res.json())
        .then(events => {
          const event = events.find(ev => ev.year === year);
          modalTitle.textContent = event.title;
          modalImage.src = event.imageURL;
          modalImage.alt = event.title;
          modalDescription.textContent = event.description;
          modal.hidden = false;
        });
    }
  });

  // Close modal
  closeModalBtn.addEventListener("click", () => {
    modal.hidden = true;
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.hidden = true;
  });
});

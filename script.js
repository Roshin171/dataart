document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("closeModal");

  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const modalCategory = document.getElementById("modalCategory");

  // Fetch events from JSON
  fetch("data/events.json")
    .then(response => response.json())
    .then(events => {
      events.forEach(event => {
        const article = document.createElement("article");
        article.id = `year-${event.year}`;
        article.innerHTML = `
          <header>
            <time datetime="${event.year}">${event.year}</time>
            <h2>${event.title}</h2>
          </header>
          <figure>
            <img src="${event.imageURL}" width="100" height="100" alt="${event.title}">
            <figcaption>${event.title}</figcaption>
          </figure>
          <button class="learn-more">Learn More</button>
        `;

        // Learn More button click → open modal
        article.querySelector(".learn-more").addEventListener("click", () => {
          modalTitle.textContent = event.title;
          modalImage.src = event.imageURL;
          modalImage.alt = event.title;
          modalDescription.textContent = event.description;
          modalCategory.textContent = event.category;
          modal.hidden = false;
        });

        timeline.appendChild(article);
      });
    })
    .catch(err => console.error("Error loading events:", err));

  // Close modal
  closeModalBtn.addEventListener("click", () => {
    modal.hidden = true;
  });

  // Close modal on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.hidden = true;
    }
  });
});

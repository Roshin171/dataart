document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");

  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const modalCategory = document.getElementById("modalCategory");

  // Theme toggle
  document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Fetch and render events
  fetch("data/events.json")
    .then(res => res.json())
    .then(events => {
      events.forEach(event => {
        const div = document.createElement("div");
        div.className = "event";
        div.id = `year-${event.year}`;
        div.innerHTML = `
          <h3>${event.year} - ${event.title}</h3>
          <img src="${event.imageURL}" alt="${event.title}">
        `;
        div.addEventListener("click", () => {
          modalTitle.textContent = event.title;
          modalImage.src = event.imageURL;
          modalImage.alt = event.title;
          modalDescription.textContent = event.description;
          modalCategory.textContent = event.category;
          modal.hidden = false;
        });
        timeline.appendChild(div);
      });
    });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.hidden = true;
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.hidden = true;
  });
});


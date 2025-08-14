document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close");

  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const modalYear = document.getElementById("modal-year");

  fetch("events.json")
    .then(res => res.json())
    .then(events => {
      events.forEach(event => {
        const marker = document.createElement("div");
        marker.classList.add("timeline-event");
        marker.innerHTML = `
          <div class="dot"></div>
          <p>${event.year}</p>
        `;

        marker.addEventListener("click", () => {
          modalTitle.textContent = event.title;
          modalImage.src = event.imageURL;
          modalDescription.textContent = event.description;
          modalYear.textContent = `Year: ${event.year}`;
          modal.style.display = "block";
        });

        timeline.appendChild(marker);
      });
    });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

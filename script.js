const data = [
  { year: 1900, img: "1900.jpg", desc: "Fashion in 1900 was elegant with long dresses and elaborate hats.", category: "Vintage" },
  { year: 1910, img: "1910.jpg", desc: "1910 fashion featured flowing gowns and intricate lace.", category: "Classic" },
  { year: 1920, img: "1920.jpg", desc: "The roaring twenties brought flapper dresses and bold styles.", category: "Retro" },
  { year: 1930, img: "1930.jpg", desc: "1930s fashion embraced Hollywood glamour and evening gowns.", category: "Elegant" },
  { year: 1940, img: "1940.jpg", desc: "Practical wartime clothing with tailored suits and knee-length skirts.", category: "Utility" },
  { year: 1977, img: "1977.jpg", desc: "Disco era styles with vibrant colors and bold patterns.", category: "Disco" }
];

// Populate timeline
const timeline = document.getElementById("timeline");
data.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("timeline-item");
  div.innerHTML = `
    <h3 id="year-${item.year}">${item.year}</h3>
    <img src="${item.img}" alt="Fashion of ${item.year}">
    <p>${item.desc}</p>
  `;
  div.addEventListener("click", () => openModal(item));
  timeline.appendChild(div);
});

// Modal
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");

function openModal(item) {
  document.getElementById("modalTitle").textContent = item.year;
  document.getElementById("modalImage").src = item.img;
  document.getElementById("modalImage").alt = `Fashion of ${item.year}`;
  document.getElementById("modalDescription").textContent = item.desc;
  document.getElementById("modalCategory").textContent = item.category;
  modal.hidden = false;
}

closeModalBtn.addEventListener("click", () => {
  modal.hidden = true;
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.hidden = true;
  }
});

// Theme toggle
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀ Light Mode" : "🌙 Dark Mode";
});

// Theme toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Modal logic
const modal = document.getElementById('modal');
const modalText = modal.querySelector('p');
const learnMoreButtons = document.querySelectorAll('#timeline article button');
const closeModalButton = modal.querySelector('button[aria-label="Close modal window"]');

learnMoreButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modal.hidden = false;
    modalText.textContent = `You clicked on year ${1900 + index * 10} (or relevant year). Here you could add more detailed fashion history for that era.`;
  });
});

closeModalButton.addEventListener('click', () => {
  modal.hidden = true;
});


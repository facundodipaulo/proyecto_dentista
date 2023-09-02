const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pages = document.querySelectorAll('.page');
let currentPage = 0;

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updatePage();
  }
});

function updatePage() {
  const totalRotation = 100; // Ajusta este valor según sea necesario
  const separation = 200; // Ajusta este valor según sea necesario

  pages.forEach((page, index) => {
    const offset = index - currentPage;
    const rotation = offset * totalRotation;
    const translateX = offset * separation;
    
    page.style.transform = `perspective(1000px) translateX(${translateX}px) rotateY(${rotation}deg)`;
  });
}

updatePage();

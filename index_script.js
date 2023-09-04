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

document.addEventListener("DOMContentLoaded", () => {


  const contactInfo = document.getElementById("contact-info");
  const emailImg = document.getElementById("email-img");
  const linkedinImg = document.getElementById("linkedin-img");
  const githubImg = document.getElementById("github-img");

  emailImg.addEventListener("click", () => {
    contactInfo.innerHTML = "Se muestra info de email";
    emailImg.style.opacity = 1;
    linkedinImg.style.opacity = 0.15;
    githubImg.style.opacity = 0.15;
  })

  linkedinImg.addEventListener("click", () => {
    contactInfo.innerHTML = "Se muestra info de linkedin";
    linkedinImg.style.opacity = 1;
    emailImg.style.opacity = 0.15;
    githubImg.style.opacity = 0.15;
  })

  githubImg.addEventListener("click", () => {
    contactInfo.innerHTML = "Se muestra info de github";
    githubImg.style.opacity = 1;
    emailImg.style.opacity = 0.15;
    linkedinImg.style.opacity = 0.15;
  })
})

/* document.addEventListener("DOMContentLoaded", () => {
  const contactInfo = document.getElementById("contact-info");
  const imgElements = document.querySelectorAll(".img-contacts");

  imgElements.forEach((img) => {
    img.addEventListener("click", () => {
      const imgId = img.id;
      contactInfo.innerHTML = `Se muestra info de ${imgId}`;
      imgElements.forEach((otherImg) => {
        otherImg.style.opacity = otherImg.id === imgId ? 1 : 0.15;
      });
    });
  });
}); */
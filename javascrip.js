// ================= NAVBAR MOBILE =================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ================= CLOSE MENU WHEN CLICK LINK =================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ================= BACK TO TOP BUTTON =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Pesan berhasil dikirim!");

  contactForm.reset();
});

// ================= GALLERY POPUP =================

const galleryImages = document.querySelectorAll(".gallery-grid img");

// membuat element popup
const popup = document.createElement("div");
popup.classList.add("popup");

document.body.appendChild(popup);

galleryImages.forEach(image => {

  image.addEventListener("click", () => {

    popup.classList.add("open");

    popup.innerHTML = `
      <img src="${image.src}" alt="popup-image">
    `;

  });

});

// klik popup untuk menutup
popup.addEventListener("click", () => {
  popup.classList.remove("open");
});

// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("show");
    }

  });

});
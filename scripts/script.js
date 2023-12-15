const heroShoeImg = document.getElementById("hero-shoe-img");
const selectElement = document.getElementById("sizeSelect");
const heroButton = document.getElementById("heroButton");
const mobileMenuEl = document.getElementById("mobile-menu");
let sections = document.querySelectorAll("section");
let lastScrollTop = 0;
const currentScrollTop = window.scrollY;
let selectedSize = "";

function toggleMenu() {
  mobileMenuEl.classList.toggle("hidden");

  const heroSection = document.getElementById("hero-section");

  if (mobileMenuEl.classList.contains("hidden")) {
    heroSection.style.paddingTop = "80px";
  } else {
    heroSection.style.paddingTop = "40px";
  }
}

document.addEventListener("scroll", function scrollHeroShoeImg() {
  let elementTop = heroShoeImg.getBoundingClientRect().top;
  let rotation = Math.max(20, 600 - elementTop);
  heroShoeImg.style.transform = `rotateY(${rotation}deg)`;
});

selectElement.addEventListener("change", function () {
  selectedSize = selectElement.value;
});

heroButton.addEventListener("click", function () {
  sendMessage("Nike Air Max Plus", selectedSize);
});

function sendMessage(name, selectedSize = undefined) {
  let phoneNumber = "+2348105729893";
  let message;

  if (selectedSize === undefined) {
    message = encodeURIComponent(
      `Hello Urban Shoes 👋, I want to buy ${name} shoe.`
    );
  } else {
    message = encodeURIComponent(
      `Hello Urban Shoes 👋, I want to buy ${name} shoe, of size ${selectedSize}.`
    );
  }

  let whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappLink, "_blank");
}

function checkFade() {
  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    sections.forEach(function (section) {
      let elementTop = section.getBoundingClientRect().top;

      if (elementTop < window.innerHeight) {
        section.classList.add("fade-in");
      }
    });
  } else {
    // Scrolling up
    sections.forEach(function (section) {
      let elementTop = section.getBoundingClientRect().top;

      if (elementTop < window.innerHeight / 2) {
        section.classList.add("fade-in");
      } else {
        section.classList.remove("fade-in");
      }
    });
  }

  lastScrollTop = currentScrollTop;
}

checkFade();
window.addEventListener("scroll", function () {
  checkFade();
});

const text = ["Urban Soles"];
let charIndex = 0;

function type() {
  const typingText = document.getElementById("typewriter");
  const currentText = text[0];
  typingText.innerHTML = currentText.substring(0, charIndex + 1);

  charIndex++;

  if (charIndex < currentText.length) {
    setTimeout(type, 200);
  } else {
    charIndex = 0;
    setTimeout(type, 400);
  }
}
type();

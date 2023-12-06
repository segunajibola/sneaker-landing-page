const heroShoeImg = document.getElementById("hero-shoe-img");
const selectElement = document.getElementById("sizeSelect");
const heroButton = document.getElementById("heroButton");
let sections = document.querySelectorAll("section");
let lastScrollTop = 0;
const currentScrollTop = window.scrollY;
let selectedSize = "";

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
  let phoneNumber = "+2348086907425";
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

const testimonialCard = document.getElementById("testimonials-card");
const indicatorsContainer = document.getElementById("indicators");
let currentTestimonialIndex = 0;

const testimonialsData = [
  {
    name: "John Doe",
    title: "CEO, Company XYZ",
    message:
      "Lddorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut quam vel risus faucibus facilisis vitae id lorem.",
    image: "images/profile-pic.jpg",
  },
  {
    name: "John Lee",
    title: "CEO, Company ABC",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut quam vel risus faucibus facilisis vitae id lorem.",
    image: "images/profile-pic.jpg",
  },
];

function displayTestimonial(index) {
  const testimonial = testimonialsData[index];
  testimonialCard.innerHTML = `<div>
      <img src="${testimonial.image}" alt="${testimonial.name}">
            <div>
              <p class="testimonials-name">${testimonial.name}</p>
              <p class="testimonials-title">${testimonial.title}</p>
            </div>
          </div>
          <p>
          ${testimonial.message}
          </p>
  `;
  updateIndicators(index);
}

function nextTestimonial() {
  currentTestimonialIndex =
    (currentTestimonialIndex + 1) % testimonialsData.length;
  displayTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonialsData.length) %
    testimonialsData.length;
  displayTestimonial(currentTestimonialIndex);
}

function autoSwipeRight() {
  nextTestimonial();
}

function updateIndicators(activeIndex) {
  indicatorsContainer.innerHTML = "";
  for (let i = 0; i < testimonialsData.length; i++) {
    const indicatorDot = document.createElement("div");
    indicatorDot.classList.add("indicator-dot");
    if (i === activeIndex) {
      indicatorDot.classList.add("active-indicator");
    }
    indicatorDot.addEventListener("click", function () {
      displayTestimonial(i);
    });

    indicatorsContainer.appendChild(indicatorDot);
  }
}

const intervalId = setInterval(autoSwipeRight, 5000);

displayTestimonial(currentTestimonialIndex);

document
  .querySelector(".navigation-buttons")
  .addEventListener("click", function () {
    clearInterval(intervalId);
  });

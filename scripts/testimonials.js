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

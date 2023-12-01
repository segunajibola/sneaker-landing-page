document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll("section");
  var lastScrollTop = 0;

  function checkFade() {
    var currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      sections.forEach(function (section) {
        var elementTop = section.getBoundingClientRect().top;

        if (elementTop < window.innerHeight) {
          section.classList.add("fade-in");
        }
      });
    } else {
      // Scrolling up
      sections.forEach(function (section) {
        var elementTop = section.getBoundingClientRect().top;

        if (elementTop < window.innerHeight / 2) {
          section.classList.add("fade-in");
        } else {
          section.classList.remove("fade-in");
        }
      });
    }

    lastScrollTop = currentScrollTop;
  }

  // Initial check
  checkFade();

  // Check on scroll
  window.addEventListener("scroll", function () {
    checkFade();
  });

  const text = ["Nike Air Max Plus"];
  let charIndex = 0;

  function type() {
    const typingText = document.getElementById("typewriter");
    const currentText = text[0];
    typingText.innerHTML = currentText.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex < currentText.length) {
      setTimeout(type, 200);
    } else {
      charIndex = 0
      setTimeout(type, 400);
    }
  }
  type();
});

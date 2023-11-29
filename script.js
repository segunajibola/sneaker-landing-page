document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section');
    var lastScrollTop = 0;

    function checkFade() {
        var currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            sections.forEach(function (section) {
                var elementTop = section.getBoundingClientRect().top;

                if (elementTop < window.innerHeight) {
                    section.classList.add('fade-in');
                }
            });
        } else {
            // Scrolling up
            sections.forEach(function (section) {
                var elementTop = section.getBoundingClientRect().top;

                if (elementTop < window.innerHeight / 2) {
                    section.classList.add('fade-in');
                } else {
                    section.classList.remove('fade-in');
                }
            });
        }

        lastScrollTop = currentScrollTop;
    }

    // Initial check
    checkFade();

    // Check on scroll
    window.addEventListener('scroll', function () {
        checkFade();
    });

    const textArray = ["Hello, World!", "Welcome to my website.", "Enjoy your visit!"];
    let index = 0; // Index to track the current string in the array
    let charIndex = 0; // Index to track the current character in the string

    function type() {
        const typingText = document.getElementById('typewriter');
        const currentText = textArray[index];
        typingText.innerHTML = currentText.substring(0, charIndex + 1);

        charIndex++;

        // Check if the current string is fully typed
        if (charIndex < currentText.length) {
            setTimeout(type, 100); // Type the next character after a delay
        } else {
            // Move to the next string in the array after a longer delay
            setTimeout(() => {
                index++;
                charIndex = 0;

                // Loop back to the first string if all strings are typed
                if (index === textArray.length) {
                    index = 0;
                }

                // Start typing the next string
                type();
            }, 2000);
        }
    }

    // Start the typing effect when the page loads
    type()

});
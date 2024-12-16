let slideIndex = 1; // Start with the first slide
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail (dot) controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    // Handle out-of-bounds `slideIndex`
    if (n > slides.length) {
        slideIndex = 1; // Loop back to the first slide
    }
    if (n < 1) {
        slideIndex = slides.length; // Loop to the last slide
    }

    // Hide all slides and remove "active" class from dots
    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    // Show the current slide and add the "active" class to its dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}
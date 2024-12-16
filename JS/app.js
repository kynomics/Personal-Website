const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
})

// JavaScript to control the slideshow
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.jobSlideShow li');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    // Initial slide display
    showSlide(slideIndex);

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    const lists = document.querySelectorAll('.assignment_8 ol'); // Select all ordered lists in assignment_8

    lists.forEach((list) => {
        let index = 0;
        const items = list.querySelectorAll('li');
        const totalItems = items.length;

        function showItem(idx) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === idx);
            });
        }

        function nextItem() {
            index = (index + 1) % totalItems;
            showItem(index);
        }

        // Initial display of the first item
        showItem(index);

        // Change item every 5 seconds
        setInterval(nextItem, 5000);
    });
});
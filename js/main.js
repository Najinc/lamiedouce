// Carrousel
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('default-carousel');
    const items = carousel.querySelectorAll('[data-carousel-item]');
    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    let currentIndex = 0;

    function showSlide(index) {
        items.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
        });
        indicators.forEach((indicator, i) => {
            indicator.setAttribute('aria-current', i === index);
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Auto slide
    setInterval(showNextSlide, 5000); // Change every 5 seconds

    // Initialize first slide
    showSlide(currentIndex);
});

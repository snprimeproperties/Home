let currentSlide = 0;

function showSlide(index) {
    const carouselSlide = document.getElementById('carouselSlide');
    carouselSlide.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % 2;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + 2) % 2;
    showSlide(currentSlide);
}

setInterval(nextSlide, 10000);

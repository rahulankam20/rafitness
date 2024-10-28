const slides = document.querySelectorAll(".slide");
let circles = document.querySelectorAll(".circle");
let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(${-100 * index}%)`;

    circles.forEach((circle, i) => {
        if (i === index) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

function currentSlide(index) {
    showSlide(index);
    resetInterval();
}

showSlide(0);

slideInterval = setInterval(nextSlide, 5000);


document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
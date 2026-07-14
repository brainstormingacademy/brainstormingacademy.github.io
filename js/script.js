const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
// Back to Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// Hero Image Slideshow

const slides = document.querySelectorAll(".hero-image .slide");
const dots = document.querySelectorAll(".hero-dots .dot");

if (slides.length > 0 && dots.length > 0) {

    let currentSlide = 0;
    let slideInterval;

    // Show a specific slide
    function showSlide(index) {

        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active");

        currentSlide = index;

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    // Show the next slide
    function showNextSlide() {

        let next = (currentSlide + 1) % slides.length;
        showSlide(next);

    }

    // Restart the automatic slideshow
    function startSlideshow() {

        clearInterval(slideInterval);
        slideInterval = setInterval(showNextSlide, 4000);

    }

    // Make dots clickable
    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);
            startSlideshow();

        });

    });

    // Start automatic slideshow
    startSlideshow();

}
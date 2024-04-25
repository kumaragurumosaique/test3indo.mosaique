/*!
=========================================================
* Creative Studio Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 

// JavaScript to handle slideshow and background image update
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active"); // Remove active class from all dots
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active"); // Add active class to the dot corresponding to the current slide

    var backgroundImage = slides[slideIndex - 1].style.backgroundImage;
    document.querySelector('.header').style.backgroundImage = backgroundImage;

    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function currentSlide(n) {
    showSlides(slideIndex = n); // Show the slide corresponding to the clicked dot
}



//Testimonial Slider
let test_slideIndex = 1;
    test_showSlides(test_slideIndex);

    function test_currentSlide(n) {
        test_showSlides(test_slideIndex = n);
    }

    function test_showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("test-slide");
        let dots = document.getElementsByClassName("test-dot");
        if (n > slides.length) {
            test_slideIndex = 1
        }
        if (n < 1) {
            test_slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[test_slideIndex - 1].style.display = "block";
        dots[test_slideIndex - 1].className += " active";
    }

    // Automatic slideshow
    let test_slideInterval = setInterval(test_nextSlide, 3000); // Change slide every 3 seconds

    function test_nextSlide() {
        test_showSlides(test_slideIndex += 1);
    }

    // Pause slideshow when hovering over carousel
    let carousel = document.querySelector('.test-carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(test_slideInterval);
    });

    // Resume slideshow when mouse leaves carousel
    carousel.addEventListener('mouseleave', () => {
        test_slideInterval = setInterval(test_nextSlide, 2000);
    });

    function countWithSpeed() {
        let initialSpeed = 200; // Initial speed in milliseconds
        let speedIncrement = 100; // Speed increment in milliseconds
    
        function displayCount(elementId, count) {
            document.getElementById(elementId).textContent = count;
        }
    
        function startCounting(elementId, maxCount, speed) {
            let count = 0;
            let interval = setInterval(() => {
                count++;
                if (count > maxCount) {
                    count = 0; // Restart count if it exceeds the maximum number
                }
                displayCount(elementId, count);
            }, speed);
    
            // Increase speed gradually
            setInterval(() => {
                clearInterval(interval);
                speed -= speedIncrement;
                // Ensure speed doesn't go below 100ms
                speed = Math.max(speed, 900);
                interval = setInterval(() => {
                    count++;
                    if (count > maxCount) {
                        count = 0; // Restart count if it exceeds the maximum number
                    }
                    displayCount(elementId, count);
                }, speed);
            }, 10000); // Increase speed every 10 seconds
        }
    
        // Start counting for each div with respective max counts and initial speeds
        startCounting('count1', 50, initialSpeed);
        startCounting('count2', 100, initialSpeed);
        startCounting('count3', 75, initialSpeed);
        startCounting('count4', 150, initialSpeed);
    }
    
    // Call the function to start counting
    countWithSpeed();
//Counter
$(document).ready(function() {

    $('.counter').each(function () {
$(this).prop('Counter',0).animate({
    Counter: $(this).text()
}, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
        $(this).text(Math.ceil(now));
    }
});
}); 

});  


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});// ScrollReveal configuration
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  reset: true, // Optional: Allows animations to trigger when elements come into view again
};

// Header section animations
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOptions,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOptions,
  delay: 1000,
});

// Steps section animations
ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOptions,
  interval: 500,
});

// Service section animations
ScrollReveal().reveal(".service__image img", {
  ...scrollRevealOptions,
  origin: "left",
});
ScrollReveal().reveal(".service__content .section__subheader", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".service__content .section__header", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOptions,
  delay: 1500,
  interval: 500,
});

// Experience section animations
ScrollReveal().reveal(".experience__card", {
  duration: 1000,
  interval: 500,
});

// Download section animations
ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOptions,
  origin: "right",
});
ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".download__content p", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".download__links", {
  ...scrollRevealOptions,
  delay: 1500,
});

// Review section animations
ScrollReveal().reveal(".google-review", {
  ...scrollRevealOptions,
  delay: 500,
});
// Footer section animations
ScrollReveal().reveal("footer .footer-content", {
  ...scrollRevealOptions,
  origin: "left",
  interval: 300,
});

ScrollReveal().reveal("footer .bottom-bar", {
  ...scrollRevealOptions,
  origin: "bottom",
  delay: 500,
});

// Google Reviews Section
ScrollReveal().reveal('.review', {
  origin: 'bottom',
  delay: 300
});
// Initialize ScrollReveal
ScrollReveal().reveal('.reveal', {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  reset: true
});

// Existing animations
ScrollReveal().reveal('header .header__content', {
  origin: 'bottom',
  delay: 300
});

ScrollReveal().reveal('.container-imagess', {
  origin: 'top',
  delay: 300
});

ScrollReveal().reveal('.sliders', {
  origin: 'bottom',
  delay: 300
});

ScrollReveal().reveal('.card-container', {
  origin: 'bottom',
  interval: 200,
  delay: 300
});

ScrollReveal().reveal('.steps__card', {
  origin: 'bottom',
  interval: 200,
  delay: 300
});

ScrollReveal().reveal('.service__list li', {
  origin: 'bottom',
  interval: 200,
  delay: 300
});

ScrollReveal().reveal('.experience__card', {
  origin: 'bottom',
  interval: 200,
  delay: 300
});

ScrollReveal().reveal('.download__grid', {
  origin: 'bottom',
  delay: 300
});

ScrollReveal().reveal('footer .footer-content', {
  origin: 'left',
  interval: 200,
  delay: 300
});

ScrollReveal().reveal('footer .bottom-bar', {
  origin: 'bottom',
  delay: 500
});

// Car cards animation
ScrollReveal().reveal('.cardings', {
  origin: 'bottom',
  distance: '30px',
  duration: 1000,
  interval: 200,
  delay: 300
});

// Google Reviews Section
ScrollReveal().reveal('.review', {
  origin: 'bottom',
  delay: 300
});
ScrollReveal().reveal('.welcome-section', {
  origin: 'top',
  distance: '30px',
  duration: 1000,
  delay: 300,
  reset: true
});
// Initialize ScrollReveal
ScrollReveal().reveal('.contact-section', {
  origin: 'bottom',
  distance: '30px',
  duration: 1000,
  delay: 300,
  reset: true
});

ScrollReveal().reveal('.contact-body', {
  origin: 'bottom',
  distance: '30px',
  duration: 1000,
  delay: 300,
  reset: true
});

// Existing animations
ScrollReveal().reveal('.welcome-section', {
  origin: 'top',
  distance: '30px',
  duration: 1000,
  delay: 300,
  reset: true
});

ScrollReveal().reveal('.container-imagess', {
  origin: 'top',
  delay: 300
});

ScrollReveal().reveal('.sliders', {
  origin: 'bottom',
  delay: 300
});

ScrollReveal().reveal('.card-container', {
  origin: 'bottom',
  interval: 200,
  delay: 300
});

ScrollReveal().reveal('.steps__card', {
  origin: 'bottom',
  interval: 200,
  delay: 300
});

ScrollReveal().reveal('.service__list li', {
  origin: 'bottom',
  interval: 200,
  delay: 300
});

ScrollReveal().reveal('.experience__card', {
  origin: 'bottom',
  interval: 200,
  delay: 300
});

ScrollReveal().reveal('.download__grid', {
  origin: 'bottom',
  delay: 300
});

ScrollReveal().reveal('footer .footer-content', {
  origin: 'left',
  interval: 200,
  delay: 300
});

ScrollReveal().reveal('footer .bottom-bar', {
  origin: 'bottom',
  delay: 500
});

// Car cards animation
ScrollReveal().reveal('.cardings', {
  origin: 'bottom',
  distance: '30px',
  duration: 1000,
  interval: 200,
  delay: 300
});

// Google Reviews Section
ScrollReveal().reveal('.review', {
  origin: 'bottom',
  delay: 300
});
// Initialize ScrollReveal
ScrollReveal().reveal('.hero-content', {
  origin: 'right',
  distance: '50px',
  duration: 1800,
  delay: 100,
  opacity: 0,
  easing: 'ease-out'
});

ScrollReveal().reveal('.hero-banner', {
  origin: 'left',
  distance: '50px',
  duration: 1600,
  delay: 100,
  opacity: 0,
  easing: 'ease-out'
});

ScrollReveal().reveal('.card-img', {
  origin: 'bottom',
  distance: '30px',
  duration: 1500,
  delay: 100,
  opacity: 0,
  easing: 'ease-out'
});

ScrollReveal().reveal('.card-body', {
  origin: 'top',
  distance: '30px',
  duration: 1500,
  delay: 300,
  opacity: 0,
  easing: 'ease-out'
});

ScrollReveal().reveal('.footer-content', {
  origin: 'bottom',
  distance: '30px',
  duration: 1500,
  delay: 200,
  opacity: 0,
  easing: 'ease-out'
});

ScrollReveal().reveal('.bottom-bar', {
  origin: 'bottom',
  distance: '30px',
  duration: 1500,
  delay: 200,
  opacity: 0,
  easing: 'ease-out'
});
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter h1');

  const updateCounter = (counter, target) => {
    const startValue = 0;
    const endValue = parseInt(target, 10);
    const duration = 2000;
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const value = Math.floor(progress * endValue);
      counter.textContent = value + (counter.textContent.includes('+') ? '+' : '');

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = counter.getAttribute('data-target');
        updateCounter(counter, target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  counters.forEach(counter => {
    observer.observe(counter);
  });

  // Reset counters on scroll up
  const resetCounters = () => {
    counters.forEach(counter => {
      counter.textContent = '0' + (counter.textContent.includes('+') ? '+' : ''); // Reset the counter to zero
    });
  };

  // Listen to scroll events to reset counters if needed
  window.addEventListener('scroll', () => {
    resetCounters();
    observer.disconnect(); // Temporarily disconnect observer
    counters.forEach(counter => {
      observer.observe(counter); // Re-observe counters
    });
  });
});
 // Function to animate counter numbers
    function animateCounters() {
      const counters = document.querySelectorAll('.counter h1');

      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;

          const increment = target / 100; // Adjust this to control the speed of counting

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };

        // Trigger counting only when the element is in view
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              updateCount();
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 1 });

        observer.observe(counter);
      });
    }

    // Start counter animation when the page loads
    document.addEventListener('DOMContentLoaded', animateCounters);

    // Initialize ScrollReveal


    ScrollReveal().reveal('.counter', {
      ...scrollRevealOptions,
      interval: 200,
      delay: 300
    });
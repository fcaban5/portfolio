// Universal Portfolio Animations
// Works across all project pages (BCG, B-Side, Tastemakers)

document.addEventListener('DOMContentLoaded', function() {
  
    // Add fade-in-scroll class to elements that should animate on scroll
    const animatedElements = [
      ...document.querySelectorAll('.carousel'),
      ...document.querySelectorAll('.gallery-grid'),
      ...document.querySelectorAll('.wireframe-grid'),
      ...document.querySelectorAll('.image-container'),
      ...document.querySelectorAll('.performance-stats'),
      ...document.querySelectorAll('.image-grid-2col'),
      ...document.querySelectorAll('.process-layout'),
      ...document.querySelectorAll('.steps-grid')
    ];
    
    animatedElements.forEach(element => {
      element.classList.add('fade-in-scroll');
    });
  
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing after animation to improve performance
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    // Observe all elements that should fade in on scroll
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  
    // Smooth scroll behavior for carousels
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
      let isScrolling;
      carousel.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        carousel.style.scrollBehavior = 'auto';
        
        isScrolling = setTimeout(() => {
          carousel.style.scrollBehavior = 'smooth';
        }, 100);
      });
    });
  
    // Force cursor pointer on all interactive images
    // This ensures hover states work even if CSS doesn't apply correctly
    const allImages = document.querySelectorAll('.carousel img, .gallery-grid img, .wireframe-grid img, .image-container img, .image-grid-2col img, .process-grid img, .steps-grid img, .step-item img, .step-double img');
    allImages.forEach(img => {
      img.style.cursor = 'pointer';
    });
  });
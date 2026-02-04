// Resume Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
  
  const resumeHeaders = document.querySelectorAll('.resume-header');
  
  resumeHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Close all other items
      resumeHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.setAttribute('aria-expanded', 'false');
          otherHeader.nextElementSibling.classList.remove('active');
        }
      });
      
      // Toggle current item
      if (isExpanded) {
        this.setAttribute('aria-expanded', 'false');
        content.classList.remove('active');
      } else {
        this.setAttribute('aria-expanded', 'true');
        content.classList.add('active');
      }
    });
  });
  
});
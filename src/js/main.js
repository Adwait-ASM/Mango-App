document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will get back to you soon.');
        contactForm.reset();
    });

    // Optional: Add smooth scrolling to navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    });
});

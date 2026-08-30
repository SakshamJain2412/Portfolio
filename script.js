// Smooth active nav highlight on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach((section, i) => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        
        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLinks[i]) navLinks[i].classList.add('active');
        }
    });
});

// Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card, .stat').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section, .hero__inner, .card, .project-card, .education-grid > div').forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(18px)';
        element.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
        observer.observe(element);
    });
});

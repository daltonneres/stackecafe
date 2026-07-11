const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll('.link-btn, .info-card').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 0.06, 0.5)}s`;
    revealObserver.observe(el);
});

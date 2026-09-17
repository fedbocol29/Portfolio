document.addEventListener('DOMContentLoaded', () => {

    // 1. Navigation Tab Switcher (Handling 3 Pages)
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const triggerTabs = document.querySelectorAll('.trigger-tab');

    function switchTab(targetPageId) {
        // Remove active class from all pages and links
        pageSections.forEach(section => section.classList.remove('active'));
        navLinks.forEach(link => link.classList.remove('active'));

        // Activate selected page
        const targetSection = document.getElementById(targetPageId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Activate corresponding navbar link
        const activeNav = document.querySelector(`.nav-link[data-page="${targetPageId}"]`);
        if (activeNav) {
            activeNav.classList.add('active');
        }

        // Smooth scroll to top of page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            switchTab(pageId);
        });
    });

    triggerTabs.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const target = trigger.getAttribute('data-target');
            switchTab(target);
        });
    });

    // 2. Parallax Motion Effect on Statue Background Image
    const heroCard = document.querySelector('.hero-card');
    const parallaxArt = document.querySelector('.parallax-art');

    if (heroCard && parallaxArt) {
        heroCard.addEventListener('mousemove', (e) => {
            const rect = heroCard.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            parallaxArt.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px) scale(1.05)`;
        });

        heroCard.addEventListener('mouseleave', () => {
            parallaxArt.style.transform = 'translate(0px, 0px) scale(1)';
        });
    }

    // 3. Smooth Scroll Effect for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.hasAttribute('data-page') || this.classList.contains('trigger-tab')) return;
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

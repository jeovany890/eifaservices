// Mobile Menu
const setupMobileMenu = () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
};

// Scroll Effects (Navbar & Reveal)
const setupScrollEffects = () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        // Navbar Glass Effect
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Simple Parallax for Hero
        const heroBg = document.getElementById('hero-bg');
        if (heroBg) {
            const scrollValue = window.scrollY;
            heroBg.style.transform = `translateY(${scrollValue * 0.5}px)`;
        }
    });

    // Reveal Animation on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
};

// Form Handler (Send to WhatsApp)
const setupForm = () => {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            // Format WhatsApp Message
            const whatsappNumber = "2290198194983";
            const text = `*Nouveau message via Site Web EIFA SERVICE*%0A%0A*Nom*: ${name}%0A*Email*: ${email}%0A*Téléphone*: ${phone}%0A*Message*: ${message}`;

            // Feedback UI
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Redirection WhatsApp...';
            btn.style.background = '#25D366';

            // Open WhatsApp
            setTimeout(() => {
                window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');

                // Reset form
                form.reset();
                btn.innerText = originalText;
                btn.style.background = '';
            }, 1000);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupScrollEffects();
    setupForm();
});

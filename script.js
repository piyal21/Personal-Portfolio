// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');

function highlightNavLink() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);
highlightNavLink(); // Call on page load

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// Scroll Fade-In Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards for fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll(
        'section, .project-card, .skill-category, .contact-card, .stat-card, .timeline-item, .research-card'
    );

    fadeElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

// Typing Effect for Hero Title (Optional Enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment below to enable typing effect on page load
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// });

// Skill Tags Random Animation on Hover
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = `translateY(-3px) rotate(${Math.random() * 10 - 5}deg)`;
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Project Cards 3D Tilt Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Scroll to Top Button (Optional)
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #00E278 0%, #0E5484 100%);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0, 226, 120, 0.3);
        font-size: 1.2rem;
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 6px 20px rgba(0, 226, 120, 0.4)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 15px rgba(0, 226, 120, 0.3)';
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const heroContent = document.querySelector('.hero-content');

    if (heroContent) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        heroContent.style.opacity = 1 - scrollPosition / 700;
    }
});

// Cursor Trail Effect (Optional - can be resource intensive)
function createCursorTrail() {
    let cursorTrail = [];
    const maxTrailLength = 10;

    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
            position: fixed;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: rgba(0, 226, 120, 0.5);
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            animation: fadeTrail 0.5s ease-out forwards;
        `;

        document.body.appendChild(trail);
        cursorTrail.push(trail);

        if (cursorTrail.length > maxTrailLength) {
            const oldTrail = cursorTrail.shift();
            oldTrail.remove();
        }

        setTimeout(() => {
            trail.remove();
        }, 500);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeTrail {
            to {
                opacity: 0;
                transform: scale(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Uncomment below to enable cursor trail effect
// createCursorTrail();

// Copy Email Function
function copyEmail() {
    const email = 'piyalahmmed01@gmail.com';
    const emailCard = document.querySelector('.email-card');
    const copyHint = document.querySelector('.copy-hint');

    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
        // Change the hint text
        const originalText = copyHint.textContent;
        copyHint.textContent = '✓ Copied!';
        copyHint.style.color = '#00E278';

        // Add success animation
        emailCard.style.borderColor = '#00E278';

        // Reset after 2 seconds
        setTimeout(() => {
            copyHint.textContent = originalText;
            copyHint.style.color = '';
            emailCard.style.borderColor = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email: ', err);
        copyHint.textContent = '✗ Failed to copy';
        setTimeout(() => {
            copyHint.textContent = 'Click to copy';
        }, 2000);
    });
}

// Console Message
console.log('%c🚀 Portfolio Website by MD Piyal Ahmmed', 'color: #00E278; font-size: 20px; font-weight: bold;');
console.log('%c💼 Connect with me on LinkedIn or GitHub!', 'color: #0E5484; font-size: 14px;');

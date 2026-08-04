// Typing Animation
const typedTextElement = document.querySelector('.typed-text');
const phrases = ['Web Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker'];
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function type() {
    isEnd = false;
    typedTextElement.innerHTML = currentPhrase.join('');

    if (!isDeleting && letterIndex <= phrases[phraseIndex].length) {
        currentPhrase.push(phrases[phraseIndex][letterIndex]);
        letterIndex++;
        typedTextElement.innerHTML = currentPhrase.join('');
    }

    if (isDeleting && letterIndex <= phrases[phraseIndex].length) {
        currentPhrase.pop();
        letterIndex--;
        typedTextElement.innerHTML = currentPhrase.join('');
    }

    if (letterIndex === phrases[phraseIndex].length) {
        isEnd = true;
        isDeleting = true;
    }

    if (isDeleting && letterIndex === 0) {
        currentPhrase = [];
        isDeleting = false;
        phraseIndex++;
        if (phraseIndex === phrases.length) {
            phraseIndex = 0;
        }
    }

    const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
    setTimeout(type, speed);
}

type();

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Skill bars animation
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    observer.observe(card);
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
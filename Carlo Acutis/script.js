// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = '#ffffff';
                navbar.style.backdropFilter = 'none';
            }
        }
    });
    
    // Smooth scrolling for anchor links
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
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.about-card, .timeline-item, .prayer-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Dynamic year update
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }
    
    // Random inspirational quotes
    const quotes = [
        "A tristeza é dirigir o olhar para si mesmo. A felicidade é dirigir o olhar para Deus.",
        "A Eucaristia é a minha autoestrada para o céu.",
        "Quanto mais recebermos a Eucaristia, mais nos tornaremos semelhantes a Jesus.",
        "Para estar sempre unido a Jesus, este é o meu projeto de vida.",
        "Ser sempre unido a Jesus: este é o meu projeto de vida."
    ];
    
    // Add quote rotation if there's a quote element
    const quoteElements = document.querySelectorAll('.hero-subtitle');
    if (quoteElements.length > 0) {
        let currentQuoteIndex = 0;
        setInterval(() => {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            quoteElements.forEach(el => {
                if (el.textContent.startsWith('"')) {
                    el.textContent = `"${quotes[currentQuoteIndex]}"`;
                }
            });
        }, 5000);
    }
});

// Form validation for prayer requests or contact forms
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            input.style.borderColor = '#3498db';
        }
    });
    
    return isValid;
}

// Prayer counter (for devotional practices)
let prayerCount = localStorage.getItem('prayerCount') || 0;

function incrementPrayerCount() {
    prayerCount++;
    localStorage.setItem('prayerCount', prayerCount);
    updatePrayerDisplay();
}

function updatePrayerDisplay() {
    const prayerDisplay = document.getElementById('prayer-count');
    if (prayerDisplay) {
        prayerDisplay.textContent = prayerCount;
    }
}

// Daily devotion reminder
function checkDailyDevotion() {
    const lastVisit = localStorage.getItem('lastVisit');
    const today = new Date().toDateString();
    
    if (lastVisit !== today) {
        localStorage.setItem('lastVisit', today);
        // Show a gentle reminder for daily prayer
        setTimeout(() => {
            if (confirm('Que tal dedicar um momento para uma oração hoje?')) {
                // Could scroll to prayer section or open a prayer modal
                const prayerSection = document.querySelector('.prayer-section');
                if (prayerSection) {
                    prayerSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 3000);
    }
}

// Initialize daily devotion check
document.addEventListener('DOMContentLoaded', checkDailyDevotion);

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.style.outline = '2px solid #3498db';
            this.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

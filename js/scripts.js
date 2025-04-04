// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 56, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to nav items when scrolling
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section, header');
        const navItems = document.querySelectorAll('.navbar-nav .nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    });

    // Enhanced reveal animations on scroll that work in both directions
    const revealElements = document.querySelectorAll('.reveal');
    
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Check if the element is partially visible
        return (
            (rect.top <= windowHeight - 100 && rect.bottom >= 0) &&
            (rect.left <= (window.innerWidth || document.documentElement.clientWidth) && rect.right >= 0)
        );
    };
    
    const revealOnScroll = function() {
        revealElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            } else {
                // Remove the active class when scrolling away
                element.classList.remove('active');
            }
        });
    };
    
    // Run reveal animation on page load and scroll
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    window.addEventListener('resize', revealOnScroll);
    
    // Initial check in case elements are already in view on page load
    setTimeout(revealOnScroll, 100);
    
    // Floating animation for skills cards on hover
    const skillCards = document.querySelectorAll('#skills .card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            
            const icon = this.querySelector('i');
            icon.style.transform = 'rotate(360deg)';
            icon.style.color = 'var(--accent-color)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            
            const icon = this.querySelector('i');
            icon.style.transform = '';
            icon.style.color = '';
        });
    });
    
    // Typed.js effect for hero section - if Typed.js is included
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: ['Flutter Developer', 'Mobile App Developer', 'Creative Problem Solver'],
            typeSpeed: 60,
            backSpeed: 30,
            loop: true,
            backDelay: 1500
        });
    }
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            
            // Only apply parallax if not on mobile
            if (window.innerWidth > 768) {
                heroSection.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
            }
        });
    }
    
    // Add animation to project cards on hover
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.card-img-top');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.card-img-top');
            if (img) {
                img.style.transform = '';
            }
        });
    });
    
    // Animate navbar on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 1rem';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
            navbar.style.backgroundColor = 'rgba(16, 16, 16, 0.98)';
        } else {
            navbar.style.padding = '1rem';
            navbar.style.boxShadow = '';
            navbar.style.backgroundColor = 'rgba(17, 17, 17, 0.95)';
        }
    });
    
    // Add a particle effect to the hero section (if particlesJS is included)
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
    
    // Animate contact icons on hover
    const contactIcons = document.querySelectorAll('.contact-icon');
    
    contactIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--accent-color)';
            this.style.transform = 'rotate(360deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.transform = '';
        });
    });
    
    // Extra animation for section headings on scroll
    const sectionHeadings = document.querySelectorAll('.section-heading');
    
    const animateSectionHeadings = function() {
        sectionHeadings.forEach(heading => {
            const headingTop = heading.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (headingTop < windowHeight - 50) {
                heading.style.opacity = '1';
                heading.style.transform = 'translateY(0)';
            } else {
                heading.style.opacity = '0';
                heading.style.transform = 'translateY(20px)';
            }
        });
    };
    
    // Add initial styles to section headings
    sectionHeadings.forEach(heading => {
        heading.style.transition = 'all 0.5s ease';
        heading.style.opacity = '0';
        heading.style.transform = 'translateY(20px)';
    });
    
    window.addEventListener('scroll', animateSectionHeadings);
    window.addEventListener('load', animateSectionHeadings);
}); 
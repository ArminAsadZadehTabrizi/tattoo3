// ========================================
// VELVET INK — Berlin Underground JavaScript
// ========================================

// === CUSTOM CURSOR ===
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Smooth follower animation
function animateFollower() {
    const dx = mouseX - followerX;
    const dy = mouseY - followerY;
    
    followerX += dx * 0.1;
    followerY += dy * 0.1;
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor hover effect on interactive elements
const hoverables = document.querySelectorAll('button, a, .portfolio-item, .artist-card, .accordion-header');
hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('hover');
    });
});

// === PORTFOLIO FILTER ===
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter items with smooth animation
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    item.classList.remove('hide');
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 50);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    item.classList.add('hide');
                }, 300);
            }
        });
    });
});

// === LIGHTBOX ===
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeLightbox = document.getElementById('closeLightbox');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

document.querySelector('.lightbox-backdrop').addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// === ACCORDION ===
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all items
        document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// === BOOKING MODAL ===
const bookingModal = document.getElementById('bookingModal');
const heroBookingBtn = document.getElementById('heroBookingBtn');
const closeModal = document.getElementById('closeModal');
const bookingForm = document.getElementById('bookingForm');

heroBookingBtn.addEventListener('click', () => {
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

document.querySelector('.modal-backdrop').addEventListener('click', () => {
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        artist: document.getElementById('artist').value,
        description: document.getElementById('description').value
    };
    
    // Log form data (replace with actual submission logic)
    console.log('Booking Request:', formData);
    
    // Show success message
    alert('Request submitted! We\'ll contact you within 24 hours.');
    
    // Reset form and close modal
    bookingForm.reset();
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// === PARALLAX EFFECT ON HERO ===
const hero = document.querySelector('.hero');
const heroTitle = document.querySelector('.hero-title');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroTitle) {
        heroTitle.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// === SMOOTH SCROLL FOR ANCHOR LINKS ===
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

// === ESCAPE KEY TO CLOSE MODALS ===
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (bookingModal.classList.contains('active')) {
            bookingModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

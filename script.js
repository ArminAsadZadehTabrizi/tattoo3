// ========================================
// VELVET INK — Berlin Underground JavaScript
// ========================================

// === TRANSLATION SYSTEM ===
const translations = {
    de: {
        // Hero
        hero_cta: "Session buchen",

        // Artists
        artists_title: "Künstler",

        // Portfolio
        portfolio_title: "Portfolio",
        filter_all: "Alle",
        filter_traditional: "Traditional",
        filter_geometric: "Geometrisch",
        filter_blackwork: "Blackwork",
        filter_illustrative: "Illustrativ",

        // Instagram
        instagram_banner: "CHECK INSTAGRAM FOR DAILY DROPS // @VELVET.INK",

        // Aftercare
        aftercare_title: "Pflege",
        aftercare_day1_title: "Erste 24 Stunden",
        aftercare_day1_text: "Verband 2-4 Stunden drauf lassen. Vorsichtig mit antibakterieller Seife und lauwarmem Wasser waschen. Mit sauberem Handtuch trockentupfen. Dünne Schicht Heilsalbe auftragen.",
        aftercare_week1_title: "Woche 1",
        aftercare_week1_text: "2-3 mal täglich waschen. Parfümfreie Feuchtigkeitscreme auftragen. Sonne, Schwimmen und enge Kleidung vermeiden. Nicht kratzen oder Kruste abziehen.",
        aftercare_week2_title: "Woche 2-4",
        aftercare_week2_text: "Weiter eincremen. Leichtes Abschälen ist normal. Bereich vor Sonne schützen. Dein Tattoo sollte bis Woche 4 vollständig verheilt sein.",
        aftercare_longterm_title: "Langzeitpflege",
        aftercare_longterm_text: "Immer SPF 50+ Sonnencreme benutzen. Regelmäßig eincremen. Touch-ups bei Bedarf vereinbaren. Längeren Kontakt mit Wasser vermeiden.",

        // Footer
        footer_contact: "Kontakt",
        footer_links: "Links",
        footer_artists: "Künstler",
        footer_portfolio: "Portfolio",
        footer_aftercare: "Pflege",
        footer_vouchers: "Gutscheine / Gift Cards",
        footer_rules_title: "Rules & Safety",
        footer_hygiene: "100% Sterile Single-Use Equipment. EU REACH Compliant Colors.",
        footer_rules: "NO RACISM. NO SEXISM. WE REFUSE HATE SYMBOLS.",

        // Booking Modal
        modal_title: "Session buchen",
        form_name: "Name",
        form_email: "E-Mail",
        form_phone: "Telefon",
        form_artist: "Künstler",
        form_description: "Motiv-Beschreibung",
        deposit_notice: "Hinweis: Für feste Termine ist eine Anzahlung von 50€ erforderlich.",
        form_submit: "Anfrage senden",
        success_message: "Anfrage gesendet! Wir melden uns innerhalb von 24 Stunden bei dir."
    },
    en: {
        // Hero
        hero_cta: "Book Session",

        // Artists
        artists_title: "Artists",

        // Portfolio
        portfolio_title: "Portfolio",
        filter_all: "All",
        filter_traditional: "Traditional",
        filter_geometric: "Geometric",
        filter_blackwork: "Blackwork",
        filter_illustrative: "Illustrative",

        // Instagram
        instagram_banner: "CHECK INSTAGRAM FOR DAILY DROPS // @VELVET.INK",

        // Aftercare
        aftercare_title: "Aftercare",
        aftercare_day1_title: "First 24 Hours",
        aftercare_day1_text: "Leave bandage on for 2-4 hours. Gently wash with antibacterial soap and lukewarm water. Pat dry with a clean towel. Apply a thin layer of healing ointment.",
        aftercare_week1_title: "Week 1",
        aftercare_week1_text: "Wash 2-3 times daily. Apply fragrance-free moisturizer. Avoid sun, swimming, and tight clothing. Do not scratch or peel the scab.",
        aftercare_week2_title: "Week 2-4",
        aftercare_week2_text: "Continue moisturizing. Light peeling is normal. Protect area from sun. Your tattoo should be fully healed by week 4.",
        aftercare_longterm_title: "Long-Term Care",
        aftercare_longterm_text: "Always use SPF 50+ sunscreen. Moisturize regularly. Schedule touch-ups as needed. Avoid prolonged contact with water.",

        // Footer
        footer_contact: "Contact",
        footer_links: "Links",
        footer_artists: "Artists",
        footer_portfolio: "Portfolio",
        footer_aftercare: "Aftercare",
        footer_vouchers: "Gift Cards / Gutscheine",
        footer_rules_title: "Rules & Safety",
        footer_hygiene: "100% Sterile Single-Use Equipment. EU REACH Compliant Colors.",
        footer_rules: "NO RACISM. NO SEXISM. WE REFUSE HATE SYMBOLS.",

        // Booking Modal
        modal_title: "Book Session",
        form_name: "Name",
        form_email: "Email",
        form_phone: "Phone",
        form_artist: "Artist",
        form_description: "Design Description",
        deposit_notice: "Note: A 50€ deposit is required to secure your appointment.",
        form_submit: "Send Request",
        success_message: "Request sent! We'll get back to you within 24 hours."
    }
};

// Get saved language or default to German
let currentLang = localStorage.getItem('velvetink_lang') || 'de';

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('velvetink_lang', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(currentLang);

    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});

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
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
let currentImageIndex = 0;
let visiblePortfolioItems = [];

// Function to update visible items based on current filter
function updateVisibleItems() {
    visiblePortfolioItems = Array.from(portfolioItems).filter(item => !item.classList.contains('hide'));
}

// Function to show image at specific index
function showLightboxImage(index) {
    updateVisibleItems();
    if (visiblePortfolioItems.length === 0) return;

    // Wrap around if index is out of bounds
    if (index < 0) {
        currentImageIndex = visiblePortfolioItems.length - 1;
    } else if (index >= visiblePortfolioItems.length) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = index;
    }

    const img = visiblePortfolioItems[currentImageIndex].querySelector('img');
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
}

// Open lightbox on portfolio item click
portfolioItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        updateVisibleItems();
        currentImageIndex = visiblePortfolioItems.indexOf(item);
        showLightboxImage(currentImageIndex);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox
closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

document.querySelector('.lightbox-backdrop').addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Previous image
lightboxPrev.addEventListener('click', () => {
    showLightboxImage(currentImageIndex - 1);
});

// Next image
lightboxNext.addEventListener('click', () => {
    showLightboxImage(currentImageIndex + 1);
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

    // Show success message in current language
    alert(translations[currentLang].success_message);

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

// === KEYBOARD CONTROLS ===
document.addEventListener('keydown', (e) => {
    // Escape key to close modals
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

    // Arrow keys for lightbox navigation
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            showLightboxImage(currentImageIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showLightboxImage(currentImageIndex + 1);
        }
    }
});

// ========================================
// VELVET INK — Berlin Underground JavaScript
// ========================================

// === TRANSLATION SYSTEM ===
const translations = {
    de: {
        // Hero
        hero_cta: "Session buchen",

        // Header
        header_vouchers: "Gutscheine",
        header_book: "Buchen",

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
        footer_social: "Social Media",
        footer_rules_title: "Rules & Safety",
        footer_hygiene: "100% Sterile Single-Use Equipment. EU REACH Compliant Colors.",
        footer_rules: "NO RACISM. NO SEXISM. WE REFUSE HATE SYMBOLS.",
        footer_impressum: "Impressum",
        footer_datenschutz: "Datenschutz",
        footer_agb: "AGB",

        // Booking Modal
        modal_title: "Session buchen",
        form_name: "Name",
        form_email: "E-Mail",
        form_phone: "Telefon",
        form_artist: "Künstler",
        form_description: "Motiv-Beschreibung",
        deposit_notice: "Hinweis: Nach Bestätigung des Termins erhältst du einen Link zur Zahlung der Anzahlung (50€).",
        form_submit: "Anfrage senden",
        success_message: "Anfrage gesendet! Wir melden uns innerhalb von 24 Stunden bei dir.",

        // Voucher Modal
        voucher_modal_title: "Gutschein bestellen",
        voucher_amount: "Betrag",
        voucher_amount_50: "50€",
        voucher_amount_100: "100€",
        voucher_amount_150: "150€",
        voucher_amount_200: "200€",
        voucher_amount_custom: "Individuell",
        voucher_recipient: "Name des Empfängers",
        voucher_email: "Deine E-Mail",
        voucher_submit: "Gutschein anfordern",
        voucher_success: "Rechnung wird erstellt! Du erhältst den Gutschein nach Zahlungseingang per Mail.",

        // Appointment Slots
        slots_headline: "Verfügbare Termine"
    },
    en: {
        // Hero
        hero_cta: "Book Session",

        // Header
        header_vouchers: "Gift Cards",
        header_book: "Book",

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
        footer_social: "Social Media",
        footer_rules_title: "Rules & Safety",
        footer_hygiene: "100% Sterile Single-Use Equipment. EU REACH Compliant Colors.",
        footer_rules: "NO RACISM. NO SEXISM. WE REFUSE HATE SYMBOLS.",
        footer_impressum: "Legal Notice",
        footer_datenschutz: "Privacy Policy",
        footer_agb: "Terms & Conditions",

        // Booking Modal
        modal_title: "Book Session",
        form_name: "Name",
        form_email: "Email",
        form_phone: "Phone",
        form_artist: "Artist",
        form_description: "Design Description",
        deposit_notice: "Note: After appointment confirmation, you will receive a link to pay the deposit (50€).",
        form_submit: "Send Request",
        success_message: "Request sent! We'll get back to you within 24 hours.",

        // Voucher Modal
        voucher_modal_title: "Order Gift Card",
        voucher_amount: "Amount",
        voucher_amount_50: "50€",
        voucher_amount_100: "100€",
        voucher_amount_150: "150€",
        voucher_amount_200: "200€",
        voucher_amount_custom: "Custom",
        voucher_recipient: "Recipient Name",
        voucher_email: "Your Email",
        voucher_submit: "Request Voucher",
        voucher_success: "Invoice will be created! You will receive the gift card via email after payment is confirmed.",

        // Appointment Slots
        slots_headline: "Available Slots"
    }
};

// Get saved language or default to German
let currentLang = localStorage.getItem('language') || 'de';

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update body class for language-specific content visibility
    document.body.classList.remove('lang-de', 'lang-en');
    document.body.classList.add('lang-' + lang);

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
    // Apply body class immediately based on saved preference
    document.body.classList.add('lang-' + currentLang);

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
const headerBookingBtn = document.getElementById('headerBookingBtn');
const closeModal = document.getElementById('closeModal');
const bookingForm = document.getElementById('bookingForm');

heroBookingBtn.addEventListener('click', () => {
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

if (headerBookingBtn) {
    headerBookingBtn.addEventListener('click', () => {
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

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
        selectedSlot: document.getElementById('selectedSlot').value,
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

    // Clear slots
    const slotsContainer = document.getElementById('slotsContainer');
    slotsContainer.innerHTML = '';
    slotsContainer.classList.remove('visible');
});

// === APPOINTMENT SLOT SELECTION ===
// Mock artist schedules (keys match artist values)
const artistSchedules = {
    mike: [
        "Mon, 13. Jan - 14:00",
        "Tue, 14. Jan - 10:00",
        "Wed, 15. Jan - 16:00",
        "Thu, 16. Jan - 11:00",
        "Fri, 17. Jan - 15:00"
    ],
    sarah: [
        "Mon, 13. Jan - 10:00",
        "Tue, 14. Jan - 14:00",
        "Thu, 16. Jan - 09:00",
        "Fri, 17. Jan - 13:00",
        "Sat, 18. Jan - 11:00"
    ],
    alex: [
        "Tue, 14. Jan - 15:00",
        "Wed, 15. Jan - 10:00",
        "Thu, 16. Jan - 14:00",
        "Fri, 17. Jan - 12:00",
        "Sat, 18. Jan - 10:00"
    ],
    nina: [
        "Mon, 13. Jan - 11:00",
        "Wed, 15. Jan - 14:00",
        "Thu, 16. Jan - 10:00",
        "Fri, 17. Jan - 16:00",
        "Sat, 18. Jan - 13:00"
    ]
};

// Listen for artist selection change
const artistSelect = document.getElementById('artist');
const slotsContainer = document.getElementById('slotsContainer');
const selectedSlotInput = document.getElementById('selectedSlot');

artistSelect.addEventListener('change', function () {
    const selectedArtist = this.value;

    // Clear previous slots and selection
    slotsContainer.innerHTML = '';
    selectedSlotInput.value = '';

    // If an artist is selected, render their slots
    if (selectedArtist && artistSchedules[selectedArtist]) {
        const slots = artistSchedules[selectedArtist];

        // Create headline
        const headline = document.createElement('h3');
        headline.className = 'slots-headline';
        headline.textContent = translations[currentLang].slots_headline;
        slotsContainer.appendChild(headline);

        // Create grid container
        const grid = document.createElement('div');
        grid.className = 'slot-grid';

        // Create slot buttons
        slots.forEach(slot => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'slot-btn';
            btn.textContent = slot;

            // Click handler for slot selection
            btn.addEventListener('click', function () {
                // Remove active class from all slot buttons
                document.querySelectorAll('.slot-btn').forEach(b => {
                    b.classList.remove('active');
                });

                // Add active class to clicked button
                this.classList.add('active');

                // Save value to hidden input
                selectedSlotInput.value = slot;
            });

            grid.appendChild(btn);
        });

        slotsContainer.appendChild(grid);

        // Show container with fade-in
        setTimeout(() => {
            slotsContainer.classList.add('visible');
        }, 10);
    } else {
        // Hide container if no artist selected
        slotsContainer.classList.remove('visible');
    }
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
        const voucherModal = document.getElementById('voucherModal');
        if (voucherModal && voucherModal.classList.contains('active')) {
            voucherModal.classList.remove('active');
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

// === VOUCHER MODAL ===
const voucherModal = document.getElementById('voucherModal');
const voucherTrigger = document.getElementById('voucherTrigger');
const headerVoucherLink = document.getElementById('headerVoucherLink');
const closeVoucherModal = document.getElementById('closeVoucherModal');
const voucherForm = document.getElementById('voucherForm');

if (voucherTrigger) {
    voucherTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        voucherModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (headerVoucherLink) {
    headerVoucherLink.addEventListener('click', (e) => {
        e.preventDefault();
        voucherModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeVoucherModal) {
    closeVoucherModal.addEventListener('click', () => {
        voucherModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

if (voucherModal) {
    const voucherBackdrop = voucherModal.querySelector('.modal-backdrop');
    if (voucherBackdrop) {
        voucherBackdrop.addEventListener('click', () => {
            voucherModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
}

if (voucherForm) {
    voucherForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            amount: document.getElementById('voucherAmount').value,
            recipient: document.getElementById('voucherRecipient').value,
            email: document.getElementById('voucherEmail').value
        };

        // Log form data (replace with actual submission logic)
        console.log('Voucher Request:', formData);

        // Show success message in current language
        alert(translations[currentLang].voucher_success);

        // Reset form and close modal
        voucherForm.reset();
        voucherModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

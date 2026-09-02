/* ==========================================================================
   Dr. Javed Khan - Bariatric & Laparoscopic Surgeon Website
   Interactive JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Drawer Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile drawer on link click
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 2. Header Scroll Effect & Active Link Highlight
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Highlight current section link
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const targetLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (targetLink) {
                    navLinkItems.forEach(item => item.classList.remove('active'));
                    targetLink.classList.add('active');
                }
            }
        });
    });

    // 3. Interactive Carousel Engine
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsNav = document.getElementById('carouselNav');

    if (track) {
        const slides = Array.from(track.children);
        let currentIndex = 0;
        let autoplayTimer = null;

        // Build navigation dots dynamically
        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-indicator');
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Slide ${index + 1}`);
            dotsNav.appendChild(dot);

            dot.addEventListener('click', () => {
                moveToSlide(index);
                resetAutoplay();
            });
        });

        const dots = Array.from(dotsNav.children);

        const moveToSlide = (targetIndex) => {
            currentIndex = targetIndex;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Update active state for slides and dots
            slides.forEach(slide => slide.classList.remove('current-slide'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[currentIndex].classList.add('current-slide');
            dots[currentIndex].classList.add('active');
        };

        const nextSlide = () => {
            const nextIndex = (currentIndex + 1) % slides.length;
            moveToSlide(nextIndex);
        };

        const prevSlide = () => {
            const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
            moveToSlide(prevIndex);
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoplay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoplay();
            });
        }

        // Auto play timer
        const startAutoplay = () => {
            autoplayTimer = setInterval(nextSlide, 4500);
        };

        const resetAutoplay = () => {
            clearInterval(autoplayTimer);
            startAutoplay();
        };

        startAutoplay();

        // Touch Swipe Gesture Support for Mobile
        let startX = 0;
        let endX = 0;

        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) {
                nextSlide();
                resetAutoplay();
            } else if (endX - startX > 50) {
                prevSlide();
                resetAutoplay();
            }
        }, { passive: true });
    }
});

// 4. Lightbox Modal Functions
function openLightbox(imgSrc, captionText) {
    const modal = document.getElementById('lightboxModal');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');

    if (modal && img) {
        img.src = imgSrc;
        caption.textContent = captionText || '';
        modal.style.display = 'flex';
    }
}

function closeLightbox(event) {
    if (event.target.id === 'lightboxModal') {
        document.getElementById('lightboxModal').style.display = 'none';
    }
}

function closeLightboxDirect() {
    const modal = document.getElementById('lightboxModal');
    if (modal) modal.style.display = 'none';
}

/* ==========================================================================
   Dr. Javed Khan - Bariatric & Laparoscopic Surgeon Website
   Interactive JavaScript Logic (AOS, Animated Counters, Blog Reader)
   ========================================================================== */

// Authentic Clinical Blog Data (Written from Dr. Javed Khan's Perspective)
const blogData = {
    blog1: {
        title: "Is Bariatric Surgery Safe? Medical Facts & Myths Explained",
        date: "August 2026 • 5 min read",
        category: "Bariatric Safety",
        image: "images/caresole image.jpg",
        content: `
            <p>One of the most frequent questions patients ask during consultation at Pak Medical Center Timergara is: <em>"Doctor, is weight loss surgery really safe?"</em></p>
            
            <p>Over the last two decades, advanced laparoscopic techniques have transformed metabolic surgery. Today, the safety profile of laparoscopic bariatric surgery (such as Sleeve Gastrectomy) is comparable to routine gallbladder or appendectomy procedures.</p>

            <h4>Key Medical Facts:</h4>
            <p><strong>1. Minimally Invasive Keyhole Technology:</strong> Rather than large open incisions, we perform the surgery through tiny 5-10mm keyhole ports. This dramatically reduces infection risks, blood loss, and post-operative pain.</p>
            <p><strong>2. Low Complication Rates:</strong> Modern surgical stapling technology and rigorous perioperative care have brought major complication rates below 1-2% in clinical studies worldwide.</p>
            <p><strong>3. Severe Risks of Untreated Obesity:</strong> Long-term severe obesity carries significantly higher health risks—including uncontrolled Type-2 diabetes, hypertension, sleep apnea, fatty liver disease, and reduced life expectancy—than the procedure itself.</p>

            <h4>Post-Operative Safety Protocols</h4>
            <p>At our Timergara clinic, every candidate undergoes thorough pre-operative cardiac, respiratory, and metabolic evaluation. Personalized post-operative care plans ensure smooth, rapid recovery.</p>
        `
    },
    blog2: {
        title: "Understanding Gastric Sleeve Surgery: How It Works & What to Expect",
        date: "July 2026 • 6 min read",
        category: "Gastric Sleeve",
        image: "images/caresole image3.jpg",
        content: `
            <p>Laparoscopic Sleeve Gastrectomy (Gastric Sleeve) is currently the most popular bariatric procedure performed worldwide due to its excellent weight reduction efficacy and hormonal benefits.</p>

            <h4>How the Procedure Works</h4>
            <p>During a sleeve gastrectomy, approximately 75-80% of the stomach is safely removed vertically using specialized laparoscopic surgical staplers. The remaining stomach is reduced to a narrow tube or "sleeve" about the size of a banana.</p>

            <h4>Dual Mechanism of Weight Loss:</h4>
            <p><strong>1. Restrictive Effect:</strong> A smaller stomach capacity naturally limits the quantity of food you can consume comfortably in a single meal.</p>
            <p><strong>2. Hormonal Shift (Ghrelin Reduction):</strong> The section of the stomach removed (the fundus) is the body's primary source of <strong>Ghrelin</strong>—the hunger hormone. After surgery, patients experience a dramatic decrease in appetite and cravings.</p>

            <h4>Expected Weight Reduction Results</h4>
            <p>Most patients lose between 60% to 70% of their excess body weight within the first 12 to 18 months following surgery, alongside remarkable improvements in energy levels and mobility.</p>
        `
    },
    blog3: {
        title: "Why Laparoscopic Surgery Means Faster Recovery & Less Pain",
        date: "June 2026 • 4 min read",
        category: "Laparoscopic Innovation",
        image: "images/caresole image 5.jpg",
        content: `
            <p>Laparoscopic surgery (often referred to as keyhole surgery) has revolutionized modern surgical intervention across Pakistan and globally.</p>

            <h4>How Laparoscopic Surgery Differs from Traditional Open Surgery</h4>
            <p>Instead of creating a single large abdominal incision, the surgeon inserts a high-definition miniature video camera (laparoscope) and specialized instruments through tiny incisions.</p>

            <h4>Major Benefits for Patients:</h4>
            <p><strong>• Significantly Reduced Post-Op Pain:</strong> Smaller skin and muscle trauma means patients require far less pain medication after surgery.</p>
            <p><strong>• Rapid Hospital Discharge:</strong> Most bariatric and laparoscopic patients are walking within hours of surgery and discharged within 24 to 48 hours.</p>
            <p><strong>• Cosmetically Superior:</strong> Keyhole incisions heal into tiny, virtually unnoticeable faint lines.</p>
            <p><strong>• Lower Wound Infection Rates:</strong> Minimal exposure of internal tissues drastically minimizes surgical site contamination.</p>
        `
    },
    blog4: {
        title: "Life After Bariatric Surgery: Post-Operative Diet & Lifestyle Guide",
        date: "May 2026 • 7 min read",
        category: "Post-Op Guidance",
        image: "images/image copy 2.png",
        content: `
            <p>Bariatric surgery is a powerful tool for weight loss, but long-term success requires commitment to healthy nutritional and lifestyle habits.</p>

            <h4>Phases of Post-Operative Nutrition:</h4>
            <p><strong>Phase 1 (Clear Liquids):</strong> First few days post-surgery focus on hydration, electrolyte balance, and clear broths.</p>
            <p><strong>Phase 2 (Full Liquids & Purees):</strong> Weeks 2 to 3 introduce high-protein shakes, smooth yogurt, and strained soups.</p>
            <p><strong>Phase 3 (Soft Solid Foods):</strong> Weeks 4 to 6 focus on soft lean poultry, fish, eggs, and cooked vegetables.</p>
            <p><strong>Phase 4 (Long-Term Balanced Diet):</strong> Transition to wholesome solid foods prioritizing lean proteins, fiber, and healthy hydration.</p>

            <h4>Golden Rules for Post-Op Patients:</h4>
            <p>• Eat slowly and chew thoroughly.</p>
            <p>• Separate fluids from solid meals (avoid drinking liquids during meals to prevent premature satiety).</p>
            <p>• Take recommended daily multivitamins and minerals as prescribed by our clinic team.</p>
        `
    },
    blog5: {
        title: "Reversing Type-2 Diabetes & Hypertension Through Bariatric Surgery",
        date: "April 2026 • 5 min read",
        category: "Metabolic Surgery",
        image: "images/image.png",
        content: `
            <p>Bariatric surgery is recognized by international medical associations not merely as cosmetic weight loss, but primarily as <strong>Metabolic Surgery</strong> capable of inducing long-term Type-2 Diabetes remission.</p>

            <h4>The Science Behind Diabetes Remission</h4>
            <p>Within days of bariatric surgery—even before major weight loss occurs—patients often experience significant improvement in blood glucose levels. This rapid metabolic response is driven by gastrointestinal hormonal changes that restore tissue insulin sensitivity.</p>

            <h4>Clinical Health Outcomes:</h4>
            <p><strong>• Blood Sugar Normalization:</strong> Up to 70-80% of Type-2 Diabetic patients achieve normal HbA1c levels, with many discontinuing insulin and oral glycemic medications under clinical supervision.</p>
            <p><strong>• Blood Pressure Control:</strong> Reduction in arterial pressure relieves strain on the heart and kidneys.</p>
            <p><strong>• Fatty Liver Improvement:</strong> Metabolic improvement halts and reverses non-alcoholic fatty liver disease (NAFLD).</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Animate-on-Scroll (AOS) Engine using IntersectionObserver
    const aosElements = document.querySelectorAll('[data-aos]');
    
    if ('IntersectionObserver' in window) {
        const aosObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    // Optional: stop observing once animated
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        aosElements.forEach(el => aosObserver.observe(el));
    } else {
        // Fallback for legacy browsers
        aosElements.forEach(el => el.classList.add('aos-animate'));
    }

    // 2. Animated Number Counter (0 to 1000+ Surgeries & 0 to 100% Patient Care)
    const counterElements = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    const animateCounters = () => {
        counterElements.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            if (!target) return;
            
            let count = 0;
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16);

            const updateCounter = () => {
                count += increment;
                if (count < target) {
                    counter.textContent = Math.ceil(count) + (target === 1000 ? '+' : '%');
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + (target === 1000 ? '+' : '%');
                }
            };

            updateCounter();
        });
    };

    // Observer for Hero Stats trigger
    const heroStatsSection = document.querySelector('.hero-stats');
    if (heroStatsSection && 'IntersectionObserver' in window) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
            }
        }, { threshold: 0.5 });
        statsObserver.observe(heroStatsSection);
    } else {
        animateCounters();
    }

    // 3. Mobile Menu Drawer Toggle
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

    // 4. Header Scroll Effect & Active Section Highlight
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

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

    // 5. Interactive Image Carousel Engine
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsNav = document.getElementById('carouselNav');

    if (track) {
        const slides = Array.from(track.children);
        let currentIndex = 0;
        let autoplayTimer = null;

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

        const startAutoplay = () => {
            autoplayTimer = setInterval(nextSlide, 4500);
        };

        const resetAutoplay = () => {
            clearInterval(autoplayTimer);
            startAutoplay();
        };

        startAutoplay();

        // Touch Swipe Gesture Support
        let startX = 0;
        let endX = 0;

        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX - endX > 40) {
                nextSlide();
                resetAutoplay();
            } else if (endX - startX > 40) {
                prevSlide();
                resetAutoplay();
            }
        }, { passive: true });
    }
});

// 6. Lightbox Modal Functions
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

// 7. Doctor Blog Reader Modal Functions
function openBlogModal(blogId) {
    const data = blogData[blogId];
    if (!data) return;

    document.getElementById('blogModalTitle').textContent = data.title;
    document.getElementById('blogModalMeta').textContent = `${data.category} • Published by Dr. Javed Khan • ${data.date}`;
    document.getElementById('blogModalImage').src = data.image;
    document.getElementById('blogModalImage').alt = data.title;
    document.getElementById('blogModalBody').innerHTML = data.content;

    const modal = document.getElementById('blogModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore background scrolling
    }
}

function closeBlogModalOnBg(event) {
    if (event.target.id === 'blogModal') {
        closeBlogModal();
    }
}

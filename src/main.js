// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Logic
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    menuToggle.setAttribute('aria-expanded', isMenuOpen);
    
    if (isMenuOpen) {
        mobileMenu.classList.remove('translate-y-[-100%]', 'opacity-0', 'pointer-events-none');
        mobileMenu.classList.add('translate-y-0', 'opacity-100');
        menuIcon.setAttribute('data-lucide', 'x');
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.add('translate-y-[-100%]', 'opacity-0', 'pointer-events-none');
        mobileMenu.classList.remove('translate-y-0', 'opacity-100');
        menuIcon.setAttribute('data-lucide', 'menu');
        document.body.style.overflow = 'unset';
    }
    lucide.createIcons();
}

menuToggle.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Slider Data
const slides = [
    {
        tag: "Featured Project",
        title: "Clinic Log System",
        description: "A high-performance digital ecosystem for modern healthcare management and patient record optimization.",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000",
        link: "https://clinic-log.vercel.app/",
        alt: "Modern clinic interior with medical equipment"
    },
    {
        tag: "Health Tech",
        title: "Ammar Physio",
        description: "Revolutionizing physiotherapy with personalized digital tracking and patient recovery empowerment.",
        image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=2000",
        link: "https://ammarphysio.vercel.app/",
        alt: "Physiotherapist working with a patient"
    },
    {
        tag: "Professional Services",
        title: "Digital Excellence",
        description: "Expert Web Development and Physiotherapy consultations tailored for the modern professional landscape.",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000",
        link: "#services",
        alt: "Modern office workspace with laptop"
    }
];

// Slider Logic
const sliderContainer = document.getElementById('slider-container');
const dotsContainer = document.getElementById('slider-dots');
const prevBtn = document.getElementById('prev-slide');
const nextBtn = document.getElementById('next-slide');

let currentSlide = 0;

function initSlider() {
    // Create Slides
    slides.forEach((slide, index) => {
        const slideEl = document.createElement('div');
        slideEl.className = 'flex-[0_0_100%] min-w-0 relative h-full flex items-center justify-center bg-gray-950 overflow-hidden';
        slideEl.setAttribute('role', 'tabpanel');
        slideEl.setAttribute('aria-hidden', index !== 0);
        slideEl.innerHTML = `
            <div class="absolute inset-0 z-0">
                <img src="${slide.image}" alt="${slide.alt}" class="w-full h-full object-cover opacity-50">
                <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
            </div>
            <div class="relative z-10 max-w-4xl mx-auto px-6 text-center -mt-24 md:-mt-32 fade-in">
                <span class="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] text-white uppercase bg-slate-900/90 backdrop-blur-md rounded-full shadow-xl">
                    ${slide.tag}
                </span>
                <h1 class="text-3xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-8 leading-tight tracking-tight drop-shadow-2xl">
                    ${slide.title}
                </h1>
                <p class="text-base md:text-2xl text-gray-100 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-lg">
                    ${slide.description}
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6">
                    <button onclick="window.open('${slide.link}', '_blank')" class="w-full sm:w-auto rounded-full px-8 py-4 bg-white text-black font-bold hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2">
                        View Project <i data-lucide="external-link" class="w-4 h-4" aria-hidden="true"></i>
                    </button>
                    <button class="w-full sm:w-auto rounded-full px-8 py-4 bg-slate-900 text-white font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
                        Learn More <i data-lucide="info" class="w-4 h-4" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        `;
        sliderContainer.appendChild(slideEl);

        // Create Dot
        const dot = document.createElement('button');
        dot.className = `h-2 transition-all duration-700 rounded-full bg-white/30 hover:bg-white/60 ${index === 0 ? 'w-16 bg-white' : 'w-4'}`;
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-selected', index === 0);
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    lucide.createIcons();
}

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update slides visibility for screen readers
    const slideElements = sliderContainer.querySelectorAll('[role="tabpanel"]');
    slideElements.forEach((el, index) => {
        el.setAttribute('aria-hidden', index !== currentSlide);
    });

    // Update dots
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('w-16', 'bg-white');
            dot.classList.remove('w-4', 'bg-white/30');
            dot.setAttribute('aria-selected', 'true');
        } else {
            dot.classList.remove('w-16', 'bg-white');
            dot.classList.add('w-4', 'bg-white/30');
            dot.setAttribute('aria-selected', 'false');
        }
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Auto play
let autoPlayInterval = setInterval(nextSlide, 5000);

// Pause auto play on hover or focus
const sliderSection = document.querySelector('section[aria-label="Featured Projects Slider"]');
sliderSection.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
sliderSection.addEventListener('mouseleave', () => autoPlayInterval = setInterval(nextSlide, 5000));
sliderSection.addEventListener('focusin', () => clearInterval(autoPlayInterval));
sliderSection.addEventListener('focusout', () => autoPlayInterval = setInterval(nextSlide, 5000));

// Initialize
initSlider();
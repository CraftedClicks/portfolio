// Tailwind Configuration
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#dad9df",
        "surface-container-low": "#f4f3f8",
        "on-primary-fixed": "#351000",
        "surface-tint": "#a04100",
        "surface": "#faf9fe",
        "secondary-container": "#e2dfde",
        "on-tertiary-container": "#2f3132",
        "on-error-container": "#93000a",
        "surface-container-high": "#e9e7ed",
        "on-primary-container": "#572000",
        "outline-variant": "#e2bfb0",
        "on-tertiary-fixed-variant": "#454747",
        "background": "#faf9fe",
        "secondary-fixed-dim": "#c8c6c5",
        "on-secondary": "#ffffff",
        "surface-container": "#eeedf3",
        "primary": "#a04100",
        "secondary": "#5f5e5e",
        "tertiary-fixed-dim": "#c6c6c7",
        "on-secondary-container": "#636262",
        "inverse-surface": "#2f3034",
        "primary-fixed": "#ffdbcc",
        "surface-bright": "#faf9fe",
        "on-primary-fixed-variant": "#7a3000",
        "on-secondary-fixed-variant": "#474746",
        "secondary-fixed": "#e5e2e1",
        "on-secondary-fixed": "#1c1b1b",
        "on-surface": "#1a1b1f",
        "on-error": "#ffffff",
        "on-background": "#1a1b1f",
        "inverse-primary": "#ffb693",
        "primary-container": "#ff6b00",
        "tertiary-fixed": "#e2e2e2",
        "error-container": "#ffdad6",
        "on-primary": "#ffffff",
        "surface-variant": "#e3e2e7",
        "on-tertiary": "#ffffff",
        "tertiary": "#5d5f5f",
        "primary-fixed-dim": "#ffb693",
        "error": "#ba1a1a",
        "surface-container-highest": "#e3e2e7",
        "inverse-on-surface": "#f1f0f5",
        "outline": "#8e7164",
        "on-surface-variant": "#5a4136",
        "tertiary-container": "#989999",
        "on-tertiary-fixed": "#1a1c1c"
      },
      "borderRadius": {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      "spacing": {
        "container-max": "1280px",
        "gutter": "32px",
        "margin-mobile": "20px",
        "section-padding": "120px",
        "unit": "8px",
        "margin-desktop": "64px"
      },
      "fontFamily": {
        "display-lg": ["Montserrat"],
        "label-caps": ["Montserrat"],
        "body-lg": ["Inter"],
        "headline-md": ["Montserrat"],
        "headline-lg": ["Montserrat"],
        "headline-lg-mobile": ["Montserrat"],
        "body-md": ["Inter"]
      },
      "fontSize": {
        "display-lg": ["72px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.15em", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }],
        "headline-md": ["32px", { "lineHeight": "1.3", "letterSpacing": "0.02em", "fontWeight": "600" }],
        "headline-lg": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }]
      }
    }
  }
};

// Global FAQ toggle function
function toggleFaq(button) {
  const item = button.parentElement;
  const isActive = item.classList.contains('active');
  
  // Close all items
  document.querySelectorAll('.faq-accordion-item').forEach(el => {
    el.classList.remove('active');
  });

  // If it wasn't active, open it
  if (!isActive) {
    item.classList.add('active');
  }
}

// Interactions & Animations Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Hamburger Toggle (Drawer overlay mode)
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuCloseBtn = document.getElementById('mobile-menu-close-btn');
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  const menuDrawer = document.getElementById('mobile-menu-drawer');
  const menuBackdrop = document.getElementById('mobile-menu-backdrop');

  function openMobileMenu() {
    if (menuOverlay && menuDrawer) {
      menuOverlay.classList.remove('hidden');
      setTimeout(() => {
        menuDrawer.classList.remove('translate-x-full');
        menuDrawer.classList.add('translate-x-0');
      }, 10);
    }
  }

  function closeMobileMenu() {
    if (menuOverlay && menuDrawer) {
      menuDrawer.classList.remove('translate-x-0');
      menuDrawer.classList.add('translate-x-full');
      setTimeout(() => {
        menuOverlay.classList.add('hidden');
      }, 300);
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', openMobileMenu);
  }
  if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', closeMobileMenu);
  }
  if (menuBackdrop) {
    menuBackdrop.addEventListener('click', closeMobileMenu);
  }
  // Close menu on link clicks
  document.querySelectorAll('#mobile-menu-drawer a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });


  // FAQ Search Interactivity
  const searchInput = document.querySelector('input[placeholder="Search for answers..."]');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const items = document.querySelectorAll('.faq-accordion-item');
      
      items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(term) ? 'block' : 'none';
      });
    });
  }

  // Billing Toggle Logic (Pricing page)
  const toggleBtn = document.getElementById('toggle-btn');
  if (toggleBtn) {
    const toggleDot = document.getElementById('toggle-dot');
    const priceWeb = document.getElementById('price-web');
    const priceEcom = document.getElementById('price-ecom');
    const cycleWeb = document.getElementById('cycle-web');
    const cycleEcom = document.getElementById('cycle-ecom');
    let isYearly = false;

    toggleBtn.addEventListener('click', () => {
      isYearly = !isYearly;
      if (isYearly) {
        if (toggleDot) toggleDot.style.transform = 'translateX(1.5rem)';
        toggleBtn.classList.add('bg-primary-container/40');
        if (priceWeb) priceWeb.textContent = priceWeb.dataset.yearly;
        if (priceEcom) priceEcom.textContent = priceEcom.dataset.yearly;
        if (cycleWeb) cycleWeb.textContent = '/year';
        if (cycleEcom) cycleEcom.textContent = '/year';
      } else {
        if (toggleDot) toggleDot.style.transform = 'translateX(0)';
        toggleBtn.classList.remove('bg-primary-container/40');
        if (priceWeb) priceWeb.textContent = priceWeb.dataset.monthly;
        if (priceEcom) priceEcom.textContent = priceEcom.dataset.monthly;
        if (cycleWeb) cycleWeb.textContent = '/month';
        if (cycleEcom) cycleEcom.textContent = '/month';
      }
    });
  }

  // Portfolio page filter buttons state changes
  const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-primary-container', 'text-on-primary');
        b.classList.add('bg-white', 'border', 'border-outline-variant/30', 'text-secondary');
      });
      btn.classList.add('bg-primary-container', 'text-on-primary');
      btn.classList.remove('bg-white', 'border', 'border-outline-variant/30', 'text-secondary');
    });
  });

  // Micro-interactions glow cards
  document.querySelectorAll('.premium-card-shadow').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Contact Form Label Highlight
  document.querySelectorAll('.contact-input-field').forEach(el => {
    el.addEventListener('focus', () => {
      const label = el.parentElement.querySelector('label');
      if (label) label.classList.add('text-primary');
    });
    el.addEventListener('blur', () => {
      const label = el.parentElement.querySelector('label');
      if (label) label.classList.remove('text-primary');
    });
  });

  // Testimonials Masonry Entrance
  const testimonials = document.querySelectorAll('.testimonial-card');
  if (testimonials.length > 0) {
    testimonials.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      setTimeout(() => {
        card.style.transition = 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }

  // Scroll animations via IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.step-card, section > div.max-w-container-max').forEach(el => {
    if (!el.classList.contains('no-animate')) {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
      observer.observe(el);
    }
  });
});

// Scroll shadow behavior for top navigation bar
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add('py-2', 'shadow-md');
      nav.classList.remove('py-4', 'shadow-sm');
    } else {
      nav.classList.add('py-4', 'shadow-sm');
      nav.classList.remove('py-2', 'shadow-md');
    }
  }
});

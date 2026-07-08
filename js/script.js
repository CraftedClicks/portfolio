// Tailwind Configuration
if (typeof tailwind !== 'undefined') {
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
}

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
  // 1. Dynamic Favicon injection
  if (!document.querySelector('link[rel="icon"]')) {
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.href = 'favicon.png';
    document.head.appendChild(faviconLink);
  }

  // 2. Dynamic AOS (Scroll Animations) Injection
  if (!document.querySelector('link[href*="aos.css"]')) {
    const aosCss = document.createElement('link');
    aosCss.rel = 'stylesheet';
    aosCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
    document.head.appendChild(aosCss);
  }

  if (!window.AOS) {
    const aosJs = document.createElement('script');
    aosJs.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
    aosJs.onload = () => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
      // Add AOS attributes to sections
      document.querySelectorAll('section').forEach((sec, idx) => {
        if (!sec.hasAttribute('data-aos') && !sec.classList.contains('no-animate')) {
          sec.setAttribute('data-aos', idx % 2 === 0 ? 'fade-up' : 'fade-in');
        }
      });
    };
    document.body.appendChild(aosJs);
  }

  // 3. Dynamic WhatsApp Floating Button (Desktop)
  const desktopWA = document.createElement('a');
  desktopWA.href = 'https://wa.me/9190970868101';
  desktopWA.target = '_blank';
  desktopWA.className = 'fixed bottom-6 right-6 z-40 bg-[#25d366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center whatsapp-bounce hover:bg-[#128c7e] transition-all duration-300 md:bottom-8 md:right-8 hidden md:flex w-14 h-14';
  desktopWA.setAttribute('aria-label', 'Chat on WhatsApp');
  desktopWA.innerHTML = `<svg class="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.507 0 9.961-4.45 9.964-9.943.001-2.661-1.036-5.159-2.925-7.047C16.424 1.727 13.93 .69 11.269.69c-5.51 0-9.965 4.45-9.968 9.944-.001 1.937.52 3.5 1.505 4.966L1.8 20.8l5.848-1.533zm11.758-6.84c-.266-.134-1.579-.78-1.823-.866-.244-.087-.422-.132-.6.134-.178.266-.689.866-.844 1.045-.156.178-.311.2-.577.067-.266-.134-1.124-.414-2.14-1.32-.79-.705-1.324-1.577-1.48-1.844-.155-.266-.016-.41.117-.542.12-.119.266-.31.4-.466.133-.156.177-.266.266-.444.09-.178.044-.333-.022-.466-.067-.134-.6-1.446-.823-1.98-.216-.52-.453-.45-.6-.458-.152-.008-.326-.01-.5-.01-.174 0-.458.065-.697.326-.24.262-.915.893-.915 2.178 0 1.285.934 2.527 1.064 2.7.13.174 1.838 2.808 4.454 3.935.622.268 1.11.428 1.488.548.625.2 1.193.172 1.642.105.502-.075 1.579-.646 1.802-1.238.223-.593.223-1.1.156-1.206-.067-.107-.244-.174-.51-.307z"/></svg>`;
  document.body.appendChild(desktopWA);

  // 4. Dynamic Sticky Bottom Bar (Mobile only)
  const mobileBar = document.createElement('div');
  mobileBar.className = 'fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-outline-variant/20 flex justify-around items-center py-2 shadow-2xl md:hidden';
  mobileBar.innerHTML = `
    <a href="tel:+9190970868101" class="flex flex-col items-center justify-center text-primary font-medium text-xs gap-1 py-1 flex-1 border-r border-outline-variant/10">
      <span class="material-symbols-outlined text-xl">call</span>
      <span>Call</span>
    </a>
    <a href="https://wa.me/9190970868101" target="_blank" class="flex flex-col items-center justify-center text-[#25d366] font-medium text-xs gap-1 py-1 flex-1 border-r border-outline-variant/10">
      <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.507 0 9.961-4.45 9.964-9.943.001-2.661-1.036-5.159-2.925-7.047C16.424 1.727 13.93 .69 11.269.69c-5.51 0-9.965 4.45-9.968 9.944-.001 1.937.52 3.5 1.505 4.966L1.8 20.8l5.848-1.533zm11.758-6.84c-.266-.134-1.579-.78-1.823-.866-.244-.087-.422-.132-.6.134-.178.266-.689.866-.844 1.045-.156.178-.311.2-.577.067-.266-.134-1.124-.414-2.14-1.32-.79-.705-1.324-1.577-1.48-1.844-.155-.266-.016-.41.117-.542.12-.119.266-.31.4-.466.133-.156.177-.266.266-.444.09-.178.044-.333-.022-.466-.067-.134-.6-1.446-.823-1.98-.216-.52-.453-.45-.6-.458-.152-.008-.326-.01-.5-.01-.174 0-.458.065-.697.326-.24.262-.915.893-.915 2.178 0 1.285.934 2.527 1.064 2.7.13.174 1.838 2.808 4.454 3.935.622.268 1.11.428 1.488.548.625.2 1.193.172 1.642.105.502-.075 1.579-.646 1.802-1.238.223-.593.223-1.1.156-1.206-.067-.107-.244-.174-.51-.307z"/></svg>
      <span>WhatsApp</span>
    </a>
    <a href="contact.html" class="flex flex-col items-center justify-center text-primary font-medium text-xs gap-1 py-1 flex-1">
      <span class="material-symbols-outlined text-xl">workspace_premium</span>
      <span>Free Audit</span>
    </a>
  `;
  document.body.appendChild(mobileBar);
  const mainEl = document.querySelector('main');
  if (mainEl) {
    mainEl.classList.add('pb-16', 'md:pb-0');
  }

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

      // Fix Menu: When hamburger opens, highlight "Home"
      document.querySelectorAll('#mobile-menu-drawer a').forEach(el => {
        const href = el.getAttribute('href');
        if (href === 'index.html' || el.classList.contains('mobile-nav-link-home')) {
          el.classList.add('text-primary', 'font-bold');
          el.classList.remove('text-on-surface-variant', 'font-medium');
        } else if (href !== 'contact.html' && !el.classList.contains('bg-primary-container')) {
          el.classList.remove('text-primary', 'font-bold');
          el.classList.add('text-on-surface-variant', 'font-medium');
        }
      });
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
  const projectCards = document.querySelectorAll('.project-card');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-primary-container', 'text-on-primary');
        b.classList.add('bg-white', 'border', 'border-outline-variant/30', 'text-secondary');
      });
      btn.classList.add('bg-primary-container', 'text-on-primary');
      btn.classList.remove('bg-white', 'border', 'border-outline-variant/30', 'text-secondary');

      const filterValue = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        if (filterValue === 'all') {
          card.style.display = 'block';
        } else {
          if (card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        }
      });
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

  // Contact Form Auto-Select Interest based on URL Plan parameter
  const urlParams = new URLSearchParams(window.location.search);
  const planParam = urlParams.get('plan');
  if (planParam) {
    const webCheck = document.getElementById('service-web-design');
    const devCheck = document.getElementById('service-development');
    if (planParam === 'web' || planParam === 'basic') {
      if (webCheck) webCheck.checked = true;
      if (devCheck) devCheck.checked = true;
    } else if (planParam === 'ecom' || planParam === 'store') {
      if (webCheck) webCheck.checked = true;
      if (devCheck) devCheck.checked = true;
      const detailsArea = document.querySelector('textarea');
      if (detailsArea) {
        detailsArea.value = "I am interested in setting up an E-commerce Website (Rs. 1,199/month). Please contact me to discuss details.";
      }
    }
  }

  // Premium Contact Form Submit Action with Modal
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameVal = document.getElementById('contact-name')?.value || 'Client';
      const emailVal = document.getElementById('contact-email')?.value || 'contact@example.com';
      
      const successModal = document.createElement('div');
      successModal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4';
      successModal.innerHTML = `
        <div class="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full text-center space-y-6 transform scale-95 transition-transform duration-300">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
            <span class="material-symbols-outlined text-5xl">check_circle</span>
          </div>
          <h3 class="font-headline-md text-2xl text-on-surface">Inquiry Received!</h3>
          <p class="text-secondary text-sm">Thank you, ${nameVal}. Our team will contact you at ${emailVal} within 24 hours.</p>
          <button class="bg-primary-container text-white px-8 py-3 rounded-full font-label-caps text-label-caps hover:scale-[1.02] transition-all w-full close-modal-btn">
            Close
          </button>
        </div>
      `;
      document.body.appendChild(successModal);
      setTimeout(() => {
        successModal.querySelector('.transform').classList.remove('scale-95');
        successModal.querySelector('.transform').classList.add('scale-100');
      }, 50);

      successModal.querySelector('.close-modal-btn').addEventListener('click', () => {
        successModal.remove();
        contactForm.reset();
      });
    });
  }

  // Global CTA Redirect and Anchor Handlers for all buttons
  document.querySelectorAll('button, a').forEach(el => {
    const isButton = el.tagName.toLowerCase() === 'button';
    const text = el.textContent.trim().toLowerCase();
    
    if (isButton) {
      if (text.includes('choose basic plan')) {
        el.addEventListener('click', () => { window.location.href = 'contact.html?plan=web'; });
      } else if (text.includes('start your store')) {
        el.addEventListener('click', () => { window.location.href = 'contact.html?plan=ecom'; });
      } else if (text.includes('view pricing')) {
        el.addEventListener('click', () => {
          const pricingSection = document.getElementById('pricing-section');
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = 'pricing.html';
          }
        });
      } else if (text.includes('our work') || text.includes('explore capabilities')) {
        el.addEventListener('click', () => { window.location.href = 'portfolio.html'; });
      } else if (text.includes('download portfolio') || text.includes('start project') || text.includes('get started')) {
        el.addEventListener('click', () => { window.location.href = 'contact.html'; });
      }
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

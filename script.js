"use strict";

const categories = [
  { name: "Electronics", icon: "monitor-smartphone" },
  { name: "Mobiles", icon: "smartphone" },
  { name: "Fashion", icon: "shirt" },
  { name: "Home", icon: "house" },
  { name: "Kitchen", icon: "cooking-pot" },
  { name: "Beauty", icon: "sparkles" },
  { name: "Travel", icon: "plane" },
  { name: "Books", icon: "book-open" },
  { name: "Gaming", icon: "gamepad-2" },
  { name: "Accessories", icon: "watch" }
];

const storeLinks = {
  Amazon: "https://www.amazon.in/",
  Flipkart: "https://www.flipkart.com/",
  Myntra: "https://www.myntra.com/",
  Ajio: "https://www.ajio.com/",
  Nykaa: "https://www.nykaa.com/",
  Croma: "https://www.croma.com/",
  "Reliance Digital": "https://www.reliancedigital.in/"
};

const deals = [
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones with 50-Hour Battery",
    category: "Electronics",
    store: "Amazon",
    originalPrice: 7999,
    salePrice: 3499,
    rating: 4.5,
    coupon: "Extra ₹300 coupon",
    flash: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=82",
    description: "Comfortable over-ear headphones with active noise cancellation, fast charging, and a long battery life."
  },
  {
    id: 2,
    title: "5G Smartphone with AMOLED Display and 128GB Storage",
    category: "Mobiles",
    store: "Flipkart",
    originalPrice: 24999,
    salePrice: 17999,
    rating: 4.4,
    coupon: "Bank offer available",
    flash: false,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=82",
    description: "A balanced 5G smartphone with an AMOLED screen, dependable cameras, and all-day battery performance."
  },
  {
    id: 3,
    title: "Premium Running Shoes with Cushioned Sole",
    category: "Fashion",
    store: "Myntra",
    originalPrice: 4999,
    salePrice: 2249,
    rating: 4.3,
    coupon: "Use RUN10",
    flash: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=82",
    description: "Lightweight running shoes with breathable material and a soft, supportive midsole for everyday use."
  },
  {
    id: 4,
    title: "Smart Air Fryer with Digital Controls and 6 Presets",
    category: "Kitchen",
    store: "Croma",
    originalPrice: 8999,
    salePrice: 5299,
    rating: 4.6,
    coupon: "Instant ₹500 off",
    flash: false,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=82",
    description: "A family-size digital air fryer with adjustable temperature, presets, and an easy-clean basket."
  },
  {
    id: 5,
    title: "Minimal Analog Watch with Leather Strap",
    category: "Accessories",
    store: "Ajio",
    originalPrice: 3499,
    salePrice: 1399,
    rating: 4.2,
    coupon: "Extra 10% at checkout",
    flash: false,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=82",
    description: "A clean everyday watch with a slim dial, leather strap, and versatile styling."
  },
  {
    id: 6,
    title: "Hydrating Skincare Essentials Gift Set",
    category: "Beauty",
    store: "Nykaa",
    originalPrice: 2999,
    salePrice: 1799,
    rating: 4.7,
    coupon: "Free mini on ₹1499",
    flash: false,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=82",
    description: "A curated skincare set featuring gentle cleansing, hydration, and barrier-support products."
  },
  {
    id: 7,
    title: "Compact Cabin Luggage with 8-Wheel Spinner",
    category: "Travel",
    store: "Amazon",
    originalPrice: 6499,
    salePrice: 3199,
    rating: 4.4,
    coupon: "Extra ₹200 coupon",
    flash: true,
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=900&q=82",
    description: "A lightweight cabin suitcase with smooth spinner wheels, organized interiors, and a secure lock."
  },
  {
    id: 8,
    title: "Mechanical Gaming Keyboard with RGB Backlight",
    category: "Gaming",
    store: "Flipkart",
    originalPrice: 4599,
    salePrice: 2299,
    rating: 4.5,
    coupon: "Combo offer available",
    flash: true,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=82",
    description: "A tactile mechanical keyboard with customizable lighting, compact layout, and durable key switches."
  },
  {
    id: 9,
    title: "Soft Cotton Bedsheet Set with Two Pillow Covers",
    category: "Home",
    store: "Myntra",
    originalPrice: 2499,
    salePrice: 999,
    rating: 4.1,
    coupon: "Use HOME15",
    flash: false,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=900&q=82",
    description: "A breathable cotton bedsheet set with a subtle pattern and two coordinated pillow covers."
  },
  {
    id: 10,
    title: "Bestselling Personal Finance Paperback Collection",
    category: "Books",
    store: "Amazon",
    originalPrice: 1999,
    salePrice: 1049,
    rating: 4.8,
    coupon: "Buy 2, get extra 5%",
    flash: false,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=82",
    description: "A practical collection covering money habits, investing basics, and long-term financial thinking."
  },
  {
    id: 11,
    title: "Portable Bluetooth Speaker with Deep Bass",
    category: "Electronics",
    store: "Reliance Digital",
    originalPrice: 5999,
    salePrice: 2999,
    rating: 4.4,
    coupon: "Card discount available",
    flash: true,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=82",
    description: "A portable wireless speaker with rich sound, splash resistance, and convenient USB-C charging."
  },
  {
    id: 12,
    title: "Classic Structured Handbag with Detachable Strap",
    category: "Fashion",
    store: "Ajio",
    originalPrice: 3999,
    salePrice: 1599,
    rating: 4.3,
    coupon: "Extra 12% off",
    flash: false,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=82",
    description: "A structured handbag with multiple compartments and a detachable shoulder strap."
  },
  {
    id: 13,
    title: "Stainless Steel Cookware Set for Everyday Cooking",
    category: "Kitchen",
    store: "Amazon",
    originalPrice: 6999,
    salePrice: 3799,
    rating: 4.5,
    coupon: "Extra ₹250 coupon",
    flash: false,
    image: "https://images.unsplash.com/photo-1584990347449-a2d4c2c60f77?auto=format&fit=crop&w=900&q=82",
    description: "A durable stainless steel cookware set designed for daily cooking and easy maintenance."
  },
  {
    id: 14,
    title: "Compact Mirrorless Camera for Travel Creators",
    category: "Electronics",
    store: "Croma",
    originalPrice: 62999,
    salePrice: 52999,
    rating: 4.7,
    coupon: "No-cost EMI available",
    flash: false,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=82",
    description: "A compact mirrorless camera with quick autofocus, interchangeable lenses, and high-quality video."
  },
  {
    id: 15,
    title: "Everyday Backpack with Laptop Compartment",
    category: "Accessories",
    store: "Flipkart",
    originalPrice: 2499,
    salePrice: 1199,
    rating: 4.2,
    coupon: "Special price active",
    flash: true,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=82",
    description: "A clean, functional backpack with organized storage and a padded laptop compartment."
  },
  {
    id: 16,
    title: "Smart Fitness Band with Heart Rate and Sleep Tracking",
    category: "Accessories",
    store: "Amazon",
    originalPrice: 4499,
    salePrice: 1999,
    rating: 4.3,
    coupon: "Extra ₹150 coupon",
    flash: false,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=900&q=82",
    description: "A lightweight fitness band with activity, heart rate, sleep, and notification tracking."
  }
];

const brands = ["Amazon", "Flipkart", "Myntra", "Ajio", "Nykaa", "Croma", "Reliance Digital"];

const coupons = [
  { store: "Amazon", title: "Extra savings on electronics", description: "Eligible electronics orders above ₹2,999. Selected products only.", code: "TECH300", expiry: "Ends Sunday", terms: "Min. spend ₹2,999" },
  { store: "Myntra", title: "Fashion checkout discount", description: "Additional discount on selected fashion and footwear styles.", code: "STYLE15", expiry: "Limited period", terms: "Selected users" },
  { store: "Nykaa", title: "Beauty essentials offer", description: "Save on selected skincare, makeup, and personal care products.", code: "GLOW10", expiry: "Ends in 3 days", terms: "Min. spend ₹1,499" }
];

const state = {
  category: "All",
  search: "",
  sort: "featured",
  page: 1,
  itemsPerPage: 8,
  wishlisted: new Set(JSON.parse(localStorage.getItem("valuekart-wishlist") || "[]"))
};

const elements = {};
let lastFocusedElement = null;

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function calculateDiscount(deal) {
  return Math.round(((deal.originalPrice - deal.salePrice) / deal.originalPrice) * 100);
}

function calculateSavings(deal) {
  return deal.originalPrice - deal.salePrice;
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { "aria-hidden": "true" } });
  }
}

function renderCategories() {
  elements.categoryGrid.innerHTML = categories.map((category) => `
    <button class="category-card fade-up" type="button" data-category="${category.name}" aria-label="View ${category.name} deals">
      <span class="category-icon"><i data-lucide="${category.icon}"></i></span>
      <strong>${category.name}</strong>
    </button>
  `).join("");

  elements.categoryGrid.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.category;
      state.search = "";
      state.page = 1;
      elements.dealSearch.value = "";
      updateSearchClear();
      renderFilterChips();
      renderDeals();
      document.querySelector("#deals").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderFilterChips() {
  const filterCategories = ["All", ...new Set(deals.map((deal) => deal.category))];
  elements.filterChips.innerHTML = filterCategories.map((category) => `
    <button class="filter-chip ${state.category === category ? "active" : ""}" type="button" data-filter="${category}" aria-pressed="${state.category === category}">${category}</button>
  `).join("");

  elements.filterChips.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.category = button.dataset.filter;
      state.page = 1;
      renderFilterChips();
      renderDeals();
    });
  });
}

function getFilteredDeals() {
  const term = state.search.trim().toLowerCase();

  const filtered = deals.filter((deal) => {
    const matchesCategory = state.category === "All" || deal.category === state.category;
    const searchable = `${deal.title} ${deal.category} ${deal.store} ${deal.coupon}`.toLowerCase();
    return matchesCategory && (!term || searchable.includes(term));
  });

  return filtered.sort((a, b) => {
    switch (state.sort) {
      case "discount-desc":
        return calculateDiscount(b) - calculateDiscount(a);
      case "price-asc":
        return a.salePrice - b.salePrice;
      case "price-desc":
        return b.salePrice - a.salePrice;
      case "rating-desc":
        return b.rating - a.rating;
      default:
        return Number(b.flash) - Number(a.flash) || b.rating - a.rating;
    }
  });
}

function dealCardTemplate(deal) {
  const discount = calculateDiscount(deal);
  const wishlisted = state.wishlisted.has(deal.id);

  return `
    <article class="deal-card">
      <div class="deal-image-wrap">
        <img src="${deal.image}" alt="${deal.title}" loading="lazy" decoding="async">
        <span class="discount-badge">${discount}% OFF</span>
        ${deal.flash ? '<span class="flash-badge"><i data-lucide="zap"></i> Limited time</span>' : ""}
        <div class="card-actions">
          <button class="card-action wishlist-button ${wishlisted ? "active" : ""}" type="button" data-wishlist="${deal.id}" aria-label="${wishlisted ? "Remove from" : "Add to"} wishlist" aria-pressed="${wishlisted}">
            <i data-lucide="heart"></i>
          </button>
          <button class="card-action share-button" type="button" data-share="${deal.id}" aria-label="Share ${deal.title}">
            <i data-lucide="share-2"></i>
          </button>
        </div>
      </div>
      <div class="deal-card-body">
        <div class="store-line">
          <span class="store-badge"><span class="store-dot"></span>${deal.store}</span>
          <span class="rating"><i data-lucide="star"></i>${deal.rating}</span>
        </div>
        <h3 class="deal-title">${deal.title}</h3>
        <div class="price-row">
          <span class="sale-price">${formatCurrency(deal.salePrice)}</span>
          <span class="original-price">${formatCurrency(deal.originalPrice)}</span>
          <span class="savings">Save ${formatCurrency(calculateSavings(deal))}</span>
        </div>
        <div class="coupon-row">
          <span class="coupon-badge">COUPON</span>
          <span>${deal.coupon}</span>
        </div>
        <div class="deal-card-footer">
          <a class="button grab-deal-button" href="${storeLinks[deal.store]}" target="_blank" rel="nofollow sponsored noopener">Grab Deal <i data-lucide="external-link"></i></a>
          <button class="button quick-view-button" type="button" data-quick-view="${deal.id}" aria-label="Quick view ${deal.title}"><i data-lucide="eye"></i></button>
        </div>
      </div>
    </article>
  `;
}

function showSkeletons() {
  elements.dealGrid.innerHTML = Array.from({ length: 8 }, () => `
    <div class="skeleton-card" aria-hidden="true">
      <div class="skeleton skeleton-image"></div>
      <div class="skeleton-lines">
        <div class="skeleton skeleton-line tiny"></div>
        <div class="skeleton skeleton-line"></div>
        <div class="skeleton skeleton-line short"></div>
        <div class="skeleton skeleton-line"></div>
      </div>
    </div>
  `).join("");
}

function renderDeals() {
  const filteredDeals = getFilteredDeals();
  const totalPages = Math.max(1, Math.ceil(filteredDeals.length / state.itemsPerPage));

  if (state.page > totalPages) state.page = totalPages;

  const start = (state.page - 1) * state.itemsPerPage;
  const paginatedDeals = filteredDeals.slice(start, start + state.itemsPerPage);

  elements.resultsCount.textContent = `${filteredDeals.length} verified deal${filteredDeals.length === 1 ? "" : "s"} found`;
  elements.dealGrid.innerHTML = paginatedDeals.map(dealCardTemplate).join("");
  elements.emptyState.hidden = filteredDeals.length !== 0;
  elements.dealGrid.hidden = filteredDeals.length === 0;
  elements.pagination.hidden = filteredDeals.length === 0;

  renderPagination(totalPages);
  bindDealCardEvents();
  refreshIcons();
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    elements.pagination.innerHTML = "";
    return;
  }

  const pageButtons = Array.from({ length: totalPages }, (_, index) => index + 1)
    .map((page) => `<button class="page-button ${state.page === page ? "active" : ""}" type="button" data-page="${page}" aria-label="Go to page ${page}" aria-current="${state.page === page ? "page" : "false"}">${page}</button>`)
    .join("");

  elements.pagination.innerHTML = `
    <button class="page-button" type="button" data-page="${state.page - 1}" aria-label="Previous page" ${state.page === 1 ? "disabled" : ""}><i data-lucide="chevron-left"></i></button>
    ${pageButtons}
    <button class="page-button" type="button" data-page="${state.page + 1}" aria-label="Next page" ${state.page === totalPages ? "disabled" : ""}><i data-lucide="chevron-right"></i></button>
  `;

  elements.pagination.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.disabled) return;
      state.page = Number(button.dataset.page);
      renderDeals();
      document.querySelector("#deals").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function bindDealCardEvents() {
  elements.dealGrid.querySelectorAll("[data-wishlist]").forEach((button) => {
    button.addEventListener("click", () => toggleWishlist(Number(button.dataset.wishlist)));
  });

  elements.dealGrid.querySelectorAll("[data-share]").forEach((button) => {
    button.addEventListener("click", () => shareDeal(Number(button.dataset.share)));
  });

  elements.dealGrid.querySelectorAll("[data-quick-view]").forEach((button) => {
    button.addEventListener("click", () => openDealModal(Number(button.dataset.quickView)));
  });
}

function toggleWishlist(id) {
  if (state.wishlisted.has(id)) {
    state.wishlisted.delete(id);
    showToast("Removed from your wishlist.");
  } else {
    state.wishlisted.add(id);
    showToast("Saved to your wishlist.");
  }

  localStorage.setItem("valuekart-wishlist", JSON.stringify([...state.wishlisted]));
  renderDeals();
}

async function shareDeal(id) {
  const deal = deals.find((item) => item.id === id);
  const shareData = {
    title: deal.title,
    text: `${deal.title} for ${formatCurrency(deal.salePrice)} on ${deal.store}.`,
    url: storeLinks[deal.store]
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      showToast("Deal link copied.");
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("Unable to share this deal.");
  }
}

function openDealModal(id) {
  const deal = deals.find((item) => item.id === id);
  if (!deal) return;

  elements.dealModalContent.innerHTML = `
    <div class="deal-modal-layout">
      <div class="deal-modal-image"><img src="${deal.image}" alt="${deal.title}"></div>
      <div class="deal-modal-info">
        <span class="store-badge"><span class="store-dot"></span>${deal.store}</span>
        <h2 id="dealModalTitle">${deal.title}</h2>
        <p>${deal.description}</p>
        <div class="price-row">
          <span class="sale-price">${formatCurrency(deal.salePrice)}</span>
          <span class="original-price">${formatCurrency(deal.originalPrice)}</span>
          <span class="discount-badge" style="position:static">${calculateDiscount(deal)}% OFF</span>
        </div>
        <div class="deal-modal-meta">
          <span>Coupon <strong>${deal.coupon}</strong></span>
          <span>Rating <strong>${deal.rating} / 5</strong></span>
          <span>You save <strong>${formatCurrency(calculateSavings(deal))}</strong></span>
        </div>
        <a class="button grab-deal-button full-width" href="${storeLinks[deal.store]}" target="_blank" rel="nofollow sponsored noopener">Continue to ${deal.store} <i data-lucide="external-link"></i></a>
      </div>
    </div>
  `;

  openModal(elements.dealModal);
  refreshIcons();
}

function renderBrands() {
  elements.brandGrid.innerHTML = brands.map((brand) => {
    const count = deals.filter((deal) => deal.store === brand).length;
    return `<a class="brand-card fade-up" href="${storeLinks[brand]}" target="_blank" rel="nofollow sponsored noopener">${brand}<span>${count} featured deal${count === 1 ? "" : "s"}</span></a>`;
  }).join("");
}

function renderCoupons() {
  elements.couponGrid.innerHTML = coupons.map((coupon) => `
    <article class="coupon-card fade-up">
      <div class="coupon-store"><strong>${coupon.store}</strong><span>${coupon.expiry}</span></div>
      <h3>${coupon.title}</h3>
      <p>${coupon.description}</p>
      <div class="coupon-code-row">
        <span class="coupon-code">${coupon.code}</span>
        <button class="copy-button" type="button" data-copy-code="${coupon.code}">Copy</button>
      </div>
      <div class="coupon-meta"><span>${coupon.terms}</span><span>Terms apply</span></div>
    </article>
  `).join("");

  elements.couponGrid.querySelectorAll("[data-copy-code]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copyCode);
        const originalText = button.textContent;
        button.textContent = "Copied";
        showToast(`Coupon ${button.dataset.copyCode} copied.`);
        window.setTimeout(() => { button.textContent = originalText; }, 1600);
      } catch {
        showToast("Copy failed. Select the code manually.");
      }
    });
  });
}

function updateSearchClear() {
  elements.clearSearch.hidden = elements.dealSearch.value.length === 0;
}

function resetFilters() {
  state.category = "All";
  state.search = "";
  state.sort = "featured";
  state.page = 1;
  elements.dealSearch.value = "";
  elements.sortDeals.value = "featured";
  updateSearchClear();
  renderFilterChips();
  renderDeals();
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i data-lucide="circle-check"></i><span>${message}</span>`;
  elements.toastRegion.appendChild(toast);
  refreshIcons();

  window.setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
  }, 2800);

  window.setTimeout(() => toast.remove(), 3200);
}

function openModal(modal) {
  lastFocusedElement = document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const focusable = modal.querySelector("input, button, a[href]");
  window.setTimeout(() => focusable?.focus(), 50);
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

function closeAllModals() {
  document.querySelectorAll(".modal.open").forEach(closeModal);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("valuekart-theme", theme);
  elements.themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  elements.themeToggle.innerHTML = `<i data-lucide="${theme === "dark" ? "sun" : "moon"}"></i>`;
  refreshIcons();
}

function initializeTheme() {
  const saved = localStorage.getItem("valuekart-theme");
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  setTheme(saved || preferred);
}

function updateCountdown() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(24, 0, 0, 0);
  const remaining = Math.max(0, end.getTime() - now.getTime());
  const hours = Math.floor(remaining / 3_600_000);
  const minutes = Math.floor((remaining % 3_600_000) / 60_000);
  const seconds = Math.floor((remaining % 60_000) / 1000);

  elements.hours.textContent = String(hours).padStart(2, "0");
  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
}

function initializeScrollAnimations() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".fade-up").forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });

  document.querySelectorAll(".fade-up").forEach((element) => observer.observe(element));
}

function initializeAccordions() {
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const panel = item.querySelector(".accordion-panel");
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".accordion-item.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
        openItem.querySelector(".accordion-panel").style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });
}

function initializeNavigation() {
  elements.mobileMenuButton.addEventListener("click", () => {
    const isOpen = elements.navMenu.classList.toggle("open");
    elements.mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
    elements.mobileMenuButton.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}"></i>`;
    refreshIcons();
  });

  elements.navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      elements.navMenu.classList.remove("open");
      elements.mobileMenuButton.setAttribute("aria-expanded", "false");
      elements.mobileMenuButton.innerHTML = '<i data-lucide="menu"></i>';
      refreshIcons();
    });
  });

  document.addEventListener("click", (event) => {
    if (!elements.navMenu.contains(event.target) && !elements.mobileMenuButton.contains(event.target)) {
      elements.navMenu.classList.remove("open");
      elements.mobileMenuButton.setAttribute("aria-expanded", "false");
    }
  });
}

function initializeSearch() {
  let searchTimer;

  elements.dealSearch.addEventListener("input", (event) => {
    updateSearchClear();
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
      state.search = event.target.value;
      state.page = 1;
      renderDeals();
    }, 180);
  });

  elements.clearSearch.addEventListener("click", () => {
    elements.dealSearch.value = "";
    state.search = "";
    state.page = 1;
    updateSearchClear();
    renderDeals();
    elements.dealSearch.focus();
  });

  elements.sortDeals.addEventListener("change", (event) => {
    state.sort = event.target.value;
    state.page = 1;
    renderDeals();
  });

  elements.resetFilters.addEventListener("click", resetFilters);
  elements.emptyReset.addEventListener("click", resetFilters);

  elements.navSearchTrigger.addEventListener("click", () => openModal(elements.searchModal));

  elements.globalSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      state.search = event.target.value.trim();
      state.category = "All";
      state.page = 1;
      elements.dealSearch.value = state.search;
      updateSearchClear();
      renderFilterChips();
      renderDeals();
      closeModal(elements.searchModal);
      document.querySelector("#deals").scrollIntoView({ behavior: "smooth" });
    }
  });

  document.querySelectorAll("[data-search-term]").forEach((button) => {
    button.addEventListener("click", () => {
      const term = button.dataset.searchTerm;
      state.search = term;
      state.category = "All";
      state.page = 1;
      elements.dealSearch.value = term;
      elements.globalSearch.value = term;
      updateSearchClear();
      renderFilterChips();
      renderDeals();
      closeModal(elements.searchModal);
      document.querySelector("#deals").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.addEventListener("keydown", (event) => {
    const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName);
    if (event.key === "/" && !isTyping) {
      event.preventDefault();
      openModal(elements.searchModal);
    }
    if (event.key === "Escape") closeAllModals();
  });
}

function initializeForms() {
  elements.newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = elements.newsletterEmail.value.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast("Enter a valid email address.");
      elements.newsletterEmail.focus();
      return;
    }

    showToast("Subscription confirmed for the demo.");
    elements.newsletterForm.reset();
  });

  elements.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Demo sign-in submitted.");
    elements.loginForm.reset();
    closeModal(elements.loginModal);
  });
}

function initializeModals() {
  document.querySelectorAll("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.getElementById(button.dataset.openModal);
      if (modal) openModal(modal);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => closeModal(button.closest(".modal")));
  });

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      const focusable = [...modal.querySelectorAll("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled])")];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  });
}

function initializeScrollUI() {
  const handleScroll = () => {
    const scrolled = window.scrollY > 20;
    elements.siteHeader.classList.toggle("scrolled", scrolled);
    elements.backToTop.classList.toggle("visible", window.scrollY > 600);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  elements.backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function cacheElements() {
  const ids = [
    "categoryGrid", "filterChips", "dealGrid", "resultsCount", "pagination", "emptyState", "dealSearch",
    "clearSearch", "sortDeals", "resetFilters", "emptyReset", "brandGrid", "couponGrid", "toastRegion",
    "dealModal", "dealModalContent", "loginModal", "searchModal", "globalSearch", "navSearchTrigger",
    "themeToggle", "mobileMenuButton", "navMenu", "backToTop", "currentYear", "newsletterForm",
    "newsletterEmail", "loginForm", "hours", "minutes", "seconds", "siteHeader"
  ];

  ids.forEach((id) => {
    elements[id] = document.getElementById(id);
  });
}

function init() {
  cacheElements();
  initializeTheme();
  renderCategories();
  renderFilterChips();
  renderBrands();
  renderCoupons();
  showSkeletons();

  initializeNavigation();
  initializeSearch();
  initializeAccordions();
  initializeForms();
  initializeModals();
  initializeScrollUI();

  elements.themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });

  elements.currentYear.textContent = new Date().getFullYear();
  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  window.setTimeout(() => {
    renderDeals();
    initializeScrollAnimations();
    refreshIcons();
  }, 650);
}

document.addEventListener("DOMContentLoaded", init);

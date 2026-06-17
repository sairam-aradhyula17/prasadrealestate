const currentPage = window.location.pathname.split('/').pop() || 'index.html';

function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

function qsa(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

function getWhatsAppUrl(message = 'Hi, I want property details.') {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

function propertyCard(property) {
  return `
    <article class="card property-card">
      <img class="property-img" src="${property.image}" alt="${property.title}">
      <div class="property-body">
        <div class="property-tags">
          <span class="tag">${property.type}</span>
          <span class="tag gold">${property.status}</span>
        </div>
        <h3>${property.title}</h3>
        <p class="meta">📍 ${property.location}</p>
        <p class="meta">📐 ${property.area}</p>
        <div class="price">${property.price}</div>
        <p>${property.shortDescription}</p>
        <div class="card-actions">
          <a class="btn btn-primary" href="property-details.html?id=${property.id}">View Details</a>
          <a class="btn btn-outline" target="_blank" href="${getWhatsAppUrl(`Hi, I am interested in ${property.title}. Please send details.`)}">WhatsApp</a>
        </div>
      </div>
    </article>
  `;
}

function renderProperties(list, containerId, limit = null) {
  const container = qs(`#${containerId}`);
  if (!container) return;

  const data = limit ? list.slice(0, limit) : list;
  if (data.length === 0) {
    container.innerHTML = `<div class="empty-state"><h3>No properties found</h3><p>Try changing location, property type, or budget filter.</p></div>`;
    return;
  }

  container.innerHTML = data.map(propertyCard).join('');
}

function setupFilters() {
  const filterForm = qs('#filterForm');
  const propertiesGrid = qs('#propertiesGrid');
  if (!filterForm || !propertiesGrid) return;

  const apply = () => {
    const keyword = qs('#keyword').value.trim().toLowerCase();
    const type = qs('#type').value;
    const location = qs('#location').value.trim().toLowerCase();
    const budget = qs('#budget').value;

    const filtered = properties.filter((item) => {
      const textMatch = !keyword || `${item.title} ${item.location} ${item.description} ${item.type}`.toLowerCase().includes(keyword);
      const typeMatch = !type || item.type === type;
      const locationMatch = !location || item.location.toLowerCase().includes(location);
      let budgetMatch = true;

      if (budget === 'low') budgetMatch = item.budget <= 2000000;
      if (budget === 'mid') budgetMatch = item.budget > 2000000 && item.budget <= 5000000;
      if (budget === 'high') budgetMatch = item.budget > 5000000;

      return textMatch && typeMatch && locationMatch && budgetMatch;
    });

    renderProperties(filtered, 'propertiesGrid');
  };

  filterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    apply();
  });

  qsa('input, select', filterForm).forEach((el) => el.addEventListener('change', apply));
  renderProperties(properties, 'propertiesGrid');
}

function setupHomeSearch() {
  const homeSearch = qs('#homeSearch');
  if (!homeSearch) return;

  homeSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    const type = qs('#homeType').value;
    const location = qs('#homeLocation').value;
    const budget = qs('#homeBudget').value;
    const params = new URLSearchParams();
    if (type) params.set('type', type);
    if (location) params.set('location', location);
    if (budget) params.set('budget', budget);
    window.location.href = `properties.html?${params.toString()}`;
  });
}

function applyUrlFilters() {
  if (currentPage !== 'properties.html') return;
  const params = new URLSearchParams(window.location.search);
  if (params.get('type') && qs('#type')) qs('#type').value = params.get('type');
  if (params.get('location') && qs('#location')) qs('#location').value = params.get('location');
  if (params.get('budget') && qs('#budget')) qs('#budget').value = params.get('budget');

  const form = qs('#filterForm');
  if (form) form.dispatchEvent(new Event('submit'));
}

function renderPropertyDetails() {
  const detailsRoot = qs('#propertyDetails');
  if (!detailsRoot) return;

  const id = Number(new URLSearchParams(window.location.search).get('id')) || properties[0].id;
  const property = properties.find((item) => item.id === id) || properties[0];
  document.title = `${property.title} | ${siteConfig.businessName}`;

  detailsRoot.innerHTML = `
    <div>
      <img id="mainPropertyImage" class="details-main-img" src="${property.image}" alt="${property.title}">
      <div class="gallery">
        ${property.gallery.map((img) => `<img src="${img}" alt="${property.title}" data-gallery-img="${img}">`).join('')}
      </div>
      <article class="card details-content" style="margin-top:24px;">
        <div class="property-tags">
          <span class="tag">${property.type}</span>
          <span class="tag gold">${property.status}</span>
        </div>
        <h2>${property.title}</h2>
        <p class="meta">📍 ${property.location}</p>
        <div class="price">${property.price}</div>
        <p>${property.description}</p>

        <div class="info-list">
          <div class="info-item"><small>Property Type</small><strong>${property.type}</strong></div>
          <div class="info-item"><small>Area / Size</small><strong>${property.area}</strong></div>
          <div class="info-item"><small>Status</small><strong>${property.status}</strong></div>
          <div class="info-item"><small>Location</small><strong>${property.location}</strong></div>
        </div>

        <h3>Property Features</h3>
        <ul class="features-list">
          ${property.features.map((feature) => `<li>✓ ${feature}</li>`).join('')}
        </ul>

        <h3>Location Map</h3>
        <iframe class="map-frame" src="${property.mapUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </article>
    </div>

    <aside>
      <div class="card sidebar-box">
        <h3>Interested in this property?</h3>
        <p class="section-text">Call or WhatsApp us. We will share full details, site visit timings, and latest availability.</p>
        <div style="display:grid; gap:12px; margin-top:18px;">
          <a class="btn btn-primary" href="tel:${siteConfig.phone}">📞 Call Now</a>
          <a class="btn btn-secondary" target="_blank" href="${getWhatsAppUrl(`Hi, I want details about ${property.title}.`)}">💬 WhatsApp Enquiry</a>
          <a class="btn btn-outline" href="properties.html">← Back to Properties</a>
        </div>
      </div>
    </aside>
  `;

  qsa('[data-gallery-img]').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      qs('#mainPropertyImage').src = thumb.dataset.galleryImg;
    });
  });
}

function fillSiteDetails() {
  qsa('[data-business-name]').forEach((el) => (el.textContent = siteConfig.businessName));
  qsa('[data-phone]').forEach((el) => (el.textContent = siteConfig.phone));
  qsa('[data-phone-link]').forEach((el) => (el.href = `tel:${siteConfig.phone}`));
  qsa('[data-email]').forEach((el) => (el.textContent = siteConfig.email));
  qsa('[data-email-link]').forEach((el) => (el.href = `mailto:${siteConfig.email}`));
  qsa('[data-address]').forEach((el) => (el.textContent = siteConfig.address));
  qsa('[data-whatsapp-link]').forEach((el) => (el.href = getWhatsAppUrl()));
  qsa('[data-map]').forEach((el) => (el.src = siteConfig.mapEmbedUrl));
  qsa('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
}

function setupMobileMenu() {
  const btn = qs('#menuBtn');
  const links = qs('#navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => links.classList.toggle('show'));
}

function setActiveNav() {
  qsa('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) link.classList.add('active');
  });
}

function setupContactForm() {
  const form = qs('#contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = qs('#name').value.trim();
    const phone = qs('#phone').value.trim();
    const message = qs('#message').value.trim();
    const text = `Hi, my name is ${name}. Phone: ${phone}. Message: ${message}`;
    window.open(getWhatsAppUrl(text), '_blank');
    form.reset();
  });
}

function init() {
  fillSiteDetails();
  setupMobileMenu();
  setActiveNav();
  setupHomeSearch();
  renderProperties(properties, 'featuredGrid', 3);
  renderProperties(properties, 'recentGrid', 6);
  setupFilters();
  applyUrlFilters();
  renderPropertyDetails();
  setupContactForm();
}

document.addEventListener('DOMContentLoaded', init);

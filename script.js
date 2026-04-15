// ── LOADER ──
// Hides the loading screen after 3 seconds
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 3000);
});

// ── PRODUCT DATA ──
// To add real product images, set the `image` field to a path like "images/sailor-tee.jpg"
const products = [
  {
    name: "The Sailor Tee",
    variant: "Cream / Ocean Blue",
    price: "£45",
    tag: "Bestseller",
    colors: ["#F5F0E8", "#6B8FA8", "#3D2B1F"],
    image: null
  },
  {
    name: "Eye of the Storm Tee",
    variant: "Natural White",
    price: "£45",
    tag: null,
    colors: ["#FEFEFE", "#E8DFD0"],
    image: null
  },
  {
    name: "Smooth Sea Tee",
    variant: "Washed Blue",
    price: "£48",
    tag: "New",
    colors: ["#6B8FA8", "#2C4A5E", "#F5F0E8"],
    image: null
  },
  {
    name: "Amigos Life Tee",
    variant: "Butter Yellow",
    price: "£45",
    tag: null,
    colors: ["#F5EDD0", "#F5F0E8"],
    image: null
  },
  {
    name: "Compass Tote Bag",
    variant: "Natural Canvas",
    price: "£35",
    tag: "New",
    colors: ["#E8DFD0", "#D4C9B8"],
    image: null
  },
  {
    name: "Amigos Hoodie",
    variant: "Cream / Navy",
    price: "£75",
    tag: null,
    colors: ["#F5F0E8", "#2C4A5E", "#3D2B1F"],
    image: null
  },
  {
    name: "Captain's Cap",
    variant: "Natural / Brown",
    price: "£32",
    tag: null,
    colors: ["#E8DFD0", "#3D2B1F"],
    image: null
  },
  {
    name: "Pebbles Sweatshirt",
    variant: "Stone Blue",
    price: "£68",
    tag: "Coming Soon",
    colors: ["#7A9BB5", "#2C4A5E"],
    image: null
  }
];

// ── RENDER PRODUCT GRID ──
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = '';

  products.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const imgContent = p.image
      ? `<img src="${p.image}" alt="${p.name}">`
      : `<div class="ph-icon">⊕</div><div class="ph-label">Photo coming soon</div>`;

    card.innerHTML = `
      <div class="product-img-placeholder" onclick="openModal(${i})">
        ${p.tag ? `<div class="product-badge">${p.tag}</div>` : ''}
        ${imgContent}
      </div>
      <div class="product-info">
        <div>
          <p class="product-name">${p.name}</p>
          <p class="product-variant">${p.variant}</p>
        </div>
        <p class="product-price">${p.price}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ── MODAL ──
function openModal(idx) {
  const p = products[idx];
  document.getElementById('modalProductName').textContent = p.name;
  document.getElementById('modalProductVariant').textContent = p.variant;
  document.getElementById('modalPrice').textContent = p.price + '.00';

  // Render colour swatches
  const colorRow = document.getElementById('colorRow');
  colorRow.innerHTML = '';
  p.colors.forEach((c, ci) => {
    const sw = document.createElement('div');
    sw.className = 'color-swatch';
    sw.style.background = c;
    sw.style.border = `2px solid ${ci === 0 ? '#3D2B1F' : 'rgba(139,107,74,0.2)'}`;
    sw.onclick = () => {
      colorRow.querySelectorAll('.color-swatch').forEach(s => {
        s.style.border = '2px solid rgba(139,107,74,0.2)';
      });
      sw.style.border = '2px solid #3D2B1F';
    };
    colorRow.appendChild(sw);
  });

  // Reset size selection to M
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  const defaultSize = document.querySelector('.size-btn:nth-child(3)');
  if (defaultSize) defaultSize.classList.add('active');

  document.getElementById('cartModal').classList.add('active');
}

function selectSize(el) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// ── CART ──
let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cartCount').textContent = cartCount;
  document.getElementById('cartModal').classList.remove('active');

  // TODO: Connect to WooCommerce or Stripe here
  // Example Stripe integration point:
  // stripe.redirectToCheckout({ lineItems: [...], mode: 'payment', ... })
}

// Close modal when clicking outside
document.getElementById('cartModal').addEventListener('click', function (e) {
  if (e.target === this) this.classList.remove('active');
});

// ── NAV SCROLL EFFECT ──
// Makes nav slightly more opaque on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(245, 240, 232, 0.98)';
  } else {
    nav.style.background = 'rgba(245, 240, 232, 0.92)';
  }
});

// ── INIT ──
renderProducts();
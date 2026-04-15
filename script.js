/* ══════════════════════════════════════════
   AMIGOS — Main Script
   Trearddur Bay, Wales — Est. 2025
══════════════════════════════════════════ */

/* ── LOADER ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hide');
  }, 3500);
});

/* ── NAV SCROLL EFFECT ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── MOBILE HAMBURGER ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

/* ── DETECT PAGE PATH ──
   Works whether files are at root or in /pages/
*/
const isInPagesFolder = window.location.pathname.includes('/pages/');
const imgPath = isInPagesFolder ? '../images/' : 'images/';
const rootPath = isInPagesFolder ? '../' : '';

/* ── PRODUCTS DATA ──
   To add real images change `image` to e.g.:
   isInPagesFolder ? '../images/products/sailor-tee.jpg' : 'images/products/sailor-tee.jpg'
   Or just use the helper: imgPath + 'products/sailor-tee.jpg'
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const PRODUCTS = {
  mens: [
    {
      id: 'm1',
      name: 'The Sailor Tee',
      category: 't-shirts',
      variant: 'Cream / Ocean Blue',
      price: '£45',
      tag: 'Bestseller',
      colors: ['#F5F0E8', '#6B8FA8', '#3D2B1F'],
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80'
    },
    {
      id: 'm2',
      name: 'Smooth Sea Tee',
      category: 't-shirts',
      variant: 'Washed Blue',
      price: '£48',
      tag: 'New',
      colors: ['#6B8FA8', '#2C4A5E'],
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80'
    },
    {
      id: 'm3',
      name: 'Amigos Life Tee',
      category: 't-shirts',
      variant: 'Butter Yellow',
      price: '£45',
      tag: null,
      colors: ['#F5EDD0', '#F5F0E8'],
      image: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=600&q=80'
    },
    {
      id: 'm4',
      name: 'Amigos Hoodie',
      category: 'hoodies',
      variant: 'Cream / Navy',
      price: '£75',
      tag: null,
      colors: ['#F5F0E8', '#2C4A5E', '#3D2B1F'],
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80'
    },
    {
      id: 'm5',
      name: 'Bay Sweatshirt',
      category: 'sweatshirts',
      variant: 'Stone Blue',
      price: '£68',
      tag: 'New',
      colors: ['#7A9BB5', '#2C4A5E'],
      image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80'
    },
    {
      id: 'm6',
      name: "Captain's Cap",
      category: 'caps',
      variant: 'Natural / Brown',
      price: '£32',
      tag: null,
      colors: ['#E8DFD0', '#3D2B1F'],
      image: 'https://images.unsplash.com/photo-1604006852748-903fccbc4019?w=600&q=80'
    },
    {
      id: 'm7',
      name: 'Bay Cargo Trousers',
      category: 'trousers',
      variant: 'Sand / Khaki',
      price: '£85',
      tag: 'New',
      colors: ['#D4C9A8', '#8B7D5A'],
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80'
    },
    {
      id: 'm8',
      name: 'Anchor Chain',
      category: 'jewellery',
      variant: 'Brushed Silver',
      price: '£28',
      tag: null,
      colors: ['#C0C0C0', '#888888'],
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80'
    }
  ],
  womens: [
    {
      id: 'w1',
      name: 'Eye of the Storm Tee',
      category: 't-shirts',
      variant: 'Natural White',
      price: '£45',
      tag: null,
      colors: ['#FEFEFE', '#E8DFD0'],
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80'
    },
    {
      id: 'w2',
      name: 'Bay Breeze Tee',
      category: 't-shirts',
      variant: 'Sage / Cream',
      price: '£45',
      tag: 'New',
      colors: ['#9BB5A0', '#F5F0E8'],
      image: 'https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=600&q=80'
    },
    {
      id: 'w3',
      name: 'Amigos Life Tee',
      category: 't-shirts',
      variant: 'Butter Yellow',
      price: '£45',
      tag: 'Bestseller',
      colors: ['#F5EDD0', '#F5F0E8'],
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80'
    },
    {
      id: 'w4',
      name: 'Trearddur Hoodie',
      category: 'hoodies',
      variant: 'Oat / Brown',
      price: '£72',
      tag: null,
      colors: ['#F0E8D8', '#8B6B4A'],
      image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80'
    },
    {
      id: 'w5',
      name: 'Bay Sweatshirt',
      category: 'sweatshirts',
      variant: 'Warm Sand',
      price: '£68',
      tag: 'New',
      colors: ['#E8DFD0', '#D4C9B8'],
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80'
    },
    {
      id: 'w6',
      name: "Sailor's Cap",
      category: 'caps',
      variant: 'Cream / Tan',
      price: '£32',
      tag: null,
      colors: ['#F5F0E8', '#C4A882'],
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80'
    },
    {
      id: 'w7',
      name: 'Bay Wide Leg',
      category: 'trousers',
      variant: 'Linen White',
      price: '£78',
      tag: 'New',
      colors: ['#F5F0E8', '#E8DFD0'],
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80'
    },
    {
      id: 'w8',
      name: 'Pebble Ring',
      category: 'jewellery',
      variant: 'Gold Tone',
      price: '£24',
      tag: null,
      colors: ['#C4922A', '#8B6B4A'],
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80'
    }
  ]
};

/* ── RENDER PRODUCT GRID ── */
function renderGrid(products, containerId, openFn) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';
  products.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrap" onclick="${openFn}(${i})">
        ${p.tag ? `<div class="product-badge">${p.tag}</div>` : ''}
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <div>
          <p class="product-name">${p.name}</p>
          <p class="product-variant">${p.variant}</p>
        </div>
        <p class="product-price">${p.price}</p>
      </div>`;
    grid.appendChild(card);
  });
}

/* ── FILTER BAR ── */
function renderFilters(gender, containerId, gridId, openFn) {
  const bar = document.getElementById(containerId);
  if (!bar) return;
  const cats = ['All', ...new Set(PRODUCTS[gender].map(p => p.category))];
  bar.innerHTML = '';
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = cat === 'All' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, ' ');
    btn.onclick = () => {
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filtered = cat === 'All' ? PRODUCTS[gender] : PRODUCTS[gender].filter(p => p.category === cat);
      renderGrid(filtered, gridId, openFn);
    };
    bar.appendChild(btn);
  });

  // Check URL param for pre-selected category
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get('cat');
  let matched = false;
  if (urlCat && urlCat !== 'all') {
    bar.querySelectorAll('.filter-btn').forEach(btn => {
      if (btn.textContent.toLowerCase() === urlCat.replace(/-/g, ' ')) {
        btn.click();
        matched = true;
      }
    });
  }
  if (!matched) bar.querySelector('.filter-btn').click();
}

/* ── MODAL ── */
function openModal(products, index) {
  const p = products[index];
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-variant').textContent = p.variant;
  document.getElementById('modal-price').textContent = p.price + '.00';

  const swatchRow = document.getElementById('modal-swatches');
  if (swatchRow) {
    swatchRow.innerHTML = '';
    p.colors.forEach((c, ci) => {
      const s = document.createElement('div');
      s.className = 'swatch' + (ci === 0 ? ' active' : '');
      s.style.background = c;
      s.style.border = `2px solid ${ci === 0 ? 'var(--dark-brown)' : 'rgba(139,107,74,0.2)'}`;
      s.onclick = () => {
        swatchRow.querySelectorAll('.swatch').forEach(sw => {
          sw.classList.remove('active');
          sw.style.border = '2px solid rgba(139,107,74,0.2)';
        });
        s.classList.add('active');
        s.style.border = '2px solid var(--dark-brown)';
      };
      swatchRow.appendChild(s);
    });
  }

  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  const defaultSize = document.querySelector('.size-btn:nth-child(3)');
  if (defaultSize) defaultSize.classList.add('active');

  const modal = document.getElementById('cart-modal');
  if (modal) modal.classList.add('open');
}

function openMensModal(i)   { openModal(PRODUCTS.mens,   i); }
function openWomensModal(i) { openModal(PRODUCTS.womens, i); }

function pickSize(el) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

/* ── CLOSE MODAL ── */
function setupModal() {
  const modal = document.getElementById('cart-modal');
  const closeBtn = document.getElementById('modal-close');
  if (!modal) return;
  if (closeBtn) closeBtn.onclick = () => modal.classList.remove('open');
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
}

/* ── CART ── */
let cartCount = 0;

function addToCart() {
  cartCount++;
  const el = document.getElementById('cart-count');
  if (el) el.textContent = cartCount;
  const modal = document.getElementById('cart-modal');
  if (modal) modal.classList.remove('open');

  /* ─────────────────────────────────────────
     STRIPE INTEGRATION POINT
     ─────────────────────────────────────────
     When ready to connect Stripe, replace
     this comment with:

     const stripe = Stripe('YOUR_PUBLISHABLE_KEY');
     stripe.redirectToCheckout({
       lineItems: [{ price: 'PRICE_ID', quantity: 1 }],
       mode: 'payment',
       successUrl: window.location.origin + '/success.html',
       cancelUrl:  window.location.origin + '/index.html',
     });
  ───────────────────────────────────────── */
}

/* ── CART BUTTON ── */
function setupCartBtn() {
  const btn = document.getElementById('cart-btn');
  if (btn) btn.onclick = () => {
    const modal = document.getElementById('cart-modal');
    if (modal) modal.classList.add('open');
  };
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  setupModal();
  setupCartBtn();

  // Homepage featured grid
  if (document.getElementById('featured-grid')) {
    renderGrid(PRODUCTS.mens.slice(0, 4), 'featured-grid', 'openMensModal');
  }

  // Book page featured grid
  if (document.getElementById('featured-grid') && window.location.pathname.includes('book')) {
    renderGrid(PRODUCTS.womens.slice(0, 4), 'featured-grid', 'openWomensModal');
  }

  // Mens page
  if (document.getElementById('mens-filter-bar')) {
    renderFilters('mens', 'mens-filter-bar', 'mens-product-grid', 'openMensModal');
  }

  // Womens page
  if (document.getElementById('womens-filter-bar')) {
    renderFilters('womens', 'womens-filter-bar', 'womens-product-grid', 'openWomensModal');
  }
});

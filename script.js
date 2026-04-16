/* ══════════════════════════════════════════
   AMIGOS — Main Script
   Trearddur Bay, Wales — Est. 2025
   Stripe Checkout Integration
══════════════════════════════════════════ */

const STRIPE_PUBLISHABLE_KEY = 'pk_test_51TMaAOPMdJmZLvpCVFZEwQDxdBWbN2pRFJwJwJFJwxZy3nCXK6fiDrycNJHZstmDLI9mTBPzKgGSosEF9TaaHSDx00HWT9TU5E';

/* ── LOADER ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hide');
  }, 3500);
  const stripeScript = document.createElement('script');
  stripeScript.src = 'https://js.stripe.com/v3/';
  stripeScript.async = true;
  document.head.appendChild(stripeScript);
});

/* ── NAV SCROLL ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── MOBILE MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

/* ── PATH DETECTION ── */
const isInPagesFolder = window.location.pathname.includes('/pages/');

/* ══════════════════════════════════════════
   PRODUCTS DATA
   To add real images replace the Unsplash URLs with:
   isInPagesFolder ? '../images/products/filename.jpg' : 'images/products/filename.jpg'
══════════════════════════════════════════ */
const PRODUCTS = {
  mens: [
    { id: 'm1', name: 'The Sailor Tee', category: 't-shirts', variant: 'Cream / Ocean Blue', price: '£45', priceNumber: 4500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'Bestseller', colors: ['#F5F0E8', '#6B8FA8', '#3D2B1F'], image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80' },
    { id: 'm2', name: 'Smooth Sea Tee', category: 't-shirts', variant: 'Washed Blue', price: '£48', priceNumber: 4800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#6B8FA8', '#2C4A5E'], image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80' },
    { id: 'm3', name: 'Amigos Life Tee', category: 't-shirts', variant: 'Butter Yellow', price: '£45', priceNumber: 4500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#F5EDD0', '#F5F0E8'], image: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=600&q=80' },
    { id: 'm4', name: 'Amigos Hoodie', category: 'hoodies', variant: 'Cream / Navy', price: '£75', priceNumber: 7500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#F5F0E8', '#2C4A5E', '#3D2B1F'], image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80' },
    { id: 'm5', name: 'Bay Sweatshirt', category: 'sweatshirts', variant: 'Stone Blue', price: '£68', priceNumber: 6800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#7A9BB5', '#2C4A5E'], image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80' },
    { id: 'm6', name: 'Bay Cargo Trousers', category: 'trousers', variant: 'Sand / Khaki', price: '£85', priceNumber: 8500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#D4C9A8', '#8B7D5A'], image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80' },
    { id: 'm7', name: 'Trearddur Swim Shorts', category: 'swimwear', variant: 'Ocean Blue / Cream', price: '£38', priceNumber: 3800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#6B8FA8', '#F5F0E8'], image: 'https://images.unsplash.com/photo-1562183241-840b8af0721e?w=600&q=80' },
    { id: 'm8', name: 'Captain Swim Shorts', category: 'swimwear', variant: 'Dark Brown / Sand', price: '£38', priceNumber: 3800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#3D2B1F', '#E8DFD0'], image: 'https://images.unsplash.com/photo-1583482183471-38b70a47c6e4?w=600&q=80' }
  ],
  womens: [
    { id: 'w1', name: 'Eye of the Storm Tee', category: 't-shirts', variant: 'Natural White', price: '£45', priceNumber: 4500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#FEFEFE', '#E8DFD0'], image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80' },
    { id: 'w2', name: 'Bay Breeze Tee', category: 't-shirts', variant: 'Sage / Cream', price: '£45', priceNumber: 4500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#9BB5A0', '#F5F0E8'], image: 'https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=600&q=80' },
    { id: 'w3', name: 'Amigos Life Tee', category: 't-shirts', variant: 'Butter Yellow', price: '£45', priceNumber: 4500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'Bestseller', colors: ['#F5EDD0', '#F5F0E8'], image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80' },
    { id: 'w4', name: 'Trearddur Hoodie', category: 'hoodies', variant: 'Oat / Brown', price: '£72', priceNumber: 7200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#F0E8D8', '#8B6B4A'], image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80' },
    { id: 'w5', name: 'Bay Sweatshirt', category: 'sweatshirts', variant: 'Warm Sand', price: '£68', priceNumber: 6800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#E8DFD0', '#D4C9B8'], image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80' },
    { id: 'w6', name: 'Bay Wide Leg', category: 'trousers', variant: 'Linen White', price: '£78', priceNumber: 7800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#F5F0E8', '#E8DFD0'], image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80' },
    { id: 'w7', name: 'Amigos Swimsuit', category: 'swimwear', variant: 'Ocean Blue', price: '£52', priceNumber: 5200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#6B8FA8', '#2C4A5E'], image: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=600&q=80' },
    { id: 'w8', name: 'Trearddur Bikini', category: 'swimwear', variant: 'Cream / Brown', price: '£48', priceNumber: 4800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#F5F0E8', '#8B6B4A'], image: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=600&q=80' }
  ],
  childrens: [
    { id: 'c1', name: "Captain Bones Kids Tee", category: 't-shirts', variant: 'Cream / Brown', price: '£28', priceNumber: 2800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#F5F0E8', '#3D2B1F'], image: 'https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?w=600&q=80' },
    { id: 'c2', name: 'Amigos Kids Tee', category: 't-shirts', variant: 'Ocean Blue', price: '£28', priceNumber: 2800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'Bestseller', colors: ['#6B8FA8', '#F5F0E8'], image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80' },
    { id: 'c3', name: 'Smooth Sea Kids Tee', category: 't-shirts', variant: 'Butter Yellow', price: '£28', priceNumber: 2800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#F5EDD0', '#F5F0E8'], image: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80' },
    { id: 'c4', name: 'Captain Bones Kids Hoodie', category: 'hoodies', variant: 'Cream / Navy', price: '£42', priceNumber: 4200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#F5F0E8', '#2C4A5E'], image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80' },
    { id: 'c5', name: 'Bay Kids Sweatshirt', category: 'sweatshirts', variant: 'Stone Blue', price: '£38', priceNumber: 3800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#7A9BB5', '#2C4A5E'], image: 'https://images.unsplash.com/photo-1519238359922-989348752efb?w=600&q=80' },
    { id: 'c6', name: "Captain's Kids Cap", category: 'caps', variant: 'Natural / Brown', price: '£22', priceNumber: 2200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#E8DFD0', '#3D2B1F'], image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&q=80' },
    { id: 'c7', name: 'Trearddur Kids Swim', category: 'swimwear', variant: 'Ocean Blue / Cream', price: '£28', priceNumber: 2800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#6B8FA8', '#F5F0E8'], image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80' },
    { id: 'c8', name: 'Amigos Babygrow', category: 'babygrows', variant: 'Cream / Brown', price: '£22', priceNumber: 2200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#F5F0E8', '#8B6B4A'], image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80' }
  ],
  accessories: [
    { id: 'a1', name: 'Compass Tote Bag', category: 'tote-bags', variant: 'Natural Canvas', price: '£35', priceNumber: 3500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#E8DFD0', '#D4C9B8'], image: 'https://images.unsplash.com/photo-1544816565-aa8c1166648f?w=600&q=80' },
    { id: 'a2', name: 'Amigos Tote Bag', category: 'tote-bags', variant: 'Dark Brown', price: '£35', priceNumber: 3500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#3D2B1F', '#E8DFD0'], image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80' },
    { id: 'a3', name: "Captain's Cap", category: 'caps', variant: 'Natural / Brown', price: '£32', priceNumber: 3200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'Bestseller', colors: ['#E8DFD0', '#3D2B1F'], image: 'https://images.unsplash.com/photo-1604006852748-903fccbc4019?w=600&q=80' },
    { id: 'a4', name: "Sailor's Cap", category: 'caps', variant: 'Cream / Tan', price: '£32', priceNumber: 3200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#F5F0E8', '#C4A882'], image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&q=80' },
    { id: 'a5', name: 'Anchor Chain', category: 'jewellery', variant: 'Brushed Silver', price: '£28', priceNumber: 2800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#C0C0C0', '#888888'], image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
    { id: 'a6', name: 'Pebble Ring', category: 'jewellery', variant: 'Gold Tone', price: '£24', priceNumber: 2400, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#C4922A', '#8B6B4A'], image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
    { id: 'a7', name: 'Captain Bones Keyring', category: 'keyrings', variant: 'Brass / Enamel', price: '£12', priceNumber: 1200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New', colors: ['#C4922A', '#3D2B1F'], image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260861?w=600&q=80' },
    { id: 'a8', name: 'Amigos Keyring', category: 'keyrings', variant: 'Silver / Enamel', price: '£12', priceNumber: 1200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null, colors: ['#C0C0C0', '#3D2B1F'], image: 'https://images.unsplash.com/photo-1559181567-c3190e2e386e?w=600&q=80' }
  ]
};

/* ══════════════════════════════════════════
   CART SYSTEM
══════════════════════════════════════════ */
let cart = [];

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.priceNumber * item.qty), 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  const count = getCartCount();
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartEmpty = document.getElementById('cart-empty');
  const cartFooter = document.getElementById('cart-footer');
  if (!cartItems) return;
  if (cart.length === 0) {
    if (cartEmpty) cartEmpty.style.display = 'block';
    if (cartFooter) cartFooter.style.display = 'none';
    cartItems.innerHTML = '<p class="cart-empty" id="cart-empty">Your cart is empty</p>';
    return;
  }
  if (cartEmpty) cartEmpty.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'block';
  cartItems.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-meta">${item.variant} · Size ${item.size}</p>
        <div class="cart-item-qty">
          <button onclick="changeQty(${i}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${i}, 1)">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <p class="cart-item-price">£${((item.priceNumber * item.qty) / 100).toFixed(2)}</p>
        <button class="cart-item-remove" onclick="removeFromCart(${i})">×</button>
      </div>
    </div>
  `).join('');
  if (cartTotal) cartTotal.textContent = '£' + (getCartTotal() / 100).toFixed(2);
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

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
  const params = new URLSearchParams(window.location.search);
  const urlCat = params.get('cat');
  let matched = false;
  if (urlCat && urlCat !== 'all') {
    bar.querySelectorAll('.filter-btn').forEach(btn => {
      if (btn.textContent.toLowerCase() === urlCat.replace(/-/g, ' ')) {
        btn.click(); matched = true;
      }
    });
  }
  if (!matched) bar.querySelector('.filter-btn').click();
}

/* ── MODAL ── */
let currentProduct = null;

function openModal(products, index) {
  currentProduct = products[index];
  const p = currentProduct;
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
        swatchRow.querySelectorAll('.swatch').forEach(sw => { sw.classList.remove('active'); sw.style.border = '2px solid rgba(139,107,74,0.2)'; });
        s.classList.add('active'); s.style.border = '2px solid var(--dark-brown)';
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

function openMensModal(i)        { openModal(PRODUCTS.mens,        i); }
function openWomensModal(i)      { openModal(PRODUCTS.womens,      i); }
function openChildrensModal(i)   { openModal(PRODUCTS.childrens,   i); }
function openAccessoriesModal(i) { openModal(PRODUCTS.accessories, i); }

function pickSize(el) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

/* ── ADD TO CART ── */
function addToCart() {
  if (!currentProduct) return;
  const activeSize = document.querySelector('.size-btn.active');
  const size = activeSize ? activeSize.textContent : 'M';
  const existing = cart.find(item => item.id === currentProduct.id && item.size === size);
  if (existing) { existing.qty++; } else { cart.push({ ...currentProduct, size, qty: 1 }); }
  const modal = document.getElementById('cart-modal');
  if (modal) modal.classList.remove('open');
  updateCartUI();
  openCartDrawer();
}

/* ── CART DRAWER ── */
function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  updateCartUI();
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

/* ── STRIPE CHECKOUT ── */
async function proceedToCheckout() {
  if (cart.length === 0) return;
  const btn = document.getElementById('checkout-btn');
  if (btn) { btn.textContent = 'Loading...'; btn.disabled = true; }
  try {
    const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
    const lineItems = cart.map(item => ({ price: item.stripePrice, quantity: item.qty }));
    const base = window.location.origin;
    const result = await stripe.redirectToCheckout({
      lineItems,
      mode: 'payment',
      successUrl: base + '/success.html',
      cancelUrl: window.location.href,
      billingAddressCollection: 'required',
      shippingAddressCollection: { allowedCountries: ['GB', 'IE', 'US', 'CA', 'AU', 'NZ', 'FR', 'DE', 'ES', 'IT', 'NL'] }
    });
    if (result.error) {
      alert(result.error.message);
      if (btn) { btn.textContent = 'Checkout with Stripe'; btn.disabled = false; }
    }
  } catch (err) {
    console.error('Stripe error:', err);
    if (btn) { btn.textContent = 'Checkout with Stripe'; btn.disabled = false; }
  }
}

/* ── SETUP ── */
function setupModal() {
  const modal = document.getElementById('cart-modal');
  const closeBtn = document.getElementById('modal-close');
  if (!modal) return;
  if (closeBtn) closeBtn.onclick = () => modal.classList.remove('open');
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
}

function setupCartBtn() {
  const btn = document.getElementById('cart-btn');
  if (btn) btn.onclick = () => openCartDrawer();
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  setupModal();
  setupCartBtn();
  if (document.getElementById('featured-grid')) renderGrid(PRODUCTS.mens.slice(0, 4), 'featured-grid', 'openMensModal');
  if (document.getElementById('mens-filter-bar')) renderFilters('mens', 'mens-filter-bar', 'mens-product-grid', 'openMensModal');
  if (document.getElementById('womens-filter-bar')) renderFilters('womens', 'womens-filter-bar', 'womens-product-grid', 'openWomensModal');
  if (document.getElementById('childrens-filter-bar')) renderFilters('childrens', 'childrens-filter-bar', 'childrens-product-grid', 'openChildrensModal');
  if (document.getElementById('accessories-filter-bar')) renderFilters('accessories', 'accessories-filter-bar', 'accessories-product-grid', 'openAccessoriesModal');
  updateCartUI();
});

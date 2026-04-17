/* ══════════════════════════════════════════
   AMIGOS — Main Script
   Trearddur Bay, Wales — Est. 2025
══════════════════════════════════════════ */

const STRIPE_PUBLISHABLE_KEY = 'pk_live_51TMaACAflN0J7YHbn0LtIghGZTRTZvEeefVa296ODebCQACNIqMqyerKGiiL2n0zoHnzPb0r8jWhyJY6ouf5atPq005nIl8Ul4';

window.addEventListener('load', () => {
  setTimeout(() => { const l = document.getElementById('loader'); if (l) l.classList.add('hide'); }, 3500);
  const s = document.createElement('script'); s.src = 'https://js.stripe.com/v3/'; s.async = true; document.head.appendChild(s);
});

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));

const isInPagesFolder = window.location.pathname.includes('/pages/');

/* ══════════════════════════════════════════
   PRODUCTS DATA
   To replace placeholder images:
   image: isInPagesFolder ? '../images/products/filename.jpg' : 'images/products/filename.jpg'
══════════════════════════════════════════ */
const PRODUCTS = {
  mens: [
    { id: 'm1',  name: 'The Sailor Tee',          category: 't-shirts',   variant: 'Cream / Ocean Blue',   price: '£45', priceNumber: 4500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'Bestseller', colors: ['#F5F0E8','#6B8FA8','#3D2B1F'], image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80' },
    { id: 'm2',  name: 'Smooth Sea Tee',           category: 't-shirts',   variant: 'Washed Blue',          price: '£48', priceNumber: 4800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#6B8FA8','#2C4A5E'],           image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80' },
    { id: 'm3',  name: 'Amigos Life Tee',          category: 't-shirts',   variant: 'Butter Yellow',        price: '£45', priceNumber: 4500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#F5EDD0','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=600&q=80' },
    { id: 'm4',  name: 'Amigos Hoodie',            category: 'hoodies',    variant: 'Cream / Navy',         price: '£75', priceNumber: 7500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#F5F0E8','#2C4A5E','#3D2B1F'], image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80' },
    { id: 'm5',  name: 'Bay Sweatshirt',           category: 'sweatshirts', variant: 'Stone Blue',          price: '£68', priceNumber: 6800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#7A9BB5','#2C4A5E'],           image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80' },
    { id: 'm6',  name: 'Amigos Joggers',           category: 'joggers',    variant: 'Navy / Cream',         price: '£58', priceNumber: 5800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#2C4A5E','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80' },
    { id: 'm7',  name: 'Bay Cargo Trousers',       category: 'trousers',   variant: 'Sand / Khaki',         price: '£85', priceNumber: 8500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#D4C9A8','#8B7D5A'],           image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80' },
    { id: 'm8',  name: 'Captain Bones Jacket',     category: 'jackets',    variant: 'Dark Brown / Cream',   price: '£95', priceNumber: 9500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#3D2B1F','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80' },
    { id: 'm9',  name: 'Amigos Gilet',             category: 'jackets',    variant: 'Ocean Blue',           price: '£82', priceNumber: 8200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#6B8FA8','#2C4A5E'],           image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&q=80' },
    { id: 'm10', name: 'Trearddur Swim Shorts',    category: 'swimwear',   variant: 'Ocean Blue / Cream',   price: '£38', priceNumber: 3800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#6B8FA8','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1562183241-840b8af0721e?w=600&q=80' },
    { id: 'm11', name: 'Amigos Pyjama Set',        category: 'pyjamas',    variant: 'Navy / Cream',         price: '£55', priceNumber: 5500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#2C4A5E','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&q=80' }
  ],
  womens: [
    { id: 'w1',  name: 'Eye of the Storm Tee',     category: 't-shirts',   variant: 'Natural White',        price: '£45', priceNumber: 4500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#FEFEFE','#E8DFD0'],           image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80' },
    { id: 'w2',  name: 'Bay Breeze Tee',           category: 't-shirts',   variant: 'Sage / Cream',         price: '£45', priceNumber: 4500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#9BB5A0','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1485231183945-fffde7cc051e?w=600&q=80' },
    { id: 'w3',  name: 'Amigos Life Tee',          category: 't-shirts',   variant: 'Butter Yellow',        price: '£45', priceNumber: 4500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'Bestseller', colors: ['#F5EDD0','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80' },
    { id: 'w4',  name: 'Trearddur Hoodie',         category: 'hoodies',    variant: 'Oat / Brown',          price: '£72', priceNumber: 7200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#F0E8D8','#8B6B4A'],           image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80' },
    { id: 'w5',  name: 'Bay Sweatshirt',           category: 'sweatshirts', variant: 'Warm Sand',           price: '£68', priceNumber: 6800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#E8DFD0','#D4C9B8'],           image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80' },
    { id: 'w6',  name: 'Amigos Joggers',           category: 'joggers',    variant: 'Cream / Brown',        price: '£55', priceNumber: 5500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#8B6B4A'],           image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80' },
    { id: 'w7',  name: 'Bay Wide Leg',             category: 'trousers',   variant: 'Linen White',          price: '£78', priceNumber: 7800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#E8DFD0'],           image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80' },
    { id: 'w8',  name: 'Coastal Jacket',           category: 'jackets',    variant: 'Ocean Blue / Cream',   price: '£92', priceNumber: 9200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#6B8FA8','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1548712843-2b74edaace8a?w=600&q=80' },
    { id: 'w9',  name: 'Amigos Gilet',             category: 'jackets',    variant: 'Warm Sand',            price: '£78', priceNumber: 7800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#E8DFD0','#8B6B4A'],           image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80' },
    { id: 'w10', name: 'Amigos Swimsuit',          category: 'swimwear',   variant: 'Ocean Blue',           price: '£52', priceNumber: 5200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#6B8FA8','#2C4A5E'],           image: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=600&q=80' },
    { id: 'w11', name: 'Amigos Pyjama Set',        category: 'pyjamas',    variant: 'Cream / Navy',         price: '£55', priceNumber: 5500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#2C4A5E'],           image: 'https://images.unsplash.com/photo-1617952739593-4cb7b2e5f217?w=600&q=80' }
  ],
  childrens: [
    { id: 'c1',  name: 'Captain Bones Kids Tee',   category: 't-shirts',   variant: 'Cream / Brown',        price: '£28', priceNumber: 2800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#3D2B1F'],           image: 'https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?w=600&q=80' },
    { id: 'c2',  name: 'Amigos Kids Tee',          category: 't-shirts',   variant: 'Ocean Blue',           price: '£28', priceNumber: 2800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'Bestseller', colors: ['#6B8FA8','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&q=80' },
    { id: 'c3',  name: 'Captain Bones Kids Hoodie',category: 'hoodies',    variant: 'Cream / Navy',         price: '£42', priceNumber: 4200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#2C4A5E'],           image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80' },
    { id: 'c4',  name: 'Bay Kids Sweatshirt',      category: 'sweatshirts', variant: 'Stone Blue',          price: '£38', priceNumber: 3800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#7A9BB5','#2C4A5E'],           image: 'https://images.unsplash.com/photo-1519238359922-989348752efb?w=600&q=80' },
    { id: 'c5',  name: 'Amigos Kids Joggers',      category: 'joggers',    variant: 'Navy / Cream',         price: '£32', priceNumber: 3200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#2C4A5E','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80' },
    { id: 'c6',  name: 'Kids Coastal Jacket',      category: 'jackets',    variant: 'Ocean Blue',           price: '£55', priceNumber: 5500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#6B8FA8','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80' },
    { id: 'c7',  name: "Captain's Kids Cap",       category: 'caps',       variant: 'Natural / Brown',      price: '£22', priceNumber: 2200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#E8DFD0','#3D2B1F'],           image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=600&q=80' },
    { id: 'c8',  name: 'Trearddur Kids Swim',      category: 'swimwear',   variant: 'Ocean Blue / Cream',   price: '£28', priceNumber: 2800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#6B8FA8','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80' },
    { id: 'c9',  name: 'Amigos Babygrow',          category: 'babygrows',  variant: 'Cream / Brown',        price: '£22', priceNumber: 2200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#8B6B4A'],           image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=600&q=80' },
    { id: 'c10', name: 'Captain Bones Baby PJs',   category: 'pyjamas',    variant: 'Cream / Navy',         price: '£32', priceNumber: 3200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#2C4A5E'],           image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80' }
  ],
  accessories: [
    { id: 'a1',  name: 'Compass Tote Bag',         category: 'tote-bags',    variant: 'Natural Canvas',     price: '£35', priceNumber: 3500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#E8DFD0','#D4C9B8'],           image: 'https://images.unsplash.com/photo-1544816565-aa8c1166648f?w=600&q=80' },
    { id: 'a2',  name: 'Amigos Tote Bag',          category: 'tote-bags',    variant: 'Dark Brown',         price: '£35', priceNumber: 3500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#3D2B1F','#E8DFD0'],           image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80' },
    { id: 'a3',  name: "Captain's Cap",            category: 'caps',         variant: 'Natural / Brown',    price: '£32', priceNumber: 3200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'Bestseller', colors: ['#E8DFD0','#3D2B1F'],           image: 'https://images.unsplash.com/photo-1604006852748-903fccbc4019?w=600&q=80' },
    { id: 'a4',  name: "Sailor's Cap",             category: 'caps',         variant: 'Cream / Tan',        price: '£32', priceNumber: 3200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#F5F0E8','#C4A882'],           image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&q=80' },
    { id: 'a5',  name: 'Captain Bones Beanie',     category: 'beanies',      variant: 'Dark Brown',         price: '£28', priceNumber: 2800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#3D2B1F','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&q=80' },
    { id: 'a6',  name: 'Amigos Beanie',            category: 'beanies',      variant: 'Ocean Blue',         price: '£28', priceNumber: 2800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#6B8FA8','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1510598155-f564a7b5046e?w=600&q=80' },
    { id: 'a7',  name: 'Amigos Backpack',          category: 'backpacks',    variant: 'Natural Canvas',     price: '£55', priceNumber: 5500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#E8DFD0','#3D2B1F'],           image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80' },
    { id: 'a8',  name: 'Captain Bones Backpack',   category: 'backpacks',    variant: 'Dark Brown',         price: '£55', priceNumber: 5500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#3D2B1F','#E8DFD0'],           image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600&q=80' },
    { id: 'a9',  name: 'Anchor Chain',             category: 'jewellery',    variant: 'Brushed Silver',     price: '£28', priceNumber: 2800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#C0C0C0','#888888'],           image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
    { id: 'a10', name: 'Pebble Ring',              category: 'jewellery',    variant: 'Gold Tone',          price: '£24', priceNumber: 2400, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#C4922A','#8B6B4A'],           image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
    { id: 'a11', name: 'Captain Bones Keyring',    category: 'keyrings',     variant: 'Brass / Enamel',     price: '£12', priceNumber: 1200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#C4922A','#3D2B1F'],           image: 'https://images.unsplash.com/photo-1582142407894-ec85a1260861?w=600&q=80' },
    { id: 'a12', name: 'Amigos Socks',             category: 'socks',        variant: 'Cream / Brown',      price: '£12', priceNumber: 1200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#8B6B4A'],           image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80' },
    { id: 'a13', name: 'Captain Bones Socks',      category: 'socks',        variant: 'Navy / Cream',       price: '£12', priceNumber: 1200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'Bestseller', colors: ['#2C4A5E','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&q=80' },
    { id: 'a14', name: 'Amigos Beach Towel',       category: 'beach-towels', variant: 'Cream / Ocean Blue', price: '£45', priceNumber: 4500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#6B8FA8'],           image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
    { id: 'a15', name: 'Amigos Phone Case',        category: 'phone-cases',  variant: 'Clear / Brown Print',price: '£22', priceNumber: 2200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#3D2B1F'],           image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80' },
    { id: 'a16', name: 'Captain Bones Phone Case', category: 'phone-cases',  variant: 'Dark / Cream Print', price: '£22', priceNumber: 2200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#3D2B1F','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?w=600&q=80' }
  ],
  homeandliving: [
    { id: 'h1',  name: 'Amigos Mug',               category: 'mugs',         variant: 'White / Brown Print', price: '£18', priceNumber: 1800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#FEFEFE','#3D2B1F'],           image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80' },
    { id: 'h2',  name: 'Captain Bones Mug',         category: 'mugs',         variant: 'Cream / Dark Brown',  price: '£18', priceNumber: 1800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'Bestseller', colors: ['#F5F0E8','#3D2B1F'],           image: 'https://images.unsplash.com/photo-1572119865084-43c285814d63?w=600&q=80' },
    { id: 'h3',  name: 'Trearddur Bay Mug',         category: 'mugs',         variant: 'Ocean Blue / Cream',  price: '£18', priceNumber: 1800, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#6B8FA8','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&q=80' },
    { id: 'h4',  name: 'Amigos Cushion',            category: 'cushions',     variant: 'Cream / Brown',       price: '£32', priceNumber: 3200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#8B6B4A'],           image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80' },
    { id: 'h5',  name: 'Captain Bones Cushion',     category: 'cushions',     variant: 'Dark Brown / Cream',  price: '£32', priceNumber: 3200, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#3D2B1F','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
    { id: 'h6',  name: 'Amigos Blanket',            category: 'blankets',     variant: 'Cream / Ocean Blue',  price: '£55', priceNumber: 5500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#6B8FA8'],           image: 'https://images.unsplash.com/photo-1580301762395-073ef1735494?w=600&q=80' },
    { id: 'h7',  name: 'Captain Bones Blanket',     category: 'blankets',     variant: 'Dark Brown / Cream',  price: '£55', priceNumber: 5500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'Bestseller', colors: ['#3D2B1F','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1600369671236-e74521d5b7a6?w=600&q=80' },
    { id: 'h8',  name: 'Amigos Candle',             category: 'candles',      variant: 'Sea Salt & Driftwood',price: '£24', priceNumber: 2400, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#C4922A'],           image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80' },
    { id: 'h9',  name: 'Trearddur Bay Candle',      category: 'candles',      variant: 'Ocean Breeze',        price: '£24', priceNumber: 2400, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#6B8FA8','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1602607038588-3bc9166c46fc?w=600&q=80' },
    { id: 'h10', name: 'Amigos Wall Art Print',     category: 'wall-art',     variant: 'A3 / Cream & Brown',  price: '£35', priceNumber: 3500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: 'New',        colors: ['#F5F0E8','#3D2B1F'],           image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80' },
    { id: 'h11', name: 'Trearddur Bay Art Print',   category: 'wall-art',     variant: 'A3 / Ocean Blue',     price: '£35', priceNumber: 3500, stripePrice: 'price_1TMaK9PMdJmZLvpC3plhoFQe', tag: null,         colors: ['#6B8FA8','#F5F0E8'],           image: 'https://images.unsplash.com/photo-1582738411706-bbb24a2b0e3a?w=600&q=80' }
  ]
};

/* ══ CART ══ */
let cart = [];
try {
  const saved = localStorage.getItem('amigos_cart');
  if (saved) cart = JSON.parse(saved);
} catch(e) {}
function getCartTotal() { return cart.reduce((s,i) => s+(i.priceNumber*i.qty),0); }
function getCartCount() { return cart.reduce((s,i) => s+i.qty,0); }

function updateCartUI() {
  try { localStorage.setItem('amigos_cart', JSON.stringify(cart)); } catch(e) {}
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = getCartCount());
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartFooter = document.getElementById('cart-footer');
  if (!cartItems) return;
  if (cart.length === 0) {
    if (cartFooter) cartFooter.style.display = 'none';
    cartItems.innerHTML = '<p class="cart-empty" id="cart-empty">No loot in your bag, amigo!</p>';
    return;
  }
  if (cartFooter) cartFooter.style.display = 'block';
  cartItems.innerHTML = cart.map((item,i) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-meta">${item.variant} · Size ${item.size}</p>
        <div class="cart-item-qty">
          <button onclick="changeQty(${i},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${i},1)">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <p class="cart-item-price">£${((item.priceNumber*item.qty)/100).toFixed(2)}</p>
        <button class="cart-item-remove" onclick="removeFromCart(${i})">×</button>
      </div>
    </div>`).join('');
  if (cartTotal) cartTotal.textContent = '£'+(getCartTotal()/100).toFixed(2);
}

function changeQty(i,d) { cart[i].qty+=d; if(cart[i].qty<=0) cart.splice(i,1); updateCartUI(); }
function removeFromCart(i) { cart.splice(i,1); updateCartUI(); }

/* ══ GRID ══ */
function renderGrid(products, containerId, openFn) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';
  products.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrap" onclick="navigateToProduct('${p.id}')">
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

/* ══ FILTERS ══ */
function renderFilters(gender,containerId,gridId,openFn) {
  const bar = document.getElementById(containerId);
  if (!bar) return;
  const cats = ['All',...new Set(PRODUCTS[gender].map(p=>p.category))];
  bar.innerHTML = '';
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = cat==='All'?'All':cat.charAt(0).toUpperCase()+cat.slice(1).replace(/-/g,' ');
    btn.onclick = () => {
      bar.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(cat==='All'?PRODUCTS[gender]:PRODUCTS[gender].filter(p=>p.category===cat),gridId,openFn);
    };
    bar.appendChild(btn);
  });
  const urlCat = new URLSearchParams(window.location.search).get('cat');
  let matched = false;
  if (urlCat && urlCat!=='all') {
    bar.querySelectorAll('.filter-btn').forEach(btn => {
      if (btn.textContent.toLowerCase()===urlCat.replace(/-/g,' ')) { btn.click(); matched=true; }
    });
  }
  if (!matched) bar.querySelector('.filter-btn').click();
}

/* ══ MODAL ══ */
let currentProduct = null;

function openModal(products,index) {
  currentProduct = products[index];
  const p = currentProduct;
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-variant').textContent = p.variant;
  document.getElementById('modal-price').textContent = p.price+'.00';
  const sr = document.getElementById('modal-swatches');
  if (sr) {
    sr.innerHTML = '';
    p.colors.forEach((c,ci) => {
      const s = document.createElement('div');
      s.className = 'swatch'+(ci===0?' active':'');
      s.style.cssText = `background:${c};border:2px solid ${ci===0?'var(--dark-brown)':'rgba(139,107,74,0.2)'};width:26px;height:26px;border-radius:50%;cursor:pointer;flex-shrink:0`;
      s.onclick = () => { sr.querySelectorAll('.swatch').forEach(x=>{x.classList.remove('active');x.style.border='2px solid rgba(139,107,74,0.2)'}); s.classList.add('active'); s.style.border='2px solid var(--dark-brown)'; };
      sr.appendChild(s);
    });
  }
  document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));
  const def = document.querySelector('.size-btn:nth-child(3)');
  if (def) def.classList.add('active');
  document.getElementById('cart-modal')?.classList.add('open');
}

function openMensModal(i)          { openModal(PRODUCTS.mens,          i); }
function openWomensModal(i)        { openModal(PRODUCTS.womens,        i); }
function openChildrensModal(i)     { openModal(PRODUCTS.childrens,     i); }
function openAccessoriesModal(i)   { openModal(PRODUCTS.accessories,   i); }
function openHomeandlivingModal(i) { openModal(PRODUCTS.homeandliving, i); }

function pickSize(el) { document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active')); el.classList.add('active'); }

function addToCart() {
  if (!currentProduct) return;
  const size = document.querySelector('.size-btn.active')?.textContent || 'M';
  const existing = cart.find(item=>item.id===currentProduct.id&&item.size===size);
  if (existing) { existing.qty++; } else { cart.push({...currentProduct,size,qty:1}); }
  document.getElementById('cart-modal')?.classList.remove('open');
  updateCartUI();
  openCartDrawer();
}

function openCartDrawer() {
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  updateCartUI();
}
function closeCartDrawer() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
}



async function proceedToCheckout() {
  if (cart.length === 0) return;

  // Save cart to sessionStorage so checkout.html can read it
  sessionStorage.setItem('amigos_cart', JSON.stringify(cart));

  // Route to the custom checkout page
  // From index.html (root): pages/checkout.html
  // From /pages/*.html: checkout.html (same folder)
  const isInPagesFolder = window.location.pathname.includes('/pages/');
  const checkoutUrl = isInPagesFolder ? 'checkout.html' : 'pages/checkout.html';

  window.location.href = checkoutUrl;
}

function setupModal() {
  const modal = document.getElementById('cart-modal');
  const close = document.getElementById('modal-close');
  if (!modal) return;
  if (close) close.onclick = () => modal.classList.remove('open');
  modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open');});
}

function setupCartBtn() {
  const btn = document.getElementById('cart-btn');
  if (btn) btn.onclick = () => openCartDrawer();
}

function navigateToProduct(id) {
  const isInPagesFolder = window.location.pathname.includes('/pages/');
  const base = isInPagesFolder ? '' : 'pages/';
  window.location.href = `${base}product.html?id=${id}`;
}

document.addEventListener('DOMContentLoaded', () => {
  setupModal();
  setupCartBtn();
  if (document.getElementById('featured-grid'))             renderGrid(PRODUCTS.mens.slice(0,4),'featured-grid','openMensModal');
  if (document.getElementById('mens-filter-bar'))           renderFilters('mens',          'mens-filter-bar',          'mens-product-grid',          'openMensModal');
  if (document.getElementById('womens-filter-bar'))         renderFilters('womens',        'womens-filter-bar',        'womens-product-grid',        'openWomensModal');
  if (document.getElementById('childrens-filter-bar'))      renderFilters('childrens',     'childrens-filter-bar',     'childrens-product-grid',     'openChildrensModal');
  if (document.getElementById('accessories-filter-bar'))    renderFilters('accessories',   'accessories-filter-bar',   'accessories-product-grid',   'openAccessoriesModal');
  if (document.getElementById('homeandliving-filter-bar'))  renderFilters('homeandliving', 'homeandliving-filter-bar', 'homeandliving-product-grid', 'openHomeandlivingModal');
  updateCartUI();
});

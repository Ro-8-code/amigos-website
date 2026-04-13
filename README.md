# AMIGOS — Website Project
## Founded at Pebbles, Trearddur Bay, Anglesey, Wales

---

## FOLDER STRUCTURE

```
amigos-website/
├── index.html          ← Homepage
├── style.css           ← All styles (shared across every page)
├── script.js           ← All JavaScript (shared across every page)
├── images/             ← PUT ALL PHOTOS IN HERE
│   ├── hero-bay.jpg            (hero background — Trearddur Bay)
│   ├── trearddur-bay.jpg       (bay split section)
│   ├── trearddur-coast.jpg     (about page)
│   ├── knowing-within-cover.jpg (book cover)
│   ├── lookbook-1.jpg
│   ├── lookbook-2.jpg
│   ├── lookbook-3.jpg
│   └── products/
│       ├── sailor-tee.jpg
│       ├── smooth-sea-tee.jpg
│       └── ... (one image per product)
└── pages/
    ├── mens.html       ← Men's collection page
    ├── womens.html     ← Women's collection page
    ├── about.html      ← About Us page
    └── book.html       ← The Knowing Within page
```

---

## HOW TO VIEW LOCALLY

1. Open the `amigos-website` folder in VS Code
2. Right-click `index.html` → **Open with Live Server**
   (or click **Go Live** at the bottom of VS Code)
3. The site opens at `http://127.0.0.1:5500`

---

## ADDING REAL PHOTOS

Search for `<!-- Replace` in any file to find every placeholder.

**Product images** — open `script.js` and find each product object.
Change the `image` field from the Unsplash URL to your local path:
```js
// Before:
image: 'https://images.unsplash.com/...'

// After:
image: '../images/products/sailor-tee.jpg'
// (use '../images/' from pages/, or 'images/' from index.html)
```

**Book cover** — in `pages/book.html`, find the comment block
and replace the placeholder div with:
```html
<img src="../images/knowing-within-cover.jpg" alt="The Knowing Within"
     style="width:260px; height:auto;">
```

---

## ADDING PRODUCTS

In `script.js`, find the `PRODUCTS` object and add to the `mens` or `womens` array:
```js
{
  id: 'm9',                          // unique ID
  name: 'New Product Name',
  category: 't-shirts',              // t-shirts | hoodies | sweatshirts | caps | trousers | jewellery
  variant: 'Colour Description',
  price: '£55',
  tag: 'New',                        // 'New' | 'Bestseller' | null
  colors: ['#hexcode', '#hexcode'],  // colour swatches shown in modal
  image: '../images/products/new-product.jpg'
}
```

---

## CONNECTING PAYMENTS

### Stripe (recommended)
1. Sign up at https://stripe.com
2. Install: `npm install @stripe/stripe-js`
3. In `script.js`, find the `addToCart()` function
4. Replace the comment block with your Stripe Checkout code:
```js
const stripe = Stripe('YOUR_PUBLISHABLE_KEY');
stripe.redirectToCheckout({
  lineItems: [{ price: 'PRICE_ID', quantity: 1 }],
  mode: 'payment',
  successUrl: window.location.origin + '/success.html',
  cancelUrl:  window.location.origin + '/index.html',
});
```

### WooCommerce (WordPress)
1. Set up WordPress + WooCommerce
2. Install the "WooCommerce Stripe" plugin
3. Use WooCommerce REST API to sync products
4. Guide: https://woocommerce.com/document/stripe/

### Klarna / Apple Pay
Both are available through Stripe — enable them in your Stripe Dashboard
under Settings → Payment Methods.

---

## UPDATING THE BOOK LINK

In `pages/book.html`, find:
```html
<a href="#" target="_blank" class="book-external-btn">
```
Replace `#` with the real book website URL when it's ready:
```html
<a href="https://theknowingwithin.com" target="_blank" class="book-external-btn">
```

---

## DEPLOYING ONLINE

### Option 1 — Netlify (free, easiest)
1. Go to https://netlify.com
2. Drag and drop the entire `amigos-website` folder
3. Your site is live instantly with a free URL
4. Connect a custom domain (e.g. amigosclothing.co.uk) in Settings

### Option 2 — Vercel (free)
1. Go to https://vercel.com
2. Import your GitHub repo or drag the folder
3. Deploy in seconds

### Recommended domain
`amigosclothing.co.uk` — register at Namecheap or GoDaddy (~£10/year)

---

## BRAND DETAILS

- **Founded:** Pebbles, Trearddur Bay, Anglesey, Wales
- **Est:** 2025
- **Coordinates:** 53°16'04" N, 4°37'35" W
- **Tagline:** A smooth sea never made a skilled sailor
- **Spanish:** Amigos por siempre

---

*Built with love. For Mum. Amigos por siempre.*

/* Harvest Hacker — Marketplace (Buy + Sell + Multi-language + UPI + Checkout) */

/* =========================
   i18n dictionary (EN / HI)
   Add keys and translations here.
   ========================= */
const I18N = {
  en: {
    brand_title: "Harvest Hacker",
    brand_sub: "Marketplace — Buy & Sell Farm Resources",
    tab_buy: "Buy",
    tab_sell: "Sell",
    ph_search: "Search crops, tools, fertilisers...",
    btn_search: "Search",
    btn_cart: "Cart",
    sort_relevance: "Sort: Relevance",
    sort_low: "Price: Low → High",
    sort_high: "Price: High → Low",
    loc_any: "Location: Any",
    loc_near: "Within 50 km",
    sell_heading: "Sell an item",
    ph_sell_title: "Product name",
    ph_sell_price: "Price (₹)",
    ph_sell_unit: "Unit (e.g. 50 kg, each)",
    ph_sell_qty: "Quantity",
    ph_sell_city: "City, State",
    ph_sell_desc: "Description",
    btn_add: "Add listing",
    sell_note: "Your listing will appear in the Buy tab (stored locally).",
    cart_title: "Your Cart",
    cart_sub: "Items added",
    cart_total: "Total",
    btn_checkout: "Checkout",
    btn_close: "Close",
    btn_addcart: "Add to cart",
    btn_buynow: "Buy now",
    btn_cancel: "Cancel",
    btn_confirm: "Confirm & Pay",
    lbl_name: "Name",
    ph_name: "Your name",
    lbl_phone: "Phone",
    ph_phone: "Mobile number",
    lbl_payment: "Payment",
    pay_cod: "Cash on Delivery",
    pay_upi: "UPI (mock)",
    lbl_state: "State",
    ph_state: "State",
    lbl_city: "City",
    ph_city: "City",
    lbl_pincode: "Pincode",
    ph_pincode: "Pincode",
    lbl_address: "Address",
    ph_address: "Street / Colony",
    lbl_upi: "UPI ID",
    ph_upi: "example@bank",
    upi_note: "(Optional: upload UPI QR image)",
    btn_search_alt: "Search",
    sell_success: "Listing added — it appears at top in Buy tab",
    order_success: "Order placed successfully! Order id:",
    err_cart_empty: "Cart is empty",
    err_name: "Please enter a name",
    err_phone: "Please enter phone number",
    err_phone_invalid: "Enter valid 10-digit Indian mobile starting 6-9",
    err_statecitypincode: "Please enter State, City and Pincode",
    err_pincode_invalid: "Enter valid 6-digit pincode",
    err_upi: "Please enter UPI ID (example@bank)"
  },
  hi: {
    brand_title: "हार्वेस्ट हैकर",
    brand_sub: "मार्केटप्लेस — खरीदें और बेचें कृषि संसाधन",
    tab_buy: "खरीदें",
    tab_sell: "बेचें",
    ph_search: "फसलों, उपकरणों, उर्वरकों को खोजें...",
    btn_search: "खोजें",
    btn_cart: "कार्ट",
    sort_relevance: "सॉर्ट: प्रासंगिकता",
    sort_low: "क़ीमत: कम → ज्यादा",
    sort_high: "क़ीमत: ज्यादा → कम",
    loc_any: "स्थान: कोई भी",
    loc_near: "50 किमी के भीतर",
    sell_heading: "एक आइटम बेचें",
    ph_sell_title: "उत्पाद का नाम",
    ph_sell_price: "मूल्य (₹)",
    ph_sell_unit: "इकाई (उदा. 50 kg, each)",
    ph_sell_qty: "मात्रा",
    ph_sell_city: "शहर, राज्य",
    ph_sell_desc: "विवरण",
    btn_add: "लिस्टिंग जोड़ें",
    sell_note: "आपकी लिस्टिंग Buy टैब में दिखाई देगी (लोकल में सहेजी जाएगी)।",
    cart_title: "आपका कार्ट",
    cart_sub: "जोड़े गए आइटम",
    cart_total: "कुल",
    btn_checkout: "चेकआउट",
    btn_close: "बंद करें",
    btn_addcart: "कार्ट में जोड़ें",
    btn_buynow: "अभी खरीदें",
    btn_cancel: "रद्द करें",
    btn_confirm: "पुष्ट करें और भुगतान",
    lbl_name: "नाम",
    ph_name: "आपका नाम",
    lbl_phone: "फोन",
    ph_phone: "मोबाइल नंबर",
    lbl_payment: "भुगतान",
    pay_cod: "कैश ऑन डिलीवरी",
    pay_upi: "UPI (नमूना)",
    lbl_state: "राज्य",
    ph_state: "राज्य",
    lbl_city: "शहर",
    ph_city: "शहर",
    lbl_pincode: "पिनकोड",
    ph_pincode: "पिनकोड",
    lbl_address: "पता",
    ph_address: "सड़क / कॉलोनी",
    lbl_upi: "UPI ID",
    ph_upi: "example@bank",
    upi_note: "(वैकल्पिक: UPI QR इमेज अपलोड करें)",
    btn_search_alt: "खोजें",
    sell_success: "लिस्टिंग जोड़ दी गई — यह Buy टैब में ऊपर दिखाई देगी",
    order_success: "ऑर्डर सफलतापूर्वक हुआ! ऑर्डर आईडी:",
    err_cart_empty: "कार्ट खाली है",
    err_name: "कृपया नाम दर्ज करें",
    err_phone: "कृपया फ़ोन नंबर दर्ज करें",
    err_phone_invalid: "सही 10 अंकों का भारतीय मोबाइल दर्ज करें (6-9 से शुरू)",
    err_statecitypincode: "कृपया राज्य, शहर और पिनकोड दर्ज करें",
    err_pincode_invalid: "सही 6-अंकीय पिनकोड दर्ज करें",
    err_upi: "कृपया UPI ID दर्ज करें (example@bank)"
  }
};

/* -------------------------
   Storage keys & initial products
   ------------------------- */
const KEY_PRODUCTS = 'hh_products_v2';
const KEY_CART = 'hh_cart_v2';
const KEY_ORDERS = 'hh_orders_v2';

const INITIAL_PRODUCTS = [
  { id: 1, title: 'Wheat Seeds - Premium', price: 1200, unit: '10 kg', city: 'Mandsaur, MP', seller: 'Ankit Farms', img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=60', qty: 50, category: 'Seeds', desc: 'High-yield wheat seeds, treated for pests.' },
  { id: 2, title: 'Organic Compost', price: 450, unit: '50 kg', city: 'Ahmedabad, GJ', seller: 'GreenGrow', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=60', qty: 120, category: 'Fertilizers', desc: 'Rich organic compost to improve soil health.' },
  { id: 3, title: 'Urea (Granular)', price: 500, unit: '50 kg', city: 'Sonipat, HR', seller: 'AgroSupplies', img: 'https://images.unsplash.com/photo-1542736667-069246bdbc6d?auto=format&fit=crop&w=900&q=60', qty: 200, category: 'Fertilizers', desc: 'Standard urea fertiliser, high nitrogen content.' },
  { id: 4, title: 'Tractor Attach Seeder', price: 35000, unit: 'each', city: 'Ludhiana, PB', seller: 'FarmMachinesCo', img: 'https://images.unsplash.com/photo-1617202733860-1b1a6a8f8c62?auto=format&fit=crop&w=900&q=60', qty: 5, category: 'Machinery', desc: 'Seeder attachment for efficient sowing.' },
  { id: 5, title: 'Onion - Fresh', price: 30, unit: 'kg', city: 'Nashik, MH', seller: 'Local Farmer', img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=900&q=60', qty: 100, category: 'Produce', desc: 'Fresh harvested onions, medium size.' },
  { id: 6, title: 'Pesticide Spray (5L)', price: 850, unit: '5 L', city: 'Nagpur, MH', seller: 'SafeCrop', img: 'https://images.unsplash.com/photo-1582719478250-72d4f2b0d6f8?auto=format&fit=crop&w=900&q=60', qty: 60, category: 'Agrochemicals', desc: 'Effective broad-spectrum pesticide.' }
];

/* -------------------------
   State
   ------------------------- */
let products = loadProducts();
let state = { products: products.slice(), cart: loadCart() };

/* -------------------------
   DOM refs
   ------------------------- */
const productGrid = document.getElementById('productGrid');
const categoryChips = document.getElementById('categoryChips');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sortSelect = document.getElementById('sortSelect');
const locationSelect = document.getElementById('locationSelect');

const cartPanel = document.getElementById('cartPanel');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

const modal = document.getElementById('modal');
const modalGallery = document.getElementById('modalGallery');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalMeta = document.getElementById('modalMeta');
const modalDesc = document.getElementById('modalDesc');
const modalAddBtn = document.getElementById('modalAddBtn');
const modalBuyBtn = document.getElementById('modalBuyBtn');
const modalClose = document.getElementById('modalClose');

const checkout = document.getElementById('checkout');
const checkoutTitle = document.getElementById('checkoutTitle');
const checkoutItems = document.getElementById('checkoutItems');
const buyerName = document.getElementById('buyerName');
const buyerPhone = document.getElementById('buyerPhone');
const buyerAddress = document.getElementById('buyerAddress');
const paymentMethod = document.getElementById('paymentMethod');
const cancelCheckout = document.getElementById('cancelCheckout');
const confirmCheckout = document.getElementById('confirmCheckout');
const buyerState = document.getElementById('buyerState');
const buyerCity = document.getElementById('buyerCity');
const buyerPincode = document.getElementById('buyerPincode');
const upiBlock = document.getElementById('upiBlock');
const buyerUpi = document.getElementById('buyerUpi');
const upiQr = document.getElementById('upiQr');
const checkoutClose = document.getElementById('checkoutClose');

const buyTab = document.getElementById('buyTab');
const sellTab = document.getElementById('sellTab');
const buyView = document.getElementById('buyView');
const sellView = document.getElementById('sellView');

const addListingBtn = document.getElementById('addListing');
const sellImageEl = document.getElementById('sellImage');

const langSelect = document.getElementById('langSelect');

/* -------------------------
   i18n helper
   ------------------------- */
let LANG = localStorage.getItem('hh_lang') || 'en';
function t(key){ return (I18N[LANG] && I18N[LANG][key]) ? I18N[LANG][key] : key; }
function applyTranslations(){
  // text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    el.textContent = t(k);
  });
  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const k = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(k);
  });
  // update cart button label that includes count
  openCartBtn.textContent = `${t('btn_cart')} (${state.cart.reduce((s,i)=>s+i.qty,0)})`;
}
langSelect.value = LANG;
langSelect.addEventListener('change', (e)=>{ LANG = e.target.value; localStorage.setItem('hh_lang', LANG); applyTranslations(); });

/* -------------------------
   Persistence helpers
   ------------------------- */
function loadProducts(){
  try{
    const raw = localStorage.getItem(KEY_PRODUCTS);
    if(raw) return JSON.parse(raw);
    localStorage.setItem(KEY_PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
    return JSON.parse(JSON.stringify(INITIAL_PRODUCTS));
  } catch(e){ console.error(e); return JSON.parse(JSON.stringify(INITIAL_PRODUCTS)); }
}
function saveProducts(){ localStorage.setItem(KEY_PRODUCTS, JSON.stringify(state.products)); }
function loadCart(){ try{ const raw = localStorage.getItem(KEY_CART); return raw? JSON.parse(raw): []; }catch(e){ return []; } }
function saveCart(){ localStorage.setItem(KEY_CART, JSON.stringify(state.cart)); }
function saveOrder(order){ try{ const raw = localStorage.getItem(KEY_ORDERS); const arr = raw? JSON.parse(raw):[]; arr.push(order); localStorage.setItem(KEY_ORDERS, JSON.stringify(arr)); }catch(e){ console.error(e);} }

/* -------------------------
   Categories
   ------------------------- */
function initCategories(){
  const cats = Array.from(new Set(state.products.map(p=>p.category || 'Other')));
  categoryChips.innerHTML = '';
  const allBtn = createChip('All', true); categoryChips.appendChild(allBtn);
  cats.forEach(c=> categoryChips.appendChild(createChip(c)));
}
function createChip(label, active=false){
  const btn = document.createElement('button'); btn.className = 'chip' + (active? ' active':''); btn.textContent = label;
  btn.addEventListener('click', ()=>{ document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active')); btn.classList.add('active'); applyFilters(); });
  return btn;
}

/* -------------------------
   Render grid
   ------------------------- */
function renderGrid(list){
  productGrid.innerHTML = '';
  if(!list.length){ productGrid.innerHTML = `<div class="empty">${t('empty') || 'No products found'}</div>`; return; }
  list.forEach(p=>{
    const el = document.createElement('article'); el.className = 'card';
    // use data attributes and event binding (no inline onclick)
    el.innerHTML = `
      <div class="thumb" style="background-image:url('${escapeHtml(p.img)}')" role="img" aria-label="${escapeHtml(p.title)}"></div>
      <div class="info">
        <div class="title">${escapeHtml(p.title)}</div>
        <div class="meta">${escapeHtml(p.seller)} • ${escapeHtml(p.city)}</div>
        <div><span class="price">${formatPrice(p.price)}</span> <span class="small muted">/ ${escapeHtml(p.unit || '')}</span></div>
        <div class="small muted">Available: ${p.qty||0}</div>
        <div class="actions">
          <button class="btn ghost viewBtn" data-id="${p.id}">${t('btn_search_alt') || 'View'}</button>
          <button class="btn primary addBtn" data-id="${p.id}">${t('btn_addcart')}</button>
          <button class="btn ghost buyBtn" data-id="${p.id}">${t('btn_buynow')}</button>
        </div>
      </div>
    `;
    productGrid.appendChild(el);
  });
  // attach listeners
  document.querySelectorAll('.viewBtn').forEach(b=> b.addEventListener('click', ()=> openProduct(Number(b.dataset.id))));
  document.querySelectorAll('.addBtn').forEach(b=> b.addEventListener('click', ()=> addToCart(Number(b.dataset.id))));
  document.querySelectorAll('.buyBtn').forEach(b=> b.addEventListener('click', ()=> buyNowProduct(Number(b.dataset.id))));
}

/* -------------------------
   Filters & search
   ------------------------- */
let searchTimer = null;
function liveSearchHandler(){ if(searchTimer) clearTimeout(searchTimer); searchTimer = setTimeout(()=> applyFilters(), 300); }
searchInput.addEventListener('input', liveSearchHandler);
searchBtn.addEventListener('click', applyFilters);

function applyFilters(){
  const q = (searchInput.value||'').trim().toLowerCase();
  const activeCat = document.querySelector('.chip.active')?.textContent || 'All';
  let res = state.products.filter(p=>{
    const hay = (p.title + ' ' + (p.category||'') + ' ' + (p.seller||'') + ' ' + (p.city||'') + ' ' + (p.desc||'')).toLowerCase();
    const matchesQ = !q || q.split(' ').every(t => hay.includes(t));
    const matchesCat = (activeCat === 'All') || (p.category === activeCat);
    return matchesQ && matchesCat;
  });
  const s = sortSelect.value;
  if(s === 'price_asc') res.sort((a,b)=>a.price-b.price);
  if(s === 'price_desc') res.sort((a,b)=>b.price-a.price);
  renderGrid(res);
}

/* -------------------------
   Modal (product detail)
   ------------------------- */
let currentProduct = null;
function openProduct(id){
  const p = state.products.find(x=>x.id===id);
  if(!p) return;
  currentProduct = p;
  modalGallery.style.backgroundImage = `url('${p.img}')`;
  modalTitle.textContent = p.title;
  modalPrice.textContent = formatPrice(p.price) + ` / ${p.unit || ''}`;
  modalMeta.textContent = `${p.seller} • ${p.city}`;
  modalDesc.textContent = p.desc;
  modalAddBtn.onclick = ()=>{ addToCart(p.id); closeModal(); openCart(); };
  modalBuyBtn.onclick = ()=>{ closeModal(); openCheckoutForProduct(p.id); };
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden','false');
  modalClose.focus();
}
function closeModal(){ modal.style.display = 'none'; modal.setAttribute('aria-hidden','true'); }
modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });
modalClose.addEventListener('click', closeModal);

/* -------------------------
   Cart functionality
   ------------------------- */
function loadCartFromStorage(){ state.cart = loadCart(); renderCart(); }
function addToCart(id){
  const p = state.products.find(x=>x.id===id); if(!p) return;
  const exist = state.cart.find(c=>c.id===id);
  if(exist) exist.qty++;
  else state.cart.push({ id: p.id, title: p.title, price: p.price, qty: 1, img: p.img });
  saveCart(); renderCart(); openCart();
}
function increaseQty(id){ const it = state.cart.find(c=>c.id===id); if(it){ it.qty++; saveCart(); renderCart(); } }
function decreaseQty(id){ const it = state.cart.find(c=>c.id===id); if(it){ it.qty--; if(it.qty<=0) state.cart = state.cart.filter(x=>x.id!==id); saveCart(); renderCart(); } }
function renderCart(){
  cartItemsEl.innerHTML = '';
  let total = 0;
  if(state.cart.length === 0){
    cartItemsEl.innerHTML = `<div class="small muted">${t('err_cart_empty') || 'Your cart is empty'}</div>`;
    checkoutBtn.disabled = true;
  } else {
    state.cart.forEach(item=>{
      total += item.price * item.qty;
      const div = document.createElement('div'); div.className = 'cart-item';
      div.innerHTML = `<img src="${item.img}" alt="${escapeHtml(item.title)}" />
        <div style="flex:1"><div style="font-weight:700">${escapeHtml(item.title)}</div><div class="small muted">₹${item.price} x ${item.qty}</div></div>
        <div style="display:flex;flex-direction:column;gap:6px">
          <button class="btn ghost decBtn" data-id="${item.id}">-</button>
          <button class="btn ghost incBtn" data-id="${item.id}">+</button>
        </div>`;
      cartItemsEl.appendChild(div);
    });
    checkoutBtn.disabled = false;
  }
  cartTotalEl.textContent = '₹' + new Intl.NumberFormat('en-IN').format(total);
  cartCountEl.textContent = state.cart.reduce((s,i)=>s+i.qty,0);
  openCartBtn.textContent = `${t('btn_cart')} (${state.cart.reduce((s,i)=>s+i.qty,0)})`;
  // attach
  document.querySelectorAll('.incBtn').forEach(b=> b.addEventListener('click', ()=> increaseQty(Number(b.dataset.id))));
  document.querySelectorAll('.decBtn').forEach(b=> b.addEventListener('click', ()=> decreaseQty(Number(b.dataset.id))));
}
function openCart(){ cartPanel.style.display = 'flex'; cartPanel.setAttribute('aria-hidden','false'); }
function closeCart(){ cartPanel.style.display = 'none'; cartPanel.setAttribute('aria-hidden','true'); }
openCartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);

/* -------------------------
   Buy flows
   ------------------------- */
function buyNowProduct(id){ openCheckoutForProduct(id); }

function openCheckoutForProduct(id){
  const p = state.products.find(x=>x.id===id); if(!p) return;
  checkoutTitle.textContent = `${t('btn_buynow')} — ${p.title}`;
  checkoutItems.innerHTML = `
    <div style="display:flex;gap:8px;align-items:center;padding:8px;border-radius:8px;background:#fbfff9">
      <img src="${p.img}" style="width:64px;height:48px;object-fit:cover;border-radius:6px" />
      <div style="flex:1">
        <div style="font-weight:700">${escapeHtml(p.title)}</div>
        <div class="small muted">${t('cart_sub') || 'Seller'}: ${escapeHtml(p.seller)}</div>
        <div class="small muted">Price: ₹${p.price} / ${escapeHtml(p.unit || '')}</div>
      </div>
      <div style="width:80px">
        <label class="small">${t('ph_sell_qty') || 'Qty'}</label>
        <select id="singleQty"><option>1</option><option>2</option><option>3</option><option>4</option></select>
      </div>
    </div>
  `;
  // reset fields
  buyerName.value = ''; buyerPhone.value = ''; buyerAddress.value = ''; buyerState.value=''; buyerCity.value=''; buyerPincode.value=''; buyerUpi.value='';
  paymentMethod.value = 'cod'; upiBlock.style.display = 'none';
  checkout.dataset.singleProduct = id; checkout.dataset.cartCheckout = 'false';
  checkout.style.display = 'flex'; checkout.setAttribute('aria-hidden','false');
  checkoutClose.focus();
}

function openCheckoutFromCart(){
  if(state.cart.length === 0){ alert(t('err_cart_empty')); return; }
  checkoutTitle.textContent = t('btn_checkout') || 'Cart Checkout';
  checkoutItems.innerHTML = state.cart.map(it=>`
    <div style="display:flex;gap:8px;align-items:center;padding:6px;border-radius:6px;background:#fbfff9;margin-bottom:6px">
      <img src="${it.img}" style="width:56px;height:44px;object-fit:cover;border-radius:6px" />
      <div style="flex:1">
        <div style="font-weight:700">${escapeHtml(it.title)}</div>
        <div class="small muted">₹${it.price} x ${it.qty}</div>
      </div>
      <div class="small muted">₹${it.price * it.qty}</div>
    </div>
  `).join('');
  buyerName.value = ''; buyerPhone.value = ''; buyerAddress.value = ''; buyerState.value=''; buyerCity.value=''; buyerPincode.value=''; buyerUpi.value='';
  paymentMethod.value = 'cod'; upiBlock.style.display = 'none';
  checkout.dataset.cartCheckout = 'true';
  checkout.style.display = 'flex'; checkout.setAttribute('aria-hidden','false');
  checkoutClose.focus();
}

/* -------------------------
   Checkout actions & validation
   ------------------------- */
cancelCheckout.addEventListener('click', ()=>{ checkout.style.display = 'none'; checkout.setAttribute('aria-hidden','true'); });
checkoutClose.addEventListener('click', ()=>{ checkout.style.display = 'none'; checkout.setAttribute('aria-hidden','true'); });

paymentMethod.addEventListener('change', ()=>{ upiBlock.style.display = paymentMethod.value === 'upi' ? 'block' : 'none'; });

confirmCheckout.addEventListener('click', ()=>{
  const name = (buyerName.value||'').trim();
  const phone = (buyerPhone.value||'').trim();
  const statev = (buyerState.value||'').trim();
  const city = (buyerCity.value||'').trim();
  const pincode = (buyerPincode.value||'').trim();
  const address = (buyerAddress.value||'').trim();

  if(!name){ alert(t('err_name')); return; }
  if(!/^[6-9]\d{9}$/.test(phone)){ alert(t('err_phone_invalid')); return; }
  if(!statev || !city || !pincode){ alert(t('err_statecitypincode')); return; }
  if(!/^[1-9][0-9]{5}$/.test(pincode)){ alert(t('err_pincode_invalid')); return; }

  if(paymentMethod.value === 'upi'){
    const upiId = (buyerUpi.value||'').trim();
    if(!/^[\w.-]{2,}@[a-zA-Z]{2,}$/.test(upiId)){ alert(t('err_upi')); return; }
  }

  // determine items & total
  let items = []; let total = 0;
  if(checkout.dataset.cartCheckout === 'true'){
    items = state.cart.map(c=>({id:c.id, qty:c.qty, price:c.price}));
    total = state.cart.reduce((s,i)=>s+i.price*i.qty,0);
  } else {
    const pid = Number(checkout.dataset.singleProduct);
    const p = state.products.find(x=>x.id===pid); if(!p) return alert('Product not found');
    const qtyEl = document.getElementById('singleQty');
    const qty = Number(qtyEl ? qtyEl.value : 1);
    items = [{ id: p.id, qty, price: p.price }];
    total = p.price * qty;
  }

  const order = { id: 'ORD' + Date.now(), buyer: { name, phone, state: statev, city, pincode, address }, items, total, payment: paymentMethod.value, created_at: new Date().toISOString() };
  saveOrder(order);

  if(checkout.dataset.cartCheckout === 'true'){ state.cart = []; saveCart(); renderCart(); }
  checkout.style.display = 'none'; checkout.setAttribute('aria-hidden','true');
  alert(`${t('order_success')} ${order.id}`);
});

/* -------------------------
   Sell: add listing (local only)
   ------------------------- */
addListingBtn.addEventListener('click', ()=>{
  const title = document.getElementById('sellTitle').value.trim();
  const category = document.getElementById('sellCategory').value.trim();
  const price = Number(document.getElementById('sellPrice').value);
  const unit = document.getElementById('sellUnit').value.trim();
  const qty = Number(document.getElementById('sellQty').value);
  const city = document.getElementById('sellCity').value.trim();
  const desc = document.getElementById('sellDesc').value.trim();
  if(!title || !category || !price || !unit || !qty){ alert(t('err_name')); return; } // simple check
  const file = sellImageEl.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = e=>{
      createProductListing({ title, category, price, unit, qty, city, desc, img: e.target.result });
      // reset sell form
      document.getElementById('sellTitle').value=''; document.getElementById('sellPrice').value=''; document.getElementById('sellUnit').value=''; document.getElementById('sellQty').value=''; document.getElementById('sellCity').value=''; document.getElementById('sellDesc').value=''; sellImageEl.value='';
    };
    reader.readAsDataURL(file);
  } else {
    createProductListing({ title, category, price, unit, qty, city, desc, img: 'https://via.placeholder.com/900x600?text=No+Image' });
  }
});

function createProductListing(obj){
  const id = Date.now();
  const newP = { id, title: obj.title, category: obj.category, price: obj.price, unit: obj.unit, qty: obj.qty, city: obj.city||'Unknown', seller: 'You (Local)', img: obj.img, desc: obj.desc||'' };
  state.products.unshift(newP);
  saveProducts();
  initCategories();
  applyFilters();
  alert(t('sell_success'));
}

/* -------------------------
   Utility functions
   ------------------------- */
function formatPrice(n){ return '₹' + new Intl.NumberFormat('en-IN').format(n); }
function escapeHtml(str){ return String(str||'').replace(/[&<>"']/g,(m)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

/* -------------------------
   INIT: wiring
   ------------------------- */
function bindEvents(){
  sortSelect.addEventListener('change', applyFilters);
  locationSelect.addEventListener('change', applyFilters);
  searchInput.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ applyFilters(); } });
  checkoutBtn.addEventListener('click', ()=>{ openCheckoutFromCart(); });
  openCartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);

  buyTab.addEventListener('click', ()=>{ buyTab.classList.add('active'); sellTab.classList.remove('active'); buyView.style.display='block'; sellView.style.display='none'; });
  sellTab.addEventListener('click', ()=>{ sellTab.classList.add('active'); buyTab.classList.remove('active'); sellView.style.display='block'; buyView.style.display='none'; });

  // keyboard Escape to close modals
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ closeModal(); checkout.style.display='none'; } });
}

function init(){
  applyTranslations();
  initCategories();
  renderGrid(state.products);
  loadCartFromStorage();
  renderCart();
  bindEvents();
}
init();
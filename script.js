/* =============================================================
   AURA — Fine Dining | Menu logic
   Data, category filter, cart, quantity, cart panel toggle.
   ============================================================= */

/* ---------------------- DISH DATA ---------------------- */
/* 4 dishes per category. Real Unsplash food photography. */
const dishes = [
  /* ---- SALADS ---- */
  {
    id: 'salad-avocado',
    cat: 'salads',
    name: 'Салат с авокадо',
    desc: 'Свежие овощи, авокадо, микрозелень и ореховый соус',
    price: 450,
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'salad-caesar',
    cat: 'salads',
    name: 'Цезарь с курицей',
    desc: 'Листья романо, гренки, пармезан и фирменный соус',
    price: 520,
    img: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'salad-greek',
    cat: 'salads',
    name: 'Греческий салат',
    desc: 'Томаты, огурцы, фета, оливки и оливковое масло',
    price: 480,
    img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'salad-caprese',
    cat: 'salads',
    name: 'Салат Капрезе',
    desc: 'Моцарелла, бычье сердце, базилик и песто',
    price: 550,
    img: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=900&q=80'
  },

  /* ---- MAINS ---- */
  {
    id: 'main-steak',
    cat: 'mains',
    name: 'Стейк из говядины',
    desc: 'Подаётся с запечёнными овощами и соусом деми-глас',
    price: 1250,
    img: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'main-truffle-pasta',
    cat: 'mains',
    name: 'Паста с трюфелем',
    desc: 'Паста в сливочном соусе с чёрным трюфелем и пармезаном',
    price: 790,
    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'main-salmon',
    cat: 'mains',
    name: 'Лосось на гриле',
    desc: 'Филе лосося с овощами гриль и соусом из белого вина',
    price: 1450,
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'main-risotto',
    cat: 'mains',
    name: 'Ризотто с грибами',
    desc: 'Сливочное ризотто с белыми грибами и пармезаном',
    price: 720,
    img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80'
  },

  /* ---- DESSERTS ---- */
  {
    id: 'dessert-fondant',
    cat: 'desserts',
    name: 'Шоколадный фондан',
    desc: 'Тёплый шоколадный кекс с жидкой начинкой',
    price: 490,
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'dessert-cheesecake',
    cat: 'desserts',
    name: 'Чизкейк с ягодами',
    desc: 'Нежный чизкейк с сезонными ягодами и соусом',
    price: 450,
    img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'dessert-tiramisu',
    cat: 'desserts',
    name: 'Тирамису',
    desc: 'Классический итальянский десерт с маскарпоне и кофе',
    price: 470,
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'dessert-brulee',
    cat: 'desserts',
    name: 'Крем-брюле',
    desc: 'Ванильный крем с карамельной корочкой',
    price: 440,
    img: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=900&q=80'
  },

  /* ---- DRINKS ---- */
  {
    id: 'drink-lemonade',
    cat: 'drinks',
    name: 'Домашний лимонад',
    desc: 'Освежающий лимонад с лимоном, мятой и лаймом',
    price: 250,
    img: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'drink-mojito',
    cat: 'drinks',
    name: 'Мохито б/а',
    desc: 'Освежающий коктейль с мятой, лаймом и содовой',
    price: 280,
    img: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'drink-juice',
    cat: 'drinks',
    name: 'Свежевыжатый сок',
    desc: 'Апельсин, яблоко или грейпфрут — на ваш выбор',
    price: 320,
    img: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'drink-smoothie',
    cat: 'drinks',
    name: 'Ягодный смузи',
    desc: 'Клубника, малина, банан и натуральный йогурт',
    price: 300,
    img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=80'
  }
];

/* ---------------------- STATE ---------------------- */
const state = {
  activeCat: 'all',
  /** cart: { [dishId]: qty } */
  cart: {}
};

/* ---------------------- DOM REFS ---------------------- */
const $grid        = document.getElementById('dishGrid');
const $navItems    = document.querySelectorAll('.nav-item');
const $catChips    = document.querySelectorAll('.cat-chip');

const $cartPill    = document.getElementById('cartPill');
const $mobileCart  = document.getElementById('mobileCartBtn');
const $cartPanel   = document.getElementById('cartPanel');
const $cartOverlay = document.getElementById('cartOverlay');
const $cartClose   = document.getElementById('cartClose');
const $continueBtn = document.getElementById('continueBtn');

const $cartBody    = document.getElementById('cartBody');
const $cartEmpty   = document.getElementById('cartEmpty');
const $cartFoot    = document.getElementById('cartFoot');
const $cartTotal   = document.getElementById('cartTotal');

const $pillBadge   = document.getElementById('cartPillBadge');
const $mobBadge    = document.getElementById('mobileCartBadge');

const $toast       = document.getElementById('toast');

/* ---------------------- DISH CATEGORY MAP ---------------------- */
const catNames = {
  salads: 'Салаты',
  mains: 'Основные блюда',
  desserts: 'Десерты',
  drinks: 'Напитки'
};
const catOrder = ['salads', 'mains', 'desserts', 'drinks'];

function cardHTML(d, i) {
  return `
    <article class="card" style="animation-delay:${i * 55}ms">
      <div class="card-media">
        <img src="${d.img}" alt="${escapeHtml(d.name)}" loading="lazy">
      </div>
      <div class="card-body">
        <h3 class="card-name">${escapeHtml(d.name)}</h3>
        <p class="card-desc">${escapeHtml(d.desc)}</p>
        <div class="card-foot">
          <div class="card-price">${d.price} <em>сом</em></div>
          <button class="card-add" data-id="${d.id}" aria-label="Добавить ${escapeHtml(d.name)} в корзину">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

/* ---------------------- RENDER GRID ---------------------- */
function renderGrid(){
  const isAll = state.activeCat === 'all';

  $grid.style.opacity = 0;
  setTimeout(() => {
    if(isAll){
      $grid.classList.add('grid--sections');
      $grid.innerHTML = catOrder.map(cat => {
        const items = dishes.filter(d => d.cat === cat);
        return `<div class="dish-section">
          <div class="dish-section-head">
            <span class="dish-section-line"></span>
            <h2 class="dish-section-title">${catNames[cat]}</h2>
            <span class="dish-section-line"></span>
          </div>
          <div class="dish-section-grid">
            ${items.map((d, i) => cardHTML(d, i)).join('')}
          </div>
        </div>`;
      }).join('');
    } else {
      $grid.classList.remove('grid--sections');
      const list = dishes.filter(d => d.cat === state.activeCat);
      $grid.innerHTML = list.map((d, i) => cardHTML(d, i)).join('');
    }
    $grid.style.opacity = 1;
    bindAddButtons();
  }, 140);
}

function bindAddButtons(){
  $grid.querySelectorAll('.card-add').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      addToCart(id);
      // tiny pop
      btn.animate(
        [{transform:'scale(1)'},{transform:'scale(1.25)'},{transform:'scale(1)'}],
        {duration:280, easing:'cubic-bezier(.34,1.56,.64,1)'}
      );
    });
  });
}

/* ---------------------- CATEGORY SWITCH ---------------------- */
function setCategory(cat){
  state.activeCat = cat;
  $navItems.forEach(b => b.classList.toggle('is-active', b.dataset.category === cat));
  $catChips.forEach(b => b.classList.toggle('is-active', b.dataset.category === cat));
  renderGrid();
}
$navItems.forEach(b => b.addEventListener('click', () => setCategory(b.dataset.category)));
$catChips.forEach(b => b.addEventListener('click', () => {
  setCategory(b.dataset.category);
  // auto-scroll chip into view
  b.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
}));

/* ---------------------- CART OPERATIONS ---------------------- */
function addToCart(id){
  state.cart[id] = (state.cart[id] || 0) + 1;
  renderCart();
  showToast('Добавлено в корзину');
}

function changeQty(id, delta){
  if(!state.cart[id]) return;
  state.cart[id] += delta;
  if(state.cart[id] <= 0) delete state.cart[id];
  renderCart();
}

function removeFromCart(id){
  delete state.cart[id];
  renderCart();
}

/* ---------------------- RENDER CART ---------------------- */
function renderCart(){
  const ids = Object.keys(state.cart);
  const count = ids.reduce((s, id) => s + state.cart[id], 0);
  const total = ids.reduce((s, id) => {
    const d = dishes.find(x => x.id === id);
    return d ? s + d.price * state.cart[id] : s;
  }, 0);

  // Badges
  $pillBadge.textContent = count;
  $mobBadge.textContent = count;
  $pillBadge.style.display = count ? '' : 'none';
  $mobBadge.style.display  = count ? '' : 'none';

  // Items vs empty
  if(!ids.length){
    $cartEmpty.style.display = 'flex';
    $cartBody.querySelectorAll('.cart-item').forEach(el => el.remove());
    $cartFoot.hidden = true;
    return;
  }
  $cartEmpty.style.display = 'none';
  $cartFoot.hidden = false;
  $cartTotal.textContent = total.toLocaleString('ru-RU');

  // Clear & rebuild items
  $cartBody.querySelectorAll('.cart-item').forEach(el => el.remove());
  ids.forEach(id => {
    const d = dishes.find(x => x.id === id);
    if(!d) return;
    const qty = state.cart[id];
    const itemHtml = `
      <div class="cart-item" data-id="${d.id}">
        <div class="cart-thumb"><img src="${d.img}" alt="" loading="lazy"></div>
        <div class="cart-info">
          <h4 class="cart-name">${escapeHtml(d.name)}</h4>
          <div class="qty">
            <button data-action="dec" aria-label="Уменьшить">−</button>
            <span>${qty}</span>
            <button data-action="inc" aria-label="Увеличить">+</button>
          </div>
        </div>
        <div class="cart-right">
          <button class="cart-remove" data-action="remove" aria-label="Удалить">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 12a2 2 0 0 0 2 1.8h6a2 2 0 0 0 2-1.8l1-12"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>
          </button>
          <div class="cart-price">${(d.price * qty).toLocaleString('ru-RU')} сом</div>
        </div>
      </div>
    `;
    $cartBody.insertAdjacentHTML('beforeend', itemHtml);
  });

  // Bind qty & remove
  $cartBody.querySelectorAll('.cart-item').forEach(row => {
    const id = row.dataset.id;
    row.querySelector('[data-action="dec"]').addEventListener('click', () => changeQty(id, -1));
    row.querySelector('[data-action="inc"]').addEventListener('click', () => changeQty(id, +1));
    row.querySelector('[data-action="remove"]').addEventListener('click', () => removeFromCart(id));
  });
}

/* ---------------------- CART PANEL TOGGLE ---------------------- */
function openCart(){
  $cartPanel.classList.add('is-open');
  $cartOverlay.classList.add('is-open');
  $cartPanel.setAttribute('aria-hidden', 'false');
  $cartOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeCart(){
  $cartPanel.classList.remove('is-open');
  $cartOverlay.classList.remove('is-open');
  $cartPanel.setAttribute('aria-hidden', 'true');
  $cartOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
$cartPill.addEventListener('click', openCart);
$mobileCart.addEventListener('click', openCart);
$cartClose.addEventListener('click', closeCart);
$cartOverlay.addEventListener('click', closeCart);
$continueBtn.addEventListener('click', closeCart);
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && $cartPanel.classList.contains('is-open')) closeCart();
});

/* ---------------------- TOAST ---------------------- */
let toastTimer = null;
function showToast(text){
  $toast.textContent = text;
  $toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $toast.classList.remove('is-visible'), 1600);
}

/* ---------------------- HELPERS ---------------------- */
function escapeHtml(str){
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ---------------------- INIT ---------------------- */
renderGrid();
renderCart();
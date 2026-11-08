/**
 * شيكن باشا | Chicken Basha
 * المحرك التفاعلي للموقع (سلة المشتريات، فلترة المنيو، التخصيص الكامل، اختيار الأحجام، الطلب المسبق، تتبع مباشر)
 * يعمل تحت بروتوكول file:// وكذلك http:// بدون قيود CORS
 * خالٍ تماماً من أي إيموجي
 */

// Retrieve data loaded from data.js
var RESTAURANT_INFO = window.RESTAURANT_INFO || {};
var PROMO_CODES = window.PROMO_CODES || [];
var BRANCHES = window.BRANCHES || [];
var CATEGORIES = window.CATEGORIES || [];
var MENU_ITEMS = window.MENU_ITEMS || [];
var TESTIMONIALS = window.TESTIMONIALS || [];
var SECRET_RECIPE_POINTS = window.SECRET_RECIPE_POINTS || [];

// SVG Icons helper for categories and notifications (Zero Emojis)
var ICONS = {
  all: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>',
  sandwiches: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16M4 14h16M7 6h10a4 4 0 014 4v0a1 1 0 01-1 1H4a1 1 0 01-1-1v0a4 4 0 014-4zM5 14h14a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2z"/></svg>',
  'roll-sandwiches': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
  'chicken-meals': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  'tender-meals': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>',
  'family-meals': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
  rizo: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12a8 8 0 01-16 0h16zM4 12v1a4 4 0 004 4h8a4 4 0 004-4v-1"/></svg>',
  'kids-meals': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  'side-items': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>',
  drinks: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>',
  check: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>',
  info: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  alert: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>',
  star: '<svg class="w-4 h-4 fill-current text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'
};

// Application State
var state = {
  orderType: 'delivery',
  selectedBranch: (BRANCHES && BRANCHES.length > 0) ? BRANCHES[0].id : 'nasr-city',
  pickupTime: '15-mins',
  activeCategory: 'all',
  searchQuery: '',
  onlySpicy: false,
  cart: [],
  appliedPromo: null,
  activeItemForCustomization: null,
  currentTrackedOrder: null,
  orderHistory: []
};

// LocalStorage Persistence
function loadPersistedState() {
  try {
    var savedCart = localStorage.getItem('chicken_basha_cart');
    if (savedCart) state.cart = JSON.parse(savedCart);

    var savedOrderType = localStorage.getItem('chicken_basha_order_type');
    if (savedOrderType) state.orderType = savedOrderType;

    var savedBranch = localStorage.getItem('chicken_basha_branch');
    if (savedBranch) state.selectedBranch = savedBranch;

    var savedHistory = localStorage.getItem('chicken_basha_orders');
    if (savedHistory) state.orderHistory = JSON.parse(savedHistory);

    var activeOrder = localStorage.getItem('chicken_basha_active_order');
    if (activeOrder) state.currentTrackedOrder = JSON.parse(activeOrder);
  } catch (e) {
    console.warn("Could not load from localStorage", e);
  }
}

function persistCart() {
  try {
    localStorage.setItem('chicken_basha_cart', JSON.stringify(state.cart));
    localStorage.setItem('chicken_basha_order_type', state.orderType);
    localStorage.setItem('chicken_basha_branch', state.selectedBranch);
  } catch (e) {
    console.warn("Could not persist to localStorage", e);
  }
}

// Toast Notifications (Zero Emojis)
function showToast(message, type) {
  type = type || 'success';
  var container = document.getElementById('toast-container');
  if (!container) return;

  var toast = document.createElement('div');
  var bgClass = type === 'success' 
    ? 'bg-[#1e1914] text-amber-300 border-amber-400 font-bold shadow-amber-500/20' 
    : type === 'error'
    ? 'bg-[#201010] text-red-300 border-red-500 font-bold shadow-red-500/20'
    : 'bg-[#18181b] text-white border-stone-600 font-bold';

  toast.className = 'flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border text-sm transform transition-all duration-300 translate-y-5 opacity-0 ' + bgClass;
  
  var icon = type === 'success' ? ICONS.check : type === 'error' ? ICONS.alert : ICONS.info;
  toast.innerHTML = '<span class="flex-shrink-0">' + icon + '</span> <span>' + message + '</span>';
  
  container.appendChild(toast);

  requestAnimationFrame(function() {
    toast.classList.remove('translate-y-5', 'opacity-0');
  });

  setTimeout(function() {
    toast.classList.add('translate-y-5', 'opacity-0');
    setTimeout(function() { toast.remove(); }, 300);
  }, 3500);
}

// Render Categories Bar (Zero Emojis)
function renderCategories() {
  var container = document.getElementById('categories-container');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(function(cat) {
    var isActive = state.activeCategory === cat.id;
    var activeClasses = isActive
      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-stone-950 font-black shadow-lg shadow-amber-500/25 border-amber-300/40 scale-105'
      : 'bg-stone-900/90 text-stone-300 hover:text-white hover:bg-stone-800/80 border border-stone-800 hover:border-stone-700';
    
    var iconSvg = ICONS[cat.id] || ICONS.all;

    return '<button onclick="window.selectCategory(\'' + cat.id + '\')" class="flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm transition-all duration-200 cursor-pointer border ' + activeClasses + '"><span class="flex-shrink-0">' + iconSvg + '</span><span>' + cat.name + '</span></button>';
  }).join('');
}

// Render Menu Items Grid (Zero Emojis - High Conversion & Photographic Hero)
function renderMenuItems() {
  var container = document.getElementById('menu-items-grid');
  var countBadge = document.getElementById('menu-items-count');
  if (!container) return;

  var filtered = MENU_ITEMS.filter(function(item) {
    var matchesCategory = state.activeCategory === 'all' || item.categoryId === state.activeCategory;
    var matchesSearch = !state.searchQuery || 
      item.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      (item.nameEn && item.nameEn.toLowerCase().includes(state.searchQuery.toLowerCase()));
    
    var matchesSpicy = !state.onlySpicy || 
      (item.spicyOptions && item.spicyOptions.some(function(opt) { return opt.includes('سبايسي') || opt.includes('حار'); }));

    return matchesCategory && matchesSearch && matchesSpicy;
  });

  if (countBadge) {
    countBadge.textContent = filtered.length + ' وجبة مقرمشة متوفرة الآن في شيكن باشا';
  }

  if (filtered.length === 0) {
    container.innerHTML = '<div class="col-span-full py-16 text-center bg-stone-900/90 rounded-3xl border border-stone-800 p-8"><div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg></div><h3 class="text-xl font-black text-stone-100 mb-2">للأسف، ملقيناش صنف بالاسم ده!</h3><p class="text-stone-400 text-sm max-w-md mx-auto mb-6">جرب تبحث باسم تاني زي "فيليه"، "ريزو"، "تندر"، "كومبو"، أو اضغط لعرض كل المنيو.</p><button onclick="window.resetMenuFilters()" class="btn-basha-primary px-8 py-3 rounded-2xl text-sm transition font-black">عرض كل أصناف المنيو</button></div>';
    return;
  }

  container.innerHTML = filtered.map(function(item) {
    var hasMultipleSizes = item.sizes && item.sizes.length > 1;
    var minPrice = item.price;
    var badgeHtml = item.badge 
      ? '<span class="px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-black text-xs rounded-xl shadow-md border border-amber-300/40">' + item.badge + '</span>' 
      : '<span></span>';
    var likesHtml = item.likesCount > 100 
      ? '<span class="px-2.5 py-1 bg-stone-950/85 backdrop-blur-md text-amber-300 text-xs font-bold rounded-xl border border-stone-800">' + item.likesCount + ' تقييم إيجابي</span>' 
      : '';
    var sizesHtml = hasMultipleSizes 
      ? '<div class="absolute bottom-3 right-3 bg-stone-950/85 backdrop-blur-md px-3 py-1 rounded-xl text-xs text-amber-300 font-black border border-stone-800">متوفر بأحجام مختلفة</div>' 
      : '';
    var descHtml = item.description 
      ? '<p class="text-xs text-stone-400 line-clamp-2 leading-relaxed mb-4">' + item.description + '</p>' 
      : '<div class="mb-4"></div>';

    return '<div class="food-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-stone-800/80 hover:border-amber-500/40">' +
      '<div class="relative h-48 sm:h-56 overflow-hidden bg-stone-950">' +
        '<img src="' + item.image + '" alt="' + item.name + '" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"/>' +
        '<div class="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/10 to-transparent pointer-events-none"></div>' +
        '<div class="absolute top-3 right-3 left-3 flex items-center justify-between pointer-events-none gap-2">' + badgeHtml + likesHtml + '</div>' +
        sizesHtml +
      '</div>' +
      '<div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">' +
        '<div>' +
          '<div class="flex items-start justify-between gap-2 mb-2">' +
            '<h3 class="text-lg font-black text-stone-100 group-hover:text-amber-400 transition-colors leading-snug">' + item.name + '</h3>' +
          '</div>' +
          descHtml +
        '</div>' +
        '<div class="pt-3 border-t border-stone-800 flex items-center justify-between gap-3">' +
          '<div>' +
            '<div class="flex items-baseline gap-1.5">' +
              '<span class="text-xs text-stone-500 font-bold">' + (hasMultipleSizes ? 'يبدأ من ' : '') + '</span>' +
              '<span class="text-2xl font-black text-amber-400 tracking-tight">' + minPrice + '</span>' +
              '<span class="text-xs text-stone-400 font-bold">ج.م</span>' +
            '</div>' +
          '</div>' +
          '<button onclick="window.openCustomizerModal(\'' + item.id + '\')" class="btn-basha-primary flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-xl sm:rounded-2xl text-xs cursor-pointer font-black active:scale-95 transition min-h-[40px] shadow-md hover:shadow-amber-500/20">' +
            '<span>تخصيص وإضافة</span>' +
            '<span class="text-sm font-black">+</span>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

// Customizer Modal Logic
function openCustomizerModal(itemId) {
  var item = MENU_ITEMS.find(function(m) { return m.id === itemId; });
  if (!item) return;

  var defaultSize = (item.sizes && item.sizes.length > 0) ? item.sizes[0] : null;
  var defaultPrice = defaultSize ? defaultSize.price : item.price;
  var defaultDrink = (item.drinkChoices && item.drinkChoices.length > 0) ? item.drinkChoices[0].id : null;

  state.activeItemForCustomization = {
    id: item.id,
    name: item.name,
    image: item.image,
    price: item.price,
    sizes: item.sizes,
    extras: item.extras,
    drinkChoices: item.drinkChoices,
    spicyOptions: item.spicyOptions,
    quantity: 1,
    selectedSize: defaultSize,
    selectedDrink: defaultDrink,
    selectedSpicy: item.spicyOptions && item.spicyOptions.length > 0 ? item.spicyOptions[0] : null,
    selectedExtras: [],
    notes: ''
  };

  var modal = document.getElementById('customizer-modal');
  if (!modal) return;

  renderCustomizerContent();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeCustomizerModal() {
  var modal = document.getElementById('customizer-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
  state.activeItemForCustomization = null;
}

function renderCustomizerContent() {
  var item = state.activeItemForCustomization;
  var modalContent = document.getElementById('customizer-content');
  if (!item || !modalContent) return;

  var basePrice = item.selectedSize ? item.selectedSize.price : item.price;
  var extrasTotal = (item.selectedExtras || []).reduce(function(sum, extId) {
    var ext = item.extras ? item.extras.find(function(e) { return e.id === extId; }) : null;
    return sum + (ext ? ext.price : 0);
  }, 0);

  var currentTotal = (basePrice + extrasTotal) * item.quantity;

  var sizesSection = '';
  if (item.sizes && item.sizes.length > 1) {
    sizesSection = '<div><label class="block text-sm font-black text-stone-200 mb-3">اختر الحجم المطلوب:</label><div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">' + item.sizes.map(function(s) {
      var isSelected = item.selectedSize && item.selectedSize.sizeUUID === s.sizeUUID;
      var cl = isSelected ? 'border-amber-400 bg-amber-500/15 text-stone-100 font-black shadow-sm' : 'border-stone-800 bg-stone-950/80 text-stone-300 hover:border-stone-700';
      return '<label class="flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ' + cl + '"><div class="flex items-center gap-3"><input type="radio" name="size-opt" value="' + s.sizeUUID + '" ' + (isSelected ? 'checked' : '') + ' onchange="window.updateCustomizerSize(\'' + s.sizeUUID + '\')" class="accent-amber-500 w-4 h-4" /><span class="text-xs sm:text-sm font-bold">' + s.sizeName + '</span></div><span class="text-xs text-amber-400 font-black">' + s.price + ' ج.م</span></label>';
    }).join('') + '</div></div>';
  }

  var spicySection = '';
  if (item.spicyOptions && item.spicyOptions.length > 0) {
    spicySection = '<div><label class="block text-sm font-black text-stone-200 mb-3">اختر درجة الحرارة والتسوية:</label><div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">' + item.spicyOptions.map(function(opt) {
      var isChecked = item.selectedSpicy === opt;
      var cl = isChecked ? 'border-amber-400 bg-amber-500/15 text-stone-100 font-black shadow-sm' : 'border-stone-800 bg-stone-950/80 text-stone-300 hover:border-stone-700';
      return '<label class="flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ' + cl + '"><div class="flex items-center gap-3"><input type="radio" name="spicy-opt" value="' + opt + '" ' + (isChecked ? 'checked' : '') + ' onchange="window.updateCustomizerSpicy(\'' + opt + '\')" class="accent-amber-500 w-4 h-4" /><span class="text-xs sm:text-sm font-bold">' + opt + '</span></div></label>';
    }).join('') + '</div></div>';
  }

  var drinkSection = '';
  if (item.drinkChoices && item.drinkChoices.length > 0) {
    drinkSection = '<div><label class="block text-sm font-black text-stone-200 mb-3">اختر المشروب المفضل:</label><div class="grid grid-cols-2 gap-2.5">' + item.drinkChoices.map(function(d) {
      var isSelected = item.selectedDrink === d.id;
      var cl = isSelected ? 'border-amber-400 bg-amber-500/15 text-stone-100 font-black shadow-sm' : 'border-stone-800 bg-stone-950/80 text-stone-300 hover:border-stone-700';
      return '<label class="flex items-center justify-between p-3 rounded-2xl border transition-all cursor-pointer ' + cl + '"><div class="flex items-center gap-2.5"><input type="radio" name="drink-opt" value="' + d.id + '" ' + (isSelected ? 'checked' : '') + ' onchange="window.updateCustomizerDrink(\'' + d.id + '\')" class="accent-amber-500 w-4 h-4" /><span class="text-xs font-bold">' + d.name + '</span></div></label>';
    }).join('') + '</div></div>';
  }

  var extrasSection = '';
  if (item.extras && item.extras.length > 0) {
    extrasSection = '<div><label class="block text-sm font-black text-stone-200 mb-3">إضافات وصوصات إضافية:</label><div class="space-y-2">' + item.extras.map(function(ext) {
      var isChecked = item.selectedExtras.indexOf(ext.id) > -1;
      var cl = isChecked ? 'border-amber-400 bg-amber-500/15 text-white font-bold shadow-sm' : 'border-stone-800 bg-stone-950/80 text-stone-300 hover:border-stone-700';
      return '<label class="flex items-center justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ' + cl + '"><div class="flex items-center gap-3"><input type="checkbox" value="' + ext.id + '" ' + (isChecked ? 'checked' : '') + ' onchange="window.toggleCustomizerExtra(\'' + ext.id + '\')" class="accent-amber-500 w-4 h-4 rounded" /><span class="text-xs sm:text-sm">' + ext.name + '</span></div><span class="text-xs text-amber-400 font-black">+' + ext.price + ' ج.م</span></label>';
    }).join('') + '</div></div>';
  }

  modalContent.innerHTML = '<div class="w-10 h-1 bg-stone-700 rounded-full mx-auto my-2 sm:hidden flex-shrink-0"></div><div class="relative h-44 sm:h-56 bg-stone-950 overflow-hidden flex-shrink-0"><img src="' + item.image + '" alt="' + item.name + '" class="w-full h-full object-cover" /><div class="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent"></div><button onclick="window.closeCustomizerModal()" class="absolute top-4 left-4 w-9 h-9 rounded-full bg-stone-950/70 hover:bg-stone-950 text-white flex items-center justify-center font-bold text-lg transition border border-stone-700">&times;</button><div class="absolute bottom-3 right-5 left-5"><h3 class="text-xl font-black text-stone-100">' + item.name + '</h3><p class="text-xs text-amber-400 font-extrabold mt-0.5">' + basePrice + ' ج.م</p></div></div><div class="p-4 sm:p-6 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto overscroll-contain space-y-4 sm:space-y-6 flex-1">' + sizesSection + spicySection + drinkSection + extrasSection + '<div><label class="block text-xs font-black text-stone-200 mb-2">طلبات وملاحظات خاصة للشيف (اختياري):</label><textarea placeholder="مثال: تسوية سوبر كرانشي، بدون مايونيز، صوص شيدر إضافي..." rows="2" oninput="window.updateCustomizerNotes(this.value)" class="w-full bg-stone-950 border border-stone-800 rounded-2xl p-3 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400">' + (item.notes || '') + '</textarea></div></div><div class="p-3.5 sm:p-5 bg-stone-950 border-t border-stone-800 flex items-center justify-between gap-3 bottom-nav-safe sm:pb-5 flex-shrink-0"><div class="flex items-center bg-stone-900 border border-stone-800 rounded-2xl p-1"><button onclick="window.changeCustomizerQty(-1)" class="w-9 h-9 flex items-center justify-center rounded-xl bg-stone-800 text-white hover:bg-amber-500 hover:text-stone-950 font-black text-lg transition">-</button><span class="w-10 text-center font-black text-white text-base">' + item.quantity + '</span><button onclick="window.changeCustomizerQty(1)" class="w-9 h-9 flex items-center justify-center rounded-xl bg-stone-800 text-white hover:bg-amber-500 hover:text-stone-950 font-black text-lg transition">+</button></div><button onclick="window.confirmCustomizerAddToCart()" class="btn-basha-primary flex-1 py-3.5 px-6 rounded-2xl text-xs sm:text-sm flex items-center justify-between transition-all cursor-pointer font-black shadow-lg"><span>أضف للطلب الآن</span><span class="bg-stone-950/30 px-3 py-1 rounded-xl text-xs font-black">' + currentTotal + ' ج.م</span></button></div>';
}

function updateCustomizerSize(sizeUUID) {
  if (state.activeItemForCustomization) {
    var s = state.activeItemForCustomization.sizes ? state.activeItemForCustomization.sizes.find(function(sz) { return sz.sizeUUID === sizeUUID; }) : null;
    if (s) {
      state.activeItemForCustomization.selectedSize = s;
      renderCustomizerContent();
    }
  }
}

function updateCustomizerDrink(drinkId) {
  if (state.activeItemForCustomization) {
    state.activeItemForCustomization.selectedDrink = drinkId;
    renderCustomizerContent();
  }
}

function updateCustomizerSpicy(opt) {
  if (state.activeItemForCustomization) {
    state.activeItemForCustomization.selectedSpicy = opt;
    renderCustomizerContent();
  }
}

function toggleCustomizerExtra(extraId) {
  if (state.activeItemForCustomization) {
    var list = state.activeItemForCustomization.selectedExtras;
    var idx = list.indexOf(extraId);
    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(extraId);
    }
    renderCustomizerContent();
  }
}

function updateCustomizerNotes(notes) {
  if (state.activeItemForCustomization) {
    state.activeItemForCustomization.notes = notes;
  }
}

function changeCustomizerQty(delta) {
  if (state.activeItemForCustomization) {
    var newQty = state.activeItemForCustomization.quantity + delta;
    if (newQty >= 1 && newQty <= 50) {
      state.activeItemForCustomization.quantity = newQty;
      renderCustomizerContent();
    }
  }
}

function confirmCustomizerAddToCart() {
  var item = state.activeItemForCustomization;
  if (!item) return;

  var basePrice = item.selectedSize ? item.selectedSize.price : item.price;
  var sizeName = item.selectedSize ? item.selectedSize.sizeName : '';
  
  var selectedExtrasObj = (item.selectedExtras || []).map(function(id) {
    return item.extras.find(function(e) { return e.id === id; });
  }).filter(Boolean);

  var selectedDrinkObj = item.drinkChoices ? item.drinkChoices.find(function(d) { return d.id === item.selectedDrink; }) : null;

  var extrasSum = selectedExtrasObj.reduce(function(s, e) { return s + e.price; }, 0);
  var unitPrice = basePrice + extrasSum;

  var extraIdsSorted = [].concat(item.selectedExtras || []).sort().join(',');
  var cartKey = item.id + '_' + sizeName + '_' + (item.selectedSpicy || '') + '_' + (item.selectedDrink || '') + '_' + extraIdsSorted + '_' + (item.notes || '').trim();

  var existingIdx = state.cart.findIndex(function(c) { return c.cartKey === cartKey; });
  if (existingIdx > -1) {
    state.cart[existingIdx].quantity += item.quantity;
  } else {
    state.cart.push({
      cartKey: cartKey,
      id: item.id,
      name: item.name,
      image: item.image,
      sizeName: sizeName,
      spicyOption: item.selectedSpicy,
      drinkChoice: selectedDrinkObj ? selectedDrinkObj.name : null,
      extras: selectedExtrasObj,
      notes: (item.notes || '').trim(),
      unitPrice: unitPrice,
      quantity: item.quantity
    });
  }

  persistCart();
  updateCartUI();
  closeCustomizerModal();
  showToast('تمت إضافة ' + item.name + ' إلى سلة الباشا', 'success');
}

// Cart Operations
function updateCartItemQty(cartKey, delta) {
  var idx = state.cart.findIndex(function(c) { return c.cartKey === cartKey; });
  if (idx > -1) {
    var newQty = state.cart[idx].quantity + delta;
    if (newQty <= 0) {
      removeCartItem(cartKey);
    } else {
      state.cart[idx].quantity = newQty;
      persistCart();
      updateCartUI();
    }
  }
}

function removeCartItem(cartKey) {
  state.cart = state.cart.filter(function(c) { return c.cartKey !== cartKey; });
  persistCart();
  updateCartUI();
  showToast('تم حذف الصنف من السلة', 'info');
}

function clearCart() {
  state.cart = [];
  state.appliedPromo = null;
  persistCart();
  updateCartUI();
}

function openCartDrawer() {
  var drawer = document.getElementById('cart-drawer');
  var backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('-translate-x-full');
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  var drawer = document.getElementById('cart-drawer');
  var backdrop = document.getElementById('cart-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function calculateCartTotals() {
  var subtotal = state.cart.reduce(function(sum, item) { return sum + (item.unitPrice * item.quantity); }, 0);
  
  var discount = 0;
  if (state.appliedPromo && subtotal >= state.appliedPromo.minOrder) {
    discount = Math.round((subtotal * state.appliedPromo.discountPercent) / 100);
  }

  var deliveryFee = (state.orderType === 'pickup' || subtotal >= RESTAURANT_INFO.freeDeliveryThreshold || subtotal === 0) 
    ? 0 
    : RESTAURANT_INFO.deliveryFee;

  var total = Math.max(0, subtotal - discount + deliveryFee);
  var totalItemsCount = state.cart.reduce(function(sum, item) { return sum + item.quantity; }, 0);

  return { subtotal: subtotal, discount: discount, deliveryFee: deliveryFee, total: total, totalItemsCount: totalItemsCount };
}

function updateCartUI() {
  var totals = calculateCartTotals();
  var subtotal = totals.subtotal;
  var discount = totals.discount;
  var deliveryFee = totals.deliveryFee;
  var total = totals.total;
  var totalItemsCount = totals.totalItemsCount;

  var navCount = document.getElementById('cart-badge-count');
  if (navCount) navCount.textContent = totalItemsCount;

  var floatingBadge = document.getElementById('floating-cart-badge');
  if (floatingBadge) floatingBadge.textContent = totalItemsCount;

  var mobileNavBadge = document.getElementById('mobile-nav-cart-badge');
  if (mobileNavBadge) mobileNavBadge.textContent = totalItemsCount;

  var navTotal = document.getElementById('nav-cart-total');
  if (navTotal) navTotal.textContent = total + ' ج.م';

  var floatingTotal = document.getElementById('floating-cart-total');
  if (floatingTotal) floatingTotal.textContent = total + ' ج.م';

  var activeBranchEl = document.getElementById('active-branch-name');
  if (activeBranchEl) {
    var b = BRANCHES.find(function(br) { return br.id === state.selectedBranch; }) || BRANCHES[0];
    activeBranchEl.textContent = b ? b.name : '';
  }

  var drawerSubtotal = document.getElementById('drawer-subtotal');
  if (drawerSubtotal) drawerSubtotal.textContent = subtotal + ' ج.م';

  var drawerDiscountRow = document.getElementById('drawer-discount-row');
  var drawerDiscount = document.getElementById('drawer-discount');
  if (drawerDiscountRow && drawerDiscount) {
    if (discount > 0) {
      drawerDiscountRow.classList.remove('hidden');
      drawerDiscount.textContent = '-' + discount + ' ج.م (' + state.appliedPromo.code + ')';
    } else {
      drawerDiscountRow.classList.add('hidden');
    }
  }

  var drawerDelivery = document.getElementById('drawer-delivery');
  if (drawerDelivery) {
    if (state.orderType === 'pickup') {
      drawerDelivery.textContent = 'استلام من الفرع (مجاني)';
    } else if (subtotal >= RESTAURANT_INFO.freeDeliveryThreshold) {
      drawerDelivery.textContent = 'توصيل مجاني';
    } else {
      drawerDelivery.textContent = deliveryFee + ' ج.م';
    }
  }

  var drawerTotal = document.getElementById('drawer-total');
  if (drawerTotal) drawerTotal.textContent = total + ' ج.م';

  var emptyNotice = document.getElementById('cart-drawer-empty');
  var itemsContainer = document.getElementById('cart-drawer-items');
  var footerContainer = document.getElementById('cart-drawer-footer');

  if (state.cart.length === 0) {
    if (emptyNotice) emptyNotice.classList.remove('hidden');
    if (itemsContainer) itemsContainer.innerHTML = '';
    if (footerContainer) footerContainer.classList.add('opacity-40', 'pointer-events-none');
  } else {
    if (emptyNotice) emptyNotice.classList.add('hidden');
    if (footerContainer) footerContainer.classList.remove('opacity-40', 'pointer-events-none');

    if (itemsContainer) {
      itemsContainer.innerHTML = state.cart.map(function(item) {
        return '<div class="bg-stone-900/90 rounded-2xl p-3 border border-stone-800 flex gap-3 items-center justify-between">' +
          '<img src="' + item.image + '" alt="' + item.name + '" class="w-16 h-16 rounded-xl object-cover border border-stone-800 flex-shrink-0" />' +
          '<div class="flex-1 min-w-0">' +
            '<h4 class="text-xs sm:text-sm font-black text-stone-100 truncate">' + item.name + '</h4>' +
            '<div class="flex flex-wrap gap-1 mt-1 text-[10px] text-stone-300">' +
              (item.sizeName ? '<span class="bg-stone-950 px-1.5 py-0.5 rounded border border-stone-800">' + item.sizeName + '</span>' : '') +
              (item.spicyOption ? '<span class="bg-stone-950 px-1.5 py-0.5 rounded border border-stone-800">' + item.spicyOption + '</span>' : '') +
              (item.drinkChoice ? '<span class="bg-stone-950 px-1.5 py-0.5 rounded border border-stone-800">' + item.drinkChoice + '</span>' : '') +
            '</div>' +
            (item.extras && item.extras.length > 0 ? '<p class="text-[10px] text-stone-400 mt-1 truncate">إضافات: ' + item.extras.map(function(e) { return e.name; }).join('، ') + '</p>' : '') +
            '<div class="text-xs font-black text-amber-400 mt-1">' + (item.unitPrice * item.quantity) + ' ج.م</div>' +
          '</div>' +
          '<div class="flex flex-col items-center gap-1">' +
            '<div class="flex items-center bg-stone-950 border border-stone-800 rounded-xl p-0.5">' +
              '<button onclick="window.updateCartItemQty(\'' + item.cartKey + '\', -1)" class="w-6 h-6 flex items-center justify-center text-stone-300 hover:text-amber-400 font-bold">-</button>' +
              '<span class="w-6 text-center text-xs font-bold text-stone-100">' + item.quantity + '</span>' +
              '<button onclick="window.updateCartItemQty(\'' + item.cartKey + '\', 1)" class="w-6 h-6 flex items-center justify-center text-stone-300 hover:text-amber-400 font-bold">+</button>' +
            '</div>' +
            '<button onclick="window.removeCartItem(\'' + item.cartKey + '\')" class="text-[10px] text-stone-500 hover:text-red-400 font-bold transition mt-1">حذف</button>' +
          '</div>' +
        '</div>';
      }).join('');
    }
  }
}

function applyPromoCode(codeStr) {
  if (!codeStr || !codeStr.trim()) {
    showToast('يرجى كتابة كود الخصم أولاً', 'error');
    return;
  }
  var clean = codeStr.trim().toUpperCase();
  var found = PROMO_CODES.find(function(p) { return p.code === clean; });

  if (!found) {
    showToast('كود الخصم غير صحيح أو منتهي الصلاحية', 'error');
    return;
  }

  var totals = calculateCartTotals();
  if (totals.subtotal < found.minOrder) {
    showToast('هذا الكود يتطلب حداً أدنى بقيمة ' + found.minOrder + ' ج.م', 'error');
    return;
  }

  state.appliedPromo = found;
  updateCartUI();
  showToast('تم تفعيل كود الخصم بنجاح! خصم ' + found.discountPercent + '%', 'success');
}

function setOrderType(type) {
  state.orderType = type;
  persistCart();

  var isDelivery = type === 'delivery';
  var label = isDelivery ? 'دليفري' : 'استلام';

  var mobileHIcon = document.getElementById('mobile-header-order-icon');
  var mobileHText = document.getElementById('mobile-header-order-text');
  if (mobileHIcon) {
    mobileHIcon.innerHTML = isDelivery
      ? '<svg class="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
      : '<svg class="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>';
  }
  if (mobileHText) mobileHText.textContent = label;

  var mobileNIcon = document.getElementById('mobile-nav-order-mode-icon');
  var mobileNText = document.getElementById('mobile-nav-order-mode-text');
  if (mobileNIcon) {
    mobileNIcon.innerHTML = isDelivery
      ? '<svg class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
      : '<svg class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>';
  }
  if (mobileNText) mobileNText.textContent = label;

  var deliveryBtns = document.querySelectorAll('[data-order-type-btn="delivery"]');
  var pickupBtns = document.querySelectorAll('[data-order-type-btn="pickup"]');

  var activeClasses = ['bg-gradient-to-r', 'from-amber-500', 'via-orange-500', 'to-amber-500', 'text-black', 'shadow-lg', 'font-black'];
  var inactiveClasses = ['text-amber-200/70', 'hover:text-white', 'font-bold'];

  if (type === 'delivery') {
    deliveryBtns.forEach(function(btn) {
      activeClasses.forEach(function(c) { btn.classList.add(c); });
      inactiveClasses.forEach(function(c) { btn.classList.remove(c); });
    });
    pickupBtns.forEach(function(btn) {
      activeClasses.forEach(function(c) { btn.classList.remove(c); });
      inactiveClasses.forEach(function(c) { btn.classList.add(c); });
    });

    var delBanner = document.getElementById('delivery-info-banner');
    if (delBanner) delBanner.classList.remove('hidden');
    var picBanner = document.getElementById('pickup-info-banner');
    if (picBanner) picBanner.classList.add('hidden');
  } else {
    pickupBtns.forEach(function(btn) {
      activeClasses.forEach(function(c) { btn.classList.add(c); });
      inactiveClasses.forEach(function(c) { btn.classList.remove(c); });
    });
    deliveryBtns.forEach(function(btn) {
      activeClasses.forEach(function(c) { btn.classList.remove(c); });
      inactiveClasses.forEach(function(c) { btn.classList.add(c); });
    });

    var picBanner2 = document.getElementById('pickup-info-banner');
    if (picBanner2) picBanner2.classList.remove('hidden');
    var delBanner2 = document.getElementById('delivery-info-banner');
    if (delBanner2) delBanner2.classList.add('hidden');
  }

  updateCartUI();
}

function setPickupBranch(branchId) {
  state.selectedBranch = branchId;
  persistCart();
  updateCartUI();
  var b = BRANCHES.find(function(br) { return br.id === branchId; });
  if (b) {
    showToast('تم تحديد فرع الاستلام: ' + b.name, 'info');
  }
}

// Checkout Modal
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('سلة طلباتك فارغة! اختر وجباتك أولاً', 'error');
    return;
  }

  var modal = document.getElementById('checkout-modal');
  if (modal) {
    renderCheckoutForm();
    closeCartDrawer();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckoutModal() {
  var modal = document.getElementById('checkout-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function renderCheckoutForm() {
  var container = document.getElementById('checkout-form-container');
  if (!container) return;

  var totals = calculateCartTotals();
  var subtotal = totals.subtotal;
  var discount = totals.discount;
  var deliveryFee = totals.deliveryFee;
  var total = totals.total;
  var totalItemsCount = totals.totalItemsCount;

  var currentBranch = BRANCHES.find(function(b) { return b.id === state.selectedBranch; }) || BRANCHES[0];

  container.innerHTML = '<form id="checkout-form" onsubmit="event.preventDefault(); window.submitOrder();" class="space-y-5 text-right">' +
    '<div class="flex bg-stone-950 p-1.5 rounded-2xl border border-stone-800 text-xs font-bold">' +
      '<button type="button" onclick="window.setOrderType(\'delivery\'); window.renderCheckoutForm();" class="flex-1 py-2.5 rounded-xl transition ' + (state.orderType === 'delivery' ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-black shadow-md' : 'text-stone-400 hover:text-stone-200') + '">توصيل دليفري</button>' +
      '<button type="button" onclick="window.setOrderType(\'pickup\'); window.renderCheckoutForm();" class="flex-1 py-2.5 rounded-xl transition ' + (state.orderType === 'pickup' ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-black shadow-md' : 'text-stone-400 hover:text-stone-200') + '">استلام من الفرع</button>' +
    '</div>' +
    '<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">' +
      '<div>' +
        '<label class="block text-xs font-black text-stone-200 mb-1">الاسم بالكامل *</label>' +
        '<input type="text" id="order-customer-name" required placeholder="مثال: أحمد محمد" class="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />' +
      '</div>' +
      '<div>' +
        '<label class="block text-xs font-black text-stone-200 mb-1">رقم الموبايل *</label>' +
        '<input type="tel" id="order-customer-phone" required placeholder="010XXXXXXXX أو 011XXXXXXXX" class="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />' +
      '</div>' +
    '</div>' + 
    (state.orderType === 'delivery' 
      ? '<div class="space-y-3">' +
          '<div>' +
            '<label class="block text-xs font-black text-stone-200 mb-1">المنطقة والمدينة *</label>' +
            '<input type="text" id="order-delivery-area" required placeholder="مثال: مدينة نصر، التجمع، المعادي، المهندسين..." class="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />' +
          '</div>' +
          '<div>' +
            '<label class="block text-xs font-black text-stone-200 mb-1">العنوان التفصيلي *</label>' +
            '<input type="text" id="order-delivery-address" required placeholder="اسم الشارع، رقم العقار، الدور، الشقة أو علامة مميزة" class="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />' +
          '</div>' +
        '</div>'
      : '<div class="space-y-3 p-4 bg-stone-950 rounded-2xl border border-stone-800">' +
          '<div>' +
            '<label class="block text-xs font-black text-stone-200 mb-1">فرع الاستلام المحدد:</label>' +
            '<select id="order-pickup-branch" onchange="window.setPickupBranch(this.value); window.renderCheckoutForm();" class="w-full bg-stone-900 border border-stone-700 rounded-xl p-3 text-xs text-stone-100 focus:outline-none focus:border-amber-400">' +
              BRANCHES.map(function(b) { return '<option value="' + b.id + '" ' + (b.id === state.selectedBranch ? 'selected' : '') + '>' + b.name + ' - ' + b.address + '</option>'; }).join('') +
            '</select>' +
          '</div>' +
          '<div>' +
            '<label class="block text-xs font-black text-stone-200 mb-1">وقت الاستلام المتوقع:</label>' +
            '<select id="order-pickup-time" class="w-full bg-stone-900 border border-stone-700 rounded-xl p-3 text-xs text-stone-100 focus:outline-none focus:border-amber-400">' +
              '<option value="15-mins">خلال 15 دقيقة (استلام سريع)</option>' +
              '<option value="30-mins">خلال 30 دقيقة</option>' +
              '<option value="45-mins">خلال 45 دقيقة</option>' +
              '<option value="60-mins">خلال ساعة</option>' +
            '</select>' +
          '</div>' +
        '</div>') +
    '<div>' +
      '<label class="block text-xs font-black text-stone-200 mb-2">طريقة الدفع:</label>' +
      '<div class="grid grid-cols-2 gap-2.5">' +
        '<label class="flex items-center gap-2 p-3 rounded-xl border border-stone-800 bg-stone-950 text-xs font-bold text-stone-200 cursor-pointer hover:border-amber-400">' +
          '<input type="radio" name="payment-method" value="cash" checked class="accent-amber-500" />' +
          '<span>كاش عند الاستلام</span>' +
        '</label>' +
        '<label class="flex items-center gap-2 p-3 rounded-xl border border-stone-800 bg-stone-950 text-xs font-bold text-stone-200 cursor-pointer hover:border-amber-400">' +
          '<input type="radio" name="payment-method" value="instapay" class="accent-amber-500" />' +
          '<span>إنستاباي / فودافون كاش</span>' +
        '</label>' +
      '</div>' +
    '</div>' +
    '<div class="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2 text-xs text-stone-300">' +
      '<div class="flex justify-between font-bold text-stone-100"><span>عدد الأصناف:</span><span>' + totalItemsCount + ' وجبة</span></div>' +
      '<div class="flex justify-between"><span>المجموع الفرعي:</span><span>' + subtotal + ' ج.م</span></div>' +
      (discount > 0 ? '<div class="flex justify-between text-emerald-400 font-bold"><span>الخصم المطبق:</span><span>-' + discount + ' ج.م</span></div>' : '') +
      '<div class="flex justify-between"><span>رسوم التوصيل:</span><span>' + (deliveryFee === 0 ? 'مجاني' : deliveryFee + ' ج.م') + '</span></div>' +
      '<div class="flex justify-between text-base font-black text-amber-400 pt-2 border-t border-stone-800"><span>المبلغ الإجمالي للدفع:</span><span class="text-xl">' + total + ' ج.م</span></div>' +
    '</div>' +
    '<div class="flex flex-col sm:flex-row gap-3 pt-2">' +
      '<button type="submit" class="btn-basha-primary flex-1 py-4 rounded-2xl text-sm font-black text-center shadow-lg transition cursor-pointer">تأكيد وإرسال الطلب فوراً</button>' +
      '<button type="button" onclick="window.submitOrder(\'whatsapp\')" class="py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-sm text-center transition flex items-center justify-center gap-2 cursor-pointer shadow-lg">إرسال الطلب عبر واتساب</button>' +
    '</div>' +
  '</form>';
}

function submitOrder(destination) {
  destination = destination || 'app';
  var nameInput = document.getElementById('order-customer-name');
  var phoneInput = document.getElementById('order-customer-phone');

  if (!nameInput || !nameInput.value.trim()) {
    showToast('يرجى كتابة الاسم بالكامل', 'error');
    return;
  }
  if (!phoneInput || !phoneInput.value.trim()) {
    showToast('يرجى كتابة رقم الموبايل للتواصل', 'error');
    return;
  }

  var totals = calculateCartTotals();
  var currentBranch = BRANCHES.find(function(b) { return b.id === state.selectedBranch; }) || BRANCHES[0];
  var orderId = 'BSH-' + Math.floor(100000 + Math.random() * 900000);
  var paymentRadio = document.querySelector('input[name="payment-method"]:checked');
  var paymentMethod = paymentRadio ? paymentRadio.value : 'cash';

  var orderData = {
    id: orderId,
    createdAt: new Date().toISOString(),
    customerName: nameInput.value.trim(),
    customerPhone: phoneInput.value.trim(),
    orderType: state.orderType,
    branch: currentBranch,
    pickupTime: document.getElementById('order-pickup-time') ? document.getElementById('order-pickup-time').value : '15-mins',
    deliveryArea: document.getElementById('order-delivery-area') ? document.getElementById('order-delivery-area').value : '',
    deliveryAddress: document.getElementById('order-delivery-address') ? document.getElementById('order-delivery-address').value : '',
    paymentMethod: paymentMethod,
    items: [].concat(state.cart),
    subtotal: totals.subtotal,
    discount: totals.discount,
    deliveryFee: totals.deliveryFee,
    total: totals.total,
    status: 'received',
    statusStep: 1
  };

  state.orderHistory.unshift(orderData);
  state.currentTrackedOrder = orderData;

  try {
    localStorage.setItem('chicken_basha_orders', JSON.stringify(state.orderHistory));
    localStorage.setItem('chicken_basha_active_order', JSON.stringify(orderData));
  } catch (e) {}

  if (destination === 'whatsapp') {
    sendOrderToWhatsApp(orderData);
  }

  clearCart();
  closeCheckoutModal();

  if (window.confetti) {
    try { window.confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } }); } catch(e) {}
  }
  showToast('تم تأكيد طلبك بنجاح! كود الطلب: ' + orderId, 'success');

  setTimeout(function() {
    openOrderTracker(orderData);
  }, 500);
}

function sendOrderToWhatsApp(order) {
  var waNumber = '201023456789';

  var msg = 'طلب جديد من مطعم شيكن باشا\n';
  msg += 'كود الطلب: ' + order.id + '\n';
  msg += 'العميل: ' + order.customerName + '\n';
  msg += 'الموبايل: ' + order.customerPhone + '\n';
  msg += 'طريقة الاستلام: ' + (order.orderType === 'delivery' ? 'توصيل دليفري' : 'استلام من الفرع') + '\n';
  
  if (order.orderType === 'delivery') {
    msg += 'المنطقة: ' + order.deliveryArea + '\n';
    msg += 'العنوان: ' + order.deliveryAddress + '\n';
  } else {
    msg += 'الفرع: ' + order.branch.name + '\n';
    msg += 'وقت الاستلام المتوقع: ' + order.pickupTime + '\n';
  }

  msg += '\nالأصناف المطلوبة:\n';
  order.items.forEach(function(item, idx) {
    msg += (idx + 1) + '. ' + item.name + ' (' + item.quantity + 'x) - ' + (item.unitPrice * item.quantity) + ' ج.م\n';
    if (item.sizeName) msg += '   الحجم: ' + item.sizeName + '\n';
    if (item.spicyOption) msg += '   التسوية: ' + item.spicyOption + '\n';
    if (item.drinkChoice) msg += '   المشروب: ' + item.drinkChoice + '\n';
    if (item.extras && item.extras.length > 0) {
      msg += '   إضافات: ' + item.extras.map(function(e) { return e.name; }).join('، ') + '\n';
    }
    if (item.notes) msg += '   ملاحظة: ' + item.notes + '\n';
  });

  msg += '\nالمجموع الفرعي: ' + order.subtotal + ' ج.م\n';
  if (order.discount > 0) msg += 'الخصم: -' + order.discount + ' ج.م\n';
  if (order.deliveryFee > 0) msg += 'رسوم التوصيل: ' + order.deliveryFee + ' ج.م\n';
  msg += 'المبلغ الإجمالي للدفع: ' + order.total + ' ج.م\n';
  msg += 'طريقة الدفع: ' + (order.paymentMethod === 'cash' ? 'كاش عند الاستلام' : 'إنستاباي / فودافون كاش') + '\n';

  var waUrl = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(msg);
  window.open(waUrl, '_blank');
}

// Order Tracker
function openOrderTracker(order) {
  var tracked = order || state.currentTrackedOrder || (state.orderHistory.length > 0 ? state.orderHistory[0] : null);
  
  if (!tracked) {
    showToast('لا يوجد طلبات نشطة حالياً لتتبعها', 'info');
    return;
  }

  state.currentTrackedOrder = tracked;
  var modal = document.getElementById('tracker-modal');
  if (modal) {
    renderTrackerModal(tracked);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    simulateOrderProgress(tracked);
  }
}

function closeOrderTracker() {
  var modal = document.getElementById('tracker-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function renderTrackerModal(order) {
  var content = document.getElementById('tracker-content');
  if (!content) return;

  var isDelivery = order.orderType === 'delivery';
  var steps = [
    { num: 1, title: 'تم استلام الطلب', desc: 'تم استلام وتأكيد تفاصيل طلبك بالمطبخ' },
    { num: 2, title: 'جاري القلي وتتبيلة الباشا', desc: 'قطع الدجاج في القلاية وتتحضر طازجة وسخنة' },
    { num: 3, title: isDelivery ? 'الطلب في الطريق إليك' : 'جاهز للاستلام الفوري بالفرع', desc: isDelivery ? 'المندوب في الطريق إلى عنوانك' : 'طلبك جاهز عند الكاشير بالفرع' },
    { num: 4, title: 'تم التسليم بنجاح', desc: 'بالهناء والشفاء مع أقوى قرمشة من شيكن باشا' }
  ];

  var currentStep = order.statusStep || 1;

  content.innerHTML = '<div class="p-5 bg-stone-900 border-b border-stone-800 flex items-center justify-between">' +
    '<div><span class="text-xs font-black text-amber-400">تتبع الطلب المباشر</span><h3 class="text-base font-black text-stone-100">كود الطلب: ' + order.id + '</h3></div>' +
    '<button onclick="window.closeOrderTracker()" class="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 flex items-center justify-center font-bold transition">&times;</button>' +
  '</div>' +
  '<div class="p-6 space-y-6 max-h-[75vh] overflow-y-auto">' +
    '<div class="space-y-4">' + steps.map(function(s) {
      var isDone = s.num <= currentStep;
      var isCurrent = s.num === currentStep;
      return '<div class="flex items-start gap-4">' +
        '<div class="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0 transition-all ' + (isDone ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 shadow-md shadow-amber-500/20' : 'bg-stone-800 text-stone-500 border border-stone-700') + '">' + (isDone ? ICONS.check : s.num) + '</div>' +
        '<div class="flex-1">' +
          '<h4 class="text-xs sm:text-sm font-black ' + (isCurrent ? 'text-amber-400' : isDone ? 'text-stone-100' : 'text-stone-500') + '">' + s.title + '</h4>' +
          '<p class="text-[11px] text-stone-400 mt-0.5">' + s.desc + '</p>' +
        '</div>' +
      '</div>';
    }).join('') + '</div>' +
    '<div class="p-4 bg-stone-950 rounded-2xl border border-stone-800 space-y-2 text-xs">' +
      '<div class="flex justify-between text-stone-300"><span>العميل:</span><span class="font-bold text-stone-100">' + order.customerName + ' (' + order.customerPhone + ')</span></div>' +
      '<div class="flex justify-between text-stone-300"><span>طريقة الاستلام:</span><span class="font-bold text-amber-400">' + (isDelivery ? 'توصيل إلى: ' + order.deliveryArea : 'استلام من: ' + order.branch.name) + '</span></div>' +
      '<div class="flex justify-between text-stone-300"><span>طريقة الدفع:</span><span class="font-bold text-stone-100">' + (order.paymentMethod === 'cash' ? 'كاش عند الاستلام' : 'إنستاباي / محفظة') + '</span></div>' +
      '<div class="flex justify-between text-stone-300 pt-2 border-t border-stone-800 font-black text-sm text-amber-400"><span>إجمالي المبلغ:</span><span>' + order.total + ' ج.م</span></div>' +
    '</div>' +
    '<div class="space-y-2">' +
      '<h4 class="text-xs font-black text-stone-200">الأصناف المطلوبة:</h4>' +
      '<div class="space-y-1.5 text-xs text-stone-300">' + order.items.map(function(it) {
        return '<div class="flex justify-between p-2.5 rounded-xl bg-stone-950 border border-stone-800/80"><span>' + it.name + (it.sizeName ? ' (' + it.sizeName + ')' : '') + ' &times; ' + it.quantity + '</span><span class="font-bold text-amber-400">' + (it.unitPrice * it.quantity) + ' ج.م</span></div>';
      }).join('') + '</div>' +
    '</div>' +
  '</div>' +
  '<div class="p-4 bg-stone-950 border-t border-stone-800 flex gap-3">' +
    '<button onclick="window.printReceipt()" class="flex-1 py-3 bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs font-bold rounded-xl border border-stone-700 transition">طباعة الفاتورة</button>' +
    '<button onclick="window.closeOrderTracker()" class="btn-basha-primary flex-1 py-3 rounded-xl text-xs font-black text-center shadow-md">إغلاق النافذة</button>' +
  '</div>';
}

function simulateOrderProgress(order) {
  if (order.statusStep < 4) {
    setTimeout(function() {
      if (state.currentTrackedOrder && state.currentTrackedOrder.id === order.id && order.statusStep < 4) {
        order.statusStep += 1;
        try { localStorage.setItem('chicken_basha_active_order', JSON.stringify(order)); } catch (e) {}
        renderTrackerModal(order);
      }
    }, 15000);
  }
}

function printReceipt() {
  window.print();
}

function selectBranchForPickup(branchId) {
  setOrderType('pickup');
  setPickupBranch(branchId);
  var heroSelect = document.getElementById('hero-pickup-branch-select');
  if (heroSelect) heroSelect.value = branchId;
  var menuSec = document.getElementById('menu-section');
  if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
}

function selectCategory(catId) {
  state.activeCategory = catId;
  renderCategories();
  renderMenuItems();
}

function handleSearchInput(query) {
  state.searchQuery = query;
  renderMenuItems();
}

function toggleSpicyOnly(val) {
  state.onlySpicy = val;
  renderMenuItems();
}

function resetMenuFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  state.onlySpicy = false;

  var searchInput = document.getElementById('menu-search-input');
  if (searchInput) searchInput.value = '';

  var spicyToggle = document.getElementById('spicy-only-toggle');
  if (spicyToggle) spicyToggle.checked = false;

  renderCategories();
  renderMenuItems();
}

// Bind all to window
window.selectCategory = selectCategory;
window.handleSearchInput = handleSearchInput;
window.toggleSpicyOnly = toggleSpicyOnly;
window.resetMenuFilters = resetMenuFilters;
window.setOrderType = setOrderType;
window.setPickupBranch = setPickupBranch;
window.selectBranchForPickup = selectBranchForPickup;
window.openCustomizerModal = openCustomizerModal;
window.closeCustomizerModal = closeCustomizerModal;
window.updateCustomizerSize = updateCustomizerSize;
window.updateCustomizerDrink = updateCustomizerDrink;
window.updateCustomizerSpicy = updateCustomizerSpicy;
window.toggleCustomizerExtra = toggleCustomizerExtra;
window.updateCustomizerNotes = updateCustomizerNotes;
window.changeCustomizerQty = changeCustomizerQty;
window.confirmCustomizerAddToCart = confirmCustomizerAddToCart;
window.updateCartItemQty = updateCartItemQty;
window.removeCartItem = removeCartItem;
window.clearCart = clearCart;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.applyPromoCode = applyPromoCode;
window.openCheckoutModal = openCheckoutModal;
window.closeCheckoutModal = closeCheckoutModal;
window.renderCheckoutForm = renderCheckoutForm;
window.submitOrder = submitOrder;
window.openOrderTracker = openOrderTracker;
window.closeOrderTracker = closeOrderTracker;
window.printReceipt = printReceipt;
window.showToast = showToast;

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  loadPersistedState();
  renderCategories();
  renderMenuItems();
  updateCartUI();

  var heroSelect = document.getElementById('hero-pickup-branch-select');
  if (heroSelect && state.selectedBranch) {
    heroSelect.value = state.selectedBranch;
  }
});

function toggleMobileOrderType() {
  var nextType = state.orderType === 'delivery' ? 'pickup' : 'delivery';
  setOrderType(nextType);
  var msg = nextType === 'delivery' 
    ? 'تم التبديل إلى: توصيل دليفري' 
    : 'تم التبديل إلى: استلام مسبق من الفرع';
  showToast(msg, 'info');
}
window.toggleMobileOrderType = toggleMobileOrderType;

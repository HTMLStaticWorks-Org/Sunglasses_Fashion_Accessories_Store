/**
 * LUXE VISION — Master JavaScript
 * Vanilla ES6+ Application Engine
 * Handles: Product Catalog, Wishlist, Cart, Theme Toggle, Search, Quick View, Navigation & Validation
 */

// --- MASTER PRODUCT DATABASE (24+ DEMO PRODUCTS) ---
const LUXE_PRODUCTS = [
  // --- SUNGLASSES ---
  {
    id: 1,
    name: "Eclipse Black Aviator Sunglasses",
    category: "sunglasses",
    brand: "Ray-Ban",
    price: 8990,
    originalPrice: 10990,
    image: "assets/images/XowgdSgbjvZ_kZueKyug6JB1dtHdcZFIC5of1FOG5yYWe2aQJlDBrD6w9-uDuibSaO8nDmz_iN9kMjlCRUY5YgdhI_PbZJ9VPJb8twWmOGZqXtubTq1sLpEEbfeYJsbe1B1hh6jjMEih27jVUes-eUuzUbycEoC8Bfpl4LLKq.jpg",
    badge: "New Arrival",
    featured: true,
    newArrival: true,
    description: "Classic teardrop aviator frame forged with ultra-light surgical stainless steel, finished with deep obsidian polarized lenses.",
    specs: ["100% UV400 Polarized", "Ultra-thin Stainless Steel", "Anti-reflective Coating", "Italian Acetate Temple Tips"]
  },
  {
    id: 2,
    name: "Noir Classic Square Sunglasses",
    category: "sunglasses",
    brand: "Oakley",
    price: 7490,
    originalPrice: 8990,
    image: "assets/images/zHHHblwI6F1cdL_qODhdqsNgDrVxmsEJsvM60ezTktEHRjE22MUUTJcXW5lwlyDxkUGagxkEHNa6iQhiz9G0Vxj3GSzXa1nIW6MTmUNJ0clGaDk5zpTjH8Bq807kmD1wzo2DvnPp9NbdCYxioT-vm46Ng499AbZcWX026K0H9.jpg",
    badge: "Bestseller",
    featured: true,
    newArrival: true,
    description: "Architectural square profile featuring handcrafted jet-black Italian acetate with gradient smoked shatterproof lenses.",
    specs: ["Category 3 UV Protection", "Custom 5-Barrel Hinges", "Hand-polished Acetate", "Laser-etched Monogram"]
  },
  {
    id: 3,
    name: "Aurora Oversized Sunglasses",
    category: "sunglasses",
    brand: "Vogue Eyewear",
    price: 9290,
    originalPrice: 11500,
    image: "assets/images/UKC_eoQDdVyn1cklhMO-J_Hg62GL_V6OI7j4rDFio63IRbasOKCo4RCYifG2CFy0Uwp4EgSjA22kbpeGIntEXY7FIEqzT-5A0SRn13KjZQ_6v5Q6PFRfubhrLnmPTq9Y8Cznz0i9o_usc3qQRGgfeVZuXs33s7Uan-tXAIuTi.jpg",
    badge: "New Arrival",
    featured: true,
    newArrival: true,
    description: "Statement oversized frames radiating runway drama, crafted with rich amber tortoiseshell accents and gradient warm tint lenses.",
    specs: ["Runway Editorial Fit", "100% UVA/UVB Shield", "Beveled Acetate Edges", "Includes Hard Leather Case"]
  },
  {
    id: 4,
    name: "Urban Round Frame Sunglasses",
    category: "sunglasses",
    brand: "Ray-Ban",
    price: 7990,
    originalPrice: 9490,
    image: "assets/images/vziIryqeUhm8qHOj1qInW8_mgiSLAsDDQuP8byQXFkylfl3nIh2A5ytBRZn-hPaaPNkMMjlHSjhDIkFAYXXEaw4vwRzPBwgF866dXv8QInyUwziB2poOtkr_3c7_PA0597tWWUkRJAowG2Ahtt6prRbo-AJnUPq_XaYl3kFQH.jpg",
    badge: "Trending",
    featured: false,
    newArrival: false,
    description: "Vintage-inspired circular silhouette in brushed champagne gold tone with crystal-clear emerald polarized optics.",
    specs: ["Brushed Champagne Gold Finish", "Crystal Green Mineral Glass", "Silicone Nose Pads", "Ultralightweight Ergonomics"]
  },
  {
    id: 5,
    name: "Signature Cat Eye Sunglasses",
    category: "sunglasses",
    brand: "Vogue Eyewear",
    price: 8490,
    originalPrice: 9990,
    image: "assets/images/tdcaOAXi9R_C1GlKuCkXDedynZd8Po-iW_DV9ZDhUpOb9daBY3AChnOoqlScbIqxrV31a-NXxEDve2dae3crMiZvptbl5bUXLvun9UdQGo2e6kcimJufNbgzoK9IY9MfpRaM-k7GsNRi_VkYbSBy6ZHhTcIERfCR-RQvPZ61f.jpg",
    badge: "Editorial Pick",
    featured: true,
    newArrival: false,
    description: "Elevated high-fashion cat eye with sculpted angles, delivering an elongated silhouette and subtle champagne gold hardware accents.",
    specs: ["Sculpted Italian Acetate", "Scratch-resistant Nylon Lenses", "Full UV400 Filtration", "Signature Gold Temple Inlay"]
  },
  {
    id: 6,
    name: "Polar Edge Sunglasses",
    category: "sunglasses",
    brand: "Oakley",
    price: 10490,
    originalPrice: 12990,
    image: "assets/images/PNCykRouiKUBBtQuehZgqjaq1KlClxM4Zwi-uTc7_C7297e17fqCv8aFl0JrsjS4SRS2UyC4hxFaz3-UEXrTFRQbtnyhtla3HBXdaCTwQxYVvTJCJ2pXtUVqoc8DTd9xWxyPwv_djTchZhm1rgOY2-i13tTOsFmEqvR7cvhKT.jpg",
    badge: "High Performance",
    featured: false,
    newArrival: false,
    description: "Aerodynamic frame engineered for high-glare environments, featuring hydrophobic coating and high-definition clarity.",
    specs: ["HD Polarized Optics", "Impact Resistant Polycarbonate", "Non-slip Unobtainium Grip", "Microfiber Cleaning Pouch"]
  },
  {
    id: 7,
    name: "Classic Metal Frame Sunglasses",
    category: "sunglasses",
    brand: "Police",
    price: 6990,
    originalPrice: 8490,
    image: "assets/images/jPRVEBTxpQXZEKu2OgVMOFrcr7N6nEZousZhTT-isZsAtL84Njez4mG8EbKhLzP-zOFSrT2zWTnfDI2uKMIeA1gz7rK6B22krFL1CaQXlKvwwi6nSahuGIVvsURZpKRntdHCfH1cXpcc0g6_29Pb5Ayz40AYZN3g2INp9shx7.jpg",
    badge: "Signature",
    featured: false,
    newArrival: false,
    description: "Minimalist dual-bridge aviator in gunmetal matte with midnight blue anti-reflective mineral lenses.",
    specs: ["Matte Gunmetal Alloy", "Anti-reflective Backside Coating", "Dual Top-bridge Structure", "Spring-loaded Hinges"]
  },
  {
    id: 8,
    name: "Modern Wayfarer Sunglasses",
    category: "sunglasses",
    brand: "Carrera",
    price: 8190,
    originalPrice: 9890,
    image: "assets/images/cZ_R0JsXAwuFjIxNyCpJrNSMvY_2sxC0toAureuLaL_93H-rz6_L97_i1m6A_8thb8fWI6KuZtxBIDsWPBISHsrSmOki5AjTytR18d11C2edfBsN6I9b_5xV34K4oAmg2kxEZxLQAT-95p621QW3HEFNIDLTTLaFVUDqUB6vo.jpg",
    badge: "Timeless",
    featured: false,
    newArrival: false,
    description: "Contemporary reimagination of the timeless wayfarer with slimline temple stems and deep smoke gradient UV filters.",
    specs: ["Slimmed Silhouette", "100% UV Protection", "Integrated Flex Hinges", "Ergonomic Bridge Fit"]
  },

  // --- WATCHES ---
  {
    id: 9,
    name: "Urban Edge Premium Watch",
    category: "watches",
    brand: "Fossil",
    price: 14990,
    originalPrice: 17990,
    image: "assets/images/IhZFCfjoqGIL3hPbKy_M9b97VoG0JcB9snSR-2_7ZQjLoV39WPeWIFZL_ERz6gCaZ07wrLc3JqYss9KWN2-fSYI89Q0THGWgmEgGp_xE1jbLRuVvJSiYeGdXHHXu5h7ogGLyGD0gDdaDA6HGYje3xPD7ehzC_MHQZkoG2URjy.jpg",
    badge: "New Arrival",
    featured: true,
    newArrival: true,
    description: "Sophisticated triple-subdial chronograph crafted in surgical 316L stainless steel with a matte noir sunburst dial.",
    specs: ["Japanese Quartz Chronograph", "42mm Surgical Stainless Steel", "5 ATM Water Resistance", "Sapphire-coated Mineral Crystal"]
  },
  {
    id: 10,
    name: "Chrono Black Watch",
    category: "watches",
    brand: "Casio",
    price: 11490,
    originalPrice: 13990,
    image: "assets/images/watch_chrono_black.jpg",
    badge: "Precision",
    featured: false,
    newArrival: false,
    description: "Stealth black matte chronograph with luminous hands and indices, paired with an integrated stainless steel link bracelet.",
    specs: ["Multi-function Sub-dials", "Ion-plated Black Steel", "Date Display Window", "Deployant Clasp with Safety"]
  },
  {
    id: 11,
    name: "Minimal Silver Watch",
    category: "watches",
    brand: "Tommy Hilfiger",
    price: 12990,
    originalPrice: 15490,
    image: "assets/images/watch_minimal_silver.jpg",
    badge: "Minimalist",
    featured: true,
    newArrival: false,
    description: "Ultra-clean Bauhaus aesthetic with a polished silver casing, crisp sunray dial, and quick-release genuine leather strap.",
    specs: ["40mm Slim Profile (7.2mm)", "Genuine Italian Calf Leather", "3 ATM Water Resistant", "Minimalist Dot Hour Markers"]
  },
  {
    id: 12,
    name: "Classic Leather Watch",
    category: "watches",
    brand: "Fossil",
    price: 9990,
    originalPrice: 11990,
    image: "assets/images/uCfnhDpR8oLpxtIRxLnRSZEJdpVBM2qplHKuWSqTTeBhe7iigPcNSFe1oNDF6GHM9uNw8FsHTozJnX8SsEo-0Md93rc8o7IDKX2v3aPDr6l040XaBlBZ0Hm9rgCXS7uizZh2NzTEeJLPmrSSdsjdMnrG4wWtW3SXme0-YngxJ.jpg",
    badge: "Heritage",
    featured: false,
    newArrival: false,
    description: "Vintage-inspired dress watch with rich cognac brown hand-stitched leather and rose gold applied Roman numerals.",
    specs: ["Hand-stitched Tuscan Leather", "Rose Gold Ion Plating", "Sub-second Dial", "Hardened Mineral Crystal"]
  },
  {
    id: 13,
    name: "Gold Accent Watch",
    category: "watches",
    brand: "Casio",
    price: 16490,
    originalPrice: 19990,
    image: "assets/images/watch.jpg",
    badge: "Luxury Edition",
    featured: false,
    newArrival: false,
    description: "Bold gold-toned stainless steel timepiece with intricate knurled bezel and Champagne Gold dial markers.",
    specs: ["Champagne Gold PVD Finish", "Automatic Movement Preview", "100m Water Resistance", "Solid Link President Bracelet"]
  },
  {
    id: 14,
    name: "Urban Steel Watch",
    category: "watches",
    brand: "Tommy Hilfiger",
    price: 13490,
    originalPrice: 15990,
    image: "assets/images/watch1.jpg",
    badge: "Contemporary",
    featured: false,
    newArrival: false,
    description: "Contemporary brushed steel timepiece with ocean navy sunburst dial and dual time-zone functionality.",
    specs: ["Dual Time Zone Function", "Brushed 316L Steel", "Luminescent Indices", "Butterfly Push-button Buckle"]
  },

  // --- BELTS ---
  {
    id: 15,
    name: "Signature Leather Belt",
    category: "belts",
    brand: "Tommy Hilfiger",
    price: 4290,
    originalPrice: 5290,
    image: "assets/images/ifLdAmkfVHTYc4_Qi3mCObSnVYuggS_G5VCT1mdf0hkuigmJohZRkNuEvOsoc1zhZ6fEWhMjFEop5AcKa-932ecOmLbs899rDq-pgkvMulg_OMeFDAcJyQmdxwyeEak5fdpt3JqvFMrkGIaGPg33QjsSLciCx-H0PBibRXYSi.jpg",
    badge: "New Arrival",
    featured: true,
    newArrival: true,
    description: "Handcrafted full-grain vegetable-tanned leather belt with a brushed nickel prong buckle and burnished edge detailing.",
    specs: ["100% Full-grain Leather", "35mm Width", "Brushed Nickel Hardware", "Debossed LUXE VISION Hallmark"]
  },
  {
    id: 16,
    name: "Classic Black Leather Belt",
    category: "belts",
    brand: "Fossil",
    price: 3890,
    originalPrice: 4790,
    image: "assets/images/f0ASDQMSnR8zlUtXmrJAYUg6sNpRz9vD5CfO7uWlcvajiWxDIdIz78jWmNQOGgdMnkOIOzIou7na-P9QYcVFQr55aPZqSn2OhLTvukbDA6Qbd6m7DEEF5Co2Y8Udo5v2u_LWnzs5jgZXDS7NqtHfAtxDu2Q2p3dqHuICkJiJP.jpg",
    badge: "Essential",
    featured: false,
    newArrival: false,
    description: "Timeless formal belt cut from supple Spanish calfskin, pairing seamlessly with sartorial suits and bespoke tailoring.",
    specs: ["Spanish Calfskin Leather", "Polished Gunmetal Buckle", "Reinforced Stitching", "Beveled Edge Construction"]
  },
  {
    id: 17,
    name: "Minimal Gold Buckle Belt",
    category: "belts",
    brand: "Tommy Hilfiger",
    price: 4690,
    originalPrice: 5790,
    image: "assets/images/-fdlUbPXs6oBS4I7fDoPCThmptMwCRzw0uzk2lkhO8Ix5b0nOBV9o3lWv_a-MeHaE6eMn0_4xkMxsVPYayUsusJpSM1OvhzgseLiavTJ7zCaAzcZhdbN84179F5ENkx1jz209EdRHeBXLBgXcB49AF0Snxnd5muFJKjOZNqah.jpg",
    badge: "Statement",
    featured: false,
    newArrival: false,
    description: "Modern minimalist fashion belt with a bespoke sculptural Champagne Gold geometric buckle and velvety matte finish.",
    specs: ["Sculptural Gold Finish Buckle", "Velvet Matte Treated Leather", "30mm Sleek Width", "Laser-finished Tip"]
  },
  {
    id: 18,
    name: "Signature Reversible Belt",
    category: "belts",
    brand: "Police",
    price: 5290,
    originalPrice: 6490,
    image: "assets/images/ooHgxi5JaoxgoYBG3l4aKJtviMlilputJ2A1D-15A48hBUr_GWgAyGeomJKfNsTLZg79s7blgIp33rpkatBvgDZFchY_26Vg0W0bVbZdq2vG93eVdg9oLzcIE8k-8YY1YgO9MJRrbl_TTuta9UgH1sQWiy2wzR79HcLZ1mk9U.jpg",
    badge: "Versatile",
    featured: false,
    newArrival: false,
    description: "Dual-sided reversible leather belt transitioning effortlessly between rich chestnut brown and midnight black.",
    specs: ["360-degree Twist Mechanism", "Two-in-One Reversible", "Dual Leather Textures", "34mm Standard Width"]
  },

  // --- CAPS ---
  {
    id: 19,
    name: "Minimal Streetwear Cap",
    category: "caps",
    brand: "Oakley",
    price: 2490,
    originalPrice: 3190,
    image: "assets/images/TLdldEx9kBKBZP6X5shLjD89uuWA_uxH9WBzbyZtjrvX3NTT2_XdIBpSNp_V2b205MUsKpxkG4sK6CgjF3oFYEVHeO_nTSn_OSO0UKq8lvpiYzNBAKS35Od4GJ3wdSWB2FUR58AkTfnJvJEpBN81AEyFInBPukJDFKiPF0x1j.jpg",
    badge: "New Arrival",
    featured: true,
    newArrival: true,
    description: "Unstructured 6-panel low-profile cap crafted from washed heavy cotton twill with tonal monogram embroidery.",
    specs: ["100% Organic Heavy Twill", "Pre-curved Visor", "Brass Buckle Adjustment Strap", "Embroidered Ventilation Eyelets"]
  },
  {
    id: 20,
    name: "Urban Streetwear Cap",
    category: "caps",
    brand: "Carrera",
    price: 2790,
    originalPrice: 3490,
    image: "assets/images/Vb-T75htgJCyShDnQoSnzcndaJH4CKhSPjOClivTqAoA9HpR-B3VB4JsOShQUQjLZliCnsANoLgZA_X11CdZKFt3BaCCOKklw5NGLA_6IUdjCMQZ9TlYj0DLGbOF39uJtKW36vZ41zUqqw1mo-5mkP0lsQzAK0_KtATUMMYoV.jpg",
    badge: "Streetwear",
    featured: false,
    newArrival: false,
    description: "Contemporary urban silhouette in carbon black with a structured crown and subtle champagne gold metallic side eyelet.",
    specs: ["Structured High Crown", "Moisture-wicking Sweatband", "Quick-clip Buckle", "UV Protective Brim Underlay"]
  },
  {
    id: 21,
    name: "Classic Beige Cap",
    category: "caps",
    brand: "Tommy Hilfiger",
    price: 2690,
    originalPrice: 3290,
    image: "assets/images/Cin7d3YSK5_ca4l0H4hPbB6mGNgRnuj1LwvDIinLVFOR_4DpKw0wU9E-1-ZziuaVY6MnQzKOWzzDwl_MCSCpm1aIu5kq0n3nXf0Yg5KPL3JU9PC-A4SWCvP-5lgkQB4cPm5JNatNxnRKQGaMdC7mwbXAkHjqoHzQuPpyi23xv.jpg",
    badge: "Neutral Chic",
    featured: false,
    newArrival: false,
    description: "Relaxed aesthetic in soft sand beige, designed for casual weekend styling with premium cotton canvas breathability.",
    specs: ["Enzyme-washed Cotton", "Antique Brass Slider", "Internal Taped Seams", "Relaxed Unstructured Fit"]
  },
  {
    id: 22,
    name: "Premium Logo Cap",
    category: "caps",
    brand: "Police",
    price: 2990,
    originalPrice: 3690,
    image: "assets/images/cap_premium_logo.jpg",
    badge: "Signature",
    featured: false,
    newArrival: false,
    description: "Refined monochrome cap featuring a high-density 3D rubberized LUXE VISION micro-emblem centered on the front peak.",
    specs: ["3D Micro-injection Emblem", "Reinforced Front Panels", "Stretch Comfort Sweatband", "Strap Tuck-in Pocket"]
  },
  {
    id: 23,
    name: "Minimal Navy Cap",
    category: "caps",
    brand: "Tommy Hilfiger",
    price: 2590,
    originalPrice: 3190,
    image: "assets/images/cap_minimal_navy.jpg",
    badge: "Essential",
    featured: false,
    newArrival: false,
    description: "Deep midnight navy baseball cap with contrast stitching and an ultra-soft suede underbrim for glare reduction.",
    specs: ["Deep Obsidian Navy Dye", "Faux Suede Underbrim", "Adjustable Self-strap", "Breathable Mesh Lining"]
  },
  {
    id: 24,
    name: "Everyday Cotton Cap",
    category: "caps",
    brand: "Casio",
    price: 2290,
    originalPrice: 2890,
    image: "assets/images/cap_everyday_cotton.jpg",
    badge: "Daily Essential",
    featured: false,
    newArrival: false,
    description: "Featherlight breathable cotton cap engineered for everyday sun protection with minimalist styling and enduring comfort.",
    specs: ["Lightweight Chino Cotton", "Flexible Brim Memory", "Nickel-free Hardware", "One Size Fits Most"]
  }
];

// --- STORAGE KEYS ---
const STORAGE_KEYS = {
  THEME: "luxeVision_theme",
  WISHLIST: "luxeVision_wishlist",
  CART: "luxeVision_cart"
};

// --- INITIALIZE STATE ---
let wishlistState = JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST)) || [];
let cartState = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];

// --- FORMAT CURRENCY INR ---
function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

// --- THEME ENGINE ---
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeToggleIcons(savedTheme);

  const toggleButtons = document.querySelectorAll(".theme-toggle-btn");
  toggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
      updateThemeToggleIcons(newTheme);
      showToast(`Switched to ${newTheme === "dark" ? "Dark" : "Light"} mode`, "bi-palette");
    });
  });
}

function updateThemeToggleIcons(theme) {
  const toggleButtons = document.querySelectorAll(".theme-toggle-btn");
  toggleButtons.forEach(btn => {
    if (theme === "dark") {
      btn.innerHTML = `<i class="bi bi-sun"></i>`;
      btn.setAttribute("aria-label", "Switch to Light Mode");
      btn.setAttribute("title", "Switch to Light Mode");
    } else {
      btn.innerHTML = `<i class="bi bi-moon-stars"></i>`;
      btn.setAttribute("aria-label", "Switch to Dark Mode");
      btn.setAttribute("title", "Switch to Dark Mode");
    }
  });
}

// --- RTL / LTR DIRECTION ENGINE ---
function initRTL() {
  const savedDir = localStorage.getItem("luxe_direction") || "ltr";
  document.documentElement.setAttribute("dir", savedDir);
  updateRTLToggleButtons(savedDir);

  const rtlButtons = document.querySelectorAll(".rtl-toggle-btn");
  rtlButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentDir = document.documentElement.getAttribute("dir") || "ltr";
      const newDir = currentDir === "rtl" ? "ltr" : "rtl";
      document.documentElement.setAttribute("dir", newDir);
      localStorage.setItem("luxe_direction", newDir);
      updateRTLToggleButtons(newDir);
      showToast(`Switched layout to ${newDir.toUpperCase()}`, "bi-arrow-left-right");
    });
  });
}

function updateRTLToggleButtons(dir) {
  const rtlButtons = document.querySelectorAll(".rtl-toggle-btn");
  rtlButtons.forEach(btn => {
    if (dir === "rtl") {
      btn.innerHTML = `<span class="rtl-text">LTR</span>`;
      btn.setAttribute("aria-label", "Switch to LTR Direction");
      btn.setAttribute("title", "Switch to LTR");
    } else {
      btn.innerHTML = `<span class="rtl-text">RTL</span>`;
      btn.setAttribute("aria-label", "Switch to RTL Direction");
      btn.setAttribute("title", "Switch to RTL");
    }
  });
}

// --- NAVIGATION & STICKY HEADER ---
function initNavigation() {
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Mobile Drawer
  const hamburgerBtn = document.querySelector(".nav-hamburger-btn");
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  const mobileDrawerClose = document.querySelector(".mobile-nav-close");
  const backdropOverlay = document.getElementById("backdropOverlay");

  function openMobileNav() {
    if (mobileDrawer) mobileDrawer.classList.add("open");
    if (backdropOverlay) backdropOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileNav() {
    if (mobileDrawer) mobileDrawer.classList.remove("open");
    if (backdropOverlay && !isAnyDrawerOpen()) {
      backdropOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener("click", openMobileNav);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener("click", closeMobileNav);

  // Close mobile drawer when clicking a link
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMobileNav);
  });

  // Back to top button
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function isAnyDrawerOpen() {
  const sideDrawer = document.querySelector(".side-drawer.open");
  const mobileDrawer = document.querySelector(".mobile-nav-drawer.open");
  const searchOverlay = document.querySelector(".search-overlay.active");
  return !!(sideDrawer || mobileDrawer || searchOverlay);
}

// --- WISHLIST SYSTEM ---
function initWishlist() {
  updateNavBadges();
  renderWishlistDrawer();

  const openWishlistBtns = document.querySelectorAll(".open-wishlist-btn");
  const wishlistDrawer = document.getElementById("wishlistDrawer");
  const closeWishlistBtn = document.querySelector(".close-wishlist-btn");
  const backdropOverlay = document.getElementById("backdropOverlay");

  function openWishlist() {
    // Close other drawers
    closeBag();
    closeMobileDrawer();
    if (wishlistDrawer) wishlistDrawer.classList.add("open");
    if (backdropOverlay) backdropOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeWishlist() {
    if (wishlistDrawer) wishlistDrawer.classList.remove("open");
    if (backdropOverlay && !isAnyDrawerOpen()) {
      backdropOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  openWishlistBtns.forEach(btn => btn.addEventListener("click", openWishlist));
  if (closeWishlistBtn) closeWishlistBtn.addEventListener("click", closeWishlist);
}

function toggleWishlist(productId) {
  const index = wishlistState.indexOf(productId);
  const product = LUXE_PRODUCTS.find(p => p.id === productId);

  if (index > -1) {
    wishlistState.splice(index, 1);
    showToast(`Removed from Wishlist`, "bi-heart");
  } else {
    wishlistState.push(productId);
    showToast(`Added to Wishlist: ${product ? product.name : ''}`, "bi-heart-fill");
  }

  localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlistState));
  updateNavBadges();
  updateCardWishlistButtons();
  renderWishlistDrawer();
}

function updateCardWishlistButtons() {
  document.querySelectorAll("[data-wishlist-id]").forEach(btn => {
    const id = Number(btn.getAttribute("data-wishlist-id"));
    if (wishlistState.includes(id)) {
      btn.classList.add("wishlist-active");
      btn.innerHTML = `<i class="bi bi-heart-fill"></i>`;
      btn.setAttribute("title", "Remove from Wishlist");
    } else {
      btn.classList.remove("wishlist-active");
      btn.innerHTML = `<i class="bi bi-heart"></i>`;
      btn.setAttribute("title", "Save to Wishlist");
    }
  });
}

function renderWishlistDrawer() {
  const body = document.getElementById("wishlistDrawerBody");
  if (!body) return;

  if (wishlistState.length === 0) {
    body.innerHTML = `
      <div class="empty-drawer-view">
        <i class="bi bi-heart"></i>
        <h4 class="font-heading">Your Wishlist is Empty</h4>
        <p class="text-muted small">Save pieces you admire to curate your signature edit.</p>
        <a href="products.html" class="btn-luxe btn-luxe-primary btn-luxe-sm mt-3">Explore Products</a>
      </div>
    `;
    return;
  }

  const itemsHTML = wishlistState.map(id => {
    const product = LUXE_PRODUCTS.find(p => p.id === id);
    if (!product) return "";
    return `
      <div class="drawer-item">
        <div class="drawer-item-img">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="drawer-item-details">
          <div class="drawer-item-title">${product.name}</div>
          <div class="drawer-item-price">${formatINR(product.price)}</div>
          <button class="btn-luxe btn-luxe-primary btn-luxe-sm py-1 px-3" style="font-size: 0.68rem;" onclick="addToBag(${product.id}); toggleWishlist(${product.id});">
            <i class="bi bi-bag-plus"></i> Move to Bag
          </button>
        </div>
        <button class="drawer-item-remove" onclick="toggleWishlist(${product.id})" title="Remove item">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `;
  }).join("");

  body.innerHTML = `
    <div class="d-flex flex-column gap-3">
      ${itemsHTML}
    </div>
  `;
}

// --- SHOPPING BAG (CART) SYSTEM ---
function initBag() {
  updateNavBadges();
  renderBagDrawer();

  const openBagBtns = document.querySelectorAll(".open-bag-btn");
  const bagDrawer = document.getElementById("bagDrawer");
  const closeBagBtn = document.querySelector(".close-bag-btn");
  const backdropOverlay = document.getElementById("backdropOverlay");

  function openBag() {
    closeWishlistDrawer();
    closeMobileDrawer();
    if (bagDrawer) bagDrawer.classList.add("open");
    if (backdropOverlay) backdropOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  openBagBtns.forEach(btn => btn.addEventListener("click", openBag));
  if (closeBagBtn) closeBagBtn.addEventListener("click", closeBag);
}

function closeBag() {
  const bagDrawer = document.getElementById("bagDrawer");
  const backdropOverlay = document.getElementById("backdropOverlay");
  if (bagDrawer) bagDrawer.classList.remove("open");
  if (backdropOverlay && !isAnyDrawerOpen()) {
    backdropOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function closeWishlistDrawer() {
  const wishlistDrawer = document.getElementById("wishlistDrawer");
  if (wishlistDrawer) wishlistDrawer.classList.remove("open");
}

function closeMobileDrawer() {
  const mobileDrawer = document.getElementById("mobileNavDrawer");
  if (mobileDrawer) mobileDrawer.classList.remove("open");
}

function addToBag(productId, qty = 1) {
  const product = LUXE_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cartState.find(item => item.id === productId);
  if (existingItem) {
    existingItem.qty += qty;
  } else {
    cartState.push({ id: productId, qty: qty });
  }

  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cartState));
  updateNavBadges();
  renderBagDrawer();
  showToast(`Added to Bag: ${product.name}`, "bi-bag-check-fill");

  // Automatically open bag drawer for smooth feedback
  const bagDrawer = document.getElementById("bagDrawer");
  const backdropOverlay = document.getElementById("backdropOverlay");
  if (bagDrawer) bagDrawer.classList.add("open");
  if (backdropOverlay) backdropOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateBagQuantity(productId, delta) {
  const item = cartState.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromBag(productId);
    return;
  }

  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cartState));
  updateNavBadges();
  renderBagDrawer();
}

function removeFromBag(productId) {
  cartState = cartState.filter(item => item.id !== productId);
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cartState));
  updateNavBadges();
  renderBagDrawer();
  showToast("Item removed from bag", "bi-trash");
}

function renderBagDrawer() {
  const body = document.getElementById("bagDrawerBody");
  const footer = document.getElementById("bagDrawerFooter");
  if (!body) return;

  if (cartState.length === 0) {
    body.innerHTML = `
      <div class="empty-drawer-view">
        <i class="bi bi-bag"></i>
        <h4 class="font-heading">Your Bag is Empty</h4>
        <p class="text-muted small">Elevate your wardrobe with our latest curated eyewear and accessories.</p>
        <a href="products.html" class="btn-luxe btn-luxe-primary btn-luxe-sm mt-3" onclick="closeBag()">Start Shopping</a>
      </div>
    `;
    if (footer) footer.style.display = "none";
    return;
  }

  if (footer) footer.style.display = "block";

  let subtotal = 0;
  const itemsHTML = cartState.map(item => {
    const product = LUXE_PRODUCTS.find(p => p.id === item.id);
    if (!product) return "";
    const itemTotal = product.price * item.qty;
    subtotal += itemTotal;

    return `
      <div class="drawer-item">
        <div class="drawer-item-img">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="drawer-item-details">
          <div class="drawer-item-title">${product.name}</div>
          <div class="drawer-item-price">${formatINR(product.price)}</div>
          <div class="drawer-qty-controls">
            <button class="drawer-qty-btn" onclick="updateBagQuantity(${product.id}, -1)">-</button>
            <span class="drawer-qty-val">${item.qty}</span>
            <button class="drawer-qty-btn" onclick="updateBagQuantity(${product.id}, 1)">+</button>
          </div>
        </div>
        <button class="drawer-item-remove" onclick="removeFromBag(${product.id})" title="Remove item">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `;
  }).join("");

  body.innerHTML = `<div class="d-flex flex-column gap-3">${itemsHTML}</div>`;

  // Update Footer totals
  const subtotalEl = document.getElementById("bagSubtotal");
  const totalEl = document.getElementById("bagTotal");
  if (subtotalEl) subtotalEl.textContent = formatINR(subtotal);
  if (totalEl) totalEl.textContent = formatINR(subtotal);
}

// --- UPDATE BADGES ---
function updateNavBadges() {
  const wishlistCounts = document.querySelectorAll(".wishlist-badge-count");
  wishlistCounts.forEach(el => {
    el.textContent = wishlistState.length;
    el.style.display = wishlistState.length > 0 ? "flex" : "none";
  });

  const totalBagItems = cartState.reduce((sum, item) => sum + item.qty, 0);
  const bagCounts = document.querySelectorAll(".bag-badge-count");
  bagCounts.forEach(el => {
    el.textContent = totalBagItems;
    el.style.display = totalBagItems > 0 ? "flex" : "none";
  });
}

// --- SEARCH OVERLAY SYSTEM ---
function initSearch() {
  const openSearchBtns = document.querySelectorAll(".open-search-btn");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearchBtn = document.querySelector(".search-close-btn");
  const searchInput = document.getElementById("searchLargeInput");
  const liveResultsContainer = document.getElementById("searchLiveResults");

  function openSearch() {
    closeBag();
    closeWishlistDrawer();
    closeMobileDrawer();
    if (searchOverlay) {
      searchOverlay.classList.add("active");
      if (searchInput) {
        searchInput.value = "";
        setTimeout(() => searchInput.focus(), 150);
      }
      renderSearchResults("");
    }
  }

  function closeSearch() {
    if (searchOverlay) searchOverlay.classList.remove("active");
  }

  openSearchBtns.forEach(btn => btn.addEventListener("click", openSearch));
  if (closeSearchBtn) closeSearchBtn.addEventListener("click", closeSearch);

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderSearchResults(e.target.value.trim());
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeSearch();
      if (e.key === "Enter" && searchInput.value.trim().length > 0) {
        window.location.href = `products.html?search=${encodeURIComponent(searchInput.value.trim())}`;
      }
    });
  }

  function renderSearchResults(query) {
    if (!liveResultsContainer) return;
    if (!query) {
      liveResultsContainer.innerHTML = `
        <div class="text-center py-4 text-muted small">
          Type to search sunglasses, watches, belts, caps, or brands (e.g. "Ray-Ban", "Aviator", "Leather").
        </div>
      `;
      return;
    }

    const matches = LUXE_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);

    if (matches.length === 0) {
      liveResultsContainer.innerHTML = `
        <div class="text-center py-4 text-muted">
          <i class="bi bi-search mb-2 d-block" style="font-size: 1.8rem; color: var(--accent-gold);"></i>
          No pieces found matching "<strong>${escapeHtml(query)}</strong>".
        </div>
      `;
      return;
    }

    liveResultsContainer.innerHTML = matches.map(p => `
      <div class="search-result-row" onclick="openQuickView(${p.id}); closeSearch();">
        <div class="search-result-img">
          <img src="${p.image}" alt="${p.name}">
        </div>
        <div class="flex-grow-1">
          <div class="small text-uppercase text-gold" style="font-size: 0.7rem; color: var(--accent-gold); font-weight: 700;">${p.brand} • ${p.category}</div>
          <div class="fw-semibold text-primary" style="font-family: var(--font-heading); font-size: 1rem;">${p.name}</div>
        </div>
        <div class="fw-bold" style="font-size: 0.95rem; color: var(--text-primary);">${formatINR(p.price)}</div>
      </div>
    `).join("");
  }

  // Close search with ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSearch();
      closeBag();
      closeWishlistDrawer();
      closeMobileDrawer();
    }
  });
}

// --- QUICK VIEW MODAL SYSTEM ---
function openQuickView(productId) {
  const product = LUXE_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalEl = document.getElementById("quickViewModal");
  if (!modalEl) return;

  const modalImg = document.getElementById("qvImage");
  const modalBrand = document.getElementById("qvBrand");
  const modalTitle = document.getElementById("qvTitle");
  const modalPrice = document.getElementById("qvPrice");
  const modalOrigPrice = document.getElementById("qvPriceOrig");
  const modalDesc = document.getElementById("qvDescription");
  const modalSpecs = document.getElementById("qvSpecs");
  const modalAddBtn = document.getElementById("qvAddBtn");
  const modalWishlistBtn = document.getElementById("qvWishlistBtn");
  const modalQtyInput = document.getElementById("qvQtyInput");

  if (modalImg) {
    modalImg.src = product.image;
    modalImg.alt = product.name;
  }
  if (modalBrand) modalBrand.textContent = product.brand;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalPrice) modalPrice.textContent = formatINR(product.price);
  if (modalOrigPrice) {
    if (product.originalPrice) {
      modalOrigPrice.textContent = formatINR(product.originalPrice);
      modalOrigPrice.style.display = "inline";
    } else {
      modalOrigPrice.style.display = "none";
    }
  }
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalSpecs) {
    modalSpecs.innerHTML = product.specs.map(spec => `
      <li><i class="bi bi-check2-circle"></i> ${spec}</li>
    `).join("");
  }

  if (modalQtyInput) modalQtyInput.value = 1;

  if (modalAddBtn) {
    modalAddBtn.onclick = () => {
      const qty = parseInt(modalQtyInput ? modalQtyInput.value : 1, 10) || 1;
      addToBag(product.id, qty);
      const bsModal = bootstrap.Modal.getInstance(modalEl);
      if (bsModal) bsModal.hide();
    };
  }

  if (modalWishlistBtn) {
    const isSaved = wishlistState.includes(product.id);
    modalWishlistBtn.innerHTML = isSaved ? `<i class="bi bi-heart-fill text-danger"></i>` : `<i class="bi bi-heart"></i>`;
    modalWishlistBtn.onclick = () => {
      toggleWishlist(product.id);
      const updatedSaved = wishlistState.includes(product.id);
      modalWishlistBtn.innerHTML = updatedSaved ? `<i class="bi bi-heart-fill text-danger"></i>` : `<i class="bi bi-heart"></i>`;
    };
  }

  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();
}

// --- QUICK VIEW QUANTITY CONTROLLER ---
function adjustQuickViewQty(delta) {
  const qvInput = document.getElementById("qvQtyInput");
  if (qvInput) {
    const current = parseInt(qvInput.value, 10) || 1;
    qvInput.value = Math.max(1, current + delta);
  }
}
window.adjustQuickViewQty = adjustQuickViewQty;

// --- PRODUCT CARD COMPONENT GENERATOR ---
function createProductCardHTML(product) {
  const isWishlisted = wishlistState.includes(product.id);
  return `
    <div class="product-card" data-category="${product.category}" data-brand="${product.brand}" data-product-id="${product.id}">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-badge ${product.badge === 'New Arrival' ? 'gold' : ''}">${product.badge}</span>` : ''}
        
        <div class="product-card-actions">
          <button class="card-action-btn ${isWishlisted ? 'wishlist-active' : ''}" 
                  data-wishlist-id="${product.id}"
                  onclick="toggleWishlist(${product.id})"
                  title="${isWishlisted ? 'Remove from Wishlist' : 'Save to Wishlist'}"
                  aria-label="Wishlist">
            <i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}"></i>
          </button>
        </div>

        <button class="quick-view-overlay-btn" onclick="openQuickView(${product.id})">
          <i class="bi bi-eye"></i> Quick View
        </button>
      </div>

      <div class="product-content">
        <div class="product-brand">${product.brand} • ${product.category}</div>
        <h3 class="product-title">${product.name}</h3>
        
        <div class="product-meta">
          <span class="product-price">${formatINR(product.price)}</span>
          ${product.originalPrice ? `<span class="product-price-orig">${formatINR(product.originalPrice)}</span>` : ''}
        </div>

        <div class="product-card-footer">
          <button class="btn-add-bag" onclick="addToBag(${product.id})">
            <i class="bi bi-bag-plus"></i> Add to Bag
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, iconClass = "bi-check2-circle") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-luxe";
  toast.innerHTML = `
    <i class="bi ${iconClass}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(30px)";
    toast.style.transition = "all 0.35s ease";
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// --- UTILITY: ESCAPE HTML ---
function escapeHtml(string) {
  const div = document.createElement("div");
  div.innerText = string;
  return div.innerHTML;
}

// --- NEWSLETTER SUBSCRIPTION HANDLER ---
function initNewsletter() {
  const forms = document.querySelectorAll(".newsletter-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (input && input.value.trim()) {
        showToast("Thank you for joining our exclusive private newsletter.", "bi-envelope-check");
        input.value = "";
      }
    });
  });
}

// --- BACKDROP OVERLAY HANDLER ---
function initBackdropOverlay() {
  const backdropOverlay = document.getElementById("backdropOverlay");
  if (backdropOverlay) {
    backdropOverlay.addEventListener("click", () => {
      closeBag();
      closeWishlistDrawer();
      closeMobileDrawer();
    });
  }
}

// --- BOOTSTRAP INITIALIZATION ON DOM READY ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initRTL();
  initNavigation();
  initWishlist();
  initBag();
  initSearch();
  initNewsletter();
  initBackdropOverlay();
});


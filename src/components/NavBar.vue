<template>
  <header :class="['navbar', { scrolled: isScrolled, 'menu-open': menuOpen }]" role="banner">
    <div class="container navbar__inner">
      <a href="#start" class="navbar__logo" aria-label="Leon Rohrer Webdesign – zur Startseite">
        <span class="navbar__logo-mark" aria-hidden="true">
          <svg viewBox="0 0 28 28" width="22" height="22" aria-hidden="true">
            <defs>
              <linearGradient id="lr-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#F97316"/>
                <stop offset="100%" stop-color="#FFB342"/>
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="24" height="24" rx="7" fill="url(#lr-grad)"/>
            <path d="M9 8v12h7M16 8h3l-3 6h3" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
        </span>
        <span class="navbar__logo-text">
          <span class="navbar__logo-name">Leon Rohrer</span>
          <span class="navbar__logo-sub">Webdesign · Innsbruck</span>
        </span>
      </a>

      <nav class="navbar__links" aria-label="Hauptnavigation">
        <a href="#nutzen" class="navbar__link">Vorteile</a>
        <a href="#referenzen" class="navbar__link">Referenzen</a>
        <a href="#angebot" class="navbar__link">Angebot</a>
        <a href="#ablauf" class="navbar__link">Ablauf</a>
        <a href="#kontakt" class="btn btn-primary navbar__cta">
          Gratis Vorschau
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </nav>

      <button
        class="navbar__burger"
        :class="{ open: menuOpen }"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? 'Menü schließen' : 'Menü öffnen'"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <div
      id="mobile-menu"
      :class="['navbar__mobile', { open: menuOpen }]"
      role="dialog"
      aria-label="Mobilmenü"
    >
      <nav class="navbar__mobile-links" @click="menuOpen = false">
        <a href="#nutzen" class="navbar__mobile-link">Vorteile</a>
        <a href="#referenzen" class="navbar__mobile-link">Referenzen</a>
        <a href="#angebot" class="navbar__mobile-link">Angebot &amp; Preis</a>
        <a href="#ablauf" class="navbar__mobile-link">Ablauf</a>
        <a href="#zielgruppen" class="navbar__mobile-link">Für wen?</a>
        <a href="#kontakt" class="btn btn-primary navbar__mobile-cta">
          Gratis Vorschau anfragen
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(247,248,251,0.65);
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  border-bottom: 1px solid transparent;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.navbar.scrolled {
  background: rgba(255,255,255,0.78);
  border-bottom-color: var(--color-border);
  box-shadow: 0 4px 24px -8px rgba(11,15,26,.10);
}
.navbar.menu-open { background: var(--color-surface); }

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

/* Logo */
.navbar__logo {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  transition: opacity .2s;
}
.navbar__logo:hover { opacity: .85; }
.navbar__logo-mark {
  width: 36px; height: 36px;
  border-radius: var(--radius-lg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px -6px rgba(249,115,22,.4);
}
.navbar__logo-text { display: flex; flex-direction: column; line-height: 1.1; }
.navbar__logo-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0;
  color: var(--color-text);
}
.navbar__logo-sub {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 500;
  color: var(--color-muted);
  letter-spacing: 0;
  text-transform: uppercase;
}

/* Desktop links */
.navbar__links {
  display: none;
  align-items: center;
  gap: 0.4rem;
}
@media (min-width: 880px) {
  .navbar__links { display: flex; }
}
.navbar__link {
  position: relative;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--color-secondary);
  padding: 0.55rem 0.85rem;
  border-radius: var(--radius-sm);
  transition: color 0.2s, background 0.2s;
}
.navbar__link:hover { color: var(--color-text); background: var(--color-bg-alt); }

.navbar__cta {
  margin-left: 0.5rem;
  padding: 0.55rem 1.15rem;
  font-size: 0.88rem;
  min-height: 40px;
}

/* Burger */
.navbar__burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: var(--radius-lg);
}
.navbar__burger:hover { background: var(--color-bg-alt); }
.navbar__burger span {
  display: block;
  width: 22px; height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: transform 0.28s, opacity 0.28s;
  transform-origin: center;
}
.navbar__burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.navbar__burger.open span:nth-child(2) { opacity: 0; }
.navbar__burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
@media (min-width: 880px) { .navbar__burger { display: none; } }

/* Mobile menu */
.navbar__mobile {
  position: absolute;
  top: 76px; left: 0; right: 0;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 1.25rem 1.5rem;
  transform: translateY(-8px);
  opacity: 0;
  pointer-events: none;
  transition: opacity .25s ease, transform .25s ease;
  box-shadow: 0 16px 40px -16px rgba(11,15,26,.18);
}
.navbar__mobile.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.navbar__mobile-links {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}
.navbar__mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.95rem 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border-soft);
}
.navbar__mobile-link::after {
  content: '→';
  color: var(--color-muted);
  font-size: 1rem;
}
.navbar__mobile-cta {
  width: 100%;
  justify-content: center;
  margin-top: 0.85rem;
}

/* Dark poster refinement */
.navbar {
  background: rgba(6, 17, 14, 0.78);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: var(--color-border-soft);
}
.navbar.scrolled {
  background: rgba(6, 17, 14, 0.94);
  box-shadow: 0 16px 40px rgba(0, 0, 0, .24);
}
.navbar.menu-open,
.navbar__mobile {
  background: var(--color-bg);
}
.navbar__logo-mark {
  border-radius: var(--radius-md);
  box-shadow: 0 0 0 1px rgba(255, 151, 0, .28), var(--shadow-accent);
}
.navbar__logo-name,
.navbar__logo-sub,
.navbar__link {
  letter-spacing: 0;
}
.navbar__logo-sub {
  font-weight: 800;
}
.navbar__link {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 800;
  border-radius: var(--radius-sm);
  text-transform: uppercase;
}
.navbar__link:hover {
  color: var(--color-accent);
  background: rgba(255,255,255,.04);
}
.navbar__cta {
  font-size: 0.86rem;
}
.navbar__burger {
  background: rgba(255,255,255,.04);
  border: 1px solid var(--color-border-soft);
  border-radius: var(--radius-md);
}
.navbar__burger:hover {
  background: rgba(255,255,255,.07);
}
.navbar__mobile {
  box-shadow: 0 18px 46px rgba(0,0,0,.34);
}
.navbar__mobile-link {
  font-family: var(--font-mono);
  font-size: 0.86rem;
  font-weight: 800;
  text-transform: uppercase;
}
.navbar__mobile-link::after {
  color: var(--color-accent);
}
</style>


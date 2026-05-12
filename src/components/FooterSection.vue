<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__bg" aria-hidden="true">
      <div class="footer__glow"></div>
    </div>

    <div class="container footer__inner">

      <!-- Brand -->
      <div class="footer__brand">
        <div class="footer__brand-row">
          <span class="footer__mark" aria-hidden="true">
            <svg viewBox="0 0 28 28" width="22" height="22" aria-hidden="true">
              <defs>
                <linearGradient id="lr-grad-footer" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="#F97316"/>
                  <stop offset="100%" stop-color="#FFB342"/>
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="24" height="24" rx="7" fill="url(#lr-grad-footer)"/>
              <path d="M9 8v12h7M16 8h3l-3 6h3" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            </svg>
          </span>
          <p class="footer__brand-name">Leon Rohrer <span>Webdesign</span></p>
        </div>
        <p class="footer__brand-tagline">
          Maßgeschneiderte Websites für lokale Unternehmen in Innsbruck &amp; Tirol —
          mit klarem Startpreis und kostenloser Vorschau.
        </p>
        <div class="footer__contact">
          <a href="tel:+43XXXXXXXXX" class="footer__contact-link">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"/>
            </svg>
            +43 XXX XXXXXXX
          </a>
          <a href="mailto:kontakt@leonrohrer.at" class="footer__contact-link">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            kontakt@leonrohrer.at
          </a>
        </div>
      </div>

      <!-- Nav -->
      <nav class="footer__nav" aria-label="Footer-Navigation">
        <div class="footer__nav-col">
          <p class="footer__nav-heading">Website</p>
          <ul>
            <li><a href="#start" class="footer__nav-link">Start</a></li>
            <li><a href="#referenzen" class="footer__nav-link">Referenzen</a></li>
            <li><a href="#angebot" class="footer__nav-link">Angebot</a></li>
            <li><a href="#ablauf" class="footer__nav-link">Ablauf</a></li>
            <li><a href="#kontakt" class="footer__nav-link">Kontakt</a></li>
          </ul>
        </div>
        <div class="footer__nav-col">
          <p class="footer__nav-heading">Rechtliches</p>
          <ul>
            <li>
              <a href="#impressum" class="footer__nav-link" @click.prevent="showLegal('impressum')">Impressum</a>
            </li>
            <li>
              <a href="#datenschutz" class="footer__nav-link" @click.prevent="showLegal('datenschutz')">Datenschutz</a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Mini CTA -->
      <div class="footer__cta">
        <p class="footer__cta-eyebrow">
          <span class="footer__cta-dot" aria-hidden="true"></span>
          Verfügbar für neue Projekte
        </p>
        <p class="footer__cta-text">Starten Sie mit einer kostenlosen Vorschau Ihrer Website.</p>
        <a href="#kontakt" class="btn btn-primary footer__cta-btn">
          Gratis anfragen
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

    </div>

    <!-- Legal modals -->
    <div v-if="legalOpen" class="legal-backdrop" role="dialog" :aria-label="legalTitle" @click.self="legalOpen = null">
      <div class="legal-modal">
        <div class="legal-modal__header">
          <h2 class="legal-modal__title">{{ legalTitle }}</h2>
          <button class="legal-modal__close" @click="legalOpen = null" aria-label="Schließen">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="legal-modal__body">
          <template v-if="legalOpen === 'impressum'">
            <div class="legal-notice">
              Dieser Text ist ein Platzhalter und muss noch durch vollständige
              rechtliche Angaben ersetzt werden.
            </div>
            <h3>Angaben gemäß § 5 ECG</h3>
            <p><strong>Name:</strong> Leon Rohrer</p>
            <p><strong>Adresse:</strong> [Straße, PLZ, Ort] — bitte ergänzen</p>
            <p><strong>E-Mail:</strong> kontakt@leonrohrer.at</p>
            <p><strong>Telefon:</strong> +43 XXX XXXXXXX — bitte ergänzen</p>
            <p style="margin-top:1rem"><em>Hinweis: Dieses Impressum ist unvollständig und muss vor Veröffentlichung durch einen vollständigen, rechtskonformen Text ersetzt werden.</em></p>
          </template>

          <template v-if="legalOpen === 'datenschutz'">
            <div class="legal-notice">
              Dieser Text ist ein Platzhalter und muss noch durch eine vollständige
              Datenschutzerklärung ersetzt werden.
            </div>
            <h3>Datenschutzerklärung</h3>
            <p>Diese Website verarbeitet personenbezogene Daten gemäß der Datenschutz-Grundverordnung (DSGVO).</p>
            <p style="margin-top:1rem"><em>Hinweis: Diese Datenschutzerklärung ist unvollständig. Bitte eine DSGVO-konforme Erklärung durch einen Rechtsanwalt oder einen geprüften Generator erstellen lassen.</em></p>
          </template>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copy">
          &copy; {{ year }} Leon Rohrer Webdesign · Innsbruck / Tirol
        </p>
        <p class="footer__credit">
          <span class="footer__credit-mono">handcrafted</span>
          mit Vue 3 &amp; Vite
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

const year = new Date().getFullYear()
const legalOpen = ref(null)
const legalTitle = computed(() =>
  legalOpen.value === 'impressum' ? 'Impressum' : 'Datenschutz'
)
function showLegal(page) { legalOpen.value = page }
</script>

<style scoped>
.footer {
  background: var(--grad-dark);
  color: rgba(255,255,255,.7);
  position: relative;
  overflow: hidden;
}
.footer__bg { position: absolute; inset: 0; pointer-events: none; }
.footer__glow {
  position: absolute;
  width: 600px; height: 600px;
  top: -200px; left: -150px;
  background: radial-gradient(circle, rgba(249,115,22,.18), transparent 70%);
  filter: blur(60px);
}

.footer__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-top: 4rem;
  padding-bottom: 3rem;
}
@media (min-width: 720px) {
  .footer__inner { grid-template-columns: 1.5fr 1fr 1fr; gap: 2.5rem; }
}

/* Brand */
.footer__brand-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 1rem;
}
.footer__mark {
  width: 36px; height: 36px;
  border-radius: var(--radius-lg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px -4px rgba(249,115,22,.5);
}
.footer__brand-name {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0;
  color: #fff;
}
.footer__brand-name span {
  background: var(--grad-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
.footer__brand-tagline {
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 1.5rem;
  max-width: 420px;
  color: rgba(255,255,255,.6);
}
.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.footer__contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.88rem;
  color: rgba(255,255,255,.65);
  transition: color 0.2s;
}
.footer__contact-link:hover { color: #fff; }
.footer__contact-link svg { color: var(--color-accent); }

/* Nav */
.footer__nav { display: contents; }
@media (min-width: 540px) {
  .footer__nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
@media (min-width: 720px) {
  .footer__nav { display: contents; }
}
.footer__nav-heading {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(255,255,255,.4);
  letter-spacing: 0;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.footer__nav-col ul { display: flex; flex-direction: column; gap: 0.6rem; }
.footer__nav-link {
  font-size: 0.92rem;
  color: rgba(255,255,255,.7);
  transition: color 0.2s, padding 0.2s;
}
.footer__nav-link:hover { color: #fff; padding-left: 4px; }

/* CTA block */
.footer__cta {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}
.footer__cta-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: rgba(255,255,255,.7);
  text-transform: uppercase;
  letter-spacing: 0;
}
.footer__cta-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #22C55E;
  box-shadow: 0 0 0 4px rgba(34,197,94,.18);
}
.footer__cta-text {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0;
  color: #fff;
  line-height: 1.4;
}
.footer__cta-btn { padding: 0.7rem 1.2rem; min-height: 42px; font-size: 0.9rem; }

/* Bottom */
.footer__bottom {
  position: relative;
  border-top: 1px solid rgba(255,255,255,.08);
  padding: 1.25rem 0;
}
.footer__bottom-inner {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  text-align: center;
}
@media (min-width: 600px) {
  .footer__bottom-inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}
.footer__copy { font-size: 0.78rem; color: rgba(255,255,255,.4); }
.footer__credit {
  font-size: 0.78rem;
  color: rgba(255,255,255,.4);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.footer__credit-mono {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 0.18rem 0.55rem;
  background: rgba(255,255,255,.06);
  border-radius: var(--radius-sm);
  color: rgba(255,255,255,.7);
}

/* Legal modal */
.legal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.55);
  backdrop-filter: blur(4px);
  z-index: 200;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
  animation: fade .2s ease;
}
@keyframes fade { from { opacity: 0 } to { opacity: 1 } }
@media (min-width: 640px) { .legal-backdrop { align-items: center; } }
.legal-modal {
  background: var(--color-surface);
  color: var(--color-text);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  width: 100%;
  max-width: 640px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slide .25s cubic-bezier(.2,.7,.2,1);
}
@keyframes slide { from { transform: translateY(20px); opacity:0 } to { transform: translateY(0); opacity:1 } }
@media (min-width: 640px) { .legal-modal { border-radius: var(--radius-lg); } }
.legal-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--color-border);
}
.legal-modal__title { font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; }
.legal-modal__close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-secondary);
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  transition: background .2s, color .2s;
}
.legal-modal__close:hover { background: var(--color-bg-alt); color: var(--color-text); }
.legal-modal__body {
  padding: 1.5rem;
  overflow-y: auto;
  font-size: 0.92rem;
  line-height: 1.7;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.legal-notice {
  background: #FEF3C7;
  color: #92400E;
  border-radius: var(--radius-sm);
  padding: 0.875rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Dark poster footer */
.footer {
  background:
    linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    var(--color-bg);
  background-size: 72px 72px;
  border-top: 1px solid var(--color-border);
}

.footer__glow {
  display: none;
}

.footer__mark {
  border-radius: var(--radius-md);
}

.footer__brand-name,
.footer__brand-name span,
.footer__nav-heading,
.footer__cta-eyebrow,
.footer__cta-text,
.footer__credit-mono,
.legal-modal__title {
  letter-spacing: 0;
}

.footer__brand-name span {
  color: var(--color-accent);
  -webkit-text-fill-color: currentColor;
  background: none;
}

.footer__cta {
  background: var(--color-accent);
  color: #07120f;
  border: 0;
  border-radius: var(--radius-lg);
}

.footer__cta-eyebrow,
.footer__cta-text {
  color: #07120f;
}

.footer__cta-dot {
  background: #07120f;
  box-shadow: none;
}

.footer__cta-btn {
  background: #07120f;
  border-color: #07120f;
  color: var(--color-text);
  box-shadow: none;
}

.footer__credit-mono {
  border-radius: var(--radius-sm);
}

.legal-modal {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}

.legal-modal__header {
  border-bottom-color: var(--color-border);
}

.legal-modal__close:hover {
  background: rgba(255,255,255,.06);
}
</style>


<template>
  <section class="section offer">
    <div class="container">
      <div class="offer__header reveal">
        <p class="section-label">Angebot &amp; Preis</p>
        <h2 class="section-title">
          <span class="text-grad">ab&nbsp;695&nbsp;€</span> Startpreis — klar, fair, ohne Risiko.
        </h2>
        <p class="section-subtitle">
          Sie sehen <strong>zuerst die Vorschau Ihrer neuen Website</strong>.
          Erst wenn der Entwurf wirklich überzeugt, geht es in die Umsetzung.
        </p>
      </div>

      <div class="offer__layout">

        <!-- Price card -->
        <div class="offer__price-card reveal">
          <div class="offer__glow" aria-hidden="true"></div>

          <p class="offer__price-eyebrow">
            <span class="offer__price-dot" aria-hidden="true"></span>
            Komplett-Paket
          </p>

          <div class="offer__price-tag">
            <span class="offer__price-prefix">ab</span>
            <span class="offer__price-amount">695</span>
            <span class="offer__price-currency">€</span>
          </div>
          <p class="offer__price-sub">einmaliger Startpreis</p>

          <ul class="offer__price-points">
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
              Gratis Vorschau vorab
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
              Zahlung erst bei Gefallen
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
              Keine versteckten Kosten
            </li>
          </ul>

          <a href="#kontakt" class="btn btn-primary offer__cta">
            Gratis Vorschau anfragen
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>

          <p class="offer__risk-note">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Kein Risiko · Keine Verpflichtung
          </p>
        </div>

        <!-- Lists -->
        <div class="offer__lists reveal" style="transition-delay:.1s">
          <div class="offer__list-block">
            <h3 class="offer__list-title">
              <span class="offer__list-icon offer__list-icon--yes" aria-hidden="true">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
              </span>
              Inkludiert
            </h3>
            <ul class="offer__list">
              <li v-for="item in included" :key="item" class="offer__list-item offer__list-item--yes">
                <svg class="offer__check" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="offer__list-block">
            <h3 class="offer__list-title">
              <span class="offer__list-icon offer__list-icon--no" aria-hidden="true">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
              </span>
              Nicht inkludiert
            </h3>
            <ul class="offer__list">
              <li v-for="item in notIncluded" :key="item" class="offer__list-item offer__list-item--no">
                <svg class="offer__check" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18L18 6M6 6l12 12"/></svg>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="offer__list-block">
            <h3 class="offer__list-title">
              <span class="offer__list-icon offer__list-icon--optional" aria-hidden="true">
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
              </span>
              Optionale Erweiterungen
            </h3>
            <ul class="offer__list">
              <li v-for="item in optionalExtensions" :key="item" class="offer__list-item offer__list-item--optional">
                <svg class="offer__check" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
                {{ item }}
              </li>
            </ul>
          </div>

          <p class="offer__disclaimer">
            Der Startpreis gilt für einfache Unternehmenswebsites. Erweiterte Funktionen
            wie Shops, Buchungssysteme oder Kundenbereiche kann ich separat anbieten.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const included = [
  'Moderne Unternehmenswebsite',
  'Mobil optimiert (Smartphone, Tablet, Desktop)',
  'Bis zu 5 Inhaltsbereiche',
  'Einbindung Ihrer Texte, Bilder, Logo & Farben',
  'Kontaktbereich oder -formular',
  'Telefon, E-Mail, WhatsApp & Google Maps direkt verlinkt',
  'Veröffentlichung auf Ihrem bestehenden Hosting (Zugangsdaten stellen Sie bereit)',
  'Impressum, Datenschutzerklärung & DSGVO-konformer Cookie-Hinweis',
  'Grundlegende SEO-Optimierung',
  'Kostenlose Vorschau + gemeinsame Verfeinerung bis zur Abnahme',
]

const notIncluded = [
  'Domainkosten',
  'Online-Shop',
  'Buchungssysteme',
  'Login-Systeme & Kundenbereiche',
  'Professionelle Fotos oder Logos',
  'Garantierte Google-Platzierungen',
  'Größere Änderungen nach Veröffentlichung',
]

const optionalExtensions = [
  'Hosting & Wartung bei mir: ab €19/Monat — schnelles Hosting, SSL-Zertifikat, monatliche Updates, automatische Backups',
  'Zusätzlicher Inhaltsbereich (über die 5 hinaus): €80',
  'Einfaches Logo-Design: €100',
  'Online-Shop, Buchungssystem, Mehrsprachigkeit etc.: nach Aufwand, separate Offerte auf Anfrage',
]
</script>

<style scoped>
.offer {
  background: var(--color-bg);
  position: relative;
}
.offer__header {
  max-width: 720px;
  margin-bottom: 3.5rem;
}
.offer__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}
@media (min-width: 920px) {
  .offer__layout {
    grid-template-columns: 340px 1fr;
    gap: 3rem;
  }
}

/* Price card */
.offer__price-card {
  position: relative;
  background: var(--grad-dark);
  color: #fff;
  border-radius: var(--radius-xl);
  padding: 2.25rem 1.85rem 1.85rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.06);
  box-shadow: var(--shadow-lg);
}
@media (min-width: 920px) {
  .offer__price-card {
    position: sticky;
    top: 96px;
  }
}
.offer__glow {
  position: absolute;
  width: 240px; height: 240px;
  top: -60px; right: -60px;
  background: radial-gradient(circle, rgba(249,115,22,.55), transparent 70%);
  filter: blur(40px);
  pointer-events: none;
}
.offer__price-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0;
  color: rgba(255,255,255,.7);
  padding: 0.3rem 0.7rem;
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.1);
  border-radius: var(--radius-sm);
  position: relative;
  z-index: 1;
}
.offer__price-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 0 4px rgba(249,115,22,.22);
}
.offer__price-tag {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  position: relative;
  z-index: 1;
}
.offer__price-prefix {
  font-family: var(--font-display);
  font-size: 1.45rem;
  font-weight: 700;
  color: rgba(255,255,255,.82);
  letter-spacing: 0;
}
.offer__price-amount {
  font-family: var(--font-display);
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1;
  background: var(--grad-accent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
.offer__price-currency {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 600;
  color: rgba(255,255,255,.85);
}
.offer__price-sub {
  font-size: 0.88rem;
  color: rgba(255,255,255,.55);
  margin-top: -0.25rem;
}
.offer__price-points {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  margin: 0.5rem 0 0.75rem;
  font-size: 0.9rem;
  color: rgba(255,255,255,.85);
  position: relative;
  z-index: 1;
}
.offer__price-points li {
  display: flex; align-items: center; gap: 0.55rem;
}
.offer__price-points svg { color: var(--color-accent); flex-shrink: 0; }

.offer__cta {
  width: 100%;
  justify-content: center;
  position: relative;
  z-index: 1;
}
.offer__risk-note {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  color: rgba(255,255,255,.5);
  position: relative;
  z-index: 1;
}

/* Lists */
.offer__lists {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2rem 1.75rem;
  box-shadow: var(--shadow-xs);
}
.offer__list-title {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: 1rem;
  color: var(--color-text);
}
.offer__list-icon {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.offer__list-icon--yes { background: #DCFCE7; color: #16A34A; }
.offer__list-icon--no  { background: #FEE2E2; color: #DC2626; }
.offer__list-icon--optional { background: #FEF3C7; color: #D97706; }

.offer__list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.offer__list-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.93rem;
  line-height: 1.55;
}
.offer__list-item--yes { color: var(--color-text); }
.offer__list-item--no  { color: var(--color-muted); text-decoration: line-through; text-decoration-color: rgba(220,38,38,.25); }
.offer__list-item--optional { color: var(--color-text); }
.offer__check {
  flex-shrink: 0;
  margin-top: 2px;
}
.offer__list-item--yes .offer__check { color: #16A34A; }
.offer__list-item--no  .offer__check { color: #DC2626; }
.offer__list-item--optional .offer__check { color: #D97706; }

.offer__disclaimer {
  font-size: 0.8rem;
  color: var(--color-muted);
  line-height: 1.65;
  border-top: 1px solid var(--color-border-soft);
  padding-top: 1.25rem;
}

/* Poster-style sales block */
.offer {
  background:
    linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    var(--color-bg);
  background-size: 72px 72px;
}

.offer__header {
  max-width: 780px;
}

@media (min-width: 920px) {
  .offer__layout {
    grid-template-columns: 390px 1fr;
  }
}

.offer__price-card {
  background: var(--color-accent);
  color: #07120f;
  border: 0;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-accent);
}

.offer__glow {
  display: none;
}

.offer__price-eyebrow {
  color: #07120f;
  background: rgba(7, 18, 15, .08);
  border-color: rgba(7, 18, 15, .16);
  border-radius: var(--radius-sm);
  letter-spacing: 0;
}

.offer__price-dot {
  background: #07120f;
  box-shadow: none;
}

.offer__price-prefix,
.offer__price-currency,
.offer__price-sub,
.offer__price-points,
.offer__risk-note {
  color: #07120f;
}

.offer__price-amount {
  color: #07120f;
  -webkit-text-fill-color: #07120f;
  background: none;
}

.offer__price-points svg,
.offer__risk-note svg {
  color: #07120f;
}

.offer__cta {
  background: #07120f;
  border-color: #07120f;
  color: var(--color-text);
  box-shadow: none;
}

.offer__cta:hover {
  background: #12231c;
  border-color: #12231c;
}

.offer__lists {
  background: rgba(16, 28, 23, .72);
  border-color: var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.offer__list-title,
.offer__price-amount,
.offer__price-prefix {
  letter-spacing: 0;
}

.offer__list-icon {
  border-radius: var(--radius-sm);
}

.offer__list-icon--yes {
  background: rgba(255, 151, 0, .14);
  color: var(--color-accent);
}

.offer__list-icon--no {
  background: rgba(255, 255, 255, .05);
  color: var(--color-muted);
}

.offer__list-icon--optional {
  background: rgba(255, 151, 0, .14);
  color: var(--color-accent);
}

.offer__list-item--no {
  text-decoration-color: rgba(117, 131, 123, .45);
}

.offer__list-item--yes .offer__check {
  color: var(--color-accent);
}

.offer__list-item--no .offer__check {
  color: var(--color-muted);
}

.offer__list-item--optional .offer__check {
  color: var(--color-accent);
}
</style>


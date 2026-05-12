<template>
  <section class="section benefits">
    <div class="container">
      <div class="benefits__header reveal">
        <p class="section-label">Warum eine Website?</p>
        <h2 class="section-title">
          Ihr erster Eindruck zählt — <span class="text-grad">auch online.</span>
        </h2>
        <p class="section-subtitle">
          Kunden googeln, scrollen, vergleichen — bevor sie anrufen. Eine moderne
          Website schafft Vertrauen in Sekunden und macht Kontakt aufnehmen so
          einfach wie einen Klick.
        </p>
      </div>

      <div class="benefits__grid">
        <article
          v-for="(item, i) in benefits"
          :key="item.title"
          class="benefit-card reveal"
          :style="{ transitionDelay: (i * 0.06) + 's' }"
        >
          <div class="benefit-card__top">
            <div class="benefit-card__icon" aria-hidden="true" v-html="item.icon"></div>
            <span class="benefit-card__index" aria-hidden="true">{{ String(i + 1).padStart(2,'0') }}</span>
          </div>
          <h3 class="benefit-card__title">{{ item.title }}</h3>
          <p class="benefit-card__text">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: 'Professioneller erster Eindruck',
    text: 'Ein modernes Design vermittelt sofort Kompetenz und Seriosität — bevor jemand mit Ihnen spricht.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
  },
  {
    title: 'Lokal gefunden werden',
    text: 'Optimiert für Google — damit Kunden Sie genau dann finden, wenn sie in Innsbruck nach Ihrem Angebot suchen.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
  },
  {
    title: 'Ein-Klick-Kontakt',
    text: 'Telefon, E-Mail, WhatsApp und Google Maps — direkt auf der Website. Kunden erreichen Sie ohne Umwege.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"/></svg>`,
  },
  {
    title: 'Vertrauen durch Design',
    text: 'Ein zeitgemäßes Erscheinungsbild signalisiert: Hier ist jemand, der sein Handwerk versteht.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  },
  {
    title: 'Perfekt am Smartphone',
    text: 'Über 70 % aller Besucher kommen mobil. Jede Seite, die ich baue, fühlt sich auf jedem Gerät richtig an.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
  },
  {
    title: '24/7 für Sie erreichbar',
    text: 'Ihre Website arbeitet rund um die Uhr — auch wenn das Geschäft geschlossen ist, läuft sie weiter.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  },
]
</script>

<style scoped>
.benefits {
  background: var(--color-bg);
  position: relative;
}
.benefits::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(900px 400px at 50% 0%, rgba(249,115,22,.05), transparent 60%);
  pointer-events: none;
}
.benefits__header {
  max-width: 720px;
  margin-bottom: 3.5rem;
}
.benefits__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}
@media (min-width: 600px) {
  .benefits__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 960px) {
  .benefits__grid { grid-template-columns: repeat(3, 1fr); }
}

.benefit-card {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  box-shadow: var(--shadow-xs);
  transition: box-shadow var(--transition), transform var(--transition), border-color var(--transition);
  overflow: hidden;
}
.benefit-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--grad-accent);
  opacity: 0;
  transition: opacity var(--transition);
  pointer-events: none;
  border-radius: inherit;
  -webkit-mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
          mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
  -webkit-mask-composite: xor;
          mask-composite: exclude;
  padding: 1.5px;
}
.benefit-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
  border-color: transparent;
}
.benefit-card:hover::after { opacity: 1; }

.benefit-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}
.benefit-card__icon {
  width: 52px;
  height: 52px;
  background: var(--grad-accent-soft);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  transition: transform var(--transition);
}
.benefit-card:hover .benefit-card__icon { transform: scale(1.05) rotate(-3deg); }
.benefit-card__index {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--color-muted);
  letter-spacing: 0;
}
.benefit-card__title {
  font-family: var(--font-display);
  font-size: 1.12rem;
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}
.benefit-card__text {
  font-size: 0.94rem;
  color: var(--color-secondary);
  line-height: 1.65;
}

/* Dark poster section */
.benefits {
  background: var(--color-bg);
}

.benefits::before {
  display: none;
}

.benefit-card {
  background: rgba(16, 28, 23, .76);
  border-color: var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
}

.benefit-card::after {
  display: none;
}

.benefit-card:hover {
  box-shadow: var(--shadow-md);
  border-color: rgba(255, 151, 0, .38);
}

.benefit-card__icon {
  background: rgba(255, 151, 0, .12);
  border: 1px solid rgba(255, 151, 0, .22);
  border-radius: var(--radius-md);
  color: var(--color-accent);
}

.benefit-card__index,
.benefit-card__title {
  letter-spacing: 0;
}
</style>


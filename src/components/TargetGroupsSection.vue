<template>
  <section class="section target-groups">
    <div class="container">
      <div class="target-groups__header reveal">
        <p class="section-label">Für wen?</p>
        <h2 class="section-title">
          Gemacht für <span class="text-grad">lokale Unternehmen.</span>
        </h2>
        <p class="section-subtitle">
          Jedes lokale Unternehmen verdient eine gute Online-Präsenz —
          egal ob Restaurant, Praxis oder Handwerksbetrieb.
        </p>
      </div>

      <div class="target-groups__grid">
        <div
          v-for="(group, i) in groups"
          :key="group.title"
          class="target-card reveal"
          :style="{ transitionDelay: (i * 0.06) + 's' }"
        >
          <div class="target-card__icon" aria-hidden="true" v-html="group.icon"></div>
          <div>
            <h3 class="target-card__title">{{ group.title }}</h3>
            <p class="target-card__text">{{ group.text }}</p>
          </div>
        </div>
      </div>

      <div class="target-groups__cta reveal">
        <div class="target-groups__cta-content">
          <p class="target-groups__cta-eyebrow">
            <span class="target-groups__cta-dot" aria-hidden="true"></span>
            Ihr Bereich nicht dabei?
          </p>
          <p class="target-groups__cta-text">
            Kein Problem — ich helfe auch gerne bei anderen Projekten weiter.
          </p>
        </div>
        <a href="#kontakt" class="btn btn-primary">
          Einfach fragen
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const groups = [
  {
    title: 'Restaurants & Cafés',
    text: 'Speisekarte, Öffnungszeiten, Reservierung und Wegbeschreibung — alles auf einer modernen Website.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2H17v6h4v-2M17 22h4M17 12h4"/></svg>`,
  },
  {
    title: 'Handwerksbetriebe',
    text: 'Leistungen, Referenzfotos, Einzugsgebiet und Kontakt — für Maler, Elektriker, Tischler & Co.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  },
  {
    title: 'Praxen & Therapeuten',
    text: 'Schwerpunkte, Behandlungen, Standort und Terminvereinbarung — seriös und vertrauenswürdig.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  },
  {
    title: 'Kleine Geschäfte',
    text: 'Sortiment, Öffnungszeiten und Anfahrt — damit Kunden Sie leicht finden und sich informieren können.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  },
  {
    title: 'Dienstleister',
    text: 'Beratung, Coaching, Reinigung, Pflege — zeigen Sie klar, was Sie anbieten und wie man Sie erreicht.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  },
  {
    title: 'Vereine & Projekte',
    text: 'Veranstaltungen, Mitglieder, Ziele und Kontakt — für Sportvereine, Kultur und gemeinnützige Initiativen.',
    icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>`,
  },
]
</script>

<style scoped>
.target-groups { background: var(--color-bg); }
.target-groups__header {
  max-width: 720px;
  margin-bottom: 3rem;
}
.target-groups__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2.5rem;
}
@media (min-width: 600px) {
  .target-groups__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 960px) {
  .target-groups__grid { grid-template-columns: repeat(3, 1fr); }
}

.target-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.5rem 1.5rem 1.5rem 1.25rem;
  box-shadow: var(--shadow-xs);
  transition: box-shadow var(--transition), transform var(--transition), border-color var(--transition);
}
.target-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
  border-color: #DDE2EC;
}
.target-card__icon {
  width: 44px;
  height: 44px;
  background: var(--grad-accent-soft);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  flex-shrink: 0;
}
.target-card__title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0;
  color: var(--color-text);
  margin-bottom: 0.35rem;
}
.target-card__text {
  font-size: 0.88rem;
  color: var(--color-secondary);
  line-height: 1.6;
}

.target-groups__cta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.75rem 1.85rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
}
.target-groups__cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(400px 200px at 0% 100%, rgba(249,115,22,.07), transparent 60%);
  pointer-events: none;
}
@media (min-width: 720px) {
  .target-groups__cta {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
.target-groups__cta-content { position: relative; }
.target-groups__cta-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0;
  margin-bottom: 0.25rem;
}
.target-groups__cta-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 0 4px rgba(249,115,22,.18);
}
.target-groups__cta-text {
  font-family: var(--font-display);
  font-size: 1.08rem;
  font-weight: 600;
  letter-spacing: 0;
  color: var(--color-text);
  max-width: 480px;
}

/* Dark local-business grid */
.target-groups {
  background: var(--color-bg-alt);
}

.target-card {
  background: rgba(16, 28, 23, .8);
  border-color: var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
}

.target-card:hover {
  box-shadow: var(--shadow-md);
  border-color: rgba(255, 151, 0, .38);
}

.target-card__icon {
  background: rgba(255, 151, 0, .12);
  border: 1px solid rgba(255, 151, 0, .22);
  border-radius: var(--radius-md);
}

.target-card__title,
.target-groups__cta-eyebrow,
.target-groups__cta-text {
  letter-spacing: 0;
}

.target-groups__cta {
  background: #101c17;
  border-color: var(--color-border);
  border-radius: var(--radius-lg);
}

.target-groups__cta::before {
  display: none;
}
</style>


<template>
  <section class="section process">
    <div class="container">
      <div class="process__header reveal">
        <p class="section-label">So funktioniert es</p>
        <h2 class="section-title">
          In <span class="text-grad">vier Schritten</span> zur fertigen Website.
        </h2>
        <p class="section-subtitle">
          Klar, transparent und ohne Überraschungen — von der ersten Anfrage
          bis zur veröffentlichten Website.
        </p>
      </div>

      <ol class="process__steps">
        <li
          v-for="(step, i) in steps"
          :key="step.title"
          class="process__step reveal"
          :style="{ transitionDelay: (i * 0.1) + 's' }"
        >
          <div class="process__step-number" aria-hidden="true">
            <span>{{ String(i + 1).padStart(2,'0') }}</span>
          </div>
          <div class="process__step-content">
            <p class="process__step-eyebrow">{{ step.eyebrow }}</p>
            <h3 class="process__step-title">{{ step.title }}</h3>
            <p class="process__step-text">{{ step.text }}</p>
          </div>
        </li>
      </ol>

      <div class="process__cta reveal">
        <div class="process__cta-text">
          <h3 class="process__cta-title">Bereit für eine eigene Website?</h3>
          <p>Schreiben Sie mir kurz — die Vorschau ist kostenlos und unverbindlich.</p>
        </div>
        <a href="#kontakt" class="btn btn-primary">
          Jetzt kostenlos anfragen
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    eyebrow: 'Schritt 1',
    title: 'Anfrage senden',
    text: 'Sie schreiben mir kurz, welche Art von Website Sie brauchen — per WhatsApp, Telefon oder E-Mail, ganz wie Sie möchten.',
  },
  {
    eyebrow: 'Schritt 2',
    title: 'Gratis Vorschau erhalten',
    text: 'Ich erstelle einen ersten Entwurf, damit Sie sehen, wie Ihre neue Website aussehen könnte. Völlig kostenlos und unverbindlich.',
  },
  {
    eyebrow: 'Schritt 3',
    title: 'Entscheiden',
    text: 'Gefällt der Entwurf? Dann geht es in die finale Umsetzung. Wenn nicht: keine Kosten, kein Aufwand für Sie.',
  },
  {
    eyebrow: 'Schritt 4',
    title: 'Online gehen',
    text: 'Nach Ihrer finalen Freigabe wird die Website unter Ihrer Domain veröffentlicht — fertig, sichtbar, online.',
  },
]
</script>

<style scoped>
.process {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-soft);
  border-bottom: 1px solid var(--color-border-soft);
  position: relative;
}
.process::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(900px 360px at 80% 100%, rgba(244,63,94,.05), transparent 60%),
    radial-gradient(700px 300px at 10% 0%, rgba(249,115,22,.05), transparent 60%);
  pointer-events: none;
}
.process > * { position: relative; }

.process__header {
  max-width: 720px;
  margin-bottom: 3.5rem;
}

.process__steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  max-width: 800px;
  margin-bottom: 3rem;
  counter-reset: step;
}
.process__step {
  display: grid;
  grid-template-columns: 76px 1fr;
  gap: 1.5rem;
  position: relative;
  padding-bottom: 2.5rem;
}
.process__step:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 36px;
  top: 76px;
  bottom: -12px;
  width: 2px;
  background: linear-gradient(180deg, rgba(249,115,22,.4), rgba(244,63,94,.0));
}
.process__step:last-child { padding-bottom: 0; }

.process__step-number {
  width: 72px; height: 72px;
  border-radius: var(--radius-lg);
  background: var(--grad-accent);
  color: #fff;
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow:
    0 12px 24px -8px rgba(249,115,22,.5),
    inset 0 0 0 1px rgba(255,255,255,.15);
}
.process__step-number::before {
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: var(--radius-lg);
  border: 1px dashed rgba(249,115,22,.35);
  opacity: 0;
  transition: opacity var(--transition);
}
.process__step:hover .process__step-number::before { opacity: 1; }

.process__step-content {
  padding-top: 0.65rem;
}
.process__step-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0;
  margin-bottom: 0.4rem;
}
.process__step-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0;
  color: var(--color-text);
  margin-bottom: 0.55rem;
}
.process__step-text {
  font-size: 0.98rem;
  color: var(--color-secondary);
  line-height: 1.65;
}

.process__cta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 2rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  max-width: 800px;
}
@media (min-width: 640px) {
  .process__cta {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2.25rem;
  }
}
.process__cta-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: 0.3rem;
  color: var(--color-text);
}
.process__cta-text p {
  font-size: 0.95rem;
  color: var(--color-secondary);
}

/* Dark editorial process */
.process {
  background: var(--color-bg);
  border-color: var(--color-border-soft);
}

.process::before {
  display: none;
}

.process__steps {
  max-width: 100%;
}

@media (min-width: 900px) {
  .process__steps {
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border-soft);
  }

  .process__step {
    grid-template-columns: 1fr;
    padding: 1.5rem 1.2rem 1.65rem;
    border-right: 1px solid var(--color-border-soft);
  }

  .process__step:last-child {
    border-right: 0;
  }

  .process__step:not(:last-child)::before {
    display: none;
  }
}

.process__step-number {
  width: auto;
  height: auto;
  justify-content: flex-start;
  background: transparent;
  color: var(--color-accent);
  box-shadow: none;
  border-radius: 0;
}

.process__step-number::before {
  display: none;
}

.process__step-eyebrow,
.process__step-title,
.process__cta-title {
  letter-spacing: 0;
}

.process__step-eyebrow {
  color: var(--color-accent);
}

.process__cta {
  background: var(--color-accent);
  color: #07120f;
  border: 0;
  border-radius: var(--radius-lg);
}

.process__cta-title,
.process__cta-text p {
  color: #07120f;
}

.process__cta .btn-primary {
  background: #07120f;
  border-color: #07120f;
  color: var(--color-text);
  box-shadow: none;
}
</style>


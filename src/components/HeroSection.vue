<template>
  <section class="hero">
    <div class="hero__bg" aria-hidden="true"></div>

    <div class="container hero__inner">
      <div class="hero__content">
        <a href="#angebot" class="hero__eyebrow">
          Webdesign · Innsbruck
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>

        <h1 class="hero__headline">
          Ihre neue<br />
          Website.
        </h1>

        <p class="hero__decision">Erst sehen. Dann entscheiden.</p>

        <p class="hero__sub">
          Maßgeschneiderte Websites für lokale Unternehmen in Tirol.
          Sie bekommen zuerst eine kostenlose Vorschau und zahlen erst, wenn der Entwurf überzeugt.
        </p>

        <div class="hero__offer" aria-label="Angebot">
          <div>
            <p class="hero__offer-label">Gratis Vorschau</p>
            <p class="hero__offer-price">ab 695 € Startpreis</p>
          </div>
          <p class="hero__offer-note">Sie zahlen nur, wenn es Ihnen gefällt.</p>
        </div>

        <div class="hero__ctas">
          <a href="#kontakt" class="btn btn-primary hero__btn-primary">
            Gratis Vorschau anfragen
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#referenzen" class="btn btn-outline">
            Referenzen ansehen
          </a>
        </div>

        <ol class="hero__steps" aria-label="Ablauf">
          <li>
            <span>1</span>
            <strong>Sie melden sich kurz bei mir.</strong>
          </li>
          <li>
            <span>2</span>
            <strong>Ich baue eine Vorschau für Sie.</strong>
          </li>
          <li>
            <span>3</span>
            <strong>Sie entscheiden ohne Druck.</strong>
          </li>
        </ol>
      </div>

      <div class="hero__visual" aria-hidden="true">
        <div class="poster-preview">
          <div class="poster-preview__top">
            <span></span><span></span><span></span>
          </div>
          <div class="poster-preview__hero">
            <div class="poster-preview__copy">
              <span class="line line--short"></span>
              <span class="line line--title"></span>
              <span class="line line--title line--orange"></span>
              <span class="line line--body"></span>
              <span class="line line--body line--small"></span>
            </div>
            <div class="poster-preview__block"></div>
          </div>
          <div class="poster-preview__bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="poster-preview__cards">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="hero__proof">
          <p>Mobile-ready</p>
          <strong>100</strong>
          <span>Performance-Ziel</span>
        </div>
      </div>
    </div>

    <div class="hero__marquee" aria-hidden="true">
      <div class="hero__marquee-track">
        <span v-for="i in 2" :key="i" class="hero__marquee-group">
          <span>Webdesign</span><span>Innsbruck</span><span>Responsive</span><span>SEO-Basics</span><span>WhatsApp</span><span>Hosting</span>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  background: var(--grad-hero-bg);
  background-size: 72px 72px, 72px 72px, auto;
  padding-top: calc(76px + 3rem);
  padding-bottom: 2rem;
  overflow: hidden;
  isolation: isolate;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.hero__bg::before,
.hero__bg::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-border-soft);
}

.hero__bg::before { top: 22%; }
.hero__bg::after { bottom: 18%; }

.hero__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 980px) {
  .hero__inner {
    grid-template-columns: minmax(0, 1.08fr) minmax(360px, .92fr);
    gap: 4rem;
  }
}

.hero__content {
  max-width: 690px;
  min-width: 0;
  width: 100%;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 1.35rem;
  transition: color var(--transition);
}

.hero__eyebrow:hover {
  color: var(--color-accent-2);
}

.hero__headline {
  font-size: 4.1rem;
  line-height: 0.9;
  letter-spacing: 0;
  margin-bottom: 1.1rem;
  color: var(--color-text);
}

.hero__decision {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 1rem;
}

.hero__sub {
  max-width: 620px;
  color: var(--color-secondary);
  font-size: 1rem;
  line-height: 1.72;
  margin-bottom: 1.35rem;
  overflow-wrap: break-word;
}

.hero__offer {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
  align-items: center;
  width: 100%;
  max-width: 620px;
  padding: 1.05rem 1.1rem;
  background: var(--color-accent);
  color: #07120f;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-accent);
  margin-bottom: 1.35rem;
}

.hero__offer-label {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  font-weight: 800;
  line-height: 1.2;
  text-transform: uppercase;
}

.hero__offer-price {
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1.05;
}

.hero__offer-note {
  max-width: 180px;
  justify-self: start;
  font-size: 0.86rem;
  font-weight: 800;
  line-height: 1.18;
}

.hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.35rem;
}

.hero__btn-primary {
  padding-inline: 1.55rem;
}

.hero__steps {
  display: grid;
  grid-template-columns: 1fr;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border-soft);
  max-width: 660px;
  width: 100%;
}

.hero__steps li {
  display: grid;
  gap: 0.4rem;
  padding: 1.05rem 0;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border-soft);
}

.hero__steps li:last-child {
  border-bottom: 0;
}

.hero__steps span {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1;
}

.hero__steps strong {
  display: block;
  max-width: 180px;
  font-size: 0.9rem;
  line-height: 1.28;
  font-weight: 800;
}

.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;
}

.poster-preview {
  width: min(100%, 480px);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: #0b1813;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  transform: rotate(-1.5deg);
}

.poster-preview__top {
  display: flex;
  gap: 5px;
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border-soft);
  background: #101c17;
}

.poster-preview__top span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: rgba(247, 255, 248, 0.35);
}

.poster-preview__hero {
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 1.2rem;
  padding: 1.3rem;
  min-height: 280px;
}

.poster-preview__copy {
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
}

.line {
  display: block;
  border-radius: 2px;
  background: rgba(247, 255, 248, 0.18);
}

.line--short { width: 46%; height: 10px; background: var(--color-accent); }
.line--title { width: 96%; height: 30px; background: var(--color-text); }
.line--orange { width: 72%; background: var(--color-accent); }
.line--body { width: 82%; height: 8px; }
.line--small { width: 56%; }

.poster-preview__block {
  align-self: stretch;
  min-height: 220px;
  border-radius: var(--radius-md);
  background:
    linear-gradient(180deg, rgba(255, 151, 0, 0.92) 0 30%, transparent 30% 100%),
    linear-gradient(90deg, rgba(247, 255, 248, 0.14) 0 45%, transparent 45% 100%),
    #1b2b23;
}

.poster-preview__bars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.65rem;
  padding: 0 1.3rem 1.3rem;
}

.poster-preview__bars span {
  height: 52px;
  border-radius: var(--radius-sm);
  background:
    linear-gradient(180deg, rgba(247, 255, 248, 0.32) 0 8px, transparent 8px),
    linear-gradient(90deg, rgba(255, 151, 0, 0.58) 0 58%, rgba(247, 255, 248, 0.14) 58%),
    #15241d;
}

.poster-preview__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.65rem;
  padding: 0 1.3rem 1.3rem;
}

.poster-preview__cards span {
  height: 78px;
  border: 1px solid var(--color-border-soft);
  border-radius: var(--radius-sm);
  background:
    linear-gradient(180deg, rgba(255, 151, 0, 0.85) 0 34%, transparent 34%),
    #101c17;
}

.hero__proof {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 154px;
  padding: 1rem;
  background: var(--color-accent);
  color: #07120f;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-accent);
}

.hero__proof p,
.hero__proof span {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1.2;
}

.hero__proof strong {
  display: block;
  font-family: var(--font-display);
  font-size: 3.1rem;
  line-height: 0.95;
}

.hero__marquee {
  margin-top: 3rem;
  overflow: hidden;
  border-top: 1px solid var(--color-border-soft);
  border-bottom: 1px solid var(--color-border-soft);
  background: rgba(255, 255, 255, 0.02);
}

.hero__marquee-track {
  display: inline-flex;
  white-space: nowrap;
  animation: marquee 40s linear infinite;
}

.hero__marquee-group {
  display: inline-flex;
  align-items: center;
  gap: 2rem;
  padding: 0.85rem 2rem 0.85rem 0;
  font-family: var(--font-mono);
  font-weight: 800;
  font-size: 0.78rem;
  color: var(--color-muted);
  text-transform: uppercase;
}

.hero__marquee-group span:nth-child(even) {
  color: var(--color-accent);
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (min-width: 620px) {
  .hero__offer {
    grid-template-columns: 1fr auto;
    padding: 1rem 1.3rem;
  }

  .hero__offer-note {
    justify-self: end;
    text-align: right;
  }

  .hero__steps {
    grid-template-columns: repeat(3, 1fr);
  }

  .hero__steps li {
    padding: 1.05rem 1.2rem 1.05rem 0;
    border-bottom: 0;
    border-right: 1px solid var(--color-border-soft);
  }

  .hero__steps li:last-child {
    border-right: 0;
  }
}

@media (min-width: 760px) {
  .hero {
    padding-top: calc(76px + 4.2rem);
  }

  .hero__headline {
    font-size: 6.8rem;
  }

  .hero__decision {
    font-size: 1.55rem;
  }
}

@media (max-width: 979px) {
  .hero__visual {
    order: -1;
    min-height: 320px;
  }

  .poster-preview {
    width: min(100%, 420px);
  }
}

@media (max-width: 560px) {
  .hero {
    padding-top: calc(76px + 2rem);
  }

  .hero__content {
    width: min(330px, 100%);
    max-width: 330px;
  }

  .hero__headline {
    font-size: 3.8rem;
  }

  .hero__sub,
  .hero__offer,
  .hero__ctas,
  .hero__steps {
    width: min(330px, 100%);
    max-width: 330px;
  }

  .hero__ctas .btn {
    width: 100%;
  }

  .hero__visual {
    display: grid;
    justify-items: center;
    gap: 0.8rem;
    min-height: 290px;
    overflow: hidden;
  }

  .poster-preview {
    width: min(100%, 330px);
    transform: none;
  }

  .poster-preview__hero {
    grid-template-columns: 1fr;
    min-height: 210px;
  }

  .poster-preview__block {
    min-height: 92px;
  }

  .poster-preview__bars {
    display: none;
  }

  .poster-preview__cards {
    grid-template-columns: 1fr 1fr;
  }

  .poster-preview__cards span:last-child {
    display: none;
  }

  .hero__proof {
    position: static;
    width: min(100%, 330px);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 0.9rem;
    padding: 0.75rem 0.9rem;
  }

  .hero__proof strong {
    grid-row: span 2;
    font-size: 2.4rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__marquee-track { animation: none; }
}
</style>


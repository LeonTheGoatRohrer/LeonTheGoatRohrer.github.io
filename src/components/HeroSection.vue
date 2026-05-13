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
            <p class="hero__offer-price">ab 695 € exkl. Steuer</p>
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

      <aside class="hero__work" aria-label="Aktuelle Arbeiten">
        <header class="work__header">
          <span class="work__eyebrow">
            <span class="work__dot"></span>
            Live im Einsatz
          </span>
          <span class="work__index">03 · 2026</span>
        </header>

        <h2 class="work__title">Aktuelle Arbeiten</h2>

        <ul class="work__list">
          <li>
            <a href="https://leonthegoatrohrer.github.io/Krone-W-rgl/" target="_blank" rel="noopener noreferrer" class="work__item">
              <span class="work__thumb" aria-hidden="true">
                <img src="/references/wok-mobile.png" alt="" loading="eager" />
              </span>
              <span class="work__meta">
                <span class="work__name">Krone Asia Kufstein</span>
                <span class="work__cat">Gastronomie</span>
              </span>
              <span class="work__arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
                  <path d="M7 17L17 7M9 7h8v8"/>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href="https://leonthegoatrohrer.github.io/Praxis-Lair/" target="_blank" rel="noopener noreferrer" class="work__item">
              <span class="work__thumb" aria-hidden="true">
                <img src="/references/therapiepraxis-mobile.png" alt="" loading="eager" />
              </span>
              <span class="work__meta">
                <span class="work__name">Praxis Lair</span>
                <span class="work__cat">Psychotherapie</span>
              </span>
              <span class="work__arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
                  <path d="M7 17L17 7M9 7h8v8"/>
                </svg>
              </span>
            </a>
          </li>
          <li>
            <a href="https://leonthegoatrohrer.github.io/malermeister-schaetzer-website/" target="_blank" rel="noopener noreferrer" class="work__item">
              <span class="work__thumb" aria-hidden="true">
                <img src="/references/maler-mobile.png" alt="" loading="eager" />
              </span>
              <span class="work__meta">
                <span class="work__name">Schätzer Malermeister</span>
                <span class="work__cat">Handwerk</span>
              </span>
              <span class="work__arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
                  <path d="M7 17L17 7M9 7h8v8"/>
                </svg>
              </span>
            </a>
          </li>
        </ul>

        <a href="#referenzen" class="work__all">
          Alle Referenzen ansehen
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </aside>
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
    grid-template-columns: minmax(0, 1.02fr) minmax(430px, .98fr);
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

/* ===================== HERO WORK CARD ===================== */
.hero__work {
  position: relative;
  width: 100%;
  max-width: 540px;
  justify-self: end;
  align-self: center;
  background: rgba(17, 23, 42, .55);
  border: 1px solid rgba(255, 255, 255, .08);
  border-radius: var(--radius-lg);
  padding: 1.5rem 1.5rem 1.25rem;
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  box-shadow:
    0 30px 60px -20px rgba(0, 0, 0, .45),
    inset 0 1px 0 rgba(255, 255, 255, .06);
  overflow: hidden;
  isolation: isolate;
  animation: workRise .8s cubic-bezier(.2,.7,.2,1) both;
}
.hero__work::before {
  content: '';
  position: absolute;
  inset: -40% -10% auto auto;
  width: 320px; height: 320px;
  background: radial-gradient(closest-side, rgba(255,151,0,.18), transparent 70%);
  filter: blur(20px);
  z-index: -1;
  pointer-events: none;
}
@keyframes workRise {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.work__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.work__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,.75);
}
.work__dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: #22C55E;
  box-shadow: 0 0 0 4px rgba(34,197,94,.18);
  animation: workPulse 2.4s ease-in-out infinite;
}
@keyframes workPulse {
  0%,100% { box-shadow: 0 0 0 4px rgba(34,197,94,.18); }
  50%     { box-shadow: 0 0 0 7px rgba(34,197,94,0); }
}
.work__index {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(255,255,255,.4);
  letter-spacing: 0.04em;
}

.work__title {
  font-family: var(--font-display);
  font-size: 1.65rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  margin: 0 0 1.25rem;
  line-height: 1.05;
}

.work__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  list-style: none;
  padding: 0;
}

.work__item {
  display: grid;
  grid-template-columns: 82px 1fr auto;
  gap: 1rem;
  align-items: center;
  min-height: 128px;
  padding: 0.85rem 0.9rem 0.85rem 0.85rem;
  background: rgba(255, 255, 255, .04);
  border: 1px solid rgba(255, 255, 255, .06);
  border-radius: var(--radius-md);
  color: #fff;
  text-decoration: none;
  transition: background var(--transition), border-color var(--transition), transform var(--transition);
}
.work__item:hover {
  background: rgba(255, 255, 255, .07);
  border-color: rgba(255, 179, 66, .35);
  transform: translateY(-1px);
}

.work__thumb {
  position: relative;
  width: 72px;
  aspect-ratio: 9 / 16;
  padding: 4px;
  border-radius: 17px;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255,255,255,.16), rgba(255,255,255,.03)),
    #07120f;
  border: 1px solid rgba(255,255,255,.14);
  box-shadow:
    0 14px 26px rgba(0,0,0,.34),
    inset 0 0 0 1px rgba(255,255,255,.05);
  flex-shrink: 0;
}

.work__thumb::before {
  content: '';
  position: absolute;
  top: 4px;
  left: 50%;
  z-index: 2;
  width: 22px;
  height: 3px;
  border-radius: 999px;
  background: rgba(255,255,255,.38);
  transform: translateX(-50%);
}

.work__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  border-radius: 13px;
}

.work__meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.work__name {
  font-family: var(--font-display);
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.work__cat {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 600;
  color: rgba(255,255,255,.55);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.work__arrow {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: rgba(255,255,255,.5);
  background: rgba(255,255,255,.04);
  transition: color var(--transition), background var(--transition), transform var(--transition);
}
.work__item:hover .work__arrow {
  color: #FFB342;
  background: rgba(255,179,66,.12);
  transform: translate(2px, -2px);
}

.work__all {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-accent);
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, .06);
  width: 100%;
  justify-content: center;
  margin-top: 0.25rem;
  padding-bottom: 0.25rem;
  transition: color var(--transition);
}
.work__all:hover { color: #FFB342; }
.work__all svg { transition: transform var(--transition); }
.work__all:hover svg { transform: translateX(3px); }

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
  .hero__work { display: none; }
  .hero__inner { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .hero {
    padding-top: calc(76px + 2rem);
  }

  .hero__content {
    width: 100%;
    max-width: 100%;
  }

  .hero__headline {
    font-size: 3.4rem;
  }

  .hero__ctas .btn {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__marquee-track { animation: none; }
}
</style>

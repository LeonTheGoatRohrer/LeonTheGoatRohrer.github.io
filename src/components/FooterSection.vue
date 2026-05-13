<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__bg" aria-hidden="true">
      <div class="footer__glow"></div>
    </div>

    <div class="container footer__inner">

      <!-- Brand -->
      <div class="footer__brand">
        <div class="footer__brand-row">
          <p class="footer__brand-name">
            Leon Rohrer<span class="footer__brand-period" aria-hidden="true">.</span>
          </p>
          <span class="footer__brand-sub">
            <span class="footer__brand-dot" aria-hidden="true"></span>
            Webdesign · Innsbruck
          </span>
        </div>
        <p class="footer__brand-tagline">
          Maßgeschneiderte Websites für lokale Unternehmen in Innsbruck &amp; Tirol —
          mit klarem Startpreis und kostenloser Vorschau.
        </p>
        <div class="footer__contact">
          <a href="tel:+4367762492999" class="footer__contact-link">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"/>
            </svg>
            +43 677 6249 2999
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
            <h3>Angaben gemäß § 5 ECG / § 25 MedienG</h3>
            <p><strong>Name:</strong> Leon Rohrer</p>
            <p><strong>Adresse:</strong> Ulmenstraße 3, 6063 Rum, Tirol, Österreich</p>
            <p><strong>E-Mail:</strong> kontakt@leonrohrer.at</p>
            <p><strong>Telefon:</strong> +43 677 6249 2999</p>
            <p style="margin-top:1rem"><strong>Inhalt &amp; Zweck:</strong> Persönliche Website zur Präsentation freier Webdesign-Projekte.</p>
          </template>

          <template v-if="legalOpen === 'datenschutz'">
            <h3>Datenschutzerklärung</h3>
            <p>Der Schutz Ihrer personenbezogenen Daten ist mir ein wichtiges Anliegen. Diese Erklärung informiert Sie gemäß der Datenschutz-Grundverordnung (DSGVO) sowie dem österreichischen Datenschutzgesetz (DSG) darüber, welche Daten beim Besuch dieser Website verarbeitet werden.</p>

            <h4>1. Verantwortlicher</h4>
            <p>
              Leon Rohrer<br />
              Ulmenstraße 3, 6063 Rum, Tirol, Österreich<br />
              E-Mail: kontakt@leonrohrer.at<br />
              Telefon: +43 677 6249 2999
            </p>

            <h4>2. Zugriffsdaten &amp; Hosting (GitHub Pages)</h4>
            <p>Diese Website wird über <strong>GitHub Pages</strong> (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) ausgeliefert. Bei jedem Aufruf werden technisch notwendige Zugriffsdaten in Server-Logs verarbeitet, insbesondere:</p>
            <ul style="padding-left:1.25rem;list-style:disc">
              <li>anonymisierte IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene URL und übertragene Datenmenge</li>
              <li>Browser, Betriebssystem und Referrer</li>
            </ul>
            <p>Rechtsgrundlage: Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an einer sicheren und stabilen Bereitstellung der Website). Die Übermittlung in die USA erfolgt auf Basis des EU-US Data Privacy Framework, an dem GitHub teilnimmt. Details: <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>.</p>

            <h4>3. Kontaktformular (Formspree)</h4>
            <p>Wenn Sie das Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten (Name, optional Unternehmen, E-Mail oder Telefon, Nachricht) über den Dienst <strong>Formspree</strong> (Formspree Inc., 1411 Garrison Way, Petaluma, CA 94954, USA) an meine E-Mail-Adresse weitergeleitet.</p>
            <p>Verarbeitete Daten:</p>
            <ul style="padding-left:1.25rem;list-style:disc">
              <li>Name</li>
              <li>Unternehmen (optional)</li>
              <li>E-Mail-Adresse oder Telefonnummer</li>
              <li>Nachrichteninhalt</li>
              <li>technische Metadaten (z.&nbsp;B. Zeitpunkt der Absendung)</li>
            </ul>
            <p>Zweck: Bearbeitung Ihrer Anfrage. Rechtsgrundlage: Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (Anbahnung eines Vertragsverhältnisses) bzw. lit.&nbsp;a (Einwilligung durch Absenden des Formulars). Die Übermittlung in die USA stützt sich auf EU-Standardvertragsklauseln. Details: <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Formspree Privacy Policy</a>.</p>
            <p>Speicherdauer: bis zur abschließenden Bearbeitung Ihrer Anfrage, anschließend werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>

            <h4>4. Direktkontakt (E-Mail, Telefon, WhatsApp)</h4>
            <p>Wenn Sie mich per E-Mail, Telefon oder WhatsApp kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und für etwaige Anschlussfragen gespeichert. Rechtsgrundlage: Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO. Bei Nutzung von WhatsApp (WhatsApp Ireland Ltd., bzw. Meta Platforms Ireland) gelten zusätzlich die dortigen Datenschutzbestimmungen. Bitte beachten Sie, dass eine Kontaktaufnahme über WhatsApp freiwillig erfolgt.</p>

            <h4>5. Schriftarten (Google Fonts)</h4>
            <p>Zur einheitlichen Darstellung werden die Schriftarten <em>Inter</em>, <em>Space Grotesk</em> und <em>JetBrains Mono</em> über Google Fonts (Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland) geladen. Dabei wird Ihre IP-Adresse an Google übertragen. Rechtsgrundlage: Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an einem ansprechenden Erscheinungsbild). Details: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Datenschutzerklärung</a>.</p>

            <h4>6. Keine Cookies, kein Tracking, keine Analyse-Tools</h4>
            <p>Diese Website setzt <strong>keine Cookies</strong> und verwendet <strong>keinerlei Analyse-, Tracking- oder Werbe-Dienste</strong> (kein Google Analytics, kein Facebook Pixel etc.). Es findet keine Profilbildung statt.</p>

            <h4>7. Ihre Rechte</h4>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul style="padding-left:1.25rem;list-style:disc">
              <li>Auskunft über Ihre verarbeiteten Daten (Art.&nbsp;15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art.&nbsp;16 DSGVO)</li>
              <li>Löschung („Recht auf Vergessenwerden", Art.&nbsp;17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art.&nbsp;18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art.&nbsp;20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art.&nbsp;21 DSGVO)</li>
              <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft</li>
            </ul>
            <p>Für die Ausübung Ihrer Rechte genügt eine formlose Nachricht an <strong>kontakt@leonrohrer.at</strong>.</p>

            <h4>8. Beschwerderecht</h4>
            <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Behörde in Österreich ist:<br />
            <strong>Österreichische Datenschutzbehörde</strong>, Barichgasse 40–42, 1030 Wien, <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">dsb.gv.at</a></p>

            <h4>9. Änderungen dieser Erklärung</h4>
            <p>Ich behalte mir vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder Änderungen meiner Leistungen widerspiegelt. Für den erneuten Besuch der Website gilt dann die jeweils neue Datenschutzerklärung.</p>

            <p style="margin-top:1.25rem;font-size:.8rem;color:var(--color-muted)">Stand: Mai 2026</p>
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

/* Brand — wordmark */
.footer__brand-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 1.1rem;
  line-height: 1;
}
.footer__brand-name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #fff;
  line-height: 1;
}
.footer__brand-period {
  color: var(--color-accent);
}
.footer__brand-sub {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(255,255,255,.55);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.footer__brand-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #22C55E;
  box-shadow: 0 0 0 3px rgba(34,197,94,.18);
  animation: navDotPulse 2.4s ease-in-out infinite;
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
  gap: 0.6rem;
}
.legal-modal__body h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0.25rem 0 0.5rem;
}
.legal-modal__body h4 {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  margin: 1.1rem 0 0.25rem;
  color: var(--color-text);
}
.legal-modal__body p { font-size: 0.9rem; line-height: 1.65; }
.legal-modal__body ul {
  list-style: disc;
  padding-left: 1.25rem;
  font-size: 0.88rem;
  line-height: 1.6;
}
.legal-modal__body a {
  color: var(--color-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.legal-modal__body a:hover { color: var(--color-accent-h); }
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

.footer__brand-name,
.footer__nav-heading,
.footer__cta-eyebrow,
.footer__cta-text,
.footer__credit-mono,
.legal-modal__title {
  letter-spacing: 0;
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


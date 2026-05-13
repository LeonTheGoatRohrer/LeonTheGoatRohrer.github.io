<template>
  <section class="section contact">
    <div class="contact__bg" aria-hidden="true">
      <div class="contact__glow"></div>
    </div>

    <div class="container">
      <div class="contact__header reveal">
        <p class="section-label">Kontakt</p>
        <h2 class="section-title">
          Lassen Sie uns Ihre <span class="text-grad">Website starten.</span>
        </h2>
        <p class="section-subtitle">
          Schreiben Sie mir kurz, was Ihr Unternehmen macht und welche Website
          Sie brauchen — ich melde mich schnell mit den nächsten Schritten.
        </p>
      </div>

      <div class="contact__layout">

        <!-- Direct contact -->
        <div class="contact__direct reveal">
          <h3 class="contact__direct-title">Direkt Kontakt aufnehmen</h3>

          <div class="contact__buttons">
            <a
              href="https://wa.me/4367762492999?text=Hallo%20Leon%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Website%20f%C3%BCr%20mein%20Unternehmen."
              target="_blank"
              rel="noopener noreferrer"
              class="contact__channel contact__channel--whatsapp"
              aria-label="Leon Rohrer per WhatsApp kontaktieren"
            >
              <span class="contact__channel-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
              <span class="contact__channel-text">
                <span class="contact__channel-label">WhatsApp</span>
                <span class="contact__channel-value">Schreiben Sie mir direkt</span>
              </span>
              <svg class="contact__channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>

            <a
              href="tel:+4367762492999"
              class="contact__channel"
              aria-label="Leon Rohrer anrufen"
            >
              <span class="contact__channel-icon" aria-hidden="true">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"/>
                </svg>
              </span>
              <span class="contact__channel-text">
                <span class="contact__channel-label">Telefon</span>
                <span class="contact__channel-value">+43 677 6249 2999</span>
              </span>
              <svg class="contact__channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>

            <a
              href="mailto:kontakt@leonrohrer.at"
              class="contact__channel"
              aria-label="Leon Rohrer per E-Mail kontaktieren"
            >
              <span class="contact__channel-icon" aria-hidden="true">
                <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </span>
              <span class="contact__channel-text">
                <span class="contact__channel-label">E-Mail</span>
                <span class="contact__channel-value">kontakt@leonrohrer.at</span>
              </span>
              <svg class="contact__channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div class="contact__meta">
            <div class="contact__meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v4l3 3M3 12a9 9 0 1018 0 9 9 0 00-18 0z"/></svg>
              Antwortzeit meist innerhalb von 24 h
            </div>
            <div class="contact__meta-item">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Innsbruck &amp; Umgebung · Tirol
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="contact__form-wrap reveal" style="transition-delay:.12s">
          <div class="contact__form-card">
            <h3 class="contact__form-title">Oder schreiben Sie mir direkt</h3>
            <p class="contact__form-sub">Vier Felder, eine Antwort innerhalb von 24h.</p>

            <form class="contact__form" @submit.prevent="handleSubmit" novalidate>
              <div class="form-group">
                <label for="contact-name" class="form-label">
                  Name <span class="form-required" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  class="form-input"
                  :class="{ 'form-input--invalid': touched && !form.name.trim() }"
                  placeholder="Ihr Name"
                  autocomplete="name"
                  required
                  aria-required="true"
                  :aria-invalid="touched && !form.name.trim()"
                />
              </div>

              <div class="form-group">
                <label for="contact-company" class="form-label">Unternehmen</label>
                <input
                  id="contact-company"
                  v-model="form.company"
                  type="text"
                  class="form-input"
                  placeholder="Name Ihres Unternehmens (optional)"
                  autocomplete="organization"
                />
              </div>

              <div class="form-group">
                <label for="contact-contact" class="form-label">
                  E-Mail oder Telefonnummer <span class="form-required" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-contact"
                  v-model="form.contact"
                  type="text"
                  class="form-input"
                  :class="{ 'form-input--invalid': touched && !form.contact.trim() }"
                  placeholder="Wie kann ich Sie erreichen?"
                  autocomplete="email"
                  required
                  aria-required="true"
                  :aria-invalid="touched && !form.contact.trim()"
                />
              </div>

              <div class="form-group">
                <label for="contact-message" class="form-label">
                  Nachricht <span class="form-required" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  class="form-input form-textarea"
                  :class="{ 'form-input--invalid': touched && !form.message.trim() }"
                  placeholder="Was macht Ihr Unternehmen? Was für eine Website brauchen Sie?"
                  rows="5"
                  required
                  aria-required="true"
                  :aria-invalid="touched && !form.message.trim()"
                ></textarea>
              </div>

              <p class="form-required-note">
                <span aria-hidden="true">*</span> Pflichtfelder
              </p>

              <button
                type="submit"
                class="btn btn-primary contact__submit"
                :disabled="submitting"
              >
                <span v-if="submitting">Wird gesendet …</span>
                <span v-else>
                  Nachricht senden
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true" style="margin-left:.4rem">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>

              <p v-if="submitted" class="form-success" role="status">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
                Vielen Dank! Ich melde mich so schnell wie möglich bei Ihnen.
              </p>

              <p v-if="errorMsg" class="form-error" role="alert">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                {{ errorMsg }}
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

// ============================================================
//  Formspree Endpoint
//  → 1. Auf https://formspree.io registrieren (gratis, 50/Monat)
//  → 2. Neues Formular anlegen, ID kopieren (z. B. "mzbpvwka")
//  → 3. Hier unten die ID einsetzen:
// ============================================================
const FORMSPREE_ID = 'meendkdy'
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

const form = reactive({ name: '', company: '', contact: '', message: '' })
const submitting = ref(false)
const submitted = ref(false)
const errorMsg = ref('')
const touched = ref(false)

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function handleSubmit() {
  touched.value = true
  submitted.value = false
  errorMsg.value = ''

  if (!form.name.trim() || !form.contact.trim() || !form.message.trim()) {
    errorMsg.value = 'Bitte füllen Sie Name, Kontaktmöglichkeit und Nachricht aus.'
    return
  }

  submitting.value = true

  // Falls die ID noch nicht eingetragen ist: nicht versenden, sondern hinweisen
  if (FORMSPREE_ID === 'DEINE_ID') {
    submitting.value = false
    errorMsg.value =
      'Formular noch nicht konfiguriert. Bitte WhatsApp, Telefon oder E-Mail nutzen.'
    return
  }

  try {
    const payload = {
      name: form.name.trim(),
      company: form.company.trim() || '–',
      contact: form.contact.trim(),
      message: form.message.trim(),
      _subject: `Neue Anfrage von ${form.name.trim()}${form.company.trim() ? ' (' + form.company.trim() + ')' : ''}`,
    }

    if (emailPattern.test(form.contact.trim())) {
      payload._replyto = form.contact.trim()
      payload.email = form.contact.trim()
    }

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(
        data?.errors?.[0]?.message || 'Senden fehlgeschlagen. Bitte erneut versuchen.'
      )
    }

    submitted.value = true
    touched.value = false
    Object.assign(form, { name: '', company: '', contact: '', message: '' })
  } catch (err) {
    errorMsg.value =
      err?.message ||
      'Senden fehlgeschlagen. Bitte direkt per WhatsApp oder E-Mail melden.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.contact {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-soft);
  position: relative;
  overflow: hidden;
}
.contact__bg { position: absolute; inset: 0; pointer-events: none; }
.contact__glow {
  position: absolute;
  width: 700px; height: 700px;
  right: -200px; bottom: -300px;
  background: radial-gradient(circle, rgba(249,115,22,.08), transparent 70%);
  filter: blur(40px);
}

.contact__header {
  max-width: 720px;
  margin-bottom: 3.5rem;
  position: relative;
}
.contact__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
  position: relative;
}
@media (min-width: 920px) {
  .contact__layout { grid-template-columns: 1fr 1.05fr; gap: 3rem; }
}

/* Direct contact */
.contact__direct-title,
.contact__form-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0;
  margin-bottom: 1.25rem;
  color: var(--color-text);
}
.contact__buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}
.contact__channel {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.15rem;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
}
.contact__channel:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: #DDE2EC;
}
.contact__channel-icon {
  width: 44px; height: 44px;
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  display: flex; align-items: center; justify-content: center;
  color: var(--color-text);
  flex-shrink: 0;
  border: 1px solid var(--color-border);
}
.contact__channel-text {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}
.contact__channel-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0;
  color: var(--color-muted);
}
.contact__channel-value {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--color-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.contact__channel-arrow {
  color: var(--color-muted);
  flex-shrink: 0;
  transition: transform var(--transition), color var(--transition);
}
.contact__channel:hover .contact__channel-arrow {
  color: var(--color-accent);
  transform: translateX(3px);
}

.contact__channel--whatsapp .contact__channel-icon {
  background: #25D366;
  color: #fff;
  border-color: transparent;
}

.contact__meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border-soft);
}
.contact__meta-item {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 0.85rem;
  color: var(--color-secondary);
}
.contact__meta-item svg { color: var(--color-accent); }

/* Form */
.contact__form-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.85rem;
  box-shadow: var(--shadow-xs);
}
@media (min-width: 600px) {
  .contact__form-card { padding: 2rem; }
}
.contact__form-sub {
  font-size: 0.9rem;
  color: var(--color-secondary);
  margin-top: -0.85rem;
  margin-bottom: 1.5rem;
}
.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.form-group { display: flex; flex-direction: column; gap: 0.4rem; }
.form-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text);
}
.form-required { color: var(--color-accent); }
.form-input {
  width: 100%;
  padding: 0.85rem 1rem;
  font-family: var(--font-body);
  font-size: 0.98rem;
  color: var(--color-text);
  background: var(--color-surface);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
  min-height: 48px;
}
.form-input::placeholder { color: var(--color-muted); }
.form-input:hover { border-color: #D6DAE5; }
.form-input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 4px rgba(249,115,22,.14);
  background: #fff;
}
.form-textarea {
  resize: vertical;
  min-height: 130px;
  line-height: 1.55;
}
.form-required-note {
  font-size: 0.78rem;
  color: var(--color-muted);
  margin-top: -0.3rem;
}
.contact__submit {
  width: 100%;
  justify-content: center;
  padding: 1.05rem 1.5rem;
}
.contact__submit:disabled { opacity: 0.65; cursor: not-allowed; }
.form-success {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  background: #DCFCE7;
  color: #15803D;
  border-radius: var(--radius-sm);
  padding: 0.85rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.form-error {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  background: #FEE2E2;
  color: #B91C1C;
  border-radius: var(--radius-sm);
  padding: 0.85rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.45;
}

/* Poster-style contact surface */
.contact {
  background: var(--color-bg);
  border-top-color: var(--color-border-soft);
}

.contact__glow {
  display: none;
}

.contact__layout {
  gap: 1.25rem;
}

@media (min-width: 920px) {
  .contact__layout {
    grid-template-columns: .9fr 1.1fr;
  }
}

.contact__direct-title,
.contact__form-title,
.contact__channel-label {
  letter-spacing: 0;
}

.contact__channel {
  background: #101c17;
  border-color: var(--color-border);
  border-radius: var(--radius-lg);
}

.contact__channel:hover {
  box-shadow: var(--shadow-md);
  border-color: rgba(255, 151, 0, .38);
}

.contact__channel-icon {
  background: rgba(255, 151, 0, .1);
  border-color: rgba(255, 151, 0, .22);
  border-radius: var(--radius-md);
  color: var(--color-accent);
}

.contact__channel--whatsapp .contact__channel-icon {
  background: var(--color-accent);
  color: #07120f;
}

.contact__form-card {
  background: #101c17;
  border-color: var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.form-input {
  background: #07120f;
  border-color: var(--color-border);
  color: var(--color-text);
  border-radius: var(--radius-md);
}

.form-input:hover {
  border-color: rgba(255, 151, 0, .34);
}

.form-input:focus {
  background: #07120f;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 4px rgba(255, 151, 0, .14);
}

.form-input--invalid {
  border-color: rgba(239, 68, 68, .8);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, .12);
}

.form-success {
  background: rgba(255, 151, 0, .14);
  color: var(--color-accent-2);
  border-radius: var(--radius-md);
}
</style>

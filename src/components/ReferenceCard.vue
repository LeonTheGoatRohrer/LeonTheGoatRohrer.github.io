<template>
  <article class="ref-card">
    <a
      :href="reference.url"
      target="_blank"
      rel="noopener noreferrer"
      class="ref-card__img-link"
      :aria-label="`${reference.name} live ansehen (öffnet in neuem Tab)`"
    >
      <div class="ref-card__img-wrap" :class="`ref-card__img-wrap--${themeIndex}`">
        <img
          v-if="!imgError"
          :src="reference.desktopImage"
          :alt="`Vorschau der Website ${reference.name}`"
          class="ref-card__img"
          loading="lazy"
          width="1456"
          height="824"
          @error="handleImgError"
        />

        <!-- Stylish fallback "browser preview" when image missing -->
        <div v-else class="ref-card__fallback" aria-hidden="true">
          <div class="fb__chrome">
            <span class="fb__dot fb__dot--r"></span>
            <span class="fb__dot fb__dot--y"></span>
            <span class="fb__dot fb__dot--g"></span>
          </div>
          <div class="fb__content">
            <div class="fb__tag"></div>
            <div class="fb__bar fb__bar--lg"></div>
            <div class="fb__bar fb__bar--md"></div>
            <div class="fb__bar fb__bar--sm"></div>
            <div class="fb__btn"></div>
          </div>
        </div>

        <div class="ref-card__overlay">
          <span class="ref-card__live-label">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
            Live ansehen
          </span>
        </div>

        <div class="ref-card__index" aria-hidden="true">
          {{ String(index).padStart(2, '0') }}
        </div>
      </div>
    </a>

    <div class="ref-card__body">
      <span class="ref-card__category">{{ reference.category }}</span>
      <h3 class="ref-card__name">{{ reference.name }}</h3>
      <p class="ref-card__desc">{{ reference.description }}</p>

      <div class="ref-card__tags">
        <span v-for="tag in reference.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>

      <a
        :href="reference.url"
        target="_blank"
        rel="noopener noreferrer"
        class="ref-card__btn"
        :aria-label="`${reference.name} live ansehen (öffnet in neuem Tab)`"
      >
        Live ansehen
        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14M13 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  reference: { type: Object, required: true },
  index: { type: Number, default: 1 },
})

const imgError = ref(false)
function handleImgError() { imgError.value = true }

const themeIndex = computed(() => ((props.index - 1) % 3) + 1)
</script>

<style scoped>
.ref-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow var(--transition), transform var(--transition), border-color var(--transition);
}
.ref-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-6px);
  border-color: #DDE2EC;
}

/* Image area */
.ref-card__img-link { display: block; }
.ref-card__img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #F5F7FB, #E8ECF4);
}
.ref-card__img-wrap--1 { background: linear-gradient(135deg, #FFEDD5, #FED7AA); }
.ref-card__img-wrap--2 { background: linear-gradient(135deg, #E0E7FF, #C7D2FE); }
.ref-card__img-wrap--3 { background: linear-gradient(135deg, #DCFCE7, #BBF7D0); }

.ref-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(.2,.7,.2,1);
}
.ref-card:hover .ref-card__img { transform: scale(1.04); }

/* Fallback stylized preview */
.ref-card__fallback {
  position: absolute;
  inset: 14px;
  background: rgba(255,255,255,.92);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(11,15,26,.06);
  box-shadow: 0 8px 24px rgba(11,15,26,.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.fb__chrome {
  display: flex; gap: 5px;
  padding: 8px 10px;
  background: #F1F3F8;
  border-bottom: 1px solid var(--color-border-soft);
}
.fb__dot { width: 8px; height: 8px; border-radius: 50%; }
.fb__dot--r { background: #FF5F57; }
.fb__dot--y { background: #FEBC2E; }
.fb__dot--g { background: #28C840; }
.fb__content { padding: 14px; flex: 1; display: flex; flex-direction: column; gap: 8px; }
.fb__tag {
  width: 60px; height: 12px; border-radius: var(--radius-sm);
  background: var(--grad-accent-soft);
  margin-bottom: 4px;
}
.fb__bar { height: 8px; border-radius: 4px; background: #D6DAE5; }
.fb__bar--lg { width: 85%; height: 12px; background: #B5BBCB; }
.fb__bar--md { width: 70%; }
.fb__bar--sm { width: 50%; }
.fb__btn {
  width: 80px; height: 20px;
  border-radius: var(--radius-sm);
  background: var(--grad-accent);
  margin-top: 6px;
}

/* Overlay on hover */
.ref-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(11,15,26,.0) 30%, rgba(11,15,26,.6));
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1rem;
  opacity: 0;
  transition: opacity 0.28s ease;
}
.ref-card:hover .ref-card__overlay { opacity: 1; }
.ref-card__live-label {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #fff;
  color: var(--color-text);
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.55rem 1rem;
  border-radius: var(--radius-sm);
  box-shadow: 0 4px 14px rgba(11,15,26,.18);
}

/* Index chip */
.ref-card__index {
  position: absolute;
  top: 0.9rem;
  left: 0.9rem;
  padding: 0.3rem 0.6rem;
  background: rgba(11,15,26,.7);
  color: #fff;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  border-radius: var(--radius-sm);
  backdrop-filter: blur(6px);
}

/* Body */
.ref-card__body {
  padding: 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.55rem;
}
.ref-card__category {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0;
}
.ref-card__name {
  font-family: var(--font-display);
  font-size: 1.18rem;
  font-weight: 700;
  letter-spacing: 0;
  color: var(--color-text);
}
.ref-card__desc {
  font-size: 0.92rem;
  color: var(--color-secondary);
  line-height: 1.6;
  flex: 1;
}
.ref-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.25rem 0 0.5rem;
}
.ref-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--color-text);
  align-self: flex-start;
  padding: 0.55rem 0;
  border-bottom: 2px solid transparent;
  transition: color var(--transition), border-color var(--transition), transform var(--transition);
}
.ref-card__btn:hover {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}
.ref-card__btn:hover svg { transform: translateX(3px); }
.ref-card__btn svg { transition: transform var(--transition); }

/* Poster-like reference cards */
.ref-card {
  background: #101c17;
  border-color: var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
}

.ref-card:hover {
  box-shadow: var(--shadow-md);
  border-color: rgba(255, 151, 0, .38);
}

.ref-card__img-wrap,
.ref-card__img-wrap--1,
.ref-card__img-wrap--2,
.ref-card__img-wrap--3 {
  background:
    linear-gradient(180deg, rgba(255, 151, 0, .18) 0 30%, transparent 30%),
    #17261f;
}

.ref-card__fallback {
  background: #0b1813;
  border-color: var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: none;
}

.fb__chrome {
  background: #13221b;
  border-bottom-color: var(--color-border-soft);
}

.fb__dot {
  background: rgba(247, 255, 248, .3);
}

.fb__tag,
.fb__btn {
  background: var(--color-accent);
}

.fb__bar {
  background: rgba(247, 255, 248, .2);
}

.fb__bar--lg {
  background: rgba(247, 255, 248, .38);
}

.ref-card__overlay {
  background: linear-gradient(180deg, rgba(6, 17, 14, 0) 20%, rgba(6, 17, 14, .86));
}

.ref-card__live-label {
  background: var(--color-accent);
  color: #07120f;
  border-radius: var(--radius-sm);
}

.ref-card__index {
  background: var(--color-accent);
  color: #07120f;
  border-radius: var(--radius-sm);
}

.ref-card__category,
.ref-card__name {
  letter-spacing: 0;
}

.ref-card__btn:hover {
  color: var(--color-accent);
}
</style>


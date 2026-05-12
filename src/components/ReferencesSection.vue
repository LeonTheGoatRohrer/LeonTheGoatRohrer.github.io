<template>
  <section class="section references">
    <div class="container">
      <div class="references__header reveal">
        <p class="section-label">Bisherige Projekte</p>
        <h2 class="section-title">
          Drei <span class="text-grad">echte Websites</span>, drei Branchen.
        </h2>
        <p class="section-subtitle">
          Live-Projekte, die ich für lokale Unternehmen in Tirol umgesetzt habe.
          Klicken Sie auf eine Karte, um die Seite live im Browser zu öffnen.
        </p>
      </div>

      <div class="references__grid">
        <ReferenceCard
          v-for="(ref, i) in references"
          :key="ref.id"
          :reference="ref"
          :index="i + 1"
          :style="{ transitionDelay: (i * 0.1) + 's' }"
          class="reveal"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { references } from '../data/references.js'
import ReferenceCard from './ReferenceCard.vue'
</script>

<style scoped>
.references {
  background: var(--color-bg);
  position: relative;
}
.references__header {
  max-width: 720px;
  margin-bottom: 3.5rem;
}
.references__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 720px) {
  .references__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1080px) {
  .references__grid { grid-template-columns: repeat(3, 1fr); }
}

.references {
  background: var(--color-bg-alt);
}

.references__grid {
  gap: 1rem;
}
</style>


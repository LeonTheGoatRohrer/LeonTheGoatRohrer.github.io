<template>
  <div>
    <NavBar />
    <main>
      <HeroSection id="start" class="scroll-target" />
      <BenefitsSection id="nutzen" class="scroll-target" />
      <ReferencesSection id="referenzen" class="scroll-target" />
      <OfferSection id="angebot" class="scroll-target" />
      <ProcessSection id="ablauf" class="scroll-target" />
      <TargetGroupsSection id="zielgruppen" class="scroll-target" />
      <ContactSection id="kontakt" class="scroll-target" />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import ReferencesSection from './components/ReferencesSection.vue'
import OfferSection from './components/OfferSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import TargetGroupsSection from './components/TargetGroupsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>


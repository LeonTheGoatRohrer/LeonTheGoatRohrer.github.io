// Bilddateien im Ordner public/references/ ablegen:
//   public/references/krone-desktop.jpg    (Desktop-Screenshot ~1200x750px)
//   public/references/krone-mobile.jpg     (optional, mobiler Screenshot)
//   public/references/praxis-desktop.jpg
//   public/references/praxis-mobile.jpg
//   public/references/maler-desktop.jpg
//   public/references/maler-mobile.jpg
// Vite stellt public/-Dateien direkt unter "/" bereit.

export const references = [
  {
    id: 1,
    name: 'Krone Asia Kufstein',
    category: 'Restaurant / Gastronomie',
    description: 'Moderne Restaurant-Website mit Fokus auf Buffet, Sushi, Öffnungszeiten, Lieferung und Kontakt. Visuell stark, appetitlich und klar strukturiert.',
    url: 'https://leonthegoatrohrer.github.io/Krone-W-rgl/',
    desktopImage: '/references/krone-desktop.jpg',
    mobileImage: '/references/krone-mobile.jpg',
    tags: ['Responsive', 'Gastronomie', 'Kontaktführung'],
  },
  {
    id: 2,
    name: 'Praxis Lair',
    category: 'Psychotherapie & Klinische Psychologie',
    description: 'Seriöse Praxis-Website für Psychotherapie und Klinische Psychologie mit ruhigem Design, klaren Schwerpunkten, Standorten und Kontaktmöglichkeit.',
    url: 'https://leonthegoatrohrer.github.io/Praxis-Lair/',
    desktopImage: '/references/praxis-desktop.jpg',
    mobileImage: '/references/praxis-mobile.jpg',
    tags: ['Responsive', 'Praxis', 'Seriöses Design'],
  },
  {
    id: 3,
    name: 'Malermeisterbetrieb Schätzer',
    category: 'Handwerk / Malerbetrieb',
    description: 'Professionelle Website für einen Malermeisterbetrieb mit Leistungsübersicht, regionalem Fokus auf Innsbruck/Tirol und klarer Kontaktführung.',
    url: 'https://leonthegoatrohrer.github.io/malermeister-schaetzer-website/',
    desktopImage: '/references/maler-desktop.jpg',
    mobileImage: '/references/maler-mobile.jpg',
    tags: ['Responsive', 'Handwerk', 'Regionale Sichtbarkeit'],
  },
]

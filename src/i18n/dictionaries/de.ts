import { profile } from '@/app/content';
import type { Dictionary } from './en';

export const de: Dictionary = {
  meta: {
    title: 'sprotte.dev | Softwareentwickler',
    description: `${profile.name} – Full Stack Software Engineer aus Hamburg. Webanwendungen, Automatisierungen und Integrationen.`,
    ogLocale: 'de_DE',
  },
  languageSwitch: 'Sprache wählen',
  nav: {
    label: 'Hauptnavigation',
    work: 'Projekte',
    process: 'Ablauf',
    experience: 'Erfahrung',
    faq: 'FAQ',
  },
  startProject: 'Projekt starten',
  hero: {
    role: 'Full Stack Engineer',
    title: 'Web-Apps, die einfach funktionieren.',
    subtitle: 'Von einem Full Stack Engineer aus Hamburg.',
    intro: `Ich entwickle Web-Apps, Automatisierungen und Integrationen für kleine Teams und Gründer, von der ersten Idee bis zum Launch. Seit ${profile.since} arbeite ich mit TypeScript und React.`,
    seeWork: 'Projekte ansehen',
    availability: 'Offen für neue Projekte · Antwort in 24 h',
    featured: 'Live-Projekt',
    visit: (host) => `${host} besuchen`,
    visitNewTab: (name) => `${name} besuchen (öffnet in neuem Tab)`,
  },
  stack: {
    label: 'Tech-Stack',
    title: 'Mein Stack im Alltag',
  },
  work: {
    eyebrow: 'Ausgewählte Projekte',
    title: 'Was ich gebaut habe',
    text: 'Plattformen für Kunden, eigene Produkte und das Community-Projekt, mit dem alles angefangen hat.',
    privateProject: 'nicht öffentliches Kundenprojekt',
    imageAlt: (name) => `Illustration zu ${name}`,
    projects: {
      'seo-content-generator': {
        tagline: 'Plattform zur Content-Automatisierung für einen Kunden',
        description:
          'Eine Full-Stack-Plattform für einen Kunden, die das Erstellen und Veröffentlichen von SEO-optimierten Inhalten in großem Umfang automatisiert. Hintergrundprozesse lesen Inhalte von Webseiten aus, generieren Texte mit KI-Modellen von OpenAI, Anthropic und Google, erstellen Bilder und veröffentlichen die Ergebnisse direkt auf WordPress und Shopify.',
      },
      spotfinder: {
        tagline: 'Cafés zum Arbeiten in deiner Stadt finden',
        description:
          'Eine Plattform, mit der man das passende Café oder den passenden Arbeitsplatz in der eigenen Stadt findet. Nutzer können Cafés, Coworking-Spaces und weitere Orte zum Arbeiten suchen, bewerten und teilen, mit standortbasierter Suche, Bewertungen aus der Community und interaktiven Karten.',
      },
      'billbee-sendcloud-adapter': {
        tagline: 'Automatisierte Versandetiketten für Bettergy',
        description:
          'Anbindung der Sendcloud-API an Billbee, damit Versandetiketten für Bestellungen automatisch erstellt werden. Das vereinfacht das Fulfillment und steigert Effizienz und Kundenzufriedenheit. Entwickelt im Auftrag von Bettergy, um den Versand für deren Geschäftskunden zu vereinfachen.',
      },
      lumiverse: {
        tagline: 'Multiplayer-Gaming-Community mit Tausenden Spielern',
        description:
          'Eine Community rund um Multi Theft Auto, die Multiplayer-Erweiterung von GTA: San Andreas. Mit einem Team von Entwicklern habe ich eigene Spielmodi in einer Sandbox gebaut und später die Leitung der Entwicklung übernommen. Zu Spitzenzeiten waren mehrere hundert Spieler gleichzeitig online.',
      },
    },
  },
  process: {
    eyebrow: 'So arbeite ich',
    title: 'Unkompliziert, von der ersten Nachricht bis zum Launch',
    step: (n) => `Schritt ${n}`,
    steps: [
      {
        title: 'Kennenlernen',
        text: 'Wir starten mit einem kurzen Call oder ein paar Nachrichten. Du schilderst das Problem, ich stelle Fragen und schlage einen realistischen Umfang vor.',
      },
      {
        title: 'Entwickeln',
        text: 'Ich entwickle in kleinen Schritten und zeige regelmäßig den Fortschritt. So siehst du früh funktionierende Software und kannst unterwegs die Richtung mitbestimmen.',
      },
      {
        title: 'Launch & Support',
        text: 'Ich kümmere mich um das Deployment und bleibe auch nach dem Launch für Fixes, Verbesserungen und Fragen ansprechbar.',
      },
    ],
  },
  about: {
    eyebrow: 'Erfahrung',
    title: 'Ein bisschen über mich',
    bio: 'Hi! Ich bin Tony. Meine Leidenschaft für Software begann schon in meiner Jugend, und seitdem entwickle ich meine Fähigkeiten stetig weiter. Am liebsten baue ich Webanwendungen, mit einem klaren Fokus auf Full-Stack-Architektur.',
    intro:
      'Hauptberuflich arbeite ich in Vollzeit bei der Geno Digital Solutions GmbH. In meiner Freizeit setze ich eigene Projekte mit meiner Firma Sprotte Development um.',
    experiences: [
      {
        title: 'Full Stack Software Engineer',
        company: 'Geno Digital Solutions GmbH',
        period: 'seit 2026',
        description:
          'Entwicklung von Automatisierungslösungen für Genossenschaftsbanken, die KI und Robotic Process Automation kombinieren, um zentrale Bankprozesse wie Baufinanzierung, Kreditauszahlung und Pfändungsbearbeitung zu optimieren. Bereitgestellt als Service für mehr als 100 Banken.',
      },
      {
        title: 'Inhaber & Entwickler',
        company: 'Sprotte Development',
        period: 'seit 2024',
        description:
          'Gründung und Führung von Sprotte Development. Ich entwickle eigene Produkte wie spotfinder und Kundenprojekte von A bis Z, von der Idee über Design und Umsetzung bis zum Deployment.',
      },
      {
        title: 'Full Stack Software Engineer',
        company: 'data experts gmbh',
        period: '2020 – 2026',
        description:
          'Entwicklung von Webanwendungen für das Fördermittelmanagement in der Landwirtschaft, mit skalierbaren Backend-Services und intuitiven Frontends für Behörden und landwirtschaftliche Akteure.',
      },
      {
        title: 'B.Sc. Angewandte Informatik',
        company: 'NORDAKADEMIE Hochschule der Wirtschaft',
        period: '2020 – 2024',
        description:
          'Duales Studium mit Schwerpunkt Software Engineering, parallel als Entwickler bei der data experts gmbh.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Gute Fragen',
    items: [
      {
        q: 'Arbeitest du auch mit kleinen Unternehmen?',
        a: 'Ja. Die meisten meiner eigenen Projekte sind für kleine Teams und Gründer entstanden. Wir können klein anfangen, mit einem einzelnen Feature oder einem Prototyp, und von dort aus wachsen.',
      },
      {
        q: 'Wie schnell antwortest du?',
        a: 'An Werktagen meist innerhalb eines Tages. Da ich auch in Vollzeit angestellt bin, plane ich Projektarbeit fest ein und sage dir vorab, welcher Zeitrahmen realistisch ist.',
      },
      {
        q: 'Kannst du ein bestehendes Projekt übernehmen?',
        a: 'Oft ja. Ich schaue mir zuerst die Codebasis an und gebe dir eine ehrliche Einschätzung, wie es um sie steht und was nötig ist, um weiterzukommen.',
      },
      {
        q: 'Was kostet ein Projekt?',
        a: 'Das hängt vom Umfang ab. Nach einem ersten Gespräch bekommst du eine klare Schätzung, bevor die Arbeit beginnt, ganz unverbindlich.',
      },
    ],
  },
  contact: {
    title: 'Du hast ein Projekt im Kopf? Lass uns darüber sprechen.',
    text: 'Beantworte im Chat ein paar kurze Fragen, und deine E-Mail ist fertig zum Absenden. Keine Formulare, kein Druck.',
    location: 'Aus Hamburg · Antwort meist innerhalb eines Tages',
  },
  footer: {
    location: 'Hamburg',
  },
};

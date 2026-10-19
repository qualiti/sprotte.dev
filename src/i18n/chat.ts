import { useParams } from 'next/navigation';
import { profile } from '@/app/content';
import { defaultLocale, isLocale, type Locale } from './config';

// Copy for the Client Components (contact chat, launcher, copy button). Both languages are
// small enough to ship together, which lets the copy keep functions for interpolation.

const en = {
  replies: 'Usually replies within a day',
  launcher: {
    open: `Chat with ${profile.firstName}`,
    close: `Close chat with ${profile.firstName}`,
    closePanel: 'Close chat',
    teaser: "Planning a project? Let's chat",
    dismiss: 'Dismiss',
  },
  copyEmail: { idle: 'Copy', copied: 'Copied', failed: 'Copy failed' },
  thread: {
    greeting: [
      `Hi, I'm ${profile.firstName}. Thanks for stopping by!`,
      'What are you planning? Pick whatever fits best.',
    ],
    services: ['Web applications', 'Automation & AI', 'API integrations', 'Technical advice'],
    somethingElse: 'Something else',
    timelines: [
      'As soon as possible',
      'In the next 1–3 months',
      'Later this year',
      'Just exploring',
    ],
    serviceReply: (service: string) => `${service}, nice. That's right up my alley.`,
    somethingElseReply: "Sounds interesting. I'm curious!",
    askTimeline: 'When would you like to get started?',
    askName: 'Got it. And what should I call you?',
    nameError: 'Just a first name is fine.',
    greetName: (name: string) => `Nice to meet you, ${name}.`,
    askEmail: 'Which email address should I reply to?',
    emailError: 'That email address looks incomplete.',
    askMessage: 'Anything else I should know? A sentence or two is plenty, or skip it.',
    noMessage: 'Nothing else for now.',
    review: "Perfect. Here's what I'll receive:",
    summary: { what: 'What', when: 'When', from: 'From', note: 'Note' },
    send: `Send to ${profile.firstName}`,
    sent: [
      'Your email app should open with everything filled in. Just hit send.',
      'I usually reply within a day. Talk soon!',
    ],
    restart: "Let's start over. What are you planning?",
    serviceLabel: 'What are you planning?',
    timelineLabel: 'When to start',
    nameLabel: 'Your name',
    emailLabel: 'Your email address',
    messageLabel: 'Anything else (optional)',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'you@company.com',
    messagePlaceholder: "A link, an idea, a problem you're stuck on…",
    submit: 'Send answer',
    skip: 'Skip',
    startOver: 'Start over',
    nothingOpened: 'Nothing opened?',
    newMessage: 'New message',
    speakerTony: `${profile.firstName}: `,
    speakerYou: 'You: ',
    typing: `${profile.firstName} is typing`,
  },
  mail: {
    subject: (service: string) => `Project inquiry: ${service}`,
    greeting: `Hi ${profile.firstName},`,
    service: (service: string) => `I'm looking for help with: ${service}`,
    timeline: (timeline: string) => `Timeline: ${timeline}`,
    noDetails: '(No extra details yet.)',
    signOff: 'Best,',
  },
};

export type ChatDictionary = typeof en;

const de: ChatDictionary = {
  replies: 'Antwortet meist innerhalb eines Tages',
  launcher: {
    open: `Mit ${profile.firstName} chatten`,
    close: `Chat mit ${profile.firstName} schließen`,
    closePanel: 'Chat schließen',
    teaser: 'Du planst ein Projekt? Lass uns chatten',
    dismiss: 'Ausblenden',
  },
  copyEmail: { idle: 'Kopieren', copied: 'Kopiert', failed: 'Kopieren fehlgeschlagen' },
  thread: {
    greeting: [
      `Hi, ich bin ${profile.firstName}. Schön, dass du vorbeischaust!`,
      'Was hast du vor? Wähl einfach aus, was am besten passt.',
    ],
    services: [
      'Webanwendungen',
      'Automatisierung & KI',
      'API-Integrationen',
      'Technische Beratung',
    ],
    somethingElse: 'Etwas anderes',
    timelines: [
      'So bald wie möglich',
      'In den nächsten 1–3 Monaten',
      'Später in diesem Jahr',
      'Ich schaue mich nur um',
    ],
    serviceReply: (service) => `${service}, super. Genau mein Ding.`,
    somethingElseReply: 'Klingt spannend. Jetzt bin ich neugierig!',
    askTimeline: 'Wann möchtest du loslegen?',
    askName: 'Alles klar. Und wie darf ich dich nennen?',
    nameError: 'Ein Vorname reicht völlig.',
    greetName: (name) => `Freut mich, ${name}.`,
    askEmail: 'An welche E-Mail-Adresse soll ich antworten?',
    emailError: 'Die E-Mail-Adresse sieht unvollständig aus.',
    askMessage:
      'Gibt es sonst noch etwas, das ich wissen sollte? Ein, zwei Sätze reichen, oder überspring es einfach.',
    noMessage: 'Fürs Erste nichts weiter.',
    review: 'Perfekt. Das kommt bei mir an:',
    summary: { what: 'Was', when: 'Wann', from: 'Von', note: 'Notiz' },
    send: `An ${profile.firstName} senden`,
    sent: [
      'Dein E-Mail-Programm sollte sich jetzt mit allen Angaben öffnen. Einfach absenden.',
      'Ich antworte meist innerhalb eines Tages. Bis bald!',
    ],
    restart: 'Fangen wir noch mal von vorn an. Was hast du vor?',
    serviceLabel: 'Was hast du vor?',
    timelineLabel: 'Wann es losgehen soll',
    nameLabel: 'Dein Name',
    emailLabel: 'Deine E-Mail-Adresse',
    messageLabel: 'Sonst noch etwas (optional)',
    namePlaceholder: 'Dein Name',
    emailPlaceholder: 'du@firma.de',
    messagePlaceholder: 'Ein Link, eine Idee, ein Problem, bei dem du feststeckst …',
    submit: 'Antwort senden',
    skip: 'Überspringen',
    startOver: 'Neu starten',
    nothingOpened: 'Nichts geöffnet?',
    newMessage: 'Neue Nachricht',
    speakerTony: `${profile.firstName}: `,
    speakerYou: 'Du: ',
    typing: `${profile.firstName} schreibt`,
  },
  mail: {
    subject: (service) => `Projektanfrage: ${service}`,
    greeting: `Hallo ${profile.firstName},`,
    service: (service) => `ich suche Unterstützung bei: ${service}`,
    timeline: (timeline) => `Zeitrahmen: ${timeline}`,
    noDetails: '(Noch keine weiteren Details.)',
    signOff: 'Viele Grüße',
  },
};

const chatDictionaries: Record<Locale, ChatDictionary> = { en, de };

/** The chat copy for the locale in the current URL (`/en/…`, `/de/…`). */
export function useChatDictionary(): ChatDictionary {
  const { lang } = useParams<{ lang: string }>();
  return chatDictionaries[isLocale(lang) ? lang : defaultLocale];
}

import { profile } from '@/app/content';
import type { Locale } from '../config';

export const APP_SLUG = '/apps/meeting-po-brief';
export const APP_NAME = 'Meeting PO Brief';
export const LAST_UPDATED_ISO = '2026-11-22';

export type AppPageKey = 'overview' | 'privacy' | 'terms';

type Highlight = {
  title: string;
  text: string;
};

type PermissionItem = {
  scope: string;
  access: string;
  purpose: string;
};

type StoredDataCategory = {
  title: string;
  description: string;
  details: string[];
};

type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const en = {
  appBadge: 'Jira Cloud App · Runs on Atlassian',
  nav: {
    label: 'Meeting PO Brief navigation',
    backHome: 'Back to sprotte.dev',
    overview: 'Overview & Support',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
  meta: {
    overview: {
      title: `${APP_NAME} — Support & Overview | ${profile.company}`,
      description:
        'Overview, architecture, support contact, and legal documentation for Meeting PO Brief, a Runs on Atlassian Jira Cloud app by Sprotte Development.',
    },
    privacy: {
      title: `Privacy Policy — ${APP_NAME} | ${profile.company}`,
      description:
        'Privacy Policy for Meeting PO Brief for Jira Cloud by Sprotte Development. 100% native Atlassian Forge app with zero external egress and no tracking.',
    },
    terms: {
      title: `Terms of Service (EULA) — ${APP_NAME} | ${profile.company}`,
      description:
        'Terms of Service and End User License Agreement (EULA) for Meeting PO Brief for Jira Cloud by Sprotte Development.',
    },
  },
  common: {
    vendorLabel: 'Vendor',
    vendorValue: `${profile.company} (${profile.name})`,
    contactLabel: 'Support & Privacy Contact',
    platformLabel: 'Platform',
    platformValue: '100% Atlassian Forge (Runs on Atlassian)',
    lastUpdatedLabel: 'Last updated',
    lastUpdatedDate: 'November 22, 2026',
    emailSupportSubject: `${APP_NAME} — Support Request`,
    emailPrivacySubject: `${APP_NAME} — Privacy / GDPR Request`,
    onThisPage: 'On this page',
    documentLabel: 'Document',
  },
  overview: {
    title: APP_NAME,
    subtitle:
      'Structured meeting snapshots and Product Owner decisions — natively inside Jira Cloud.',
    intro:
      'Meeting PO Brief helps product and engineering teams turn Jira boards, JQL scopes, components, and releases into concise frozen meeting briefs with RAG status, issue deltas, and clear @PO decisions.',
    ctaPrivacy: 'Read Privacy Policy',
    ctaTerms: 'Terms of Service',
    highlightsTitle: 'Built for Atlassian Cloud trust',
    highlights: [
      {
        title: 'Runs on Atlassian',
        text: '100% native Atlassian Forge app. No external servers, no external network egress, no third-party data transfers, and no tracking.',
      },
      {
        title: 'Read-only Jira access',
        text: 'Reads Jira issues and user display references strictly on behalf of the signed-in Jira user, respecting your existing Jira permissions.',
      },
      {
        title: 'Site-scoped Forge SQL storage',
        text: 'Stream configurations, frozen meeting snapshots, and @PO decisions stay within your Jira Cloud site and can be deleted anytime.',
      },
    ] satisfies Highlight[],
    highlightsText:
      'Every request, computation, and record stays inside Atlassian Cloud. There is no Sprotte Development server in the loop.',
    architecture: {
      boundaryLabel: 'Atlassian Cloud',
      nodes: [
        { title: 'Your Jira Cloud site', text: 'Boards · JQL · Components · Releases' },
        { title: 'Atlassian Forge runtime', text: 'Meeting PO Brief app logic' },
        { title: 'Forge SQL (Atlassian-hosted)', text: 'Streams · Snapshots · Decisions' },
      ],
      readLabel: 'read-only',
      storeLabel: 'app storage',
      outsideTitle: 'External servers',
      outsideText: 'None — zero external egress',
      scopesLabel: 'Requested scopes',
    },
    preview: {
      caption: 'Illustrative example',
      frozenLabel: 'Frozen brief',
      title: 'Sprint Review · Release 2.4',
      statusLabel: 'RAG status',
      status: 'Amber',
      summaryLabel: 'Executive summary',
      summary:
        'Checkout scope on track. Two payment issues at risk of slipping past the release date.',
      deltaLabel: 'Issue delta since last brief',
      deltas: [
        { value: '+6', label: 'added' },
        { value: '4', label: 'done' },
        { value: '2', label: 'at risk' },
      ],
      decisionLabel: '@PO decision',
      decision: 'Move PAY-212 to Release 2.5, keep the release date.',
    },
    support: {
      eyebrow: 'Support',
      title: 'Need help or have a question?',
      text: 'Whether you have a setup question, spotted a bug, need help with a GDPR data request, or want to share feedback — send an email directly to the developer.',
      responseNote: 'Based in Hamburg, Germany · usually replies within one business day.',
      checklistTitle: 'Helpful details to include',
      checklist: [
        'Your Jira Cloud site URL or organization name (optional)',
        'A short description of the question, issue, or feature request',
        'Steps to reproduce or screenshots, if reporting a bug',
      ],
    },
    legal: {
      eyebrow: 'Documentation & Legal',
      title: 'Marketplace policies & agreements',
      privacyCardTitle: 'Privacy Policy',
      privacyCardText:
        'Full details on our Runs on Atlassian architecture, Forge scopes, Forge SQL data storage, retention, deletion, and GDPR rights.',
      termsCardTitle: 'Terms of Service (EULA)',
      termsCardText:
        'Licensing via the Atlassian Marketplace, availability under Atlassian Cloud/Forge, acceptable use, and limitation of liability.',
      readLink: 'Read document',
    },
  },
  privacy: {
    eyebrow: 'Legal · Data Protection',
    title: 'Privacy Policy',
    subtitle: `Privacy Policy for ${APP_NAME} (Jira Cloud App)`,
    intro: `This Privacy Policy explains how ${profile.company} (${profile.name}) handles data when you install and use ${APP_NAME} in Atlassian Jira Cloud. Because ${APP_NAME} is built 100% natively on Atlassian Forge and qualifies for Atlassian's Runs on Atlassian program, all app code and data remain strictly inside Atlassian Cloud infrastructure.`,
    atAGlance: [
      {
        title: 'No External Servers',
        text: 'Runs 100% natively on Atlassian Forge (Runs on Atlassian).',
      },
      {
        title: 'Zero External Egress',
        text: 'No data leaves Atlassian Cloud, no analytics, and no tracking.',
      },
      {
        title: 'Full Site Control',
        text: 'Delete streams or briefs anytime, or uninstall to remove all data.',
      },
    ] satisfies Highlight[],
    permissionsTitle: 'Atlassian Forge Permissions (Scopes)',
    permissionsIntro: `${APP_NAME} requests only read-only Jira access and Atlassian-hosted app storage. Jira API calls are executed on behalf of the signed-in Jira user, so users only see Jira data they already have permission to view:`,
    permissions: [
      {
        scope: 'read:jira-work',
        access: 'Read-only',
        purpose:
          'Reads Jira issues, boards, projects, components, and releases to generate briefs and issue delta summaries.',
      },
      {
        scope: 'read:jira-user',
        access: 'Read-only',
        purpose:
          'Reads Jira user references (Atlassian accountId and display name) for snapshot authors, tagged @PO decision owners, and issue assignees.',
      },
      {
        scope: 'storage:app',
        access: 'App storage',
        purpose:
          'Stores brief stream configurations, frozen meeting snapshots, and PO decisions in Atlassian-hosted Forge SQL scoped to your Jira Cloud site.',
      },
    ] satisfies PermissionItem[],
    storedDataTitle: 'Data Stored in Atlassian-Hosted Forge SQL',
    storedDataIntro:
      'All application data is stored exclusively inside Atlassian-hosted Forge SQL storage isolated to your Jira Cloud site:',
    storedData: [
      {
        title: 'Brief Stream Configurations',
        description: 'Settings created by your team to define recurring meeting briefs.',
        details: [
          'Stream name and configuration metadata',
          'Board, JQL, component, and release scope definitions',
          'Configured thresholds and status rules',
        ],
      },
      {
        title: 'Frozen Meeting Snapshots',
        description: 'Point-in-time snapshots frozen by your team to document meeting outcomes.',
        details: [
          'Snapshot title, timestamp, and RAG (Red / Amber / Green) status',
          'Executive summary and issue delta overviews',
          'Product Owner (@PO) decisions and responses',
        ],
      },
      {
        title: 'Personal Jira References (Stored > 24 Hours)',
        description:
          'Minimal Jira user identifiers persisted inside frozen snapshots and PO decisions so ownership remains clear over time.',
        details: [
          'Atlassian accountId and display name of snapshot authors',
          'Atlassian accountId and display name of tagged @PO decision owners',
          'Atlassian accountId and display name of issue assignees',
        ],
      },
    ] satisfies StoredDataCategory[],
    notStoredTitle: 'What We Do Not Collect or Store',
    notStoredText:
      'Meeting PO Brief does NOT store email addresses, passwords, authentication credentials, or external user profiles. We do not collect usage telemetry, third-party analytics, advertising identifiers, or browser tracking cookies.',
    sections: [
      {
        id: 'controller',
        title: '1. Vendor & Data Controller Contact',
        paragraphs: [
          `${APP_NAME} is provided by ${profile.company} (${profile.name}), Hamburg, Germany ("Vendor", "we", "us").`,
          `For any privacy, security, or data protection inquiries, please contact us at ${profile.email}. Within your organization's Jira Cloud site, your organization acts as the data controller for the Jira content processed by the app.`,
        ],
      },
      {
        id: 'architecture',
        title: '2. "Runs on Atlassian" Architecture & Zero External Egress',
        paragraphs: [
          `${APP_NAME} runs 100% natively on Atlassian Forge and is designed for Atlassian's Runs on Atlassian program. All application logic executes within Atlassian's managed cloud runtime.`,
          'There is no external backend server operated by Sprotte Development, no external network egress from the app, no third-party sub-processors beyond Atlassian, no tracking, and no sharing or transfer of your data to third parties. All computations and stored records stay strictly within Atlassian Cloud infrastructure.',
        ],
      },
      {
        id: 'purpose',
        title: '3. Purpose & Legal Basis of Processing',
        paragraphs: [
          'Data is processed exclusively to deliver the core functionality of Meeting PO Brief inside your Jira Cloud site: computing meeting briefs from your Jira scope, storing frozen snapshots, and recording @PO decisions.',
          'Under the EU General Data Protection Regulation (GDPR), processing takes place on the basis of contract performance (Art. 6(1)(b) GDPR) and legitimate interests in structured project and product documentation (Art. 6(1)(f) GDPR), subject to your organization’s Jira Cloud terms and Atlassian’s Data Processing Addendum.',
        ],
      },
      {
        id: 'retention',
        title: '4. Data Retention & Deletion',
        paragraphs: [
          'Data remains in the Atlassian-hosted Forge SQL storage of your Jira Cloud site only for as long as you keep it in the app:',
        ],
        bullets: [
          'In-app deletion: Authorized users can permanently remove data at any time using the "Delete Stream" or "Delete Frozen Brief" actions directly inside Meeting PO Brief.',
          'App uninstallation: When a Jira Site Administrator uninstalls Meeting PO Brief from the Jira Cloud site, Atlassian automatically deletes all app-stored Forge SQL data in accordance with Atlassian Cloud data retention policies.',
        ],
      },
      {
        id: 'security',
        title: '5. Security & Data Residency',
        paragraphs: [
          'Because Meeting PO Brief has no external infrastructure and zero external egress, encryption in transit and at rest, tenant isolation, authentication, and data residency are governed directly by Atlassian Cloud and Atlassian Forge in accordance with your Jira Cloud plan.',
        ],
      },
      {
        id: 'rights',
        title: '6. Data Subject Rights (GDPR)',
        paragraphs: [
          'Under the GDPR and applicable data protection laws, affected individuals have the right to request access to, rectification of, or erasure of their personal data, as well as the right to restrict or object to processing and to lodge a complaint with a competent data protection supervisory authority.',
          `Because Sprotte Development operates no external server and has no direct access to data stored inside your Jira Cloud tenant, requests for access, correction, or deletion can be fulfilled directly by your Jira Site Administrator (for example via "Delete Stream", "Delete Frozen Brief", or uninstalling the app). You can also contact us anytime at ${profile.email} if you need assistance or have questions.`,
        ],
      },
      {
        id: 'changes',
        title: '7. Changes to This Privacy Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time to reflect app improvements or legal requirements. The current version and effective date are always published on this page.',
        ],
      },
    ] satisfies LegalSection[],
    relatedLinkLabel: 'Also read: Terms of Service (EULA)',
  },
  terms: {
    eyebrow: 'Legal · End User License Agreement',
    title: 'Terms of Service (EULA)',
    subtitle: `Terms of Service & End User License Agreement for ${APP_NAME}`,
    intro: `These Terms of Service and End User License Agreement ("Terms") govern the installation and use of ${APP_NAME} ("the App"), a Jira Cloud application developed by ${profile.company} (${profile.name}) ("Vendor", "we", "us"). By installing or using the App via the Atlassian Marketplace, you agree to these Terms on behalf of yourself and your organization.`,
    sections: [
      {
        id: 'license',
        title: '1. License Grant & Atlassian Marketplace',
        paragraphs: [
          'Subject to your compliance with these Terms and the applicable Atlassian Marketplace Terms of Use, we grant you a non-exclusive, non-transferable, non-sublicensable, revocable license to install and use the App within your licensed Atlassian Jira Cloud site(s) solely for your internal business operations.',
          'Subscriptions, user tiers, trials, billing, renewals, cancellations, and refunds (where applicable) are handled through the Atlassian Marketplace in accordance with Atlassian’s Marketplace Terms.',
        ],
      },
      {
        id: 'acceptable-use',
        title: '2. Scope of Use & Restrictions',
        paragraphs: [
          'You remain responsible for how your users configure streams, freeze snapshots, and record decisions in your Jira Cloud instance. You may not:',
        ],
        bullets: [
          'Reverse engineer, decompile, disassemble, or attempt to extract source code from the App, except to the extent permitted by mandatory law.',
          'Resell, rent, lease, sublicense, or make the App available to unauthorized third parties outside your licensed Jira Cloud site.',
          'Use the App in violation of applicable laws or Atlassian’s Acceptable Use Policy.',
        ],
      },
      {
        id: 'availability',
        title: '3. Availability & Atlassian Cloud / Forge Dependency',
        paragraphs: [
          `${APP_NAME} runs 100% natively on the Atlassian Forge platform inside Atlassian Cloud. Availability, uptime, runtime performance, and storage infrastructure therefore depend on Atlassian Cloud and Atlassian Forge services.`,
          'We aim to keep the App reliable and compatible with Jira Cloud updates, but we do not guarantee uninterrupted or error-free operation and are not responsible for outages, changes, or disruptions caused by Atlassian Cloud or Jira APIs.',
        ],
      },
      {
        id: 'privacy',
        title: '4. Data Protection & Privacy',
        paragraphs: [
          'All data processed and stored by the App remains within Atlassian Cloud (Atlassian-hosted Forge SQL). Sprotte Development does not operate external servers for the App and does not access your Jira tenant data.',
          'Details on permissions, stored data, retention, deletion, and GDPR rights are set out in our Privacy Policy, which forms an integral part of these Terms.',
        ],
      },
      {
        id: 'ip',
        title: '5. Intellectual Property',
        paragraphs: [
          `${profile.company} retains all right, title, and interest in and to ${APP_NAME}, including its software code, design, and documentation. You retain full ownership of all Jira issues, stream configurations, frozen snapshots, and decisions created or stored within your Jira Cloud site.`,
        ],
      },
      {
        id: 'support',
        title: '6. Support & Updates',
        paragraphs: [
          `For support, bug reports, or general inquiries, please contact us at ${profile.email}. We provide reasonable email support on a best-effort basis and may publish updates, bug fixes, or feature improvements through the Atlassian Marketplace and Forge deployment channels.`,
        ],
      },
      {
        id: 'liability',
        title: '7. Warranty Disclaimer & Limitation of Liability',
        paragraphs: [
          'To the maximum extent permitted by applicable law, the App is provided "as is" and "as available" without implied warranties of merchantability, fitness for a particular purpose, or non-infringement.',
          'Our liability is unlimited in cases of intent (Vorsatz), gross negligence (grobe Fahrlässigkeit), culpable injury to life, body, or health, or mandatory statutory liability (such as under the German Product Liability Act).',
          'In cases of slight negligence (leichte Fahrlässigkeit), we are liable only for breaches of essential contractual obligations (Kardinalpflichten) whose fulfillment is essential to the proper execution of the agreement, and liability is limited to foreseeable, contract-typical damages. Any further liability for indirect, incidental, or consequential damages, lost profits, or data loss is excluded to the extent permitted by law.',
        ],
      },
      {
        id: 'termination',
        title: '8. Term & Termination',
        paragraphs: [
          'These Terms apply for as long as the App is installed on your Jira Cloud site. You may terminate your use at any time by uninstalling the App in Jira Cloud and cancelling your Marketplace subscription (if applicable).',
          'We may suspend or discontinue the App or terminate your license if you materially breach these Terms. Upon uninstallation, Atlassian removes stored Forge app data according to Atlassian Cloud retention policies.',
        ],
      },
      {
        id: 'governing-law',
        title: '9. Changes, Governing Law & Contact',
        paragraphs: [
          'We may update these Terms when required by product, platform, or legal changes. Continued use of the App after updated Terms take effect constitutes acceptance of the revised Terms.',
          'These Terms are governed by the laws of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods (CISG), without prejudice to mandatory statutory rights.',
          `Vendor contact: ${profile.company} (${profile.name}), Hamburg, Germany · ${profile.email}.`,
        ],
      },
    ] satisfies LegalSection[],
    relatedLinkLabel: 'Also read: Privacy Policy',
  },
};

export type MeetingPoBriefCopy = typeof en;

const de: MeetingPoBriefCopy = {
  appBadge: 'Jira-Cloud-App · Runs on Atlassian',
  nav: {
    label: 'Meeting PO Brief Navigation',
    backHome: 'Zurück zu sprotte.dev',
    overview: 'Übersicht & Support',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
  },
  meta: {
    overview: {
      title: `${APP_NAME} — Support & Übersicht | ${profile.company}`,
      description:
        'Übersicht, Architektur, Support-Kontakt und rechtliche Hinweise für Meeting PO Brief, eine Runs-on-Atlassian-App für Jira Cloud von Sprotte Development.',
    },
    privacy: {
      title: `Datenschutzerklärung — ${APP_NAME} | ${profile.company}`,
      description:
        'Datenschutzerklärung für Meeting PO Brief für Jira Cloud von Sprotte Development. 100 % native Atlassian-Forge-App ohne externen Egress und ohne Tracking.',
    },
    terms: {
      title: `Nutzungsbedingungen (EULA) — ${APP_NAME} | ${profile.company}`,
      description:
        'Nutzungsbedingungen und Endbenutzer-Lizenzvertrag (EULA) für Meeting PO Brief für Jira Cloud von Sprotte Development.',
    },
  },
  common: {
    vendorLabel: 'Anbieter',
    vendorValue: `${profile.company} (${profile.name})`,
    contactLabel: 'Support- & Datenschutzkontakt',
    platformLabel: 'Plattform',
    platformValue: '100 % Atlassian Forge (Runs on Atlassian)',
    lastUpdatedLabel: 'Stand',
    lastUpdatedDate: '22. November 2026',
    emailSupportSubject: `${APP_NAME} — Support-Anfrage`,
    emailPrivacySubject: `${APP_NAME} — Datenschutz- / DSGVO-Anfrage`,
    onThisPage: 'Auf dieser Seite',
    documentLabel: 'Dokument',
  },
  overview: {
    title: APP_NAME,
    subtitle:
      'Strukturierte Meeting-Snapshots und Product-Owner-Entscheidungen — nativ in Jira Cloud.',
    intro:
      'Meeting PO Brief hilft Produkt- und Entwicklungsteams dabei, Jira-Boards, JQL-Scopes, Komponenten und Releases in kompakte, eingefrorene Meeting-Briefs mit RAG-Status, Issue-Deltas und klaren @PO-Entscheidungen zu überführen.',
    ctaPrivacy: 'Datenschutzerklärung lesen',
    ctaTerms: 'Nutzungsbedingungen',
    highlightsTitle: 'Entwickelt für maximales Vertrauen in Atlassian Cloud',
    highlights: [
      {
        title: 'Runs on Atlassian',
        text: '100 % native Atlassian-Forge-App. Kein externer Server, kein externer Egress, keine Weitergabe an Dritte und kein Tracking.',
      },
      {
        title: 'Nur-Lese-Zugriff auf Jira',
        text: 'Liest Jira-Vorgänge und Benutzerreferenzen ausschließlich im Namen des angemeldeten Jira-Users unter Beachtung bestehender Jira-Berechtigungen.',
      },
      {
        title: 'Site-bezogener Forge-SQL-Speicher',
        text: 'Stream-Konfigurationen, eingefrorene Meeting-Snapshots und @PO-Entscheidungen bleiben in deiner Jira-Cloud-Site und sind jederzeit löschbar.',
      },
    ],
    highlightsText:
      'Jede Anfrage, jede Berechnung und jeder Datensatz bleibt in Atlassian Cloud. Kein Server von Sprotte Development ist beteiligt.',
    architecture: {
      boundaryLabel: 'Atlassian Cloud',
      nodes: [
        { title: 'Deine Jira-Cloud-Site', text: 'Boards · JQL · Komponenten · Releases' },
        { title: 'Atlassian-Forge-Runtime', text: 'App-Logik von Meeting PO Brief' },
        { title: 'Forge SQL (Atlassian-gehostet)', text: 'Streams · Snapshots · Entscheidungen' },
      ],
      readLabel: 'nur lesend',
      storeLabel: 'App-Speicher',
      outsideTitle: 'Externe Server',
      outsideText: 'Keine — kein externer Egress',
      scopesLabel: 'Angeforderte Scopes',
    },
    preview: {
      caption: 'Beispielhafte Darstellung',
      frozenLabel: 'Eingefrorener Brief',
      title: 'Sprint Review · Release 2.4',
      statusLabel: 'RAG-Status',
      status: 'Amber',
      summaryLabel: 'Executive Summary',
      summary:
        'Checkout-Scope im Plan. Zwei Payment-Vorgänge drohen über das Release-Datum zu rutschen.',
      deltaLabel: 'Issue-Delta seit dem letzten Brief',
      deltas: [
        { value: '+6', label: 'neu' },
        { value: '4', label: 'erledigt' },
        { value: '2', label: 'gefährdet' },
      ],
      decisionLabel: '@PO-Entscheidung',
      decision: 'PAY-212 in Release 2.5 verschieben, Release-Datum halten.',
    },
    support: {
      eyebrow: 'Support',
      title: 'Hilfe benötigt oder Fragen zur App?',
      text: 'Ob Einrichtung, Fehlerbericht, DSGVO-Anfrage oder Feedback — schreib einfach direkt per E-Mail an den Entwickler.',
      responseNote: 'Aus Hamburg · Antwort in der Regel innerhalb eines Werktags.',
      checklistTitle: 'Hilfreiche Angaben für eine schnelle Antwort',
      checklist: [
        'Deine Jira-Cloud-Site-URL oder dein Organisationsname (optional)',
        'Eine kurze Beschreibung deiner Frage, des Problems oder deines Wunsches',
        'Schritte zum Nachstellen oder Screenshots bei einem Fehlerbericht',
      ],
    },
    legal: {
      eyebrow: 'Dokumentation & Rechtliches',
      title: 'Marketplace-Richtlinien & Vereinbarungen',
      privacyCardTitle: 'Datenschutzerklärung (Privacy Policy)',
      privacyCardText:
        'Alle Details zur Runs-on-Atlassian-Architektur, Forge-Berechtigungen, Datenspeicherung in Forge SQL, Aufbewahrung, Löschung und DSGVO-Rechten.',
      termsCardTitle: 'Nutzungsbedingungen (Terms / EULA)',
      termsCardText:
        'Lizenzierung über den Atlassian Marketplace, Verfügbarkeit im Rahmen von Atlassian Cloud/Forge, zulässige Nutzung und Haftungsbeschränkung.',
      readLink: 'Dokument öffnen',
    },
  },
  privacy: {
    eyebrow: 'Rechtliches · Datenschutz',
    title: 'Datenschutzerklärung',
    subtitle: `Datenschutzerklärung für ${APP_NAME} (Jira-Cloud-App)`,
    intro: `Diese Datenschutzerklärung erläutert, wie ${profile.company} (${profile.name}) mit Daten bei der Installation und Nutzung von ${APP_NAME} in Atlassian Jira Cloud umgeht. Da ${APP_NAME} zu 100 % nativ auf Atlassian Forge läuft und für das Atlassian-Programm „Runs on Atlassian“ qualifiziert ist, verbleiben sämtliche Berechnungen und Daten ausschließlich innerhalb der Atlassian-Cloud-Infrastruktur.`,
    atAGlance: [
      {
        title: 'Kein externer Server',
        text: 'Läuft zu 100 % nativ auf Atlassian Forge (Runs on Atlassian).',
      },
      {
        title: 'Kein externer Egress',
        text: 'Keine Daten verlassen Atlassian Cloud, keine Analytik und kein Tracking.',
      },
      {
        title: 'Volle Datenkontrolle',
        text: 'Streams oder Briefs jederzeit löschen oder durch Deinstallation entfernen.',
      },
    ],
    permissionsTitle: 'Atlassian-Forge-Berechtigungen (Scopes)',
    permissionsIntro: `${APP_NAME} fordert ausschließlich lesende Jira-Berechtigungen sowie den App-Speicher auf Atlassian Forge an. Alle Abrufe erfolgen im Namen des angemeldeten Jira-Users, sodass bestehende Jira-Projekt- und Vorgangsberechtigungen jederzeit greifen:`,
    permissions: [
      {
        scope: 'read:jira-work',
        access: 'Nur lesend',
        purpose:
          'Liest Jira-Vorgänge, Boards, Projekte, Komponenten und Releases zur Erstellung von Briefs und Issue-Delta-Übersichten.',
      },
      {
        scope: 'read:jira-user',
        access: 'Nur lesend',
        purpose:
          'Liest Jira-Benutzerreferenzen (Atlassian accountId und Anzeigename) für Snapshot-Autoren, getaggte @PO-Decision-Owner und Issue-Assignees.',
      },
      {
        scope: 'storage:app',
        access: 'App-Speicher',
        purpose:
          'Speichert Brief-Stream-Konfigurationen, eingefrorene Meeting-Snapshots und PO-Entscheidungen im Atlassian-gehosteten Forge-SQL-Speicher deiner Jira-Site.',
      },
    ],
    storedDataTitle: 'Gespeicherte Daten (Atlassian-gehostetes Forge SQL)',
    storedDataIntro:
      'Alle Anwendungsdaten werden ausschließlich im Atlassian-gehosteten Forge-SQL-Speicher gespeichert und sind strikt auf die jeweilige Jira-Cloud-Site isoliert:',
    storedData: [
      {
        title: 'Brief-Stream-Konfigurationen',
        description: 'Einstellungen deines Teams zur Definition wiederkehrender Meeting-Briefs.',
        details: [
          'Stream-Name und Konfigurations-Metadaten',
          'Board-, JQL-, Komponenten- und Release-Scope-Definitionen',
          'Konfigurierte Schwellwerte und Status-Regeln',
        ],
      },
      {
        title: 'Eingefrorene Meeting-Snapshots',
        description: 'Zeitpunktbezogene Snapshots zur Dokumentation von Meeting-Ergebnissen.',
        details: [
          'Snapshot-Titel, Zeitstempel und RAG-Status (Rot / Gelb / Grün)',
          'Executive Summary und Issue-Delta-Übersichten',
          'Product-Owner-Entscheidungen (@PO) und Antworten',
        ],
      },
      {
        title: 'Personenbezogene Jira-Referenzen (> 24 Stunden)',
        description:
          'Minimale Jira-Benutzerreferenzen in Snapshots und PO-Entscheidungen, damit Verantwortlichkeiten dauerhaft nachvollziehbar bleiben.',
        details: [
          'Atlassian accountId und Anzeigename (Display Name) von Snapshot-Autoren',
          'Atlassian accountId und Anzeigename getaggter @PO-Decision-Owner',
          'Atlassian accountId und Anzeigename von Issue-Assignees',
        ],
      },
    ],
    notStoredTitle: 'Welche Daten NICHT erhoben oder gespeichert werden',
    notStoredText:
      'Meeting PO Brief speichert KEINE E-Mail-Adressen, Passwörter, Zugangsdaten oder externen Benutzerprofile. Es gibt keine Nutzungsanalyse, kein externes Tracking, keine Werbe-IDs und keine Weitergabe von Daten an Dritte.',
    sections: [
      {
        id: 'controller',
        title: '1. Anbieter & Datenschutzkontakt',
        paragraphs: [
          `${APP_NAME} wird bereitgestellt von ${profile.company} (${profile.name}), Hamburg, Deutschland („Anbieter“, „wir“).`,
          `Bei Fragen zum Datenschutz oder zur Sicherheit erreichst du uns per E-Mail unter ${profile.email}. Innerhalb eurer Jira-Cloud-Instanz bleibt eure Organisation datenschutzrechtlich Verantwortlicher für die in Jira verarbeiteten Inhalte.`,
        ],
      },
      {
        id: 'architecture',
        title: '2. Architektur („Runs on Atlassian“) & kein externer Egress',
        paragraphs: [
          `${APP_NAME} läuft zu 100 % nativ auf Atlassian Forge und ist für das „Runs on Atlassian“-Programm qualifiziert. Die gesamte Anwendungslogik wird innerhalb der von Atlassian betriebenen Cloud-Laufzeitumgebung ausgeführt.`,
          'Es gibt keinen externen Server von Sprotte Development, keinen externen Netzwerk-Egress aus der App, keine weiteren Auftragsverarbeiter außerhalb von Atlassian, kein Tracking und keine Weitergabe von Daten an Dritte. Alle Berechnungen und Daten bleiben innerhalb der Atlassian-Cloud-Infrastruktur.',
        ],
      },
      {
        id: 'purpose',
        title: '3. Zweck & Rechtsgrundlage der Verarbeitung',
        paragraphs: [
          'Die Verarbeitung erfolgt ausschließlich zur Bereitstellung der Funktionen von Meeting PO Brief in eurer Jira-Cloud-Site: Erstellung von Briefs aus eurem Jira-Scope, Speicherung eingefrorener Snapshots sowie Dokumentation von @PO-Entscheidungen.',
          'Rechtsgrundlage nach DSGVO ist die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) sowie das berechtigte Interesse an einer nachvollziehbaren Produkt- und Meeting-Dokumentation (Art. 6 Abs. 1 lit. f DSGVO) im Rahmen eurer Atlassian-Cloud-Nutzung und des Atlassian Data Processing Addendum.',
        ],
      },
      {
        id: 'retention',
        title: '4. Aufbewahrung & Löschung',
        paragraphs: [
          'Daten bleiben ausschließlich im Forge-SQL-Speicher der jeweiligen Jira-Cloud-Site gespeichert, bis sie gelöscht werden:',
        ],
        bullets: [
          'Löschung in der App: Berechtigte Nutzer können Daten jederzeit direkt in Meeting PO Brief über „Delete Stream“ oder „Delete Frozen Brief“ dauerhaft entfernen.',
          'Deinstallation der App: Wird Meeting PO Brief von einem Jira-Site-Administrator deinstalliert, löscht Atlassian sämtliche im Forge-SQL-Speicher abgelegten App-Daten gemäß den geltenden Atlassian-Cloud-Aufbewahrungsrichtlinien.',
        ],
      },
      {
        id: 'security',
        title: '5. Datensicherheit & Data Residency',
        paragraphs: [
          'Da Meeting PO Brief ohne externe Infrastruktur und ohne externen Egress betrieben wird, werden Transport- und Speicherverschlüsselung, Mandantentrennung, Zugriffskontrolle und Data Residency direkt durch Atlassian Cloud und Atlassian Forge gemäß eurem Jira-Cloud-Tarif gewährleistet.',
        ],
      },
      {
        id: 'rights',
        title: '6. Betroffenenrechte (DSGVO)',
        paragraphs: [
          'Betroffene Personen haben nach der DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch sowie ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde.',
          `Da Sprotte Development keinen externen Server betreibt und keinen direkten Zugriff auf Daten innerhalb eurer Jira-Cloud-Instanz hat, können Auskunfts-, Berichtigungs- und Löschwünsche unmittelbar über euren Jira-Site-Administrator umgesetzt werden (z. B. über „Delete Stream“, „Delete Frozen Brief“ oder Deinstallation der App). Bei Fragen oder Unterstützungsbedarf wende dich jederzeit per E-Mail an ${profile.email}.`,
        ],
      },
      {
        id: 'changes',
        title: '7. Änderungen dieser Datenschutzerklärung',
        paragraphs: [
          'Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf an technische oder rechtliche Änderungen anzupassen. Die jeweils aktuelle Fassung mit Aktualisierungsdatum ist stets auf dieser Seite abrufbar.',
        ],
      },
    ],
    relatedLinkLabel: 'Siehe auch: Nutzungsbedingungen (EULA)',
  },
  terms: {
    eyebrow: 'Rechtliches · Endbenutzer-Lizenzvertrag',
    title: 'Nutzungsbedingungen (EULA)',
    subtitle: `Nutzungsbedingungen & Endbenutzer-Lizenzvertrag für ${APP_NAME}`,
    intro: `Diese Nutzungsbedingungen einschließlich Endbenutzer-Lizenzvertrag („Bedingungen“) regeln die Installation und Nutzung von ${APP_NAME} („App“), einer Jira-Cloud-Anwendung von ${profile.company} (${profile.name}) („Anbieter“, „wir“). Durch die Installation oder Nutzung der App über den Atlassian Marketplace stimmst du diesen Bedingungen für dich bzw. deine Organisation zu.`,
    sections: [
      {
        id: 'license',
        title: '1. Lizenzumfang & Atlassian Marketplace',
        paragraphs: [
          'Vorbehaltlich der Einhaltung dieser Bedingungen sowie der jeweils geltenden Atlassian Marketplace Terms of Use gewähren wir dir ein nicht-exklusives, nicht übertragbares, nicht unterlizenzierbares und widerrufliches Recht zur Installation und Nutzung der App in deinen lizenzierten Atlassian-Jira-Cloud-Instanzen für interne Geschäftszwecke.',
          'Abonnements, Benutzerstufen, Testphasen, Abrechnung, Verlängerungen, Kündigungen und etwaige Erstattungen erfolgen über den Atlassian Marketplace gemäß den Bedingungen von Atlassian.',
        ],
      },
      {
        id: 'acceptable-use',
        title: '2. Zulässige Nutzung & Beschränkungen',
        paragraphs: [
          'Du bist selbst verantwortlich für die Konfiguration von Streams, eingefrorenen Snapshots und dokumentierten Entscheidungen in deiner Jira-Cloud-Instanz. Unzulässig sind insbesondere:',
        ],
        bullets: [
          'Reverse Engineering, Dekompilierung oder der Versuch, den Quellcode der App auszulesen, soweit dies nicht zwingend gesetzlich zulässig ist.',
          'Weiterverkauf, Vermietung, Unterlizenzierung oder Bereitstellung der App für unbefugte Dritte außerhalb deiner lizenzierten Jira-Cloud-Site.',
          'Eine Nutzung entgegen geltendem Recht oder der Atlassian Acceptable Use Policy.',
        ],
      },
      {
        id: 'availability',
        title: '3. Verfügbarkeit & Abhängigkeit von Atlassian Cloud / Forge',
        paragraphs: [
          `${APP_NAME} läuft zu 100 % nativ auf der Atlassian-Forge-Plattform in Atlassian Cloud. Verfügbarkeit, Betriebszeiten, Laufzeitverhalten und Speicherinfrastruktur hängen daher von Atlassian Cloud und den Atlassian-Forge-Diensten ab.`,
          'Wir sind bemüht, die App zuverlässig und kompatibel zu Jira-Cloud-Updates bereitzustellen, garantieren jedoch keine unterbrechungsfreie Verfügbarkeit und haften nicht für Ausfälle oder Änderungen seitens Atlassian Cloud oder der Jira-APIs.',
        ],
      },
      {
        id: 'privacy',
        title: '4. Datenschutz',
        paragraphs: [
          'Alle durch die App verarbeiteten und gespeicherten Daten verbleiben innerhalb von Atlassian Cloud (Atlassian-gehostetes Forge SQL). Sprotte Development betreibt keine externen Server für die App und hat keinen Zugriff auf deine Jira-Mandantendaten.',
          'Einzelheiten zu Berechtigungen, gespeicherten Daten, Aufbewahrung, Löschung und DSGVO-Rechten ergeben sich aus unserer Datenschutzerklärung, die Bestandteil dieser Bedingungen ist.',
        ],
      },
      {
        id: 'ip',
        title: '5. Geistiges Eigentum',
        paragraphs: [
          `Sämtliche Rechte an ${APP_NAME}, einschließlich Quellcode, Gestaltung und Dokumentation, verbleiben bei ${profile.company}. Alle Rechte an deinen Jira-Vorgängen, Stream-Konfigurationen, eingefrorenen Snapshots und Entscheidungen verbleiben vollständig bei dir bzw. deiner Organisation.`,
        ],
      },
      {
        id: 'support',
        title: '6. Support & Updates',
        paragraphs: [
          `Für Support-Anfragen, Fehlerberichte und Feedback stehen wir per E-Mail unter ${profile.email} zur Verfügung. Support erfolgt nach bestem Bemühen per E-Mail. Updates, Fehlerbehebungen und Weiterentwicklungen können über den Atlassian Marketplace bzw. Atlassian Forge bereitgestellt werden.`,
        ],
      },
      {
        id: 'liability',
        title: '7. Gewährleistung & Haftungsbeschränkung',
        paragraphs: [
          'Die App wird im Rahmen der technischen Möglichkeiten und der Atlassian-Forge-Plattform bereitgestellt; über gesetzliche Ansprüche hinaus übernehmen wir keine weitergehenden Garantien.',
          'Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei schuldhafter Verletzung von Leben, Körper oder Gesundheit sowie nach zwingenden gesetzlichen Vorschriften (insbesondere dem Produkthaftungsgesetz).',
          'Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht, und der Höhe nach begrenzt auf den vertragstypischen, vorhersehbaren Schaden. Eine weitergehende Haftung für mittelbare Schäden, entgangenen Gewinn oder Datenverlust ist ausgeschlossen, soweit gesetzlich zulässig.',
        ],
      },
      {
        id: 'termination',
        title: '8. Laufzeit & Beendigung',
        paragraphs: [
          'Diese Bedingungen gelten für die Dauer der Installation der App in deiner Jira-Cloud-Instanz. Du kannst die Nutzung jederzeit beenden, indem du die App in Jira Cloud deinstallierst und ein etwaiges Abonnement über den Atlassian Marketplace kündigst.',
          'Bei schwerwiegenden Verstößen gegen diese Bedingungen können wir die Lizenz beenden oder den Betrieb der App einstellen. Nach Deinstallation werden gespeicherte Forge-App-Daten durch Atlassian gemäß den Atlassian-Cloud-Aufbewahrungsrichtlinien gelöscht.',
        ],
      },
      {
        id: 'governing-law',
        title: '9. Änderungen, anwendbares Recht & Kontakt',
        paragraphs: [
          'Wir können diese Bedingungen anpassen, wenn produktbezogene, plattformseitige oder rechtliche Änderungen dies erfordern. Die fortgesetzte Nutzung nach Inkrafttreten aktualisierter Bedingungen gilt als Zustimmung.',
          'Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG), soweit keine zwingenden gesetzlichen Schutzvorschriften entgegenstehen.',
          `Anbieterkontakt: ${profile.company} (${profile.name}), Hamburg, Deutschland · ${profile.email}.`,
        ],
      },
    ],
    relatedLinkLabel: 'Siehe auch: Datenschutzerklärung',
  },
};

const copies: Record<Locale, MeetingPoBriefCopy> = { en, de };

export function getMeetingPoBriefCopy(locale: Locale): MeetingPoBriefCopy {
  return copies[locale];
}

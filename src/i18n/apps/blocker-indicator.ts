import { profile } from '@/app/content';
import type { Locale } from '../config';

export const APP_SLUG = '/apps/blocker-indicator';
export const APP_NAME = 'Blocker Indicator for Jira';
export const APP_SHORT_NAME = 'Blocker Indicator';
export const LAST_UPDATED_ISO = '2026-11-24';

export type AppPageKey = 'overview' | 'docs' | 'support' | 'privacy' | 'terms';

export type Highlight = {
  title: string;
  text: string;
};

export type PermissionItem = {
  scope: string;
  access: string;
  purpose: string;
};

export type StoredDataCategory = {
  title: string;
  description: string;
  details: string[];
};

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type QuickStartStep = {
  step: string;
  title: string;
  text: string;
};

export type DocFeatureSection = {
  id: string;
  title: string;
  summary: string;
  paragraphs: string[];
  bullets?: string[];
  codeBlock?: {
    label: string;
    lines: string[];
  };
  callout?: {
    tone: 'info' | 'warning';
    title: string;
    text: string;
  };
};

export type SupportFaqItem = {
  q: string;
  a: string;
};

const en = {
  appBadge: 'Jira Cloud App · Runs on Atlassian',
  nav: {
    label: 'Blocker Indicator for Jira navigation',
    backHome: 'Back to sprotte.dev',
    overview: 'Overview',
    docs: 'Docs',
    support: 'Support',
    privacy: 'Privacy',
    terms: 'Terms',
  },
  meta: {
    overview: {
      title: `${APP_NAME} | ${profile.company}`,
      description:
        'Automatic blocked status custom field, safe native Jira flagging, and Epic blocker overview. 100% Runs on Atlassian Forge app for Jira Cloud by Sprotte Development.',
    },
    docs: {
      title: `Documentation - ${APP_NAME} | ${profile.company}`,
      description:
        'Quick Start Guide and user documentation for Blocker Indicator for Jira: Blocked Status field, JQL, native Flagged field, Epic Blocker Panel, project overrides, and batch sync.',
    },
    support: {
      title: `Support - ${APP_NAME} | ${profile.company}`,
      description:
        'Support contact, response times, bug report guidelines, feature requests, and troubleshooting for Blocker Indicator for Jira by Sprotte Development.',
    },
    privacy: {
      title: `Privacy Policy - ${APP_NAME} | ${profile.company}`,
      description:
        'Privacy Policy for Blocker Indicator for Jira Cloud by Sprotte Development. 100% Runs on Atlassian Forge app with zero external servers, no tracking, and no personal data stored.',
    },
    terms: {
      title: `Terms of Service (EULA) - ${APP_NAME} | ${profile.company}`,
      description:
        'Terms of Service and End User License Agreement (EULA) for Blocker Indicator for Jira Cloud by Sprotte Development, licensed via the Atlassian Marketplace.',
    },
  },
  common: {
    vendorLabel: 'Vendor',
    vendorValue: `${profile.company} (${profile.name})`,
    contactLabel: 'Support & Privacy Contact',
    platformLabel: 'Platform',
    platformValue: '100% Atlassian Forge (Runs on Atlassian)',
    lastUpdatedLabel: 'Last updated',
    lastUpdatedDate: 'November 24, 2026',
    emailSupportSubject: `${APP_NAME} - Support Request`,
    emailBugSubject: `${APP_NAME} - Bug Report`,
    emailFeatureSubject: `${APP_NAME} - Feature Request`,
    emailPrivacySubject: `${APP_NAME} - Privacy / GDPR Request`,
    onThisPage: 'On this page',
    documentLabel: 'Pages & Legal',
  },
  overview: {
    title: APP_NAME,
    subtitle: 'Spot blocked work instantly across Jira boards, JQL filters, and Epics.',
    intro:
      'Blocker Indicator for Jira automatically maintains a read-only Blocked Status custom field, optionally sets native Jira flags without touching manually flagged cards, and surfaces Epic bottlenecks in one clean panel.',
    ctaDocs: 'Quick Start & Docs',
    ctaSupport: 'Get Support',
    preview: {
      caption: 'Illustrative Epic Blocker Panel & board card indicator',
      panelLabel: 'Epic Blocker Panel',
      epicKey: 'PAY-100',
      epicTitle: 'Checkout v2 Migration',
      tabs: ['Blocked issues (3)', 'Blockers (2)'],
      fieldLabel: 'Blocked Status',
      fieldValue: 'Blocked (2)',
      flagBadge: 'Flagged automatically',
      bottleneckLabel: 'Top bottleneck blockers',
      bottlenecks: [
        { key: 'INFRA-42', summary: 'Provision staging webhook gateway', count: '2 blocked' },
        { key: 'SEC-19', summary: 'Approve token rotation policy', count: '1 blocked' },
      ],
      manualNote: 'Manual Jira flags are detected and never cleared automatically.',
    },
    highlightsTitle: 'Built for Atlassian Cloud trust',
    highlightsText:
      'Every trigger, batch sync job, and configuration record stays inside Atlassian Cloud. There is no external backend operated by Sprotte Development.',
    highlights: [
      {
        title: '100% Runs on Atlassian',
        text: 'Built natively on Atlassian Forge (Node.js 24 & UI Kit). Zero external servers, zero external API calls, and zero tracking.',
      },
      {
        title: 'Zero personal data stored',
        text: 'Only app settings, cached field IDs, sync status, and a boolean flag-ownership property are stored. No user names, emails, or ticket content.',
      },
      {
        title: 'Respects Jira permissions',
        text: 'The Epic Blocker Panel queries issues in the context of the signed-in Jira user, so teams only see blockers they are allowed to view.',
      },
    ] satisfies Highlight[],
    architecture: {
      boundaryLabel: 'Atlassian Cloud',
      nodes: [
        { title: 'Your Jira Cloud site', text: 'Issues · Links · Flags · Epics' },
        { title: 'Atlassian Forge runtime', text: 'Node.js 24 · UI Kit · Async Sync' },
        { title: 'Forge Key-Value Storage', text: 'Config · Overrides · Sync Status' },
      ],
      readLabel: 'Jira API',
      storeLabel: 'app storage',
      outsideTitle: 'External servers',
      outsideText: 'None: zero external egress',
      scopesLabel: 'Minimal Forge scopes',
    },
    pagesSection: {
      eyebrow: 'Resources & Marketplace Policies',
      title: 'Everything you need to evaluate and run the app',
      openLink: 'Open page',
      cards: [
        {
          key: 'docs' as const,
          title: 'Setup & User Docs',
          text: 'Quick Start Guide, JQL examples, Board Card Layout, Epic Blocker Panel, project overrides, and Initial Sync instructions.',
        },
        {
          key: 'support' as const,
          title: 'Support & Contact',
          text: 'Direct email support at tony@sprotte.dev, typical response times, bug report checklist, and troubleshooting FAQ.',
        },
        {
          key: 'privacy' as const,
          title: 'Privacy Policy',
          text: 'Full breakdown of our Runs on Atlassian architecture, minimal Forge scopes, stored data, deletion, and GDPR compliance.',
        },
        {
          key: 'terms' as const,
          title: 'Terms of Service (EULA)',
          text: 'Paid via Atlassian Marketplace licensing, trials, subscriptions, availability under Forge, acceptable use, and liability.',
        },
      ],
    },
  },
  docs: {
    eyebrow: 'Documentation · Setup & User Guide',
    title: 'Setup & User Documentation',
    subtitle: `Quick Start Guide and feature reference for ${APP_NAME}`,
    intro:
      'Get up and running in a few minutes. Blocker Indicator for Jira updates blocked indicators automatically as issue links and statuses change, and supports a one-click batch sync for existing issues.',
    quickStartId: 'quick-start',
    quickStartTitle: 'Quick Start Guide',
    quickStartIntro:
      'Follow these steps after installing Blocker Indicator for Jira from the Atlassian Marketplace:',
    quickStartSteps: [
      {
        step: '01',
        title: 'Install from the Atlassian Marketplace',
        text: 'Add Blocker Indicator for Jira to your Jira Cloud site. Forge automatically provisions the read-only Blocked Status custom field.',
      },
      {
        step: '02',
        title: 'Review Global Defaults',
        text: 'Open Jira Apps -> Blocker Indicator to confirm your blocker link types (default: Blocks / is blocked by), completion rule, and optional auto-flagging.',
      },
      {
        step: '03',
        title: 'Optional: Add Flagged to your Edit Screen',
        text: 'If you enable native Jira flagging, make sure the standard Flagged field is present on the Edit Screen of each project where automatic flagging should run.',
      },
      {
        step: '04',
        title: 'Run an Initial Sync',
        text: 'Start a global or per-project sync from the app settings to calculate Blocked Status (and flags, if enabled) for issues that already exist in your site.',
      },
      {
        step: '05',
        title: 'Surface Blocked Status where your team works',
        text: 'Add Blocked Status to Board Card Layouts, JQL filters, Jira dashboards, and the Epic Child Work Items table via Configure columns -> Blocked Status.',
      },
    ] satisfies QuickStartStep[],
    features: [
      {
        id: 'blocked-status-field',
        title: '1. Blocked Status Custom Field (Read-Only)',
        summary:
          'Automatically reflects how many active blockers currently hold up an issue, ready for JQL, boards, dashboards, and Epic tables.',
        paragraphs: [
          'Blocker Indicator for Jira maintains a read-only custom field named Blocked Status on every managed issue. When an issue has open blockers, the field shows the count (for example, Blocked (2)). Once all blocking issues are completed or unlinked, the field is cleared automatically.',
          'Because the value is stored in a real Jira custom field managed via Atlassian Forge, you can query, filter, sort, and display it across native Jira views without extra macros.',
        ],
        bullets: [
          'Board Card Layout: Add Blocked Status in Board settings -> Card layout so blocked cards stand out on Scrum and Kanban boards.',
          'Epic Child Work Items table: Open any Epic, click Configure columns on the Child work items table, and enable Blocked Status.',
          'Filters & Dashboards: Build saved filters, Filter Results gadgets, or Two-Dimensional Filter Statistics around blocked work.',
        ],
        codeBlock: {
          label: 'Example JQL queries',
          lines: [
            '"Blocked Status" is not EMPTY',
            'project = PAY AND "Blocked Status" is not EMPTY ORDER BY priority DESC',
            'parent = PAY-100 AND "Blocked Status" is not EMPTY',
          ],
        },
      },
      {
        id: 'native-flagged-field',
        title: '2. Native Jira Flagged Field (Optional)',
        summary:
          'Highlights blocked cards yellow with a red flag on Jira boards and backlogs while protecting every manually set flag.',
        paragraphs: [
          "When automatic flagging is enabled, Blocker Indicator for Jira sets Jira's native Flagged field whenever an issue becomes blocked, and removes the flag once all blockers are resolved or removed.",
          'To ensure team workflows are never disrupted, the app stores a minimal Jira issue property (jira-blocker-indicator.flag-managed, containing only a boolean and timestamp) whenever it sets a flag. If a team member flagged an issue manually, the app detects that it does not own the flag and will never clear it when blockers resolve.',
        ],
        callout: {
          tone: 'warning',
          title: 'Admin requirement for automatic flagging',
          text: 'Jira only allows apps to update the native Flagged field if Flagged is placed on the Edit Screen of the respective project. If cards are not being flagged automatically, open Project settings -> Screens and add the Flagged field to the Edit Issue screen.',
        },
      },
      {
        id: 'epic-blocker-panel',
        title: '3. Epic Blocker Panel',
        summary:
          'Inspect every blocked child issue and identify top bottleneck blockers directly inside an Epic.',
        paragraphs: [
          'Open any Epic and select App actions -> Blocker Indicator to open the Epic Blocker Panel. It evaluates all child issues of the Epic live and organizes the results into two focused tabs:',
        ],
        bullets: [
          'Blocked issues tab: Lists each blocked child issue in the Epic along with its currently open blockers.',
          'Blockers tab: Aggregates blockers across the Epic and sorts them by impact (bottleneck blockers first, showing how many child issues each blocker is holding up).',
          "Permission-aware: All issue reads respect the signed-in Jira user's project and issue security permissions.",
        ],
      },
      {
        id: 'configuration-overrides',
        title: '4. Global Configuration & Project Overrides',
        summary:
          'Set sensible site-wide defaults and customize or disable behavior per project whenever teams work differently.',
        paragraphs: [
          'Jira Administrators configure site-wide defaults under Jira Apps -> Blocker Indicator. Project Administrators can override those settings for individual projects under Project settings -> Blocker Indicator.',
        ],
        bullets: [
          'Project override modes: Choose between Use global defaults, Use custom settings, or Turn off for this project.',
          "Configurable issue link types: Defaults to Blocks / is blocked by, and can be adjusted to match your Jira site's custom link types.",
          'Configurable completion (Done) rule: Decide whether a blocker counts as resolved when its Status category is Done or when Resolution is set.',
          "Flagged toggle: Enable or disable automatic updates to Jira's native Flagged field globally or per project.",
        ],
      },
      {
        id: 'initial-full-sync',
        title: '5. Initial & Full Sync',
        summary:
          'Backfill existing Jira issues safely in the background after installation or settings changes.',
        paragraphs: [
          'Day-to-day updates happen automatically via Forge events whenever issue links, statuses, or resolutions change. To bring existing issues up to date right after installation, or after changing link types or completion rules, trigger an asynchronous batch sync.',
          'You can run a Global Sync from Jira Apps -> Blocker Indicator or a targeted Project Sync from Project settings -> Blocker Indicator. The configuration view displays the last sync job status so administrators can verify completion.',
        ],
        callout: {
          tone: 'info',
          title: 'Safe to re-run anytime',
          text: 'Batch sync is idempotent and respects manual Jira flags. Re-running a sync only updates issues whose computed Blocked Status or app-managed flag differs from their current state.',
        },
      },
    ] satisfies DocFeatureSection[],
    relatedSupportLabel: 'Need help? Visit Support',
    relatedPrivacyLabel: 'Read Privacy Policy',
  },
  support: {
    eyebrow: 'Support · Help & Feedback',
    title: 'Support & Contact',
    subtitle: `Direct developer support for ${APP_NAME}`,
    intro:
      'Have a setup question, spotted a bug, or want to suggest a feature? Reach out directly by email. Support is provided personally by the developer behind Sprotte Development.',
    responseTitle: 'Response Times & Availability',
    responseItems: [
      {
        label: 'Standard inquiries',
        value: 'Within 1 business day',
        note: 'Monday to Friday, CET / CEST (Hamburg, Germany), excluding German public holidays.',
      },
      {
        label: 'Critical issues',
        value: 'Prioritized (few business hours)',
        note: 'Sync failures, unexpected flagging behavior, or permission errors receive priority handling.',
      },
      {
        label: 'Support channel',
        value: profile.email,
        note: 'Direct email support in English or German. No bots or multi-tier ticket queues.',
      },
    ],
    channelsTitle: 'Send an Email',
    channelsText:
      'Pick a prefilled template below or copy the address directly. Including the checklist items helps us resolve issues in a single reply.',
    bugReport: {
      title: 'Reporting a Bug',
      cta: 'Email Bug Report',
      intro: 'To help us diagnose and fix a bug quickly, please include:',
      items: [
        'Your Jira Cloud site URL or organization name (optional)',
        'Project type (company-managed or team-managed) and affected issue type (Epic, Story, Task, etc.)',
        'Your current Blocker Indicator settings (link types, Done rule, and whether auto-flagging is enabled)',
        "If related to flagging: confirm whether the Flagged field is on the project's Edit Screen",
        'Steps to reproduce, expected vs. actual behavior, and screenshots if available',
      ],
    },
    featureRequest: {
      title: 'Feature Requests & Feedback',
      cta: 'Suggest a Feature',
      intro: 'We actively evolve Blocker Indicator based on real Jira workflows. Tell us:',
      items: [
        'The workflow or bottleneck you want to solve on your boards, JQL filters, or Epics',
        'How your team currently tracks blockers or escalations in Jira Cloud',
        'Any constraints around project permissions, link types, or custom workflows',
      ],
    },
    billing: {
      title: 'Billing, Trials & Marketplace Licensing',
      text: `${APP_NAME} is Paid via Atlassian Marketplace. Free trials, user tier pricing, invoices, renewals, cancellations, and refund requests are managed directly by Atlassian through your Atlassian Billing administration portal. If you have questions about evaluating the app or choosing settings for your team, feel free to email us anytime.`,
    },
    faqTitle: 'Quick Troubleshooting FAQ',
    faq: [
      {
        q: 'Why is the native Jira Flagged field not being set on blocked issues?',
        a: "First verify that automatic flagging is enabled in Global Defaults or your project's custom settings. Next, check Project settings -> Screens and confirm that the standard Flagged field is added to the Edit Screen for the affected issue types. Jira requires the field on the Edit Screen before any app can update it.",
      },
      {
        q: 'Will the app remove flags that my team added manually?',
        a: 'No. Whenever Blocker Indicator sets a flag, it records a small issue property (jira-blocker-indicator.flag-managed) on that issue. When blockers are resolved, the app only removes flags that it set itself. Manually flagged issues are never unflagged automatically.',
      },
      {
        q: 'Why do older issues not show Blocked Status right after installation?',
        a: 'Live triggers update issues whenever links or statuses change going forward. To populate Blocked Status for existing issues, run an Initial Sync from Jira Apps -> Blocker Indicator (global) or Project settings -> Blocker Indicator (single project).',
      },
      {
        q: 'How do I show Blocked Status in the Epic Child Work Items table?',
        a: 'Open an Epic in Jira Cloud, locate the Child work items section, click Configure columns, and select Blocked Status. You can also add Blocked Status to your Board Card Layout and use it directly in JQL queries such as "Blocked Status" is not EMPTY.',
      },
    ] satisfies SupportFaqItem[],
    relatedDocsLabel: 'Read Setup & User Docs',
    relatedPrivacyLabel: 'Read Privacy Policy',
  },
  privacy: {
    eyebrow: 'Legal · Data Protection',
    title: 'Privacy Policy',
    subtitle: `Privacy Policy for ${APP_NAME} (Jira Cloud App)`,
    intro: `This Privacy Policy explains how ${profile.company} (${profile.name}) handles data when you install and use ${APP_NAME} in Atlassian Jira Cloud. Because ${APP_NAME} is built 100% natively on Atlassian Forge and qualifies for Atlassian's Runs on Atlassian program, all app logic and stored configuration remain strictly inside Atlassian Cloud infrastructure.`,
    atAGlance: [
      {
        title: '100% Runs on Atlassian',
        text: 'Runs natively on Atlassian Forge (Node.js 24 & UI Kit). Zero external servers.',
      },
      {
        title: 'Zero External Egress',
        text: 'No external API calls, no third-party transfers, no analytics, and no tracking.',
      },
      {
        title: 'No Personal Data Stored',
        text: 'Does not store user names, email addresses, comments, or ticket content.',
      },
    ] satisfies Highlight[],
    permissionsTitle: 'Atlassian Forge Permissions (Scopes)',
    permissionsIntro: `${APP_NAME} requests only the minimal Forge scopes needed to evaluate issue links, maintain the Blocked Status field, optionally update native Jira flags, and store app settings inside Atlassian Cloud:`,
    permissions: [
      {
        scope: 'read:jira-work',
        access: 'Read',
        purpose:
          "Reads Jira issues, issue links, link types, statuses, resolutions, projects, and field metadata to compute active blockers and render the Epic Blocker Panel (respecting the signed-in user's Jira permissions).",
      },
      {
        scope: 'write:jira-work',
        access: 'Write',
        purpose:
          "Updates Jira's native Flagged field when automatic flagging is enabled, and writes the minimal jira-blocker-indicator.flag-managed issue property so manually set flags are never removed.",
      },
      {
        scope: 'write:app-data:jira',
        access: 'App field',
        purpose:
          'Writes computed values (such as Blocked (2) or empty) to the app-owned read-only Blocked Status custom field in Jira.',
      },
      {
        scope: 'storage:app',
        access: 'App storage',
        purpose:
          'Stores global defaults, project-specific overrides, cached Jira field IDs, and the last sync job status in Atlassian-hosted Forge Key-Value Storage scoped to your Jira Cloud site.',
      },
    ] satisfies PermissionItem[],
    storedDataTitle: 'Data Stored Inside Atlassian Cloud',
    storedDataIntro:
      'All persisted data is strictly technical, non-personal, and stored exclusively inside your Atlassian Cloud environment:',
    storedData: [
      {
        title: 'Forge Key-Value Storage (Site-Scoped)',
        description:
          'Configuration and operational metadata stored in Atlassian-hosted Forge Key-Value Storage, isolated to your Jira Cloud site.',
        details: [
          'Global app defaults (configured link types, completion rule, and auto-flagging toggle)',
          'Project-specific overrides (Use global defaults, Use custom settings, or Turn off for this project)',
          'Last asynchronous sync job status and progress metadata',
          'Cached Jira custom field IDs (such as the Blocked Status and Flagged field IDs)',
        ],
      },
      {
        title: 'Jira Issue Property (jira-blocker-indicator.flag-managed)',
        description:
          'A tiny technical marker stored on Jira issues only when the app automatically sets a flag.',
        details: [
          'Contains only a boolean indicator and a timestamp',
          'Used exclusively to distinguish app-managed flags from manually set Jira flags',
          'Guarantees that manually flagged issues are never unflagged automatically',
        ],
      },
    ] satisfies StoredDataCategory[],
    notStoredTitle: 'No Personal User Data Stored',
    notStoredText:
      'Blocker Indicator for Jira does NOT store personal user data of any kind: no user names, no email addresses, no Atlassian account IDs, no comments, and no ticket summaries or descriptions. We do not collect usage telemetry, third-party analytics, advertising identifiers, or browser tracking cookies.',
    sections: [
      {
        id: 'controller',
        title: '1. Vendor & Data Controller Contact',
        paragraphs: [
          `${APP_NAME} is provided by ${profile.company} (${profile.name}), Hamburg, Germany ("Vendor", "we", "us").`,
          `For any privacy, security, or data protection inquiries, please contact us at ${profile.email}. Within your organization's Jira Cloud site, your organization acts as the data controller for all Jira content processed by the app.`,
        ],
      },
      {
        id: 'architecture',
        title: '2. "Runs on Atlassian" Architecture & Zero External Egress',
        paragraphs: [
          `${APP_NAME} runs 100% natively on Atlassian Forge (Node.js 24 runtime and UI Kit) and qualifies for Atlassian's Runs on Atlassian program. All application code executes exclusively inside Atlassian's managed cloud infrastructure.`,
          'Sprotte Development operates no external backend server for this app. The app makes zero external API calls, performs zero external network egress, uses no third-party sub-processors beyond Atlassian, includes no analytics or tracking, and never transmits or shares your Jira data with third parties.',
        ],
      },
      {
        id: 'processing',
        title: '3. Purpose & Legal Basis of Processing',
        paragraphs: [
          'Jira issue metadata (issue keys, issue links, statuses, resolutions, and parent/child Epic relationships) is processed transiently in memory inside Atlassian Forge solely to calculate the Blocked Status custom field, manage optional native Jira flags, and display the Epic Blocker Panel.',
          "Under the EU General Data Protection Regulation (GDPR), this processing takes place on the basis of contract performance (Art. 6(1)(b) GDPR) and legitimate interests in reliable project and dependency tracking (Art. 6(1)(f) GDPR), subject to your organization's Jira Cloud agreement and Atlassian's Data Processing Addendum.",
        ],
      },
      {
        id: 'retention',
        title: '4. Data Retention & Deletion',
        paragraphs: [
          'Configuration data remains in Atlassian-hosted Forge Key-Value Storage only while the app is installed on your Jira Cloud site:',
        ],
        bullets: [
          'Project or global updates: Administrators can change settings, disable projects, or clear project overrides at any time in the app settings.',
          'App uninstallation: When a Jira Site Administrator uninstalls Blocker Indicator for Jira, Atlassian automatically deletes all Forge Key-Value Storage data in accordance with Atlassian Cloud data retention policies.',
          'Issue properties: The non-personal jira-blocker-indicator.flag-managed property (boolean + timestamp) lives on the respective Jira issue inside your Jira Cloud site and is removed when an app-managed flag is cleared or when the issue is deleted.',
        ],
      },
      {
        id: 'security',
        title: '5. Security, Permissions & Data Residency',
        paragraphs: [
          'Because Blocker Indicator for Jira has no external infrastructure and zero external egress, encryption in transit and at rest, tenant isolation, authentication, and data residency are governed directly by Atlassian Cloud and Atlassian Forge under your Jira Cloud plan.',
          'The Epic Blocker Panel reads Jira issues in the context of the signed-in user so existing Jira project and issue security permissions are strictly respected.',
        ],
      },
      {
        id: 'rights',
        title: '6. Data Subject Rights (GDPR)',
        paragraphs: [
          'Under the GDPR and applicable data protection laws, individuals have the right to request access to, rectification of, or erasure of their personal data, as well as the right to restrict or object to processing and to lodge a complaint with a competent supervisory authority.',
          `Blocker Indicator for Jira does not persist any personal user data, and Sprotte Development has no access to your Jira Cloud tenant data. Any inquiries regarding Jira issue data are handled directly by your Jira Site Administrator. If you have questions about this Privacy Policy or need assistance, contact us anytime at ${profile.email}.`,
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
    intro: `These Terms of Service and End User License Agreement ("Terms") govern the installation and use of ${APP_NAME} ("the App"), a Jira Cloud application developed by ${profile.company} (${profile.name}) ("Vendor", "we", "us"). By installing, evaluating, or using the App via the Atlassian Marketplace, you agree to these Terms on behalf of yourself and your organization.`,
    sections: [
      {
        id: 'license',
        title: '1. License Grant & Paid via Atlassian Marketplace',
        paragraphs: [
          'Subject to your compliance with these Terms and the applicable Atlassian Marketplace Terms of Use, we grant you a non-exclusive, non-transferable, non-sublicensable, revocable license to install and use the App within your licensed Atlassian Jira Cloud site(s) solely for your internal business operations.',
          `${APP_NAME} is offered as a Paid via Atlassian Marketplace app. Free trials, user tier pricing, billing, renewals, cancellations, and refunds (where applicable) are managed exclusively by Atlassian through the Atlassian Marketplace in accordance with Atlassian's Marketplace Terms.`,
        ],
      },
      {
        id: 'acceptable-use',
        title: '2. Scope of Use & Restrictions',
        paragraphs: [
          'You remain responsible for configuring blocker link types, completion rules, project overrides, and Jira screens (such as adding the Flagged field to your Edit Screen when automatic flagging is enabled) in your Jira Cloud site. You may not:',
        ],
        bullets: [
          'Reverse engineer, decompile, disassemble, or attempt to extract source code from the App, except to the extent permitted by mandatory law.',
          'Resell, rent, lease, sublicense, or make the App available to unauthorized third parties outside your licensed Jira Cloud site.',
          "Use the App in violation of applicable laws or Atlassian's Acceptable Use Policy.",
        ],
      },
      {
        id: 'availability',
        title: '3. Availability & Atlassian Cloud / Forge Dependency',
        paragraphs: [
          `${APP_NAME} runs 100% natively on the Atlassian Forge platform inside Atlassian Cloud. Availability, uptime, trigger execution, async batch sync limits, and storage infrastructure therefore depend on Atlassian Cloud and Atlassian Forge services.`,
          'We aim to keep the App reliable and compatible with Jira Cloud updates, but we do not guarantee uninterrupted or error-free operation and are not responsible for outages, rate limits, API changes, or disruptions caused by Atlassian Cloud or Jira.',
        ],
      },
      {
        id: 'privacy',
        title: '4. Data Protection & Privacy',
        paragraphs: [
          'All data processed and stored by the App remains strictly within Atlassian Cloud (Atlassian-hosted Forge Key-Value Storage and Jira issue properties). Sprotte Development operates no external servers for the App, stores no personal user data, and has no access to your Jira tenant data.',
          'Full details on permissions, stored configuration, retention, deletion, and GDPR compliance are set out in our Privacy Policy, which forms an integral part of these Terms.',
        ],
      },
      {
        id: 'ip',
        title: '5. Intellectual Property',
        paragraphs: [
          `${profile.company} retains all right, title, and interest in and to ${APP_NAME}, including its software code, UI design, and documentation. You retain full ownership of all Jira issues, links, configurations, and project data in your Jira Cloud site.`,
        ],
      },
      {
        id: 'support',
        title: '6. Support & Updates',
        paragraphs: [
          `For support, bug reports, or feature requests, please contact us at ${profile.email} or review our Support page. We provide email support on a best-effort basis (typically replying within one business day) and may deliver updates, bug fixes, or improvements through the Atlassian Marketplace and Forge deployment channels.`,
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
          'These Terms apply for as long as the App is installed on your Jira Cloud site or your Atlassian Marketplace subscription remains active. You may terminate your use at any time by uninstalling the App in Jira Cloud and cancelling your subscription via the Atlassian Marketplace.',
          'We may suspend or discontinue the App or terminate your license if you materially breach these Terms. Upon uninstallation, Atlassian deletes stored Forge Key-Value Storage data in accordance with Atlassian Cloud retention policies.',
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

export type BlockerIndicatorCopy = typeof en;

const de: BlockerIndicatorCopy = {
  appBadge: 'Jira-Cloud-App · Runs on Atlassian',
  nav: {
    label: 'Blocker Indicator for Jira Navigation',
    backHome: 'Zurück zu sprotte.dev',
    overview: 'Übersicht',
    docs: 'Doku',
    support: 'Support',
    privacy: 'Datenschutz',
    terms: 'AGB / EULA',
  },
  meta: {
    overview: {
      title: `${APP_NAME} | ${profile.company}`,
      description:
        'Automatisches Blocked-Status-Custom-Field, sicheres natives Jira-Flagging und Epic-Blocker-Panel. 100 % Runs on Atlassian Forge App für Jira Cloud von Sprotte Development.',
    },
    docs: {
      title: `Dokumentation - ${APP_NAME} | ${profile.company}`,
      description:
        'Quick-Start-Guide und Nutzer-Dokumentation für Blocker Indicator for Jira: Blocked-Status-Feld, JQL, natives Flagged-Feld, Epic-Blocker-Panel, Projekt-Overrides und Batch-Sync.',
    },
    support: {
      title: `Support - ${APP_NAME} | ${profile.company}`,
      description:
        'Support-Kontakt, Reaktionszeiten, Hinweise für Fehlerberichte und Feature-Wünsche sowie Fehlerbehebung für Blocker Indicator for Jira von Sprotte Development.',
    },
    privacy: {
      title: `Datenschutzerklärung - ${APP_NAME} | ${profile.company}`,
      description:
        'Datenschutzerklärung für Blocker Indicator for Jira Cloud von Sprotte Development. 100 % Runs on Atlassian Forge App ohne externe Server, ohne Tracking und ohne Speicherung personenbezogener Daten.',
    },
    terms: {
      title: `Nutzungsbedingungen (EULA) - ${APP_NAME} | ${profile.company}`,
      description:
        'Nutzungsbedingungen und Endbenutzer-Lizenzvertrag (EULA) für Blocker Indicator for Jira Cloud von Sprotte Development, lizenziert über den Atlassian Marketplace.',
    },
  },
  common: {
    vendorLabel: 'Anbieter',
    vendorValue: `${profile.company} (${profile.name})`,
    contactLabel: 'Support- & Datenschutzkontakt',
    platformLabel: 'Plattform',
    platformValue: '100 % Atlassian Forge (Runs on Atlassian)',
    lastUpdatedLabel: 'Stand',
    lastUpdatedDate: '24. November 2026',
    emailSupportSubject: `${APP_NAME} - Support-Anfrage`,
    emailBugSubject: `${APP_NAME} - Fehlerbericht`,
    emailFeatureSubject: `${APP_NAME} - Feature-Wunsch`,
    emailPrivacySubject: `${APP_NAME} - Datenschutz- / DSGVO-Anfrage`,
    onThisPage: 'Auf dieser Seite',
    documentLabel: 'Seiten & Rechtliches',
  },
  overview: {
    title: APP_NAME,
    subtitle: 'Blockierte Aufgaben sofort erkennen: auf Jira-Boards, in JQL-Filtern und auf Epics.',
    intro:
      'Blocker Indicator for Jira pflegt automatisch ein schreibgeschütztes Blocked-Status-Custom-Field, setzt optional native Jira-Flags ohne manuell gesetzte Flags anzutasten und bündelt Engpässe direkt im Epic-Blocker-Panel.',
    ctaDocs: 'Quick Start & Doku',
    ctaSupport: 'Support erhalten',
    preview: {
      caption: 'Beispielhafte Darstellung von Epic-Blocker-Panel und Board-Kartenstatus',
      panelLabel: 'Epic Blocker Panel',
      epicKey: 'PAY-100',
      epicTitle: 'Checkout v2 Migration',
      tabs: ['Blocked issues (3)', 'Blockers (2)'],
      fieldLabel: 'Blocked Status',
      fieldValue: 'Blocked (2)',
      flagBadge: 'Automatisch geflaggt',
      bottleneckLabel: 'Größte Engpass-Blocker',
      bottlenecks: [
        { key: 'INFRA-42', summary: 'Staging-Webhook-Gateway bereitstellen', count: '2 blockiert' },
        { key: 'SEC-19', summary: 'Token-Rotation-Richtlinie freigeben', count: '1 blockiert' },
      ],
      manualNote: 'Manuell gesetzte Jira-Flags werden erkannt und niemals automatisch entfernt.',
    },
    highlightsTitle: 'Entwickelt für maximales Vertrauen in Atlassian Cloud',
    highlightsText:
      'Jeder Trigger, jeder Batch-Sync und jede Einstellung bleibt vollständig innerhalb von Atlassian Cloud. Sprotte Development betreibt kein externes Backend.',
    highlights: [
      {
        title: '100 % Runs on Atlassian',
        text: 'Nativ auf Atlassian Forge gebaut (Node.js 24 & UI Kit). Keine externen Server, keine externen API-Aufrufe und kein Tracking.',
      },
      {
        title: 'Keine personenbezogenen Daten',
        text: 'Gespeichert werden nur App-Konfiguration, gecachte Feld-IDs, Sync-Status und eine Boolean-Flag-Property. Keine Namen, E-Mails oder Ticket-Inhalte.',
      },
      {
        title: 'Beachtet Jira-Leserechte',
        text: 'Das Epic-Blocker-Panel fragt Vorgänge im Kontext des angemeldeten Jira-Users ab, sodass bestehende Projekt- und Vorgangsrechte stets greifen.',
      },
    ],
    architecture: {
      boundaryLabel: 'Atlassian Cloud',
      nodes: [
        { title: 'Deine Jira-Cloud-Site', text: 'Vorgänge · Links · Flags · Epics' },
        { title: 'Atlassian-Forge-Runtime', text: 'Node.js 24 · UI Kit · Async Sync' },
        { title: 'Forge Key-Value Storage', text: 'Konfig · Overrides · Sync-Status' },
      ],
      readLabel: 'Jira API',
      storeLabel: 'App-Speicher',
      outsideTitle: 'Externe Server',
      outsideText: 'Keine: kein externer Egress',
      scopesLabel: 'Minimale Forge-Scopes',
    },
    pagesSection: {
      eyebrow: 'Ressourcen & Marketplace-Richtlinien',
      title: 'Alle Infos für Einrichtung, Support und Compliance',
      openLink: 'Seite öffnen',
      cards: [
        {
          key: 'docs',
          title: 'Setup & Nutzer-Doku',
          text: 'Quick-Start-Guide, JQL-Beispiele, Board Card Layout, Epic-Blocker-Panel, Projekt-Overrides und Hinweise zum Initial Sync.',
        },
        {
          key: 'support',
          title: 'Support & Kontakt',
          text: 'Direkter E-Mail-Support über tony@sprotte.dev, Reaktionszeiten, Checkliste für Fehlerberichte und Troubleshooting-FAQ.',
        },
        {
          key: 'privacy',
          title: 'Datenschutzerklärung',
          text: 'Alle Details zur Runs-on-Atlassian-Architektur, minimalen Forge-Scopes, Datenspeicherung, Löschung und DSGVO.',
        },
        {
          key: 'terms',
          title: 'Nutzungsbedingungen (EULA)',
          text: 'Lizenzierung über den Atlassian Marketplace (Paid via Atlassian), Testphase, Verfügbarkeit unter Forge und Haftung.',
        },
      ],
    },
  },
  docs: {
    eyebrow: 'Dokumentation · Einrichtung & Nutzung',
    title: 'Setup- & Nutzer-Dokumentation',
    subtitle: `Quick-Start-Guide und Funktionsreferenz für ${APP_NAME}`,
    intro:
      'In wenigen Minuten einsatzbereit. Blocker Indicator for Jira hält Blocker-Anzeigen bei jeder Änderung an Links oder Status automatisch aktuell und aktualisiert bestehende Tickets per asynchronem Batch-Sync.',
    quickStartId: 'quick-start',
    quickStartTitle: 'Quick-Start-Guide',
    quickStartIntro:
      'Folge diesen Schritten nach der Installation von Blocker Indicator for Jira über den Atlassian Marketplace:',
    quickStartSteps: [
      {
        step: '01',
        title: 'Aus dem Atlassian Marketplace installieren',
        text: 'Installiere Blocker Indicator for Jira in deiner Jira-Cloud-Site. Atlassian Forge legt das schreibgeschützte Custom Field Blocked Status automatisch an.',
      },
      {
        step: '02',
        title: 'Globale Defaults prüfen',
        text: 'Öffne Jira Apps -> Blocker Indicator und prüfe die Link-Typen (Standard: Blocks / is blocked by), die Erledigt-Regel und die Option für automatisches Flagging.',
      },
      {
        step: '03',
        title: 'Optional: Flagged auf den Edit-Screen legen',
        text: 'Wenn du das native Jira-Flagging aktivierst, stelle sicher, dass das Standardfeld Flagged auf dem Edit-Screen der jeweiligen Projekte liegt.',
      },
      {
        step: '04',
        title: 'Initial Sync starten',
        text: 'Starte einen globalen oder projektbezogenen Sync in den App-Einstellungen, damit Blocked Status (und ggf. Flags) für alle bestehenden Tickets berechnet werden.',
      },
      {
        step: '05',
        title: 'Blocked Status in Boards, Filtern und Epics einblenden',
        text: 'Füge Blocked Status im Board Card Layout, in JQL-Filtern, Dashboards und in der Epic Child-Work-Items-Tabelle über Configure columns -> Blocked Status hinzu.',
      },
    ],
    features: [
      {
        id: 'blocked-status-field',
        title: '1. Blocked Status Custom Field (schreibgeschützt)',
        summary:
          'Zeigt automatisch die Anzahl offener Blocker an: direkt nutzbar in JQL, Boards, Dashboards und Epic-Tabellen.',
        paragraphs: [
          'Blocker Indicator for Jira pflegt automatisch das schreibgeschützte Custom Field Blocked Status. Sobald offene Blocker existieren, zeigt das Feld die Anzahl an (z. B. Blocked (2)). Sobald alle Blocker erledigt oder entfernt sind, wird das Feld automatisch geleert.',
          'Da es sich um ein echtes Jira-Custom-Field auf Basis von Atlassian Forge handelt, lässt sich der Wert überall in Jira nativ filtern, sortieren und einblenden.',
        ],
        bullets: [
          'Board Card Layout: Füge Blocked Status unter Board-Einstellungen -> Kartenlayout hinzu, um blockierte Karten auf Scrum- und Kanban-Boards direkt zu erkennen.',
          'Epic Child-Work-Items-Tabelle: Öffne ein Epic, wähle in der Child-Work-Items-Tabelle Configure columns und aktiviere Blocked Status.',
          'Filter & Dashboards: Nutze das Feld in gespeicherten Filtern, Filter-Ergebnis-Gadgets oder zweidimensionalen Dashboard-Statistiken.',
        ],
        codeBlock: {
          label: 'JQL-Beispiele',
          lines: [
            '"Blocked Status" is not EMPTY',
            'project = PAY AND "Blocked Status" is not EMPTY ORDER BY priority DESC',
            'parent = PAY-100 AND "Blocked Status" is not EMPTY',
          ],
        },
      },
      {
        id: 'native-flagged-field',
        title: '2. Natives Jira Flagged-Feld (optional)',
        summary:
          'Markiert blockierte Karten auf Boards und im Backlog gelb mit rotem Flag und schützt dabei zuverlässig manuell gesetzte Flags.',
        paragraphs: [
          'Ist das automatische Flagging aktiv, setzt Blocker Indicator for Jira automatisch das native Jira-Feld Flagged, sobald ein Ticket blockiert wird, und entfernt das Flag wieder, sobald keine offenen Blocker mehr vorliegen.',
          'Manuell gesetzte Flags bleiben jederzeit geschützt: Immer wenn die App ein Flag setzt, speichert sie eine minimale Issue Property (jira-blocker-indicator.flag-managed mit Boolean und Zeitstempel) auf dem Ticket. Wurde ein Flag von Hand gesetzt, erkennt die App das sofort und entfernt dieses Flag beim Auflösen von Blockern niemals.',
        ],
        callout: {
          tone: 'warning',
          title: 'Wichtiger Admin-Hinweis für automatisches Flagging',
          text: 'Jira erlaubt Apps das Bearbeiten des nativen Flagged-Felds nur, wenn das Feld Flagged auf dem Edit-Screen (Bearbeitungsbildschirm) des jeweiligen Projekts liegt. Prüfe bei Bedarf unter Projekteinstellungen -> Bildschirme, ob Flagged im Edit-Screen enthalten ist.',
        },
      },
      {
        id: 'epic-blocker-panel',
        title: '3. Epic Blocker Panel',
        summary:
          'Alle blockierten Child-Issues und die wichtigsten Engpass-Blocker direkt auf dem Epic im Blick.',
        paragraphs: [
          'Öffne ein Epic und wähle App-Aktionen -> Blocker Indicator, um das Epic Blocker Panel anzuzeigen. Das Panel wertet alle Child-Issues live aus und strukturiert sie in zwei Tabs:',
        ],
        bullets: [
          'Tab Blocked issues: Zeigt jedes blockierte Child-Issue des Epics samt seinen aktuell offenen Blockern.',
          'Tab Blockers: Gruppiert und sortiert alle Blocker nach Engpass-Wirkung (inklusive Anzahl der jeweils blockierten Child-Issues).',
          'Berechtigungskonform: Alle Abfragen erfolgen unter Beachtung der Jira-Leserechte des angemeldeten Users.',
        ],
      },
      {
        id: 'configuration-overrides',
        title: '4. Globale Konfiguration & Projekt-Overrides',
        summary:
          'Einheitliche Standardregeln für die gesamte Site, bei Bedarf pro Projekt anpassbar oder abschaltbar.',
        paragraphs: [
          'Jira-Administratoren verwalten die globalen Standardwerte unter Jira Apps -> Blocker Indicator. Projektadministratoren können das Verhalten gezielt pro Projekt unter Project settings -> Blocker Indicator überschreiben.',
        ],
        bullets: [
          'Projekt-Modi: Wähle zwischen Use global defaults, Use custom settings oder Turn off for this project.',
          'Konfigurierbare Link-Typen: Standardmäßig Blocks / is blocked by, frei anpassbar an eigene Jira-Verknüpfungstypen.',
          'Konfigurierbare Erledigt-Regel: Lege fest, ob ein Blocker als erledigt gilt, wenn Status category is Done zutrifft oder wenn Resolution is set.',
          'Flagging-Option: Aktiviere oder deaktiviere das automatische Setzen des nativen Flagged-Felds global oder pro Projekt.',
        ],
      },
      {
        id: 'initial-full-sync',
        title: '5. Initial & Full Sync',
        summary:
          'Asynchroner Batch-Sync für bestehende Tickets nach der Installation oder nach Konfigurationsänderungen.',
        paragraphs: [
          'Im laufenden Betrieb aktualisiert die App betroffene Tickets automatisch bei Link-, Status- oder Lösungsänderungen. Für bestehende Tickets direkt nach der Installation oder nach einer Änderung der Link-Typen bzw. Erledigt-Regel steht ein asynchroner Batch-Sync bereit.',
          'Der Sync lässt sich global unter Jira Apps -> Blocker Indicator oder gezielt pro Projekt unter Project settings -> Blocker Indicator starten. Der letzte Sync-Job-Status wird direkt in den Einstellungen angezeigt.',
        ],
        callout: {
          tone: 'info',
          title: 'Jederzeit sicher wiederholbar',
          text: 'Der Batch-Sync arbeitet idempotent und schützt manuell gesetzte Jira-Flags. Es werden nur Vorgänge aktualisiert, deren berechneter Blocked Status oder App-verwaltetes Flag vom aktuellen Stand abweicht.',
        },
      },
    ],
    relatedSupportLabel: 'Hilfe benötigt? Zum Support',
    relatedPrivacyLabel: 'Datenschutzerklärung lesen',
  },
  support: {
    eyebrow: 'Support · Hilfe & Feedback',
    title: 'Support & Kontakt',
    subtitle: `Direkter Entwickler-Support für ${APP_NAME}`,
    intro:
      'Fragen zur Einrichtung, ein Fehlerbericht oder ein Feature-Wunsch? Schreib einfach direkt per E-Mail. Support erfolgt persönlich durch den Entwickler von Sprotte Development.',
    responseTitle: 'Reaktionszeiten & Erreichbarkeit',
    responseItems: [
      {
        label: 'Reguläre Anfragen',
        value: 'Innerhalb von 1 Werktag',
        note: 'Montag bis Freitag, MEZ / MESZ (Hamburg, Deutschland), ausgenommen gesetzliche Feiertage in Deutschland.',
      },
      {
        label: 'Kritische Probleme',
        value: 'Priorisiert (wenige Geschäftsstunden)',
        note: 'Sync-Fehler, unerwartetes Flagging-Verhalten oder Berechtigungsprobleme werden vorrangig bearbeitet.',
      },
      {
        label: 'Support-Kanal',
        value: profile.email,
        note: 'Direkter E-Mail-Support auf Deutsch oder Englisch. Keine Bots, keine mehrstufigen Warteschlangen.',
      },
    ],
    channelsTitle: 'E-Mail senden',
    channelsText:
      'Wähle eine passende Vorlage oder kopiere die E-Mail-Adresse. Mit den Angaben aus den Checklisten können wir dein Anliegen meist schon mit der ersten Antwort lösen.',
    bugReport: {
      title: 'Fehlerbericht (Bug Report)',
      cta: 'Fehler per E-Mail melden',
      intro: 'Für eine schnelle Analyse und Behebung helfen uns diese Angaben:',
      items: [
        'Deine Jira-Cloud-Site-URL oder dein Organisationsname (optional)',
        'Projekttyp (company-managed oder team-managed) sowie betroffener Vorgangstyp (Epic, Story, Task usw.)',
        'Aktuelle Blocker-Indicator-Einstellungen (Link-Typen, Erledigt-Regel und ob Auto-Flagging aktiv ist)',
        'Bei Flagging-Fragen: Hinweis, ob das Feld Flagged auf dem Edit-Screen des Projekts liegt',
        'Schritte zum Nachstellen, erwartetes vs. tatsächliches Verhalten und gerne Screenshots',
      ],
    },
    featureRequest: {
      title: 'Feature-Wünsche & Feedback',
      cta: 'Feature vorschlagen',
      intro:
        'Wir entwickeln Blocker Indicator eng an realen Jira-Workflows weiter. Schreib uns gern:',
      items: [
        'Welchen Workflow oder Engpass du auf Boards, in JQL-Filtern oder auf Epics lösen möchtest',
        'Wie dein Team Blocker aktuell in Jira Cloud verfolgt oder eskaliert',
        'Besondere Rahmenbedingungen zu Projektberechtigungen, Link-Typen oder Workflows',
      ],
    },
    billing: {
      title: 'Abrechnung, Testphase & Marketplace-Lizenz',
      text: `${APP_NAME} wird über Paid via Atlassian Marketplace lizenziert. Kostenlose Testphasen, Benutzerstufen, Rechnungen, Verlängerungen, Kündigungen und Erstattungen werden direkt durch Atlassian über dein Atlassian-Billing-Portal verwaltet. Bei Fragen zur Evaluation oder zur optimalen Konfiguration für dein Team melde dich jederzeit per E-Mail.`,
    },
    faqTitle: 'Häufige Fragen zur Fehlerbehebung',
    faq: [
      {
        q: 'Warum wird das native Jira-Feld Flagged bei blockierten Tickets nicht gesetzt?',
        a: 'Prüfe zuerst, ob automatisches Flagging in den globalen Defaults oder im Projekt-Override aktiviert ist. Prüfe anschließend unter Projekteinstellungen -> Bildschirme, ob das Standardfeld Flagged auf dem Edit-Screen der jeweiligen Vorgangstypen liegt. Jira setzt dies voraus, damit Apps das Feld aktualisieren dürfen.',
      },
      {
        q: 'Entfernt die App Flags, die unser Team manuell gesetzt hat?',
        a: 'Nein. Immer wenn Blocker Indicator ein Flag setzt, speichert die App eine kleine Issue Property (jira-blocker-indicator.flag-managed) am Ticket. Werden Blocker gelöst, entfernt die App ausschließlich selbst gesetzte Flags. Manuell gesetzte Flags werden niemals automatisch entfernt.',
      },
      {
        q: 'Warum zeigen ältere Tickets direkt nach der Installation noch keinen Blocked Status?',
        a: 'Die Live-Trigger aktualisieren Tickets ab sofort bei jeder Link- oder Statusänderung. Für bereits bestehende Tickets starte einfach einmalig den Initial Sync unter Jira Apps -> Blocker Indicator (global) oder Project settings -> Blocker Indicator (pro Projekt).',
      },
      {
        q: 'Wie blende ich Blocked Status in der Epic Child-Work-Items-Tabelle ein?',
        a: 'Öffne ein Epic in Jira Cloud, klicke im Bereich Child work items auf Configure columns und aktiviere Blocked Status. Zusätzlich kannst du Blocked Status im Board Card Layout einblenden und direkt in JQL nutzen, z. B. mit "Blocked Status" is not EMPTY.',
      },
    ],
    relatedDocsLabel: 'Zur Setup- & Nutzer-Doku',
    relatedPrivacyLabel: 'Datenschutzerklärung lesen',
  },
  privacy: {
    eyebrow: 'Rechtliches · Datenschutz',
    title: 'Datenschutzerklärung',
    subtitle: `Datenschutzerklärung für ${APP_NAME} (Jira-Cloud-App)`,
    intro: `Diese Datenschutzerklärung erläutert, wie ${profile.company} (${profile.name}) mit Daten bei der Installation und Nutzung von ${APP_NAME} in Atlassian Jira Cloud umgeht. Da ${APP_NAME} zu 100 % nativ auf Atlassian Forge läuft und für das Atlassian-Programm „Runs on Atlassian“ qualifiziert ist, verbleiben sämtliche Berechnungen und Konfigurationsdaten ausschließlich innerhalb der Atlassian-Cloud-Infrastruktur.`,
    atAGlance: [
      {
        title: '100 % Runs on Atlassian',
        text: 'Läuft nativ auf Atlassian Forge (Node.js 24 & UI Kit). Kein externer Server.',
      },
      {
        title: 'Kein externer Egress',
        text: 'Keine externen API-Aufrufe, keine Datenweitergabe an Dritte, kein Tracking.',
      },
      {
        title: 'Keine personenbezogenen Daten',
        text: 'Es werden keine Namen, E-Mails, Kommentare oder Ticket-Inhalte gespeichert.',
      },
    ],
    permissionsTitle: 'Atlassian-Forge-Berechtigungen (Scopes)',
    permissionsIntro: `${APP_NAME} fordert ausschließlich die minimal notwendigen Forge-Scopes an, um Blocker-Verknüpfungen auszuwerten, das Feld Blocked Status zu pflegen, optional native Jira-Flags zu setzen und App-Einstellungen in Atlassian Cloud zu speichern:`,
    permissions: [
      {
        scope: 'read:jira-work',
        access: 'Lesend',
        purpose:
          'Liest Jira-Vorgänge, Verknüpfungen, Link-Typen, Status, Lösungen, Projekte und Feld-Metadaten, um aktive Blocker zu berechnen und das Epic-Blocker-Panel unter Beachtung der User-Leserechte anzuzeigen.',
      },
      {
        scope: 'write:jira-work',
        access: 'Schreibend',
        purpose:
          'Aktualisiert bei aktiviertem Auto-Flagging das native Jira-Feld Flagged und schreibt die minimale Issue Property jira-blocker-indicator.flag-managed zum Schutz manueller Flags.',
      },
      {
        scope: 'write:app-data:jira',
        access: 'App-Feld',
        purpose:
          'Schreibt berechnete Werte (wie Blocked (2) oder leer) in das App-eigene, schreibgeschützte Custom Field Blocked Status.',
      },
      {
        scope: 'storage:app',
        access: 'App-Speicher',
        purpose:
          'Speichert globale Defaults, projektbezogene Overrides, gecachte Jira-Feld-IDs und den letzten Sync-Job-Status im Atlassian-gehosteten Forge Key-Value Storage deiner Jira-Cloud-Site.',
      },
    ],
    storedDataTitle: 'Gespeicherte Daten innerhalb von Atlassian Cloud',
    storedDataIntro:
      'Alle dauerhaft gespeicherten Daten sind rein technischer Natur, nicht personenbezogen und verbleiben vollständig in deiner Atlassian-Cloud-Umgebung:',
    storedData: [
      {
        title: 'Forge Key-Value Storage (Site-bezogen)',
        description:
          'Konfigurations- und Betriebsdaten im Atlassian-gehosteten Forge Key-Value Storage, strikt isoliert auf deine Jira-Cloud-Site.',
        details: [
          'Globale App-Defaults (konfigurierte Link-Typen, Erledigt-Regel und Auto-Flagging-Option)',
          'Projekt-spezifische Overrides (Use global defaults, Use custom settings oder Turn off for this project)',
          'Status-Metadaten des letzten asynchronen Sync-Jobs',
          'Gecachte Jira-Custom-Field-IDs (etwa für Blocked Status und Flagged)',
        ],
      },
      {
        title: 'Jira Issue Property (jira-blocker-indicator.flag-managed)',
        description:
          'Ein minimaler technischer Marker direkt auf dem Jira-Issue, nur wenn die App ein Flag automatisch setzt.',
        details: [
          'Enthält ausschließlich einen Boolean-Wert und einen Zeitstempel',
          'Dient allein zur Unterscheidung zwischen App-gesetzten und manuell gesetzten Jira-Flags',
          'Stellt sicher, dass manuell gesetzte Flags niemals automatisch entfernt werden',
        ],
      },
    ],
    notStoredTitle: 'Keine Speicherung personenbezogener Nutzerdaten',
    notStoredText:
      'Blocker Indicator for Jira speichert KEINE personenbezogenen Nutzerdaten: keine Benutzernamen, keine E-Mail-Adressen, keine Atlassian Account-IDs, keine Kommentare und keine Ticket-Texte oder Beschreibungen. Es gibt keine Nutzungsanalyse, kein externes Tracking, keine Werbe-IDs und keine Tracking-Cookies.',
    sections: [
      {
        id: 'controller',
        title: '1. Anbieter & Datenschutzkontakt',
        paragraphs: [
          `${APP_NAME} wird bereitgestellt von ${profile.company} (${profile.name}), Hamburg, Deutschland („Anbieter“, „wir“).`,
          `Bei Fragen zum Datenschutz oder zur Sicherheit erreichst du uns per E-Mail unter ${profile.email}. Innerhalb eurer Jira-Cloud-Instanz bleibt eure Organisation datenschutzrechtlich Verantwortlicher für sämtliche in Jira verarbeiteten Inhalte.`,
        ],
      },
      {
        id: 'architecture',
        title: '2. Architektur („Runs on Atlassian“) & kein externer Egress',
        paragraphs: [
          `${APP_NAME} läuft zu 100 % nativ auf Atlassian Forge (Node.js 24 Runtime und UI Kit) und ist für das Atlassian-Programm „Runs on Atlassian“ qualifiziert. Die gesamte Anwendungslogik wird ausschließlich innerhalb der von Atlassian betriebenen Cloud-Infrastruktur ausgeführt.`,
          'Sprotte Development betreibt keinen externen Backend-Server für diese App. Es gibt keine externen API-Aufrufe, keinen externen Netzwerk-Egress, keine weiteren Auftragsverarbeiter außerhalb von Atlassian, kein Tracking und keine Übermittlung oder Weitergabe von Daten an Dritte.',
        ],
      },
      {
        id: 'processing',
        title: '3. Zweck & Rechtsgrundlage der Verarbeitung',
        paragraphs: [
          'Jira-Vorgangsmetadaten (Issue-Keys, Verknüpfungen, Status, Lösungen sowie Epic-Child-Beziehungen) werden ausschließlich flüchtig im Arbeitsspeicher innerhalb von Atlassian Forge verarbeitet, um das Feld Blocked Status zu berechnen, optionale native Jira-Flags zu verwalten und das Epic-Blocker-Panel darzustellen.',
          'Rechtsgrundlage nach DSGVO ist die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) sowie das berechtigte Interesse an einer transparenten Projekt- und Abhängigkeitssteuerung (Art. 6 Abs. 1 lit. f DSGVO) im Rahmen eurer Atlassian-Cloud-Nutzung und des Atlassian Data Processing Addendum.',
        ],
      },
      {
        id: 'retention',
        title: '4. Aufbewahrung & Löschung',
        paragraphs: [
          'Konfigurationsdaten verbleiben nur so lange im Atlassian-gehosteten Forge Key-Value Storage, wie die App in eurer Jira-Cloud-Site installiert ist:',
        ],
        bullets: [
          'Änderung in der App: Administratoren können Einstellungen jederzeit ändern, Projekte deaktivieren oder projektbezogene Overrides entfernen.',
          'Deinstallation der App: Wird Blocker Indicator for Jira von einem Jira-Site-Administrator deinstalliert, löscht Atlassian sämtliche Daten im Forge Key-Value Storage gemäß den geltenden Atlassian-Cloud-Aufbewahrungsrichtlinien.',
          'Issue Properties: Die nicht personenbezogene Property jira-blocker-indicator.flag-managed (Boolean + Zeitstempel) liegt direkt am jeweiligen Jira-Issue innerhalb eurer Jira-Cloud-Site und wird entfernt, sobald das App-verwaltete Flag wieder aufgehoben oder der Vorgang gelöscht wird.',
        ],
      },
      {
        id: 'security',
        title: '5. Datensicherheit, Berechtigungen & Data Residency',
        paragraphs: [
          'Da Blocker Indicator for Jira ohne externe Infrastruktur und ohne externen Egress betrieben wird, werden Transport- und Speicherverschlüsselung, Mandantentrennung, Authentifizierung und Data Residency direkt durch Atlassian Cloud und Atlassian Forge gemäß eurem Jira-Cloud-Tarif gewährleistet.',
          'Das Epic-Blocker-Panel liest Vorgänge im Kontext des angemeldeten Users, sodass bestehende Jira-Projekt- und Vorgangsberechtigungen jederzeit eingehalten werden.',
        ],
      },
      {
        id: 'rights',
        title: '6. Betroffenenrechte (DSGVO)',
        paragraphs: [
          'Betroffene Personen haben nach der DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch sowie ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde.',
          `Blocker Indicator for Jira speichert keine personenbezogenen Nutzerdaten, und Sprotte Development hat keinen Zugriff auf Daten innerhalb eurer Jira-Cloud-Instanz. Anfragen zu Jira-Vorgangsdaten werden unmittelbar über euren Jira-Site-Administrator bearbeitet. Bei Fragen zu dieser Datenschutzerklärung wende dich jederzeit per E-Mail an ${profile.email}.`,
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
    intro: `Diese Nutzungsbedingungen einschließlich Endbenutzer-Lizenzvertrag („Bedingungen“) regeln die Installation und Nutzung von ${APP_NAME} („App“), einer Jira-Cloud-Anwendung von ${profile.company} (${profile.name}) („Anbieter“, „wir“). Durch die Installation, Evaluierung oder Nutzung der App über den Atlassian Marketplace stimmst du diesen Bedingungen für dich bzw. deine Organisation zu.`,
    sections: [
      {
        id: 'license',
        title: '1. Lizenzumfang & Paid via Atlassian Marketplace',
        paragraphs: [
          'Vorbehaltlich der Einhaltung dieser Bedingungen sowie der jeweils geltenden Atlassian Marketplace Terms of Use gewähren wir dir ein nicht-exklusives, nicht übertragbares, nicht unterlizenzierbares und widerrufliches Recht zur Installation und Nutzung der App in deinen lizenzierten Atlassian-Jira-Cloud-Instanzen für interne Geschäftszwecke.',
          `${APP_NAME} wird als „Paid via Atlassian“-App über den Atlassian Marketplace angeboten. Kostenlose Testphasen, Benutzerstufen, Abrechnung, Verlängerungen, Kündigungen und etwaige Erstattungen erfolgen ausschließlich über den Atlassian Marketplace gemäß den Bedingungen von Atlassian.`,
        ],
      },
      {
        id: 'acceptable-use',
        title: '2. Zulässige Nutzung & Beschränkungen',
        paragraphs: [
          'Du bist selbst verantwortlich für die Konfiguration von Link-Typen, Erledigt-Regeln, Projekt-Overrides und Jira-Bildschirmen (etwa das Hinterlegen des Flagged-Felds auf dem Edit-Screen bei aktiviertem automatischem Flagging) in deiner Jira-Cloud-Instanz. Unzulässig sind insbesondere:',
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
          `${APP_NAME} läuft zu 100 % nativ auf der Atlassian-Forge-Plattform in Atlassian Cloud. Verfügbarkeit, Betriebszeiten, Trigger-Ausführung, Batch-Sync-Limits und Speicherinfrastruktur hängen daher von Atlassian Cloud und den Atlassian-Forge-Diensten ab.`,
          'Wir sind bemüht, die App zuverlässig und kompatibel zu Jira-Cloud-Updates bereitzustellen, garantieren jedoch keine unterbrechungsfreie Verfügbarkeit und haften nicht für Ausfälle, Rate-Limits oder API-Änderungen seitens Atlassian Cloud oder Jira.',
        ],
      },
      {
        id: 'privacy',
        title: '4. Datenschutz',
        paragraphs: [
          'Alle durch die App verarbeiteten und gespeicherten Daten verbleiben vollständig innerhalb von Atlassian Cloud (Atlassian-gehostetes Forge Key-Value Storage sowie Jira Issue Properties). Sprotte Development betreibt keine externen Server für die App, speichert keine personenbezogenen Nutzerdaten und hat keinen Zugriff auf deine Jira-Mandantendaten.',
          'Einzelheiten zu Berechtigungen, gespeicherten Konfigurationsdaten, Aufbewahrung, Löschung und DSGVO ergeben sich aus unserer Datenschutzerklärung, die Bestandteil dieser Bedingungen ist.',
        ],
      },
      {
        id: 'ip',
        title: '5. Geistiges Eigentum',
        paragraphs: [
          `Sämtliche Rechte an ${APP_NAME}, einschließlich Quellcode, Gestaltung und Dokumentation, verbleiben bei ${profile.company}. Alle Rechte an deinen Jira-Vorgängen, Verknüpfungen, Konfigurationen und Projektdaten verbleiben vollständig bei dir bzw. deiner Organisation.`,
        ],
      },
      {
        id: 'support',
        title: '6. Support & Updates',
        paragraphs: [
          `Für Support-Anfragen, Fehlerberichte und Feature-Wünsche erreichst du uns per E-Mail unter ${profile.email} oder über unsere Support-Seite. Support erfolgt nach bestem Bemühen per E-Mail (in der Regel mit Antwort innerhalb eines Werktags). Updates, Fehlerbehebungen und Weiterentwicklungen können über den Atlassian Marketplace bzw. Atlassian Forge bereitgestellt werden.`,
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
          'Diese Bedingungen gelten für die Dauer der Installation der App in deiner Jira-Cloud-Instanz bzw. eines aktiven Abonnements im Atlassian Marketplace. Du kannst die Nutzung jederzeit beenden, indem du die App in Jira Cloud deinstallierst und dein Abonnement über den Atlassian Marketplace kündigst.',
          'Bei schwerwiegenden Verstößen gegen diese Bedingungen können wir die Lizenz beenden oder den Betrieb der App einstellen. Nach Deinstallation werden gespeicherte Forge-Key-Value-Storage-Daten durch Atlassian gemäß den Atlassian-Cloud-Aufbewahrungsrichtlinien gelöscht.',
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

const copies: Record<Locale, BlockerIndicatorCopy> = { en, de };

export function getBlockerIndicatorCopy(locale: Locale): BlockerIndicatorCopy {
  return copies[locale];
}

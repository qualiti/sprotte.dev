import { profile, type ProjectId } from '@/app/content';

type ProjectCopy = { tagline: string; description: string };
type Experience = { title: string; company: string; period: string; description: string };

export const en = {
  meta: {
    title: 'sprotte.dev | Software Engineer',
    description: `${profile.name} - Full Stack Software Engineer from Hamburg, Germany. Web applications, automations and integrations.`,
    ogLocale: 'en_US',
  },
  languageSwitch: 'Choose language',
  nav: {
    label: 'Main',
    work: 'Work',
    process: 'Process',
    experience: 'Experience',
    faq: 'FAQ',
  },
  startProject: 'Start a project',
  hero: {
    role: 'Full Stack Engineer',
    title: 'Web software that just works.',
    subtitle: 'Built by a full stack engineer in Hamburg.',
    intro: `I build web apps, automations and integrations for small teams and founders, from first idea to launch. Writing TypeScript and React since ${profile.since}.`,
    seeWork: 'See my work',
    availability: 'Open to new projects · replies within a day',
    featured: 'Live project',
    visit: (host: string) => `Visit ${host}`,
    visitNewTab: (name: string) => `Visit ${name} (opens in a new tab)`,
  },
  stack: {
    label: 'Tech stack',
    title: 'My everyday stack',
  },
  work: {
    eyebrow: 'Selected work',
    title: "Things I've built",
    text: 'Client platforms, my own products and the community project where it all started.',
    privateProject: 'private client project',
    imageAlt: (name: string) => `${name} illustration`,
    projects: {
      'seo-content-generator': {
        tagline: 'Content automation platform for a client',
        description:
          'A full-stack SEO content automation platform built for a client that streamlines the creation and publishing of SEO-optimized content at scale. It features a pipeline of background workers that scrape source URLs, generate content using AI models from OpenAI, Anthropic, and Google, produce images, and publish directly to WordPress and Shopify.',
      },
      spotfinder: {
        tagline: 'Find work-friendly cafés in your city',
        description:
          'A platform designed to help users find the perfect café or workspace in their city. It allows users to search, review, and share details about cafés, coworking spaces, and other work-friendly spots, with location-based search, user-generated reviews and interactive maps.',
      },
      'billbee-sendcloud-adapter': {
        tagline: 'Automated shipping labels for Bettergy',
        description:
          'Integrated the Sendcloud API with Billbee to automate the creation of shipping labels for orders, streamlining the fulfillment process and improving efficiency and customer satisfaction. Developed at the request of Bettergy to simplify shipping for their business customers.',
      },
      lumiverse: {
        tagline: 'Multiplayer gaming community, thousands of players',
        description:
          'A community built around Multi Theft Auto, the multiplayer extension of GTA: San Andreas. Together with a team of developers I created custom game modes in one sandbox, and later took over as Head of Development. At its peak, several hundred players were online at the same time.',
      },
    } satisfies Record<ProjectId, ProjectCopy>,
  },
  process: {
    eyebrow: 'How I work',
    title: 'Simple, from first message to launch',
    step: (n: number) => `Step ${n}`,
    /** Same order as the icons in the page: talk, build, launch. */
    steps: [
      {
        title: 'Talk',
        text: 'We start with a short call or a few messages. You explain the problem, I ask questions and suggest a realistic scope.',
      },
      {
        title: 'Build',
        text: 'I build in small steps and share progress regularly, so you see working software early and can steer along the way.',
      },
      {
        title: 'Launch & support',
        text: 'I take care of deployment and stay around after launch for fixes, improvements and questions.',
      },
    ],
  },
  about: {
    eyebrow: 'Experience',
    title: 'A bit about me',
    bio: "Hi there! I'm Tony. My passion for creating software began in my early youth, and I've been honing my skills ever since. I have a particular love for building web applications, with a strong focus on Full Stack architecture.",
    intro:
      'By day, I work full-time at Geno Digital Solutions GmbH, and in my free time, I dive into side projects under my own company, Sprotte Development.',
    experiences: [
      {
        title: 'Full Stack Software Engineer',
        company: 'Geno Digital Solutions GmbH',
        period: '2026 – Present',
        description:
          'Building automation solutions for cooperative banks that combine AI and robotic process automation to streamline core banking processes such as mortgage production, loan disbursement and garnishment processing, delivered as a service to more than 100 banks.',
      },
      {
        title: 'Owner & Developer',
        company: 'Sprotte Development',
        period: '2024 – Present',
        description:
          'Founded and run Sprotte Development, building products like spotfinder and client projects end-to-end, from ideation and design to implementation and deployment.',
      },
      {
        title: 'Full Stack Software Engineer',
        company: 'data experts gmbh',
        period: '2020 – 2026',
        description:
          'Developed web applications for funding management in agriculture, designing scalable back-end services and intuitive front-ends for government agencies and agricultural stakeholders.',
      },
      {
        title: 'B.Sc. Applied Computer Science',
        company: 'Nordakademie University of Applied Sciences',
        period: '2020 – 2024',
        description:
          'Dual study program focused on Software Engineering, working as a developer at data experts gmbh alongside my studies.',
      },
    ] satisfies Experience[],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Good questions',
    items: [
      {
        q: 'Do you work with small businesses?',
        a: 'Yes. Most of my own projects are for small teams and founders. We can start small, with a single feature or a prototype, and grow from there.',
      },
      {
        q: 'How quickly do you reply?',
        a: "Usually within a day on weekdays. Since I also work full-time, project work happens on a planned schedule, and I'll tell you upfront which timeline is realistic.",
      },
      {
        q: 'Can you take over an existing project?',
        a: "Often, yes. I'll first go through the codebase and give you an honest picture of its state and what it would take to move forward.",
      },
      {
        q: 'What does a project cost?',
        a: 'That depends on the scope. After a first conversation you get a clear estimate before any work starts, with no obligation.',
      },
    ],
  },
  contact: {
    title: "Have a project in mind? Let's talk it through.",
    text: 'Answer a few quick questions in the chat and your email is ready to send. No forms, no pressure.',
    location: 'Based in Hamburg, Germany · usually replies within a day',
  },
  footer: {
    location: 'Hamburg, Germany',
  },
};

export type Dictionary = typeof en;

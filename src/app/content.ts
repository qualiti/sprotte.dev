// Site content: profile, services, projects and experience.

export const profile = {
  name: 'Tony David Sprotte',
  displayName: 'Tony Sprotte',
  firstName: 'Tony',
  role: 'Full Stack Software Engineer',
  location: 'Hamburg, Germany',
  since: 2020,
  email: 'tony@sprotte.dev',
  linkedin: 'https://www.linkedin.com/in/tony-david-sprotte-6555a11a5/',
  github: 'https://github.com/qualiti',
  company: 'Sprotte Development',
  /** Square face crop of the portrait, used for every avatar. */
  avatar: '/avatar.jpg',
  replyTime: 'within a day',
  intro:
    'By day, I work full-time at Geno Digital Solutions GmbH, and in my free time, I dive into side projects under my own company, Sprotte Development.',
  bio: "Hi there! I'm Tony. My passion for creating software began in my early youth, and I've been honing my skills ever since. I have a particular love for building web applications, with a strong focus on Full Stack architecture.",
  stack: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Tailwind', 'Remix'],
};

/** What visitors can ask for in the contact chat. */
export const services = [
  'Web applications',
  'Automation & AI',
  'API integrations',
  'Technical advice',
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  /** Real product screenshot, for places that show the project inside a browser frame. */
  screenshot?: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: 'SEO Content Generator',
    tagline: 'Content automation platform for a client',
    description:
      'A full-stack SEO content automation platform built for a client that streamlines the creation and publishing of SEO-optimized content at scale. It features a pipeline of background workers that scrape source URLs, generate content using AI models from OpenAI, Anthropic, and Google, produce images, and publish directly to WordPress and Shopify.',
    image: '/projects/seo-content-generator.jpg',
    stack: ['React 19', 'TanStack Router', 'Elysia', 'PostgreSQL', 'Drizzle', 'BullMQ'],
  },
  {
    name: 'spotfinder.work',
    tagline: 'Find work-friendly cafés in your city',
    description:
      'A platform designed to help users find the perfect café or workspace in their city. It allows users to search, review, and share details about cafés, coworking spaces, and other work-friendly spots, with location-based search, user-generated reviews and interactive maps.',
    image: '/projects/spotfinder.jpg',
    screenshot: '/projects/spotfinder-screenshot.jpg',
    stack: ['React', 'TypeScript', 'Remix', 'Tailwind', 'Redis', 'PostgreSQL'],
    link: 'https://spotfinder.work',
  },
  {
    name: 'Billbee-Sendcloud-Adapter',
    tagline: 'Automated shipping labels for Bettergy',
    description:
      'Integrated the Sendcloud API with Billbee to automate the creation of shipping labels for orders, streamlining the fulfillment process and improving efficiency and customer satisfaction. Developed at the request of Bettergy to simplify shipping for their business customers.',
    image: '/projects/billbee-sendcloud-adapter.jpg',
    stack: ['Deno', 'TypeScript'],
  },
  {
    name: 'Lumiverse',
    tagline: 'Multiplayer gaming community, thousands of players',
    description:
      'A community built around Multi Theft Auto, the multiplayer extension of GTA: San Andreas. Together with a team of developers I created custom game modes in one sandbox, and later took over as Head of Development. At its peak, several hundred players were online at the same time.',
    image: '/projects/lumiverse.jpg',
    stack: ['Lua', 'PHP', 'React', 'MySQL'],
    link: 'https://www.youtube.com/@lumiverse4597',
  },
];

export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
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
];

/** Builds a mailto: link, optionally with a prefilled subject and body. */
export function mailto(subject?: string, body = '') {
  if (!subject) return `mailto:${profile.email}`;
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  return `mailto:${profile.email}?${params.toString().replace(/\+/g, '%20')}`;
}

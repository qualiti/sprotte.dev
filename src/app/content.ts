// Language-neutral site data: profile, links and project facts.
// Everything visitors read as prose lives in the dictionaries under src/i18n.

export const profile = {
  name: 'Tony David Sprotte',
  displayName: 'Tony Sprotte',
  firstName: 'Tony',
  since: 2020,
  email: 'tony@sprotte.dev',
  linkedin: 'https://www.linkedin.com/in/tony-david-sprotte-6555a11a5/',
  github: 'https://github.com/qualiti',
  company: 'Sprotte Development',
  /** Square face crop of the portrait, used for every avatar. */
  avatar: '/avatar.jpg',
  stack: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Tailwind', 'Remix'],
};

export type ProjectId =
  'seo-content-generator' | 'spotfinder' | 'billbee-sendcloud-adapter' | 'lumiverse';

export type Project = {
  /** Key of the project's tagline and description in the dictionaries. */
  id: ProjectId;
  name: string;
  image: string;
  /** Real product screenshot, for places that show the project inside a browser frame. */
  screenshot?: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: 'seo-content-generator',
    name: 'SEO Content Generator',
    image: '/projects/seo-content-generator.jpg',
    stack: ['React 19', 'TanStack Router', 'Elysia', 'PostgreSQL', 'Drizzle', 'BullMQ'],
  },
  {
    id: 'spotfinder',
    name: 'spotfinder.work',
    image: '/projects/spotfinder.jpg',
    screenshot: '/projects/spotfinder-screenshot.jpg',
    stack: ['React', 'TypeScript', 'Remix', 'Tailwind', 'Redis', 'PostgreSQL'],
    link: 'https://spotfinder.work',
  },
  {
    id: 'billbee-sendcloud-adapter',
    name: 'Billbee-Sendcloud-Adapter',
    image: '/projects/billbee-sendcloud-adapter.jpg',
    stack: ['Deno', 'TypeScript'],
  },
  {
    id: 'lumiverse',
    name: 'Lumiverse',
    image: '/projects/lumiverse.jpg',
    stack: ['Lua', 'PHP', 'React', 'MySQL'],
    link: 'https://www.youtube.com/@lumiverse4597',
  },
];

/** Builds a mailto: link, optionally with a prefilled subject and body. */
export function mailto(subject?: string, body = '') {
  if (!subject) return `mailto:${profile.email}`;
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  return `mailto:${profile.email}?${params.toString().replace(/\+/g, '%20')}`;
}

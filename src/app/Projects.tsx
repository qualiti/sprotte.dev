'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'SEO Content Generator',
    description:
      'A full-stack SEO content automation platform built for a client that streamlines the creation and publishing of SEO-optimized content at scale. It features a pipeline of background workers that scrape source URLs, generate content using AI models from OpenAI, Anthropic, and Google, produce images, and publish directly to WordPress and Shopify. Built as a Turborepo monorepo, the technology stack includes React 19, TanStack Router, Elysia, PostgreSQL with Drizzle ORM, Redis, and BullMQ for job queue management.',
    image: '/seo-content-generator.png',
  },
  {
    name: 'spotfinder.work',
    description:
      'Spotfinder.work is a platform designed to help users find the perfect café or workspace in their city. It allows users to search, review, and share details about cafés, coworking spaces, and other work-friendly spots. With features like location-based search, user-generated reviews, and interactive maps, Spotfinder aims to connect remote workers with ideal workspaces, fostering a vibrant online community. The technology stack includes React, TypeScript, Remix, Tailwind, Redis and PostgreSQL.',
    image: '/spotfinder.png',
    link: 'https://spotfinder.work',
  },
  {
    name: 'Billbee-Sendcloud-Adapter',
    description:
      'The Billbee-Sendcloud-Adapter integrated the Sendcloud API with Billbee to automate the creation of shipping labels for orders, streamlining the fulfillment process and improving efficiency and customer satisfaction. Developed at the request of Bettergy, this solution aimed to simplify the shipping process for their business customers. The project utilized Deno and TypeScript as part of the technology stack.',
    image: '/billbee-sendcloud-adapter.png',
  },
  {
    name: 'Lumiverse',
    description:
      "Lumiverse was a community built around the Multiplayer extension of Grand Theft Auto: San Andreas, Multi Theft Auto (MTA). Alongside a talented team of developers, I created custom scripts for the MTA sandbox environment, allowing users to enjoy various game modes without needing to switch servers. At its peak, the community boasted thousands of users, with several hundred actively playing at the same time. After the previous Head of Development left, I took over the role, overseeing the project's continued growth. The technology stack included Lua, PHP, React, and MySQL.",
    image: '/lumiverse.png',
    link: 'https://www.youtube.com/@lumiverse4597',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden bg-brand-dark border-t border-brand-gray"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gray/20 via-brand-dark to-brand-dark -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 flex justify-between items-end border-b border-brand-gray pb-6"
        >
          <h2 className="font-display text-5xl md:text-8xl uppercase leading-none m-0">
            <span className="text-brand-orange text-3xl align-top mr-2 block md:inline">02</span>
            Engineered <span className="text-outline-white">Systems</span>
          </h2>
          <span className="font-mono text-xs uppercase tracking-widest text-brand-orange hidden md:block">
            Projects & Work
          </span>
        </motion.div>

        <div className="flex flex-col space-y-32">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              key={project.name}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 relative aspect-video border border-brand-gray overflow-hidden">
                <div className="absolute inset-0 bg-brand-orange mix-blend-color z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-in-out"
                />

                {/* Tech overlay pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjEiPjwvcGF0aD4KPC9zdmc+')] pointer-events-none opacity-30 z-10 mix-blend-overlay"></div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <span className="font-mono text-xs text-brand-orange mb-4 block">
                  {'// PRJ_'}
                  {String(index + 1).padStart(3, '0')}
                </span>
                <h3 className="font-display text-4xl md:text-5xl uppercase mb-6 leading-tight group-hover:text-brand-orange transition-colors duration-300">
                  {project.name}
                </h3>

                <div className="relative pl-6 border-l border-brand-orange">
                  <p className="font-mono text-sm text-brand-light/70 leading-relaxed text-justify mb-8">
                    {project.description}
                  </p>
                </div>

                {project.link ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="font-mono text-sm uppercase tracking-widest border border-brand-light px-8 py-4 inline-flex items-center gap-4 w-fit hover:bg-brand-light hover:text-brand-dark transition-all duration-300 group/btn"
                  >
                    Launch Sequence
                    <span className="bg-brand-orange w-2 h-2 rounded-full group-hover/btn:animate-ping"></span>
                  </Link>
                ) : (
                  <div className="font-mono text-sm uppercase tracking-widest border border-brand-gray text-brand-gray px-8 py-4 inline-flex items-center gap-4 w-fit cursor-not-allowed">
                    Internal System
                    <span className="bg-brand-gray w-2 h-2"></span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

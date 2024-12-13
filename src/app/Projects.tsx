import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    name: 'spotfinder.work',
    description:
      'Spotfinder.work is a platform designed to help users find the perfect café or workspace in their city. It allows users to search, review, and share details about cafés, coworking spaces, and other work-friendly spots. With features like location-based search, user-generated reviews, and interactive maps, Spotfinder aims to connect remote workers with ideal workspaces, fostering a vibrant online community. The technology stack includes React, TypeScript, Remix, Tailwind, Redis and PostgreSQL.',
    image: '/spotfinder.png',
    link: 'https://spotfinder.work',
  },
  // {
  //   name: 'Allie',
  //   description:
  //     'A SaaS offering with an AI-powered API for business intelligence, featuring subscription plans and quotas for API access.',
  //   image: 'https://placehold.co/300x200',
  //   link: 'https://allie-ai.com',
  // },
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
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={700}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4 text-justify">{project.description}</p>
                {project.link && (
                  <Link
                    href={project.link}
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    View Project
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

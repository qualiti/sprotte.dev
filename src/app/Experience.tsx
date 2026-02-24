'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Owner & Developer',
    company: 'Sprotte Development',
    period: '2024 - Present',
    description:
      'Founded and manage Sprotte Development, focusing on building innovative projects such as spotfinder, a platform for finding work-friendly cafes. Oversee end-to-end development, from ideation and design to implementation and deployment, leveraging modern web technologies to deliver impactful solutions. The technology stack includes React, TypeScript, Remix, Next.js, Tailwind and PostgreSQL.',
  },
  {
    title: 'Full Stack Software Engineer',
    company: 'data experts gmbh',
    period: '2020 - Present',
    description:
      'Developed and maintained web applications for funding management in agriculture, enabling efficient processing subsidy applications. Designed scalable back-end services and intuitive front-end interfaces, optimizing workflows for government agencies and agricultural stakeholders. The technology stack includes React, TypeScript, Spring Boot and PostgreSQL.',
  },
  {
    title: 'Student',
    company: 'Nordakademie University of Applied Sciences',
    period: '2020 - 2024',
    description:
      'Studied Applied Computer Science with a focus on Software Engineering in a Dual Study Program. I have graduated with a Bachelor of Science in Computer Science. Throughout the dual study program, I worked as a software developer at data experts gmbh and gained valuable experience in the industry.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-brand-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 pb-6 flex items-end justify-between border-b border-brand-gray"
        >
          <h2 className="font-display text-5xl md:text-8xl uppercase leading-none m-0">
            <span className="text-brand-orange text-3xl align-top mr-2 block md:inline">03</span>
            Operation <span className="text-outline-white">History</span>
          </h2>
          <span className="font-mono text-xs uppercase tracking-widest text-brand-orange hidden md:block">
            Career Timeline
          </span>
        </motion.div>

        <div className="relative border-l border-brand-gray ml-2 md:ml-4 lg:ml-8">
          {experiences.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="mb-16 last:mb-0 relative pl-8 md:pl-16 group"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[5px] top-2 w-2 h-2 bg-brand-dark border-2 border-brand-orange rounded-full group-hover:scale-150 group-hover:bg-brand-orange transition-all duration-300"></div>
              <div className="absolute -left-[30px] top-[14px] w-[30px] h-px bg-brand-gray group-hover:bg-brand-orange transition-colors duration-300"></div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start">
                {/* Meta Information */}
                <div className="md:w-1/3 flex flex-col pt-1">
                  <div className="font-mono text-sm text-brand-orange uppercase tracking-wider mb-2">
                    {exp.period}
                  </div>
                  <h3 className="font-display text-3xl uppercase leading-none text-brand-light mb-1">
                    {exp.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-brand-gray">
                    @ {exp.company}
                  </p>
                </div>

                {/* Content */}
                <div className="md:w-2/3 bg-brand-gray/10 border border-brand-gray/30 p-6 md:p-8 hover:border-brand-orange/50 transition-colors duration-300">
                  <p className="font-mono text-sm text-brand-light/80 leading-relaxed text-justify">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

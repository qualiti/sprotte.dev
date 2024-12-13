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
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row">
              <div className="md:w-1/4">
                <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
              <div className="md:w-3/4 mt-2 md:mt-0">
                <p className="text-gray-600 text-justify">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

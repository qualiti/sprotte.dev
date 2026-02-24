'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-40 pb-20 flex flex-col justify-center overflow-hidden relative"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Massive Typography Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="font-display text-[15vw] leading-[0.8] tracking-tighter uppercase text-brand-light mix-blend-difference mb-4">
            Full<span className="text-brand-orange">Stack</span>
            <br />
            <span className="text-outline-white text-transparent">Developer</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between border-t border-brand-gray pt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-brand-orange max-w-xs">
              Based in Hamburg, Germany. Engineering scalable solutions since 2020.
            </p>
            <p className="font-mono text-sm max-w-lg text-brand-light/70 text-justify">
              By day, I work full-time at data experts gmbh, and in my free time, I dive into side
              projects under my own company, Sprotte Development.
            </p>
          </div>
        </motion.div>

        {/* Detailed About section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute inset-0 bg-brand-orange translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 -z-10"></div>
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image
                src="/me.png"
                alt="Tony David Sprotte"
                fill
                className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-brand-dark p-4 border border-brand-gray font-mono text-xs uppercase">
              <span className="text-brand-orange block mb-1">{'// SYSTEM_STATUS'}</span>
              ONLINE_AND_BUILDING
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-12"
          >
            <h2 className="font-display text-5xl md:text-7xl uppercase mb-8 border-b border-brand-gray pb-4">
              <span className="text-brand-orange text-3xl align-top mr-2">01</span>
              System <span className="text-outline-white">Profile</span>
            </h2>

            <div className="space-y-6 font-mono text-sm md:text-base text-brand-light/80 leading-relaxed text-justify">
              <p>
                Hi there! I&apos;m Tony. My passion for creating software began in my early youth,
                and I&apos;ve been honing my skills ever since. I have a particular love for
                building web applications, with a strong focus on Full Stack architecture.
              </p>
              <p>
                My favorite tech stack revolves around{' '}
                <span className="text-brand-orange">TypeScript</span> and{' '}
                <span className="text-brand-light bg-brand-gray px-2 py-1">React</span>, and
                I&apos;ve recently been deep-diving into modern frameworks like TanStack Start and
                Next.js to expand my engineering capabilities.
              </p>
              <p>
                It&apos;s exciting to turn complex ideas into robust, production-ready reality,
                constantly learning and pushing technical boundaries along the way.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wider">
              {['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Tailwind', 'Remix'].map((tech) => (
                <span
                  key={tech}
                  className="border border-brand-gray px-4 py-2 hover:bg-brand-orange hover:text-brand-dark hover:border-brand-orange transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

'use client';
import { Github, LinkedinIcon, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-brand-dark border-t border-brand-gray relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="border border-brand-orange bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-orange/5 via-brand-dark to-brand-dark p-8 md:p-16 lg:p-24 relative"
        >
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-brand-orange"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-brand-orange"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-brand-orange"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-brand-orange"></div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="lg:w-1/2">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-orange mb-4 block">
                {'// INITIATE_CONNECTION'}
              </span>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-none mb-8">
                Establish <br />
                <span className="text-outline-white">Link</span>
              </h2>
              <p className="font-mono text-sm text-brand-light/70 max-w-md leading-relaxed">
                Currently open to new opportunities, collaborations, and interesting technical
                challenges. Drop a message to initialize communication.
              </p>
            </div>

            <div className="lg:w-1/2 flex flex-col gap-6 w-full">
              <a
                href="mailto:tony@sprotte.dev"
                className="group flex items-center justify-between border border-brand-gray bg-brand-dark p-6 hover:border-brand-orange transition-all duration-300 w-full"
              >
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-brand-orange group-hover:animate-bounce" />
                  <span className="font-mono text-sm md:text-lg uppercase text-brand-light group-hover:text-brand-orange transition-colors duration-300">
                    tony@sprotte.dev
                  </span>
                </div>
                <span className="font-mono text-xs text-brand-gray group-hover:text-brand-orange">
                  [SEND_MAIL]
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/tony-david-sprotte-6555a11a5/"
                target="_blank"
                className="group flex items-center justify-between border border-brand-gray bg-brand-dark p-6 hover:border-brand-orange transition-all duration-300 w-full"
              >
                <div className="flex items-center gap-4">
                  <LinkedinIcon className="w-6 h-6 text-brand-orange group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-mono text-sm md:text-lg uppercase text-brand-light group-hover:text-brand-orange transition-colors duration-300">
                    LinkedIn
                  </span>
                </div>
                <span className="font-mono text-xs text-brand-gray group-hover:text-brand-orange">
                  [CONNECT]
                </span>
              </a>

              <a
                href="https://github.com/qualiti"
                target="_blank"
                className="group flex items-center justify-between border border-brand-gray bg-brand-dark p-6 hover:border-brand-orange transition-all duration-300 w-full"
              >
                <div className="flex items-center gap-4">
                  <Github className="w-6 h-6 text-brand-orange group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-mono text-sm md:text-lg uppercase text-brand-light group-hover:text-brand-orange transition-colors duration-300">
                    GitHub
                  </span>
                </div>
                <span className="font-mono text-xs text-brand-gray group-hover:text-brand-orange">
                  [VIEW_CODE]
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

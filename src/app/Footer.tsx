import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-light border-t border-brand-gray py-8">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
          <p className="font-mono text-xs uppercase text-brand-light/60 tracking-widest">
            &copy; {new Date().getFullYear()} Sprotte Development.
          </p>
          <span className="font-mono text-xs uppercase text-brand-orange tracking-widest">
            SYS_v0.1.0_STABLE
          </span>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://linkedin.com/in/tony-david-sprotte-6555a11a5"
            className="text-brand-light/60 hover:text-brand-orange transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://github.com/qualiti"
            className="text-brand-light/60 hover:text-brand-orange transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
